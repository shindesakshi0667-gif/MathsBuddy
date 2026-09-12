/* dashboard.js - home page: greeting, stats, AI chat and topic cards */
(function () {
  "use strict";

  var user = Store.requireUser();
  if (!user) return;

  var topics = (window.MATHS_DATA[user.cls] || []);

  /* ---------- header / hero ---------- */
  document.getElementById("student-badge").textContent = user.name + " • Class " + user.cls;
  document.getElementById("greeting").textContent = "Hi " + user.name + "! 👋";
  document.getElementById("topics-class-label").textContent = "Class " + user.cls;
  document.getElementById("hero-sub").textContent =
    "You are learning Class " + user.cls + " maths. Pick a topic below or ask the AI buddy anything.";

  var TIPS = [
    "Practise a little every day — 10 minutes is enough!",
    "Do not fear mistakes. Mistakes help your brain grow. 🌱",
    "Learn your times tables — they make everything easier.",
    "Try to explain what you learnt to a friend.",
    "Read the question twice before you answer.",
    "Use your fingers or draw a picture if a sum feels hard.",
    "Finish each topic quiz to earn XP and stars! ⭐"
  ];
  document.getElementById("mascot-tip").textContent = TIPS[Math.floor(Math.random() * TIPS.length)];

  function renderStats() {
    var p = Store.progress(user.key);
    var row = document.getElementById("stat-row");
    row.innerHTML =
      '<span class="stat">⭐ ' + p.xp + ' XP</span>' +
      '<span class="stat">🏅 Level ' + Store.level(p.xp) + '</span>' +
      '<span class="stat">📝 ' + p.quizzes + ' quiz' + (p.quizzes === 1 ? "" : "zes") + ' done</span>';
  }
  renderStats();

  /* ---------- topic cards ---------- */
  function renderTopics() {
    var grid = document.getElementById("topic-grid");
    grid.innerHTML = "";
    topics.forEach(function (topic) {
      var result = Store.topicResult(user.key, topic.id);
      var percent = result ? result.percent : 0;

      var card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML =
        '<div class="topic-icon">' + topic.icon + '</div>' +
        '<p class="topic-name">' + topic.name + '</p>' +
        '<p class="topic-desc">' + topic.desc + '</p>' +
        '<div class="topic-meter"><span style="width:' + percent + '%"></span></div>' +
        '<p class="topic-progress-text">' + (result ? "Best score: " + result.best + " (" + percent + "%)" : "Not attempted yet") + '</p>';

      var actions = document.createElement("div");
      actions.className = "topic-actions";

      var learn = document.createElement("a");
      learn.className = "btn btn-ghost btn-sm";
      learn.textContent = "📖 Learn";
      learn.href = "lesson.html?topic=" + encodeURIComponent(topic.id);

      var quiz = document.createElement("a");
      quiz.className = "btn btn-primary btn-sm";
      quiz.textContent = "✏️ Quiz";
      quiz.href = "quiz.html?topic=" + encodeURIComponent(topic.id);

      actions.appendChild(learn);
      actions.appendChild(quiz);
      card.appendChild(actions);
      grid.appendChild(card);
    });
  }
  renderTopics();

  /* ---------- AI chat ---------- */
  var chatWindow = document.getElementById("chat-window");
  var chatForm = document.getElementById("chat-form");
  var chatInput = document.getElementById("chat-input");

  function addMessage(text, who) {
    var bubble = document.createElement("div");
    bubble.className = "msg " + who;
    bubble.innerHTML = escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return bubble;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  addMessage("Hi " + user.name + "! I am your AI Maths Buddy 🦉 Ask me a sum, a table, or ask me to explain a topic.", "ai");

  function renderSuggestions() {
    var box = document.getElementById("chat-suggestions");
    box.innerHTML = "";
    AI.suggestions().forEach(function (text) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "suggestion";
      chip.textContent = text;
      chip.addEventListener("click", function () { send(text); });
      box.appendChild(chip);
    });
  }
  renderSuggestions();

  function send(text) {
    var question = (text || chatInput.value).trim();
    if (!question) return;
    addMessage(question, "user");
    chatInput.value = "";

    var typing = addMessage("Thinking...", "ai");
    typing.classList.add("typing");

    setTimeout(function () {
      typing.classList.remove("typing");
      typing.innerHTML = escapeHtml(AI.ask(question, user.cls)).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 350);
  }

  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();
    send();
  });

  document.getElementById("clear-chat").addEventListener("click", function () {
    chatWindow.innerHTML = "";
    addMessage("Chat cleared! Ask me anything about maths. 😊", "ai");
  });

  document.getElementById("logout-button").addEventListener("click", function () {
    Store.logout();
    window.location.href = "login.html";
  });
})();
