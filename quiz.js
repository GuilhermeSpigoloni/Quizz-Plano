// quiz.js
// i18n vem do window (porque o HTML carrega i18n.js antes)
const LANGS = window.I18N_LANGS;
const getLang = window.i18nGetLang;
const setLang = window.i18nSetLang;
const tUI = window.tUI;
const tQ = window.tQ;
const tOpt = window.tOpt;
const tTestimonials = window.tTestimonials;

// Wrapper para manter o mesmo "contrato" que você já usa no final do quiz.js
function initI18n(cb) {
    window.i18nInitLang();
    if (typeof cb === "function") cb();
}

const CHECKOUT_URL = "https://SEU-LINK-DA-PERFECTPAY-AQUI";

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
;

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
        return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
    } catch {
        return formatBRDate(iso);
    }
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
function tBMI(key, fallback = "") {
    // usa UI keys para simplificar
    return tUI(key, fallback);
}

function bmiCategoryLabel(catKey) {
    // keys que você vai colocar no i18n (pt/en)
    const map = {
        under: "bmiCatUnder",
        normal: "bmiCatNormal",
        over: "bmiCatOver",
        obese: "bmiCatObese",
    };
    return tBMI(map[catKey] || "", catKey);
}

function bmiRisksTextByKey(catKey) {
    // riscos também via i18n (3 bullets por categoria)
    const k = (n) => `bmiRisk_${catKey}_${n}`;
    return [tBMI(k(1), ""), tBMI(k(2), ""), tBMI(k(3), "")].filter(Boolean);
}

function bmiMarkerPct(bmi) {
    const min = 14, max = 45;
    const clamped = clamp(bmi, min, max);
    return ((clamped - min) / (max - min)) * 100;
}
function bmiRisksText(bmi) {
    const cat = bmiCategory(bmi);
    if (cat.key === "under") return ["Possível baixa energia e fadiga", "Menor reserva muscular", "Recuperação pior se sono/dieta estiverem ruins"];
    if (cat.key === "normal") return ["Risco geral mais baixo", "Ainda depende de hábitos e sedentarismo", "Foco: força + rotina"];
    if (cat.key === "over") return ["Maior risco cardiometabólico ao longo do tempo", "Pioras com sedentarismo e sono ruim", "Foco: consistência e progressão"];
    return ["Risco cardiometabólico mais alto ao longo do tempo", "Pode impactar pressão, glicemia e sono (em muitos casos)", "Foco: estratégia e constância"];
}

/* ========= sprite helper ========= */
function imageHTML(key) {
    const src = BODY_IMAGES[key] || "";
    return `
    <div class="imgThumb">
      <img src="${src}" alt="" loading="lazy" />
    </div>
  `;
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
        id: "session_time", type: "single", title: "Quanto tempo por treino?", help: "Escolha 1 opção.", default: "30-45",
        options: [
            { key: "15-25", label: "15–25 min", sub: "Enxuto" },
            { key: "30-45", label: "30–45 min", sub: "Equilibrado" },
            { key: "45-70", label: "45–70 min", sub: "Completo" },
            { key: "70+", label: "70+ min", sub: "Longo" },
        ]
    },
    {
        id: "level", type: "single", title: "Seu nível hoje", help: "Escolha 1 opção.", default: "beginner",
        options: [
            { key: "beginner", label: "Iniciante", sub: "0–6 meses" },
            { key: "intermediate", label: "Intermediário", sub: "6–24 meses" },
            { key: "advanced", label: "Avançado", sub: "2+ anos" },
        ]
    },

    {
        id: "daily_energy", type: "single", title: "Como está sua energia durante o dia?", help: "Escolha 1 opção.", default: "ok",
        options: [
            { key: "low", label: "Baixa", sub: "Cansaço constante" },
            { key: "ok", label: "Ok", sub: "Oscila, mas dá para ir" },
            { key: "high", label: "Alta", sub: "Disposto quase sempre" },
            { key: "roller", label: "Varia muito", sub: "Picos e quedas" },
        ]
    },
    {
        id: "daily_focus", type: "single", title: "E sua mente/ânimo no dia a dia?", help: "Escolha 1 opção.", default: "normal",
        options: [
            { key: "stressed", label: "Estressado", sub: "Muita pressão/ansiedade" },
            { key: "normal", label: "Normal", sub: "Dentro do esperado" },
            { key: "motivated", label: "Motivado", sub: "Foco e constância" },
            { key: "down", label: "Desanimado", sub: "Difícil manter rotina" },
        ]
    },
    {
        id: "weight_loss_ease", type: "single", title: "Historicamente, para você, perder gordura é…", help: "Escolha 1 opção.", default: "medium",
        options: [
            { key: "easy", label: "Fácil", sub: "Responde rápido" },
            { key: "medium", label: "Médio", sub: "Demora, mas acontece" },
            { key: "hard", label: "Difícil", sub: "Pouca resposta" },
            { key: "unknown", label: "Não sei", sub: "Nunca acompanhei" },
        ]
    },

    {
        id: "diet_now", type: "single", title: "Como está sua alimentação hoje?", help: "Escolha 1 opção.", default: "mixed",
        options: [
            { key: "good", label: "Boa", sub: "Regular e organizada" },
            { key: "mixed", label: "Mediana", sub: "Oscila durante a semana" },
            { key: "messy", label: "Bagunçada", sub: "Muito improviso" },
            { key: "low_app", label: "Apetite baixo", sub: "Pulo refeições" },
        ]
    },
    {
        id: "protein_habit", type: "single", title: "Proteína no dia a dia", help: "Escolha 1 opção.", default: "some",
        options: [
            { key: "low", label: "Quase não consumo", sub: "Pouca" },
            { key: "some", label: "Consumo às vezes", sub: "Moderada" },
            { key: "good", label: "Consumo bem", sub: "Consistente" },
            { key: "track", label: "Eu acompanho macros", sub: "Mais controle" },
        ]
    },

    {
        id: "goal_extra", type: "multi", min: 0,
        title: "O que mais você espera alcançar com este plano?", help: "Marque o que aplica. Clique em Continuar.",
        default: ["none"], exclusiveKey: "none",
        options: [
            { key: "muscle_strength", label: "Mais músculo e força", sub: "Evolução de shape e carga" },
            { key: "endurance", label: "Resistência", sub: "Mais fôlego e energia" },
            { key: "posture_flex", label: "Postura e flexibilidade", sub: "Mobilidade e alinhamento" },
            { key: "libido", label: "Aumentar desejo sexual", sub: "Bem-estar geral" },
            { key: "none", label: "Nenhuma dessas acima", sub: "Só o objetivo principal" },
        ]
    },

    {
        id: "best_shape_when", type: "single",
        title: "Há quanto tempo você estava na melhor forma da sua vida?", help: "Escolha 1 opção.", default: "lt1y",
        options: [
            { key: "lt1y", label: "Menos de um ano atrás", sub: "Memória muscular ajuda" },
            { key: "1-2y", label: "1 ou 2 anos atrás", sub: "Retorno possível" },
            { key: "3y+", label: "Mais de 3 anos", sub: "Volta gradual" },
            { key: "never", label: "Nunca", sub: "Construir do zero" },
        ]
    },

    {
        id: "weight_change_pattern", type: "single",
        title: "Como seu peso normalmente muda?", help: "Escolha 1 opção.", default: "yo_yo",
        options: [
            { key: "gain_easy", label: "Ganho peso facilmente", sub: "Saio da rotina e sobe" },
            { key: "lose_easy", label: "Perco peso facilmente", sub: "Organizou, responde" },
            { key: "yo_yo", label: "Sobe e desce (efeito sanfona)", sub: "Oscila bastante" },
            { key: "stable", label: "Fica estável", sub: "Pouca variação" },
            { key: "not_sure", label: "Não sei / nunca acompanhei", sub: "Sem histórico claro" },
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
        id: "flexibility", type: "single", title: "Quão flexível você é?", help: "Escolha 1 opção.", default: "medium",
        options: [
            { key: "low", label: "Baixa", sub: "Travado/encurtado" },
            { key: "medium", label: "Média", sub: "Normal" },
            { key: "good", label: "Boa", sub: "Mobilidade ok" },
            { key: "high", label: "Alta", sub: "Bem flexível" },
        ]
    },

    {
        id: "target_zones", type: "multi", min: 0,
        title: "Quais são as suas zonas-alvo?", help: "Marque o que aplica. Se selecionar “Corpo todo”, ele remove as outras.",
        default: [], exclusiveKey: "full_body",
        options: [
            { key: "belly", label: "Barriga", sub: "Cintura/abdômen" },
            { key: "chest", label: "Peitorais", sub: "Tórax" },
            { key: "arms", label: "Braços", sub: "Bíceps/tríceps" },
            { key: "legs", label: "Pernas", sub: "Quadríceps/posterior" },
            { key: "back", label: "Costas", sub: "Dorsal/lombar" },
            { key: "full_body", label: "Corpo todo", sub: "Plano geral (remove as outras)" },
        ]
    },

    {
        id: "typical_day", type: "single", title: "Como você descreveria seu dia típico?", help: "Escolha 1 opção.", default: "balanced",
        options: [
            { key: "mostly_sitting", label: "Maior tempo sentado", sub: "Trabalho/estudo sentado" },
            { key: "balanced", label: "Balanceado (andando e sentado)", sub: "Me movimento um pouco" },
            { key: "mostly_walking", label: "Constantemente andando", sub: "Rotina bem ativa" },
            { key: "varies", label: "Varia de dia para dia", sub: "Sem padrão fixo" },
        ]
    },

    {
        id: "water_intake", type: "single", title: "Qual é a sua ingestão diária de água?", help: "Escolha 1 opção.", default: "1-2l",
        options: [
            { key: "<1l", label: "Menos de 1L", sub: "Bem baixo" },
            { key: "1-2l", label: "1–2L", sub: "Ok" },
            { key: "2-3l", label: "2–3L", sub: "Bom" },
            { key: "3l+", label: "3L+", sub: "Ótimo" },
        ]
    },

    {
        id: "habits", type: "multi", min: 0, title: "Você tem algum dos seguintes hábitos?",
        help: "Marque o que aplica. Clique em Continuar.", default: ["none"], exclusiveKey: "none",
        options: [
            { key: "emotional", label: "Comendo por causa das emoções", sub: "Ansiedade/estresse" },
            { key: "overeating", label: "Comer demais", sub: "Passa do ponto" },
            { key: "night_snacks", label: "Lanches noturnos", sub: "Depois do jantar" },
            { key: "skip_meals", label: "Pular refeições", sub: "Fica muito tempo sem comer" },
            { key: "none", label: "Nenhum desses", sub: "Sem hábitos marcantes" },
        ]
    },

    {
        id: "cravings", type: "single", title: "Quais alimentos você deseja com mais frequência?", help: "Escolha 1 opção.", default: "sweets",
        options: [
            { key: "fastfood", label: "Fast-food", sub: "Hambúrguer/pizza" },
            { key: "sweets", label: "Doces", sub: "Chocolate/bolos" },
            { key: "soda", label: "Refrigerante", sub: "Bebida açucarada" },
            { key: "savory", label: "Salgados", sub: "Frituras/snacks" },
            { key: "none", label: "Nenhuma dessas", sub: "Sem preferência forte" },
        ]
    },

    {
        id: "diet_pref", type: "single", title: "Que tipo de dieta você prefere?", help: "Escolha 1 opção.", default: "traditional",
        options: [
            { key: "traditional", label: "Tradicional", sub: "Comida comum" },
            { key: "keto", label: "Keto", sub: "Baixo carbo" },
            { key: "paleo", label: "Paleolítica", sub: "Mais natural" },
            { key: "vegetarian", label: "Vegetariana", sub: "Sem carne" },
            { key: "vegan", label: "Vegana", sub: "Sem origem animal" },
            { key: "keto_vegan", label: "Keto vegano", sub: "Baixo carbo + vegano" },
            { key: "lactose_free", label: "Sem lactose", sub: "Evita lactose" },
            { key: "gluten_free", label: "Sem glúten", sub: "Evita glúten" },
        ]
    },

    {
        id: "weight_gain_events", type: "multi", min: 0,
        title: "Algum dos seguintes eventos levou ao ganho de peso nos últimos anos?",
        help: "Marque o que aplica. Clique em Continuar.", default: ["none"], exclusiveKey: "none",
        options: [
            { key: "work_pressure", label: "Pressão de trabalho", sub: "Rotina puxada" },
            { key: "financial", label: "Problemas financeiros", sub: "Estresse/ansiedade" },
            { key: "pandemic", label: "Pandemia", sub: "Mudou hábitos" },
            { key: "breakup", label: "Divórcio ou término", sub: "Impacto emocional" },
            { key: "stress_other", label: "Outros eventos estressantes", sub: "Variável" },
            { key: "slower_metabolism", label: "Metabolismo mais lento durante o passar da idade", sub: "Percepção de queda" },
            { key: "none", label: "Nenhuma das anteriores", sub: "Sem evento claro" },
        ]
    },

    {
        id: "important_event", type: "single", title: "Você tem um evento importante chegando?",
        help: "Se tiver, vamos ajustar o plano para bater a meta até a data.", default: "none",
        options: [
            { key: "wedding", label: "Casamento", sub: "Meta por data" },
            { key: "trip", label: "Viagem", sub: "Meta por data" },
            { key: "vacation", label: "Férias", sub: "Meta por data" },
            { key: "competition", label: "Competição", sub: "Meta por data" },
            { key: "party", label: "Festa", sub: "Meta por data" },
            { key: "meeting", label: "Reunião", sub: "Meta por data" },
            { key: "show", label: "Show", sub: "Meta por data" },
            { key: "birthday", label: "Aniversário", sub: "Meta por data" },
            { key: "special_date", label: "Data importante", sub: "Meta por data" },
            { key: "adventure", label: "Aventura", sub: "Meta por data" },
            { key: "family", label: "Ocasião familiar", sub: "Meta por data" },
            { key: "none", label: "Nenhum evento importante", sub: "Plano no tempo realista" },
        ]
    },

    { id: "event_date", type: "eventdate", title: "Selecione o dia do seu evento", help: "Escolha uma data a partir de hoje. Essa data vira o prazo do seu plano." },

    {
        id: "obstacle", type: "single", title: "O que o impediu de voltar à forma?", help: "Escolha 1 opção.", default: "consistency",
        options: [
            { key: "time", label: "Falta de tempo", sub: "Rotina cheia" },
            { key: "consistency", label: "Falta de consistência", sub: "Começa e para" },
            { key: "motivation", label: "Desmotivação / emocional", sub: "Ânimo oscila" },
            { key: "knowledge", label: "Não saber o que fazer", sub: "Treino/dieta confusos" },
            { key: "injury_pain", label: "Dor/lesão", sub: "Limita execução" },
            { key: "money", label: "Dinheiro / acesso a recursos", sub: "Recursos limitados" },
            { key: "environment", label: "Ambiente/rotina atrapalha", sub: "Família/trabalho" },
            { key: "other", label: "Outro motivo", sub: "Variável" },
        ]
    },

    {
        id: "muscle_motivation", type: "single", title: "Qual a sua motivação para ganhar massa muscular?", help: "Escolha 1 opção.", default: "aesthetics",
        options: [
            { key: "aesthetics", label: "Estética (corpo/shape)", sub: "Visual e definição" },
            { key: "strength", label: "Força e performance", sub: "Cargas e movimentos" },
            { key: "health", label: "Saúde e longevidade", sub: "Bem-estar geral" },
            { key: "confidence", label: "Autoestima/confiança", sub: "Sentir-se melhor" },
            { key: "sports", label: "Esporte/competição", sub: "Performance esportiva" },
            { key: "metabolism", label: "Aumentar metabolismo/recomposição", sub: "Corpo mais “ativo”" },
        ]
    },

    {
        id: "confidence", type: "single", title: "Quão confiante você está de que alcançará o objetivo até a data definida?", help: "Escolha 1 opção.", default: "3",
        options: [
            { key: "1", label: "1 — Nada confiante", sub: "Preciso de muita ajuda" },
            { key: "2", label: "2", sub: "Baixa confiança" },
            { key: "3", label: "3", sub: "Média" },
            { key: "4", label: "4", sub: "Alta" },
            { key: "5", label: "5 — Muito confiante", sub: "Vou executar" },
        ]
    },

    {
        id: "injuries", type: "multi", min: 0, title: "Dores/lesões recorrentes?", help: "Marque o que aplica. Clique em Continuar.",
        default: ["none"], exclusiveKey: "none",
        options: [
            { key: "none", label: "Nenhuma", sub: "Sem restrições" },
            { key: "knee", label: "Joelho", sub: "Ajustar agachamentos" },
            { key: "back", label: "Lombar", sub: "Ajustar postura/carga" },
            { key: "shoulder", label: "Ombro", sub: "Ajustar empurrar" },
            { key: "wrist", label: "Punho", sub: "Ajustar apoios" },
            { key: "other", label: "Outra", sub: "Considerar no plano" },
        ]
    },

    {
        id: "sleep_hours", type: "single", title: "Horas de sono", help: "Escolha 1 opção.", default: "6-7",
        options: [
            { key: "<5", label: "< 5h", sub: "Recuperação baixa" },
            { key: "5-6", label: "5–6h", sub: "Dá para melhorar" },
            { key: "6-7", label: "6–7h", sub: "Ok" },
            { key: "7-8", label: "7–8h", sub: "Bom" },
            { key: "8+", label: "8h+", sub: "Ótimo" },
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

    {
        id: "smoke_use", type: "single", title: "Você fuma ou usa vape?", help: "Escolha 1 opção.", default: "no",
        options: [
            { key: "no", label: "Não", sub: "Não fumo/não uso" },
            { key: "yes", label: "Sim", sub: "Uso às vezes ou com frequência" },
        ]
    },
    {
        id: "smoke_freq", type: "single", title: "Com que frequência você fuma/usa vape?", help: "Escolha 1 opção.", default: "rare",
        options: [
            { key: "rare", label: "Raramente", sub: "Social / ocasional" },
            { key: "week", label: "Algumas vezes/semana", sub: "Leve" },
            { key: "daily", label: "Todo dia", sub: "Alta frequência" },
        ]
    },

    { id: "consent", type: "consent", title: "Confirmação rápida", help: "Marque as duas caixas para continuar." },
    { id: "metrics", type: "metrics", title: "Altura e peso", help: "Digite seus dados." },
    { id: "bmi_info", type: "bmi_info", title: "Seu IMC e o que isso pode indicar", help: "Leitura rápida antes de continuar." },
    { id: "goal_date", type: "goaldate", title: "Data do objetivo", help: "Já sugerimos uma data realista (6 meses). Você pode ajustar." },
    { id: "target", type: "target", title: "Peso alvo (kg)", help: "Digite o peso alvo." },
    { id: "projection", type: "projection", title: "Projeção de progresso", help: "Com base no peso atual, peso alvo e data." },
    { id: "gen_email", type: "gen_email", title: "SEU PLANO ESTÁ SENDO GERADO", help: "Ajustando treino + dieta com base nas suas respostas." },
    { id: "email", type: "email", title: "Digite seu e-mail para receber o plano", help: "Após confirmar, você será redirecionado." },
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
function updateTopbar() {
    el("bar").style.width = progressPct() + "%";
}

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
        return isFinite(m.heightCm) && isFinite(m.weightKg) && m.heightCm > 50 && m.heightCm < 260 && m.weightKg > 20 && m.weightKg < 400;
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

    if (q.type === "email") {
        const s = String(a || "").trim();
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
    }

    return true;
}

/* ========= motivação a cada 3 ========= */
function shouldShowMotivation(q) {
    if (!q) return false;

    // mostra a cada 3 perguntas (ajuste se quiser)
    const idx1 = state.index + 1;
    if (idx1 % 3 !== 0) return false;

    // bloqueia telas especiais
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
    </div>
  `;
}

/* ========= render ========= */
function render() {
    // (opcional, mas recomendado) para não deixar RAF/timer rodando
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
        </div>
      `).join("")}
    </div>
  </div>
`;

    el("langOptions").addEventListener("click", (e) => {
        const item = e.target.closest(".opt");
        if (!item) return;
        const l = item.dataset.lang;
        setLang(l);
        goNext();
    });
}

function renderSingle(q) {
    const content = el("content");
    const hint = el("hint");

    hint.textContent = tUI("pickOne");
    const current = getAnswer(q.id) || "";

    const optsHtml = q.options.map(o => {
        const selected = current === o.key;
        return `
      <div class="opt ${selected ? "selected" : ""}" data-key="${o.key}">
        <div class="mark radio"><div class="dot"></div></div>
        <div class="label">
          <strong>${escapeHtml(tOpt(q.id, o.key, "label", o.label))}</strong>
          ${o.sub ? `<span>${escapeHtml(tOpt(q.id, o.key, "sub", o.sub))}</span>` : ""}
        </div>
      </div>
    `;
    }).join("");

    content.innerHTML = `
  <div class="q">
    <div class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</div>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="options" id="options">${optsHtml}</div>
    ${shouldShowMotivation(q) ? motivationHtml() : ""}
  </div>
`;

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



function renderSingleImage(q) {
    const content = el("content");
    const hint = el("hint");

    hint.textContent = tQ(q.id, "help", q.help) || tUI("continue");
    const current = getAnswer(q.id) || q.default || "";

    const items = q.options.map(o => {
        const selected = current === o.key;
        return `
      <div class="imgOpt ${selected ? "selected" : ""}" data-key="${o.key}">
        ${imageHTML(o.key)}
        <div class="imgMarkRow">
          <div class="imgMeta">
            <b>${escapeHtml(tOpt(q.id, o.key, "label", o.label))}</b>
            ${o.sub ? `<small>${escapeHtml(tOpt(q.id, o.key, "sub", o.sub))}</small>` : ""}
          </div>
          <div class="miniMark"><div class="dot"></div></div>
        </div>
      </div>
    `;
    }).join("");

    content.innerHTML = `
  <div class="q">
    <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="imgOptions" id="imgOptions">${items}</div>
    ${shouldShowMotivation(q) ? motivationHtml() : ""}
  </div>
`;

    el("imgOptions").addEventListener("click", (e) => {
        const item = e.target.closest(".imgOpt");
        if (!item) return;
        const key = item.dataset.key;
        setAnswer(q.id, key);
        goNext();
    });
}

function renderMulti(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");

    const current = Array.isArray(getAnswer(q.id)) ? [...getAnswer(q.id)] : [];
    hint.textContent = tUI("pickMany");

    const optsHtml = q.options.map(o => {
        const selected = current.includes(o.key);
        return `
      <div class="opt ${selected ? "selected" : ""}" data-key="${o.key}">
        <div class="mark check"><div class="tick"></div></div>
        <div class="label">
          <strong>${escapeHtml(tOpt(q.id, o.key, "label", o.label))}</strong>
          ${o.sub ? `<span>${escapeHtml(tOpt(q.id, o.key, "sub", o.sub))}</span>` : ""}
        </div>
      </div>
    `;
    }).join("");

    content.innerHTML = `
  <div class="q">
    <div class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</div>
    ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
    <div class="options" id="options">${optsHtml}</div>
    <div class="tiny">${escapeHtml(tUI("minLabel"))} ${q.min ?? 0}.</div>
    ${shouldShowMotivation(q) ? motivationHtml() : ""}
  </div>
`;

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
        render(); // redesenha para atualizar seleção/disable
    });

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");
    continueBtn.disabled = !isAnswered(q);
    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

function renderConsent(q) {
    const content = el("content");
    const hint = el("hint");
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
  </div>
`;

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
      <input id="h" type="number" min="80" max="250" step="0.1" placeholder="${escapeHtml(tUI("heightPlaceholder"))}" value="${escapeHtml(a.heightCm ?? "")}" />
    </div>

      <div class="field">
        <label>${escapeHtml(tUI("weightLabel"))}</label>
        <input id="w" type="number" min="20" max="400" step="0.1" placeholder="${escapeHtml(tUI("weightPlaceholder"))}" value="${escapeHtml(a.weightKg ?? "")}" />
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
    </div>
  `;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");

    const hEl = el("h");
    const wEl = el("w");
    const bmiBox = el("bmiBox");
    const bmiValEl = el("bmiVal");
    const bmiCatEl = el("bmiCat");
    const bmiMarkerEl = el("bmiMarker");
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
            bmiMarkerEl.style.left = bmiMarkerPct(bmi) + "%";

            // (opcional) nota curta por categoria via i18n
            const noteKey = `bmiNote_${cat.key}`;
            bmiNoteEl.textContent = tUI(noteKey, "");
        } else {
            bmiBox.style.display = "none";
        }
    };

    hEl.addEventListener("input", sync);
    wEl.addEventListener("input", sync);
    sync();

    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

function renderBmiInfo(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");

    hint.textContent = tUI("clickContinue");

    const m = getAnswer("metrics") || {};
    const bmi = bmiFrom(m.heightCm, m.weightKg);
    const cat = bmi ? bmiCategory(bmi) : { key: "normal" };
    const catLabel = bmi ? bmiCategoryLabel(cat.key) : "—";
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
              <div class="seg under"></div>
              <div class="seg normal"></div>
              <div class="seg over"></div>
              <div class="seg obese"></div>
              <div class="bmiMarker" style="left:${bmi ? bmiMarkerPct(bmi) : 0}%;"></div>
            </div>

            <div style="margin-top:10px; color: rgba(255,255,255,.86); font-size:13px; line-height:1.5;">
             <strong>${escapeHtml(tUI("bmiRisksTitle"))}</strong>
              <ul style="margin:8px 0 0; padding-left:18px; color: rgba(255,255,255,.76);">
                ${risks.map(r => `<li style="margin:6px 0;">${escapeHtml(r)}</li>`).join("")}
              </ul> 
              <div style="margin-top:10px; color: rgba(255,255,255,.62);">
                ${escapeHtml(tUI("bmiPlanNote"))}
              </div>
            </div>
          </div>
        </div>

        <div class="q-right">
          <div class="sideBox">
            <b>${escapeHtml(tUI("yourBodyNowTitle"))}</b>
            <p>${escapeHtml(tUI("yourBodyNowSub"))}</p>
            <div class="mini">
              ${imageHTML(bodyKey)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");
    continueBtn.disabled = false;
    continueBtn.onclick = () => goNext();
}

function renderGoalDate(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");

    hint.textContent = tUI("chooseDateHint");

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
    </div>
  `;

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

function renderEventDate(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");

    hint.textContent = tUI("chooseDateHint");

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
    </div>
  `;

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

function renderTarget(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");

    hint.textContent = tUI("typeContinueHint");
    const val = getAnswer(q.id) || { targetWeightKg: "" };
    const valueStr = isFinite(Number(val.targetWeightKg)) ? String(val.targetWeightKg) : "";

    content.innerHTML = `
    <div class="q">
      <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
      ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
      <div class="field">
        <label>${escapeHtml(tUI("targetWeightLabel"))}</label>
        <input
  id="tw"
  type="number"
  min="20"
  max="400"
  step="0.1"
  placeholder="${escapeHtml(tUI("targetWeightPlaceholder"))}"
  value="${escapeHtml(valueStr)}"
/>
      </div>
    </div>
  `;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");

    const tw = el("tw");
    const sync = () => {
        const raw = String(tw.value || "").trim();
        const num = Number(raw);

        if (raw === "" || !isFinite(num)) {
            setAnswer(q.id, { targetWeightKg: "" }); // <- não salva NaN
        } else {
            setAnswer(q.id, { targetWeightKg: num });
        }

        continueBtn.disabled = !isAnswered(q);
    };
    tw.addEventListener("input", sync);
    sync();

    continueBtn.onclick = () => { if (!isAnswered(q)) return; goNext(); };
}

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
        const y = pad.t + (H * (i / 4));
        ctx.fillText(fmt1(v), 8, y + 4);
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
    const endW = ctx.measureText(endLabel).width;
    ctx.fillText(endLabel, pad.l + W - endW, pad.t + H + 24);
}

function renderProjection(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");

    hint.textContent = tUI("clickContinue");

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
    const delta = (w0 - w1);
    const kgPerWeek = delta / weeks;
    const absRate = Math.abs(kgPerWeek);

    let status = tUI("proj_status_default");
    let note = tUI("proj_note_default");

    if (delta <= 0) {
        status = tUI("proj_status_gain");
        note = tUI("proj_note_gain");
    } else if (absRate > 1.25) {
        status = tUI("proj_status_aggressive");
        note = tUI("proj_note_aggressive");
    } else if (absRate > 0.25) {
        status = tUI("proj_status_realistic");
        note = tUI("proj_note_realistic");
    }

    if (ev && ev !== "none") {
        note = tUI("proj_note_event");
    }

    content.innerHTML = `
    <div class="q">
      <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
 ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}
      <div class="chartWrap">
        <div style="font-weight:950; letter-spacing:.2px;">${escapeHtml(status)}</div>
        <div class="hint">${escapeHtml(note)}</div>
        <canvas id="chart" width="900" height="220" aria-label="Gráfico de projeção"></canvas>
        <div class="chartMeta">
<div><b>${escapeHtml(tUI("proj_currentWeight"))}</b> ${fmt1(w0)} kg</div>
<div><b>${escapeHtml(tUI("proj_targetWeight"))}</b> ${fmt1(w1)} kg</div>
<div><b>${escapeHtml(tUI("proj_deadline"))}</b> ${days} ${escapeHtml(tUI("daysLabel"))}</div>
<div><b>${escapeHtml(tUI("proj_rate"))}</b> ${fmt1(kgPerWeek)} ${escapeHtml(tUI("kgPerWeekLabel"))}</div>
        </div>
      </div>
    </div>
  `;

    drawProjectionChart(el("chart"), start, end, w0, w1);

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("continue");
    continueBtn.disabled = false;
    continueBtn.onclick = () => goNext();
}

/* ===== Carregamento + ticker ===== */
let genTimer = null;
let tickerRAF = null;

function stopGenAnimations() {
    if (genTimer) cancelAnimationFrame(genTimer);
    genTimer = null;

    if (tickerRAF) cancelAnimationFrame(tickerRAF);
    tickerRAF = null;
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
        </div>
      `;
        }
    }
    return html;
}

function renderGenEmail(q) {
    const content = el("content");
    const continueBtn = el("continueBtn");
    const hint = el("hint");

    hint.textContent = "";
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
    </div>
  `;

    const row = el("tickerRow");
    const i18nList = (typeof tTestimonials === "function" ? tTestimonials() : null);
    const list = (Array.isArray(i18nList) && i18nList.length) ? i18nList : TESTIMONIALS;
    row.innerHTML = buildCommentsHtml(list, 2);

    let x = 0;
    const speed = 0.55;
    const animateTicker = () => {
        x -= speed;
        const half = row.scrollWidth / 2;
        if (Math.abs(x) > half) x = 0;
        row.style.transform = `translateX(${x}px)`;
        tickerRAF = requestAnimationFrame(animateTicker);
    };
    if (tickerRAF) cancelAnimationFrame(tickerRAF);
    tickerRAF = requestAnimationFrame(animateTicker);

    const MAX_MS = 8500;
    const start = performance.now();
    const barEl = el("genBar");
    const leftEl = el("genLeft");
    if (genTimer) cancelAnimationFrame(genTimer);

    const tick = (t) => {
        const p = Math.min(1, (t - start) / MAX_MS);
        const perc = Math.round(p * 100);
        barEl.style.width = perc + "%";
        leftEl.textContent = perc + "%";

        if (p < 1) genTimer = requestAnimationFrame(tick);
        else {
            if (tickerRAF) cancelAnimationFrame(tickerRAF);
            goNext();
        }
    };
    genTimer = requestAnimationFrame(tick);
}

function renderEmail(q) {
    const content = el("content");
    const hint = el("hint");
    const continueBtn = el("continueBtn");

    hint.textContent = tUI("typeAndConfirm");
    const val = getAnswer(q.id) || "";

    content.innerHTML = `
    <div class="q">
      <h1 class="q-title">${escapeHtml(tQ(q.id, "title", q.title))}</h1>
      ${q.help ? `<p class="q-help">${escapeHtml(tQ(q.id, "help", q.help))}</p>` : ""}

      <div class="field">
        <label>${escapeHtml(tUI("emailLabel"))}</label>
        <input id="em" type="email" placeholder="${escapeHtml(tUI("emailPlaceholder"))}" value="${escapeHtml(val)}" />

      <div class="field">
        <label style="margin-bottom:0;">
          <input id="confirm" type="checkbox" />
          ${escapeHtml(tUI("emailConfirmLabel"))}
        </label>
        <div class="hint" style="margin-top:6px;">${escapeHtml(tUI("emailRedirectHint"))}</div>
      </div>
    </div>
  `;

    continueBtn.style.display = "inline-flex";
    continueBtn.textContent = tUI("confirm");

    const em = el("em");
    const confirm = el("confirm");

    const sync = () => {
        setAnswer(q.id, em.value);
        const ok = isAnswered(q) && confirm.checked;
        continueBtn.disabled = !ok;
    };

    em.addEventListener("input", sync);
    confirm.addEventListener("change", sync);
    sync();

    continueBtn.onclick = () => {
        const ok = isAnswered(q) && confirm.checked;
        if (!ok) return;
        if (CHECKOUT_URL && CHECKOUT_URL.startsWith("http")) window.location.href = CHECKOUT_URL;
        else alert("Você ainda não configurou o CHECKOUT_URL.");
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
    if (prev >= 0) {
        state.index = prev;
        render();
    }
}

function initQuiz() {
  applyDefaultsOnce();
  window.__quizRender = render;
  el("backBtn").addEventListener("click", goBack);
  render();
}


// inicializa idioma e só então inicializa o quiz
initI18n(() => {
    initQuiz();
});