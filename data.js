/* data.js - maths curriculum: topics, lessons and quizzes for Class 1-5
   Each topic has: icon, name, desc, lesson {intro, sections[]}, and a 10-question quiz. */
(function (global) {
  "use strict";

  /* ---------- Class 1 ---------- */
  var class1 = [
    {
      id: "c1-numbers",
      icon: "1ï¸âƒ£",
      name: "Numbers 1 to 100",
      desc: "Read, count and write numbers up to 100.",
      lesson: {
        intro: "Numbers help us count things around us. Let us learn numbers from 1 all the way to 100!",
        sections: [
          { type: "h3", text: "Counting" },
          { type: "p", text: "We count like this: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10." },
          { type: "p", text: "After 19 comes 20, after 29 comes 30, and so on. We use two digits after 9." },
          { type: "p", text: "We can count in jumps too! Count in 2s: 2, 4, 6, 8, 10. Count in 5s: 5, 10, 15, 20. Count in 10s: 10, 20, 30, 40." },
          { type: "example", text: "Count the fingers on your hands: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10." },
          { type: "h3", text: "Big and small numbers" },
          { type: "p", text: "A number that comes later while counting is bigger. 8 is bigger than 3." },
          { type: "p", text: "The smallest number we use here is 1 and the largest is 100." },
          { type: "h3", text: "Ones and tens" },
          { type: "p", text: "Numbers from 1 to 9 have only ones. Numbers from 10 onwards have tens and ones." },
          { type: "p", text: "In 34, the 3 means 3 tens (30) and the 4 means 4 ones. So 34 = 30 + 4." },
          { type: "example", text: "47 = 4 tens + 7 ones = 40 + 7" },
          { type: "h3", text: "Before and after" },
          { type: "p", text: "The number just before 50 is 49. The number just after 50 is 51." },
          { type: "tip", text: "Tip: Put numbers in a line (number line). Numbers to the right are bigger, numbers to the left are smaller." }
        ]
      },
      quiz: [
        { q: "Which number comes just after 7?", options: ["6", "8", "9", "10"], answer: 1, hint: "Count forward one step from 7." },
        { q: "Which number is bigger?", options: ["4", "9", "2", "1"], answer: 1, hint: "Bigger numbers come later while counting." },
        { q: "What comes just before 40?", options: ["39", "41", "30", "50"], answer: 0, hint: "Count back one step from 40." },
        { q: "What comes after 19?", options: ["18", "20", "21", "90"], answer: 1, hint: "After 9 comes 10, and after 19 comes..." },
        { q: "Which number is the smallest?", options: ["11", "5", "15", "20"], answer: 1, hint: "Smallest means it comes first while counting." },
        { q: "Count in 2s: 2, 4, 6, ?", options: ["7", "8", "9", "10"], answer: 1, hint: "Add 2 more each time." },
        { q: "Count in 5s: 5, 10, 15, ?", options: ["16", "20", "25", "30"], answer: 1, hint: "Add 5 each time." },
        { q: "In the number 34, what does the 3 mean?", options: ["3 ones", "3 tens", "3 hundreds", "34"], answer: 1, hint: "The 3 is on the left side." },
        { q: "Count in 10s: 10, 20, 30, ?", options: ["31", "40", "50", "100"], answer: 1, hint: "Add 10 each time." },
        { q: "Which number is in between 48 and 50?", options: ["47", "49", "51", "60"], answer: 1, hint: "It comes right after 48." }
      ]
    },
    {
      id: "c1-add",
      icon: "âž•",
      name: "Addition",
      desc: "Adding small numbers using pictures and fingers.",
      lesson: {
        intro: "Addition means putting groups together to find how many in all. We use the plus sign (+) and equal sign (=).",
        sections: [
          { type: "h3", text: "How to add" },
          { type: "p", text: "3 + 2 = 5 means 3 things and 2 more things together make 5 things." },
          { type: "example", text: "ðŸŽ + ðŸŽðŸŽ = ðŸŽðŸŽ so 3 + 2 = 5." },
          { type: "h3", text: "Adding with fingers" },
          { type: "p", text: "Show 4 fingers on one hand and 3 on the other. Count all fingers together: 7." },
          { type: "h3", text: "Adding zero and one" },
          { type: "p", text: "When we add 0, the number does not change. 5 + 0 = 5." },
          { type: "p", text: "When we add 1, the answer is the next number. 5 + 1 = 6." },
          { type: "example", text: "0 + 7 = 7 and 7 + 1 = 8." },
          { type: "h3", text: "Adding in any order" },
          { type: "p", text: "2 + 5 gives the same answer as 5 + 2. Both make 7." },
          { type: "h3", text: "Adding bigger numbers" },
          { type: "p", text: "To add 10 + 4, think: 1 ten and 4 ones make 14." },
          { type: "example", text: "10 + 7 = 17" },
          { type: "tip", text: "Tip: Counting on from the bigger number is faster. For 2 + 8, start at 8 and count 2 more: 9, 10." }
        ]
      },
      quiz: [
        { q: "2 + 3 = ?", options: ["4", "5", "6", "7"], answer: 1, hint: "Count 2, then count 3 more." },
        { q: "4 + 1 = ?", options: ["3", "4", "5", "6"], answer: 2, hint: "One more than 4." },
        { q: "5 + 5 = ?", options: ["9", "10", "11", "12"], answer: 1, hint: "Two hands together." },
        { q: "6 + 2 = ?", options: ["7", "8", "9", "10"], answer: 1, hint: "Start at 6 and count 2 more." },
        { q: "3 + 0 = ?", options: ["0", "3", "4", "13"], answer: 1, hint: "Adding zero keeps the number the same." },
        { q: "7 + 1 = ?", options: ["6", "7", "8", "9"], answer: 2, hint: "The next number after 7." },
        { q: "10 + 4 = ?", options: ["4", "13", "14", "40"], answer: 2, hint: "1 ten and 4 ones." },
        { q: "8 + 2 = ?", options: ["9", "10", "11", "6"], answer: 1, hint: "Start at 8, count 2 more." },
        { q: "5 + 3 = ?", options: ["7", "8", "9", "15"], answer: 1, hint: "Start at 5, count 3 more." },
        { q: "2 + 6 = ?", options: ["4", "8", "9", "26"], answer: 1, hint: "Same as 6 + 2." }
      ]
    },
    {
      id: "c1-sub",
      icon: "âž–",
      name: "Subtraction",
      desc: "Taking away to find what is left.",
      lesson: {
        intro: "Subtraction means taking some away. The answer tells us how many are left.",
        sections: [
          { type: "h3", text: "How to subtract" },
          { type: "p", text: "5 - 2 = 3. We had 5, we took away 2, so 3 are left." },
          { type: "example", text: "ðŸª take away ðŸªðŸª leaves ðŸªðŸª so 5 - 2 = 3." },
          { type: "h3", text: "Counting back" },
          { type: "p", text: "To subtract 2 from 7, count back two steps: 6, 5. So 7 - 2 = 5." },
          { type: "h3", text: "Taking away zero and everything" },
          { type: "p", text: "Subtracting 0 keeps the number the same. 9 - 0 = 9." },
          { type: "p", text: "Subtracting the same number leaves nothing. 6 - 6 = 0." },
          { type: "h3", text: "The minus sign" },
          { type: "p", text: "The sign - is called minus. It shows we are taking away." },
          { type: "example", text: "10 - 3 = 7 (start at 10, count back 3: 9, 8, 7)" },
          { type: "tip", text: "Tip: Subtraction is the opposite of addition. 3 + 2 = 5 means 5 - 2 = 3." }
        ]
      },
      quiz: [
        { q: "5 - 2 = ?", options: ["2", "3", "4", "7"], answer: 1, hint: "Count back 2 steps from 5." },
        { q: "8 - 4 = ?", options: ["3", "4", "5", "12"], answer: 1, hint: "Half of 8." },
        { q: "9 - 1 = ?", options: ["7", "8", "9", "10"], answer: 1, hint: "One less than 9." },
        { q: "6 - 6 = ?", options: ["0", "1", "6", "12"], answer: 0, hint: "Taking away everything leaves..." },
        { q: "10 - 3 = ?", options: ["6", "7", "8", "13"], answer: 1, hint: "Count back 3 from 10." },
        { q: "9 - 0 = ?", options: ["0", "8", "9", "10"], answer: 2, hint: "Taking away zero changes nothing." },
        { q: "7 - 5 = ?", options: ["1", "2", "3", "12"], answer: 1, hint: "Count back 5 from 7." },
        { q: "12 - 2 = ?", options: ["8", "9", "10", "14"], answer: 2, hint: "Two less than 12." },
        { q: "4 - 3 = ?", options: ["0", "1", "2", "7"], answer: 1, hint: "Count back 3 from 4." },
        { q: "15 - 5 = ?", options: ["5", "9", "10", "20"], answer: 2, hint: "Take 5 away from 15." }
      ]
    },
    {
      id: "c1-shapes",
      icon: "ðŸ”º",
      name: "Shapes Around Us",
      desc: "Learn circles, squares, triangles and rectangles.",
      lesson: {
        intro: "Shapes are everywhere! Let us learn about some flat shapes.",
        sections: [
          { type: "h3", text: "Common shapes" },
          { type: "p", text: "Circle: round with no corners. Example: a wheel." },
          { type: "p", text: "Square: 4 equal sides and 4 corners. Example: a chess board square." },
          { type: "p", text: "Triangle: 3 sides and 3 corners. Example: a samosa." },
          { type: "p", text: "Rectangle: 4 sides, longer than it is wide. Example: a door." },
          { type: "h3", text: "Counting sides and corners" },
          { type: "p", text: "A triangle has 3 sides and 3 corners. A square has 4 sides and 4 corners." },
          { type: "p", text: "A circle has no straight sides and no corners." },
          { type: "example", text: "A rectangle has 4 sides and 4 corners, just like a square, but its sides are not all equal." },
          { type: "h3", text: "Shapes in real life" },
          { type: "p", text: "A clock is a circle. A book is a rectangle. A pizza slice looks like a triangle." },
          { type: "tip", text: "Tip: Count the corners to tell shapes. No corners means a circle." }
        ]
      },
      quiz: [
        { q: "Which shape has 3 sides?", options: ["Circle", "Triangle", "Square", "Rectangle"], answer: 1, hint: "Think of a samosa." },
        { q: "How many corners does a square have?", options: ["2", "3", "4", "5"], answer: 2, hint: "Count the corners of a square." },
        { q: "Which shape is perfectly round?", options: ["Circle", "Triangle", "Square", "Rectangle"], answer: 0, hint: "Think of a wheel." },
        { q: "A door is shaped like a...", options: ["Circle", "Triangle", "Rectangle", "Star"], answer: 2, hint: "4 sides, longer than wide." },
        { q: "Which shape has 4 equal sides?", options: ["Rectangle", "Square", "Triangle", "Circle"], answer: 1, hint: "All sides the same length." },
        { q: "How many sides does a rectangle have?", options: ["3", "4", "5", "6"], answer: 1, hint: "Count the sides of a door." },
        { q: "How many corners does a circle have?", options: ["0", "1", "2", "4"], answer: 0, hint: "It is round and smooth." },
        { q: "A clock is shaped like a...", options: ["Triangle", "Square", "Circle", "Rectangle"], answer: 2, hint: "It is round." },
        { q: "How many corners does a triangle have?", options: ["2", "3", "4", "5"], answer: 1, hint: "Same as its number of sides." },
        { q: "Which shape has no straight sides?", options: ["Square", "Circle", "Triangle", "Rectangle"], answer: 1, hint: "It is curved all around." }
      ]
    }
  ];

  /* ---------- Class 2 ---------- */
  var class2 = [
    {
      id: "c2-place",
      icon: "ðŸ”¢",
      name: "Numbers up to 1000",
      desc: "Ones, tens and hundreds place value.",
      lesson: {
        intro: "Big numbers are built from ones, tens and hundreds. Each place has its own value.",
        sections: [
          { type: "h3", text: "Place value" },
          { type: "p", text: "In 352, the 3 means 3 hundreds, the 5 means 5 tens and the 2 means 2 ones." },
          { type: "example", text: "352 = 300 + 50 + 2." },
          { type: "h3", text: "Reading and writing" },
          { type: "p", text: "We read 476 as four hundred seventy-six. We write it using three digits." },
          { type: "p", text: "The number just before 1000 is 999. The number just after 999 is 1000." },
          { type: "h3", text: "Comparing numbers" },
          { type: "p", text: "First compare the hundreds. 512 is bigger than 399 because 5 hundreds > 3 hundreds." },
          { type: "p", text: "If the hundreds are the same, compare the tens. If those match too, compare the ones." },
          { type: "example", text: "456 and 465 start the same. Compare tens: 5 is less than 6, so 456 < 465." },
          { type: "h3", text: "Before, after and between" },
          { type: "p", text: "The number between 349 and 351 is 350." },
          { type: "tip", text: "Tip: Reading a number from left to right gives the biggest place first." }
        ]
      },
      quiz: [
        { q: "In 476, what does the 7 mean?", options: ["7 ones", "7 tens", "7 hundreds", "7000"], answer: 1, hint: "It is in the middle place." },
        { q: "Which is bigger?", options: ["298", "302", "289", "300"], answer: 1, hint: "Compare the hundreds digit." },
        { q: "400 + 30 + 5 = ?", options: ["435", "453", "345", "4305"], answer: 0, hint: "Hundreds, then tens, then ones." },
        { q: "Which number has 9 hundreds?", options: ["109", "190", "901", "910"], answer: 2, hint: "The hundreds digit must be 9." },
        { q: "What comes after 999?", options: ["100", "990", "1000", "9990"], answer: 2, hint: "One more than 999." },
        { q: "What comes just before 1000?", options: ["99", "998", "999", "1001"], answer: 2, hint: "Count back one from 1000." },
        { q: "Which number is between 349 and 351?", options: ["348", "350", "352", "360"], answer: 1, hint: "It comes right after 349." },
        { q: "In 583, what is the value of 5?", options: ["5", "50", "500", "5000"], answer: 2, hint: "The 5 is in the hundreds place." },
        { q: "Which is the smallest number?", options: ["109", "901", "190", "910"], answer: 0, hint: "Compare the hundreds first." },
        { q: "600 + 0 + 7 = ?", options: ["67", "607", "670", "6007"], answer: 1, hint: "No tens, so 0 in the tens place." }
      ]
    },
    {
      id: "c2-addsub",
      icon: "ðŸ§®",
      name: "Addition & Subtraction",
      desc: "Two-digit sums with carrying and borrowing.",
      lesson: {
        intro: "When adding or subtracting big numbers, line up the ones under ones and the tens under tens.",
        sections: [
          { type: "h3", text: "Adding with carrying" },
          { type: "p", text: "For 28 + 15: add ones 8 + 5 = 13, write 3 and carry 1 ten. Then tens: 2 + 1 + 1 = 4. Answer 43." },
          { type: "example", text: "28 + 15 = 43" },
          { type: "h3", text: "Subtracting with borrowing" },
          { type: "p", text: "For 52 - 27: we cannot take 7 from 2, so borrow 1 ten. 12 - 7 = 5, then 4 - 2 = 2. Answer 25." },
          { type: "example", text: "52 - 27 = 25" },
          { type: "h3", text: "Checking your answer" },
          { type: "p", text: "To check subtraction, add the answer back. 25 + 27 = 52, so it is correct." },
          { type: "h3", text: "Word problems" },
          { type: "p", text: "Riya had 40 sweets and gave 12 away. How many are left? 40 - 12 = 28 sweets." },
          { type: "tip", text: "Tip: Always start from the ones column on the right." }
        ]
      },
      quiz: [
        { q: "28 + 15 = ?", options: ["33", "43", "45", "413"], answer: 1, hint: "8 + 5 = 13, carry the ten." },
        { q: "52 - 27 = ?", options: ["25", "35", "29", "24"], answer: 0, hint: "You need to borrow a ten." },
        { q: "46 + 34 = ?", options: ["70", "80", "79", "710"], answer: 1, hint: "6 + 4 = 10, carry 1." },
        { q: "90 - 45 = ?", options: ["35", "45", "55", "50"], answer: 1, hint: "Half of 90." },
        { q: "67 + 8 = ?", options: ["73", "74", "75", "76"], answer: 2, hint: "7 + 8 = 15, carry the ten." },
        { q: "Riya had 40 sweets and gave 12 away. How many left?", options: ["28", "30", "32", "52"], answer: 0, hint: "Subtract 12 from 40." },
        { q: "35 + 25 = ?", options: ["50", "55", "60", "610"], answer: 2, hint: "5 + 5 = 10, carry 1." },
        { q: "81 - 9 = ?", options: ["70", "71", "72", "90"], answer: 2, hint: "Borrow a ten: 11 - 9 = 2." },
        { q: "54 + 6 = ?", options: ["50", "59", "60", "64"], answer: 2, hint: "4 + 6 = 10, carry 1." },
        { q: "100 - 25 = ?", options: ["65", "75", "80", "85"], answer: 1, hint: "Borrow from the hundreds." }
      ]
    },
    {
      id: "c2-times",
      icon: "âœ–ï¸",
      name: "Multiplication Tables",
      desc: "Tables of 2, 3, 4, 5 and 10.",
      lesson: {
        intro: "Multiplication is repeated addition. 4 Ã— 3 means 3 + 3 + 3 + 3.",
        sections: [
          { type: "h3", text: "Tables you should know" },
          { type: "p", text: "Table of 2: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20" },
          { type: "p", text: "Table of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30" },
          { type: "p", text: "Table of 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40" },
          { type: "p", text: "Table of 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50" },
          { type: "p", text: "Table of 10: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100" },
          { type: "example", text: "5 Ã— 4 = 20 means four groups of 5." },
          { type: "h3", text: "Easy tricks" },
          { type: "p", text: "Table of 2 is just doubling. Table of 10 means add a zero." },
          { type: "p", text: "In the 5 table, answers end in 5 or 0. So 5 Ã— 6 ends in 0." },
          { type: "h3", text: "Multiplication is commutative" },
          { type: "p", text: "4 Ã— 5 gives the same answer as 5 Ã— 4. Both are 20." },
          { type: "tip", text: "Tip: In the 10 table, just add a zero: 7 Ã— 10 = 70." }
        ]
      },
      quiz: [
        { q: "5 Ã— 4 = ?", options: ["16", "20", "24", "25"], answer: 1, hint: "Count in 5s four times." },
        { q: "3 Ã— 6 = ?", options: ["15", "18", "21", "24"], answer: 1, hint: "6 + 6 + 6." },
        { q: "10 Ã— 7 = ?", options: ["17", "70", "77", "700"], answer: 1, hint: "Add a zero to 7." },
        { q: "2 Ã— 9 = ?", options: ["11", "16", "18", "20"], answer: 2, hint: "Double 9." },
        { q: "4 Ã— 5 = ?", options: ["9", "20", "24", "45"], answer: 1, hint: "Same as 5 Ã— 4." },
        { q: "3 Ã— 3 = ?", options: ["6", "9", "12", "33"], answer: 1, hint: "3 added three times." },
        { q: "5 Ã— 6 = ?", options: ["11", "25", "30", "35"], answer: 2, hint: "Ends in 0 because it is a 5-table answer." },
        { q: "4 Ã— 4 = ?", options: ["8", "12", "16", "44"], answer: 2, hint: "Double 4, then double again." },
        { q: "2 Ã— 7 = ?", options: ["9", "12", "14", "27"], answer: 2, hint: "Double 7." },
        { q: "10 Ã— 9 = ?", options: ["19", "90", "99", "900"], answer: 1, hint: "Add a zero to 9." }
      ]
    },
    {
      id: "c2-measure",
      icon: "ðŸ“",
      name: "Money & Measurement",
      desc: "Rupees, metres and simple measuring.",
      lesson: {
        intro: "We measure money in rupees and paise, and length in centimetres and metres.",
        sections: [
          { type: "h3", text: "Money" },
          { type: "p", text: "â‚¹1 = 100 paise. We add money just like numbers." },
          { type: "example", text: "â‚¹25 + â‚¹40 = â‚¹65" },
          { type: "p", text: "To find change, subtract the cost from the money given. Gave â‚¹100, cost â‚¹35, change â‚¹65." },
          { type: "h3", text: "Length" },
          { type: "p", text: "100 centimetres = 1 metre. A pencil is about 15 cm long." },
          { type: "p", text: "A door is about 2 metres tall. A ruler is usually 30 cm long." },
          { type: "h3", text: "Weight and capacity" },
          { type: "p", text: "We measure weight in grams and kilograms. 1000 g = 1 kg." },
          { type: "p", text: "We measure liquids in millilitres and litres. 1000 ml = 1 litre." },
          { type: "example", text: "A water bottle holds about 1 litre of water." },
          { type: "tip", text: "Tip: Use a ruler starting from 0 to measure correctly." }
        ]
      },
      quiz: [
        { q: "How many paise make â‚¹1?", options: ["10", "50", "100", "1000"], answer: 2, hint: "One rupee is quite big." },
        { q: "â‚¹25 + â‚¹40 = ?", options: ["â‚¹55", "â‚¹65", "â‚¹75", "â‚¹15"], answer: 1, hint: "Add tens and ones." },
        { q: "How many centimetres in 1 metre?", options: ["10", "50", "100", "1000"], answer: 2, hint: "Centi means hundred." },
        { q: "â‚¹100 - â‚¹35 = ?", options: ["â‚¹55", "â‚¹65", "â‚¹75", "â‚¹70"], answer: 1, hint: "Borrow from the hundreds." },
        { q: "Which is longer?", options: ["15 cm", "1 metre", "10 cm", "50 cm"], answer: 1, hint: "1 metre is 100 cm." },
        { q: "How many grams in 1 kilogram?", options: ["100", "500", "1000", "10"], answer: 2, hint: "Kilo means thousand." },
        { q: "How many millilitres in 1 litre?", options: ["10", "100", "1000", "10000"], answer: 2, hint: "Just like grams in a kilogram." },
        { q: "A pencil is about how long?", options: ["15 cm", "15 m", "1 m", "100 cm"], answer: 0, hint: "It is small and light." },
        { q: "â‚¹50 + â‚¹50 = ?", options: ["â‚¹55", "â‚¹90", "â‚¹100", "â‚¹150"], answer: 2, hint: "Two fifty-rupee notes." },
        { q: "I gave â‚¹100 and the cost was â‚¹60. Change?", options: ["â‚¹30", "â‚¹40", "â‚¹50", "â‚¹160"], answer: 1, hint: "Subtract 60 from 100." }
      ]
    }
  ];

  /* ---------- Class 3 ---------- */
  var class3 = [
    {
      id: "c3-4digit",
      icon: "ðŸ†",
      name: "Numbers to 9999",
      desc: "Thousands, place value and rounding.",
      lesson: {
        intro: "Now we learn numbers with four digits. The new place is the thousands place.",
        sections: [
          { type: "h3", text: "Place value" },
          { type: "p", text: "In 4726: 4 thousands, 7 hundreds, 2 tens and 6 ones." },
          { type: "example", text: "4726 = 4000 + 700 + 20 + 6" },
          { type: "h3", text: "Successor and predecessor" },
          { type: "p", text: "The number just after a number is its successor. The number just before is its predecessor." },
          { type: "p", text: "Successor of 2999 is 3000. Predecessor of 3000 is 2999." },
          { type: "h3", text: "Rounding" },
          { type: "p", text: "To round to the nearest 10, look at the ones digit. If it is 5 or more, round up." },
          { type: "example", text: "47 rounds to 50, but 43 rounds to 40." },
          { type: "p", text: "To round to the nearest 100, look at the tens digit. 365 rounds to 400." },
          { type: "h3", text: "Comparing and ordering" },
          { type: "p", text: "Compare the thousands first, then hundreds, then tens, then ones." },
          { type: "tip", text: "Tip: 5 or more, give it one more. Less than 5, let it rest." }
        ]
      },
      quiz: [
        { q: "In 5824, what is the value of 8?", options: ["8", "80", "800", "8000"], answer: 2, hint: "The 8 is in the hundreds place." },
        { q: "Round 47 to the nearest 10.", options: ["40", "45", "50", "60"], answer: 2, hint: "7 is 5 or more, so round up." },
        { q: "3000 + 400 + 50 + 2 = ?", options: ["3452", "3542", "3425", "3450"], answer: 0, hint: "Read the places in order." },
        { q: "Which is the smallest?", options: ["4999", "4100", "5100", "4089"], answer: 3, hint: "Compare thousands first, then hundreds." },
        { q: "Round 365 to the nearest 100.", options: ["300", "360", "400", "500"], answer: 2, hint: "Look at the tens digit, 6." },
        { q: "What is the successor of 2999?", options: ["2998", "3000", "999", "3999"], answer: 1, hint: "One more than 2999." },
        { q: "What is the predecessor of 5000?", options: ["4999", "5001", "4990", "4000"], answer: 0, hint: "One less than 5000." },
        { q: "In 7305, what does the 3 mean?", options: ["3 ones", "3 tens", "3 hundreds", "3 thousands"], answer: 2, hint: "Count the places from the right." },
        { q: "Round 82 to the nearest 10.", options: ["70", "80", "90", "100"], answer: 1, hint: "2 is less than 5, so let it rest." },
        { q: "Which number is greatest?", options: ["3099", "3990", "3900", "3090"], answer: 1, hint: "Compare the hundreds after the thousands." }
      ]
    },
    {
      id: "c3-multiply",
      icon: "âœ³ï¸",
      name: "Multiplication",
      desc: "Tables up to 10 and 2-digit by 1-digit.",
      lesson: {
        intro: "Multiplication is fast adding. Learn your tables well and big sums become easy.",
        sections: [
          { type: "h3", text: "2-digit by 1-digit" },
          { type: "p", text: "For 23 Ã— 4: multiply ones 3 Ã— 4 = 12, write 2 carry 1. Then tens 2 Ã— 4 = 8, plus 1 = 9. Answer 92." },
          { type: "example", text: "23 Ã— 4 = 92" },
          { type: "h3", text: "Multiplying by 10 and 100" },
          { type: "p", text: "To multiply by 10 add a zero. To multiply by 100 add two zeros." },
          { type: "example", text: "34 Ã— 10 = 340 and 34 Ã— 100 = 3400" },
          { type: "h3", text: "Useful tricks" },
          { type: "p", text: "9 Ã— 4 = (10 Ã— 4) - 4 = 36. Multiply by 10 then subtract one group." },
          { type: "p", text: "To multiply by 5, multiply by 10 and halve it. 5 Ã— 8 = (10 Ã— 8) Ã· 2 = 40." },
          { type: "h3", text: "Word problems" },
          { type: "p", text: "A box holds 12 pencils. How many in 5 boxes? 12 Ã— 5 = 60 pencils." },
          { type: "tip", text: "Tip: Multiplication is commutative: 3 Ã— 7 = 7 Ã— 3 = 21." }
        ]
      },
      quiz: [
        { q: "23 Ã— 4 = ?", options: ["82", "92", "94", "102"], answer: 1, hint: "3 Ã— 4 = 12, carry 1." },
        { q: "7 Ã— 8 = ?", options: ["48", "54", "56", "64"], answer: 2, hint: "Remember the table of 7." },
        { q: "15 Ã— 10 = ?", options: ["105", "150", "151", "1500"], answer: 1, hint: "Add a zero." },
        { q: "34 Ã— 2 = ?", options: ["62", "66", "68", "72"], answer: 2, hint: "Double each place." },
        { q: "9 Ã— 6 = ?", options: ["45", "54", "56", "63"], answer: 1, hint: "(10 Ã— 6) - 6." },
        { q: "12 Ã— 5 = ?", options: ["50", "55", "60", "65"], answer: 2, hint: "(12 Ã— 10) Ã· 2." },
        { q: "24 Ã— 100 = ?", options: ["240", "2400", "24000", "240000"], answer: 1, hint: "Add two zeros." },
        { q: "A box holds 12 pencils. How many in 5 boxes?", options: ["17", "50", "60", "70"], answer: 2, hint: "Multiply 12 Ã— 5." },
        { q: "6 Ã— 7 = ?", options: ["36", "42", "48", "49"], answer: 1, hint: "6 Ã— 6 = 36, add one more 6." },
        { q: "5 Ã— 9 = ?", options: ["40", "45", "50", "54"], answer: 1, hint: "(10 Ã— 9) Ã· 2." }
      ]
    },
    {
      id: "c3-divide",
      icon: "âž—",
      name: "Division",
      desc: "Sharing equally and simple remainders.",
      lesson: {
        intro: "Division means sharing equally into groups. It is the opposite of multiplication.",
        sections: [
          { type: "h3", text: "Sharing" },
          { type: "p", text: "12 Ã· 3 = 4 means 12 things shared into 3 equal groups gives 4 in each group." },
          { type: "example", text: "12 sweets shared by 4 children gives 3 sweets each: 12 Ã· 4 = 3." },
          { type: "h3", text: "Remainders" },
          { type: "p", text: "Sometimes a few are left over. 13 Ã· 4 = 3 remainder 1." },
          { type: "p", text: "The number we divide is the dividend, the number we divide by is the divisor, and the answer is the quotient." },
          { type: "h3", text: "Dividing by 1 and 10" },
          { type: "p", text: "Any number divided by 1 stays the same: 7 Ã· 1 = 7." },
          { type: "p", text: "Dividing by 10 removes a zero: 50 Ã· 10 = 5." },
          { type: "h3", text: "Word problems" },
          { type: "p", text: "24 apples shared equally in 6 baskets gives 24 Ã· 6 = 4 apples each." },
          { type: "tip", text: "Tip: Check division with multiplication. 4 Ã— 3 = 12, so 12 Ã· 3 = 4." }
        ]
      },
      quiz: [
        { q: "12 Ã· 3 = ?", options: ["3", "4", "5", "6"], answer: 1, hint: "3 Ã— ? = 12" },
        { q: "20 Ã· 5 = ?", options: ["3", "4", "5", "6"], answer: 1, hint: "Count in 5s: 5, 10, 15, 20." },
        { q: "13 Ã· 4 = ?", options: ["3 r1", "3 r2", "4 r1", "2 r5"], answer: 0, hint: "4 Ã— 3 = 12, one is left." },
        { q: "18 Ã· 6 = ?", options: ["2", "3", "4", "6"], answer: 1, hint: "6 Ã— 3 = 18." },
        { q: "15 Ã· 5 = ?", options: ["2", "3", "4", "5"], answer: 1, hint: "5 Ã— 3 = 15." },
        { q: "50 Ã· 10 = ?", options: ["4", "5", "10", "500"], answer: 1, hint: "Remove a zero." },
        { q: "7 Ã· 1 = ?", options: ["0", "1", "7", "8"], answer: 2, hint: "Dividing by 1 changes nothing." },
        { q: "24 apples in 6 baskets equally. Each basket has?", options: ["3", "4", "5", "6"], answer: 1, hint: "24 Ã· 6." },
        { q: "16 Ã· 4 = ?", options: ["3", "4", "5", "6"], answer: 1, hint: "4 Ã— 4 = 16." },
        { q: "21 Ã· 7 = ?", options: ["2", "3", "4", "7"], answer: 1, hint: "7 Ã— 3 = 21." }
      ]
    },
    {
      id: "c3-fractions",
      icon: "ðŸ•",
      name: "Fractions",
      desc: "Halves, thirds and quarters of shapes.",
      lesson: {
        intro: "A fraction shows a part of a whole. The bottom number says how many equal parts, the top says how many we take.",
        sections: [
          { type: "h3", text: "Reading fractions" },
          { type: "p", text: "1/2 is one half, 1/3 is one third, 1/4 is one quarter." },
          { type: "example", text: "Cut a pizza into 4 equal parts and take 1 â€” that is 1/4 of the pizza." },
          { type: "p", text: "The top number is the numerator and the bottom number is the denominator." },
          { type: "h3", text: "Fractions of a number" },
          { type: "p", text: "To find 1/2 of 10, share 10 into 2 equal parts: 5." },
          { type: "p", text: "To find 1/4 of 8, share 8 into 4 equal parts: 2." },
          { type: "h3", text: "Comparing fractions" },
          { type: "p", text: "With the same bottom number, the bigger top number is the bigger fraction. 3/4 is more than 1/4." },
          { type: "example", text: "1/2 of 12 = 6 and 1/3 of 12 = 4, so 1/2 is bigger here." },
          { type: "tip", text: "Tip: All parts must be equal in size for it to be a fraction." }
        ]
      },
      quiz: [
        { q: "What is 1/2 of 10?", options: ["2", "5", "8", "10"], answer: 1, hint: "Half means two equal parts." },
        { q: "Which fraction is bigger?", options: ["1/4", "3/4", "1/8", "2/4"], answer: 1, hint: "Same bottom number, compare the top." },
        { q: "A shape cut into 3 equal parts, one part is...", options: ["1/2", "1/3", "1/4", "3/1"], answer: 1, hint: "Three parts means thirds." },
        { q: "1/4 of 8 = ?", options: ["2", "4", "6", "8"], answer: 0, hint: "Share 8 into 4 equal parts." },
        { q: "How many quarters make one whole?", options: ["2", "3", "4", "5"], answer: 2, hint: "Quarter means four parts." },
        { q: "In 3/4, which number is the numerator?", options: ["3", "4", "7", "34"], answer: 0, hint: "It is the top number." },
        { q: "1/2 of 20 = ?", options: ["5", "10", "15", "20"], answer: 1, hint: "Half of 20." },
        { q: "1/3 of 12 = ?", options: ["3", "4", "6", "9"], answer: 1, hint: "Share 12 into 3 equal parts." },
        { q: "How many halves make one whole?", options: ["1", "2", "3", "4"], answer: 1, hint: "Half means two parts." },
        { q: "Which is the bigger fraction?", options: ["1/4", "1/2", "1/8", "1/3"], answer: 1, hint: "Fewer parts means bigger pieces." }
      ]
    }
  ];

  /* ---------- Class 4 ---------- */
  var class4 = [
    {
      id: "c4-large",
      icon: "ðŸŒ",
      name: "Big Numbers",
      desc: "Numbers up to lakhs and comparing them.",
      lesson: {
        intro: "We now meet thousands and lakhs. Each place to the left is ten times bigger.",
        sections: [
          { type: "h3", text: "Reading large numbers" },
          { type: "p", text: "1 lakh = 100 thousands = 100000. It has five zeros." },
          { type: "example", text: "2,45,600 = 2 lakhs, 45 thousands and 600." },
          { type: "h3", text: "The Indian place system" },
          { type: "p", text: "The places are ones, tens, hundreds, thousands, ten-thousands and lakhs." },
          { type: "p", text: "1 ten-thousand = 10000. 10 ten-thousands = 1 lakh." },
          { type: "h3", text: "Comparing" },
          { type: "p", text: "Count the digits first. More digits means a bigger number." },
          { type: "p", text: "If the digits are the same, compare from the left side." },
          { type: "h3", text: "Rounding large numbers" },
          { type: "p", text: "2,45,600 rounded to the nearest thousand is 2,46,000." },
          { type: "tip", text: "Tip: In India we group as thousands and lakhs, not hundreds." }
        ]
      },
      quiz: [
        { q: "How many zeros in 1 lakh?", options: ["3", "4", "5", "6"], answer: 2, hint: "100000 is one lakh." },
        { q: "Which is the largest?", options: ["9999", "10000", "99999", "100000"], answer: 3, hint: "More digits is bigger." },
        { q: "2,45,600 has how many thousands?", options: ["2", "45", "245", "600"], answer: 1, hint: "Read the middle group." },
        { q: "10 Ã— 1000 = ?", options: ["1000", "10000", "100000", "11000"], answer: 1, hint: "Add one zero to 1000." },
        { q: "Which is the smallest?", options: ["100000", "99999", "90000", "90999"], answer: 2, hint: "Compare digits count and value." },
        { q: "1 ten-thousand = ?", options: ["1000", "10000", "100000", "10"], answer: 1, hint: "Ten thousand has four zeros." },
        { q: "How many ten-thousands in 1 lakh?", options: ["5", "10", "100", "1000"], answer: 1, hint: "100000 Ã· 10000." },
        { q: "Round 2,45,600 to the nearest thousand.", options: ["2,45,000", "2,46,000", "2,50,000", "3,00,000"], answer: 1, hint: "The hundreds digit is 6." },
        { q: "Which is greater?", options: ["4,00,000", "3,99,999", "3,99,000", "4,00,000 is equal"], answer: 0, hint: "Compare the lakhs digit." },
        { q: "1000 Ã— 100 = ?", options: ["10000", "100000", "1000000", "110000"], answer: 1, hint: "Add the zeros together." }
      ]
    },
    {
      id: "c4-fractions",
      icon: "ðŸ¥®",
      name: "Fractions & Decimals",
      desc: "Equivalent fractions and first decimals.",
      lesson: {
        intro: "Fractions can look different but mean the same. Decimals are another way to write parts of a whole.",
        sections: [
          { type: "h3", text: "Equivalent fractions" },
          { type: "p", text: "1/2 = 2/4 = 4/8. Multiply the top and bottom by the same number to get an equal fraction." },
          { type: "example", text: "1/2 Ã— 2/2 = 2/4" },
          { type: "h3", text: "Decimals" },
          { type: "p", text: "1/10 = 0.1 and 1/100 = 0.01. The dot is called a decimal point." },
          { type: "example", text: "0.5 = 1/2, 0.25 = 1/4 and 0.1 = 1/10" },
          { type: "h3", text: "Adding fractions" },
          { type: "p", text: "With the same bottom number, add the tops. 1/4 + 2/4 = 3/4." },
          { type: "p", text: "1/2 + 1/2 = 1 whole." },
          { type: "tip", text: "Tip: 0.5 is the same as 1/2 and 0.25 is the same as 1/4." }
        ]
      },
      quiz: [
        { q: "Which fraction equals 1/2?", options: ["2/3", "2/4", "3/5", "1/3"], answer: 1, hint: "Multiply top and bottom by 2." },
        { q: "1/10 as a decimal is...", options: ["0.01", "0.1", "1.0", "10"], answer: 1, hint: "One tenth." },
        { q: "0.25 is the same as...", options: ["1/2", "1/3", "1/4", "1/5"], answer: 2, hint: "Think of 25 paise." },
        { q: "2/4 simplified is...", options: ["1/2", "1/4", "2/3", "4/2"], answer: 0, hint: "Divide top and bottom by 2." },
        { q: "1/2 + 1/2 = ?", options: ["1/4", "2/4", "1", "2"], answer: 2, hint: "Two halves make a whole." },
        { q: "Which fraction equals 1/4?", options: ["2/8", "2/4", "3/4", "1/2"], answer: 0, hint: "Multiply top and bottom of 1/4 by 2." },
        { q: "1/4 + 2/4 = ?", options: ["3/8", "3/4", "2/4", "1/2"], answer: 1, hint: "Same bottom, add the tops." },
        { q: "0.1 as a fraction is...", options: ["1/100", "1/10", "1/2", "10/1"], answer: 1, hint: "One tenth." },
        { q: "1/100 as a decimal is...", options: ["0.1", "0.01", "1.0", "100"], answer: 1, hint: "One hundredth is very small." },
        { q: "Which is largest?", options: ["0.1", "0.25", "0.5", "0.05"], answer: 2, hint: "Compare the tenths digit." }
      ]
    },
    {
      id: "c4-geometry",
      icon: "ðŸ“",
      name: "Lines & Angles",
      desc: "Angles, right angles and symmetry.",
      lesson: {
        intro: "Angles are made when two lines meet. We measure them in degrees.",
        sections: [
          { type: "h3", text: "Types of angles" },
          { type: "p", text: "A right angle is exactly 90Â°. A straight line makes 180Â°." },
          { type: "p", text: "An angle smaller than 90Â° is acute. Bigger than 90Â° but less than 180Â° is obtuse." },
          { type: "example", text: "The corner of a book is a right angle (90Â°)." },
          { type: "h3", text: "Lines" },
          { type: "p", text: "Parallel lines never meet and stay the same distance apart, like railway tracks." },
          { type: "p", text: "Perpendicular lines meet at a right angle, like the corner of a window." },
          { type: "h3", text: "Symmetry" },
          { type: "p", text: "A line of symmetry divides a shape into two matching halves." },
          { type: "example", text: "A square has 4 lines of symmetry. A circle has many." },
          { type: "tip", text: "Tip: Count the degrees of a full turn: 360 degrees." }
        ]
      },
      quiz: [
        { q: "A right angle measures...", options: ["45 degrees", "90 degrees", "180 degrees", "360 degrees"], answer: 1, hint: "Like the corner of a square." },
        { q: "An angle of 120 degrees is...", options: ["acute", "right", "obtuse", "straight"], answer: 2, hint: "It is more than 90 but less than 180." },
        { q: "How many degrees in a straight line?", options: ["90", "180", "270", "360"], answer: 1, hint: "Two right angles." },
        { q: "An angle of 40 degrees is...", options: ["acute", "right", "obtuse", "straight"], answer: 0, hint: "It is less than 90 degrees." },
        { q: "A full turn is...", options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"], answer: 3, hint: "All the way around." },
        { q: "Parallel lines...", options: ["meet at 90 degrees", "never meet", "cross in the middle", "are curved"], answer: 1, hint: "Think of railway tracks." },
        { q: "Perpendicular lines meet at...", options: ["45 degrees", "60 degrees", "90 degrees", "180 degrees"], answer: 2, hint: "A right angle." },
        { q: "How many lines of symmetry does a square have?", options: ["1", "2", "4", "8"], answer: 2, hint: "Think of the middle lines and the diagonals." },
        { q: "An angle of exactly 180 degrees is called...", options: ["acute", "right", "obtuse", "straight"], answer: 3, hint: "It looks like a straight line." },
        { q: "An angle of 75 degrees is...", options: ["acute", "right", "obtuse", "straight"], answer: 0, hint: "It is less than 90 degrees." }
      ]
    },
    {
      id: "c4-perimeter",
      icon: "🟦",
      name: "Perimeter & Area",
      desc: "Distance around a shape and space inside.",
      lesson: {
        intro: "Perimeter is the distance all around a shape. Area is the space inside it.",
        sections: [
          { type: "h3", text: "Perimeter" },
          { type: "p", text: "Add all the sides. A rectangle has perimeter 2 x (length + width)." },
          { type: "example", text: "A rectangle 5 cm by 3 cm has perimeter 2 x (5 + 3) = 16 cm." },
          { type: "p", text: "A square of side 4 cm has perimeter 4 + 4 + 4 + 4 = 16 cm, or 4 x 4 = 16 cm." },
          { type: "h3", text: "Area" },
          { type: "p", text: "Area of a rectangle = length x width. Measured in square units." },
          { type: "example", text: "The same rectangle has area 5 x 3 = 15 square cm." },
          { type: "p", text: "Area of a square = side x side. A square of side 3 cm has area 9 cm²." },
          { type: "h3", text: "Which one is bigger?" },
          { type: "p", text: "Two shapes can have the same perimeter but different areas." },
          { type: "tip", text: "Tip: Perimeter is a length (cm), area is square units (cm²)." }
        ]
      },
      quiz: [
        { q: "Perimeter of a square of side 4 cm?", options: ["8 cm", "12 cm", "16 cm", "20 cm"], answer: 2, hint: "4 sides of 4 cm." },
        { q: "Area of a rectangle 5 cm x 3 cm?", options: ["8 cm²", "15 cm²", "16 cm²", "30 cm²"], answer: 1, hint: "Length x width." },
        { q: "Perimeter of 6 cm by 2 cm rectangle?", options: ["8 cm", "12 cm", "16 cm", "20 cm"], answer: 2, hint: "2 x (6 + 2)." },
        { q: "Area is measured in...", options: ["cm", "cm²", "kg", "litres"], answer: 1, hint: "Square units." },
        { q: "A square of side 3 cm has area...", options: ["6 cm²", "9 cm²", "12 cm²", "3 cm²"], answer: 1, hint: "3 x 3." },
        { q: "Perimeter of a triangle with sides 3, 4 and 5 cm?", options: ["10 cm", "12 cm", "14 cm", "60 cm"], answer: 1, hint: "Add all three sides." },
        { q: "Perimeter of a square of side 7 cm?", options: ["14 cm", "21 cm", "28 cm", "49 cm"], answer: 2, hint: "4 x 7." },
        { q: "Area of a square of side 5 cm?", options: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"], answer: 2, hint: "5 x 5." },
        { q: "A rectangle 10 cm by 1 cm has area...", options: ["10 cm²", "11 cm²", "20 cm²", "100 cm²"], answer: 0, hint: "10 x 1." },
        { q: "A rectangle 8 cm by 2 cm has perimeter...", options: ["10 cm", "16 cm", "20 cm", "32 cm"], answer: 2, hint: "2 x (8 + 2)." }
      ]
    }
  ];

  /* ---------- Class 5 ---------- */
  var class5 = [
    {
      id: "c5-decimals",
      icon: "💧",
      name: "Decimals",
      desc: "Place value in decimals and operations.",
      lesson: {
        intro: "Decimals use a point to show parts smaller than one. Each place is ten times smaller.",
        sections: [
          { type: "h3", text: "Place value" },
          { type: "p", text: "In 4.76: 4 ones, 7 tenths and 6 hundredths." },
          { type: "example", text: "4.76 = 4 + 0.7 + 0.06" },
          { type: "h3", text: "Adding and subtracting decimals" },
          { type: "p", text: "Line up the decimal points, then add or subtract. 2.5 + 1.35 = 3.85." },
          { type: "p", text: "5 - 0.5 = 4.5. Think of it as 5.0 - 0.5." },
          { type: "h3", text: "Comparing decimals" },
          { type: "p", text: "Compare from the left. 0.9 is bigger than 0.45 because 9 tenths > 4 tenths." },
          { type: "h3", text: "Decimals and fractions" },
          { type: "p", text: "0.1 = 1/10, 0.01 = 1/100 and 0.5 = 1/2." },
          { type: "tip", text: "Tip: Line up the decimal points before you add — the points must sit in a straight line." }
        ]
      },
      quiz: [
        { q: "In 4.76, the digit 7 is in the...", options: ["ones place", "tenths place", "hundredths place", "tens place"], answer: 1, hint: "Just after the decimal point." },
        { q: "2.5 + 1.35 = ?", options: ["3.85", "3.40", "3.75", "2.60"], answer: 0, hint: "Line up the points and add." },
        { q: "Which is bigger?", options: ["0.9", "0.45", "0.09", "0.5"], answer: 0, hint: "Look at the tenths place." },
        { q: "0.06 written as a fraction is...", options: ["6/10", "6/100", "6/1000", "60/10"], answer: 1, hint: "Hundredths means out of 100." },
        { q: "5 - 0.5 = ?", options: ["4.5", "4.0", "5.5", "0.45"], answer: 0, hint: "Half less than 5." },
        { q: "0.5 written as a fraction is...", options: ["1/5", "1/2", "5/1", "1/50"], answer: 1, hint: "Half." },
        { q: "1.2 + 0.8 = ?", options: ["1.10", "2.0", "2.1", "10.0"], answer: 1, hint: "2 tenths + 8 tenths = 1 whole." },
        { q: "Which is smallest?", options: ["0.7", "0.07", "0.77", "0.71"], answer: 1, hint: "Compare the tenths digit." },
        { q: "3.45 - 0.45 = ?", options: ["3.0", "3.9", "2.0", "3.90"], answer: 0, hint: "The hundredths cancel out." },
        { q: "0.25 + 0.25 = ?", options: ["0.5", "0.50", "1.0", "0.05"], answer: 0, hint: "Two quarters make a half." }
      ]
    },
    {
      id: "c5-lcm",
      icon: "🔗",
      name: "Factors & Multiples",
      desc: "HCF, LCM and divisibility rules.",
      lesson: {
        intro: "Factors divide a number exactly. Multiples are what we get when we multiply it.",
        sections: [
          { type: "h3", text: "Factors and multiples" },
          { type: "p", text: "Factors of 12 are 1, 2, 3, 4, 6, 12. Multiples of 12 are 12, 24, 36, ..." },
          { type: "p", text: "1 is a factor of every number. Every number is a multiple of itself." },
          { type: "h3", text: "HCF and LCM" },
          { type: "p", text: "HCF is the biggest common factor. LCM is the smallest common multiple." },
          { type: "example", text: "For 4 and 6: factors of 4 are 1,2,4 and of 6 are 1,2,3,6. HCF = 2. LCM = 12." },
          { type: "h3", text: "Divisibility rules" },
          { type: "p", text: "A number ending in 0, 2, 4, 6 or 8 is divisible by 2." },
          { type: "p", text: "If the digit sum is divisible by 3, the number is too. 123 -> 1+2+3 = 6, so yes." },
          { type: "p", text: "A number ending in 0 or 5 is divisible by 5." },
          { type: "tip", text: "Tip: Prime numbers have exactly two factors: 1 and the number itself. 2, 3, 5, 7 are prime." }
        ]
      },
      quiz: [
        { q: "Which is a factor of 12?", options: ["5", "7", "4", "8"], answer: 2, hint: "What divides 12 exactly?" },
        { q: "LCM of 4 and 6?", options: ["2", "12", "24", "10"], answer: 1, hint: "Smallest common multiple." },
        { q: "HCF of 12 and 18?", options: ["2", "3", "6", "12"], answer: 2, hint: "Biggest common factor." },
        { q: "A number divisible by 5 ends in...", options: ["0 or 5", "5 only", "even number", "2"], answer: 0, hint: "Look at the last digit." },
        { q: "How many factors does 9 have?", options: ["1", "2", "3", "4"], answer: 2, hint: "1, 3 and 9." },
        { q: "Which number is prime?", options: ["4", "6", "7", "9"], answer: 2, hint: "Only two factors." },
        { q: "Is 123 divisible by 3?", options: ["Yes", "No", "Only by 2", "Only by 5"], answer: 0, hint: "1+2+3 = 6, and 6 is in the 3 table." },
        { q: "LCM of 5 and 10?", options: ["5", "10", "15", "50"], answer: 1, hint: "10 is a multiple of 5." },
        { q: "Which is a multiple of 7?", options: ["13", "21", "27", "30"], answer: 1, hint: "7 × 3." },
        { q: "HCF of 8 and 12?", options: ["2", "4", "6", "8"], answer: 1, hint: "Biggest number dividing both." }
      ]
    },
    {
      id: "c5-percent",
      icon: "💯",
      name: "Percentage",
      desc: "Percent means out of hundred.",
      lesson: {
        intro: "Per cent means 'out of 100'. 50% is 50 out of 100, which is half.",
        sections: [
          { type: "h3", text: "Changing to fractions" },
          { type: "p", text: "25% = 25/100 = 1/4. 20% = 20/100 = 1/5. 50% = 1/2." },
          { type: "example", text: "To find 10% of 200, divide by 10: the answer is 20." },
          { type: "h3", text: "Quick methods" },
          { type: "p", text: "1% of a number means divide it by 100." },
          { type: "p", text: "To find 20%, find 10% and double it. 20% of 50 -> 10% is 5, so 20% is 10." },
          { type: "h3", text: "Using percentages" },
          { type: "p", text: "In a class of 40, if 25% wear glasses, that is 10 students." },
          { type: "p", text: "If you score 18 out of 20, that is 90%." },
          { type: "tip", text: "Tip: 100% means the whole thing. 200% means twice as much." }
        ]
      },
      quiz: [
        { q: "50% as a fraction is...", options: ["1/2", "1/4", "2/5", "5/10"], answer: 0, hint: "Half of 100." },
        { q: "10% of 200 = ?", options: ["10", "20", "30", "40"], answer: 1, hint: "Divide by 10." },
        { q: "25% of 80 = ?", options: ["16", "20", "24", "25"], answer: 1, hint: "A quarter of 80." },
        { q: "1% of 500 = ?", options: ["1", "5", "10", "50"], answer: 1, hint: "Divide 500 by 100." },
        { q: "Which is the same as 1/4?", options: ["4%", "25%", "40%", "14%"], answer: 1, hint: "1/4 x 100." },
        { q: "20% of 50 = ?", options: ["5", "10", "15", "20"], answer: 1, hint: "10% is 5, so double it." },
        { q: "I scored 18 out of 20. What percent is that?", options: ["80%", "85%", "90%", "95%"], answer: 2, hint: "18/20 = 90/100." },
        { q: "100% of 45 = ?", options: ["0", "4.5", "45", "450"], answer: 2, hint: "100% means the whole thing." },
        { q: "10% of 70 = ?", options: ["7", "10", "17", "70"], answer: 0, hint: "Divide by 10." },
        { q: "25% of 100 = ?", options: ["20", "25", "40", "75"], answer: 1, hint: "A quarter of 100." }
      ]
    },
    {
      id: "c5-simpleint",
      icon: "🏦",
      name: "Simple Interest",
      desc: "Interest on money saved or borrowed.",
      lesson: {
        intro: "When we keep money in a bank, the bank pays us extra money called interest.",
        sections: [
          { type: "h3", text: "The formula" },
          { type: "p", text: "Simple Interest = (Principal x Rate x Time) / 100." },
          { type: "example", text: "1000 at 5% for 2 years: (1000 x 5 x 2) / 100 = 100." },
          { type: "h3", text: "Amount" },
          { type: "p", text: "Total amount = Principal + Interest = 1000 + 100 = 1100." },
          { type: "p", text: "Principal is the money we start with. Rate is the percent per year. Time is in years." },
          { type: "h3", text: "Working it out step by step" },
          { type: "p", text: "For 500 at 10% for 1 year: first find 10% of 500 = 50. So the interest is 50." },
          { type: "tip", text: "Tip: Rate is given as 'per cent per year' and time is in years." }
        ]
      },
      quiz: [
        { q: "Principal means...", options: ["the interest", "the money borrowed or saved", "the time", "the rate"], answer: 1, hint: "The starting amount." },
        { q: "SI on 1000 at 5% for 2 years?", options: ["50", "100", "150", "200"], answer: 1, hint: "(1000 x 5 x 2) / 100." },
        { q: "SI on 500 at 10% for 1 year?", options: ["5", "50", "100", "500"], answer: 1, hint: "10% of 500." },
        { q: "Amount = Principal + ?", options: ["Rate", "Time", "Interest", "Tax"], answer: 2, hint: "What the bank adds." },
        { q: "SI on 200 at 5% for 1 year?", options: ["5", "10", "20", "40"], answer: 1, hint: "5% of 200." },
        { q: "SI on 1000 at 10% for 1 year?", options: ["10", "50", "100", "200"], answer: 2, hint: "10% of 1000." },
        { q: "If Principal = 2000 and SI = 200, the amount is?", options: ["1800", "2000", "2200", "2400"], answer: 2, hint: "Principal + Interest." },
        { q: "SI on 400 at 5% for 2 years?", options: ["20", "40", "60", "80"], answer: 1, hint: "(400 x 5 x 2) / 100." },
        { q: "Rate is given as a percentage per...", options: ["day", "month", "year", "hour"], answer: 2, hint: "The formula uses years." },
        { q: "SI on 600 at 10% for 1 year?", options: ["6", "60", "600", "66"], answer: 1, hint: "10% of 600." }
      ]
    },
    {
      id: "c5-volume",
      icon: "📦",
      name: "Volume & Shapes",
      desc: "Cubes, cuboids and volume.",
      lesson: {
        intro: "Volume is the space a solid takes up. We measure it in cubic units.",
        sections: [
          { type: "h3", text: "Volume of a cuboid" },
          { type: "p", text: "Volume = length x breadth x height." },
          { type: "example", text: "A box 4 cm x 3 cm x 2 cm has volume 24 cubic cm." },
          { type: "h3", text: "Volume of a cube" },
          { type: "p", text: "A cube has all sides equal, so Volume = side x side x side." },
          { type: "example", text: "A cube of side 3 cm has volume 3 x 3 x 3 = 27 cm³." },
          { type: "h3", text: "Faces, edges and vertices" },
          { type: "p", text: "A cube has 6 faces, 12 edges and 8 vertices (corners)." },
          { type: "p", text: "A cuboid also has 6 faces, 12 edges and 8 vertices, but its faces are rectangles." },
          { type: "h3", text: "Capacity" },
          { type: "p", text: "Capacity tells how much a container holds. 1000 ml = 1 litre." },
          { type: "tip", text: "Tip: A cube is a cuboid with all sides equal." }
        ]
      },
      quiz: [
        { q: "Volume of 4 x 3 x 2 cm box?", options: ["9 cm³", "12 cm³", "24 cm³", "48 cm³"], answer: 2, hint: "Multiply all three." },
        { q: "How many faces does a cube have?", options: ["4", "6", "8", "12"], answer: 1, hint: "Top, bottom and four sides." },
        { q: "How many edges does a cube have?", options: ["6", "8", "12", "16"], answer: 2, hint: "Where two faces meet." },
        { q: "Volume is measured in...", options: ["cm", "cm²", "cm³", "kg"], answer: 2, hint: "Cubic units." },
        { q: "A cube of side 3 cm has volume...", options: ["9 cm³", "18 cm³", "27 cm³", "81 cm³"], answer: 2, hint: "3 x 3 x 3." },
        { q: "How many vertices (corners) does a cube have?", options: ["6", "8", "10", "12"], answer: 1, hint: "Count the corners." },
        { q: "Volume of 5 x 2 x 2 cm box?", options: ["9 cm³", "20 cm³", "18 cm³", "24 cm³"], answer: 1, hint: "5 x 2 x 2." },
        { q: "How many millilitres in 1 litre?", options: ["10", "100", "1000", "10000"], answer: 2, hint: "Same as grams in a kilogram." },
        { q: "A cube of side 2 cm has volume...", options: ["4 cm³", "6 cm³", "8 cm³", "16 cm³"], answer: 2, hint: "2 x 2 x 2." },
        { q: "Volume of 10 x 1 x 1 cm box?", options: ["10 cm³", "11 cm³", "12 cm³", "100 cm³"], answer: 0, hint: "10 x 1 x 1." }
      ]
    }
  ];

  global.MATHS_DATA = {
    "1": class1,
    "2": class2,
    "3": class3,
    "4": class4,
    "5": class5
  };
})(window);
