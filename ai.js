/* ai.js - a small rule-based maths tutor that answers student questions offline.
   No internet or API key needed; it understands common maths questions and
   general "explain this topic" requests. */
(function (global) {
  "use strict";

  var WORD_NUMBERS = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
    eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12
  };

  /* ---------- helpers ---------- */
  function num(token) {
    if (token === undefined) return NaN;
    var t = String(token).toLowerCase();
    if (Object.prototype.hasOwnProperty.call(WORD_NUMBERS, t)) return WORD_NUMBERS[t];
    return parseFloat(t);
  }

  function clean(n) {
    if (!isFinite(n)) return String(n);
    return Math.round(n * 1e6) / 1e6;
  }

  var GREETINGS = /^(hi|hello|hey|hii|namaste|good (morning|evening|afternoon))\b/i;
  var THANKS = /(thank|thanks|shukriya)/i;
  var WHOAMI = /(who are you|your name|what are you)/i;

  /* ---------- arithmetic engine ---------- */
  function tryArithmetic(text) {
    var t = text.toLowerCase()
      .replace(/what is|whats|what's|calculate|solve|answer|please|=|\?/g, " ")
      .replace(/plus|add|sum of/g, "+")
      .replace(/minus|subtract|take away|less/g, "-")
      .replace(/times|multiplied by|multiply by|into|x/g, "*")
      .replace(/divided by|divide by|share|over/g, "/")
      .replace(/[^0-9+\-*/().\s]/g, " ")
      .replace(/\s+/g, " ");

    // needs at least two numbers and an operator
    if (!/[+\-*/]/.test(t) || !/\d/.test(t)) return null;
    if ((t.match(/\d+(\.\d+)?/g) || []).length < 2) return null;

    var expression = t.trim();
    // only allow safe characters
    if (!/^[\d\s+\-*/().]+$/.test(expression)) return null;
    // require the expression to be a complete valid sentence of numbers/operators
    if (/[+\-*/(]\s*$/.test(expression)) return null;

    var value;
    try {
      value = Function('"use strict";return (' + expression + ');')();
    } catch (e) {
      return null;
    }
    if (typeof value !== "number" || !isFinite(value)) return null;

    var shown = expression.replace(/\*/g, " × ").replace(/\//g, " ÷ ").replace(/\s+/g, "").trim();
    return shown + " = " + clean(value);
  }

  /* ---------- percentage: "20% of 150" ---------- */
  function tryPercent(text) {
    var m = text.match(/(\d+(?:\.\d+)?)\s*(?:%|percent|per cent)\s*(?:of)?\s*(\d+(?:\.\d+)?)/i);
    if (!m) return null;
    var p = parseFloat(m[1]), base = parseFloat(m[2]);
    var answer = clean((p / 100) * base);
    return p + "% of " + base + " = " + answer;
  }

  /* ---------- tables: "table of 7" or "7 times 8" ---------- */
  function tryTable(text) {
    var m = text.match(/table\s*(?:of)?\s*(\d{1,2})/i);
    if (!m) return null;
    var n = parseInt(m[1], 10);
    if (n < 1 || n > 20) return null;
    var lines = [];
    for (var i = 1; i <= 10; i++) lines.push(n + " Ã— " + i + " = " + (n * i));
    return "Table of " + n + ":\n" + lines.join("\n");
  }

  /* ---------- topic knowledge base ---------- */
  var TOPICS = [
    { key: "addition", keywords: ["add", "addition", "plus", "sum"], answer:
      "Addition means putting groups together.\n\nExample: 4 + 3 = 7 (four things and three more make seven).\nTip: Start from the bigger number and count on. For 3 + 8, start at 8 and count 3 more." },
    { key: "subtraction", keywords: ["subtract", "subtraction", "minus", "take away"], answer:
      "Subtraction means taking away.\n\nExample: 9 - 4 = 5 (nine take away four leaves five).\nTip: Subtraction is the opposite of addition, so 4 + 5 = 9 means 9 - 5 = 4." },
    { key: "multiplication", keywords: ["multiply", "multiplication", "times table", "product"], answer:
      "Multiplication is repeated addition.\n\nExample: 4 Ã— 3 means 3 + 3 + 3 + 3 = 12.\nTip: To multiply by 10, add a zero: 6 Ã— 10 = 60." },
    { key: "division", keywords: ["divide", "division", "sharing equally", "remainder"], answer:
      "Division means sharing equally into groups.\n\nExample: 12 Ã· 3 = 4 means 12 shared into 3 groups gives 4 in each.\nTip: Check with multiplication â€” 3 Ã— 4 = 12, so 12 Ã· 3 = 4." },
    { key: "fraction", keywords: ["fraction", "fractions", "half", "quarter", "numerator", "denominator"], answer:
      "A fraction shows part of a whole.\n\nTop number (numerator) = how many parts we take.\nBottom number (denominator) = how many equal parts in total.\n\nExample: 3/4 means 3 parts out of 4.\nTip: 1/2 of 10 is 5, and 1/4 of 8 is 2." },
    { key: "decimal", keywords: ["decimal", "decimals", "point"], answer:
      "A decimal shows parts smaller than one using a decimal point.\n\nIn 4.76: 4 ones, 7 tenths, 6 hundredths.\n1/10 = 0.1 and 1/100 = 0.01.\nTip: When adding decimals, always line up the decimal points." },
    { key: "percentage", keywords: ["percent", "percentage", "%"], answer:
      "Per cent means 'out of 100'.\n\n50% = 1/2, 25% = 1/4, 10% = 1/10.\nExample: 20% of 150 = 30.\nTip: For 10% just divide by 10, then double it for 20%." },
    { key: "placevalue", keywords: ["place value", "place", "hundreds", "thousands", "lakh"], answer:
      "Place value tells us what each digit is worth.\n\nIn 352: 3 hundreds, 5 tens, 2 ones = 300 + 50 + 2.\nIn 4,726: 4 thousands, 7 hundreds, 2 tens, 6 ones.\nTip: Read from left to right â€” the biggest place comes first." },
    { key: "shape", keywords: ["shape", "shapes", "circle", "square", "triangle", "rectangle", "cube", "cuboid"], answer:
      "Shapes can be flat (2D) or solid (3D).\n\nFlat: circle (0 corners), triangle (3 sides), square (4 equal sides), rectangle (4 sides).\nSolid: cube has 6 faces, 12 edges, 8 corners.\nTip: Count the sides and corners to name a shape." },
    { key: "angle", keywords: ["angle", "angles", "right angle", "degrees", "acute", "obtuse"], answer:
      "Angles are formed where two lines meet, measured in degrees.\n\nRight angle = 90Â°, straight line = 180Â°, full turn = 360Â°.\nAcute is less than 90Â°, obtuse is between 90Â° and 180Â°.\nTip: The corner of a page is a right angle." },
    { key: "area", keywords: ["area", "perimeter"], answer:
      "Perimeter = distance all around a shape (add the sides).\nArea = space inside the shape.\n\nRectangle: perimeter = 2 Ã— (length + width), area = length Ã— width.\nExample: 5 cm Ã— 3 cm â†’ perimeter 16 cm, area 15 cmÂ²." },
    { key: "volume", keywords: ["volume", "capacity", "litre", "ubic"], answer:
      "Volume is the space a solid takes up, measured in cubic units.\n\nVolume of a cuboid = length Ã— breadth Ã— height.\nExample: 4 Ã— 3 Ã— 2 = 24 cmÂ³.\nTip: 1000 ml = 1 litre." },
    { key: "money", keywords: ["money", "rupee", "rupees", "paise", "cost", "price"], answer:
      "Money is counted in rupees and paise.\n\nâ‚¹1 = 100 paise. Add or subtract money just like normal numbers.\nExample: â‚¹25 + â‚¹40 = â‚¹65." },
    { key: "interest", keywords: ["interest", "simple interest", "principal", "rate"], answer:
      "Simple Interest = (Principal Ã— Rate Ã— Time) Ã· 100.\n\nExample: â‚¹1000 at 5% for 2 years â†’ (1000 Ã— 5 Ã— 2) Ã· 100 = â‚¹100.\nTotal amount = Principal + Interest = â‚¹1100." },
    { key: "factors", keywords: ["factor", "factors", "multiple", "multiples", "hcf", "lcm"], answer:
      "Factors divide a number exactly. Multiples come from multiplying it.\n\nFactors of 12: 1, 2, 3, 4, 6, 12.\nMultiples of 12: 12, 24, 36, 48...\nHCF is the biggest common factor, LCM is the smallest common multiple." }
  ];

  function tryTopic(text) {
    var t = text.toLowerCase();
    var best = null, bestScore = 0;
    TOPICS.forEach(function (topic) {
      var score = 0;
      topic.keywords.forEach(function (word) {
        if (t.indexOf(word) !== -1) score += word.length;
      });
      if (score > bestScore) { bestScore = score; best = topic; }
    });
    return best;
  }

  /* ---------- public API ---------- */
  var AI = {
    /* Returns an answer string for the student's question. */
    ask: function (question, studentClass) {
      var text = (question || "").trim();
      if (!text) return "Type a maths question and I will help you! ðŸ˜Š";
      var lower = text.toLowerCase();

      if (GREETINGS.test(lower)) {
        return "Hello! ðŸ‘‹ I am your AI Maths Buddy. Ask me a sum like '24 + 37', a table like 'table of 7', or a topic like 'explain fractions'.";
      }
      if (THANKS.test(lower)) {
        return "You're welcome! ðŸŒŸ Keep practising â€” you are doing great.";
      }
      if (WHOAMI.test(lower)) {
        return "I am your AI Maths Buddy ðŸ¦‰. I can solve sums, teach topics and give you hints for your class " + (studentClass || "school") + " maths.";
      }

      var percent = tryPercent(lower);
      if (percent) return "**" + percent + "**\n\n" + explainPercent(lower);

      var table = tryTable(lower);
      if (table) return table;

      var arithmetic = tryArithmetic(lower);
      if (arithmetic) return "**" + arithmetic + "**\n\n" + explainOperation(lower, arithmetic);

      var topic = tryTopic(lower);
      if (topic) return topic.answer;

      return "Good question! ðŸ¤” I can help best with:\n" +
        "â€¢ Sums â€” e.g. \"15 + 27\" or \"144 Ã· 12\"\n" +
        "â€¢ Tables â€” e.g. \"table of 8\"\n" +
        "â€¢ Percentages â€” e.g. \"25% of 80\"\n" +
        "â€¢ Topics â€” e.g. \"explain fractions\", \"what is place value\", \"tell me about angles\"\n\n" +
        "Try asking one of those!";
    },

    /* Short hint for a quiz question (uses the hint field when present). */
    quizHint: function (question) {
      if (question && question.hint) return "ðŸ’¡ " + question.hint;
      return "ðŸ’¡ Read the question slowly and try taking away the extra words first.";
    },

    suggestions: function () {
      return [
        "12 + 29",
        "table of 7",
        "explain fractions",
        "25% of 80",
        "what is place value?",
        "144 Ã· 12"
      ];
    }
  };

  function explainOperation(text, arithmetic) {
    if (/\+/.test(text)) return "We add the two numbers together. Count on from the bigger number to check!";
    if (/-/.test(text)) return "We take the second number away from the first.";
    if (/\*|x|times|multipl/.test(text)) return "We multiply, which is the same as adding the first number again and again.";
    if (/\//.test(text)) return "We share the first number into equal groups.";
    return "Here is your answer!";
  }

  function explainPercent(text) {
    var m = text.match(/(\d+(?:\.\d+)?)\s*(?:%|percent|per cent)/);
    if (!m) return "";
    return "To find a percentage, first turn it into a fraction out of 100, then multiply.\n" +
           "Tip: 10% is just divide by 10, and 50% is half.";
  }

  global.AI = AI;
})(window);
