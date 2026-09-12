/* storage.js - local accounts + progress (saved in this browser) */
(function (global) {
  "use strict";

  var USERS_KEY = "mathsbuddy.users";       // [{name, cls, pin}]
  var SESSION_KEY = "mathsbuddy.session";   // current user key
  var PROGRESS_KEY = "mathsbuddy.progress"; // { userKey: { xp, quizzes, byTopic: {topicId: best%} } }

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  function userKey(name, cls) {
    return (name || "").trim().toLowerCase() + "-c" + cls;
  }

  var Store = {
    /* ---------- accounts ---------- */
    listUsers: function () {
      return read(USERS_KEY, []);
    },

    /* Returns {ok:true, user} or {ok:false, error} */
    login: function (name, cls, pin) {
      name = (name || "").trim();
      cls = String(cls || "").trim();
      pin = String(pin || "").trim();

      if (name.length < 2) return { ok: false, error: "Please enter your name (at least 2 letters)." };
      if (!/^[1-5]$/.test(cls)) return { ok: false, error: "Please choose a class between 1 and 5." };
      if (!/^\d{4}$/.test(pin)) return { ok: false, error: "Your secret PIN must be exactly 4 digits." };

      var key = userKey(name, cls);
      var users = read(USERS_KEY, []);
      var found = null;
      for (var i = 0; i < users.length; i++) {
        if (users[i].key === key) { found = users[i]; break; }
      }

      if (found) {
        if (found.pin !== pin) return { ok: false, error: "That PIN does not match. Try again." };
      } else {
        found = { key: key, name: name, cls: cls, pin: pin };
        users.push(found);
        write(USERS_KEY, users);
      }

      write(SESSION_KEY, key);
      return { ok: true, user: found };
    },

    currentUser: function () {
      var key = read(SESSION_KEY, null);
      if (!key) return null;
      var users = read(USERS_KEY, []);
      for (var i = 0; i < users.length; i++) {
        if (users[i].key === key) return users[i];
      }
      return null;
    },

    logout: function () {
      try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
    },

    /* Redirect helper for pages that need a logged-in student. */
    requireUser: function () {
      var user = Store.currentUser();
      if (!user) { window.location.replace("login.html"); return null; }
      return user;
    },

    /* ---------- progress ---------- */
    progress: function (key) {
      var all = read(PROGRESS_KEY, {});
      var p = all[key];
      if (!p) p = { xp: 0, quizzes: 0, stars: 0, byTopic: {} };
      if (!p.byTopic) p.byTopic = {};
      return p;
    },

    saveProgress: function (key, progress) {
      var all = read(PROGRESS_KEY, {});
      all[key] = progress;
      write(PROGRESS_KEY, all);
    },

    /* Record a finished quiz. Returns the updated progress object. */
    recordQuiz: function (key, topicId, correct, total) {
      var p = Store.progress(key);
      var percent = total ? Math.round((correct / total) * 100) : 0;
      var stars = percent >= 90 ? 3 : percent >= 70 ? 2 : percent >= 50 ? 1 : 0;

      p.xp += correct * 10;
      p.quizzes += 1;
      p.stars += stars;

      var prev = p.byTopic[topicId];
      if (!prev || percent > prev.percent) {
        p.byTopic[topicId] = { percent: percent, stars: stars, best: correct + "/" + total };
      }
      Store.saveProgress(key, p);
      return p;
    },

    topicResult: function (key, topicId) {
      return Store.progress(key).byTopic[topicId] || null;
    },

    level: function (xp) {
      return Math.floor(xp / 100) + 1;
    }
  };

  global.Store = Store;
})(window);
