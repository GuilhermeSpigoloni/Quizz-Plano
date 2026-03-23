// quiz.js
// i18n vem do window (porque o HTML carrega i18n.js antes)
const LANGS = window.I18N_LANGS;
const getLang = window.i18nGetLang;
const setLang = window.i18nSetLang;
const tUI = window.tUI;
const tQ = window.tQ;
const tOpt = window.tOpt;
const tTestimonials = window.tTestimonials;

function initI18n(cb) {
    window.i18nInitLang();
    if (typeof cb === "function") cb();
}

const CHECKOUT_URL = "https://pay.kiwify.com/zrUPXO1";

/* ========= PAÍSES LATAM ========= */
const LATAM_COUNTRIES = [
    { code: "BR", dial: "55", flag: "🇧🇷", name: "Brasil", mask: "(##) #####-####", digits: 11 },
    { code: "AR", dial: "54", flag: "🇦🇷", name: "Argentina", mask: "(##) ####-####", digits: 10 },
    { code: "MX", dial: "52", flag: "🇲🇽", name: "México", mask: "(##) ####-####", digits: 10 },
    { code: "CO", dial: "57", flag: "🇨🇴", name: "Colombia", mask: "### ###-####", digits: 10 },
    { code: "CL", dial: "56", flag: "🇨🇱", name: "Chile", mask: "# ####-####", digits: 9 },
    { code: "PE", dial: "51", flag: "🇵🇪", name: "Perú", mask: "### ###-###", digits: 9 },
    { code: "VE", dial: "58", flag: "🇻🇪", name: "Venezuela", mask: "###-###-####", digits: 10 },
    { code: "EC", dial: "593", flag: "🇪🇨", name: "Ecuador", mask: "## ###-####", digits: 9 },
    { code: "BO", dial: "591", flag: "🇧🇴", name: "Bolivia", mask: "########", digits: 8 },
    { code: "PY", dial: "595", flag: "🇵🇾", name: "Paraguay", mask: "### ###-###", digits: 9 },
    { code: "UY", dial: "598", flag: "🇺🇾", name: "Uruguay", mask: "# ###-####", digits: 8 },
    { code: "PA", dial: "507", flag: "🇵🇦", name: "Panamá", mask: "####-####", digits: 8 },
    { code: "CR", dial: "506", flag: "🇨🇷", name: "Costa Rica", mask: "####-####", digits: 8 },
    { code: "GT", dial: "502", flag: "🇬🇹", name: "Guatemala", mask: "####-####", digits: 8 },
    { code: "HN", dial: "504", flag: "🇭🇳", name: "Honduras", mask: "####-####", digits: 8 },
    { code: "SV", dial: "503", flag: "🇸🇻", name: "El Salvador", mask: "####-####", digits: 8 },
    { code: "NI", dial: "505", flag: "🇳🇮", name: "Nicaragua", mask: "####-####", digits: 8 },
    { code: "DO", dial: "1", flag: "🇩🇴", name: "Rep. Dominicana", mask: "(###) ###-####", digits: 10 },
    { code: "PT", dial: "351", flag: "🇵🇹", name: "Portugal", mask: "### ### ###", digits: 9 },
    { code: "ES", dial: "34", flag: "🇪🇸", name: "España", mask: "### ### ###", digits: 9 },
    { code: "US", dial: "1", flag: "🇺🇸", name: "USA / Canada", mask: "(###) ###-####", digits: 10 },
];

/* ========= IMAGENS ========= */
const BODY_IMAGES = {
    body_slim: "https://res.cloudinary.com/drhg6wpcy/image/upload/f_webp/q_auto:eco/fl_lossy/c_fit%2Cw_384/frkfmgyqi4ookhtvezeb",
    body_average: "https://res.cloudinary.com/drhg6wpcy/image/upload/f_webp/q_auto:eco/fl_lossy/c_fit%2Cw_384/urna8ckcbdhtoituboul",
    body_over: "https://res.cloudinary.com/drhg6wpcy/image/upload/f_webp/q_auto:eco/fl_lossy/c_fit%2Cw_384/zeqazwlflx8eswu43rf6",
    body_athletic: "https://res.cloudinary.com/drhg6wpcy/image/upload/f_webp/q_auto:eco/fl_lossy/c_fit%2Cw_384/bkvsiohfm56rp2bw8pvr",
    goal_lean: "https://res.cloudinary.com/drhg6wpcy/image/upload/f_webp/q_auto:eco/fl_lossy/c_fit%2Cw_384/tg3i4p81vovksppkkj7i",
    goal_athletic: "https://res.cloudinary.com/drhg6wpcy/image/upload/f_webp/q_auto:eco/fl_lossy/c_fit%2Cw_384/htwcrvq2yzpyovzsewiz",
    goal_muscle: "https://res.cloudinary.com/drhg6wpcy/image/upload/f_webp/q_auto:eco/fl_lossy/c_fit%2Cw_384/knsjtzosy3lr7q2vypxc",
    goal_strength: "https://res.cloudinary.com/drhg6wpcy/image/upload/f_webp/q_auto:eco/fl_lossy/c_fit%2Cw_384/fwaxr8uil6gywgxdjmke",
};

const TESTIMONIALS = [
    { name: "Marina", text: "Perdi 6kg em 10 semanas seguindo o plano.", stars: 5 },
    { name: "Carlos", text: "Treino enxuto, consistência e resultado real.", stars: 5 },
    { name: "Letícia", text: "Meu foco era definição e encaixou perfeito na rotina.", stars: 5 },
    { name: "Rafael", text: "Voltei a treinar sem dor ajustando as progressões.", stars: 5 },
    { name: "Bianca", text: "Dieta simples e prática. Parei de me perder.", stars: 5 },
    { name: "Diego", text: "Plano passou confiança: tudo com base no meu perfil.", stars: 5 },
];

/* ========= helpers ========= */
const el = (id) => document.getElementById(id);
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatDateByLang(iso) {
    const d = new Date(iso + "T00:00:00");
    const lang = (typeof getLang === "function" ? getLang() : "pt") || "pt";
    try {
        return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
            year: "numeric", month: "2-digit", day: "2-digit"
        }).format(d);
    } catch { return formatBRDate(iso); }
}

function todayISO() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
}
function addMonthsISO(baseISO, months) {
    const d = new Date(baseISO + "T00:00:00");
    const day = d.getDate();
    d.setMonth(d.getMonth() + months);
    if (d.getDate() !== day) d.setDate(0);
    return d.toISOString().slice(0, 10);
}
function daysBetween(fromISO, toISO) {
    const a = new Date(fromISO + "T00:00:00").getTime();
    const b = new Date(toISO + "T00:00:00").getTime();
    return Math.max(0, Math.round((b - a) / (1000 * 60 * 60 * 24)));
}
function isPastDate(iso) {
    const t = new Date(todayISO() + "T00:00:00").getTime();
    const x = new Date(iso + "T00:00:00").getTime();
    return x < t;
}
function formatBRDate(iso) {
    const d = new Date(iso + "T00:00:00");
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yy = d.getFullYear();
    return dd + "/" + mm + "/" + yy;
}
function fmt1(n) {
    if (!isFinite(n)) return "—";
    return (Math.round(n * 10) / 10).toFixed(1);
}

/* ========= MÁSCARA DE TELEFONE ========= */
function applyPhoneMask(rawValue, mask) {
    const digits = rawValue.replace(/\D/g, "");
    let result = "";
    let di = 0;
    for (let i = 0; i < mask.length && di < digits.length; i++) {
        if (mask[i] === "#") {
            result += digits[di++];
        } else {
            result += mask[i];
        }
    }
    return result;
}

function getCountryByCode(code) {
    return LATAM_COUNTRIES.find(c => c.code === code) || LATAM_COUNTRIES[0];
}

function phoneIsValid(maskedValue, country) {
    const digits = maskedValue.replace(/\D/g, "");
    return digits.length >= country.digits;
}

/* ========= VALIDAÇÃO DE E-MAIL ========= */
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).trim().toLowerCase());
}

/* ========= IMC ========= */
function bmiFrom(heightCm, weightKg) {
    const h = heightCm / 100;
    if (!isFinite(h) || h <= 0) return null;
    return weightKg / (h * h);
}
function bmiCategory(bmi) {
    if (bmi < 18.5) return { key: "under" };
    if (bmi < 25) return { key: "normal" };
    if (bmi < 30) return { key: "over" };
    return { key: "obese" };
}
function tBMI(key, fallback = "") { return tUI(key, fallback); }

function bmiCategoryLabel(catKey) {
    const map = { under: "bmiCatUnder", normal: "bmiCatNormal", over: "bmiCatOver", obese: "bmiCatObese" };
    return tBMI(map[catKey] || "", catKey);
}
function bmiRisksTextByKey(catKey) {
    const k = (n) => `bmiRisk_${catKey}_${n}`;
    return [tBMI(k(1), ""), tBMI(k(2), ""), tBMI(k(3), "")].filter(Boolean);
}
function bmiMarkerPct(bmi) {
    const min = 14, max = 45;
    return ((clamp(bmi, min, max) - min) / (max - min)) * 100;
}

/* ========= sprite helper ========= */
function imageHTML(key) {
    const src = BODY_IMAGES[key] || "";
    return `<div class="imgThumb"><img src="${src}" alt="" loading="lazy" /></div>`;
}

/* ========= estado ========= */
const state = { index: 0, answers: {} };
function getAnswer(id) { return state.answers[id]; }
function setAnswer(id, val) { state.answers[id] = val; }

/* ========= QUIZ ========= */
const quiz = [
    { id: "lang_gate", type: "lang_gate", title: "Choose your language", help: "Select to start. You can change later." },

    {
        id: "goal", type: "single", ui: "image", sheet: "goal",
        title: "Qual é seu objetivo visual?", help: "Escolha 1 opção.", default: "goal_lean",
        options: [
            { key: "goal_lean", label: "Mais definido", sub: "Seco / leve" },
            { key: "goal_athletic", label: "Atlético", sub: "Estética + performance" },
            { key: "goal_muscle", label: "Mais volume", sub: "Shape cheio" },
            { key: "goal_strength", label: "Força", sub: "Movimentos difíceis" },
        ]
    },
    {
        id: "age", type: "single", title: "Sua faixa de idade", help: "Escolha 1 opção.", default: "18-24",
        options: [
            { key: "13-17", label: "13–17", sub: "Base e técnica" },
            { key: "18-24", label: "18–24", sub: "Progressão rápida" },
            { key: "25-34", label: "25–34", sub: "Consistência" },
            { key: "35-44", label: "35–44", sub: "Recuperação inteligente" },
            { key: "45+", label: "45+", sub: "Progressão segura" },
        ]
    },
    {
        id: "trained_before", type: "single", title: "Você já treinou de forma consistente antes?", help: "Escolha 1 opção.", default: "yes_some",
        options: [
            { key: "no", label: "Nunca", sub: "Vamos começar do básico" },
            { key: "yes_some", label: "Já, mas parei", sub: "Retomar com progressão segura" },
            { key: "yes_regular", label: "Sim, regularmente", sub: "Ajustar volume e performance" },
        ]
    },
    {
        id: "body_current", type: "single", ui: "image", sheet: "body_current",
        title: "Como está seu corpo hoje?", help: "Escolha 1 opção.", default: "body_average",
        options: [
            { key: "body_slim", label: "Mais magro", sub: "Pouca massa" },
            { key: "body_average", label: "Mediano", sub: "Normal" },
            { key: "body_over", label: "Acima do peso", sub: "Gordura extra" },
            { key: "body_athletic", label: "Já em forma", sub: "Quero performance" },
        ]
    },
    {
        id: "days", type: "single", title: "Quantos dias/semana você treina?", help: "Escolha 1 opção.", default: "3",
        options: [
            { key: "2", label: "2 dias", sub: "Mínimo viável" },
            { key: "3", label: "3 dias", sub: "Equilíbrio ideal" },
            { key: "4", label: "4 dias", sub: "Evolução mais rápida" },
            { key: "5+", label: "5+ dias", sub: "Alta disciplina" },
        ]
    },
    {
        id: "pushups", type: "single", title: "Quantas flexões consegue fazer?", help: "Escolha 1 opção.", default: "1-5",
        options: [
            { key: "0", label: "0 (não consigo ainda)", sub: "Vamos adaptar" },
            { key: "1-5", label: "1–5", sub: "Base inicial" },
            { key: "6-15", label: "6–15", sub: "Intermediário" },
            { key: "16-30", label: "16–30", sub: "Bom nível" },
            { key: "31+", label: "31+", sub: "Alto nível" },
        ]
    },
    {
        id: "squats", type: "single", title: "Quantos agachamentos consegue fazer?", help: "Escolha 1 opção.", default: "11-25",
        options: [
            { key: "0-10", label: "0–10", sub: "Base inicial" },
            { key: "11-25", label: "11–25", sub: "Ok" },
            { key: "26-50", label: "26–50", sub: "Bom" },
            { key: "51-80", label: "51–80", sub: "Muito bom" },
            { key: "81+", label: "81+", sub: "Excelente" },
        ]
    },
    {
        id: "alcohol_use", type: "single", title: "Você consome álcool?", help: "Escolha 1 opção.", default: "no",
        options: [
            { key: "no", label: "Não", sub: "Não consumo" },
            { key: "yes", label: "Sim", sub: "Consumo álcool" },
        ]
    },
    {
        id: "alcohol_freq", type: "single", title: "Com que frequência você consome álcool?", help: "Escolha 1 opção.", default: "rare",
        options: [
            { key: "rare", label: "Raramente", sub: "1–2x/mês" },
            { key: "weekend", label: "Fins de semana", sub: "1–2x/sem" },
            { key: "often", label: "Frequente", sub: "3–5x/sem" },
            { key: "daily", label: "Quase todo dia", sub: "Alta frequência" },
        ]
    },
    { id: "consent", type: "consent", title: "Confirmação rápida", help: "Marque as duas caixas para continuar." },
    { id: "metrics", type: "metrics", title: "Altura e peso", help: "Digite seus dados." },
    { id: "bmi_info", type: "bmi_info", title: "Seu IMC e o que isso pode indicar", help: "Leitura rápida antes de continuar." },
    { id: "goal_date", type: "goaldate", title: "Data do objetivo", help: "Já sugerimos uma data realista (6 meses). Você pode ajustar." },
    { id: "target", type: "target", title: "Peso alvo (kg)", help: "Digite o peso alvo." },
    { id: "projection", type: "projection", title: "Projeção de progresso", help: "Com base no peso atual, peso alvo e data." },
    { id: "gen_email", type: "gen_email", title: "SEU PLANO ESTÁ SENDO GERADO", help: "Ajustando treino + dieta com base nas suas respostas." },
    { id: "email", type: "email", title: "Quase lá! Preencha seus dados", help: "Seus dados são usados apenas para envio do plano." },
];

/* ========= defaults ========= */
function applyDefaultsOnce() {
    for (const q of quiz) {
        if (state.answers[q.id] !== undefined) continue;
        if (q.type === "single" && q.default !== undefined) state.answers[q.id] = q.default;
        if (q.type === "multi") {
            if (Array.isArray(q.default)) state.answers[q.id] = [...q.default];
            else state.answers[q.id] = [];
        }
    }
}

/* ========= progress ========= */
function totalSteps() { return quiz.length; }
function progressPct() {
    const total = totalSteps();
    const step = clamp(state.index, 0, total - 1);
    return total <= 1 ? 0 : Math.round((step / (total - 1)) * 100);
}
function updateTopbar() { el("bar").style.width = progressPct() + "%"; }

/* ========= answered ========= */
function isAnswered(q) {
    const a = getAnswer(q.id);

    if (q.type === "single") return typeof a === "string" && a.length > 0;
    if (q.type === "multi") return Array.isArray(a) && a.length >= (q.min ?? 0);

    if (q.type === "consent") {
        const c = a || {};
        return !!c.truth && !!c.terms;
    }

    if (q.type === "metrics") {
        const m = a || {};
        return (
            isFinite(m.heightCm) && isFinite(m.weightKg) &&
            m.heightCm > 50 && m.heightCm < 260 &&
            m.weightKg > 20 && m.weightKg < 400
        );
    }

    if (q.type === "goaldate" || q.type === "eventdate") {
        const d = a || {};
        return typeof d.date === "string" && d.date.length >= 8 && !isPastDate(d.date);
    }

    if (q.type === "target") {
        const t = a || {};
        return isFinite(t.targetWeightKg) && t.targetWeightKg > 20 && t.targetWeightKg < 400;
    }

    if (q.type === "projection") return true;
    if (q.type === "gen_email") return true;

    /* ── EMAIL (novo: nome + email + telefone) ── */
    if (q.type === "email") {
        const v = a || {};
        const name = String(v.name || "").trim();
        const email = String(v.email || "").trim();
        const phone = String(v.phone || "").replace(/\D/g, "");
        const country = getCountryByCode(v.countryCode || "BR");
        return (
            name.length >= 2 &&
            emailIsValid(email) &&
            phone.length >= country.digits
        );
    }

    return true;
}

/* ========= motivação a cada 3 ========= */
function shouldShowMotivation(q) {
    if (!q) return false;
    const idx1 = state.index + 1;
    if (idx1 % 3 !== 0) return false;
    const blockTypes = new Set([
        "metrics", "bmi_info", "projection", "gen_email", "email",
        "goaldate", "target", "consent", "eventdate", "lang_gate"
    ]);
    if (blockTypes.has(q.type)) return false;
    return true;
}

function motivationHtml() {
    const idx = Math.floor(state.index / 3);
    const pick =
        (window.tMotivation && window.tMotivation(idx)) ||
        (Array.isArray(window.MOTIVATION) ? window.MOTIVATION[idx % window.MOTIVATION.length] : null) ||
        { title: "Você está indo bem.", text: "Constância vence. Só continue." };
    return `
    <div class="sideBox" style="max-width:720px;">
      <b>${escapeHtml(pick.title || "")}</b>
      <p>${escapeHtml(pick.text || "")}</p>
    </div>`;
}

/* ========= render ========= */
function render() {
    stopGenAnimations();
    state.index = clamp(state.index, 0, quiz.length - 1);
    updateTopbar();

    const q = quiz[state.index];
    if (!q) return;
    document.body.classList.toggle("is-generating", q.type === "gen_email");

    const backBtn = el("backBtn");
    const continueBtn = el("continueBtn");
    const hint = el("hint");

    backBtn.textContent = tUI("back");
    continueBtn.textContent = tUI("continue");

    if (q.type === "lang_gate") return renderLangGate(q);

    backBtn.disabled = (state.index === 0 || q.type === "gen_email");
    continueBtn.style.display = "none";
    continueBtn.onclick = null;
    hint.textContent = "";

    if (q.type === "single") return (q.ui === "image") ? renderSingleImage(q) : renderSingle(q);
    if (q.type === "multi") return renderMulti(q);
    if (q.type === "consent") return renderConsent(q);
    if (q.type === "metrics") return renderMetrics(q);
    if (q.type === "bmi_info") return renderBmiInfo(q);
    if (q.type === "goaldate") return renderGoalDate(q);
    if (q.type === "eventdate") return renderEventDate(q);
    if (q.type === "target") return renderTarget(q);
    if (q.type === "projection") return renderProjection(q);
    if (q.type === "gen_email") return renderGenEmail(q);
    if (q.type === "email") return renderEmail(q);
}

/* ─── renderLangGate ─── */
function renderLangGate(q) {
    const content = el("content");
    const backBtn = el("backBtn");
    const continueBtn = el("continueBtn");
    const hint = el("hint");

    backBtn.disabled = true;
    hint.textContent = "";
    continueBtn.style.display = "none";

    const currentLang = getLang();
    content.innerHTML = `
  <div class="q">
    <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="options" id="langOptions">
      ${LANGS.map(l => `
        <div class="opt ${currentLang === l ? "selected" : ""}" data-lang="${l}">
          <div class="mark radio"><div class="dot"></div></div>
          <div class="label">
            <strong>${escapeHtml(tOpt("lang_gate", l, "label", l.toUpperCase()))}</strong>
            <span>${escapeHtml(tOpt("lang_gate", l, "sub", ""))}</span>
          </div>
        </div>`).join("")}
    </div>
  </div>`;

    el("langOptions").addEventListener("click", (e) => {
        const item = e.target.closest(".opt");
        if (!item) return;
        setLang(item.dataset.lang);
        goNext();
    });
}

/* ─── renderSingle ─── */
function renderSingle(q) {
    const content = el("content");
    const hint = el("hint");
    hint.textContent = tUI("pickOne");
    const current = getAnswer(q.id) || "";

    const optsHtml = q.options.map(o => `
      <div class="opt ${current === o.key ? "selected" : ""}" data-key="${o.key}">
        <div class="mark radio"><div class="dot"></div></div>
        <div class="label">
          <strong>${escapeHtml(tOpt(q.id, o.key, "label", o.label))}</strong>
          ${o.sub ? `<span>${escapeHtml(tOpt(q.id, o.key, "sub", o.sub))}</span>` : ""}
        </div>
      </div>`).join("");

    content.innerHTML = `
  <div class="q">
    <div class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</div>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="options" id="options">${optsHtml}</div>
    ${shouldShowMotivation(q) ? motivationHtml() : ""}
  </div>`;

    el("options").addEventListener("click", (e) => {
        const item = e.target.closest(".opt");
        if (!item) return;
        const key = item.dataset.key;
        setAnswer(q.id, key);
        if (q.id === "alcohol_use" && key === "no") setAnswer("alcohol_freq", "rare");
        if (q.id === "smoke_use" && key === "no") setAnswer("smoke_freq", "rare");
        if (q.id === "important_event" && key === "none") setAnswer("event_date", { date: "" });
        goNext();
    });
}

/* ─── renderSingleImage ─── */
function renderSingleImage(q) {
    const content = el("content");
    const hint = el("hint");
    hint.textContent = tQ(q.id, "help", q.help) || tUI("continue");
    const current = getAnswer(q.id) || q.default || "";

    const items = q.options.map(o => `
      <div class="imgOpt ${current === o.key ? "selected" : ""}" data-key="${o.key}">
        ${imageHTML(o.key)}
        <div class="imgMarkRow">
          <div class="imgMeta">
            <b>${escapeHtml(tOpt(q.id, o.key, "label", o.label))}</b>
            ${o.sub ? `<small>${escapeHtml(tOpt(q.id, o.key, "sub", o.sub))}</small>` : ""}
          </div>
          <div class="miniMark"><div class="dot"></div></div>
        </div>
      </div>`).join("");

    content.innerHTML = `
  <div class="q">
    <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="imgOptions" id="imgOptions">${items}</div>
    ${shouldShowMotivation(q) ? motivationHtml() : ""}
  </div>`;

    el("imgOptions").addEventListener("click", (e) => {
        const item = e.target.closest(".imgOpt");
        if (!item) return;
        setAnswer(q.id, item.dataset.key);
        goNext();
    });
}

/* ─── renderMulti ─── */
function renderMulti(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");
    const current = Array.isArray(getAnswer(q.id)) ? [...getAnswer(q.id)] : [];
    hint.textContent = tUI("pickMany");

    const optsHtml = q.options.map(o => `
      <div class="opt ${current.includes(o.key) ? "selected" : ""}" data-key="${o.key}">
        <div class="mark check"><div class="tick"></div></div>
        <div class="label">
          <strong>${escapeHtml(tOpt(q.id, o.key, "label", o.label))}</strong>
          ${o.sub ? `<span>${escapeHtml(tOpt(q.id, o.key, "sub", o.sub))}</span>` : ""}
        </div>
      </div>`).join("");

    content.innerHTML = `
  <div class="q">
    <div class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</div>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="options" id="options">${optsHtml}</div>
    <div class="tiny">${escapeHtml(tUI("minLabel"))} ${q.min ?? 0}.</div>
    ${shouldShowMotivation(q) ? motivationHtml() : ""}
  </div>`;

    el("options").addEventListener("click", (e) => {
        const item = e.target.closest(".opt");
        if (!item) return;
        const key = item.dataset.key;
        let arr = Array.isArray(getAnswer(q.id)) ? [...getAnswer(q.id)] : [];
        const idx = arr.indexOf(key);
        if (idx >= 0) arr.splice(idx, 1); else arr.push(key);
        const exclusive = q.exclusiveKey;
        if (exclusive) {
            if (key === exclusive && arr.includes(exclusive)) arr = [exclusive];
            else arr = arr.filter(x => x !== exclusive);
        }
        setAnswer(q.id, arr);
        render();
    });

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");
    continueBtn.disabled = !isAnswered(q);
    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

/* ─── renderConsent ─── */
function renderConsent(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    continueBtn.textContent = tUI("continue");
    const val = getAnswer(q.id) || { truth: false, terms: false };

    content.innerHTML = `
  <div class="q">
    <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="field">
      <label><input id="truth" type="checkbox" ${val.truth ? "checked" : ""} /> ${escapeHtml(tUI("consentTruth"))}</label>
      <label><input id="terms" type="checkbox" ${val.terms ? "checked" : ""} /> ${escapeHtml(tUI("consentTerms"))}</label>
    </div>
  </div>`;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");

    const truth = el("truth");
    const terms = el("terms");
    const sync = () => {
        setAnswer(q.id, { truth: !!truth.checked, terms: !!terms.checked });
        continueBtn.disabled = !isAnswered(q);
    };
    truth.addEventListener("change", sync);
    terms.addEventListener("change", sync);
    sync();
    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

/* ─── renderMetrics ─── */
function renderMetrics(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");
    hint.textContent = tUI("fillMetrics");
    const a = getAnswer(q.id) || { heightCm: "", weightKg: "" };

    content.innerHTML = `
  <div class="q">
    <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="field">
      <label>${escapeHtml(tUI("heightLabel"))}</label>
      <input id="h" type="number" min="80" max="250" step="0.1"
             placeholder="${escapeHtml(tUI("heightPlaceholder"))}"
             value="${escapeHtml(a.heightCm ?? "")}" />
    </div>
    <div class="field">
      <label>${escapeHtml(tUI("weightLabel"))}</label>
      <input id="w" type="number" min="20" max="400" step="0.1"
             placeholder="${escapeHtml(tUI("weightPlaceholder"))}"
             value="${escapeHtml(a.weightKg ?? "")}" />
    </div>
    <div class="bmiWrap" id="bmiBox" style="display:none; max-width:520px;">
      <div class="bmiTop">
        <div class="bmiVal" id="bmiVal"></div>
        <div class="bmiCat" id="bmiCat"></div>
      </div>
      <div class="bmiBar">
        <div class="seg under"></div>
        <div class="seg normal"></div>
        <div class="seg over"></div>
        <div class="seg obese"></div>
        <div class="bmiMarker" id="bmiMarker"></div>
      </div>
      <div class="hint" id="bmiNote" style="margin-top:8px;"></div>
    </div>
  </div>`;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");

    const hEl = el("h");
    const wEl = el("w");
    const bmiBox = el("bmiBox");
    const bmiValEl = el("bmiVal");
    const bmiCatEl = el("bmiCat");
    const bmiMarkEl = el("bmiMarker");
    const bmiNoteEl = el("bmiNote");

    const sync = () => {
        const h = parseFloat(hEl.value);
        const w = parseFloat(wEl.value);
        setAnswer(q.id, { heightCm: h, weightKg: w });
        const ok = isAnswered(q);
        continueBtn.disabled = !ok;
        if (ok) {
            const bmi = bmiFrom(h, w);
            const cat = bmiCategory(bmi);
            bmiBox.style.display = "grid";
            bmiValEl.textContent = `${tUI("bmiPrefix")} ${bmi.toFixed(1)}`;
            bmiCatEl.textContent = `${tUI("bmiCategoryPrefix")} ${bmiCategoryLabel(cat.key)}`;
            bmiMarkEl.style.left = bmiMarkerPct(bmi) + "%";
            bmiNoteEl.textContent = tUI(`bmiNote_${cat.key}`, "");
        } else {
            bmiBox.style.display = "none";
        }
    };
    hEl.addEventListener("input", sync);
    wEl.addEventListener("input", sync);
    sync();
    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

/* ─── renderBmiInfo ─── */
function renderBmiInfo(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    el("hint").textContent = tUI("clickContinue");

    const m = getAnswer("metrics") || {};
    const bmi = bmiFrom(m.heightCm, m.weightKg);
    const cat = bmi ? bmiCategory(bmi) : { key: "normal" };
    const risks = bmi ? bmiRisksTextByKey(cat.key) : [];
    const bodyKey = getAnswer("body_current") || "body_average";

    content.innerHTML = `
    <div class="q">
      <div class="q-grid two">
        <div class="q-left">
          <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
          ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
          <div class="bmiWrap">
            <div class="bmiTop">
              <div class="bmiVal">${bmi ? `${tUI("bmiPrefix")} ${bmi.toFixed(1)}` : `${tUI("bmiPrefix")} —`}</div>
              <div class="bmiCat">${escapeHtml(tUI("bmiCategoryPrefix"))} ${escapeHtml(bmiCategoryLabel(cat.key))}</div>
            </div>
            <div class="bmiBar" style="${bmi ? "" : "opacity:.5"}">
              <div class="seg under"></div><div class="seg normal"></div>
              <div class="seg over"></div><div class="seg obese"></div>
              <div class="bmiMarker" style="left:${bmi ? bmiMarkerPct(bmi) : 0}%;"></div>
            </div>
            <div style="margin-top:10px;color:rgba(255,255,255,.86);font-size:13px;line-height:1.5;">
              <strong>${escapeHtml(tUI("bmiRisksTitle"))}</strong>
              <ul style="margin:8px 0 0;padding-left:18px;color:rgba(255,255,255,.76);">
                ${risks.map(r => `<li style="margin:6px 0;">${escapeHtml(r)}</li>`).join("")}
              </ul>
              <div style="margin-top:10px;color:rgba(255,255,255,.62);">${escapeHtml(tUI("bmiPlanNote"))}</div>
            </div>
          </div>
        </div>
        <div class="q-right">
          <div class="sideBox">
            <b>${escapeHtml(tUI("yourBodyNowTitle"))}</b>
            <p>${escapeHtml(tUI("yourBodyNowSub"))}</p>
            <div class="mini">${imageHTML(bodyKey)}</div>
          </div>
        </div>
      </div>
    </div>`;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");
    continueBtn.disabled = false;
    continueBtn.onclick = () => goNext();
}

/* ─── renderGoalDate ─── */
function renderGoalDate(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    el("hint").textContent = tUI("chooseDateHint");

    const existing = getAnswer(q.id);
    if (!existing || !existing.date) setAnswer(q.id, { date: addMonthsISO(todayISO(), 6) });
    const val = getAnswer(q.id) || { date: "" };
    const minDate = todayISO();

    content.innerHTML = `
    <div class="q">
      <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
      ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
      <div class="field">
        <label>${escapeHtml(tUI("dateLabel"))}</label>
        <input id="dt" type="date" min="${minDate}" value="${escapeHtml(val.date || "")}" />
      </div>
      <div class="error" id="dateErr">${escapeHtml(tUI("datePastError"))}</div>
    </div>`;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");

    const dt = el("dt");
    const err = el("dateErr");
    const sync = () => {
        const d = dt.value || "";
        setAnswer(q.id, { date: d });
        const past = d && isPastDate(d);
        err.style.display = past ? "block" : "none";
        continueBtn.disabled = !isAnswered(q);
    };
    dt.addEventListener("input", sync);
    sync();
    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

/* ─── renderEventDate ─── */
function renderEventDate(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    el("hint").textContent = tUI("chooseDateHint");

    const existing = getAnswer(q.id);
    if (!existing || !existing.date) setAnswer(q.id, { date: addMonthsISO(todayISO(), 3) });
    const val = getAnswer(q.id) || { date: "" };
    const minDate = todayISO();

    content.innerHTML = `
    <div class="q">
      <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
      ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
      <div class="field">
        <label>${escapeHtml(tUI("eventDateLabel"))}</label>
        <input id="evt" type="date" min="${minDate}" value="${escapeHtml(val.date || "")}" />
      </div>
      <div class="error" id="evtErr">${escapeHtml(tUI("datePastError"))}</div>
    </div>`;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");

    const evt = el("evt");
    const err = el("evtErr");
    const sync = () => {
        const d = evt.value || "";
        setAnswer(q.id, { date: d });
        const past = d && isPastDate(d);
        err.style.display = past ? "block" : "none";
        continueBtn.disabled = !isAnswered(q);
    };
    evt.addEventListener("input", sync);
    sync();
    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

/* ─── renderTarget ─── */
function renderTarget(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    el("hint").textContent = tUI("typeContinueHint");

    const val = getAnswer(q.id) || { targetWeightKg: "" };
    const valueStr = isFinite(Number(val.targetWeightKg)) ? String(val.targetWeightKg) : "";

    content.innerHTML = `
    <div class="q">
      <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
      ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
      <div class="field">
        <label>${escapeHtml(tUI("targetWeightLabel"))}</label>
        <input id="tw" type="number" min="20" max="400" step="0.1"
               placeholder="${escapeHtml(tUI("targetWeightPlaceholder"))}"
               value="${escapeHtml(valueStr)}" />
      </div>
    </div>`;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");

    const tw = el("tw");
    const sync = () => {
        const raw = String(tw.value || "").trim();
        const num = Number(raw);
        setAnswer(q.id, raw === "" || !isFinite(num) ? { targetWeightKg: "" } : { targetWeightKg: num });
        continueBtn.disabled = !isAnswered(q);
    };
    tw.addEventListener("input", sync);
    sync();
    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

/* ─── drawProjectionChart ─── */
function drawProjectionChart(canvas, startISO, endISO, w0, w1) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const pad = { l: 42, r: 18, t: 16, b: 34 };
    const W = canvas.width - pad.l - pad.r;
    const H = canvas.height - pad.t - pad.b;

    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = pad.t + (H * (i / 4));
        ctx.beginPath();
        ctx.moveTo(pad.l, y);
        ctx.lineTo(pad.l + W, y);
        ctx.stroke();
    }
    ctx.globalAlpha = 1;

    const minY = Math.min(w0, w1) - 2;
    const maxY = Math.max(w0, w1) + 2;
    const yToPx = (w) => pad.t + (1 - ((w - minY) / (maxY - minY))) * H;

    ctx.fillStyle = "rgba(255,255,255,.78)";
    ctx.font = "12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial";
    for (let i = 0; i <= 4; i++) {
        const v = maxY - ((maxY - minY) * (i / 4));
        ctx.fillText(fmt1(v), 8, pad.t + (H * (i / 4)) + 4);
    }

    ctx.strokeStyle = "rgba(255,255,255,.92)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(pad.l, yToPx(w0));
    ctx.lineTo(pad.l + W, yToPx(w1));
    ctx.stroke();

    ctx.fillStyle = "rgba(255,255,255,.95)";
    ctx.beginPath(); ctx.arc(pad.l, yToPx(w0), 5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(pad.l + W, yToPx(w1), 5, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,.70)";
    ctx.font = "12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText(formatDateByLang(startISO), pad.l, pad.t + H + 24);
    const endLabel = formatDateByLang(endISO);
    ctx.fillText(endLabel, pad.l + W - ctx.measureText(endLabel).width, pad.t + H + 24);
}

/* ─── renderProjection ─── */
function renderProjection(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    el("hint").textContent = tUI("clickContinue");

    const m = getAnswer("metrics") || {};
    const t = getAnswer("target") || {};
    const w0 = Number(m.weightKg);
    const w1 = Number(t.targetWeightKg);

    const start = todayISO();
    const ev = getAnswer("important_event");
    const evd = getAnswer("event_date") || {};
    const gd = getAnswer("goal_date") || {};
    const end = (ev && ev !== "none" && evd.date) ? evd.date : (gd.date || addMonthsISO(start, 6));

    const days = daysBetween(start, end);
    const weeks = Math.max(1, Math.round(days / 7));
    const delta = w0 - w1;
    const kgPerWeek = delta / weeks;
    const absRate = Math.abs(kgPerWeek);

    let status = tUI("proj_status_default");
    let note = tUI("proj_note_default");
    if (delta <= 0) { status = tUI("proj_status_gain"); note = tUI("proj_note_gain"); }
    else if (absRate > 1.25) { status = tUI("proj_status_aggressive"); note = tUI("proj_note_aggressive"); }
    else if (absRate > 0.25) { status = tUI("proj_status_realistic"); note = tUI("proj_note_realistic"); }
    if (ev && ev !== "none") { note = tUI("proj_note_event"); }

    content.innerHTML = `
    <div class="q">
      <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
      ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
      <div class="chartWrap">
        <div style="font-weight:950;letter-spacing:.2px;">${escapeHtml(status)}</div>
        <div class="hint">${escapeHtml(note)}</div>
        <canvas id="chart" width="900" height="220" aria-label="Gráfico de projeção"></canvas>
        <div class="chartMeta">
          <div><b>${escapeHtml(tUI("proj_currentWeight"))}</b> ${fmt1(w0)} kg</div>
          <div><b>${escapeHtml(tUI("proj_targetWeight"))}</b>  ${fmt1(w1)} kg</div>
          <div><b>${escapeHtml(tUI("proj_deadline"))}</b>      ${days} ${escapeHtml(tUI("daysLabel"))}</div>
          <div><b>${escapeHtml(tUI("proj_rate"))}</b>          ${fmt1(kgPerWeek)} ${escapeHtml(tUI("kgPerWeekLabel"))}</div>
        </div>
      </div>
    </div>`;

    drawProjectionChart(el("chart"), start, end, w0, w1);

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");
    continueBtn.disabled = false;
    continueBtn.onclick = () => goNext();
}

/* ─── renderGenEmail ─── */
let genTimer = null;
let tickerRAF = null;

function stopGenAnimations() {
    if (genTimer) cancelAnimationFrame(genTimer); genTimer = null;
    if (tickerRAF) cancelAnimationFrame(tickerRAF); tickerRAF = null;
}

function buildCommentsHtml(list, repeat = 1) {
    const stars = (n) => "★★★★★".slice(0, clamp(n, 0, 5));
    let html = "";
    for (let r = 0; r < repeat; r++) {
        for (const t of list) {
            const initial = (t.name || "?").trim().slice(0, 1).toUpperCase();
            html += `
        <div class="comment">
          <div class="avatar">${escapeHtml(initial)}</div>
          <div class="cBody">
            <div class="cTop">
              <b>${escapeHtml(t.name)}</b>
              <span class="stars">${stars(t.stars)}</span>
            </div>
            <div class="cText">${escapeHtml(t.text)}</div>
          </div>
        </div>`;
        }
    }
    return html;
}

function renderGenEmail(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    el("hint").textContent = "";
    continueBtn.style.display = "none";

    content.innerHTML = `
    <div class="q" style="text-align:left;">
      <div class="genWrap">
        <h2 class="bigTitle">${escapeHtml(tQ(q.id, "title", q.title))}</h2>
        <p class="genSub">${escapeHtml(tQ(q.id, "help", ""))}</p>
        <div class="genBarWrap"><div class="genBar" id="genBar"></div></div>
        <div class="genMeta">
          <span id="genLeft">0%</span>
          <p class="genSub">${escapeHtml(tUI("genSub"))}</p>
        </div>
        <div class="ticker" aria-label="Avaliações de usuários">
          <div class="tickerRow" id="tickerRow"></div>
        </div>
      </div>
    </div>`;

    const row = el("tickerRow");
    const i18nList = (typeof tTestimonials === "function" ? tTestimonials() : null);
    const list = (Array.isArray(i18nList) && i18nList.length) ? i18nList : TESTIMONIALS;
    row.innerHTML = buildCommentsHtml(list, 2);

    let x = 0;
    const animateTicker = () => {
        x -= 0.55;
        const half = row.scrollWidth / 2;
        if (Math.abs(x) > half) x = 0;
        row.style.transform = `translateX(${x}px)`;
        tickerRAF = requestAnimationFrame(animateTicker);
    };
    tickerRAF = requestAnimationFrame(animateTicker);

    const MAX_MS = 8500;
    const start = performance.now();
    const barEl = el("genBar");
    const leftEl = el("genLeft");

    const tick = (t) => {
        const p = Math.min(1, (t - start) / MAX_MS);
        const perc = Math.round(p * 100);
        barEl.style.width = perc + "%";
        leftEl.textContent = perc + "%";
        if (p < 1) { genTimer = requestAnimationFrame(tick); }
        else { cancelAnimationFrame(tickerRAF); goNext(); }
    };
    genTimer = requestAnimationFrame(tick);
}

/* ─── renderEmail  (NOVO – com nome, e-mail e telefone LATAM) ─── */
function renderEmail(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    el("hint").textContent = tUI("typeAndConfirm");

    const raw = getAnswer(q.id) || {};
    const savedName = raw.name || "";
    const savedEmail = raw.email || "";
    const savedPhone = raw.phone || "";
    const savedCCode = raw.countryCode || "BR";

    /* ── seletor de países ── */
    const countryOptions = LATAM_COUNTRIES.map(c =>
        `<option value="${c.code}" ${c.code === savedCCode ? "selected" : ""}>
           ${c.flag} +${c.dial} ${c.name}
         </option>`
    ).join("");

    content.innerHTML = `
    <div class="q">
      <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
      ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}

      <!-- NOME -->
      <div class="field">
        <label>${escapeHtml(tUI("nameLabel", "Nome completo"))}</label>
        <input id="inp-name" type="text" autocomplete="name"
               placeholder="${escapeHtml(tUI("namePlaceholder", "Seu nome completo"))}"
               value="${escapeHtml(savedName)}" />
      </div>

      <!-- E-MAIL -->
      <div class="field">
        <label>${escapeHtml(tUI("emailLabel"))}</label>
        <input id="inp-email" type="email" autocomplete="email"
               placeholder="${escapeHtml(tUI("emailPlaceholder"))}"
               value="${escapeHtml(savedEmail)}" />
        <div class="inputError" id="err-email" style="display:none;color:rgba(255,80,80,.9);font-size:12px;margin-top:4px;">
          ${escapeHtml(tUI("emailError", "Digite um e-mail válido."))}
        </div>
      </div>

      <!-- TELEFONE -->
      <div class="field">
        <label>${escapeHtml(tUI("phoneLabel", "WhatsApp / Telefone"))}</label>
        <div style="display:grid;grid-template-columns:1fr 1.6fr;gap:8px;align-items:center;">
          <select id="inp-country"
                  style="border:1px solid rgba(255,255,255,.16);background:rgba(0,0,0,.35);
                         color:#fff;border-radius:10px;padding:12px 8px;font-size:13px;
                         outline:none;cursor:pointer;width:100%;">
            ${countryOptions}
          </select>
          <input id="inp-phone" type="tel" autocomplete="tel"
                 placeholder="${escapeHtml(tUI("phonePlaceholder", "(##) #####-####"))}"
                 value="${escapeHtml(savedPhone)}"
                 style="width:100%;" />
        </div>
        <div class="inputError" id="err-phone" style="display:none;color:rgba(255,80,80,.9);font-size:12px;margin-top:4px;">
          ${escapeHtml(tUI("phoneError", "Digite um número de telefone válido."))}
        </div>
      </div>

      <!-- CONFIRM -->
      <div class="field">
        <label style="margin-bottom:0;">
          <input id="inp-confirm" type="checkbox" />
          ${escapeHtml(tUI("emailConfirmLabel"))}
        </label>
        <div class="hint" style="margin-top:6px;">${escapeHtml(tUI("emailRedirectHint"))}</div>
      </div>
    </div>`;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("confirm");

    const inpName = el("inp-name");
    const inpEmail = el("inp-email");
    const inpPhone = el("inp-phone");
    const inpCountry = el("inp-country");
    const inpConfirm = el("inp-confirm");
    const errEmail = el("err-email");
    const errPhone = el("err-phone");

    /* ── aplica máscara de telefone ── */
    const applyMask = () => {
        const country = getCountryByCode(inpCountry.value);
        const masked = applyPhoneMask(inpPhone.value, country.mask);
        inpPhone.value = masked;
        inpPhone.placeholder = country.mask.replace(/#/g, "0");
    };

    inpCountry.addEventListener("change", () => {
        inpPhone.value = ""; // limpa ao trocar país
        applyMask();
        sync();
    });

    inpPhone.addEventListener("input", () => {
        applyMask();
        sync();
    });

    /* ── validação em tempo real ── */
    inpEmail.addEventListener("input", () => {
        const ok = emailIsValid(inpEmail.value);
        errEmail.style.display = inpEmail.value.length > 4 && !ok ? "block" : "none";
        sync();
    });

    const sync = () => {
        const country = getCountryByCode(inpCountry.value);
        const name = inpName.value.trim();
        const email = inpEmail.value.trim();
        const phone = inpPhone.value;

        setAnswer(q.id, {
            name,
            email,
            phone,
            countryCode: inpCountry.value,
            dialCode: country.dial,
        });

        const phoneDigits = phone.replace(/\D/g, "");
        const phoneOk = phoneDigits.length >= country.digits;
        errPhone.style.display = phone.length > 2 && !phoneOk ? "block" : "none";

        const allOk = name.length >= 2 && emailIsValid(email) && phoneOk && inpConfirm.checked;
        continueBtn.disabled = !allOk;
    };

    inpName.addEventListener("input", sync);
    inpConfirm.addEventListener("change", sync);

    // aplica máscara no valor salvo (caso haja)
    applyMask();
    sync();

    /* ── ação do botão ── */
    continueBtn.onclick = () => {
        const country = getCountryByCode(inpCountry.value);
        const name = inpName.value.trim();
        const email = inpEmail.value.trim();
        // telefone: apenas dígitos + DDD do país (formato E.164 sem +)
        const phoneDigitsOnly = inpPhone.value.replace(/\D/g, "");
        const phoneE164 = country.dial + phoneDigitsOnly;

        const allOk = name.length >= 2 && emailIsValid(email) &&
            phoneDigitsOnly.length >= country.digits && inpConfirm.checked;
        if (!allOk) return;

        /* ── 1. Salvar para remarketing ── */
        try {
            const lead = {
                name,
                email,
                phone: phoneE164,          // ex: 5511999999999
                phoneFormatted: inpPhone.value,  // ex: (11) 99999-9999
                countryCode: inpCountry.value,
                dialCode: country.dial,
                lang: typeof getLang === "function" ? getLang() : "pt",
                goal: getAnswer("goal"),
                age: getAnswer("age"),
                days: getAnswer("days"),
                ts: Date.now(),
                answers: JSON.parse(JSON.stringify(state.answers)),
            };
            localStorage.setItem("bv_lead", JSON.stringify(lead));
            // dispara evento customizado para pixels/GTM que escutam
            window.dispatchEvent(new CustomEvent("bv:lead_captured", { detail: lead }));
        } catch (_) { /* localStorage bloqueado no navegador */ }

        /* ── 2. Redirecionar para o checkout Kiwify com prefill ── */
        if (CHECKOUT_URL && CHECKOUT_URL.startsWith("http")) {
            // Kiwify aceita: name, email, phone (E.164 sem +) via query string
            const params = new URLSearchParams({
                name,
                email,
                phone: phoneE164,
            });
            window.location.href = `${CHECKOUT_URL}?${params.toString()}`;
        } else {
            alert("Configure o CHECKOUT_URL no topo do quiz.js.");
        }
    };
}

/* ========= pulos ========= */
function getNextIndex(currentIndex) {
    let i = currentIndex + 1;
    while (i < quiz.length) {
        const q = quiz[i];
        if (q.id === "alcohol_freq" && getAnswer("alcohol_use") === "no") { i++; continue; }
        if (q.id === "smoke_freq" && getAnswer("smoke_use") === "no") { i++; continue; }
        if (q.id === "event_date" && getAnswer("important_event") === "none") { i++; continue; }
        if (q.id === "goal_date") {
            const ev = getAnswer("important_event");
            if (ev && ev !== "none") { i++; continue; }
        }
        break;
    }
    return i;
}

function getPrevIndex(currentIndex) {
    let i = currentIndex - 1;
    while (i >= 0) {
        const q = quiz[i];
        if (q.id === "alcohol_freq" && getAnswer("alcohol_use") === "no") { i--; continue; }
        if (q.id === "smoke_freq" && getAnswer("smoke_use") === "no") { i--; continue; }
        if (q.id === "event_date" && getAnswer("important_event") === "none") { i--; continue; }
        if (q.id === "goal_date") {
            const ev = getAnswer("important_event");
            if (ev && ev !== "none") { i--; continue; }
        }
        break;
    }
    return i;
}

function goNext() {
    const next = getNextIndex(state.index);
    if (next < quiz.length) {
        state.index = next;
        render();
    } else {
        if (CHECKOUT_URL && CHECKOUT_URL.startsWith("http")) window.location.href = CHECKOUT_URL;
    }
}

function goBack() {
    const q = quiz[state.index];
    if (q && q.type === "gen_email") return;
    const prev = getPrevIndex(state.index);
    if (prev >= 0) { state.index = prev; render(); }
}

function initQuiz() {
    applyDefaultsOnce();
    window.__quizRender = render;
    el("backBtn").addEventListener("click", goBack);
    render();
}

initI18n(() => { initQuiz(); });
