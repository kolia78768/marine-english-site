// =====================================================
// MARINE ENGINEER ENGLISH — Главная логика (v4.0)
// =====================================================

// ============ КОНСТАНТЫ ============
const STORAGE = {
  XP: "me_xp",
  STREAK: "me_streak",
  LAST_DAY: "me_last_day",
  TODAY_XP: "me_today_xp",
  WORD_STATS: "me_word_stats",
  ACHIEVEMENTS: "me_achievements",
  LEARNED: "me_learned_words",
  SETTINGS: "me_settings",
  TOTAL_CORRECT: "me_total_correct",
  TOTAL_WRONG: "me_total_wrong",
  TOTAL_LESSONS: "me_total_lessons",
  CONVENTION_SCORES: "me_conv_scores",
  READING_DONE: "me_reading_done",
  EMERGENCY_DONE: "me_emergency_done"
};

const DAILY_GOAL = 50;

const LEVELS = [
  { name: "Cadet", icon: "🎓", xp: 0 },
  { name: "Wiper", icon: "🧹", xp: 100 },
  { name: "Motorman", icon: "🔧", xp: 300 },
  { name: "4th Engineer", icon: "⚙️", xp: 700 },
  { name: "3rd Engineer", icon: "🔩", xp: 1400 },
  { name: "2nd Engineer", icon: "⚡", xp: 2500 },
  { name: "Chief Engineer", icon: "👑", xp: 4000 }
];

const ACHIEVEMENTS = [
  { id: "first_lesson", icon: "🎯", name: "Первые шаги", desc: "Пройдите первый урок" },
  { id: "five_lessons", icon: "📚", name: "Прилежный", desc: "Пройдите 5 уроков" },
  { id: "twenty_lessons", icon: "🔥", name: "Фанат", desc: "Пройдите 20 уроков" },
  { id: "fifty_words", icon: "💎", name: "Словарный запас", desc: "Выучите 50 слов" },
  { id: "hundred_words", icon: "🏅", name: "Сотня", desc: "Выучите 100 слов" },
  { id: "two_hundred_words", icon: "🏆", name: "Двести", desc: "Выучите 200 слов" },
  { id: "streak_3", icon: "🔥", name: "3 дня подряд", desc: "Занимайтесь 3 дня подряд" },
  { id: "streak_7", icon: "🌟", name: "Неделя!", desc: "Занимайтесь 7 дней подряд" },
  { id: "streak_30", icon: "💫", name: "Месяц!", desc: "Занимайтесь 30 дней подряд" },
  { id: "perfect_lesson", icon: "✨", name: "Идеально", desc: "Пройдите урок без ошибок" },
  { id: "exam_master", icon: "🎓", name: "Экзаменатор", desc: "Пройдите экзамен на 90%+" },
  { id: "speed_king", icon: "⚡", name: "Скоростной", desc: "10 вопросов за 60 секунд" },
  { id: "chief_level", icon: "👑", name: "Старший механик", desc: "Достигните уровня Chief Engineer" },
  { id: "convention_master", icon: "📜", name: "Знаток конвенций", desc: "Пройдите все 4 экзамена по конвенциям" },
  { id: "emergency_ready", icon: "🚨", name: "Готов к ЧС", desc: "Пройдите все аварийные сценарии" },
  { id: "reading_master", icon: "📖", name: "Начитанный", desc: "Прочитайте все 7 текстов" },
  { id: "perfect_reading", icon: "🎯", name: "Понимающий", desc: "Пройдите тест по тексту на 100%" }
];

// ============ ХРАНИЛИЩЕ ============
const store = {
  get(key, def = null) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }
    catch { return def; }
  },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
};

let userState = {
  xp: store.get(STORAGE.XP, 0),
  streak: store.get(STORAGE.STREAK, 0),
  lastDay: store.get(STORAGE.LAST_DAY, null),
  todayXp: store.get(STORAGE.TODAY_XP, 0),
  wordStats: store.get(STORAGE.WORD_STATS, {}),
  achievements: store.get(STORAGE.ACHIEVEMENTS, []),
  learned: store.get(STORAGE.LEARNED, {}),
  totalCorrect: store.get(STORAGE.TOTAL_CORRECT, 0),
  totalWrong: store.get(STORAGE.TOTAL_WRONG, 0),
  totalLessons: store.get(STORAGE.TOTAL_LESSONS, 0),
  convScores: store.get(STORAGE.CONVENTION_SCORES, {}),
  readingDone: store.get(STORAGE.READING_DONE, []),
  emergencyDone: store.get(STORAGE.EMERGENCY_DONE, []),
  settings: store.get(STORAGE.SETTINGS, {
    reminderTime: 19,
    sound: true,
    speed: 0.85,
    transcription: true,
    dark: true
  })
};

function saveUserState() {
  store.set(STORAGE.XP, userState.xp);
  store.set(STORAGE.STREAK, userState.streak);
  store.set(STORAGE.LAST_DAY, userState.lastDay);
  store.set(STORAGE.TODAY_XP, userState.todayXp);
  store.set(STORAGE.WORD_STATS, userState.wordStats);
  store.set(STORAGE.ACHIEVEMENTS, userState.achievements);
  store.set(STORAGE.LEARNED, userState.learned);
  store.set(STORAGE.TOTAL_CORRECT, userState.totalCorrect);
  store.set(STORAGE.TOTAL_WRONG, userState.totalWrong);
  store.set(STORAGE.TOTAL_LESSONS, userState.totalLessons);
  store.set(STORAGE.CONVENTION_SCORES, userState.convScores);
  store.set(STORAGE.READING_DONE, userState.readingDone);
  store.set(STORAGE.EMERGENCY_DONE, userState.emergencyDone);
  store.set(STORAGE.SETTINGS, userState.settings);
}

// ============ УТИЛИТЫ ============
function shuffle(a) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function todayStr() { return new Date().toDateString(); }

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(msg, type = "info", dur = 2200) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.className = "toast " + type;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), dur);
}

// ============ ГЕЙМИФИКАЦИЯ ============
function updateStreak() {
  const today = todayStr();
  if (userState.lastDay === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (userState.lastDay === yesterday.toDateString()) {
    userState.streak++;
  } else {
    userState.streak = 1;
  }
  userState.lastDay = today;
  userState.todayXp = 0;
  saveUserState();
}

function getLevel() {
  let lvl = LEVELS[0];
  for (const l of LEVELS) if (userState.xp >= l.xp) lvl = l;
  return lvl;
}

function getNextLevel() {
  for (const l of LEVELS) if (userState.xp < l.xp) return l;
  return null;
}

function updateHeaderUI() {
  const lvl = getLevel();
  const next = getNextLevel();
  const lIcon = document.getElementById("level-icon");
  const lName = document.getElementById("level-name");
  const lStreak = document.getElementById("streak-count");
  if (lIcon) lIcon.textContent = lvl.icon;
  if (lName) lName.textContent = lvl.name;
  if (lStreak) lStreak.textContent = userState.streak;

  const xpBar = document.getElementById("xp-bar-mini");
  if (xpBar) {
    if (next) {
      const cur = lvl.xp, nxt = next.xp;
      const pct = Math.min(100, ((userState.xp - cur) / (nxt - cur)) * 100);
      xpBar.style.width = pct + "%";
    } else {
      xpBar.style.width = "100%";
    }
  }

  const todayXpEl = document.getElementById("today-xp");
  const dailyFill = document.getElementById("daily-goal-fill");
  const dailyHint = document.getElementById("daily-goal-hint");
  if (todayXpEl) todayXpEl.textContent = userState.todayXp;
  if (dailyFill) {
    const dailyPct = Math.min(100, (userState.todayXp / DAILY_GOAL) * 100);
    dailyFill.style.width = dailyPct + "%";
  }
  if (dailyHint) {
    if (userState.todayXp >= DAILY_GOAL) {
      dailyHint.textContent = "🎉 Цель дня выполнена!";
    } else {
      dailyHint.textContent = `Осталось заработать ${DAILY_GOAL - userState.todayXp} XP`;
    }
  }
}

function addXP(amount) {
  userState.xp += amount;
  userState.todayXp += amount;
  saveUserState();
  updateHeaderUI();
  checkLevelUp();
  checkAchievements();
}

let lastLevel = null;
function checkLevelUp() {
  const current = getLevel();
  if (lastLevel && lastLevel.name !== current.name && current.xp > 0) {
    showToast(`${current.icon} Новый уровень: ${current.name}!`, "gold", 3500);
  }
  lastLevel = current;
}

function checkAchievements() {
  const learned = Object.values(userState.learned).filter(v => v >= 2).length;
  const checks = {
    first_lesson: () => userState.totalLessons >= 1,
    five_lessons: () => userState.totalLessons >= 5,
    twenty_lessons: () => userState.totalLessons >= 20,
    fifty_words: () => learned >= 50,
    hundred_words: () => learned >= 100,
    two_hundred_words: () => learned >= 200,
    streak_3: () => userState.streak >= 3,
    streak_7: () => userState.streak >= 7,
    streak_30: () => userState.streak >= 30,
    chief_level: () => getLevel().name === "Chief Engineer",
    convention_master: () => Object.keys(userState.convScores).length >= 4,
    emergency_ready: () => userState.emergencyDone.length >= (window.EMERGENCIES ? window.EMERGENCIES.length : 0),
    reading_master: () => userState.readingDone.length >= (typeof READING_TEXTS !== "undefined" ? READING_TEXTS.length : 0)
  };
  for (const a of ACHIEVEMENTS) {
    if (userState.achievements.includes(a.id)) continue;
    if (checks[a.id] && checks[a.id]()) {
      userState.achievements.push(a.id);
      showToast(`🏆 Достижение: ${a.name}!`, "gold", 3500);
    }
  }
  saveUserState();
}

function unlockAchievement(id) {
  if (!userState.achievements.includes(id)) {
    userState.achievements.push(id);
    const a = ACHIEVEMENTS.find(x => x.id === id);
    if (a) showToast(`🏆 Достижение: ${a.name}!`, "gold", 3500);
    saveUserState();
  }
}

// ============ СЛОВА ============
function recordWord(word, correct) {
  if (!word) return;
  if (!userState.wordStats[word]) {
    userState.wordStats[word] = { correct: 0, wrong: 0 };
  }
  if (correct) {
    userState.wordStats[word].correct++;
    userState.totalCorrect++;
    userState.learned[word] = (userState.learned[word] || 0) + 1;
  } else {
    userState.wordStats[word].wrong++;
    userState.totalWrong++;
  }
  saveUserState();
}

function isLearned(word) {
  return (userState.learned[word] || 0) >= 2;
}

function getWeakWords(limit = 20) {
  const weak = WORDS.filter(w => {
    const s = userState.wordStats[w.word];
    return s && s.wrong > 0 && s.wrong >= s.correct;
  });
  return shuffle(weak).slice(0, limit);
}

function getNewWords(limit = 20) {
  const fresh = WORDS.filter(w => !userState.learned[w.word]);
  return shuffle(fresh).slice(0, limit);
}

// ============ ГЛАВНЫЙ ЭКРАН ============
function renderHome() {
  const list = document.getElementById("lesson-list");
  if (!list) return;
  list.innerHTML = "";
  let totalLearned = 0, totalWords = 0;

  Object.keys(TOPICS).forEach(topic => {
    const topicWords = WORDS.filter(w => w.topic === topic);
    if (topicWords.length === 0) return;
    const learned = topicWords.filter(w => isLearned(w.word)).length;
    totalLearned += learned;
    totalWords += topicWords.length;
    const pct = (learned / topicWords.length) * 100;
    const completed = learned === topicWords.length;

    const card = document.createElement("div");
    card.className = "lesson-card" + (completed ? " completed" : "");
    card.innerHTML = `
      <div class="lesson-card-icon">${TOPICS[topic].icon}</div>
      <div class="lesson-card-title">${TOPICS[topic].title}</div>
      <div class="lesson-card-meta">${learned} / ${topicWords.length}</div>
      <div class="lesson-card-progress"><div class="lesson-card-progress-fill" style="width:${pct}%"></div></div>`;
    card.onclick = () => startLesson(topic);
    list.appendChild(card);
  });

  const cntEl = document.getElementById("lessons-count");
  if (cntEl) cntEl.textContent = `${totalLearned} / ${totalWords} слов`;
  updateHeaderUI();
}

// ============ ГЕНЕРАЦИЯ ВОПРОСОВ ============
function generateQuestions(topic, count = 12, customWords = null, onlyType = null) {
  const topicWords = customWords
    ? shuffle(customWords)
    : (topic === "mix" ? shuffle(WORDS) : WORDS.filter(w => w.topic === topic));
  const topicSents = topic === "mix"
    ? shuffle(SENTENCES)
    : SENTENCES.filter(s => s.topic === topic);

  const questions = [];
  const Q = (q) => { if (!onlyType || onlyType === q.type) questions.push(q); };

  // en→ru
  if (!onlyType || onlyType === "en2ru") {
    shuffle(topicWords).slice(0, 3).forEach(w => {
      const wrong = shuffle(WORDS.filter(x => x.word !== w.word && x.translation !== w.translation)).slice(0, 3);
      Q({
        type: "en2ru", word: w.word, question: w.word,
        sub: userState.settings.transcription ? w.transcription : "",
        options: shuffle([w.translation, ...wrong.map(x => x.translation)]),
        correct: w.translation, hint: w.example
      });
    });
  }

  // ru→en
  if (!onlyType || onlyType === "ru2en") {
    shuffle(topicWords).slice(0, 3).forEach(w => {
      const wrong = shuffle(WORDS.filter(x => x.word !== w.word)).slice(0, 3);
      Q({
        type: "ru2en", word: w.word, question: w.translation,
        sub: "",
        options: shuffle([w.word, ...wrong.map(x => x.word)]),
        correct: w.word,
        hint: `Тема: ${TOPICS[w.topic] ? TOPICS[w.topic].title : w.topic}`
      });
    });
  }

  // fill
  if (!onlyType || onlyType === "fill") {
    topicSents.slice(0, 2).forEach(s => {
      const opts = s.options || shuffle([s.missing, "word1", "word2", "word3"]);
      Q({
        type: "fill", word: s.missing, question: s.sentence,
        sub: s.translation, options: shuffle(opts),
        correct: s.missing, hint: "Выберите слово по смыслу"
      });
    });
  }

  // spell
  if (!onlyType || onlyType === "spell") {
    const sw = topicWords[0];
    if (sw) Q({
      type: "spell", word: sw.word, question: sw.translation,
      sub: userState.settings.transcription ? sw.transcription : "",
      correct: sw.word.toLowerCase().trim(), hint: "Введите слово на английском"
    });
  }

  // listen
  if (!onlyType || onlyType === "listen") {
    const lw = topicWords[1] || topicWords[0];
    if (lw) {
      const wrong = shuffle(WORDS.filter(x => x.word !== lw.word)).slice(0, 3);
      Q({
        type: "listen", word: lw.word, question: lw.word,
        sub: "🔊 Нажмите кнопку",
        options: shuffle([lw.translation, ...wrong.map(x => x.translation)]),
        correct: lw.translation, hint: "Перевод услышанного"
      });
    }
  }

  // transcription
  if (!onlyType || onlyType === "transcription") {
    const tw = topicWords[2] || topicWords[0];
    if (tw) {
      const wrong = shuffle(WORDS.filter(x => x.word !== tw.word)).slice(0, 3);
      Q({
        type: "transcription", word: tw.word, question: tw.word,
        sub: "Выберите правильную транскрипцию",
        options: shuffle([tw.transcription, ...wrong.map(x => x.transcription)]),
        correct: tw.transcription, hint: ""
      });
    }
  }

  // match
  if (!onlyType || onlyType === "match") {
    const mw = shuffle(topicWords).slice(0, 4);
    if (mw.length >= 4) {
      Q({
        type: "match", question: "Соедините пары",
        pairs: mw.map(w => ({ en: w.word, ru: w.translation })),
        word: mw[0].word, correct: mw[0].translation,
        hint: "Кликните слово и его перевод"
      });
    }
  }

  // build
  if (!onlyType || onlyType === "build") {
    if (topicSents.length > 0) {
      const s = topicSents[0];
      const words = s.sentence.replace(/_____/g, s.missing).split(/\s+/);
      Q({
        type: "build", word: s.missing, question: s.translation,
        sentence: s.sentence, words: words,
        correct: s.sentence.replace(/_____/g, s.missing),
        hint: "Соберите английское предложение"
      });
    }
  }

  // truefalse
  if (!onlyType || onlyType === "truefalse") {
    const tf = topicWords[3] || topicWords[0];
    if (tf) {
      const isCorrect = Math.random() > 0.5;
      const wrongTrans = WORDS.find(x => x.word !== tf.word && x.translation !== tf.translation);
      Q({
        type: "truefalse", word: tf.word, question: tf.word,
        sub: isCorrect ? tf.translation : (wrongTrans ? wrongTrans.translation : "test"),
        correct: isCorrect ? "true" : "false",
        hint: "Верный ли перевод?"
      });
    }
  }

  // flip
  if (!onlyType || onlyType === "flip") {
    const fw = topicWords[4] || topicWords[0];
    if (fw) Q({
      type: "flip", word: fw.word, question: fw.word,
      sub: "Нажмите, чтобы перевернуть",
      correct: fw.translation,
      translation: fw.translation, transcription: fw.transcription,
      hint: ""
    });
  }

  return shuffle(questions).slice(0, count);
}

// ============ СОСТОЯНИЕ УРОКА ============
let lesson = null;
let timerInterval = null;

function startLesson(topic) {
  updateStreak();
  const questions = generateQuestions(topic, 12);
  if (questions.length === 0) { showToast("В этой теме нет слов", "error"); return; }
  lesson = {
    topic,
    title: TOPICS[topic] ? (TOPICS[topic].icon + " " + TOPICS[topic].title) : "🎲 Микс",
    questions, index: 0, correct: 0, total: questions.length, xpEarned: 0
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

function startMixExam() {
  updateStreak();
  const questions = generateQuestions("mix", 20);
  lesson = {
    topic: "mix", title: "🎲 Смешанный экзамен",
    questions, index: 0, correct: 0, total: questions.length,
    xpEarned: 0, isExam: true
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

function startWeakWords() {
  const weak = getWeakWords(15);
  if (weak.length < 3) { showToast("Слабых слов пока мало", "info"); return; }
  updateStreak();
  const questions = [];
  weak.forEach(w => {
    const wrong = shuffle(WORDS.filter(x => x.word !== w.word)).slice(0, 3);
    questions.push({
      type: "en2ru", word: w.word, question: w.word,
      sub: userState.settings.transcription ? w.transcription : "",
      options: shuffle([w.translation, ...wrong.map(x => x.translation)]),
      correct: w.translation, hint: w.example
    });
  });
  lesson = {
    topic: "weak", title: "💪 Слабые слова",
    questions: shuffle(questions),
    index: 0, correct: 0, total: questions.length, xpEarned: 0
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

function startNewWords() {
  const fresh = getNewWords(12);
  if (fresh.length < 3) { showToast("Все слова уже изучены! 🎉", "info"); return; }
  updateStreak();
  const questions = [];
  fresh.forEach(w => {
    const wrong = shuffle(WORDS.filter(x => x.word !== w.word)).slice(0, 3);
    questions.push({
      type: "en2ru", word: w.word, question: w.word,
      sub: userState.settings.transcription ? w.transcription : "",
      options: shuffle([w.translation, ...wrong.map(x => x.translation)]),
      correct: w.translation, hint: w.example
    });
  });
  lesson = {
    topic: "new", title: "✨ Только новые слова",
    questions: shuffle(questions),
    index: 0, correct: 0, total: questions.length, xpEarned: 0
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

function startSpeedRound() {
  updateStreak();
  const questions = generateQuestions("mix", 10);
  lesson = {
    topic: "speed", title: "⚡ Скоростной раунд",
    questions, index: 0, correct: 0, total: questions.length,
    xpEarned: 0, timeLeft: 60, isSpeed: true
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  startTimer();
  renderQuestion();
}

function startOnlySentences() {
  updateStreak();
  const sentSents = shuffle(SENTENCES).slice(0, 8);
  const questions = [];
  sentSents.forEach(s => {
    questions.push({
      type: "fill", word: s.missing, question: s.sentence,
      sub: s.translation,
      options: shuffle(s.options || [s.missing, "word1", "word2", "word3"]),
      correct: s.missing, hint: "Вставьте слово"
    });
    const words = s.sentence.replace(/_____/g, s.missing).split(/\s+/);
    questions.push({
      type: "build", word: s.missing, question: s.translation,
      sentence: s.sentence, words: shuffle(words),
      correct: s.sentence.replace(/_____/g, s.missing),
      hint: "Соберите предложение"
    });
  });
  lesson = {
    topic: "sentences", title: "📝 Только предложения",
    questions: shuffle(questions).slice(0, 12),
    index: 0, correct: 0, total: 0, xpEarned: 0
  };
  lesson.total = lesson.questions.length;
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

function startOnlySpelling() {
  updateStreak();
  const words = shuffle(WORDS).slice(0, 12);
  const questions = words.map(w => ({
    type: "spell", word: w.word, question: w.translation,
    sub: userState.settings.transcription ? w.transcription : "",
    correct: w.word.toLowerCase().trim(), hint: "Введите слово"
  }));
  lesson = {
    topic: "spelling", title: "✍️ Только диктант",
    questions, index: 0, correct: 0, total: questions.length, xpEarned: 0
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

function startOnlyListening() {
  updateStreak();
  const words = shuffle(WORDS).slice(0, 12);
  const questions = words.map(w => {
    const wrong = shuffle(WORDS.filter(x => x.word !== w.word)).slice(0, 3);
    return {
      type: "listen", word: w.word, question: w.word,
      sub: "🔊 Нажмите кнопку",
      options: shuffle([w.translation, ...wrong.map(x => x.translation)]),
      correct: w.translation, hint: ""
    };
  });
  lesson = {
    topic: "listening", title: "🎧 Только аудирование",
    questions, index: 0, correct: 0, total: questions.length, xpEarned: 0
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

function startMarathon() {
  updateStreak();
  const questions = generateQuestions("mix", 50);
  lesson = {
    topic: "marathon", title: "🏃 Марафон (50 вопросов)",
    questions, index: 0, correct: 0, total: questions.length, xpEarned: 0
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!lesson || !lesson.isSpeed) { clearInterval(timerInterval); return; }
    lesson.timeLeft--;
    const qc = document.getElementById("q-counter");
    if (qc) qc.textContent = `⏱ ${lesson.timeLeft}s`;
    if (lesson.timeLeft <= 0) {
      clearInterval(timerInterval);
      showToast("⏰ Время вышло!", "error");
      setTimeout(() => showResult(), 500);
    }
  }, 1000);
}

// ============ ОТРИСОВКА ВОПРОСА ============
function renderQuestion() {
  const c = document.getElementById("question-container");
  const r = document.getElementById("lesson-result");
  if (!c || !r) return;
  r.classList.add("hidden");
  c.classList.remove("hidden");

  if (!lesson || lesson.index >= lesson.questions.length) { showResult(); return; }
  const q = lesson.questions[lesson.index];

  document.getElementById("q-counter").textContent = `${lesson.index + 1} / ${lesson.total}`;
  document.getElementById("lesson-progress-fill").style.width = ((lesson.index) / lesson.total * 100) + "%";

  if (q.type === "en2ru" || q.type === "ru2en") {
    c.innerHTML = `
      <div class="question-label">${q.type === "en2ru" ? "Выберите перевод" : "Выберите слово"}</div>
      <div class="question-word">${q.question}</div>
      ${q.sub ? `<div class="question-transcription">${q.sub}</div>` : ""}
      <div class="options" id="opts"></div>`;
    renderOptions(q.options, q.correct, q);
  }
  else if (q.type === "fill") {
    c.innerHTML = `
      <div class="question-label">Вставьте пропущенное слово</div>
      <div class="question-sentence">${q.question}</div>
      <div class="question-transcription">${q.sub || ""}</div>
      <div class="options" id="opts"></div>`;
    renderOptions(q.options, q.correct, q);
  }
  else if (q.type === "spell") {
    c.innerHTML = `
      <div class="question-label">Напишите слово по-английски</div>
      <div class="question-word">${q.question}</div>
      ${q.sub ? `<div class="question-transcription">${q.sub}</div>` : ""}
      <input type="text" class="input-answer" id="spell-input"
             placeholder="Введите слово..." autocomplete="off" spellcheck="false">
      <button class="submit-btn" id="spell-submit">Проверить</button>`;
    const inp = document.getElementById("spell-input");
    inp.focus();
    const submit = () => checkSpelling(inp.value.trim().toLowerCase(), q.correct, q);
    document.getElementById("spell-submit").onclick = submit;
    inp.onkeydown = e => { if (e.key === "Enter") submit(); };
  }
  else if (q.type === "listen") {
    c.innerHTML = `
      <div class="question-label">Прослушайте и выберите перевод</div>
      <button class="tts-btn" id="tts-play">🔊</button>
      <div class="options" id="opts"></div>`;
    const btn = document.getElementById("tts-play");
    btn.onclick = () => { btn.classList.add("playing"); speak(q.question, () => btn.classList.remove("playing")); };
    setTimeout(() => btn.click(), 400);
    renderOptions(q.options, q.correct, q);
  }
  else if (q.type === "transcription") {
    c.innerHTML = `
      <div class="question-label">Правильная транскрипция</div>
      <div class="question-word">${q.question}</div>
      <div class="options" id="opts"></div>`;
    renderOptions(q.options, q.correct, q);
  }
  else if (q.type === "match") renderMatching(q);
  else if (q.type === "build") renderBuild(q);
  else if (q.type === "truefalse") {
    c.innerHTML = `
      <div class="question-label">Верный ли перевод?</div>
      <div class="question-word">${q.question}</div>
      <div class="question-transcription" style="font-size:1.3rem;color:var(--warning);margin:16px 0;">${q.sub}</div>
      <div class="options" id="opts"></div>`;
    const box = document.getElementById("opts");
    ["✅ Да, верно", "❌ Нет, неверно"].forEach((label, i) => {
      const b = document.createElement("button");
      b.className = "option-btn";
      b.textContent = label;
      b.onclick = () => {
        const userAns = i === 0 ? "true" : "false";
        const ok = userAns === q.correct;
        document.querySelectorAll(".option-btn").forEach(x => x.disabled = true);
        b.classList.add(ok ? "correct" : "wrong");
        if (!ok) {
          const correctBtn = document.querySelectorAll(".option-btn")[q.correct === "true" ? 0 : 1];
          if (correctBtn) correctBtn.classList.add("correct");
        }
        handleAnswer(q, ok);
      };
      box.appendChild(b);
    });
  }
  else if (q.type === "flip") {
    c.innerHTML = `
      <div class="question-label">Карточка-переворот</div>
      <div class="flip-card" id="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="question-word">${q.question}</div>
            <div style="color:var(--text-dim);margin-top:10px;font-size:0.85rem;">Нажмите</div>
          </div>
          <div class="flip-card-back">
            <div class="answer">${q.translation}</div>
            <div class="transcription">${q.transcription || ""}</div>
          </div>
        </div>
      </div>
      <button class="submit-btn" id="flip-next">Дальше →</button>`;
    const card = document.getElementById("flip-card");
    let flipped = false;
    card.onclick = () => {
      card.classList.toggle("flipped");
      if (!flipped) { flipped = true; speak(q.question); }
    };
    document.getElementById("flip-next").onclick = () => {
      lesson.correct++;
      lesson.xpEarned += 3;
      addXP(3);
      recordWord(q.word, true);
      lesson.index++;
      renderQuestion();
    };
  }
}

function renderOptions(options, correct, q) {
  const box = document.getElementById("opts");
  box.innerHTML = "";
  options.forEach(opt => {
    const b = document.createElement("button");
    b.className = "option-btn";
    b.textContent = opt;
    b.onclick = () => {
      const ok = opt === correct;
      document.querySelectorAll(".option-btn").forEach(x => x.disabled = true);
      b.classList.add(ok ? "correct" : "wrong");
      if (!ok) {
        document.querySelectorAll(".option-btn").forEach(x => {
          if (x.textContent === correct) x.classList.add("correct");
        });
      }
      handleAnswer(q, ok);
    };
    box.appendChild(b);
  });
}

function renderMatching(q) {
  const c = document.getElementById("question-container");
  const left = shuffle(q.pairs.map(p => p.en));
  const right = shuffle(q.pairs.map(p => p.ru));
  c.innerHTML = `
    <div class="question-label">Соедините пары</div>
    <div class="matching-container">
      <div class="matching-column" id="col-left">
        ${left.map(x => `<div class="match-item" data-side="en" data-val="${x}">${x}</div>`).join("")}
      </div>
      <div class="matching-column" id="col-right">
        ${right.map(x => `<div class="match-item" data-side="ru" data-val="${x}">${x}</div>`).join("")}
      </div>
    </div>`;
  let selEn = null, selRu = null, matched = 0;
  c.querySelectorAll(".match-item").forEach(el => {
    el.onclick = () => {
      if (el.classList.contains("matched")) return;
      if (el.dataset.side === "en") {
        if (selEn) selEn.classList.remove("selected");
        selEn = el;
      } else {
        if (selRu) selRu.classList.remove("selected");
        selRu = el;
      }
      el.classList.add("selected");
      if (selEn && selRu) {
        const pair = q.pairs.find(p => p.en === selEn.dataset.val);
        if (pair && pair.ru === selRu.dataset.val) {
          selEn.classList.remove("selected");
          selRu.classList.remove("selected");
          selEn.classList.add("matched");
          selRu.classList.add("matched");
          matched++;
          recordWord(selEn.dataset.val, true);
          if (matched === q.pairs.length) {
            setTimeout(() => handleAnswer(q, true), 400);
          }
        } else {
          selEn.classList.remove("selected");
          selRu.classList.remove("selected");
          recordWord(selEn.dataset.val, false);
          showToast("❌ Не та пара", "error", 1000);
        }
        selEn = null; selRu = null;
      }
    };
  });
}

function renderBuild(q) {
  const c = document.getElementById("question-container");
  const shuffled = shuffle(q.words);
  c.innerHTML = `
    <div class="question-label">Соберите предложение</div>
    <div class="question-sentence">${q.question}</div>
    <div class="assembled-area" id="assembled"></div>
    <div class="word-bank" id="bank">
      ${shuffled.map((w, i) => `<div class="word-chip" data-i="${i}" data-w="${w}">${w}</div>`).join("")}
    </div>
    <button class="submit-btn" id="build-check">Проверить</button>`;
  const assembled = document.getElementById("assembled");
  const userWords = [];
  c.querySelectorAll(".word-chip").forEach(chip => {
    chip.onclick = () => {
      if (chip.classList.contains("used")) return;
      chip.classList.add("used");
      userWords.push(chip.dataset.w);
      const el = document.createElement("div");
      el.className = "assembled-word";
      el.textContent = chip.dataset.w;
      el.onclick = () => {
        const idx = userWords.indexOf(chip.dataset.w);
        if (idx > -1) userWords.splice(idx, 1);
        chip.classList.remove("used");
        el.remove();
      };
      assembled.appendChild(el);
    };
  });
  document.getElementById("build-check").onclick = () => {
    const userSentence = userWords.join(" ").trim().replace(/\s+/g, " ");
    const correctSentence = q.correct.replace(/\s+/g, " ").trim();
    const ok = userSentence.toLowerCase() === correctSentence.toLowerCase();
    handleAnswer(q, ok, correctSentence);
  };
}

function checkSpelling(value, correct, q) {
  handleAnswer(q, value === correct, correct);
}

function handleAnswer(q, ok, correctOverride) {
  const correct = correctOverride || q.correct;
  if (ok) {
    lesson.correct++;
    const xp = lesson.isSpeed ? 7 : 5;
    lesson.xpEarned += xp;
    addXP(xp);
    recordWord(q.word, true);
    showToast("✅ Верно! +" + xp + " XP", "success", 1200);
  } else {
    recordWord(q.word, false);
    showToast("❌ Правильно: " + correct, "error", 1800);
  }
  setTimeout(() => {
    lesson.index++;
    renderQuestion();
  }, ok ? 700 : 1400);
}

function showResult() {
  clearInterval(timerInterval);
  const c = document.getElementById("question-container");
  const r = document.getElementById("lesson-result");
  if (!c || !r) return;
  c.classList.add("hidden");
  r.classList.remove("hidden");

  const pct = Math.round(lesson.correct / lesson.total * 100);
  let emoji = "😐", text = "Попробуйте ещё раз!";
  if (pct >= 90) { emoji = "🏆"; text = "Великолепно!"; unlockAchievement("exam_master"); }
  else if (pct >= 80) { emoji = "🎉"; text = "Отличный результат!"; }
  else if (pct >= 60) { emoji = "👍"; text = "Хорошо!"; }
  if (pct === 100) unlockAchievement("perfect_lesson");
  if (lesson.isSpeed && lesson.correct >= 8) unlockAchievement("speed_king");

  userState.totalLessons++;
  saveUserState();
  checkAchievements();

  r.innerHTML = `
    <div class="result-emoji">${emoji}</div>
    <div class="result-score">${lesson.correct} / ${lesson.total}</div>
    <div class="result-text">${text}</div>
    <div class="result-xp">+${lesson.xpEarned} XP</div>
    <div class="result-buttons">
      <button class="btn-primary" onclick="retryLesson()">🔄 Ещё раз</button>
      <button class="btn-secondary" onclick="backHome()">🏠 На главную</button>
    </div>`;
  document.getElementById("lesson-progress-fill").style.width = "100%";
  renderHome();
}

function retryLesson() {
  if (!lesson) return;
  const t = lesson.topic;
  const fn = {
    mix: startMixExam, weak: startWeakWords, new: startNewWords,
    speed: startSpeedRound, sentences: startOnlySentences,
    spelling: startOnlySpelling, listening: startOnlyListening,
    marathon: startMarathon
  }[t];
  if (fn) fn(); else startLesson(t);
}

function backHome() {
  clearInterval(timerInterval);
  renderHome();
  showScreen("screen-home");
}

// ============ ОЗВУЧКА ============
function speak(text, onEnd) {
  if (!userState.settings.sound) { if (onEnd) onEnd(); return; }
  if (!("speechSynthesis" in window)) {
    showToast("Озвучка не поддерживается", "error");
    if (onEnd) onEnd();
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = userState.settings.speed || 0.85;
  if (onEnd) u.onend = onEnd;
  window.speechSynthesis.speak(u);
}

// =====================================================
// READING COMPREHENSION
// =====================================================

let currentReading = null;
let readingQuiz = null;

function renderReadingList() {
  const list = document.getElementById("reading-list");
  if (!list) return;
  list.innerHTML = "";
  if (typeof READING_TEXTS === "undefined") {
    list.innerHTML = "<p style='color:var(--danger);text-align:center'>Тексты не загружены</p>";
    return;
  }
  READING_TEXTS.forEach(text => {
    const done = userState.readingDone.includes(text.id);
    const card = document.createElement("div");
    card.className = "reading-card" + (done ? " done" : "");
    card.innerHTML = `
      <div class="reading-card-title">${text.title}</div>
      <div class="reading-card-desc">${text.description}</div>
      <div class="reading-card-meta">${text.topic} · ${text.questions.length} вопросов</div>`;
    card.onclick = () => openReadingText(text.id);
    list.appendChild(card);
  });
  showScreen("screen-reading");
}

function openReadingText(id) {
  const text = READING_TEXTS.find(t => t.id === id);
  if (!text) return;
  currentReading = text;

  document.getElementById("reading-title-h").textContent = text.title;
  document.getElementById("reading-text-title").textContent = text.title;

  // Оборачиваем технические термины в span для tooltip
  let html = text.text;
  const terms = Object.keys(TERMS).sort((a, b) => b.length - a.length); // сначала длинные
  terms.forEach(term => {
    const regex = new RegExp(`\\b${term}\\b`, "gi");
    html = html.replace(regex, (match) => {
      return `<span class="term" data-term="${term.toLowerCase()}">${match}</span>`;
    });
  });

  // Разбиваем на абзацы
  html = html.split(/\n\n+/).map(p => `<p style="margin-bottom:14px">${p}</p>`).join("");
  document.getElementById("reading-text-body").innerHTML = html;

  setupTooltips();
  showScreen("screen-reading-text");
}

function setupTooltips() {
  const tooltip = document.getElementById("tooltip-box");
  if (!tooltip) return;

  document.querySelectorAll(".term").forEach(el => {
    el.addEventListener("mouseenter", (e) => {
      const term = el.dataset.term;
      const translation = TERMS[term] || "...";
      tooltip.innerHTML = `<span class="tt-word">${el.textContent}</span><span class="tt-trans">${translation}</span>`;
      const rect = el.getBoundingClientRect();
      tooltip.style.left = Math.min(rect.left, window.innerWidth - 280) + "px";
      tooltip.style.top = (rect.bottom + 8) + "px";
      tooltip.classList.add("show");
    });
    el.addEventListener("mouseleave", () => {
      tooltip.classList.remove("show");
    });
    // Tap для мобильных
    el.addEventListener("touchstart", (e) => {
      const term = el.dataset.term;
      const translation = TERMS[term] || "...";
      tooltip.innerHTML = `<span class="tt-word">${el.textContent}</span><span class="tt-trans">${translation}</span>`;
      const rect = el.getBoundingClientRect();
      tooltip.style.left = Math.min(rect.left, window.innerWidth - 280) + "px";
      tooltip.style.top = (rect.bottom + 8) + "px";
      tooltip.classList.add("show");
      setTimeout(() => tooltip.classList.remove("show"), 2500);
    });
  });
}

function startReadingQuiz() {
  if (!currentReading) return;
  const questions = shuffle(currentReading.questions).map(q => ({
    type: "reading",
    question: q.q,
    options: q.options,
    correct: q.options[q.correct],
    readingId: currentReading.id
  }));
  readingQuiz = {
    id: currentReading.id,
    title: currentReading.title + " — Test",
    questions,
    index: 0,
    correct: 0,
    total: questions.length,
    xpEarned: 0
  };
  document.getElementById("reading-quiz-title").textContent = readingQuiz.title;
  showScreen("screen-reading-quiz");
  renderReadingQuestion();
}

function renderReadingQuestion() {
  const c = document.getElementById("reading-question-container");
  const r = document.getElementById("reading-quiz-result");
  if (!c || !r) return;
  r.classList.add("hidden");
  c.classList.remove("hidden");

  if (!readingQuiz || readingQuiz.index >= readingQuiz.questions.length) {
    showReadingResult();
    return;
  }
  const q = readingQuiz.questions[readingQuiz.index];

  document.getElementById("reading-q-counter").textContent =
    `${readingQuiz.index + 1} / ${readingQuiz.total}`;
  document.getElementById("reading-progress-fill").style.width =
    (readingQuiz.index / readingQuiz.total * 100) + "%";

  c.innerHTML = `
    <div class="question-label">📖 Reading Question</div>
    <div class="question-word" style="font-size:1.15rem;line-height:1.5;">${q.question}</div>
    <div class="options" id="reading-opts"></div>`;

  const box = document.getElementById("reading-opts");
  q.options.forEach(opt => {
    const b = document.createElement("button");
    b.className = "option-btn";
    b.textContent = opt;
    b.onclick = () => {
      const ok = opt === q.correct;
      document.querySelectorAll("#reading-opts .option-btn").forEach(x => x.disabled = true);
      b.classList.add(ok ? "correct" : "wrong");
      if (!ok) {
        document.querySelectorAll("#reading-opts .option-btn").forEach(x => {
          if (x.textContent === q.correct) x.classList.add("correct");
        });
      }
      if (ok) {
        readingQuiz.correct++;
        readingQuiz.xpEarned += 4;
        addXP(4);
        showToast("✅ Correct! +4 XP", "success", 1200);
      } else {
        showToast("❌ Correct: " + q.correct, "error", 1800);
      }
      setTimeout(() => {
        readingQuiz.index++;
        renderReadingQuestion();
      }, ok ? 700 : 1400);
    };
    box.appendChild(b);
  });
}

function showReadingResult() {
  document.getElementById("reading-question-container").classList.add("hidden");
  const r = document.getElementById("reading-quiz-result");
  r.classList.remove("hidden");

  const pct = Math.round(readingQuiz.correct / readingQuiz.total * 100);
  let emoji = "😐", text = "Попробуйте ещё раз!";
  if (pct >= 90) { emoji = "🏆"; text = "Excellent reading comprehension!"; }
  else if (pct >= 70) { emoji = "👍"; text = "Good job!"; }
  else if (pct >= 50) { emoji = "📖"; text = "Not bad, but read again carefully."; }

  if (pct === 100) unlockAchievement("perfect_reading");

  // Отмечаем текст прочитанным
  if (!userState.readingDone.includes(readingQuiz.id)) {
    userState.readingDone.push(readingQuiz.id);
    saveUserState();
  }
  checkAchievements();

  r.innerHTML = `
    <div class="result-emoji">${emoji}</div>
    <div class="result-score">${readingQuiz.correct} / ${readingQuiz.total}</div>
    <div class="result-text">${text}</div>
    <div class="result-xp">+${readingQuiz.xpEarned} XP</div>
    <div class="result-buttons">
      <button class="btn-primary" onclick="retryReading()">🔄 Retry</button>
      <button class="btn-secondary" onclick="renderReadingList()">📖 All texts</button>
    </div>`;
}

function retryReading() {
  if (!readingQuiz) return;
  const text = READING_TEXTS.find(t => t.id === readingQuiz.id);
  if (text) openReadingText(text.id);
}

// =====================================================
// АВАРИЙНЫЕ СЦЕНАРИИ (на английском)
// =====================================================

function renderEmergencyList() {
  showScreen("screen-emergency");
  const list = document.getElementById("emergency-list");
  if (!list) return;
  list.innerHTML = "";

  const emergencies = window.EMERGENCIES || [];
  if (emergencies.length === 0) {
    list.innerHTML = "<p style='text-align:center;color:var(--text-dim)'>No scenarios loaded</p>";
    return;
  }

  emergencies.forEach(e => {
    const done = userState.emergencyDone.includes(e.id);
    const card = document.createElement("div");
    card.className = "scenario-card";
    card.innerHTML = `
      <div class="scenario-title">${e.title}</div>
      <div class="scenario-desc">${e.desc}</div>
      <button class="submit-btn" style="width:auto; padding:9px 18px;">
        ${done ? "🔁 Repeat" : "▶ Start"} →
      </button>`;
    card.querySelector("button").onclick = () => openEmergency(e.id);
    list.appendChild(card);
  });
}

function openEmergency(id) {
  const e = (window.EMERGENCIES || []).find(x => x.id === id);
  if (!e) return;
  const list = document.getElementById("emergency-list");
  const steps = shuffle(e.steps);

  list.innerHTML = `
    <div class="dialog-scene">
      <div class="dialog-title">${e.title}</div>
      <div class="dialog-desc">${e.desc}</div>
      <p style="font-size:0.9rem; color:var(--text-dim); margin-bottom:16px;">
        ⚠️ Select the CORRECT actions. Do NOT select wrong actions.
      </p>
      <div id="emergency-steps" style="display:flex; flex-direction:column; gap:10px;">
        ${steps.map((s, i) => `
          <div class="scenario-action" data-i="${i}" data-ok="${s.ok}" style="
            background:var(--bg-3); padding:12px; border-radius:10px;
            cursor:pointer; border:2px solid transparent; transition:all 0.2s;">
            <div style="font-size:0.9rem;">${s.text}</div>
            <div class="why" style="display:none; margin-top:6px; font-size:0.8rem;"></div>
          </div>
        `).join("")}
      </div>
      <button class="submit-btn" style="margin-top:16px;" id="emergency-check">Check</button>
      <button class="back-btn" style="margin-top:10px;" onclick="renderEmergencyList()">← Back</button>
    </div>`;

  const selected = new Set();
  list.querySelectorAll(".scenario-action").forEach(el => {
    el.onclick = () => {
      const i = parseInt(el.dataset.i);
      if (selected.has(i)) {
        selected.delete(i);
        el.style.borderColor = "transparent";
        el.style.background = "var(--bg-3)";
      } else {
        selected.add(i);
        el.style.borderColor = "var(--accent)";
        el.style.background = "rgba(78,168,222,0.15)";
      }
    };
  });

  document.getElementById("emergency-check").onclick = () => {
    let userWrongCount = 0;
    list.querySelectorAll(".scenario-action").forEach(el => {
      const i = parseInt(el.dataset.i);
      const step = steps[i];
      const userChose = selected.has(i);
      const whyEl = el.querySelector(".why");
      el.style.cursor = "default";
      el.onclick = null;
      if (userChose && step.ok) {
        el.style.background = "var(--success)";
        el.style.color = "#000";
      } else if (userChose && !step.ok) {
        el.style.background = "var(--danger)";
        el.style.color = "#fff";
        whyEl.style.display = "block";
        whyEl.textContent = "❌ " + (step.why || "Wrong action");
        userWrongCount++;
      } else if (!userChose && step.ok) {
        el.style.background = "rgba(255,183,3,0.2)";
        el.style.borderColor = "var(--warning)";
        el.style.color = "var(--warning)";
        whyEl.style.display = "block";
        whyEl.textContent = "⚠️ Missed important action";
        userWrongCount++;
      } else {
        el.style.opacity = "0.4";
      }
    });

    const correctCount = e.steps.filter(s => s.ok).length;
    const userCorrectCount = [...selected].filter(i => steps[i].ok).length;
    let msg = `✅ Found: ${userCorrectCount}/${correctCount}`;
    if (userWrongCount > 0) msg += ` | ❌ Errors: ${userWrongCount}`;
    showToast(msg, userCorrectCount === correctCount && userWrongCount === 0 ? "success" : "info", 3500);

    if (userCorrectCount === correctCount && userWrongCount === 0) {
      addXP(15);
      if (!userState.emergencyDone.includes(e.id)) {
        userState.emergencyDone.push(e.id);
        saveUserState();
      }
      checkAchievements();
    }
    document.getElementById("emergency-check").textContent = "Repeat";
    document.getElementById("emergency-check").onclick = () => openEmergency(id);
  };
}

// =====================================================
// КОНВЕНЦИИ
// =====================================================

function renderConventions() {
  const list = document.getElementById("conventions-list");
  if (!list) return;
  list.innerHTML = "";

  Object.keys(CONVENTIONS).forEach(key => {
    const c = CONVENTIONS[key];
    const score = userState.convScores[key];
    const scoreText = score ? `${score.correct}/${score.total} (${Math.round(score.correct/score.total*100)}%)` : "Не пройден";

    const card = document.createElement("div");
    card.className = "doc-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div class="doc-title">${c.icon} ${c.title} — ${c.fullNameRu}</div>
      <p style="color:var(--text-dim); font-size:0.85rem; margin-bottom:12px;">${c.desc}</p>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
        ${c.topics.slice(0,4).map(t => `<span style="background:var(--bg-3); padding:4px 10px; border-radius:12px; font-size:0.75rem;">${t}</span>`).join("")}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div style="font-size:0.85rem; color:${score ? 'var(--success)' : 'var(--text-dim)'};">
          📊 ${scoreText}
        </div>
        <button class="submit-btn" style="width:auto; padding:9px 18px;">Пройти тест →</button>
      </div>`;
    card.querySelector("button").onclick = () => startConventionTest(key);
    list.appendChild(card);
  });
}

function startConventionTest(key) {
  const c = CONVENTIONS[key];
  const questions = shuffle(c.questions).map(q => ({
    type: "conv", convention: key,
    question: q.q, questionRu: q.qRu,
    options: q.options,
    correct: q.options[q.correct],
    explain: q.explain, word: null
  }));

  lesson = {
    topic: "conv_" + key,
    title: c.icon + " " + c.title + " — Тест",
    questions, index: 0, correct: 0, total: questions.length,
    xpEarned: 0, isConvention: true, conventionKey: key
  };
  document.getElementById("lesson-title").textContent = lesson.title;
  showScreen("screen-lesson");
  renderQuestion();
}

// Перехватываем renderQuestion для конвенций
const _originalRenderQuestion = renderQuestion;
renderQuestion = function() {
  const c = document.getElementById("question-container");
  const r = document.getElementById("lesson-result");
  if (!c || !r) return;

  if (lesson && lesson.isConvention && lesson.index < lesson.questions.length) {
    r.classList.add("hidden");
    c.classList.remove("hidden");
    const q = lesson.questions[lesson.index];
    document.getElementById("q-counter").textContent = `${lesson.index + 1} / ${lesson.total}`;
    document.getElementById("lesson-progress-fill").style.width = ((lesson.index) / lesson.total * 100) + "%";
    c.innerHTML = `
      <div class="question-label">📜 Вопрос по конвенции</div>
      <div class="question-word" style="font-size:1.1rem; line-height:1.4;">${q.question}</div>
      <div class="question-transcription" style="font-style:normal; font-size:0.85rem;">${q.questionRu}</div>
      <div class="options" id="opts"></div>`;
    const box = document.getElementById("opts");
    q.options.forEach(opt => {
      const b = document.createElement("button");
      b.className = "option-btn";
      b.textContent = opt;
      b.onclick = () => {
        const ok = opt === q.correct;
        document.querySelectorAll(".option-btn").forEach(x => x.disabled = true);
        b.classList.add(ok ? "correct" : "wrong");
        if (!ok) {
          document.querySelectorAll(".option-btn").forEach(x => {
            if (x.textContent === q.correct) x.classList.add("correct");
          });
        }
        handleConventionAnswer(q, ok);
      };
      box.appendChild(b);
    });
    return;
  }
  _originalRenderQuestion();
};

function handleConventionAnswer(q, ok) {
  if (ok) {
    lesson.correct++;
    lesson.xpEarned += 8;
    addXP(8);
    showToast("✅ Верно! +8 XP", "success", 1200);
  } else {
    showToast("❌ " + q.explain, "error", 2500);
  }
  setTimeout(() => {
    lesson.index++;
    if (lesson.index >= lesson.questions.length) {
      const key = lesson.conventionKey;
      const prev = userState.convScores[key];
      if (!prev || lesson.correct > prev.correct) {
        userState.convScores[key] = { correct: lesson.correct, total: lesson.total };
        saveUserState();
      }
      checkAchievements();
    }
    renderQuestion();
  }, ok ? 800 : 1800);
}

// =====================================================
// ДИАЛОГИ
// =====================================================

function renderDialogList() {
  const list = document.getElementById("dialogs-list");
  if (!list) return;
  list.innerHTML = "";
  showScreen("screen-dialogs");

  DIALOGS.forEach(d => {
    const card = document.createElement("div");
    card.className = "doc-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div class="doc-title">${d.title}</div>
      <p style="color:var(--text-dim); font-size:0.85rem; margin-bottom:12px;">${d.desc}</p>
      <button class="submit-btn" style="width:auto; padding:9px 18px;">Открыть →</button>`;
    card.onclick = () => openDialog(d.id);
    list.appendChild(card);
  });
}

function openDialog(id) {
  const d = DIALOGS.find(x => x.id === id);
  if (!d) return;
  const list = document.getElementById("dialogs-list");
  list.innerHTML = `
    <div class="dialog-scene">
      <div class="dialog-title">${d.title}</div>
      <div class="dialog-desc">${d.desc}</div>
      ${d.lines.map((line, i) => `
        <div class="dialog-line ${i % 2 === 0 ? 'left' : 'right'}">
          <div class="dialog-avatar">${line.avatar}</div>
          <div class="dialog-bubble">
            <div class="dialog-speaker">${line.speaker}</div>
            <div class="dialog-text-en">${line.en}
              <button style="background:transparent; border:none; cursor:pointer; font-size:1rem;"
                      onclick="speak('${line.en.replace(/'/g, "\\'")}')">🔊</button>
            </div>
            <div class="dialog-text-ru">${line.ru}</div>
          </div>
        </div>
      `).join("")}
      <div style="margin-top:20px; padding-top:20px; border-top:1px solid var(--bg-3);">
        <div style="font-weight:600; margin-bottom:10px; color:var(--accent);">
          🎯 Проверьте понимание:
        </div>
        <div style="font-size:0.95rem; margin-bottom:12px;">${d.quiz.q}</div>
        <div class="dialog-choices" id="dialog-choices">
          ${d.quiz.options.map((opt, i) => `
            <button class="option-btn" data-i="${i}">${opt}</button>
          `).join("")}
        </div>
      </div>
      <button class="back-btn" style="margin-top:20px;" onclick="renderDialogList()">← Ко всем диалогам</button>
    </div>`;

  list.querySelectorAll("#dialog-choices .option-btn").forEach(btn => {
    btn.onclick = () => {
      const i = parseInt(btn.dataset.i);
      const ok = i === d.quiz.correct;
      list.querySelectorAll("#dialog-choices .option-btn").forEach(b => b.disabled = true);
      btn.classList.add(ok ? "correct" : "wrong");
      if (!ok) {
        list.querySelectorAll("#dialog-choices .option-btn")[d.quiz.correct].classList.add("correct");
      }
      if (ok) {
        addXP(5);
        showToast("✅ Верно! +5 XP", "success");
      } else {
        showToast("❌ Попробуйте ещё раз", "error");
      }
    };
  });
}

// =====================================================
// ДОКУМЕНТЫ
// =====================================================

function renderDocs() {
  showScreen("screen-docs");
  const list = document.getElementById("docs-list");
  if (!list) return;
  list.innerHTML = "";

  DOCS.forEach(d => {
    const card = document.createElement("div");
    card.className = "doc-card";
    card.innerHTML = `
      <div class="doc-title">${d.title}</div>
      <p style="color:var(--text-dim); font-size:0.85rem; margin-bottom:10px;">${d.desc}</p>
      <p style="font-size:0.85rem; margin-bottom:14px;"><strong>Назначение:</strong> ${d.purpose}</p>
      <div class="doc-fields">
        ${d.fields.map(f => `
          <div class="doc-field">
            <span class="doc-field-name">${f.name}</span>
            <span class="doc-field-value">${f.value}</span>
          </div>
        `).join("")}
      </div>
      <div class="doc-example">💡 ${d.example}</div>`;
    list.appendChild(card);
  });
}

// =====================================================
// СЛОВАРЬ
// =====================================================

function renderDict(filter = "") {
  const list = document.getElementById("dict-list");
  if (!list) return;
  const f = filter.toLowerCase().trim();
  const filtered = f
    ? WORDS.filter(w => w.word.toLowerCase().includes(f) || w.translation.toLowerCase().includes(f))
    : WORDS;
  if (filtered.length === 0) {
    list.innerHTML = "<p style='color:var(--text-dim);text-align:center;padding:40px'>Ничего не найдено</p>";
    return;
  }
  list.innerHTML = filtered.slice(0, 300).map(w => `
    <div class="dict-item" onclick="speak('${w.word.replace(/'/g, "\\'")}')">
      <div>
        <div class="dict-item-word">${w.word} 🔉</div>
        <div class="dict-item-transcription">${w.transcription}</div>
        <div class="dict-item-topic">${TOPICS[w.topic] ? TOPICS[w.topic].title : w.topic}</div>
      </div>
      <div class="dict-item-translation">${w.translation}</div>
    </div>`).join("");
}

// =====================================================
// СТАТИСТИКА
// =====================================================

function renderStats() {
  const learned = Object.values(userState.learned).filter(v => v >= 2).length;
  const lvl = getLevel();
  const totalAnswers = userState.totalCorrect + userState.totalWrong;
  const accuracy = totalAnswers > 0 ? Math.round(userState.totalCorrect / totalAnswers * 100) : 0;

  const statsContent = document.getElementById("stats-content");
  if (!statsContent) return;
  statsContent.innerHTML = `
    <div class="stat-card gold"><div class="stat-card-value">${userState.xp}</div><div class="stat-card-label">Всего XP</div></div>
    <div class="stat-card"><div class="stat-card-value">${lvl.icon}<br>${lvl.name}</div><div class="stat-card-label">Уровень</div></div>
    <div class="stat-card green"><div class="stat-card-value">${learned}</div><div class="stat-card-label">Слов выучено</div></div>
    <div class="stat-card"><div class="stat-card-value">${WORDS.length}</div><div class="stat-card-label">Всего слов</div></div>
    <div class="stat-card"><div class="stat-card-value">🔥 ${userState.streak}</div><div class="stat-card-label">Дней подряд</div></div>
    <div class="stat-card"><div class="stat-card-value">${accuracy}%</div><div class="stat-card-label">Точность</div></div>
    <div class="stat-card green"><div class="stat-card-value">${userState.totalCorrect}</div><div class="stat-card-label">Верных</div></div>
    <div class="stat-card red"><div class="stat-card-value">${userState.totalWrong}</div><div class="stat-card-label">Ошибок</div></div>
    <div class="stat-card"><div class="stat-card-value">${userState.totalLessons}</div><div class="stat-card-label">Уроков пройдено</div></div>
    <div class="stat-card"><div class="stat-card-value">${Object.keys(userState.convScores).length}/4</div><div class="stat-card-label">Конвенций сдано</div></div>
    <div class="stat-card"><div class="stat-card-value">${userState.readingDone.length}/${typeof READING_TEXTS !== 'undefined' ? READING_TEXTS.length : 0}</div><div class="stat-card-label">Текстов прочитано</div></div>
    <div class="stat-card"><div class="stat-card-value">${userState.emergencyDone.length}/${window.EMERGENCIES ? window.EMERGENCIES.length : 0}</div><div class="stat-card-label">ЧС пройдено</div></div>
  `;

  const topicStats = document.getElementById("topic-stats");
  if (!topicStats) return;
  topicStats.innerHTML = "";
  Object.keys(TOPICS).forEach(topic => {
    const ws = WORDS.filter(w => w.topic === topic);
    if (ws.length === 0) return;
    const learnedCount = ws.filter(w => isLearned(w.word)).length;
    const pct = (learnedCount / ws.length) * 100;
    const row = document.createElement("div");
    row.className = "topic-stat-row";
    row.innerHTML = `
      <div class="topic-stat-icon">${TOPICS[topic].icon}</div>
      <div class="topic-stat-info">
        <div class="topic-stat-name">${TOPICS[topic].title}</div>
        <div class="topic-stat-bar"><div class="topic-stat-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="topic-stat-count">${learnedCount}/${ws.length}</div>`;
    topicStats.appendChild(row);
  });
}

// =====================================================
// ДОСТИЖЕНИЯ
// =====================================================

function renderAchievements() {
  const grid = document.getElementById("achievements-grid");
  if (!grid) return;
  grid.innerHTML = "";
  ACHIEVEMENTS.forEach(a => {
    const unlocked = userState.achievements.includes(a.id);
    const el = document.createElement("div");
    el.className = "achievement " + (unlocked ? "unlocked" : "locked");
    el.innerHTML = `
      <div class="achievement-icon">${unlocked ? a.icon : "🔒"}</div>
      <div class="achievement-name">${a.name}</div>
      <div class="achievement-desc">${a.desc}</div>`;
    grid.appendChild(el);
  });
}

// =====================================================
// НАСТРОЙКИ
// =====================================================

function applySettings() {
  const s = userState.settings;
  const rt = document.getElementById("setting-reminder-time");
  const snd = document.getElementById("setting-sound");
  const spd = document.getElementById("setting-speed");
  const tr = document.getElementById("setting-transcription");
  const dk = document.getElementById("setting-dark");
  if (rt) rt.value = s.reminderTime;
  if (snd) snd.checked = s.sound;
  if (spd) spd.value = s.speed;
  if (tr) tr.checked = s.transcription;
  if (dk) dk.checked = s.dark;
  document.body.classList.toggle("light", !s.dark);
}

function saveSettings() {
  store.set(STORAGE.SETTINGS, userState.settings);
}

// =====================================================
// НАПОМИНАНИЯ
// =====================================================

function setupReminder() {
  if (!("Notification" in window)) {
    showToast("Браузер не поддерживает уведомления", "error");
    return;
  }
  Notification.requestPermission().then(p => {
    if (p === "granted") {
      showToast(`✅ Напоминания на ${userState.settings.reminderTime}:00`, "success");
      localStorage.setItem("me_reminder_on", "1");
      scheduleReminder();
    } else {
      showToast("Уведомления отклонены", "error");
    }
  });
}

function scheduleReminder() {
  if (localStorage.getItem("me_reminder_on") !== "1") return;
  setInterval(() => {
    const now = new Date();
    const today = now.toDateString();
    const key = "me_last_remind";
    if (localStorage.getItem(key) === today) return;
    if (now.getHours() >= userState.settings.reminderTime) {
      try {
        new Notification("⚓ Marine Engineer English", {
          body: "Пора заниматься! Всего 15 минут в день!",
          icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚓</text></svg>"
        });
      } catch (e) {}
      localStorage.setItem(key, today);
    }
  }, 60000);
}

// =====================================================
// PWA
// =====================================================

let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById("btn-install-pwa");
  if (btn) btn.style.display = "inline-block";
});

function installPWA() {
  if (!deferredPrompt) {
    showToast("Откройте меню браузера → 'Установить приложение'", "info", 3500);
    return;
  }
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      showToast("✅ Приложение установлено!", "success");
      const btn = document.getElementById("btn-install-pwa");
      if (btn) btn.style.display = "none";
    }
    deferredPrompt = null;
  });
}

// =====================================================
// ИНИЦИАЛИЗАЦИЯ
// =====================================================

function initApp() {
  const bSet = document.getElementById("btn-settings");
  const bDict = document.getElementById("btn-dict");
  const bStats = document.getElementById("btn-stats");
  const bAch = document.getElementById("btn-achieve");

  if (bSet) bSet.onclick = () => { applySettings(); showScreen("screen-settings"); };
  if (bDict) bDict.onclick = () => { renderDict(); showScreen("screen-dict"); };
  if (bStats) bStats.onclick = () => { renderStats(); showScreen("screen-stats"); };
  if (bAch) bAch.onclick = () => { renderAchievements(); showScreen("screen-achieve"); };

  const bBack = document.getElementById("btn-back");
  if (bBack) bBack.onclick = backHome;
  const bReadingBack = document.getElementById("btn-reading-back");
  if (bReadingBack) bReadingBack.onclick = () => { renderReadingList(); };

  const ds = document.getElementById("dict-search");
  if (ds) ds.oninput = e => renderDict(e.target.value);

  // Настройки
  const rt = document.getElementById("setting-reminder-time");
  if (rt) rt.onchange = e => {
    userState.settings.reminderTime = parseInt(e.target.value);
    saveSettings();
    showToast(`⏰ Напоминание в ${e.target.value}:00`, "success");
  };
  const snd = document.getElementById("setting-sound");
  if (snd) snd.onchange = e => {
    userState.settings.sound = e.target.checked;
    saveSettings();
    showToast(e.target.checked ? "🔊 Озвучка вкл" : "🔇 Озвучка выкл", "info");
  };
  const spd = document.getElementById("setting-speed");
  if (spd) spd.onchange = e => {
    userState.settings.speed = parseFloat(e.target.value);
    saveSettings();
    speak("This is a test");
  };
  const tr = document.getElementById("setting-transcription");
  if (tr) tr.onchange = e => {
    userState.settings.transcription = e.target.checked;
    saveSettings();
  };
  const dk = document.getElementById("setting-dark");
  if (dk) dk.onchange = e => {
    userState.settings.dark = e.target.checked;
    saveSettings();
    document.body.classList.toggle("light", !e.target.checked);
    showToast(e.target.checked ? "🌙 Тёмная" : "☀️ Светлая", "info");
  };
  const bNotif = document.getElementById("btn-enable-notif");
  if (bNotif) bNotif.onclick = setupReminder;
  const bInstall = document.getElementById("btn-install-pwa");
  if (bInstall) bInstall.onclick = installPWA;
  const bReset = document.getElementById("btn-reset");
  if (bReset) bReset.onclick = () => {
    if (!confirm("⚠️ Удалить ВЕСЬ прогресс?")) return;
    if (!confirm("Точно? XP, достижения, статистика будут потеряны.")) return;
    localStorage.clear();
    showToast("🗑️ Прогресс сброшен", "info");
    setTimeout(() => location.reload(), 1200);
  };

  // Специальные модули
  document.querySelectorAll("[onclick*='screen-conventions']").forEach(el => {
    el.onclick = () => { renderConventions(); showScreen("screen-conventions"); };
  });
  document.querySelectorAll("[onclick*='screen-docs']").forEach(el => {
    el.onclick = () => renderDocs();
  });

  // Проверка нового дня
  const today = todayStr();
  if (userState.lastDay !== today) {
    userState.todayXp = 0;
    saveUserState();
  }

  applySettings();
  renderHome();
  if (localStorage.getItem("me_reminder_on") === "1") scheduleReminder();

  console.log("✅ Marine Engineer English v4.0 готово!");
  console.log("  · Слов:", WORDS.length);
  console.log("  · Конвенций:", Object.keys(CONVENTIONS).length);
  console.log("  · Диалогов:", DIALOGS.length);
  console.log("  · ЧС сценариев:", window.EMERGENCIES ? window.EMERGENCIES.length : 0);
  console.log("  · Текстов для чтения:", typeof READING_TEXTS !== 'undefined' ? READING_TEXTS.length : 0);
  console.log("  · Терминов для tooltip:", typeof TERMS !== 'undefined' ? Object.keys(TERMS).length : 0);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}