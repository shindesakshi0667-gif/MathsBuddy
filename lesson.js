/* lesson.js - concept building page */
(function () {
  "use strict";

  var user = Store.requireUser();
  if (!user) return;

  var topics = window.MATHS_DATA[user.cls] || [];
  var params = new URLSearchParams(window.location.search);
  var index = topics.findIndex(function (t) { return t.id === params.get("topic"); });
  if (index < 0) index = 0;
  var topic = topics[index];

  document.getElementById("lesson-class").textContent = "Class " + user.cls + " • " + topic.icon + " Topic";
  document.getElementById("lesson-title").textContent = topic.name;
  document.title = "MathsBuddy - " + topic.name;

  /* ---------- build the lesson body ---------- */
  var body = document.getElementById("lesson-body");
  body.innerHTML = '<p class="subtitle">' + topic.lesson.intro + '</p>';

  topic.lesson.sections.forEach(function (block) {
    var el;
    if (block.type === "h3") {
      el = document.createElement("h3");
      el.textContent = block.text;
    } else if (block.type === "example") {
      el = document.createElement("div");
      el.className = "example-box";
      el.textContent = "Example: " + block.text;
    } else if (block.type === "tip") {
      el = document.createElement("div");
      el.className = "tip-box";
      el.textContent = block.text;
    } else {
      el = document.createElement("p");
      el.textContent = block.text;
    }
    body.appendChild(el);
  });

  /* ---------- quiz + next topic links ---------- */
  document.getElementById("quiz-link").href = "quiz.html?topic=" + encodeURIComponent(topic.id);

  var nextButton = document.getElementById("next-topic");
  var nextTopic = topics[index + 1];
  if (nextTopic) {
    nextButton.textContent = "Next: " + nextTopic.name + " →";
    nextButton.addEventListener("click", function () {
      window.location.href = "lesson.html?topic=" + encodeURIComponent(nextTopic.id);
    });
  } else {
    nextButton.textContent = "🏠 Back to topics";
    nextButton.addEventListener("click", function () {
      window.location.href = "dashboard.html";
    });
  }
  document.getElementById("logout-button").addEventListener("click", function () {
    Store.logout();
    window.location.href = "login.html";
  });

  /* ---------- inline AI helper ---------- */
  var aiPanel = document.getElementById("ai-inline-panel");
  var chatWindow = document.getElementById("chat-window");
  var chatForm = document.getElementById("chat-form");
  var chatInput = document.getElementById("chat-input");

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function addMessage(text, who) {
    var bubble = document.createElement("div");
    bubble.className = "msg " + who;
    bubble.innerHTML = escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return bubble;
  }

  document.getElementById("ai-help-button").addEventListener("click", function () {
    aiPanel.classList.toggle("hidden");
    if (!aiPanel.classList.contains("hidden") && !chatWindow.children.length) {
      addMessage("Ask me anything about " + topic.name + "! For example: \"" + topic.name + "\"", "ai");
    }
    if (!aiPanel.classList.contains("hidden")) chatInput.focus();
  });
  document.getElementById("close-ai").addEventListener("click", function () {
    aiPanel.classList.add("hidden");
  });

  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var question = chatInput.value.trim();
    if (!question) return;
    addMessage(question, "user");
    chatInput.value = "";
    var typing = addMessage("Thinking...", "ai");
    setTimeout(function () {
      typing.innerHTML = escapeHtml(AI.ask(question, user.cls)).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 300);
  });
})();
