/* =========================================================
   Français en route · A2–C1
   Aplicación estática (sin build). Los contenidos están en /data.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Configuración ----------
     DEFAULT_MODE: null = preguntar al alumno la primera vez.
     "open" = todo abierto · "prog" = desbloqueo progresivo.
     También se puede forzar con la URL: ?modo=abierto o ?modo=progresivo */
  const CONFIG = {
    DEFAULT_MODE: null,
    HEARTS: 5,
    PASS_EXAM: 70,      // % necesario para aprobar el examen de nivel
    EXAM_QUESTIONS: 20,
    XP_OK: 10, XP_READ: 15, XP_SPEAK: 5, XP_LESSON: 20, XP_EXAM: 50
  };

  const DATA = window.CAMINO || [];
  const LEVELS = window.CAMINO_LEVELS || [];
  const KEY = "francais-en-route-a2-c1-v1";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const main = () => $("#main");

  /* ---------- Estado guardado ---------- */
  let S = { xp: 0, streak: 0, last: "", mode: null, done: {}, exam: {}, slow: false };
  try { Object.assign(S, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
  const urlMode = new URLSearchParams(location.search).get("modo");
  if (urlMode === "abierto" || urlMode === "open") S.mode = "open";
  if (urlMode === "progresivo" || urlMode === "prog") S.mode = "prog";
  if (!S.mode && CONFIG.DEFAULT_MODE) S.mode = CONFIG.DEFAULT_MODE;

  function rec(id) { return (S.done[id] = S.done[id] || {}); }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
    $("#xp").textContent = S.xp;
    $("#st").textContent = streakNow();
    const p = $("#modePill");
    p.textContent = S.mode === "prog" ? "🔒 Progresivo" : "🔓 Todo abierto";
    p.className = "mode-pill" + (S.mode === "prog" ? " prog" : "");
    p.title = "Cambiar modo de estudio";
  }

  /* ---------- Fechas y racha ---------- */
  const dayStr = d => d.toISOString().slice(0, 10);
  const today = () => dayStr(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
  const yesterday = () => dayStr(new Date(Date.now() - new Date().getTimezoneOffset() * 60000 - 864e5));
  function streakNow() { return S.last === today() || S.last === yesterday() ? S.streak : 0; }
  function bumpStreak() {
    const t = today();
    if (S.last === t) return;
    S.streak = S.last === yesterday() ? S.streak + 1 : 1;
    S.last = t;
  }

  /* ---------- Sonido y voz ---------- */
  let ac;
  function snd(f, d = 0.15, t = "sine") {
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = t; o.frequency.value = f; g.gain.value = 0.08;
      o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + d);
    } catch (e) {}
  }
  const good = () => { snd(660); setTimeout(() => snd(880), 110); };
  const bad = () => snd(180, 0.3, "sawtooth");
  const fanfare = () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => snd(f, 0.18), i * 120));

  let frVoice = null;
  function pickVoice() {
    try {
      const v = speechSynthesis.getVoices();
      frVoice = v.find(x => /^fr[-_]FR$/i.test(x.lang)) || null;
      const status = $("#voiceStatus");
      if (status) status.textContent = frVoice
        ? `Voz francesa de Francia activa: ${frVoice.name} (${frVoice.lang}).`
        : "No hay una voz fr-FR instalada. La app seguirá intentando reproducir el audio con el idioma francés de Francia; el acento dependerá de las voces disponibles en tu dispositivo.";
    } catch (e) {}
  }
  try { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; } catch (e) {}
  function say(t, rate) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      toast("Este navegador no admite audio de voz. Prueba con Chrome o Edge actualizado.");
      return;
    }
    if (!frVoice) pickVoice();
    speechSynthesis.cancel();
    speechSynthesis.resume();
    const u = new SpeechSynthesisUtterance(String(t).replace(/_+/g, " ").replace(/\s+/g, " "));
    u.lang = "fr-FR";
    if (frVoice) u.voice = frVoice;
    u.rate = rate || (S.slow ? 0.75 : 0.95);
    u.onerror = event => {
      if (event.error !== "canceled" && event.error !== "interrupted") {
        toast(`No se pudo reproducir el audio (${event.error}). Comprueba la configuración de voz del dispositivo.`);
      }
    };
    speechSynthesis.speak(u);
  }
  const stopSay = () => { try { speechSynthesis.cancel(); } catch (e) {} };

  /* ---------- Utilidades ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => String(s).toLowerCase().replace(/[.!?¡¿,;:"«»()]/g, "").replace(/\s+/g, " ").trim();
  const plain = s => norm(s).normalize("NFD").replace(/[̀-ͯ]/g, "");
  const blank = q => esc(q).replace(/_{2,}/g, '<span style="display:inline-block;min-width:60px;border-bottom:3px solid var(--b)">&nbsp;</span>');
  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2400);
  }
  const levelOf = id => LEVELS.find(l => l.id === id);
  const track = (l, k) => DATA.filter(m => m.lvl === l && m.k === k);
  const modsOf = l => DATA.filter(m => m.lvl === l);
  const getMod = id => DATA.find(m => m.id === id);
  const isDone = m => !!(S.done[m.id] && S.done[m.id].pass);

  /* ---------- Reglas de desbloqueo ---------- */
  function levelOpen(l) {
    if (S.mode !== "prog") return true;
    const i = LEVELS.findIndex(x => x.id === l);
    return i <= 0 || !!S.exam[LEVELS[i - 1].id];
  }
  function modOpen(m) {
    if (S.mode !== "prog") return true;
    if (!levelOpen(m.lvl)) return false;
    const tr = track(m.lvl, m.k), i = tr.indexOf(m);
    return i <= 0 || isDone(tr[i - 1]) || isDone(m);
  }
  const levelPct = l => { const a = modsOf(l); return a.length ? Math.round(a.filter(isDone).length / a.length * 100) : 0; };
  function lockMsg(m) {
    if (!levelOpen(m.lvl)) {
      const i = LEVELS.findIndex(x => x.id === m.lvl);
      return `🔒 Aprueba el examen ${LEVELS[i - 1].id} para abrir el nivel ${m.lvl}.`;
    }
    return "🔒 Completa el módulo anterior para desbloquear este.";
  }

  /* ---------- Navegación lateral ---------- */
  let view = { name: "home", lvl: "A2", id: null, tab: null };
  const expanded = new Set();
  const TABS = [["teoria", "📘", "Teoría"], ["vocabulario", "🖼️", "Vocabulario"], ["ejercicios", "🎯", "Ejercicios"], ["lectura", "📖", "Lectura"], ["speaking", "🗣️", "Conversación"]];
  const VERBS = window.FR_VERBS || [];
  const TENSES = window.FR_TENSES || [];
  const PRONOUNS = window.FR_PRONOUNS || [];
  let conjugationQuiz = null;
  let conjugationSelection = { verb: "parler", tense: "present" };
  const tabDone = (id, t) => { const r = S.done[id] || {}; return { vocabulario: r.voc, ejercicios: r.pass, lectura: r.tx, speaking: r.sp }[t]; };

  function renderNav() {
    let h = `<button class="mi ${view.name === "home" ? "on" : ""}" data-go="#/"><span class="ic">🏠</span>Inicio</button>`;
    h += `<button class="mi ${view.name === "conjugator" ? "on" : ""}" data-go="#/conjugacion"><span class="ic">🔤</span>Conjugador · tiempos y práctica</button>`;
    LEVELS.forEach(L => {
      const open = levelOpen(L.id), ex = expanded.has(L.id);
      h += `<button class="lvl-h" data-lvl="${L.id}"><img src="${L.img}" alt="">${L.name}<span class="pct">${open ? levelPct(L.id) + "%" : "🔒"} ${ex ? "▾" : "▸"}</span></button>`;
      if (!ex) return;
      [["g", "Gramática"], ["v", "Vocabulario"]].forEach(([k, n]) => {
        h += `<h4>${n}</h4>`;
        track(L.id, k).forEach((m, i) => {
          const on = view.id === m.id, ok = modOpen(m);
          h += `<button class="mi ${on ? "on" : ""} ${ok ? "" : "lock"}" data-mod="${m.id}"><span class="ic">${ok ? m.ic : "🔒"}</span>${i + 1}. ${esc(m.t)}${isDone(m) ? '<span class="ok">✓</span>' : ""}</button>`;
          if (on) h += `<div class="sub">${TABS.map(([t, e, l]) => `<button class="mi ${view.tab === t ? "on" : ""}" data-go="#/m/${m.id}/${t}"><span class="ic">${e}</span>${l}${tabDone(m.id, t) ? '<span class="ok">✓</span>' : ""}</button>`).join("")}</div>`;
        });
      });
      h += `<button class="mi ${view.name === "exam" && view.lvl === L.id ? "on" : ""} ${open ? "" : "lock"}" data-go="#/examen/${L.id}"><span class="ic">🏆</span>Examen ${L.id}${S.exam[L.id] ? `<span class="ok">${S.exam[L.id]}%</span>` : ""}</button>`;
    });
    h += `<h4>Más</h4>
      <button class="mi ${view.name === "progress" ? "on" : ""}" data-go="#/progreso"><span class="ic">📊</span>Mi progreso</button>
      <button class="mi ${view.name === "settings" ? "on" : ""}" data-go="#/ajustes"><span class="ic">⚙️</span>Ajustes y modo</button>`;
    const nav = $("#nav");
    nav.innerHTML = h;
    $$("[data-lvl]", nav).forEach(b => b.onclick = () => { const l = b.dataset.lvl; expanded.has(l) ? expanded.delete(l) : expanded.add(l); renderNav(); });
    $$("[data-go]", nav).forEach(b => b.onclick = () => { go(b.dataset.go); closeNav(); });
    $$("[data-mod]", nav).forEach(b => b.onclick = () => openMod(b.dataset.mod));
  }
  const closeNav = () => $("#nav").classList.remove("open");
  function go(h) { if (location.hash === h) route(); else location.hash = h; }
  function openMod(id) {
    const m = getMod(id);
    if (!m) return;
    if (!modOpen(m)) { toast(lockMsg(m)); return; }
    closeNav();
    go(`#/m/${id}/teoria`);
  }

  /* ---------- Router ---------- */
  function route() {
    stopSay(); stopRec();
    const p = location.hash.replace(/^#\/?/, "").split("/");
    window.scrollTo(0, 0);
    if (p[0] === "m" && getMod(p[1])) {
      const m = getMod(p[1]);
      if (!modOpen(m)) { toast(lockMsg(m)); view = { name: "home", lvl: m.lvl }; expanded.add(m.lvl); renderNav(); return home(); }
      const tab = TABS.some(t => t[0] === p[2]) ? p[2] : "teoria";
      view = { name: "mod", lvl: m.lvl, id: m.id, tab };
      expanded.add(m.lvl);
      renderNav();
      return showMod(m, tab);
    }
    if (p[0] === "examen" && levelOf(p[1])) {
      view = { name: "exam", lvl: p[1] };
      expanded.add(p[1]);
      renderNav();
      if (!levelOpen(p[1])) { toast("🔒 Este nivel todavía está bloqueado."); return go("#/"); }
      return examIntro(p[1]);
    }
    if (p[0] === "conjugacion") {
      view = { name: "conjugator", lvl: view.lvl };
      renderNav();
      return conjugator();
    }
    if (p[0] === "progreso") { view = { name: "progress", lvl: view.lvl }; renderNav(); return progress(); }
    if (p[0] === "ajustes") { view = { name: "settings", lvl: view.lvl }; renderNav(); return settings(); }
    if (p[0] === "nivel" && levelOf(p[1])) view.lvl = p[1];
    view = { name: "home", lvl: view.lvl || "A2" };
    renderNav();
    home();
  }

  /* ---------- Inicio ---------- */
  function home() {
    const L = levelOf(view.lvl) || LEVELS[0];
    const total = DATA.length, done = DATA.filter(isDone).length;
    let h = `<div class="hero"><img src="assets/img/mascot.svg" alt="Mascota de Français en route">
      <div><h1>¡Hola! Bienvenido/a a Français en route</h1>
      <p class="en">Tu recorrido de francés de A2 a C1 · ${total} módulos con teoría, vocabulario, ejercicios, lectura y conversación.</p>
      <p><b>${done}/${total}</b> módulos completados · Modo: <b>${S.mode === "prog" ? "🔒 desbloqueo progresivo" : "🔓 todo abierto"}</b></p></div></div>
      <div class="lvl-tabs">${LEVELS.map(x => `<button class="lvl-tab ${x.id === L.id ? "on" : ""} ${levelOpen(x.id) ? "" : "lock"}" data-l="${x.id}"><img src="${x.img}" alt="">${x.id}${levelOpen(x.id) ? "" : " 🔒"}</button>`).join("")}</div>
      <div class="lvl-banner" style="background:${L.color}"><img src="${L.img}" alt="">
        <div style="flex:1"><h2>Nivel ${L.name}</h2><p>${L.desc} <i>${L.descEn}</i></p><div class="pbar"><i style="width:${levelPct(L.id)}%"></i></div></div></div>`;
    if (!levelOpen(L.id)) {
      const prev = LEVELS[LEVELS.indexOf(L) - 1];
      h += `<div class="card center"><div class="big-emoji">🔒</div><h2>Nivel bloqueado</h2><p>Aprueba el <b>examen ${prev.id}</b> (${CONFIG.PASS_EXAM}% o más) para abrir este nivel.</p><button class="btn" data-go="#/examen/${prev.id}">Ir al examen ${prev.id}</button></div>`;
    } else {
      h += `<div class="tracks">`;
      [["g", "📘 Gramática"], ["v", "🖼️ Vocabulario"]].forEach(([k, n]) => {
        h += `<div class="path"><h3>${n}</h3>`;
        track(L.id, k).forEach((m, i) => {
          const off = Math.round(Math.sin(i * 1.1) * 45), ok = modOpen(m), d = isDone(m);
          h += `<button class="node ${k === "v" ? "v" : ""} ${d ? "done" : ""} ${ok ? "" : "lock"}" style="transform:translateX(${off}px)" data-mod="${m.id}" title="${esc(m.t)}">${ok ? m.ic : "🔒"}${d ? '<span class="chk">✅</span>' : ""}</button><div class="lab" style="transform:translateX(${off}px)">${i + 1}. ${esc(m.t)}</div>`;
        });
        h += `</div>`;
      });
      h += `</div><div class="path"><h3>🏆 Examen de nivel</h3><button class="node exam" data-go="#/examen/${L.id}">🏆${S.exam[L.id] ? '<span class="chk">✅</span>' : ""}</button><div class="lab">Examen ${L.id}${S.exam[L.id] ? " · " + S.exam[L.id] + "%" : ""}</div></div>`;
    }
    main().innerHTML = h;
    bind();
    $$("[data-l]").forEach(b => b.onclick = () => { view.lvl = b.dataset.l; expanded.add(b.dataset.l); renderNav(); home(); });
  }

  function bind(root = main()) {
    $$("[data-go]", root).forEach(b => b.onclick = () => go(b.dataset.go));
    $$("[data-mod]", root).forEach(b => b.onclick = () => openMod(b.dataset.mod));
    $$("table", root).forEach(t => { if (!t.parentNode.classList.contains("tblw")) { const w = document.createElement("div"); w.className = "tblw"; t.parentNode.insertBefore(w, t); w.appendChild(t); } });
  }

  /* ---------- Conjugador francés ---------- */
  const PRESENT_ENDINGS = { er: ["e", "es", "e", "ons", "ez", "ent"], ir: ["is", "is", "it", "issons", "issez", "issent"], re: ["s", "s", "", "ons", "ez", "ent"] };
  const SIMPLE_ENDINGS = ["ai", "as", "a", "âmes", "âtes", "èrent"];
  const FUTURE_ENDINGS = ["ai", "as", "a", "ons", "ez", "ont"];
  const IMPERFECT_ENDINGS = ["ais", "ais", "ait", "ions", "iez", "aient"];
  const CONDITIONAL_ENDINGS = ["ais", "ais", "ait", "ions", "iez", "aient"];
  const AUXILIARY_FORMS = {
    present: "present", imperfect: "imperfect", future: "future-simple",
    conditional: "conditionnel-present", subjunctive: "subjonctif-present"
  };
  function verbByInfinitive(infinitive) { return VERBS.find(v => v.infinitive === infinitive); }
  function simpleForms(verb, mode) {
    if (mode === "present" && verb.present) return verb.present;
    if (mode === "subjunctive" && verb.subjunctive) return verb.subjunctive;
    if (mode === "simplePast" && verb.simplePast) return verb.simplePast;
    if (mode === "imperative" && verb.imperative) return verb.imperative;
    if (mode === "imperfect") return IMPERFECT_ENDINGS.map(end => `${verb.imperfectStem}${end}`);
    if (mode === "future") return FUTURE_ENDINGS.map(end => `${verb.futureStem}${end}`);
    if (mode === "conditional") return CONDITIONAL_ENDINGS.map(end => `${verb.futureStem}${end}`);
    if (mode === "present" || mode === "subjunctive" || mode === "simplePast") {
      const ending = verb.infinitive.endsWith("er") ? "er" : verb.infinitive.endsWith("ir") ? "ir" : "re";
      const stem = verb.infinitive.slice(0, -2);
      const endings = mode === "present" ? PRESENT_ENDINGS[ending] :
        mode === "subjunctive" ? (ending === "er" ? ["e", "es", "e", "ions", "iez", "ent"] : ending === "ir" ? ["isse", "isses", "isse", "issions", "issiez", "issent"] : ["e", "es", "e", "ions", "iez", "ent"]) :
          ending === "er" ? SIMPLE_ENDINGS : ending === "ir" ? ["is", "is", "it", "îmes", "îtes", "irent"] : ["is", "is", "it", "îmes", "îtes", "irent"];
      return endings.map(end => `${stem}${end}`);
    }
    return [];
  }
  function conjugate(verb, tense) {
    if (tense.mode === "imperative") return simpleForms(verb, "imperative") || [];
    if (tense.mode === "nearFuture") {
      const aller = verbByInfinitive("aller");
      return simpleForms(aller, "present").map(form => `${form} ${verb.infinitive}`);
    }
    if (tense.mode === "compound") {
      const auxiliary = verbByInfinitive(verb.auxiliary);
      const auxTense = AUXILIARY_FORMS[tense.auxiliary];
      const auxForms = simpleForms(auxiliary, auxTense === "future-simple" ? "future" : auxTense === "conditionnel-present" ? "conditional" : auxTense === "subjonctif-present" ? "subjunctive" : auxTense);
      return auxForms.map((form, i) => `${form} ${verb.participle}${verb.auxiliary === "être" ? (i >= 3 ? "(e)s" : "(e)") : ""}`);
    }
    return simpleForms(verb, tense.mode);
  }
  function conjugator() {
    const tense = TENSES.find(t => t.id === conjugationSelection.tense) || TENSES[0];
    let verb = verbByInfinitive(conjugationSelection.verb) || VERBS[0];
    if (tense.mode === "imperative" && !verb.imperative) {
      verb = verbByInfinitive("parler");
      conjugationSelection.verb = verb.infinitive;
      conjugationQuiz = null;
      toast("Este verbo no tiene imperativo de uso habitual. Se muestra el modelo regular parler.");
    }
    const forms = conjugate(verb, tense);
    const pronouns = tense.mode === "imperative" ? ["(tu)", "(nous)", "(vous)"] : PRONOUNS;
    if (!conjugationQuiz || conjugationQuiz.verb !== verb.infinitive || conjugationQuiz.tense !== tense.id) {
      conjugationQuiz = { verb: verb.infinitive, tense: tense.id, correct: 0, total: 0 };
      newConjugationQuestion(forms, pronouns);
    }
    const tenseOptions = TENSES.map(item => `<option value="${item.id}" ${item.id === tense.id ? "selected" : ""}>${esc(item.label)}</option>`).join("");
    const verbOptions = VERBS.filter(item => tense.mode !== "imperative" || item.imperative).map(item => `<option value="${item.infinitive}" ${item.infinitive === verb.infinitive ? "selected" : ""}>${esc(item.infinitive)} · ${esc(item.meaning)}</option>`).join("");
    const tableRows = forms.map((form, i) => {
      const spokenForm = form.replace(/\(e\)\(s\)/g, "s").replace(/\(e\)/g, "");
      return `<tr><th scope="row">${pronouns[i]}</th><td><b>${esc(form)}</b></td><td><button class="audio-btn" data-say="${esc(`${pronouns[i]} ${spokenForm}`)}" aria-label="Escuchar ${esc(pronouns[i])} ${esc(spokenForm)}">🔊</button></td></tr>`;
    }).join("");
    const note = verb.auxiliary === "être" && tense.mode === "compound"
      ? "Con être, el participio concuerda con el sujeto: allé, allée, allés, allées. La tabla muestra la marca (e)(s)."
      : tense.id === "passe-compose" || tense.mode === "compound" ? "En los tiempos compuestos: auxiliar conjugado + participe passé. Con avoir, el participio normalmente no concuerda con el sujeto."
        : tense.id === "passe-simple" ? "Tiempo literario, frecuente en relatos escritos; en la lengua hablada se usa normalmente el passé composé."
          : tense.mode === "imperative" ? "El imperativo tiene tres formas: tu, nous y vous; el pronombre sujeto se omite."
            : "";
    main().innerHTML = `<section class="conj-hero"><div class="conj-orbit" aria-hidden="true">é</div><div><span class="tag">A2 → C1</span><h1>El taller de los verbos</h1><p>Explora 13 tiempos, compara modelos regulares e irregulares y practica la forma exacta para cada persona. Las tablas incluyen reproducción con pronunciación francesa.</p></div></section>
      <div class="conj-quick"><span>📚 13 tiempos verbales</span><span>🧩 5 modelos regulares</span><span>⚡ 14 irregulares</span><span>🎧 Audio fr-FR</span></div>
      <div class="card"><div class="conj-title"><div><span class="kind">CONJUGACIÓN INTERACTIVA</span><h2>Elige el verbo y el tiempo</h2></div><span class="verb-group">${esc(verb.group)}</span></div>
        <div class="conj-selects"><label>Verbo<select id="conjVerb">${verbOptions}</select><small>${esc(verb.meaning)} · auxiliar: <b>${esc(verb.auxiliary)}</b></small></label><label>Tiempo verbal<select id="conjTense">${tenseOptions}</select><small>${esc(tenseDescription(tense.id))}</small></label></div>
        <div class="tblw conj-table"><table><thead><tr><th>Persona</th><th>${esc(tense.label)}</th><th>Audio</th></tr></thead><tbody>${tableRows}</tbody></table></div>
        ${note ? `<div class="tip">${esc(note)}</div>` : ""}
      </div>
      <div class="card conj-practice"><div class="conj-title"><div><span class="kind">TU TURNO</span><h2>Conjuga y comprueba</h2></div><span class="quiz-score">✅ ${conjugationQuiz.correct} / ${conjugationQuiz.total}</span></div>
        <div class="quiz-prompt"><span>¿Cómo se conjuga?</span><strong>${esc(conjugationQuiz.pronoun)} + ${esc(verb.infinitive)}</strong><span>${esc(tense.label)} · ${esc(verb.meaning)}</span></div>
        <label class="sr-label" for="conjAnswer">Escribe la forma conjugada</label><div class="conj-answer"><input class="fill" id="conjAnswer" type="text" lang="fr" autocomplete="off" placeholder="Écris la réponse en français"><button class="btn blue" id="checkConj">Comprobar</button></div>
        <div id="conjFeedback" aria-live="polite"></div><button class="btn sec small" id="nextConj">Otra pregunta →</button>
        <p class="muted">Se acepta la respuesta con o sin acentos. Pulsa «otra pregunta» para cambiar de persona sin cambiar de verbo ni de tiempo.</p>
      </div>
      <details class="card conjugation-guide"><summary>🧠 Mapa rápido de los tiempos · de A2 a C1</summary><div class="tblw"><table><thead><tr><th>Tiempo</th><th>Cómo se forma</th><th>Uso principal</th></tr></thead><tbody>
        <tr><td>Présent</td><td>Raíz + terminaciones</td><td>Presente, hábito, verdad general.</td></tr>
        <tr><td>Passé composé</td><td>avoir / être en presente + participio</td><td>Acción pasada terminada, especialmente en conversación.</td></tr>
        <tr><td>Imparfait</td><td>Raíz de nous + -ais, -ais, -ait, -ions, -iez, -aient</td><td>Hábitos, descripciones y contexto en pasado.</td></tr>
        <tr><td>Plus-que-parfait</td><td>avoir / être en imparfait + participio</td><td>Acción anterior a otra acción pasada.</td></tr>
        <tr><td>Futur proche</td><td>aller en presente + infinitivo</td><td>Plan o futuro próximo.</td></tr>
        <tr><td>Futur simple</td><td>Raíz de futuro + -ai, -as, -a, -ons, -ez, -ont</td><td>Predicción, promesa o futuro más distante.</td></tr>
        <tr><td>Futur antérieur</td><td>avoir / être en futuro + participio</td><td>Acción que estará terminada antes de otra futura.</td></tr>
        <tr><td>Conditionnel présent / passé</td><td>Raíz de futuro + terminaciones de imparfait / auxiliar en condicional + participio</td><td>Hipótesis, cortesía, información no confirmada y arrepentimiento.</td></tr>
        <tr><td>Subjonctif présent / passé</td><td>Subjuntivo del verbo / avoir o être en subjuntivo + participio</td><td>Deseo, necesidad, emoción, duda y valoración.</td></tr>
        <tr><td>Impératif présent</td><td>Formas tu, nous, vous sin pronombre</td><td>Instrucciones, consejos e invitaciones.</td></tr>
        <tr><td>Passé simple</td><td>Formas literarias específicas</td><td>Relato escrito y reconocimiento avanzado (C1).</td></tr>
      </tbody></table></div></details>
      <details class="card conjugation-guide"><summary>🧩 Modelos de conjugación regular</summary><div class="tblw"><table><thead><tr><th>Grupo</th><th>Infinitivo</th><th>Présent · je / nous / ils</th><th>Imparfait · je</th><th>Participe passé</th></tr></thead><tbody>
        ${["parler", "finir", "vendre"].map(inf => { const model = verbByInfinitive(inf); return `<tr><td>${esc(model.group)}</td><td><b>${inf}</b></td><td>${model.present[0]} / ${model.present[3]} / ${model.present[5]}</td><td>${model.imperfectStem}ais</td><td>${model.participle}</td>`; }).join("")}
      </tbody></table></div><p class="muted">El 1.er grupo (-er, salvo aller) y el 2.º (-ir con nous en -issons) son regulares. El 3.er grupo mezcla patrones: el modelo vendre ayuda a reconocer algunos, pero muchos verbos son irregulares.</p></details>
      <details class="card conjugation-guide"><summary>⭐ Verbos irregulares imprescindibles</summary><div class="irregular-chips">${VERBS.filter(item => item.group === "irrégulier").map(item => `<button class="verb-chip" data-verb="${esc(item.infinitive)}">${esc(item.infinitive)}<small>${esc(item.meaning)}</small></button>`).join("")}</div><p class="muted">Selecciona un verbo para consultar todas sus formas disponibles en cada tiempo.</p></details>`;
    $("#conjVerb").onchange = event => { conjugationSelection.verb = event.target.value; conjugationQuiz = null; conjugator(); };
    $("#conjTense").onchange = event => { conjugationSelection.tense = event.target.value; conjugationQuiz = null; conjugator(); };
    $$("[data-say]").forEach(button => button.onclick = () => say(button.dataset.say));
    $$("[data-verb]").forEach(button => button.onclick = () => { conjugationSelection.verb = button.dataset.verb; conjugationQuiz = null; conjugator(); window.scrollTo(0, 0); });
    $("#checkConj").onclick = checkConjugation;
    $("#conjAnswer").onkeydown = event => { if (event.key === "Enter") checkConjugation(); };
    $("#nextConj").onclick = () => { newConjugationQuestion(forms, pronouns); conjugator(); $("#conjAnswer").focus(); };
  }
  function tenseDescription(id) {
    const descriptions = {
      present: "ahora, hábitos y verdades generales", "passe-compose": "acción terminada en el pasado",
      imparfait: "hábitos y descripciones pasadas", "plus-que-parfait": "acción anterior a otra pasada",
      "futur-proche": "planes y futuro próximo", "futur-simple": "predicción, promesa o futuro",
      "futur-anterieur": "acción terminada antes de un momento futuro", "conditionnel-present": "hipótesis y cortesía",
      "conditionnel-passe": "hipótesis pasada y arrepentimiento", "subjonctif-present": "deseo, duda, necesidad o emoción",
      "subjonctif-passe": "emoción o duda sobre una acción pasada", "imperatif-present": "órdenes, consejos e invitaciones",
      "passe-simple": "tiempo literario, para reconocer en C1"
    };
    return descriptions[id] || "";
  }
  function newConjugationQuestion(forms, pronouns) {
    const person = Math.floor(Math.random() * forms.length);
    conjugationQuiz.personIndex = person;
    conjugationQuiz.pronoun = pronouns[person];
    conjugationQuiz.counted = false;
    conjugationQuiz.solved = false;
  }
  function conjugationAnswers(answer) {
    return [
      answer,
      answer.replace(/\(e\)\(s\)/g, ""),
      answer.replace(/\(e\)\(s\)/g, "e"),
      answer.replace(/\(e\)\(s\)/g, "s"),
      answer.replace(/\(e\)\(s\)/g, "es"),
      answer.replace(/\(e\)/g, ""),
      answer.replace(/\(e\)/g, "e")
    ].map(plain);
  }
  function checkConjugation() {
    const input = $("#conjAnswer");
    if (!input.value.trim()) { toast("Escribe primero la forma conjugada."); input.focus(); return; }
    if ($("#conjFeedback .fb.ok")) return;
    const verb = verbByInfinitive($("#conjVerb").value);
    const tense = TENSES.find(item => item.id === $("#conjTense").value);
    const pronouns = tense && tense.mode === "imperative" ? ["(tu)", "(nous)", "(vous)"] : PRONOUNS;
    const person = pronouns.indexOf($(".quiz-prompt strong").textContent.split(" + ")[0]);
    const answer = verb && tense && person >= 0 ? conjugate(verb, tense)[person] : null;
    if (typeof answer !== "string") { toast("No se pudo generar la respuesta. Cambia de tiempo o de verbo e inténtalo de nuevo."); return; }
    const correct = conjugationAnswers(answer).includes(plain(input.value));
    if (correct && !conjugationQuiz.counted) {
      conjugationQuiz.total += 1;
      conjugationQuiz.correct += 1;
      conjugationQuiz.counted = true;
    }
    const feedback = $("#conjFeedback");
    if (correct) {
      conjugationQuiz.solved = true;
      const answerDisplay = answer.replace(/\(e\)\(s\)/g, "s").replace(/\(e\)/g, "");
      feedback.innerHTML = `<div class="fb ok">✅ ¡Correcto! <b>${esc(answerDisplay)}</b> <button class="audio-btn" data-say="${esc(`${conjugationQuiz.pronoun} ${answerDisplay}`)}" aria-label="Escuchar respuesta">🔊</button></div>`;
      feedback.querySelector("[data-say]").onclick = event => say(event.currentTarget.dataset.say);
      good();
    } else {
      feedback.innerHTML = `<div class="fb no">Encore un essai ! Comprueba la terminación y la persona.</div>`;
      bad();
    }
    $(".quiz-score").textContent = `✅ ${conjugationQuiz.correct} / ${conjugationQuiz.total}`;
  }

  /* ---------- Módulo ---------- */
  let cur = null;
  function modHead(m, tab) {
    const L = levelOf(m.lvl);
    return `<div class="mhead ${m.k}"><div class="ic">${m.ic}</div><div>
      <span class="tag" style="background:${L.color}">${m.lvl}</span><span class="tag" style="background:${m.k === "g" ? "var(--gd)" : "var(--bd)"}">${m.k === "g" ? "Gramática" : "Vocabulario"}</span>
      <h1>${esc(m.t)}</h1><div class="en">${esc(m.en)}</div></div></div>
      <div class="tabs">${TABS.map(([t, e, l]) => `<button class="tab ${t === tab ? "on" : ""}" data-go="#/m/${m.id}/${t}">${e} ${l}${tabDone(m.id, t) ? ' <span class="d">✓</span>' : ""}</button>`).join("")}</div>`;
  }
  function showMod(m, tab) {
    cur = m;
    ({ teoria, vocabulario, ejercicios, lectura, speaking })[tab](m);
  }
  function next(m, tab) {
    const i = TABS.findIndex(t => t[0] === tab);
    return TABS[i + 1] ? `<button class="btn" data-go="#/m/${m.id}/${TABS[i + 1][0]}">${TABS[i + 1][2]} →</button>` : "";
  }

  function teoria(m) {
    main().innerHTML = modHead(m, "teoria") + m.th + `<div class="row">${next(m, "teoria")}<button class="btn sec" data-go="#/m/${m.id}/ejercicios">🎯 Ir a practicar</button></div>`;
    bind();
  }

  function vocabulario(m) {
    rec(m.id).voc = 1; save();
    main().innerHTML = modHead(m, "vocabulario") +
      `<p class="muted">Toca una tarjeta para escuchar la expresión en francés y ver su significado.</p>
      <div class="row"><button class="btn sec small" id="allv">🔊 Escuchar todas</button><button class="btn sec small" id="flipall">🔄 Girar todas</button></div>
      <div class="vgrid">${m.voc.map((v, i) => `<button class="vcard" data-i="${i}" aria-label="${esc(v[1])}"><div class="vin"><div class="vf"><span class="e">${v[0]}</span><span class="w">${esc(v[1])}</span></div><div class="vb"><span class="e" style="font-size:30px">${v[0]}</span>${esc(v[2])}</div></div></button>`).join("")}</div>
      <div class="row">${next(m, "vocabulario")}</div>`;
    bind();
    $$(".vcard").forEach(c => c.onclick = () => { c.classList.toggle("flip"); say(m.voc[c.dataset.i][1]); });
    $("#flipall").onclick = () => $$(".vcard").forEach(c => c.classList.toggle("flip"));
    $("#allv").onclick = () => say(m.voc.map(v => v[1]).join(". "));
  }

  /* ---------- Ejercicios ---------- */
  // Tipos: mc (opciones), fill (escribir), ord (ordenar), img (imagen), listen (escuchar)
  function buildLesson(m) {
    const items = m.ex.map(e => e.w ? { type: "ord", ...e } : Array.isArray(e.o) ? { type: "mc", ...e } : { type: "fill", ...e });
    const voc = shuffle(m.voc);
    const extra = [];
    voc.slice(0, 2).forEach(v => extra.push(imgQ(m, v)));
    if (voc[2]) extra.push(listenQ(m, voc[2]));
    // intercalar los ejercicios con imagen/audio
    [3, 7, 11].forEach((pos, k) => { if (extra[k]) items.splice(pos + k, 0, extra[k]); });
    return items;
  }
  function imgQ(m, v, pool) {
    const others = shuffle((pool || m.voc).filter(x => x[1] !== v[1])).slice(0, 3);
    const o = shuffle([v, ...others]);
    return { type: "img", e: v[0], o: o.map(x => x[1]), a: o.indexOf(v), t: `${v[1]} = ${v[2]}` };
  }
  function listenQ(m, v, pool) {
    const others = shuffle((pool || m.voc).filter(x => x[1] !== v[1] && x[0] !== v[0])).slice(0, 3);
    const o = shuffle([v, ...others]);
    return { type: "listen", say: v[1], o: o.map(x => `${x[0]} ${x[2]}`), a: o.indexOf(v), t: `${v[1]} = ${v[2]}` };
  }

  let L = null; // lección en curso
  function ejercicios(m) {
    L = { m, items: buildLesson(m), i: 0, hits: 0, hp: CONFIG.HEARTS, exam: false };
    main().innerHTML = modHead(m, "ejercicios") + `<div id="lesson"></div>`;
    bind();
    question();
  }

  function question() {
    const box = $("#lesson");
    if (!box) return;
    const n = L.items.length;
    if (L.i >= n || (!L.exam && L.hp <= 0)) return L.exam ? examEnd() : lessonEnd();
    const e = L.items[L.i];
    L.answered = false;
    let h = `<div class="exhead"><button class="x" id="quit" title="Salir">✕</button><div class="bar"><i style="width:${L.i / n * 100}%"></i></div>${L.exam ? `<span class="muted">${L.i + 1}/${n}</span>` : `<span class="hearts">❤️ ${L.hp}</span>`}</div>`;
    if (e.type === "mc") {
      h += `<div class="kind">Elige la respuesta correcta</div><h2>${blank(e.q)}</h2>${e.o.map((o, j) => `<button class="opt" data-j="${j}"><span class="muted">${j + 1}</span>&nbsp; ${esc(o)}</button>`).join("")}`;
    } else if (e.type === "fill") {
      h += `<div class="kind">Escribe la respuesta</div><h2>${blank(e.q)}</h2>
        <input class="fill" id="f" placeholder="Escribe aquí…" autocomplete="off" autocapitalize="off" spellcheck="false">
        <div class="accents">${["à", "â", "æ", "ç", "é", "è", "ê", "ë", "î", "ï", "ô", "œ", "ù", "û", "ü", "ÿ", "'", "’"].map(c => `<button data-c="${c}">${c}</button>`).join("")}</div>
        <button class="btn" id="chk">Comprobar</button>`;
    } else if (e.type === "ord") {
      L.words = e.w.trim().split(/\s+/);
      let sh = shuffle(L.words.map((w, k) => k)); let tries = 0;
      while (L.words.length > 1 && sh.map(k => L.words[k]).join(" ") === e.w.trim() && tries++ < 10) sh = shuffle(sh);
      L.bank = sh; L.line = [];
      h += `<div class="kind">Ordena la frase</div><h2 class="en" style="font-style:normal">“${esc(e.t)}”</h2>
        <div class="answer-line" id="line"></div><div class="bank" id="bank"></div>
        <div class="row"><button class="btn" id="chk">Comprobar</button><button class="btn sec small" id="clr">↺ Borrar</button></div>`;
    } else if (e.type === "img") {
      h += `<div class="kind">¿Qué significa?</div><div class="big-emoji">${e.e}</div><div class="opts-grid">${e.o.map((o, j) => `<button class="opt" data-j="${j}">${esc(o)}</button>`).join("")}</div>`;
    } else if (e.type === "listen") {
      h += `<div class="kind">Escucha y elige</div><div class="center"><button class="btn blue" id="play" style="font-size:28px;padding:16px 34px" aria-label="Escuchar la expresión en francés">🔊</button><p class="muted">Pulsa para escuchar otra vez</p></div><div class="opts-grid">${e.o.map((o, j) => `<button class="opt" data-j="${j}">${esc(o)}</button>`).join("")}</div>`;
    }
    h += `<p class="muted">Cuando aparezca la corrección, pulsa «Continuar al siguiente ejercicio» para avanzar.</p><div id="fb"></div>`;
    box.innerHTML = h;
    $("#quit").onclick = () => { if (confirm("¿Salir? Perderás el progreso de esta lección.")) go(L.exam ? "#/" : `#/m/${L.m.id}/teoria`); };
    $$(".opt", box).forEach(b => b.onclick = () => check(+b.dataset.j));
    if (e.type === "fill") {
      const f = $("#f");
      f.focus();
      f.onkeydown = ev => { if (ev.key === "Enter") { ev.preventDefault(); check(); } };
      $$("[data-c]", box).forEach(b => b.onclick = () => { const s = f.selectionStart ?? f.value.length; f.value = f.value.slice(0, s) + b.dataset.c + f.value.slice(f.selectionEnd ?? s); f.focus(); f.selectionStart = f.selectionEnd = s + 1; });
      $("#chk").onclick = () => check();
    }
    if (e.type === "ord") { drawOrder(); $("#chk").onclick = () => check(); $("#clr").onclick = () => { L.bank = L.bank.concat(L.line); L.line = []; drawOrder(); }; }
    if (e.type === "listen") { $("#play").onclick = () => say(e.say, 0.85); setTimeout(() => say(e.say, 0.85), 300); }
  }

  function drawOrder() {
    const chip = (k, where) => `<button class="chip" data-k="${k}" data-w="${where}">${esc(L.words[k])}</button>`;
    $("#line").innerHTML = L.line.map(k => chip(k, "line")).join("");
    $("#bank").innerHTML = L.bank.map(k => chip(k, "bank")).join("");
    $$(".chip").forEach(c => c.onclick = () => {
      if (L.answered) return;
      const k = +c.dataset.k;
      if (c.dataset.w === "bank") { L.bank = L.bank.filter(x => x !== k); L.line.push(k); say(L.words[k]); }
      else { L.line = L.line.filter(x => x !== k); L.bank.push(k); }
      drawOrder();
    });
  }

  function check(j) {
    if (L.answered) return;
    const e = L.items[L.i];
    let ok = false, ans = "", note = "";
    if (e.type === "mc" || e.type === "img" || e.type === "listen") {
      ok = j === e.a; ans = e.o[e.a];
      $$(".opt").forEach((b, k) => { b.disabled = true; if (k === e.a) b.classList.add("ok"); else if (k === j) b.classList.add("no"); });
    } else if (e.type === "fill") {
      const v = $("#f").value;
      if (!v.trim()) { $("#f").focus(); return; }
      ans = e.a[0];
      ok = e.a.some(a => norm(a) === norm(v));
      if (!ok && e.a.some(a => plain(a) === plain(v))) { ok = true; note = `Ojo con los acentos: <b>${esc(ans)}</b>`; }
      $("#f").disabled = true;
    } else if (e.type === "ord") {
      if (!L.line.length) return;
      ans = e.w;
      ok = norm(L.line.map(k => L.words[k]).join(" ")) === norm(e.w);
    }
    L.answered = true;
    if (ok) { L.hits++; S.xp += CONFIG.XP_OK; good(); } else { L.hp--; bad(); }
    save();
    if (e.type === "img" || e.type === "listen" || e.type === "ord") say(e.type === "ord" ? e.w : e.say || e.o[e.a]);
    const last = L.i + 1 >= L.items.length || (!L.exam && L.hp <= 0);
    $("#fb").innerHTML = `<div class="fb ${ok ? "ok" : "no"}">${ok ? "¡Correcto! +" + CONFIG.XP_OK + " XP" : "Respuesta correcta: " + esc(ans)}${note ? "<br>" + note : ""}<br><span class="en" style="font-weight:400">${esc(e.t || "")}</span></div>
      <p><button class="btn" id="cont">${last ? "Ver resultado" : "Continuar al siguiente ejercicio →"}</button></p>`;
    const c = $("#cont");
    c.focus();
    c.onclick = () => { L.i++; question(); };
  }

  function lessonEnd() {
    const m = L.m, n = L.items.length, win = L.hp > 0;
    const pct = Math.round(L.hits / n * 100);
    if (win) {
      const r = rec(m.id), first = !r.pass;
      r.pass = 1; r.best = Math.max(r.best || 0, pct);
      S.xp += CONFIG.XP_LESSON; bumpStreak(); save(); fanfare();
      renderNav();
      if (first && S.mode === "prog") {
        const tr = track(m.lvl, m.k), nx = tr[tr.indexOf(m) + 1];
        if (nx) setTimeout(() => toast(`🔓 ¡Desbloqueado: ${nx.t}!`), 600);
        else if (modsOf(m.lvl).every(isDone)) setTimeout(() => toast(`🏆 ¡Ya puedes hacer el examen ${m.lvl}!`), 600);
      }
    } else bad();
    $("#lesson").innerHTML = `<div class="card center"><div class="big-emoji">${win ? "🎉" : "💔"}</div><h1>${win ? "¡Muy bien!" : "Sin vidas"}</h1>
      <p><b>${L.hits}/${n}</b> correctas (${pct}%) ${win ? "· +" + CONFIG.XP_LESSON + " XP" : ""}</p>
      <p class="en">${win ? "¡Lección completada! Sigue avanzando." : "Te has quedado sin vidas. Repasa la teoría e inténtalo de nuevo."}</p>
      <div class="row center"><button class="btn sec" id="again">Repetir</button>${win ? `<button class="btn" data-go="#/m/${m.id}/lectura">Lectura →</button>` : `<button class="btn" data-go="#/m/${m.id}/teoria">📘 Repasar teoría</button>`}</div></div>`;
    bind();
    $("#again").onclick = () => ejercicios(m);
  }

  /* ---------- Lectura ---------- */
  function lectura(m) {
    const answered = new Set();
    main().innerHTML = modHead(m, "lectura") +
      `<h2>📖 ${esc(m.tx.ti)}</h2><div class="card reading" id="rd">${m.tx.b}</div>
      <div class="row"><button class="btn sec" id="lis">🔊 Escuchar</button><button class="btn sec" id="stop">⏹️ Parar</button>
      <label class="muted"><input type="checkbox" id="slow" ${S.slow ? "checked" : ""}> Audio lento</label></div>
      <p class="muted">Toca las palabras <u>subrayadas</u> para oírlas.</p>
      ${m.q.map((x, a) => `<div class="card" data-q="${a}"><b>${a + 1}. ${esc(x[0])}</b>${x[1].map((o, b) => `<button class="opt" data-a="${a}" data-b="${b}">${esc(o)}</button>`).join("")}</div>`).join("")}
      <div class="row">${next(m, "lectura")}</div>`;
    bind();
    $("#lis").onclick = () => say($("#rd").textContent);
    $("#stop").onclick = stopSay;
    $("#slow").onchange = ev => { S.slow = ev.target.checked; save(); };
    $$("#rd u").forEach(u => u.onclick = () => say(u.textContent));
    $$(".opt[data-a]").forEach(el => el.onclick = () => {
      const a = +el.dataset.a, b = +el.dataset.b, c = m.q[a][2];
      if (answered.has(a)) return;
      answered.add(a);
      $$(`.opt[data-a="${a}"]`).forEach((x, k) => { x.disabled = true; if (k === c) x.classList.add("ok"); else if (x === el) x.classList.add("no"); });
      if (b === c) { S.xp += CONFIG.XP_READ; good(); } else bad();
      if (answered.size === m.q.length) { rec(m.id).tx = 1; bumpStreak(); toast("📖 ¡Lectura completada!"); renderNav(); }
      save();
    });
  }

  /* ---------- Speaking ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recog = null;
  function stopRec() { try { recog && recog.abort(); } catch (e) {} recog = null; }
  function speaking(m) {
    let ci = 0;
    const seen = new Set();
    const draw = () => {
      seen.add(ci);
      const c = m.sp[ci];
      main().innerHTML = modHead(m, "speaking") +
        `<p class="en">Tarjeta ${ci + 1} / ${m.sp.length} · Responde en voz alta con 3–5 frases.</p>
        <div class="flash" id="fl"><div>${esc(c)}</div></div>
        <div class="dots">${m.sp.map((_, k) => `<i class="${k === ci ? "on" : ""}"></i>`).join("")}</div>
        <div class="row center"><button class="btn sec" id="prev">←</button><button class="btn sec" id="hear">🔊 Oír</button>
        ${SR ? `<button class="btn blue mic" id="mic">🎤 Responder</button>` : ""}
        <button class="btn" id="nx">Siguiente →</button></div>
        <div id="heard"></div>
        ${SR ? "" : `<p class="muted center">Consejo: grábate con el móvil y escúchate.</p>`}`;
      bind();
      $("#fl").onclick = $("#hear").onclick = () => say(c);
      $("#prev").onclick = () => { stopRec(); ci = (ci + m.sp.length - 1) % m.sp.length; draw(); };
      $("#nx").onclick = () => {
        stopRec();
        S.xp += CONFIG.XP_SPEAK;
        if (seen.size === m.sp.length && !rec(m.id).sp) { rec(m.id).sp = 1; bumpStreak(); toast("🗣️ ¡Speaking completado!"); renderNav(); }
        save();
        ci = (ci + 1) % m.sp.length; draw();
      };
      if (SR) $("#mic").onclick = () => listen($("#mic"));
    };
    draw();
  }
  function listen(btn) {
    if (recog) { stopRec(); btn.classList.remove("rec"); btn.textContent = "🎤 Responder"; return; }
    try {
      recog = new SR();
      recog.lang = "fr-FR"; recog.interimResults = true; recog.continuous = true;
      let txt = "";
      recog.onresult = ev => {
        txt = Array.from(ev.results).map(r => r[0].transcript).join(" ");
        $("#heard").innerHTML = `<div class="heard">🎧 Has dicho: “${esc(txt)}”</div>`;
      };
      recog.onerror = () => { $("#heard").innerHTML = `<div class="heard">No se pudo usar el micrófono. Revisa los permisos del navegador.</div>`; };
      recog.onend = () => {
        btn.classList.remove("rec"); btn.textContent = "🎤 Responder"; recog = null;
        const w = txt.trim().split(/\s+/).filter(Boolean).length;
        if (w) { $("#heard").innerHTML += `<p class="muted">${w} palabras. ${w >= 15 ? "¡Excelente respuesta! 🌟" : "Intenta decir un poco más (15+ palabras)."}</p>`; }
      };
      recog.start();
      btn.classList.add("rec"); btn.textContent = "⏹️ Parar";
    } catch (e) { toast("Micrófono no disponible"); }
  }

  /* ---------- Examen de nivel ---------- */
  function examIntro(l) {
    const Lv = levelOf(l), i = LEVELS.indexOf(Lv), nx = LEVELS[i + 1];
    main().innerHTML = `<div class="lvl-banner" style="background:${Lv.color}"><img src="assets/img/trophy.svg" alt=""><div><h2>Examen de nivel ${l}</h2><p>${CONFIG.EXAM_QUESTIONS} preguntas variadas de todos los módulos ${l}. Aprueba con ${CONFIG.PASS_EXAM}%.</p></div></div>
      <div class="card"><p>✅ Sin vidas: puedes fallar, pero necesitas el ${CONFIG.PASS_EXAM}% para aprobar.<br>
      ${S.mode === "prog" && nx ? `🔓 Si apruebas, se desbloquea el nivel <b>${nx.id}</b>. También sirve como <b>prueba de nivel</b> para saltar al siguiente.` : "🎯 Úsalo para comprobar lo que sabes del nivel."}<br>
      <span class="en">No hearts. Pass with ${CONFIG.PASS_EXAM}% or more.</span></p>
      ${S.exam[l] ? `<p>Tu mejor nota: <b>${S.exam[l]}%</b> 🏆</p>` : ""}
      <button class="btn" id="startx">Empezar examen</button></div>`;
    $("#startx").onclick = () => startExam(l);
  }
  function startExam(l) {
    const mods = modsOf(l);
    const pool = [];
    mods.forEach(m => m.ex.forEach(e => pool.push(e.w ? { type: "ord", ...e } : Array.isArray(e.o) ? { type: "mc", ...e } : { type: "fill", ...e })));
    const allVoc = mods.flatMap(m => m.voc);
    let items = shuffle(pool).slice(0, CONFIG.EXAM_QUESTIONS - 4);
    shuffle(allVoc).slice(0, 3).forEach(v => items.push(imgQ(null, v, allVoc)));
    const lv = shuffle(allVoc)[0];
    if (lv) items.push(listenQ(null, lv, allVoc));
    items = shuffle(items);
    L = { m: null, lvl: l, items, i: 0, hits: 0, hp: 99, exam: true };
    main().innerHTML = `<h1>🏆 Examen ${l}</h1><div id="lesson"></div>`;
    question();
  }
  function examEnd() {
    const l = L.lvl, n = L.items.length, pct = Math.round(L.hits / n * 100), pass = pct >= CONFIG.PASS_EXAM;
    const i = LEVELS.findIndex(x => x.id === l), nx = LEVELS[i + 1];
    const wasOpen = nx && levelOpen(nx.id);
    if (pass) { S.exam[l] = Math.max(S.exam[l] || 0, pct); S.xp += CONFIG.XP_EXAM; bumpStreak(); fanfare(); } else bad();
    save(); renderNav();
    $("#lesson").innerHTML = `<div class="card center"><img src="assets/img/trophy.svg" alt="" style="width:110px">
      <h1>${pass ? "¡Aprobado!" : "Casi…"}</h1><p><b>${L.hits}/${n}</b> correctas · <b>${pct}%</b></p>
      <p>${pass ? (nx && !wasOpen && S.mode === "prog" ? `🔓 ¡Has desbloqueado el nivel <b>${nx.id}</b>!` : "¡Enhorabuena! 🎉") : `Necesitas un ${CONFIG.PASS_EXAM}%. Repasa los módulos y vuelve a intentarlo.`}</p>
      <div class="row center"><button class="btn sec" id="again">Repetir examen</button>${pass && nx ? `<button class="btn" data-go="#/nivel/${nx.id}">Ir a ${nx.id} →</button>` : `<button class="btn" data-go="#/">Inicio</button>`}</div></div>`;
    bind();
    $("#again").onclick = () => startExam(l);
    if (pass && nx) $$("[data-go]").forEach(b => b.onclick = () => { view.lvl = nx.id; expanded.add(nx.id); go("#/"); });
  }

  /* ---------- Progreso ---------- */
  function progress() {
    const done = DATA.filter(isDone).length;
    let h = `<h1>📊 Mi progreso</h1><p class="en">El progreso se guarda en este navegador.</p>
      <div class="stats">
        <div class="stat-card"><span class="e">⭐</span><div><b>${S.xp}</b>XP</div></div>
        <div class="stat-card"><span class="e">🔥</span><div><b>${streakNow()}</b>días seguidos</div></div>
        <div class="stat-card"><span class="e">✅</span><div><b>${done}/${DATA.length}</b>módulos</div></div>
        <div class="stat-card"><span class="e">🏆</span><div><b>${Object.keys(S.exam).length}/${LEVELS.length}</b>exámenes</div></div>
      </div>`;
    LEVELS.forEach(Lv => {
      h += `<div class="card"><h2><img src="${Lv.img}" alt="" style="width:30px;vertical-align:middle"> ${Lv.name} · ${levelPct(Lv.id)}% ${S.exam[Lv.id] ? "· 🏆 " + S.exam[Lv.id] + "%" : ""}</h2>
        <table><tr><th>Módulo</th><th title="Vocabulario">🖼️</th><th title="Ejercicios">🎯</th><th title="Lectura">📖</th><th title="Conversación">🗣️</th><th>Nota</th></tr>
        ${modsOf(Lv.id).map(m => { const r = S.done[m.id] || {}; return `<tr><td><a href="#/m/${m.id}/teoria" data-mod="${m.id}">${m.ic} ${esc(m.t)}</a></td><td>${r.voc ? "✓" : ""}</td><td>${r.pass ? "✓" : ""}</td><td>${r.tx ? "✓" : ""}</td><td>${r.sp ? "✓" : ""}</td><td>${r.best ? r.best + "%" : ""}</td></tr>`; }).join("")}</table></div>`;
    });
    main().innerHTML = h;
    bind();
    $$("a[data-mod]").forEach(a => a.onclick = ev => { ev.preventDefault(); openMod(a.dataset.mod); });
  }

  /* ---------- Ajustes y modo ---------- */
  function modeCards(sel) {
    return `<div class="modes">
      <button class="mode ${sel === "open" ? "sel" : ""}" data-mode="open"><span class="e">🔓</span><b>Todo abierto</b><span>Acceso libre a los ${DATA.length} módulos y a los ${LEVELS.length} niveles. Ideal para repasar o para usar en clase.</span></button>
      <button class="mode ${sel === "prog" ? "sel" : ""}" data-mode="prog"><span class="e">🔒</span><b>Desbloqueo progresivo</b><span>Empiezas en A2. Completa los módulos y aprueba el examen de cada nivel para avanzar al siguiente.</span></button>
    </div>`;
  }
  function settings() {
    main().innerHTML = `<h1>⚙️ Ajustes</h1>
      <div class="card"><h2>Modo de estudio</h2>${modeCards(S.mode)}
      <p class="muted">Consejo para profes: comparte el enlace con <b>?modo=abierto</b> o <b>?modo=progresivo</b> al final para fijar el modo.</p></div>
      <div class="card"><h2>Audio · francés de Francia</h2><p id="voiceStatus" class="voice-status" aria-live="polite">Comprobando las voces fr-FR disponibles en este dispositivo…</p><label><input type="checkbox" id="slow" ${S.slow ? "checked" : ""}> Voz lenta</label>
      <div class="row"><button class="btn sec small" id="test">🔊 Probar audio</button></div><p class="muted">La app solicita fr-FR y selecciona una voz francesa de Francia si está instalada. Sin ella, intentará usar la voz que el dispositivo asigne al idioma; instala una voz francesa (Francia) en los ajustes del sistema para asegurar ese acento.</p></div>
      <div class="card"><h2>Progreso</h2><p class="muted">El progreso se guarda en este navegador.</p>
      <div class="row"><button class="btn sec small" id="exp">⬇️ Exportar progreso</button><button class="btn sec small" id="imp">⬆️ Importar progreso</button><button class="btn red small" id="reset">🗑️ Reiniciar todo</button></div></div>
      <div class="card"><h2>Cómo funciona</h2><p>Cada módulo tiene 5 partes: <b>📘 Teoría</b>, <b>🖼️ Vocabulario</b> con tarjetas, <b>🎯 Ejercicios</b> (5 vidas ❤️), <b>📖 Lectura</b> con preguntas y <b>🗣️ Conversación</b> con tarjetas para responder en voz alta. Un módulo se completa al aprobar los ejercicios. Cada nivel termina con un <b>🏆 examen</b>.</p></div>`;
    $$("[data-mode]").forEach(b => b.onclick = () => setMode(b.dataset.mode));
    $("#slow").onchange = ev => { S.slow = ev.target.checked; save(); };
    $("#test").onclick = () => say("Bonjour ! Bienvenue dans Français en route.");
    pickVoice();
    $("#reset").onclick = () => {
      if (!confirm("¿Seguro? Se borrará todo tu progreso.")) return;
      const mode = S.mode;
      S = { xp: 0, streak: 0, last: "", mode, done: {}, exam: {}, slow: S.slow, migrated: 1 };
      save(); renderNav(); toast("Progreso reiniciado");
    };
    $("#exp").onclick = () => {
      const code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
      prompt("Copia este código y guárdalo:", code);
    };
    $("#imp").onclick = () => {
      const code = prompt("Pega tu código de progreso:");
      if (!code) return;
      try { S = Object.assign({ done: {}, exam: {} }, JSON.parse(decodeURIComponent(escape(atob(code.trim()))))); save(); renderNav(); toast("✅ Progreso importado"); settings(); }
      catch (e) { toast("❌ Código no válido"); }
    };
  }
  function startLevel() {
    return (S.mode === "prog" ? LEVELS.filter(l => levelOpen(l.id)).pop() : LEVELS.find(l => modsOf(l.id).some(m => !isDone(m)))) || LEVELS[0];
  }
  function setMode(mode) {
    S.mode = mode; save();
    view.lvl = startLevel().id; expanded.clear(); expanded.add(view.lvl);
    $(".overlay") && $(".overlay").remove();
    renderNav();
    toast(mode === "prog" ? "🔒 Modo progresivo activado" : "🔓 Todo abierto");
    route();
  }
  function chooseMode() {
    const o = document.createElement("div");
    o.className = "overlay";
    o.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><img class="mascot" src="assets/img/mascot.svg" alt="">
      <h1 class="center">¿Cómo quieres estudiar?</h1><p class="center en">Puedes cambiar esta opción más tarde en ⚙️ Ajustes.</p>
      ${modeCards(S.mode)}${S.mode ? `<div class="row center"><button class="btn sec small" id="cls">Cancelar</button></div>` : ""}</div>`;
    document.body.appendChild(o);
    $$("[data-mode]", o).forEach(b => b.onclick = () => setMode(b.dataset.mode));
    const c = $("#cls", o); if (c) c.onclick = () => o.remove();
  }

  /* ---------- Arranque ---------- */
  $("#menuBtn").onclick = () => $("#nav").classList.toggle("open");
  document.addEventListener("keydown", ev => {
    if (!L || !$("#lesson")) return;
    if (ev.key === "Enter" && L.answered && $("#cont")) { ev.preventDefault(); $("#cont").click(); }
    else if (!L.answered && /^[1-4]$/.test(ev.key) && document.activeElement.tagName !== "INPUT") {
      const b = $$(".opt")[+ev.key - 1]; if (b) b.click();
    }
  });
  window.addEventListener("hashchange", route);
  window.App = { home: () => go("#/"), chooseMode };

  if (!DATA.length) { main().innerHTML = "<p>No se han encontrado contenidos en francés.</p>"; return; }
  view.lvl = startLevel().id;
  expanded.add(view.lvl);
  save();
  route();
  if (!S.mode) chooseMode();
})();
