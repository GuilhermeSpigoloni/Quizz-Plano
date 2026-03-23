    // i18n.js
    (() => {
        const LANGS = ["en", "es", "pl", "it", "fr", "pt"];
        const FALLBACK_LANG = "en";

        const I18N = {
            pt: {
                ui: {
                    back: "Voltar",
                    continue: "Continuar",
                    confirm: "Confirmar",
                    pickOne: "Escolha uma opção.",
                    pickMany: "Selecione uma ou mais opções e depois continue.",
                    checkTwo: "Marque as duas caixas para continuar.",
                    fillMetrics: "Informe altura e peso para continuar.",
                    clickContinue: "Clique em Continuar.",
                    typeAndConfirm: "Preencha seus dados e confirme.",
                    genTitle: "SEU PLANO ESTÁ SENDO GERADO",
                    genSub: "Estamos criando seu plano com base no seu perfil (nível, rotina, recuperação, objetivo).",
                    genMetaRight: "Validando detalhes e personalizando…",
                    consentTruth: "Eu me comprometo a seguir o plano e aplicar os treinos na minha rotina.",
                    consentTerms: "Quero um plano personalizado e estou disposto a colocar em prática para ter resultados reais.",
                    nameLabel: "Nome completo",
                    namePlaceholder: "Seu nome completo",
                    emailLabel: "E-mail",
                    emailPlaceholder: "seunome@email.com",
                    emailConfirmLabel: "Confirmo que estes são meus dados para receber o plano.",
                    emailRedirectHint: "Após confirmar, você será redirecionado automaticamente para o checkout.",
                    emailError: "Digite um e-mail válido.",
                    phoneLabel: "WhatsApp / Telefone",
                    phonePlaceholder: "(##) #####-####",
                    phoneError: "Digite um número de telefone válido para o país selecionado.",
                    phoneCountryLabel: "País",
                    heightLabel: "Altura (cm)",
                    weightLabel: "Peso atual (kg)",
                    targetWeightLabel: "Peso-alvo (kg)",
                    dateLabel: "Data",
                    eventDateLabel: "Data do evento",
                    chooseDateHint: "Escolha uma data e clique em Continuar.",
                    typeContinueHint: "Digite e clique em Continuar.",
                    bmiPrefix: "IMC:",
                    bmiCategoryPrefix: "Categoria:",
                    bmiRisksTitle: "Possíveis riscos (tendência)",
                    bmiPlanNote: "Seu plano final combina treino + dieta com base no seu perfil.",
                    yourBodyNowTitle: "Seu corpo atual",
                    yourBodyNowSub: "Usamos isso para calibrar a estratégia e o ritmo.",
                    bmiCatUnder: "Abaixo do peso",
                    bmiCatNormal: "Peso normal",
                    bmiCatOver: "Sobrepeso",
                    bmiCatObese: "Obesidade",
                    bmiRisk_under_1: "Possível baixa energia e fadiga",
                    bmiRisk_under_2: "Menor reserva muscular",
                    bmiRisk_under_3: "A recuperação pode piorar se sono/dieta forem ruins",
                    bmiRisk_normal_1: "Menor risco geral",
                    bmiRisk_normal_2: "Ainda depende de hábitos e sedentarismo",
                    bmiRisk_normal_3: "Foco: força + rotina",
                    bmiRisk_over_1: "Maior risco cardiometabólico ao longo do tempo",
                    bmiRisk_over_2: "Piora com inatividade e sono ruim",
                    bmiRisk_over_3: "Foco: consistência e progressão",
                    bmiRisk_obese_1: "Maior risco cardiometabólico ao longo do tempo",
                    bmiRisk_obese_2: "Pode afetar pressão, glicose e sono",
                    bmiRisk_obese_3: "Foco: estratégia e consistência passo a passo",
                    bmiNote_under: "Abaixo do peso. Construa consistência.",
                    bmiNote_normal: "Faixa normal. Recomp + força.",
                    bmiNote_over: "Sobrepeso. Consistência muda tudo.",
                    bmiNote_obese: "Obesidade. Estratégia e passo a passo.",
                    minLabel: "Mínimo:",
                    heightPlaceholder: "ex.: 175",
                    weightPlaceholder: "ex.: 82,5",
                    targetWeightPlaceholder: "ex.: 75",
                    datePastError: "A data não pode estar no passado. Escolha uma data a partir de hoje.",
                    proj_status_default: "É possível.",
                    proj_note_default: "Projeção estimada — consistência e ajustes fazem diferença.",
                    proj_status_gain: "É possível (ganho/recomposição).",
                    proj_note_gain: "Se seu objetivo for ganhar peso/músculo, o plano ajusta calorias e progressão.",
                    proj_status_aggressive: "Possível, mas pode exigir ajustes (meta agressiva).",
                    proj_note_aggressive: "Se ficar pesado, estender o prazo melhora a sustentabilidade.",
                    proj_status_realistic: "É possível (ritmo realista).",
                    proj_note_realistic: "Um ritmo moderado e consistente tende a ser sustentável.",
                    proj_note_event: "Meta por data (evento). Se o ritmo ficar agressivo, ajuste a meta ou faça por etapas.",
                    proj_currentWeight: "Peso atual:",
                    proj_targetWeight: "Peso-alvo:",
                    proj_deadline: "Prazo:",
                    proj_rate: "Ritmo médio:",
                    daysLabel: "dias",
                    kgPerWeekLabel: "kg/semana",
                },
                testimonials: [
                    { name: "Marina",  text: "Perdi 6kg em 10 semanas seguindo o plano.", stars: 5 },
                    { name: "Carlos",  text: "Treinos curtos, consistência, resultados reais.", stars: 5 },
                    { name: "Letícia", text: "Meu objetivo era definição e encaixou perfeitamente na minha rotina.", stars: 5 },
                    { name: "Rafael",  text: "Voltei a treinar sem dor ajustando as progressões.", stars: 5 },
                    { name: "Bianca",  text: "Dieta simples e prática. Parei de ficar perdida.", stars: 5 },
                    { name: "Diego",   text: "O plano pareceu sólido: construído em cima do meu perfil.", stars: 5 },
                ],
                q: {
                    lang_gate: {
                        title: "Escolha seu idioma",
                        help: "Selecione para começar. Você pode mudar depois.",
                        options: {
                            en: { label: "English",    sub: "Começar em inglês" },
                            es: { label: "Español",    sub: "Começar em espanhol" },
                            pl: { label: "Polski",     sub: "Começar em polonês" },
                            it: { label: "Italiano",   sub: "Começar em italiano" },
                            fr: { label: "Français",   sub: "Começar em francês" },
                            pt: { label: "Português",  sub: "Começar em português" },
                        }
                    },
                    motivation: [
                        { title: "Você não precisa de motivação. Precisa de rotina.", text: "Este plano foi feito para caber no seu dia e evoluir com você. Um passo por vez, sem extremos." },
                        { title: "Consistência vence intensidade.", text: "Resultados vêm de repetir o básico. O plano ajusta volume de treino e dieta para você sustentar." },
                        { title: "Seu corpo responde aos sinais diários.", text: "Treino + alimentação + sono. Alinhe isso e o progresso aparece (mesmo que devagar)." },
                        { title: "O plano é pessoal. O esforço é seu.", text: "Só execute o próximo treino e a próxima refeição. O resto é consequência." },
                    ],
                    goal: {
                        title: "Qual é seu objetivo visual?",
                        help: "Escolha uma opção.",
                        options: {
                            goal_lean:     { label: "Mais definido",  sub: "Visual seco / marcado" },
                            goal_athletic: { label: "Atlético",        sub: "Estética + performance" },
                            goal_muscle:   { label: "Mais volume",     sub: "Físico mais cheio" },
                            goal_strength: { label: "Força",           sub: "Movimentos mais difíceis" },
                        }
                    },
                    age: {
                        title: "Sua faixa de idade",
                        help: "Escolha uma opção.",
                        options: {
                            "13-17": { label: "13–17", sub: "Base e técnica" },
                            "18-24": { label: "18–24", sub: "Progressão rápida" },
                            "25-34": { label: "25–34", sub: "Fase de consistência" },
                            "35-44": { label: "35–44", sub: "Recuperação inteligente" },
                            "45+":   { label: "45+",   sub: "Progressão segura" },
                        }
                    },
                    trained_before: {
                        title: "Você já treinou com consistência antes?",
                        help: "Escolha uma opção.",
                        options: {
                            no:          { label: "Nunca",             sub: "Começando do básico" },
                            yes_some:    { label: "Sim, mas parei",    sub: "Volta com segurança" },
                            yes_regular: { label: "Sim, regularmente", sub: "Ajustar volume e performance" },
                        }
                    },
                    body_current: {
                        title: "Como está seu corpo hoje?",
                        help: "Escolha uma opção.",
                        options: {
                            body_slim:     { label: "Magro",          sub: "Pouca massa muscular" },
                            body_average:  { label: "Médio",           sub: "Formato normal" },
                            body_over:     { label: "Acima do peso",   sub: "Gordura extra" },
                            body_athletic: { label: "Já em forma",     sub: "Melhorar performance" },
                        }
                    },
                    days: {
                        title: "Quantos dias por semana você treina?",
                        help: "Escolha uma opção.",
                        options: {
                            "2":  { label: "2 dias",  sub: "Mínimo efetivo" },
                            "3":  { label: "3 dias",  sub: "Rotina equilibrada" },
                            "4":  { label: "4 dias",  sub: "Progresso mais rápido" },
                            "5+": { label: "5+ dias", sub: "Alta disciplina" },
                        }
                    },
                    pushups: {
                        title: "Quantas flexões você consegue fazer?",
                        help: "Escolha uma opção.",
                        options: {
                            "0":    { label: "0 (ainda não)", sub: "Vamos adaptar" },
                            "1-5":  { label: "1–5",           sub: "Nível inicial" },
                            "6-15": { label: "6–15",          sub: "Intermediário" },
                            "16-30":{ label: "16–30",         sub: "Bom nível" },
                            "31+":  { label: "31+",           sub: "Nível avançado" },
                        }
                    },
                    squats: {
                        title: "Quantos agachamentos você consegue fazer?",
                        help: "Escolha uma opção.",
                        options: {
                            "0-10":  { label: "0–10",  sub: "Nível inicial" },
                            "11-25": { label: "11–25", sub: "Médio" },
                            "26-50": { label: "26–50", sub: "Bom" },
                            "51-80": { label: "51–80", sub: "Muito bom" },
                            "81+":   { label: "81+",   sub: "Excelente" },
                        }
                    },
                    alcohol_use: {
                        title: "Você bebe álcool?",
                        help: "Escolha uma opção.",
                        options: {
                            no:  { label: "Não", sub: "Eu não bebo" },
                            yes: { label: "Sim", sub: "Eu bebo álcool" },
                        }
                    },
                    alcohol_freq: {
                        title: "Com que frequência você bebe álcool?",
                        help: "Escolha uma opção.",
                        options: {
                            rare:    { label: "Raramente",      sub: "1–2x/mês" },
                            weekend: { label: "Fins de semana", sub: "1–2x/semana" },
                            often:   { label: "Com frequência", sub: "3–5x/semana" },
                            daily:   { label: "Quase todo dia", sub: "Alta frequência" },
                        }
                    },
                    consent:    { title: "Confirmação rápida",                  help: "Marque as duas caixas para continuar." },
                    metrics:    { title: "Altura e peso",                        help: "Informe seus dados." },
                    bmi_info:   { title: "Seu IMC e o que isso pode indicar",   help: "Uma leitura rápida antes de continuar." },
                    goal_date:  { title: "Data da meta",                         help: "Sugerimos uma data realista (6 meses). Você pode ajustar." },
                    target:     { title: "Peso-alvo (kg)",                       help: "Digite seu peso-alvo." },
                    projection: { title: "Projeção de progresso",                help: "Com base no peso atual, peso-alvo e data." },
                    gen_email:  { title: "SEU PLANO ESTÁ SENDO GERADO",         help: "Ajustando treino + dieta com base nas suas respostas." },
                    email:      { title: "Quase lá! Preencha seus dados",       help: "Seus dados são usados apenas para envio do plano." },
                }
            },

            en: {
                ui: {
                    back: "Back",
                    continue: "Continue",
                    confirm: "Confirm",
                    pickOne: "Pick one option.",
                    pickMany: "Pick one or more options, then continue.",
                    checkTwo: "Check both boxes to continue.",
                    fillMetrics: "Enter height and weight to continue.",
                    clickContinue: "Click Continue.",
                    typeAndConfirm: "Fill in your details and confirm.",
                    genTitle: "YOUR PLAN IS BEING GENERATED",
                    genSub: "We're building your plan based on your profile (level, routine, recovery, goal).",
                    genMetaRight: "Validating details and personalizing…",
                    consentTruth: "I commit to following the plan and applying the workouts in my routine.",
                    consentTerms: "I want a personalized plan and I'm willing to put it into practice to achieve real results.",
                    nameLabel: "Full name",
                    namePlaceholder: "Your full name",
                    emailLabel: "Email",
                    emailPlaceholder: "yourname@email.com",
                    emailConfirmLabel: "I confirm these are my details to receive the plan.",
                    emailRedirectHint: "After confirming, you will be redirected to checkout automatically.",
                    emailError: "Please enter a valid email address.",
                    phoneLabel: "WhatsApp / Phone",
                    phonePlaceholder: "(##) #####-####",
                    phoneError: "Please enter a valid phone number for the selected country.",
                    phoneCountryLabel: "Country",
                    heightLabel: "Height (cm)",
                    weightLabel: "Current weight (kg)",
                    targetWeightLabel: "Target weight (kg)",
                    dateLabel: "Date",
                    eventDateLabel: "Event date",
                    chooseDateHint: "Choose a date and click Continue.",
                    typeContinueHint: "Type it and click Continue.",
                    bmiPrefix: "BMI:",
                    bmiCategoryPrefix: "Category:",
                    bmiRisksTitle: "Possible risks (trend)",
                    bmiPlanNote: "Your final plan combines training + diet based on your profile.",
                    yourBodyNowTitle: "Your current body",
                    yourBodyNowSub: "We use this to calibrate strategy and pace.",
                    bmiCatUnder: "Underweight",
                    bmiCatNormal: "Normal weight",
                    bmiCatOver: "Overweight",
                    bmiCatObese: "Obesity",
                    bmiRisk_under_1: "Possible low energy and fatigue",
                    bmiRisk_under_2: "Lower muscle reserve",
                    bmiRisk_under_3: "Recovery can suffer if sleep/diet are poor",
                    bmiRisk_normal_1: "Lower overall risk",
                    bmiRisk_normal_2: "Still depends on habits and inactivity",
                    bmiRisk_normal_3: "Focus: strength + routine",
                    bmiRisk_over_1: "Higher cardiometabolic risk over time",
                    bmiRisk_over_2: "Worsens with inactivity and poor sleep",
                    bmiRisk_over_3: "Focus: consistency and progression",
                    bmiRisk_obese_1: "Higher cardiometabolic risk over time",
                    bmiRisk_obese_2: "Can affect blood pressure, glucose, and sleep",
                    bmiRisk_obese_3: "Focus: strategy and step-by-step consistency",
                    bmiNote_under: "Underweight. Build consistency.",
                    bmiNote_normal: "Normal range. Recomp + strength.",
                    bmiNote_over: "Overweight. Consistency changes everything.",
                    bmiNote_obese: "Obesity. Strategy and step-by-step.",
                    minLabel: "Minimum:",
                    heightPlaceholder: "e.g.: 175",
                    weightPlaceholder: "e.g.: 82.5",
                    targetWeightPlaceholder: "e.g.: 75",
                    datePastError: "The date cannot be in the past. Choose a date from today onward.",
                    proj_status_default: "This is doable.",
                    proj_note_default: "Estimated projection — consistency and adjustments make a difference.",
                    proj_status_gain: "This is doable (gain/recomposition).",
                    proj_note_gain: "If your goal is to gain weight/muscle, the plan will adjust calories and progression.",
                    proj_status_aggressive: "Possible, but may require adjustments (aggressive goal).",
                    proj_note_aggressive: "If it feels too hard, extending the deadline improves sustainability.",
                    proj_status_realistic: "This is doable (realistic pace).",
                    proj_note_realistic: "A consistent moderate pace tends to be sustainable.",
                    proj_note_event: "Date-based goal (event). If the pace becomes too aggressive, adjust the goal or plan in stages.",
                    proj_currentWeight: "Current weight:",
                    proj_targetWeight: "Target weight:",
                    proj_deadline: "Deadline:",
                    proj_rate: "Avg. pace:",
                    daysLabel: "days",
                    kgPerWeekLabel: "kg/week",
                },
                testimonials: [
                    { name: "Marina",  text: "I lost 6kg in 10 weeks following the plan.", stars: 5 },
                    { name: "Carlos",  text: "Short workouts, consistency, real results.", stars: 5 },
                    { name: "Letícia", text: "My goal was definition and it fit my routine perfectly.", stars: 5 },
                    { name: "Rafael",  text: "I got back to training pain-free by adjusting progressions.", stars: 5 },
                    { name: "Bianca",  text: "Simple, practical diet. I stopped getting lost.", stars: 5 },
                    { name: "Diego",   text: "The plan felt solid: built around my profile.", stars: 5 },
                ],
                q: {
                    lang_gate: {
                        title: "Choose your language",
                        help: "Select to start. You can change later.",
                        options: {
                            en: { label: "English",   sub: "Start in English" },
                            es: { label: "Español",   sub: "Start in Spanish" },
                            pl: { label: "Polski",    sub: "Start in Polish" },
                            it: { label: "Italiano",  sub: "Start in Italian" },
                            fr: { label: "Français",  sub: "Start in French" },
                            pt: { label: "Português", sub: "Start in Portuguese" },
                        }
                    },
                    motivation: [
                        { title: "You don't need motivation. You need a routine.", text: "This plan is built to fit your day and evolve with you. One step at a time, no extremes." },
                        { title: "Consistency beats intensity.", text: "Results come from repeating the basics. The plan adjusts training volume and diet so you can sustain it." },
                        { title: "Your body responds to daily signals.", text: "Training + nutrition + sleep. Align those and progress shows up (even if it's slow)." },
                        { title: "The plan is personal. The effort is yours.", text: "Just execute the next workout and the next meal. The rest is a consequence." },
                    ],
                    goal: {
                        title: "What is your visual goal?",
                        help: "Pick one option.",
                        options: {
                            goal_lean:     { label: "More defined",  sub: "Lean / sharp look" },
                            goal_athletic: { label: "Athletic",       sub: "Aesthetics + performance" },
                            goal_muscle:   { label: "More size",      sub: "Full physique" },
                            goal_strength: { label: "Strength",       sub: "Harder movements" },
                        }
                    },
                    age: {
                        title: "Your age range",
                        help: "Pick one option.",
                        options: {
                            "13-17": { label: "13–17", sub: "Foundation & technique" },
                            "18-24": { label: "18–24", sub: "Fast progression" },
                            "25-34": { label: "25–34", sub: "Consistency phase" },
                            "35-44": { label: "35–44", sub: "Smart recovery" },
                            "45+":   { label: "45+",   sub: "Safe progression" },
                        }
                    },
                    trained_before: {
                        title: "Have you trained consistently before?",
                        help: "Pick one option.",
                        options: {
                            no:          { label: "Never",             sub: "Starting from basics" },
                            yes_some:    { label: "Yes, but stopped",  sub: "Return safely" },
                            yes_regular: { label: "Yes, regularly",    sub: "Adjust volume & performance" },
                        }
                    },
                    body_current: {
                        title: "How does your body look today?",
                        help: "Pick one option.",
                        options: {
                            body_slim:     { label: "Slim",          sub: "Low muscle mass" },
                            body_average:  { label: "Average",        sub: "Normal shape" },
                            body_over:     { label: "Overweight",     sub: "Extra fat" },
                            body_athletic: { label: "Already fit",    sub: "Improve performance" },
                        }
                    },
                    days: {
                        title: "How many days per week do you train?",
                        help: "Pick one option.",
                        options: {
                            "2":  { label: "2 days",  sub: "Minimum effective" },
                            "3":  { label: "3 days",  sub: "Balanced routine" },
                            "4":  { label: "4 days",  sub: "Faster progress" },
                            "5+": { label: "5+ days", sub: "High discipline" },
                        }
                    },
                    pushups: {
                        title: "How many push-ups can you do?",
                        help: "Pick one option.",
                        options: {
                            "0":    { label: "0 (not yet)", sub: "We will adapt" },
                            "1-5":  { label: "1–5",         sub: "Starting level" },
                            "6-15": { label: "6–15",        sub: "Intermediate" },
                            "16-30":{ label: "16–30",       sub: "Good level" },
                            "31+":  { label: "31+",         sub: "Advanced level" },
                        }
                    },
                    squats: {
                        title: "How many squats can you do?",
                        help: "Pick one option.",
                        options: {
                            "0-10":  { label: "0–10",  sub: "Starting level" },
                            "11-25": { label: "11–25", sub: "Average" },
                            "26-50": { label: "26–50", sub: "Good" },
                            "51-80": { label: "51–80", sub: "Very good" },
                            "81+":   { label: "81+",   sub: "Excellent" },
                        }
                    },
                    alcohol_use: {
                        title: "Do you drink alcohol?",
                        help: "Pick one option.",
                        options: {
                            no:  { label: "No",  sub: "I don't drink" },
                            yes: { label: "Yes", sub: "I drink alcohol" },
                        }
                    },
                    alcohol_freq: {
                        title: "How often do you drink alcohol?",
                        help: "Pick one option.",
                        options: {
                            rare:    { label: "Rarely",        sub: "1–2x/month" },
                            weekend: { label: "Weekends",      sub: "1–2x/week" },
                            often:   { label: "Often",         sub: "3–5x/week" },
                            daily:   { label: "Almost daily",  sub: "High frequency" },
                        }
                    },
                    consent:    { title: "Quick confirmation",                      help: "Check both boxes to continue." },
                    metrics:    { title: "Height and weight",                        help: "Enter your details." },
                    bmi_info:   { title: "Your BMI and what it may indicate",       help: "A quick read before continuing." },
                    goal_date:  { title: "Goal date",                               help: "We suggested a realistic date (6 months). You can adjust." },
                    target:     { title: "Target weight (kg)",                      help: "Enter your target weight." },
                    projection: { title: "Progress projection",                     help: "Based on current weight, target weight, and date." },
                    gen_email:  { title: "YOUR PLAN IS BEING GENERATED",           help: "Adjusting training + diet based on your answers." },
                    email:      { title: "Almost there! Fill in your details",     help: "Your data is used only to send your plan." },
                }
            },

            es: {
                ui: {
                    back: "Volver",
                    continue: "Continuar",
                    confirm: "Confirmar",
                    pickOne: "Elige una opción.",
                    pickMany: "Elige una o más opciones y luego continúa.",
                    checkTwo: "Marca ambas casillas para continuar.",
                    fillMetrics: "Ingresa altura y peso para continuar.",
                    clickContinue: "Haz clic en Continuar.",
                    typeAndConfirm: "Completa tus datos y confirma.",
                    genTitle: "TU PLAN SE ESTÁ GENERANDO",
                    genSub: "Estamos creando tu plan según tu perfil (nivel, rutina, recuperación y objetivo).",
                    genMetaRight: "Validando datos y personalizando…",
                    consentTruth: "Me comprometo a seguir el plan y aplicar los entrenamientos en mi rutina.",
                    consentTerms: "Quiero un plan personalizado y estoy dispuesto a ponerlo en práctica para obtener resultados reales.",
                    nameLabel: "Nombre completo",
                    namePlaceholder: "Tu nombre completo",
                    emailLabel: "Correo electrónico",
                    emailPlaceholder: "tunombre@email.com",
                    emailConfirmLabel: "Confirmo que estos son mis datos para recibir el plan.",
                    emailRedirectHint: "Después de confirmar, serás redirigido al checkout automáticamente.",
                    emailError: "Ingresa un correo electrónico válido.",
                    phoneLabel: "WhatsApp / Teléfono",
                    phonePlaceholder: "(##) ####-####",
                    phoneError: "Ingresa un número de teléfono válido para el país seleccionado.",
                    phoneCountryLabel: "País",
                    heightLabel: "Altura (cm)",
                    weightLabel: "Peso actual (kg)",
                    targetWeightLabel: "Peso objetivo (kg)",
                    dateLabel: "Fecha",
                    eventDateLabel: "Fecha del evento",
                    chooseDateHint: "Elige una fecha y haz clic en Continuar.",
                    typeContinueHint: "Escríbelo y haz clic en Continuar.",
                    bmiPrefix: "IMC:",
                    bmiCategoryPrefix: "Categoría:",
                    bmiRisksTitle: "Posibles riesgos (tendencia)",
                    bmiPlanNote: "Tu plan final combina entrenamiento + dieta según tu perfil.",
                    yourBodyNowTitle: "Tu cuerpo actual",
                    yourBodyNowSub: "Usamos esto para calibrar estrategia y ritmo.",
                    bmiCatUnder: "Bajo peso",
                    bmiCatNormal: "Peso normal",
                    bmiCatOver: "Sobrepeso",
                    bmiCatObese: "Obesidad",
                    bmiRisk_under_1: "Posible baja energía y fatiga",
                    bmiRisk_under_2: "Menor reserva muscular",
                    bmiRisk_under_3: "La recuperación puede empeorar si el sueño/dieta son deficientes",
                    bmiRisk_normal_1: "Menor riesgo general",
                    bmiRisk_normal_2: "Aun así depende de hábitos e inactividad",
                    bmiRisk_normal_3: "Enfoque: fuerza + rutina",
                    bmiRisk_over_1: "Mayor riesgo cardiometabólico con el tiempo",
                    bmiRisk_over_2: "Empeora con inactividad y mal descanso",
                    bmiRisk_over_3: "Enfoque: constancia y progresión",
                    bmiRisk_obese_1: "Mayor riesgo cardiometabólico con el tiempo",
                    bmiRisk_obese_2: "Puede afectar presión arterial, glucosa y sueño",
                    bmiRisk_obese_3: "Enfoque: estrategia y constancia paso a paso",
                    bmiNote_under: "Bajo peso. Construye constancia.",
                    bmiNote_normal: "Rango normal. Recomposición + fuerza.",
                    bmiNote_over: "Sobrepeso. La constancia lo cambia todo.",
                    bmiNote_obese: "Obesidad. Estrategia y paso a paso.",
                    minLabel: "Mínimo:",
                    heightPlaceholder: "p. ej.: 175",
                    weightPlaceholder: "p. ej.: 82.5",
                    targetWeightPlaceholder: "p. ej.: 75",
                    datePastError: "La fecha no puede estar en el pasado. Elige una fecha desde hoy en adelante.",
                    proj_status_default: "Es alcanzable.",
                    proj_note_default: "Proyección estimada — la constancia y los ajustes marcan la diferencia.",
                    proj_status_gain: "Es alcanzable (ganancia/recomposición).",
                    proj_note_gain: "Si tu objetivo es ganar peso/músculo, el plan ajustará calorías y progresión.",
                    proj_status_aggressive: "Posible, pero puede requerir ajustes (objetivo agresivo).",
                    proj_note_aggressive: "Si se siente demasiado difícil, ampliar el plazo mejora la sostenibilidad.",
                    proj_status_realistic: "Es alcanzable (ritmo realista).",
                    proj_note_realistic: "Un ritmo moderado y constante suele ser sostenible.",
                    proj_note_event: "Objetivo por fecha (evento). Si el ritmo es muy agresivo, ajusta la meta o divide el plan en etapas.",
                    proj_currentWeight: "Peso actual:",
                    proj_targetWeight: "Peso objetivo:",
                    proj_deadline: "Fecha límite:",
                    proj_rate: "Ritmo promedio:",
                    daysLabel: "días",
                    kgPerWeekLabel: "kg/semana",
                },
                testimonials: [
                    { name: "Marina",  text: "Perdí 6 kg en 10 semanas siguiendo el plan.", stars: 5 },
                    { name: "Carlos",  text: "Entrenos cortos, constancia, resultados reales.", stars: 5 },
                    { name: "Letícia", text: "Mi objetivo era definición y encajó perfecto en mi rutina.", stars: 5 },
                    { name: "Rafael",  text: "Volví a entrenar sin dolor ajustando las progresiones.", stars: 5 },
                    { name: "Bianca",  text: "Dieta simple y práctica. Dejé de perderme.", stars: 5 },
                    { name: "Diego",   text: "El plan se sintió sólido: hecho según mi perfil.", stars: 5 },
                ],
                q: {
                    lang_gate: {
                        title: "Elige tu idioma",
                        help: "Selecciona para comenzar. Puedes cambiar después.",
                        options: {
                            en: { label: "English",   sub: "Iniciar en inglés" },
                            es: { label: "Español",   sub: "Iniciar en español" },
                            pl: { label: "Polski",    sub: "Iniciar en polaco" },
                            it: { label: "Italiano",  sub: "Iniciar en italiano" },
                            fr: { label: "Français",  sub: "Iniciar en francés" },
                            pt: { label: "Português", sub: "Iniciar en portugués" },
                        }
                    },
                    motivation: [
                        { title: "No necesitas motivación. Necesitas una rutina.", text: "Este plan está hecho para adaptarse a tu día y evolucionar contigo. Paso a paso, sin extremos." },
                        { title: "La constancia vence a la intensidad.", text: "Los resultados vienen de repetir lo básico. El plan ajusta volumen y dieta para que lo sostengas." },
                        { title: "Tu cuerpo responde a señales diarias.", text: "Entrenamiento + nutrición + sueño. Alinea eso y el progreso aparece (aunque sea lento)." },
                        { title: "El plan es personal. El esfuerzo es tuyo.", text: "Solo ejecuta el próximo entrenamiento y la próxima comida. Lo demás es consecuencia." },
                    ],
                    goal: {
                        title: "¿Cuál es tu objetivo visual?",
                        help: "Elige una opción.",
                        options: {
                            goal_lean:     { label: "Más definido/a",  sub: "Aspecto más seco" },
                            goal_athletic: { label: "Atlético/a",       sub: "Estética + rendimiento" },
                            goal_muscle:   { label: "Más volumen",      sub: "Físico más lleno" },
                            goal_strength: { label: "Fuerza",           sub: "Movimientos más duros" },
                        }
                    },
                    age: {
                        title: "Tu rango de edad",
                        help: "Elige una opción.",
                        options: {
                            "13-17": { label: "13–17", sub: "Base y técnica" },
                            "18-24": { label: "18–24", sub: "Progreso rápido" },
                            "25-34": { label: "25–34", sub: "Fase de constancia" },
                            "35-44": { label: "35–44", sub: "Recuperación inteligente" },
                            "45+":   { label: "45+",   sub: "Progresión segura" },
                        }
                    },
                    trained_before: {
                        title: "¿Has entrenado de forma constante antes?",
                        help: "Elige una opción.",
                        options: {
                            no:          { label: "Nunca",               sub: "Empezar desde lo básico" },
                            yes_some:    { label: "Sí, pero dejé",       sub: "Volver con seguridad" },
                            yes_regular: { label: "Sí, regularmente",    sub: "Ajustar volumen y rendimiento" },
                        }
                    },
                    body_current: {
                        title: "¿Cómo se ve tu cuerpo hoy?",
                        help: "Elige una opción.",
                        options: {
                            body_slim:     { label: "Delgado/a",        sub: "Poca masa muscular" },
                            body_average:  { label: "Promedio",          sub: "Forma normal" },
                            body_over:     { label: "Con sobrepeso",     sub: "Grasa extra" },
                            body_athletic: { label: "Ya en forma",       sub: "Mejorar rendimiento" },
                        }
                    },
                    days: {
                        title: "¿Cuántos días por semana entrenas?",
                        help: "Elige una opción.",
                        options: {
                            "2":  { label: "2 días",  sub: "Mínimo efectivo" },
                            "3":  { label: "3 días",  sub: "Rutina equilibrada" },
                            "4":  { label: "4 días",  sub: "Progreso más rápido" },
                            "5+": { label: "5+ días", sub: "Alta disciplina" },
                        }
                    },
                    pushups: {
                        title: "¿Cuántas flexiones puedes hacer?",
                        help: "Elige una opción.",
                        options: {
                            "0":    { label: "0 (aún no)", sub: "Lo adaptaremos" },
                            "1-5":  { label: "1–5",        sub: "Nivel inicial" },
                            "6-15": { label: "6–15",       sub: "Intermedio" },
                            "16-30":{ label: "16–30",      sub: "Buen nivel" },
                            "31+":  { label: "31+",        sub: "Nivel avanzado" },
                        }
                    },
                    squats: {
                        title: "¿Cuántas sentadillas puedes hacer?",
                        help: "Elige una opción.",
                        options: {
                            "0-10":  { label: "0–10",  sub: "Nivel inicial" },
                            "11-25": { label: "11–25", sub: "Promedio" },
                            "26-50": { label: "26–50", sub: "Bueno" },
                            "51-80": { label: "51–80", sub: "Muy bueno" },
                            "81+":   { label: "81+",   sub: "Excelente" },
                        }
                    },
                    alcohol_use: {
                        title: "¿Bebes alcohol?",
                        help: "Elige una opción.",
                        options: {
                            no:  { label: "No",  sub: "No bebo" },
                            yes: { label: "Sí",  sub: "Bebo alcohol" },
                        }
                    },
                    alcohol_freq: {
                        title: "¿Con qué frecuencia bebes alcohol?",
                        help: "Elige una opción.",
                        options: {
                            rare:    { label: "Rara vez",          sub: "1–2x/mes" },
                            weekend: { label: "Fines de semana",   sub: "1–2x/semana" },
                            often:   { label: "A menudo",          sub: "3–5x/semana" },
                            daily:   { label: "Casi a diario",     sub: "Frecuencia alta" },
                        }
                    },
                    consent:    { title: "Confirmación rápida",                  help: "Marca ambas casillas para continuar." },
                    metrics:    { title: "Altura y peso",                         help: "Ingresa tus datos." },
                    bmi_info:   { title: "Tu IMC y lo que puede indicar",        help: "Una lectura rápida antes de continuar." },
                    goal_date:  { title: "Fecha objetivo",                        help: "Sugerimos una fecha realista (6 meses). Puedes ajustarla." },
                    target:     { title: "Peso objetivo (kg)",                    help: "Ingresa tu peso objetivo." },
                    projection: { title: "Proyección de progreso",               help: "Basado en peso actual, peso objetivo y fecha." },
                    gen_email:  { title: "TU PLAN SE ESTÁ GENERANDO",            help: "Ajustando entrenamiento + dieta según tus respuestas." },
                    email:      { title: "¡Casi listo! Completa tus datos",     help: "Tus datos se usan solo para enviarte el plan." },
                }
            },

            it: {
                ui: {
                    back: "Indietro",
                    continue: "Continua",
                    confirm: "Conferma",
                    pickOne: "Scegli un'opzione.",
                    pickMany: "Seleziona una o più opzioni, poi continua.",
                    checkTwo: "Seleziona entrambe le caselle per continuare.",
                    fillMetrics: "Inserisci altezza e peso per continuare.",
                    clickContinue: "Clicca su Continua.",
                    typeAndConfirm: "Compila i tuoi dati e conferma.",
                    genTitle: "IL TUO PIANO È IN FASE DI GENERAZIONE",
                    genSub: "Stiamo creando il tuo piano in base al profilo (livello, routine, recupero, obiettivo).",
                    genMetaRight: "Verifica dettagli e personalizzazione…",
                    consentTruth: "Mi impegno a seguire il piano e ad applicare gli allenamenti nella mia routine.",
                    consentTerms: "Voglio un piano personalizzato e sono disposto a metterlo in pratica per ottenere risultati reali.",
                    nameLabel: "Nome completo",
                    namePlaceholder: "Il tuo nome completo",
                    emailLabel: "Email",
                    emailPlaceholder: "tuonome@email.com",
                    emailConfirmLabel: "Confermo che questi sono i miei dati per ricevere il piano.",
                    emailRedirectHint: "Dopo la conferma, verrai reindirizzato al checkout automaticamente.",
                    emailError: "Inserisci un indirizzo email valido.",
                    phoneLabel: "WhatsApp / Telefono",
                    phonePlaceholder: "(##) #####-####",
                    phoneError: "Inserisci un numero di telefono valido per il paese selezionato.",
                    phoneCountryLabel: "Paese",
                    heightLabel: "Altezza (cm)",
                    weightLabel: "Peso attuale (kg)",
                    targetWeightLabel: "Peso obiettivo (kg)",
                    dateLabel: "Data",
                    eventDateLabel: "Data dell'evento",
                    chooseDateHint: "Scegli una data e clicca su Continua.",
                    typeContinueHint: "Digita e clicca su Continua.",
                    bmiPrefix: "IMC:",
                    bmiCategoryPrefix: "Categoria:",
                    bmiRisksTitle: "Possibili rischi (tendenza)",
                    bmiPlanNote: "Il tuo piano finale combina allenamento + dieta in base al tuo profilo.",
                    yourBodyNowTitle: "Il tuo corpo attuale",
                    yourBodyNowSub: "Lo usiamo per calibrare strategia e ritmo.",
                    bmiCatUnder: "Sottopeso",
                    bmiCatNormal: "Normopeso",
                    bmiCatOver: "Sovrappeso",
                    bmiCatObese: "Obesità",
                    bmiRisk_under_1: "Possibili bassa energia e stanchezza",
                    bmiRisk_under_2: "Minore riserva muscolare",
                    bmiRisk_under_3: "Il recupero può peggiorare se sonno/dieta sono scarsi",
                    bmiRisk_normal_1: "Rischio generale più basso",
                    bmiRisk_normal_2: "Dipende comunque da abitudini e sedentarietà",
                    bmiRisk_normal_3: "Focus: forza + routine",
                    bmiRisk_over_1: "Rischio cardiometabolico più alto nel tempo",
                    bmiRisk_over_2: "Peggiora con inattività e scarso sonno",
                    bmiRisk_over_3: "Focus: costanza e progressione",
                    bmiRisk_obese_1: "Rischio cardiometabolico più alto nel tempo",
                    bmiRisk_obese_2: "Può influire su pressione, glicemia e sonno",
                    bmiRisk_obese_3: "Focus: strategia e costanza passo dopo passo",
                    bmiNote_under: "Sottopeso. Costruisci costanza.",
                    bmiNote_normal: "Fascia normale. Ricomposizione + forza.",
                    bmiNote_over: "Sovrappeso. La costanza cambia tutto.",
                    bmiNote_obese: "Obesità. Strategia e passo dopo passo.",
                    minLabel: "Minimo:",
                    heightPlaceholder: "es.: 175",
                    weightPlaceholder: "es.: 82.5",
                    targetWeightPlaceholder: "es.: 75",
                    datePastError: "La data non può essere nel passato. Scegli una data da oggi in poi.",
                    proj_status_default: "È fattibile.",
                    proj_note_default: "Proiezione stimata — costanza e aggiustamenti fanno la differenza.",
                    proj_status_gain: "È fattibile (aumento/ricomposizione).",
                    proj_note_gain: "Se il tuo obiettivo è aumentare peso/massa, il piano adatterà calorie e progressione.",
                    proj_status_aggressive: "Possibile, ma potrebbe richiedere aggiustamenti (obiettivo aggressivo).",
                    proj_note_aggressive: "Se sembra troppo difficile, estendere la scadenza migliora la sostenibilità.",
                    proj_status_realistic: "È fattibile (ritmo realistico).",
                    proj_note_realistic: "Un ritmo moderato e costante tende ad essere sostenibile.",
                    proj_note_event: "Obiettivo legato a una data (evento). Se il ritmo diventa troppo aggressivo, regola l'obiettivo o fai il piano a fasi.",
                    proj_currentWeight: "Peso attuale:",
                    proj_targetWeight: "Peso obiettivo:",
                    proj_deadline: "Scadenza:",
                    proj_rate: "Ritmo medio:",
                    daysLabel: "giorni",
                    kgPerWeekLabel: "kg/settimana",
                },
                testimonials: [
                    { name: "Marina",  text: "Ho perso 6 kg in 10 settimane seguendo il piano.", stars: 5 },
                    { name: "Carlos",  text: "Allenamenti brevi, costanza, risultati reali.", stars: 5 },
                    { name: "Letícia", text: "Il mio obiettivo era la definizione e si adattava perfettamente alla mia routine.", stars: 5 },
                    { name: "Rafael",  text: "Sono tornato ad allenarmi senza dolore regolando le progressioni.", stars: 5 },
                    { name: "Bianca",  text: "Dieta semplice e pratica. Ho smesso di perdermi.", stars: 5 },
                    { name: "Diego",   text: "Il piano era solido: costruito sul mio profilo.", stars: 5 },
                ],
                q: {
                    lang_gate: {
                        title: "Scegli la tua lingua",
                        help: "Seleziona per iniziare. Puoi cambiarla più tardi.",
                        options: {
                            en: { label: "English",   sub: "Inizia in inglese" },
                            es: { label: "Español",   sub: "Inizia in spagnolo" },
                            pl: { label: "Polski",    sub: "Inizia in polacco" },
                            it: { label: "Italiano",  sub: "Inizia in italiano" },
                            fr: { label: "Français",  sub: "Inizia in francese" },
                            pt: { label: "Português", sub: "Inizia in portoghese" },
                        }
                    },
                    motivation: [
                        { title: "Non ti serve motivazione. Ti serve una routine.", text: "Questo piano è costruito per adattarsi alla tua giornata e crescere con te. Un passo alla volta, senza estremi." },
                        { title: "La costanza batte l'intensità.", text: "I risultati arrivano ripetendo le basi. Il piano regola volume di allenamento e dieta per renderlo sostenibile." },
                        { title: "Il tuo corpo risponde ai segnali quotidiani.", text: "Allenamento + alimentazione + sonno. Allinea tutto e i progressi arrivano (anche se lentamente)." },
                        { title: "Il piano è personale. Lo sforzo è tuo.", text: "Esegui solo il prossimo allenamento e il prossimo pasto. Il resto è una conseguenza." },
                    ],
                    goal: {
                        title: "Qual è il tuo obiettivo estetico?",
                        help: "Scegli un'opzione.",
                        options: {
                            goal_lean:     { label: "Più definito",   sub: "Look asciutto / marcato" },
                            goal_athletic: { label: "Atletico",        sub: "Estetica + performance" },
                            goal_muscle:   { label: "Più massa",       sub: "Fisico pieno" },
                            goal_strength: { label: "Forza",           sub: "Movimenti più difficili" },
                        }
                    },
                    age: {
                        title: "Fascia d'età",
                        help: "Scegli un'opzione.",
                        options: {
                            "13-17": { label: "13–17", sub: "Base & tecnica" },
                            "18-24": { label: "18–24", sub: "Progressione rapida" },
                            "25-34": { label: "25–34", sub: "Fase di costanza" },
                            "35-44": { label: "35–44", sub: "Recupero intelligente" },
                            "45+":   { label: "45+",   sub: "Progressione sicura" },
                        }
                    },
                    trained_before: {
                        title: "Ti sei allenato con costanza in passato?",
                        help: "Scegli un'opzione.",
                        options: {
                            no:          { label: "Mai",                sub: "Partenza dalle basi" },
                            yes_some:    { label: "Sì, ma ho smesso",   sub: "Rientro in sicurezza" },
                            yes_regular: { label: "Sì, regolarmente",   sub: "Regola volume & performance" },
                        }
                    },
                    body_current: {
                        title: "Com'è il tuo corpo oggi?",
                        help: "Scegli un'opzione.",
                        options: {
                            body_slim:     { label: "Magro",           sub: "Poca massa muscolare" },
                            body_average:  { label: "Nella media",      sub: "Forma normale" },
                            body_over:     { label: "Sovrappeso",       sub: "Grasso in eccesso" },
                            body_athletic: { label: "Già in forma",     sub: "Migliorare la performance" },
                        }
                    },
                    days: {
                        title: "Quanti giorni a settimana ti alleni?",
                        help: "Scegli un'opzione.",
                        options: {
                            "2":  { label: "2 giorni",  sub: "Minimo efficace" },
                            "3":  { label: "3 giorni",  sub: "Routine equilibrata" },
                            "4":  { label: "4 giorni",  sub: "Progressi più rapidi" },
                            "5+": { label: "5+ giorni", sub: "Alta disciplina" },
                        }
                    },
                    pushups: {
                        title: "Quante flessioni riesci a fare?",
                        help: "Scegli un'opzione.",
                        options: {
                            "0":    { label: "0 (non ancora)", sub: "Adatteremo il percorso" },
                            "1-5":  { label: "1–5",            sub: "Livello iniziale" },
                            "6-15": { label: "6–15",           sub: "Intermedio" },
                            "16-30":{ label: "16–30",          sub: "Buon livello" },
                            "31+":  { label: "31+",            sub: "Livello avanzato" },
                        }
                    },
                    squats: {
                        title: "Quanti squat riesci a fare?",
                        help: "Scegli un'opzione.",
                        options: {
                            "0-10":  { label: "0–10",  sub: "Livello iniziale" },
                            "11-25": { label: "11–25", sub: "Nella media" },
                            "26-50": { label: "26–50", sub: "Buono" },
                            "51-80": { label: "51–80", sub: "Molto buono" },
                            "81+":   { label: "81+",   sub: "Eccellente" },
                        }
                    },
                    alcohol_use: {
                        title: "Bevi alcol?",
                        help: "Scegli un'opzione.",
                        options: {
                            no:  { label: "No",  sub: "Non bevo" },
                            yes: { label: "Sì",  sub: "Bevo alcol" },
                        }
                    },
                    alcohol_freq: {
                        title: "Quanto spesso bevi alcol?",
                        help: "Scegli un'opzione.",
                        options: {
                            rare:    { label: "Raramente",          sub: "1–2 volte/mese" },
                            weekend: { label: "Nei weekend",        sub: "1–2 volte/settimana" },
                            often:   { label: "Spesso",             sub: "3–5 volte/settimana" },
                            daily:   { label: "Quasi ogni giorno",  sub: "Alta frequenza" },
                        }
                    },
                    consent:    { title: "Conferma rapida",                          help: "Seleziona entrambe le caselle per continuare." },
                    metrics:    { title: "Altezza e peso",                            help: "Inserisci i tuoi dati." },
                    bmi_info:   { title: "Il tuo IMC e cosa può indicare",           help: "Una lettura veloce prima di continuare." },
                    goal_date:  { title: "Data obiettivo",                           help: "Abbiamo suggerito una data realistica (6 mesi). Puoi modificarla." },
                    target:     { title: "Peso obiettivo (kg)",                      help: "Inserisci il tuo peso obiettivo." },
                    projection: { title: "Proiezione dei progressi",                 help: "Basata su peso attuale, peso obiettivo e data." },
                    gen_email:  { title: "IL TUO PIANO È IN FASE DI GENERAZIONE",   help: "Adattiamo allenamento + dieta in base alle tue risposte." },
                    email:      { title: "Ci siamo quasi! Compila i tuoi dati",     help: "I tuoi dati vengono usati solo per inviarti il piano." },
                }
            },

            fr: {
                ui: {
                    back: "Retour",
                    continue: "Continuer",
                    confirm: "Confirmer",
                    pickOne: "Choisissez une option.",
                    pickMany: "Choisissez une ou plusieurs options, puis continuez.",
                    checkTwo: "Cochez les deux cases pour continuer.",
                    fillMetrics: "Entrez votre taille et votre poids pour continuer.",
                    clickContinue: "Cliquez sur Continuer.",
                    typeAndConfirm: "Remplissez vos informations et confirmez.",
                    genTitle: "VOTRE PLAN EST EN COURS DE GÉNÉRATION",
                    genSub: "Nous construisons votre plan selon votre profil (niveau, routine, récupération, objectif).",
                    genMetaRight: "Validation des informations et personnalisation…",
                    consentTruth: "Je m'engage à suivre le plan et à appliquer les entraînements dans ma routine.",
                    consentTerms: "Je veux un plan personnalisé et je suis prêt à le mettre en pratique pour obtenir de vrais résultats.",
                    nameLabel: "Nom complet",
                    namePlaceholder: "Votre nom complet",
                    emailLabel: "E-mail",
                    emailPlaceholder: "votrenom@email.com",
                    emailConfirmLabel: "Je confirme que ce sont mes coordonnées pour recevoir le plan.",
                    emailRedirectHint: "Après confirmation, vous serez redirigé vers le checkout automatiquement.",
                    emailError: "Veuillez saisir une adresse e-mail valide.",
                    phoneLabel: "WhatsApp / Téléphone",
                    phonePlaceholder: "(##) #####-####",
                    phoneError: "Veuillez saisir un numéro de téléphone valide pour le pays sélectionné.",
                    phoneCountryLabel: "Pays",
                    heightLabel: "Taille (cm)",
                    weightLabel: "Poids actuel (kg)",
                    targetWeightLabel: "Poids cible (kg)",
                    dateLabel: "Date",
                    eventDateLabel: "Date de l'événement",
                    chooseDateHint: "Choisissez une date et cliquez sur Continuer.",
                    typeContinueHint: "Saisissez la valeur et cliquez sur Continuer.",
                    bmiPrefix: "IMC :",
                    bmiCategoryPrefix: "Catégorie :",
                    bmiRisksTitle: "Risques possibles (tendance)",
                    bmiPlanNote: "Votre plan final combine entraînement + alimentation selon votre profil.",
                    yourBodyNowTitle: "Votre corps actuellement",
                    yourBodyNowSub: "Nous utilisons cela pour calibrer la stratégie et le rythme.",
                    bmiCatUnder: "Insuffisance pondérale",
                    bmiCatNormal: "Poids normal",
                    bmiCatOver: "Surpoids",
                    bmiCatObese: "Obésité",
                    bmiRisk_under_1: "Possibilité de faible énergie et fatigue",
                    bmiRisk_under_2: "Réserve musculaire réduite",
                    bmiRisk_under_3: "La récupération peut être affectée si le sommeil/alimentation sont insuffisants",
                    bmiRisk_normal_1: "Risque global plus faible",
                    bmiRisk_normal_2: "Dépend toujours des habitudes et de l'inactivité",
                    bmiRisk_normal_3: "Focus : force + routine",
                    bmiRisk_over_1: "Risque cardiométabolique plus élevé avec le temps",
                    bmiRisk_over_2: "S'aggrave avec l'inactivité et le manque de sommeil",
                    bmiRisk_over_3: "Focus : régularité et progression",
                    bmiRisk_obese_1: "Risque cardiométabolique élevé",
                    bmiRisk_obese_2: "Peut affecter tension, glycémie et sommeil",
                    bmiRisk_obese_3: "Focus : stratégie et progression étape par étape",
                    bmiNote_under: "Insuffisance pondérale. Construire la régularité.",
                    bmiNote_normal: "Zone normale. Recomposition + force.",
                    bmiNote_over: "Surpoids. La régularité change tout.",
                    bmiNote_obese: "Obésité. Stratégie progressive.",
                    minLabel: "Minimum :",
                    heightPlaceholder: "ex. : 175",
                    weightPlaceholder: "ex. : 82.5",
                    targetWeightPlaceholder: "ex. : 75",
                    datePastError: "La date ne peut pas être dans le passé. Choisissez une date à partir d'aujourd'hui.",
                    proj_status_default: "C'est faisable.",
                    proj_note_default: "Projection estimée — la régularité et les ajustements font la différence.",
                    proj_status_gain: "C'est faisable (prise de masse/recomposition).",
                    proj_note_gain: "Si votre objectif est de prendre du poids/muscle, le plan ajustera calories et progression.",
                    proj_status_aggressive: "Possible, mais peut nécessiter des ajustements (objectif ambitieux).",
                    proj_note_aggressive: "Si cela semble trop difficile, prolonger le délai améliore la durabilité.",
                    proj_status_realistic: "C'est faisable (rythme réaliste).",
                    proj_note_realistic: "Un rythme modéré et constant est généralement durable.",
                    proj_note_event: "Objectif basé sur une date (événement). Si le rythme devient trop agressif, ajustez l'objectif ou planifiez par étapes.",
                    proj_currentWeight: "Poids actuel :",
                    proj_targetWeight: "Poids cible :",
                    proj_deadline: "Date limite :",
                    proj_rate: "Rythme moyen :",
                    daysLabel: "jours",
                    kgPerWeekLabel: "kg/semaine",
                },
                testimonials: [
                    { name: "Marina",  text: "J'ai perdu 6 kg en 10 semaines en suivant le plan.", stars: 5 },
                    { name: "Carlos",  text: "Séances courtes, régularité, vrais résultats.", stars: 5 },
                    { name: "Letícia", text: "Mon objectif était la définition et cela s'est parfaitement adapté à ma routine.", stars: 5 },
                    { name: "Rafael",  text: "J'ai repris l'entraînement sans douleur en ajustant les progressions.", stars: 5 },
                    { name: "Bianca",  text: "Alimentation simple et pratique. Je ne me sens plus perdue.", stars: 5 },
                    { name: "Diego",   text: "Le plan était structuré selon mon profil.", stars: 5 },
                ],
                q: {
                    lang_gate: {
                        title: "Choisissez votre langue",
                        help: "Sélectionnez pour commencer. Vous pourrez changer plus tard.",
                        options: {
                            en: { label: "English",   sub: "Commencer en anglais" },
                            es: { label: "Español",   sub: "Commencer en espagnol" },
                            pl: { label: "Polski",    sub: "Commencer en polonais" },
                            it: { label: "Italiano",  sub: "Commencer en italien" },
                            fr: { label: "Français",  sub: "Commencer en français" },
                            pt: { label: "Português", sub: "Commencer en portugais" },
                        }
                    },
                    motivation: [
                        { title: "Vous n'avez pas besoin de motivation. Vous avez besoin d'une routine.", text: "Ce plan est conçu pour s'adapter à votre journée et évoluer avec vous. Une étape à la fois." },
                        { title: "La régularité dépasse l'intensité.", text: "Les résultats viennent de la répétition des bases. Le plan ajuste volume et alimentation." },
                        { title: "Votre corps répond aux signaux quotidiens.", text: "Entraînement + nutrition + sommeil. Alignez-les et les progrès apparaissent." },
                        { title: "Le plan est personnalisé. L'effort vous appartient.", text: "Exécutez la prochaine séance et le prochain repas. Le reste suivra." },
                    ],
                    goal: {
                        title: "Quel est votre objectif visuel ?",
                        help: "Choisissez une option.",
                        options: {
                            goal_lean:     { label: "Plus défini",    sub: "Silhouette sèche" },
                            goal_athletic: { label: "Athlétique",      sub: "Esthétique + performance" },
                            goal_muscle:   { label: "Plus de volume",  sub: "Physique plus massif" },
                            goal_strength: { label: "Force",           sub: "Mouvements plus puissants" },
                        }
                    },
                    age: {
                        title: "Votre tranche d'âge",
                        help: "Choisissez une option.",
                        options: {
                            "13-17": { label: "13–17", sub: "Base & technique" },
                            "18-24": { label: "18–24", sub: "Progression rapide" },
                            "25-34": { label: "25–34", sub: "Phase de régularité" },
                            "35-44": { label: "35–44", sub: "Récupération intelligente" },
                            "45+":   { label: "45+",   sub: "Progression sécurisée" },
                        }
                    },
                    trained_before: {
                        title: "Avez-vous déjà suivi un entraînement régulier ?",
                        help: "Choisissez une option.",
                        options: {
                            no:          { label: "Jamais",                   sub: "Commencer par les bases" },
                            yes_some:    { label: "Oui, mais j'ai arrêté",    sub: "Reprendre progressivement" },
                            yes_regular: { label: "Oui, régulièrement",       sub: "Ajuster volume & performance" },
                        }
                    },
                    body_current: {
                        title: "À quoi ressemble votre corps aujourd'hui ?",
                        help: "Choisissez une option.",
                        options: {
                            body_slim:     { label: "Mince",          sub: "Faible masse musculaire" },
                            body_average:  { label: "Moyen",           sub: "Silhouette normale" },
                            body_over:     { label: "Surpoids",        sub: "Excès de graisse" },
                            body_athletic: { label: "Déjà en forme",   sub: "Améliorer la performance" },
                        }
                    },
                    days: {
                        title: "Combien de jours par semaine vous entraînez-vous ?",
                        help: "Choisissez une option.",
                        options: {
                            "2":  { label: "2 jours",  sub: "Minimum efficace" },
                            "3":  { label: "3 jours",  sub: "Routine équilibrée" },
                            "4":  { label: "4 jours",  sub: "Progression plus rapide" },
                            "5+": { label: "5+ jours", sub: "Discipline élevée" },
                        }
                    },
                    pushups: {
                        title: "Combien de pompes pouvez-vous faire ?",
                        help: "Choisissez une option.",
                        options: {
                            "0":    { label: "0 (pas encore)", sub: "Nous adapterons" },
                            "1-5":  { label: "1–5",            sub: "Débutant" },
                            "6-15": { label: "6–15",           sub: "Intermédiaire" },
                            "16-30":{ label: "16–30",          sub: "Bon niveau" },
                            "31+":  { label: "31+",            sub: "Avancé" },
                        }
                    },
                    squats: {
                        title: "Combien de squats pouvez-vous faire ?",
                        help: "Choisissez une option.",
                        options: {
                            "0-10":  { label: "0–10",  sub: "Débutant" },
                            "11-25": { label: "11–25", sub: "Moyen" },
                            "26-50": { label: "26–50", sub: "Bon" },
                            "51-80": { label: "51–80", sub: "Très bon" },
                            "81+":   { label: "81+",   sub: "Excellent" },
                        }
                    },
                    alcohol_use: {
                        title: "Consommez-vous de l'alcool ?",
                        help: "Choisissez une option.",
                        options: {
                            no:  { label: "Non", sub: "Je ne bois pas" },
                            yes: { label: "Oui", sub: "Je consomme de l'alcool" },
                        }
                    },
                    alcohol_freq: {
                        title: "À quelle fréquence consommez-vous de l'alcool ?",
                        help: "Choisissez une option.",
                        options: {
                            rare:    { label: "Rarement",              sub: "1–2x/mois" },
                            weekend: { label: "Week-ends",             sub: "1–2x/semaine" },
                            often:   { label: "Souvent",              sub: "3–5x/semaine" },
                            daily:   { label: "Presque tous les jours",sub: "Fréquence élevée" },
                        }
                    },
                    consent:    { title: "Confirmation rapide",                           help: "Cochez les deux cases pour continuer." },
                    metrics:    { title: "Taille et poids",                               help: "Entrez vos informations." },
                    bmi_info:   { title: "Votre IMC et ce qu'il peut indiquer",           help: "Lecture rapide avant de continuer." },
                    goal_date:  { title: "Date objectif",                                 help: "Nous avons suggéré une date réaliste (6 mois). Vous pouvez ajuster." },
                    target:     { title: "Poids cible (kg)",                              help: "Entrez votre poids cible." },
                    projection: { title: "Projection de progression",                     help: "Basée sur poids actuel, poids cible et date." },
                    gen_email:  { title: "VOTRE PLAN EST EN COURS DE GÉNÉRATION",        help: "Ajustement entraînement + alimentation selon vos réponses." },
                    email:      { title: "Presque là ! Remplissez vos informations",     help: "Vos données sont utilisées uniquement pour vous envoyer le plan." },
                }
            },

            pl: {
                ui: {
                    back: "Wstecz",
                    continue: "Kontynuuj",
                    confirm: "Potwierdź",
                    pickOne: "Wybierz jedną opcję.",
                    pickMany: "Wybierz jedną lub więcej opcji, a następnie kontynuuj.",
                    checkTwo: "Zaznacz oba pola, aby kontynuować.",
                    fillMetrics: "Wpisz wzrost i wagę, aby kontynuować.",
                    clickContinue: "Kliknij Kontynuuj.",
                    typeAndConfirm: "Uzupełnij dane i potwierdź.",
                    genTitle: "TWÓJ PLAN JEST GENEROWANY",
                    genSub: "Tworzymy Twój plan na podstawie profilu (poziom, rutyna, regeneracja, cel).",
                    genMetaRight: "Weryfikacja danych i personalizacja…",
                    consentTruth: "Zobowiązuję się do przestrzegania planu i wykonywania treningów w mojej rutynie.",
                    consentTerms: "Chcę spersonalizowanego planu i jestem gotów wprowadzić go w życie, aby osiągnąć realne rezultaty.",
                    nameLabel: "Imię i nazwisko",
                    namePlaceholder: "Twoje imię i nazwisko",
                    emailLabel: "E-mail",
                    emailPlaceholder: "twojemail@email.com",
                    emailConfirmLabel: "Potwierdzam, że to moje dane do otrzymania planu.",
                    emailRedirectHint: "Po potwierdzeniu nastąpi automatyczne przekierowanie do kasy.",
                    emailError: "Wpisz prawidłowy adres e-mail.",
                    phoneLabel: "WhatsApp / Telefon",
                    phonePlaceholder: "(##) #####-####",
                    phoneError: "Wpisz prawidłowy numer telefonu dla wybranego kraju.",
                    phoneCountryLabel: "Kraj",
                    heightLabel: "Wzrost (cm)",
                    weightLabel: "Aktualna waga (kg)",
                    targetWeightLabel: "Docelowa waga (kg)",
                    dateLabel: "Data",
                    eventDateLabel: "Data wydarzenia",
                    chooseDateHint: "Wybierz datę i kliknij Kontynuuj.",
                    typeContinueHint: "Wpisz wartość i kliknij Kontynuuj.",
                    bmiPrefix: "BMI:",
                    bmiCategoryPrefix: "Kategoria:",
                    bmiRisksTitle: "Możliwe ryzyka (trend)",
                    bmiPlanNote: "Końcowy plan łączy trening + dietę zgodnie z Twoim profilem.",
                    yourBodyNowTitle: "Twoje obecne ciało",
                    yourBodyNowSub: "Na tej podstawie dobieramy strategię i tempo.",
                    bmiCatUnder: "Niedowaga",
                    bmiCatNormal: "Waga prawidłowa",
                    bmiCatOver: "Nadwaga",
                    bmiCatObese: "Otyłość",
                    bmiRisk_under_1: "Możliwe niskie poziomy energii i zmęczenie",
                    bmiRisk_under_2: "Niska rezerwa mięśniowa",
                    bmiRisk_under_3: "Regeneracja może być utrudniona przy słabym śnie/diecie",
                    bmiRisk_normal_1: "Niższe ogólne ryzyko",
                    bmiRisk_normal_2: "Zależne od nawyków i braku ruchu",
                    bmiRisk_normal_3: "Fokus: siła + rutyna",
                    bmiRisk_over_1: "Wyższe ryzyko kardiometaboliczne w czasie",
                    bmiRisk_over_2: "Pogarsza się przy braku ruchu i słabym śnie",
                    bmiRisk_over_3: "Fokus: regularność i progresja",
                    bmiRisk_obese_1: "Znacznie wyższe ryzyko kardiometaboliczne",
                    bmiRisk_obese_2: "Może wpływać na ciśnienie, glukozę i sen",
                    bmiRisk_obese_3: "Fokus: strategia i krok po kroku",
                    bmiNote_under: "Niedowaga. Buduj regularność.",
                    bmiNote_normal: "Zakres prawidłowy. Re-kompozycja + siła.",
                    bmiNote_over: "Nadwaga. Regularność zmienia wszystko.",
                    bmiNote_obese: "Otyłość. Strategia i stopniowy proces.",
                    minLabel: "Minimum:",
                    heightPlaceholder: "np.: 175",
                    weightPlaceholder: "np.: 82.5",
                    targetWeightPlaceholder: "np.: 75",
                    datePastError: "Data nie może być w przeszłości. Wybierz datę od dziś.",
                    proj_status_default: "To jest wykonalne.",
                    proj_note_default: "Szacowana prognoza — regularność i korekty robią różnicę.",
                    proj_status_gain: "To jest wykonalne (masa/rekompozycja).",
                    proj_note_gain: "Jeśli celem jest masa mięśniowa, plan dostosuje kalorie i progresję.",
                    proj_status_aggressive: "Możliwe, ale może wymagać korekt (ambitny cel).",
                    proj_note_aggressive: "Wydłużenie terminu zwiększa trwałość efektów.",
                    proj_status_realistic: "To jest wykonalne (realne tempo).",
                    proj_note_realistic: "Umiarkowane, stałe tempo jest najbardziej trwałe.",
                    proj_note_event: "Cel oparty na dacie (wydarzenie). W razie potrzeby plan można etapować.",
                    proj_currentWeight: "Aktualna waga:",
                    proj_targetWeight: "Docelowa waga:",
                    proj_deadline: "Termin:",
                    proj_rate: "Średnie tempo:",
                    daysLabel: "dni",
                    kgPerWeekLabel: "kg/tydzień",
                },
                testimonials: [
                    { name: "Marina",  text: "Schudłam 6 kg w 10 tygodni dzięki planowi.", stars: 5 },
                    { name: "Carlos",  text: "Krótkie treningi, regularność, realne efekty.", stars: 5 },
                    { name: "Letícia", text: "Cel definicji idealnie dopasowany do mojej rutyny.", stars: 5 },
                    { name: "Rafael",  text: "Wróciłem do treningów bez bólu dzięki progresji.", stars: 5 },
                    { name: "Bianca",  text: "Prosta i praktyczna dieta. Koniec chaosu.", stars: 5 },
                    { name: "Diego",   text: "Plan dopasowany dokładnie do mojego profilu.", stars: 5 },
                ],
                q: {
                    lang_gate: {
                        title: "Wybierz język",
                        help: "Wybierz, aby rozpocząć. Zmiana możliwa później.",
                        options: {
                            en: { label: "English",   sub: "Start po angielsku" },
                            es: { label: "Español",   sub: "Start po hiszpańsku" },
                            pl: { label: "Polski",    sub: "Start po polsku" },
                            it: { label: "Italiano",  sub: "Start po włosku" },
                            fr: { label: "Français",  sub: "Start po francusku" },
                            pt: { label: "Português", sub: "Start po portugalsku" },
                        }
                    },
                    motivation: [
                        { title: "Nie potrzebujesz motywacji. Potrzebujesz rutyny.", text: "Ten plan dopasowuje się do Twojego dnia i rozwija razem z Tobą." },
                        { title: "Regularność wygrywa z intensywnością.", text: "Efekty wynikają z powtarzalnych podstaw." },
                        { title: "Twoje ciało reaguje na codzienne sygnały.", text: "Trening + dieta + sen. Zgraj je, a progres się pojawi." },
                        { title: "Plan jest osobisty. Wysiłek należy do Ciebie.", text: "Zrób kolejny trening i kolejny posiłek. Reszta przyjdzie sama." },
                    ],
                    goal: {
                        title: "Jaki jest Twój cel wizualny?",
                        help: "Wybierz jedną opcję.",
                        options: {
                            goal_lean:     { label: "Bardziej zarysowana sylwetka", sub: "Smukły wygląd" },
                            goal_athletic: { label: "Atletyczna",                    sub: "Estetyka + wydajność" },
                            goal_muscle:   { label: "Więcej masy",                   sub: "Pełniejsza sylwetka" },
                            goal_strength: { label: "Siła",                          sub: "Mocniejsze ruchy" },
                        }
                    },
                    age: {
                        title: "Twój przedział wiekowy",
                        help: "Wybierz jedną opcję.",
                        options: {
                            "13-17": { label: "13–17", sub: "Podstawy i technika" },
                            "18-24": { label: "18–24", sub: "Szybka progresja" },
                            "25-34": { label: "25–34", sub: "Faza regularności" },
                            "35-44": { label: "35–44", sub: "Mądra regeneracja" },
                            "45+":   { label: "45+",   sub: "Bezpieczna progresja" },
                        }
                    },
                    trained_before: {
                        title: "Czy trenowałeś(-aś) regularnie wcześniej?",
                        help: "Wybierz jedną opcję.",
                        options: {
                            no:          { label: "Nigdy",                    sub: "Zaczynamy od podstaw" },
                            yes_some:    { label: "Tak, ale przestałem(-am)", sub: "Bezpieczny powrót" },
                            yes_regular: { label: "Tak, regularnie",          sub: "Dostosowanie objętości i wydajności" },
                        }
                    },
                    body_current: {
                        title: "Jak wygląda Twoja sylwetka obecnie?",
                        help: "Wybierz jedną opcję.",
                        options: {
                            body_slim:     { label: "Szczupła",          sub: "Niska masa mięśniowa" },
                            body_average:  { label: "Przeciętna",         sub: "Normalna budowa" },
                            body_over:     { label: "Nadwaga",            sub: "Nadmiar tkanki tłuszczowej" },
                            body_athletic: { label: "Już wysportowana",   sub: "Poprawa wydajności" },
                        }
                    },
                    days: {
                        title: "Ile dni w tygodniu trenujesz?",
                        help: "Wybierz jedną opcję.",
                        options: {
                            "2":  { label: "2 dni",  sub: "Minimum efektywne" },
                            "3":  { label: "3 dni",  sub: "Zrównoważona rutyna" },
                            "4":  { label: "4 dni",  sub: "Szybszy progres" },
                            "5+": { label: "5+ dni", sub: "Wysoka dyscyplina" },
                        }
                    },
                    pushups: {
                        title: "Ile pompek potrafisz zrobić?",
                        help: "Wybierz jedną opcję.",
                        options: {
                            "0":    { label: "0 (jeszcze nie)", sub: "Dostosujemy" },
                            "1-5":  { label: "1–5",             sub: "Poziom początkowy" },
                            "6-15": { label: "6–15",            sub: "Średniozaawansowany" },
                            "16-30":{ label: "16–30",           sub: "Dobry poziom" },
                            "31+":  { label: "31+",             sub: "Zaawansowany" },
                        }
                    },
                    squats: {
                        title: "Ile przysiadów potrafisz zrobić?",
                        help: "Wybierz jedną opcję.",
                        options: {
                            "0-10":  { label: "0–10",  sub: "Poziom początkowy" },
                            "11-25": { label: "11–25", sub: "Średni" },
                            "26-50": { label: "26–50", sub: "Dobry" },
                            "51-80": { label: "51–80", sub: "Bardzo dobry" },
                            "81+":   { label: "81+",   sub: "Doskonały" },
                        }
                    },
                    alcohol_use: {
                        title: "Czy pijesz alkohol?",
                        help: "Wybierz jedną opcję.",
                        options: {
                            no:  { label: "Nie", sub: "Nie piję" },
                            yes: { label: "Tak", sub: "Piję alkohol" },
                        }
                    },
                    alcohol_freq: {
                        title: "Jak często pijesz alkohol?",
                        help: "Wybierz jedną opcję.",
                        options: {
                            rare:    { label: "Rzadko",             sub: "1–2x/miesiąc" },
                            weekend: { label: "Weekendy",           sub: "1–2x/tydzień" },
                            often:   { label: "Często",             sub: "3–5x/tydzień" },
                            daily:   { label: "Prawie codziennie",  sub: "Wysoka częstotliwość" },
                        }
                    },
                    consent:    { title: "Szybkie potwierdzenie",                    help: "Zaznacz oba pola, aby kontynuować." },
                    metrics:    { title: "Wzrost i waga",                             help: "Wpisz swoje dane." },
                    bmi_info:   { title: "Twoje BMI i co może oznaczać",             help: "Krótka informacja przed kontynuacją." },
                    goal_date:  { title: "Data celu",                                 help: "Zaproponowaliśmy realistyczny termin (6 miesięcy). Możesz go zmienić." },
                    target:     { title: "Docelowa waga (kg)",                        help: "Wpisz swoją wagę docelową." },
                    projection: { title: "Prognoza postępów",                         help: "Na podstawie aktualnej wagi, celu i daty." },
                    gen_email:  { title: "TWÓJ PLAN JEST GENEROWANY",                help: "Dostosowujemy trening i dietę na podstawie Twoich odpowiedzi." },
                    email:      { title: "Prawie gotowe! Uzupełnij swoje dane",      help: "Twoje dane są używane wyłącznie do wysłania planu." },
                }
            },
        };

        let LANG = "es";

        function safeGet(obj, path) {
            let cur = obj;
            for (const p of path) {
                if (!cur || typeof cur !== "object") return undefined;
                cur = cur[p];
            }
            return cur;
        }

        function getStoredLang() {
            try { return localStorage.getItem("quiz_lang"); } catch { return null; }
        }
        function storeLang(l) {
            try { localStorage.setItem("quiz_lang", l); } catch { }
        }

        function setLang(next) {
            if (!LANGS.includes(next)) return;
            LANG = next;
            document.documentElement.lang = next;
            const sel = document.getElementById("langSelect");
            if (sel) sel.value = next;
            storeLang(next);
        }

        function tQ(qid, field, fallback = "") {
            return safeGet(I18N, [LANG, "q", qid, field]) ??
                safeGet(I18N, [FALLBACK_LANG, "q", qid, field]) ??
                fallback;
        }

        function tOpt(qid, optKey, field, fallback = "") {
            return safeGet(I18N, [LANG, "q", qid, "options", optKey, field]) ??
                safeGet(I18N, [FALLBACK_LANG, "q", qid, "options", optKey, field]) ??
                fallback;
        }

        function tUI(key, fallback = "") {
            return safeGet(I18N, [LANG, "ui", key]) ??
                safeGet(I18N, [FALLBACK_LANG, "ui", key]) ??
                fallback;
        }

        function tMotivation(index, fallback = { title: "", text: "" }) {
            const list =
                safeGet(I18N, [LANG, "q", "motivation"]) ??
                safeGet(I18N, [FALLBACK_LANG, "q", "motivation"]) ??
                null;
            if (!Array.isArray(list) || list.length === 0) return fallback;
            return list[index % list.length] || fallback;
        }
        window.tMotivation = tMotivation;

        function initLang() {
            LANG = "es";
            storeLang("es");
            const sel = document.getElementById("langSelect");
            if (sel) {
                sel.value = LANG;
                sel.addEventListener("change", (e) => {
                    setLang(e.target.value);
                    window.__quizRender?.();
                });
            }
            document.documentElement.lang = LANG;
        }

        function tTestimonials() {
            return safeGet(I18N, [LANG, "testimonials"]) ??
                safeGet(I18N, [FALLBACK_LANG, "testimonials"]) ??
                [];
        }
        window.tTestimonials = tTestimonials;

        window.I18N          = I18N;
        window.I18N_LANGS    = LANGS;
        window.i18nSetLang   = setLang;
        window.i18nGetLang   = () => LANG;
        window.tQ            = tQ;
        window.tOpt          = tOpt;
        window.tUI           = tUI;
        window.i18nInitLang  = initLang;
    })();
