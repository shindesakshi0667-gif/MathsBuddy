/* quiz.js - topic quiz engine: topic picker, questions, hints, streaks, timer and results */
(function () {
  "use strict";

  var user = Store.requireUser();
  if (!user) return;

  var topics = window.MATHS_DATA[user.cls] || [];
  var params = new URLSearchParams(window.location.search);
  var requested = params.get("topic");
  var topic = topics.filter(function (t) { return t.id === requested; })[0] || null;

  var picker = document.getElementById("quiz-picker");
  var screen = document.getElementById("quiz-screen");
  var result = document.getElementById("quiz-result");

  var questions = [], current = 0, score = 0, streak = 0, bestStreak = 0, answered = false;
  var timerId = null, seconds = 0;

  /* celebration messages shown above the options */
  var COMBO = [
    { at: 2, text: "🔥 2 in a row! Keep going!" },
    { at: 3, text: "⚡ Hat-trick! You are on fire!" },
    { at: 4, text: "🌟 4 in a row — amazing!" },
    { at: 5, text: "🚀 5 in a row — unstoppable!" },
    { at: 7, text: "🏆 7 in a row — maths champion!" },
    { at: 10, text: "👑 PERFECT RUN! Legendary!" }
  ];
  var PRAISE = ["Correct! 🎉", "Well done! ⭐", "Brilliant! 🌟", "Superb! ✅", "You nailed it! 💪", "Excellent! 🚀"];

  document.getElementById("logout-button").addEventListener("click", function () {
    Store.logout();
    window.location.href = "login.html";
  });

  /* ---------- timer ---------- */
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function startTimer() {
    stopTimer();
    seconds = 0;
    updateTimerLabel();
    timerId = setInterval(function () {
      seconds++;
      updateTimerLabel();
    }, 1000);
  }
  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }
  function updateTimerLabel() {
    var el = document.getElementById("q-timer");
    if (el) el.textContent = "⏱ " + pad(Math.floor(seconds / 60)) + ":" + pad(seconds % 60);
  }

  /* ---------- confetti burst ---------- */
  function burst() {
    var emojis = ["🎉", "⭐", "✨", "🎊", "💫"];
    for (var i = 0; i < 14; i++) {
      var bit = document.createElement("span");
      bit.className = "confetti";
      bit.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      bit.style.left = Math.random() * 100 + "vw";
      bit.style.animationDelay = (Math.random() * 0.3) + "s";
      document.body.appendChild(bit);
      (function (node) {
        setTimeout(function () { node.remove(); }, 1800);
      })(bit);
    }
  }

  /* ---------- topic picker ---------- */
  function showPicker() {
    picker.classList.remove("hidden");
    document.getElementById("picker-sub").textContent =
      "Class " + user.cls + " has " + topics.length + " topics, each with a 10-question quiz. Choose one!";
    var grid = document.getElementById("picker-grid");
    grid.innerHTML = "";
    topics.forEach(function (t) {
      var res = Store.topicResult(user.key, t.id);
      var card = document.createElement("button");
      card.type = "button";
      card.className = "quiz-card";

      var nameEl = document.createElement("p");
      nameEl.className = "topic-name";
      nameEl.textContent = [t.icon, t.name].join(" ");
      nameEl.style.fontSize = "16px";

      var descEl = document.createElement("p");
      descEl.className = "topic-desc";
      descEl.textContent = t.quiz.length + " questions • win up to 3 stars";

      var progressEl = document.createElement("p");
      progressEl.className = "topic-progress-text";
      progressEl.textContent = res ? "Best: " + res.best : "Not attempted yet";

      card.appendChild(nameEl);
      card.appendChild(descEl);
      card.appendChild(progressEl);
      card.addEventListener("click", function () { startQuiz(t); });
      grid.appendChild(card);
    });
  }

  /* ---------- quiz flow ---------- */
  function startQuiz(chosen) {
    topic = chosen;
    questions = chosen.quiz.slice();
    current = 0;
    score = 0;
    streak = 0;
    bestStreak = 0;
    picker.classList.add("hidden");
    result.classList.add("hidden");
    screen.classList.remove("hidden");
    document.title = "MathsBuddy - " + chosen.name + " quiz";
    document.getElementById("quiz-topic-badge").textContent = [chosen.icon, chosen.name].join(" ");
    document.getElementById("q-progress-label").textContent = "Class " + user.cls;
    document.getElementById("badge-row").innerHTML = "";
    startTimer();
    renderQuestion();
  }

  function renderQuestion() {
    var q = questions[current];
    answered = false;

    document.getElementById("q-counter").textContent = "Question " + (current + 1) + " of " + questions.length;
    document.getElementById("q-score").textContent = "Score: " + score;
    document.getElementById("q-streak").textContent = "🔥 Streak: " + streak;
    document.getElementById("progress-fill").style.width = ((current / questions.length) * 100) + "%";
    document.getElementById("q-text").textContent = q.q;

    var banner = document.getElementById("combo-banner");
    banner.classList.add("hidden");
    banner.textContent = "";

    var feedback = document.getElementById("q-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    var nextButton = document.getElementById("next-button");
    nextButton.disabled = true;
    nextButton.textContent = current === questions.length - 1 ? "Finish ✓" : "Next →";

    var list = document.getElementById("q-options");
    list.innerHTML = "";
    q.options.forEach(function (option, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.textContent = String.fromCharCode(65 + index) + ". " + option;
      button.addEventListener("click", function () { answer(index, button); });
      list.appendChild(button);
    });
  }

  function answer(selected, button) {
    if (answered) return;
    answered = true;
    var q = questions[current];
    var buttons = document.querySelectorAll("#q-options .option");
    var feedback = document.getElementById("q-feedback");

    buttons.forEach(function (b) { b.disabled = true; });
    buttons[q.answer].classList.add("correct");

    if (selected === q.answer) {
      score++;
      streak++;
      if (streak > bestStreak) bestStreak = streak;
      feedback.textContent = PRAISE[Math.floor(Math.random() * PRAISE.length)] + " +10 XP";
      feedback.className = "feedback correct";

      var combo = COMBO.filter(function (c) { return c.at === streak; })[0];
      if (combo) {
        var banner = document.getElementById("combo-banner");
        banner.textContent = combo.text;
        banner.classList.remove("hidden");
        burst();
      }
    } else {
      streak = 0;
      button.classList.add("wrong");
      feedback.textContent = "Not quite. The answer is " + q.options[q.answer] + ". You’ll get the next one! 💪";
      feedback.className = "feedback wrong";
    }
    document.getElementById("q-score").textContent = "Score: " + score;
    document.getElementById("q-streak").textContent = "🔥 Streak: " + streak;
    document.getElementById("next-button").disabled = false;
  }

  function finish() {
    stopTimer();
    var p = Store.recordQuiz(user.key, topic.id, score, questions.length);
    var total = questions.length;
    var percent = Math.round((score / total) * 100);
    screen.classList.add("hidden");
    result.classList.remove("hidden");

    var emoji = percent >= 90 ? "🏆" : percent >= 70 ? "🎉" : percent >= 50 ? "👍" : "💪";
    document.getElementById("result-emoji").textContent = emoji;
    document.getElementById("result-title").textContent =
      percent >= 90 ? "Outstanding!" :
      percent >= 70 ? "Great work!" :
      percent >= 50 ? "Well done!" : "Keep practising!";
    document.getElementById("result-message").textContent =
      user.name + ", you scored " + score + " out of " + total + " in " + topic.name +
      " (" + percent + "%) in " + pad(Math.floor(seconds / 60)) + ":" + pad(seconds % 60) + ".";

    /* badges earned */
    var badges = [];
    var medal = score >= 8 ? "🥇" : score >= 5 ? "🥈" : "🥉";
    badges.push([medal, score + "/" + total, "correct"].join(" "));
    if (percent >= 90) badges.push("🌟 Star Performer");
    if (bestStreak >= 5) badges.push("🔥 Streak Master");
    if (seconds <= 60) badges.push("⚡ Speed Star");
    var badgeRow = document.getElementById("badge-row");
    badgeRow.innerHTML = "";
    badges.forEach(function (text) {
      var chip = document.createElement("span");
      chip.className = "badge-chip";
      chip.textContent = text;
      badgeRow.appendChild(chip);
    });

    document.getElementById("result-stats").className = "stat-row light";
    document.getElementById("result-stats").innerHTML =
      '<span class="stat">Score: ' + score + "/" + total + '</span>' +
      '<span class="stat">XP earned: +' + (score * 10) + '</span>' +
      '<span class="stat">Best streak: ' + bestStreak + '</span>' +
      '<span class="stat">Total XP: ' + p.xp + '</span>' +
      '<span class="stat">Level ' + Store.level(p.xp) + '</span>';

    if (percent >= 70) burst();
  }

  document.getElementById("next-button").addEventListener("click", function () {
    if (current === questions.length - 1) { finish(); return; }
    current++;
    renderQuestion();
  });

  document.getElementById("hint-button").addEventListener("click", function () {
    var feedback = document.getElementById("q-feedback");
    feedback.textContent = AI.quizHint(questions[current]);
    if (!answered) feedback.className = "feedback hint";
  });

  document.getElementById("retry-button").addEventListener("click", function () {
    result.classList.add("hidden");
    startQuiz(topic);
  });

  /* ---------- entry ---------- */
  if (topic) {
    startQuiz(topic);
  } else {
    document.getElementById("quiz-topic-badge").textContent = "Class " + user.cls + " quizzes";
    showPicker();
  }
})();
