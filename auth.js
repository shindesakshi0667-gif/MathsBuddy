/* auth.js - login page behaviour */
(function () {
  "use strict";

  var form = document.getElementById("login-form");
  var nameInput = document.getElementById("student-name");
  var classInput = document.getElementById("student-class");
  var pinInput = document.getElementById("student-pin");
  var errorBox = document.getElementById("login-error");
  var returning = document.getElementById("returning-users");
  var chips = document.getElementById("user-chips");

  /* Already logged in? Go straight to the dashboard. */
  if (Store.currentUser()) {
    window.location.replace("dashboard.html");
    return;
  }

  function showError(message) {
    errorBox.textContent = message || "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var result = Store.login(nameInput.value, classInput.value, pinInput.value);
    if (!result.ok) { showError(result.error); return; }
    showError("");
    window.location.href = "dashboard.html";
  });

  /* Quick-pick for students who already used this device. */
  function renderSavedUsers() {
    var users = Store.listUsers();
    if (!users.length) { returning.classList.add("hidden"); return; }
    chips.innerHTML = "";
    users.forEach(function (user) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "user-chip";
      button.innerHTML = user.name + "<small>Class " + user.cls + "</small>";
      button.addEventListener("click", function () {
        nameInput.value = user.name;
        classInput.value = user.cls;
        pinInput.focus();
        showError("");
      });
      chips.appendChild(button);
    });
    returning.classList.remove("hidden");
  }

  renderSavedUsers();
})();
