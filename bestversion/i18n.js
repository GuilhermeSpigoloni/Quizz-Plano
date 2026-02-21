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
                typeAndConfirm: "Digite seu e-mail e confirme.",
                genTitle: "SEU PLANO ESTÁ SENDO GERADO",
                genSub: "Estamos criando seu plano com base no seu perfil (nível, rotina, recuperação, objetivo).",
                genMetaRight: "Validando detalhes e personalizando…",
                consentTruth: "Confirmo que estou respondendo com sinceridade.",
                consentTerms: "Entendo que isso não substitui orientação profissional.",
                emailLabel: "E-mail",
                emailPlaceholder: "seunome@email.com",
                emailConfirmLabel: "Confirmo que este é meu e-mail para receber o plano.",
                emailRedirectHint: "Após confirmar, você será redirecionado automaticamente.",
                bmiPrefix: "IMC:",
                bmiCategoryPrefix: "Categoria:",

                // duplicados mantidos para compatibilidade com seu EN
                genTitle: "SEU PLANO ESTÁ SENDO GERADO",
                genSub: "Estamos criando seu plano com base no seu perfil (nível, rotina, recuperação, objetivo).",
                genMetaRight: "Validando detalhes e personalizando…",

                consentTruth: "Confirmo que estou respondendo com sinceridade.",
                consentTerms: "Entendo que isso não substitui orientação profissional.",

                emailLabel: "E-mail",
                emailPlaceholder: "seunome@email.com",
                emailConfirmLabel: "Confirmo que este é meu e-mail para receber o plano.",
                emailRedirectHint: "Após confirmar, você será redirecionado automaticamente.",

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

                // no seu EN estava misturado PT + EN; aqui fica PT de forma consistente
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
                { name: "Marina", text: "Perdi 6kg em 10 semanas seguindo o plano.", stars: 5 },
                { name: "Carlos", text: "Treinos curtos, consistência, resultados reais.", stars: 5 },
                { name: "Letícia", text: "Meu objetivo era definição e encaixou perfeitamente na minha rotina.", stars: 5 },
                { name: "Rafael", text: "Voltei a treinar sem dor ajustando as progressões.", stars: 5 },
                { name: "Bianca", text: "Dieta simples e prática. Parei de ficar perdida.", stars: 5 },
                { name: "Diego", text: "O plano pareceu sólido: construído em cima do meu perfil.", stars: 5 },
            ],

            q: {
                lang_gate: {
                    title: "Escolha seu idioma",
                    help: "Selecione para começar. Você pode mudar depois.",
                    options: {
                        en: { label: "English", sub: "Começar em inglês" },
                        es: { label: "Español", sub: "Começar em espanhol" },
                        pl: { label: "Polski", sub: "Começar em polonês" },
                        it: { label: "Italiano", sub: "Começar em italiano" },
                        fr: { label: "Français", sub: "Começar em francês" },
                        pt: { label: "Português", sub: "Começar em português" },
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
                        goal_lean: { label: "Mais definido", sub: "Visual seco / marcado" },
                        goal_athletic: { label: "Atlético", sub: "Estética + performance" },
                        goal_muscle: { label: "Mais volume", sub: "Físico mais cheio" },
                        goal_strength: { label: "Força", sub: "Movimentos mais difíceis" },
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
                        "45+": { label: "45+", sub: "Progressão segura" },
                    }
                },

                trained_before: {
                    title: "Você já treinou com consistência antes?",
                    help: "Escolha uma opção.",
                    options: {
                        no: { label: "Nunca", sub: "Começando do básico" },
                        yes_some: { label: "Sim, mas parei", sub: "Volta com segurança" },
                        yes_regular: { label: "Sim, regularmente", sub: "Ajustar volume e performance" },
                    }
                },

                body_current: {
                    title: "Como está seu corpo hoje?",
                    help: "Escolha uma opção.",
                    options: {
                        body_slim: { label: "Magro", sub: "Pouca massa muscular" },
                        body_average: { label: "Médio", sub: "Formato normal" },
                        body_over: { label: "Acima do peso", sub: "Gordura extra" },
                        body_athletic: { label: "Já em forma", sub: "Melhorar performance" },
                    }
                },

                days: {
                    title: "Quantos dias por semana você treina?",
                    help: "Escolha uma opção.",
                    options: {
                        "2": { label: "2 dias", sub: "Mínimo efetivo" },
                        "3": { label: "3 dias", sub: "Rotina equilibrada" },
                        "4": { label: "4 dias", sub: "Progresso mais rápido" },
                        "5+": { label: "5+ dias", sub: "Alta disciplina" },
                    }
                },

                session_time: {
                    title: "Quanto tempo por treino?",
                    help: "Escolha uma opção.",
                    options: {
                        "15-25": { label: "15–25 min", sub: "Curto" },
                        "30-45": { label: "30–45 min", sub: "Equilibrado" },
                        "45-70": { label: "45–70 min", sub: "Completo" },
                        "70+": { label: "70+ min", sub: "Treinos longos" },
                    }
                },

                level: {
                    title: "Seu nível atual",
                    help: "Escolha uma opção.",
                    options: {
                        beginner: { label: "Iniciante", sub: "0–6 meses" },
                        intermediate: { label: "Intermediário", sub: "6–24 meses" },
                        advanced: { label: "Avançado", sub: "2+ anos" },
                    }
                },

                daily_energy: {
                    title: "Como está sua energia no dia a dia?",
                    help: "Escolha uma opção.",
                    options: {
                        low: { label: "Baixa", sub: "Cansaço constante" },
                        ok: { label: "Ok", sub: "Oscila, mas dá pra levar" },
                        high: { label: "Alta", sub: "Geralmente disposto" },
                        roller: { label: "Instável", sub: "Altos e baixos" },
                    }
                },

                daily_focus: {
                    title: "Como está seu humor/foco?",
                    help: "Escolha uma opção.",
                    options: {
                        stressed: { label: "Estressado", sub: "Pressão/ansiedade alta" },
                        normal: { label: "Normal", sub: "Humor estável" },
                        motivated: { label: "Motivado", sub: "Focado e consistente" },
                        down: { label: "Desmotivado", sub: "Difícil manter rotina" },
                    }
                },

                weight_loss_ease: {
                    title: "Pra você, perder gordura é…",
                    help: "Escolha uma opção.",
                    options: {
                        easy: { label: "Fácil", sub: "Responde rápido" },
                        medium: { label: "Moderado", sub: "Demora, mas funciona" },
                        hard: { label: "Difícil", sub: "Resposta lenta" },
                        unknown: { label: "Não sei", sub: "Nunca acompanhei direito" },
                    }
                },

                diet_now: {
                    title: "Como está sua dieta hoje?",
                    help: "Escolha uma opção.",
                    options: {
                        good: { label: "Boa", sub: "Organizada e consistente" },
                        mixed: { label: "Média", sub: "Inconsistente na semana" },
                        messy: { label: "Bagunçada", sub: "Quase sempre no improviso" },
                        low_app: { label: "Pouco apetite", sub: "Pulando refeições" },
                    }
                },

                protein_habit: {
                    title: "Consumo de proteína",
                    help: "Escolha uma opção.",
                    options: {
                        low: { label: "Muito baixo", sub: "Raramente consumo" },
                        some: { label: "Às vezes", sub: "Consumo moderado" },
                        good: { label: "Consistente", sub: "Bom consumo diário" },
                        track: { label: "Eu acompanho macros", sub: "Alto controle" },
                    }
                },

                habits: {
                    title: "Você tem algum desses hábitos?",
                    help: "Selecione o que se aplica e continue.",
                    options: {
                        emotional: { label: "Compulsão emocional", sub: "Ansiedade / estresse" },
                        overeating: { label: "Exagero nas refeições", sub: "Passo do ponto" },
                        night_snacks: { label: "Beliscar à noite", sub: "Depois do jantar" },
                        skip_meals: { label: "Pular refeições", sub: "Longos períodos sem comer" },
                        none: { label: "Nenhum desses", sub: "Sem hábitos marcantes" },
                    }
                },

                goal_extra: {
                    title: "O que mais você quer alcançar com este plano?",
                    help: "Selecione o que se aplica.",
                    options: {
                        muscle_strength: { label: "Mais músculo e força", sub: "Forma e performance" },
                        endurance: { label: "Resistência", sub: "Mais fôlego e energia" },
                        posture_flex: { label: "Postura e flexibilidade", sub: "Mobilidade e alinhamento" },
                        libido: { label: "Aumentar libido", sub: "Bem-estar geral" },
                        none: { label: "Nenhuma das opções", sub: "Só o objetivo principal" },
                    }
                },

                best_shape_when: {
                    title: "Há quanto tempo você estava na melhor forma da sua vida?",
                    help: "Escolha uma opção.",
                    options: {
                        lt1y: { label: "Menos de 1 ano atrás", sub: "Memória muscular ajuda" },
                        "1-2y": { label: "1–2 anos atrás", sub: "Recuperação possível" },
                        "3y+": { label: "Mais de 3 anos atrás", sub: "Reconstrução gradual" },
                        never: { label: "Nunca", sub: "Construindo do zero" },
                    }
                },

                weight_change_pattern: {
                    title: "Como seu peso normalmente muda?",
                    help: "Escolha uma opção.",
                    options: {
                        gain_easy: { label: "Ganho peso facilmente", sub: "Sai da rotina e aumenta" },
                        lose_easy: { label: "Perco peso facilmente", sub: "Respondo rápido" },
                        yo_yo: { label: "Sobe e desce (efeito sanfona)", sub: "Oscila com frequência" },
                        stable: { label: "Estável", sub: "Pouca variação" },
                        not_sure: { label: "Não sei", sub: "Sem histórico claro" },
                    }
                },

                pushups: {
                    title: "Quantas flexões você consegue fazer?",
                    help: "Escolha uma opção.",
                    options: {
                        "0": { label: "0 (ainda não)", sub: "Vamos adaptar" },
                        "1-5": { label: "1–5", sub: "Nível inicial" },
                        "6-15": { label: "6–15", sub: "Intermediário" },
                        "16-30": { label: "16–30", sub: "Bom nível" },
                        "31+": { label: "31+", sub: "Nível avançado" },
                    }
                },

                squats: {
                    title: "Quantos agachamentos você consegue fazer?",
                    help: "Escolha uma opção.",
                    options: {
                        "0-10": { label: "0–10", sub: "Nível inicial" },
                        "11-25": { label: "11–25", sub: "Médio" },
                        "26-50": { label: "26–50", sub: "Bom" },
                        "51-80": { label: "51–80", sub: "Muito bom" },
                        "81+": { label: "81+", sub: "Excelente" },
                    }
                },

                flexibility: {
                    title: "Quão flexível você é?",
                    help: "Escolha uma opção.",
                    options: {
                        low: { label: "Baixa", sub: "Travado/duro" },
                        medium: { label: "Moderada", sub: "Normal" },
                        good: { label: "Boa", sub: "Mobilidade ok" },
                        high: { label: "Alta", sub: "Muito flexível" },
                    }
                },

                target_zones: {
                    title: "Quais são suas zonas-alvo?",
                    help: "Selecione o que se aplica. Se escolher “Corpo todo”, as outras serão removidas.",
                    options: {
                        belly: { label: "Barriga", sub: "Cintura/abdômen" },
                        chest: { label: "Peitoral", sub: "Parte superior" },
                        arms: { label: "Braços", sub: "Bíceps/tríceps" },
                        legs: { label: "Pernas", sub: "Parte inferior" },
                        back: { label: "Costas", sub: "Costas alta/baixa" },
                        full_body: { label: "Corpo todo", sub: "Plano completo" },
                    }
                },

                typical_day: {
                    title: "Como você descreveria seu dia típico?",
                    help: "Escolha uma opção.",
                    options: {
                        mostly_sitting: { label: "Maior tempo sentado", sub: "Trabalho/estudo sentado" },
                        balanced: { label: "Balanceado", sub: "Um pouco de movimento" },
                        mostly_walking: { label: "Maior tempo andando", sub: "Rotina ativa" },
                        varies: { label: "Varia de dia para dia", sub: "Sem padrão fixo" },
                    }
                },

                water_intake: {
                    title: "Qual é a sua ingestão diária de água?",
                    help: "Escolha uma opção.",
                    options: {
                        "<1l": { label: "Menos de 1L", sub: "Muito baixa" },
                        "1-2l": { label: "1–2L", sub: "Ok" },
                        "2-3l": { label: "2–3L", sub: "Boa" },
                        "3l+": { label: "3L+", sub: "Ótima" },
                    }
                },

                cravings: {
                    title: "Quais alimentos você mais sente vontade com frequência?",
                    help: "Escolha uma opção.",
                    options: {
                        fastfood: { label: "Fast food", sub: "Hambúrguer/pizza" },
                        sweets: { label: "Doces", sub: "Chocolate/bolo" },
                        soda: { label: "Refrigerante", sub: "Bebidas açucaradas" },
                        savory: { label: "Salgadinhos", sub: "Frituras/petiscos" },
                        none: { label: "Nenhum desses", sub: "Sem preferência forte" },
                    }
                },

                diet_pref: {
                    title: "Que tipo de dieta você prefere?",
                    help: "Escolha uma opção.",
                    options: {
                        traditional: { label: "Tradicional", sub: "Comidas do dia a dia" },
                        keto: { label: "Keto", sub: "Baixo carboidrato" },
                        paleo: { label: "Paleo", sub: "Mais natural" },
                        vegetarian: { label: "Vegetariana", sub: "Sem carne" },
                        vegan: { label: "Vegana", sub: "Sem produtos animais" },
                        keto_vegan: { label: "Keto vegana", sub: "Low-carb + vegana" },
                        lactose_free: { label: "Sem lactose", sub: "Evita lactose" },
                        gluten_free: { label: "Sem glúten", sub: "Evita glúten" },
                    }
                },

                weight_gain_events: {
                    title: "Algum desses eventos levou ao ganho de peso nos últimos anos?",
                    help: "Selecione o que se aplica. Clique em Continuar.",
                    options: {
                        work_pressure: { label: "Pressão no trabalho", sub: "Rotina intensa" },
                        financial: { label: "Problemas financeiros", sub: "Estresse/ansiedade" },
                        pandemic: { label: "Pandemia", sub: "Hábitos mudaram" },
                        breakup: { label: "Término/divórcio", sub: "Impacto emocional" },
                        stress_other: { label: "Outros eventos estressantes", sub: "Varia" },
                        slower_metabolism: { label: "Metabolismo mais lento com a idade", sub: "Parece mais difícil que antes" },
                        none: { label: "Nenhuma das opções", sub: "Sem evento claro" },
                    }
                },

                important_event: {
                    title: "Você tem algum evento importante chegando?",
                    help: "Se tiver, vamos ajustar o plano para bater a meta até essa data.",
                    options: {
                        wedding: { label: "Casamento", sub: "Meta por data" },
                        trip: { label: "Viagem", sub: "Meta por data" },
                        vacation: { label: "Férias", sub: "Meta por data" },
                        competition: { label: "Competição", sub: "Meta por data" },
                        party: { label: "Festa", sub: "Meta por data" },
                        meeting: { label: "Reunião", sub: "Meta por data" },
                        show: { label: "Show", sub: "Meta por data" },
                        birthday: { label: "Aniversário", sub: "Meta por data" },
                        special_date: { label: "Data especial", sub: "Meta por data" },
                        adventure: { label: "Aventura", sub: "Meta por data" },
                        family: { label: "Evento em família", sub: "Meta por data" },
                        none: { label: "Sem evento importante", sub: "Plano com prazo realista" },
                    }
                },

                event_date: {
                    title: "Selecione a data do seu evento",
                    help: "Escolha uma data a partir de hoje. Essa será a data limite do plano.",
                },

                obstacle: {
                    title: "O que te impediu de voltar à forma?",
                    help: "Escolha uma opção.",
                    options: {
                        time: { label: "Falta de tempo", sub: "Agenda corrida" },
                        consistency: { label: "Falta de consistência", sub: "Começa e para" },
                        motivation: { label: "Baixa motivação / emocional", sub: "Oscilações de humor" },
                        knowledge: { label: "Não saber o que fazer", sub: "Treino/dieta confusos" },
                        injury_pain: { label: "Dor/lesão", sub: "Limita execução" },
                        money: { label: "Dinheiro/acesso a recursos", sub: "Recursos limitados" },
                        environment: { label: "Ambiente/rotina", sub: "Família/trabalho" },
                        other: { label: "Outro", sub: "Varia" },
                    }
                },

                muscle_motivation: {
                    title: "O que te motiva a ganhar músculo?",
                    help: "Escolha uma opção.",
                    options: {
                        aesthetics: { label: "Estética (físico)", sub: "Visual e definição" },
                        strength: { label: "Força e performance", sub: "Cargas e movimentos" },
                        health: { label: "Saúde e longevidade", sub: "Bem-estar geral" },
                        confidence: { label: "Confiança/autoestima", sub: "Se sentir melhor" },
                        sports: { label: "Esporte/competição", sub: "Performance atlética" },
                        metabolism: { label: "Aumentar metabolismo/recomp", sub: "Um corpo mais “ativo”" },
                    }
                },

                confidence: {
                    title: "Quão confiante você está de bater sua meta até a data escolhida?",
                    help: "Escolha uma opção.",
                    options: {
                        "1": { label: "1 — Nada confiante", sub: "Preciso de muita ajuda" },
                        "2": { label: "2", sub: "Baixa confiança" },
                        "3": { label: "3", sub: "Média" },
                        "4": { label: "4", sub: "Alta" },
                        "5": { label: "5 — Muito confiante", sub: "Eu vou executar" },
                    }
                },

                injuries: {
                    title: "Dores/lesões recorrentes?",
                    help: "Selecione o que se aplica. Clique em Continuar.",
                    options: {
                        none: { label: "Nenhuma", sub: "Sem restrições" },
                        knee: { label: "Joelho", sub: "Ajustar agachamentos" },
                        back: { label: "Lombar", sub: "Ajustar postura/carga" },
                        shoulder: { label: "Ombro", sub: "Ajustar empurrões" },
                        wrist: { label: "Punho", sub: "Ajustar apoios" },
                        other: { label: "Outro", sub: "Considerar no plano" },
                    }
                },

                sleep_hours: {
                    title: "Horas de sono",
                    help: "Escolha uma opção.",
                    options: {
                        "<5": { label: "< 5h", sub: "Baixa recuperação" },
                        "5-6": { label: "5–6h", sub: "Dá pra melhorar" },
                        "6-7": { label: "6–7h", sub: "Ok" },
                        "7-8": { label: "7–8h", sub: "Bom" },
                        "8+": { label: "8h+", sub: "Ótimo" },
                    }
                },

                alcohol_use: {
                    title: "Você bebe álcool?",
                    help: "Escolha uma opção.",
                    options: {
                        no: { label: "Não", sub: "Eu não bebo" },
                        yes: { label: "Sim", sub: "Eu bebo álcool" },
                    }
                },

                alcohol_freq: {
                    title: "Com que frequência você bebe álcool?",
                    help: "Escolha uma opção.",
                    options: {
                        rare: { label: "Raramente", sub: "1–2x/mês" },
                        weekend: { label: "Fins de semana", sub: "1–2x/semana" },
                        often: { label: "Com frequência", sub: "3–5x/semana" },
                        daily: { label: "Quase todo dia", sub: "Alta frequência" },
                    }
                },

                smoke_use: {
                    title: "Você fuma ou vape?",
                    help: "Escolha uma opção.",
                    options: {
                        no: { label: "Não", sub: "Eu não fumo/vape" },
                        yes: { label: "Sim", sub: "Às vezes ou com frequência" },
                    }
                },

                smoke_freq: {
                    title: "Com que frequência você fuma/vape?",
                    help: "Escolha uma opção.",
                    options: {
                        rare: { label: "Raramente", sub: "Social/ocasional" },
                        week: { label: "Algumas vezes/semana", sub: "Leve" },
                        daily: { label: "Todo dia", sub: "Alta frequência" },
                    }
                },

                consent: { title: "Confirmação rápida", help: "Marque as duas caixas para continuar." },
                metrics: { title: "Altura e peso", help: "Informe seus dados." },
                bmi_info: { title: "Seu IMC e o que isso pode indicar", help: "Uma leitura rápida antes de continuar." },
                goal_date: { title: "Data da meta", help: "Sugerimos uma data realista (6 meses). Você pode ajustar." },
                event_date: { title: "Selecione a data do seu evento", help: "Escolha uma data a partir de hoje. Essa será a data limite do plano." },
                target: { title: "Peso-alvo (kg)", help: "Digite seu peso-alvo." },
                projection: { title: "Projeção de progresso", help: "Com base no peso atual, peso-alvo e data." },
                gen_email: { title: "SEU PLANO ESTÁ SENDO GERADO", help: "Ajustando treino + dieta com base nas suas respostas." },
                email: { title: "Digite seu e-mail para receber o plano", help: "Após confirmar, você será redirecionado." },
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
                typeAndConfirm: "Enter your email and confirm.",
                genTitle: "YOUR PLAN IS BEING GENERATED",
                genSub: "We’re building your plan based on your profile (level, routine, recovery, goal).",
                genMetaRight: "Validating details and personalizing…",
                consentTruth: "I confirm that I’m answering truthfully.",
                consentTerms: "I understand this does not replace professional guidance.",
                emailLabel: "Email",
                emailPlaceholder: "yourname@email.com",
                emailConfirmLabel: "I confirm this is my email to receive the plan.",
                emailRedirectHint: "After confirming, you will be redirected automatically.",
                bmiPrefix: "BMI:",
                bmiCategoryPrefix: "Category:",
                genTitle: "YOUR PLAN IS BEING GENERATED",
                genSub: "We’re building your plan based on your profile (level, routine, recovery, goal).",
                genMetaRight: "Validating details and personalizing…",

                consentTruth: "I confirm that I’m answering truthfully.",
                consentTerms: "I understand this does not replace professional guidance.",

                emailLabel: "Email",
                emailPlaceholder: "yourname@email.com",
                emailConfirmLabel: "I confirm this is my email to receive the plan.",
                emailRedirectHint: "After confirming, you will be redirected automatically.",

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
                { name: "Marina", text: "I lost 6kg in 10 weeks following the plan.", stars: 5 },
                { name: "Carlos", text: "Short workouts, consistency, real results.", stars: 5 },
                { name: "Letícia", text: "My goal was definition and it fit my routine perfectly.", stars: 5 },
                { name: "Rafael", text: "I got back to training pain-free by adjusting progressions.", stars: 5 },
                { name: "Bianca", text: "Simple, practical diet. I stopped getting lost.", stars: 5 },
                { name: "Diego", text: "The plan felt solid: built around my profile.", stars: 5 },
            ],

            q: {

                lang_gate: {
                    title: "Choose your language",
                    help: "Select to start. You can change later.",
                    options: {
                        en: { label: "English", sub: "Start in English" },
                        es: { label: "Español", sub: "Start in Spanish" },
                        pl: { label: "Polski", sub: "Start in Polish" },
                        it: { label: "Italiano", sub: "Start in Italian" },
                        fr: { label: "Français", sub: "Start in French" },
                        pt: { label: "Português", sub: "Start in Portuguese" },
                    }
                },
                // i18n.js  -> dentro de I18N.en (mesmo nível de ui/q)

                motivation: [
                    { title: "You don’t need motivation. You need a routine.", text: "This plan is built to fit your day and evolve with you. One step at a time, no extremes." },
                    { title: "Consistency beats intensity.", text: "Results come from repeating the basics. The plan adjusts training volume and diet so you can sustain it." },
                    { title: "Your body responds to daily signals.", text: "Training + nutrition + sleep. Align those and progress shows up (even if it’s slow)." },
                    { title: "The plan is personal. The effort is yours.", text: "Just execute the next workout and the next meal. The rest is a consequence." },
                ],

                goal: {
                    title: "What is your visual goal?",
                    help: "Pick one option.",
                    options: {
                        goal_lean: { label: "More defined", sub: "Lean / sharp look" },
                        goal_athletic: { label: "Athletic", sub: "Aesthetics + performance" },
                        goal_muscle: { label: "More size", sub: "Full physique" },
                        goal_strength: { label: "Strength", sub: "Harder movements" },
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
                        "45+": { label: "45+", sub: "Safe progression" },
                    }
                },

                trained_before: {
                    title: "Have you trained consistently before?",
                    help: "Pick one option.",
                    options: {
                        no: { label: "Never", sub: "Starting from basics" },
                        yes_some: { label: "Yes, but stopped", sub: "Return safely" },
                        yes_regular: { label: "Yes, regularly", sub: "Adjust volume & performance" },
                    }
                },

                body_current: {
                    title: "How does your body look today?",
                    help: "Pick one option.",
                    options: {
                        body_slim: { label: "Slim", sub: "Low muscle mass" },
                        body_average: { label: "Average", sub: "Normal shape" },
                        body_over: { label: "Overweight", sub: "Extra fat" },
                        body_athletic: { label: "Already fit", sub: "Improve performance" },
                    }
                },

                days: {
                    title: "How many days per week do you train?",
                    help: "Pick one option.",
                    options: {
                        "2": { label: "2 days", sub: "Minimum effective" },
                        "3": { label: "3 days", sub: "Balanced routine" },
                        "4": { label: "4 days", sub: "Faster progress" },
                        "5+": { label: "5+ days", sub: "High discipline" },
                    }
                },

                session_time: {
                    title: "How long per workout?",
                    help: "Pick one option.",
                    options: {
                        "15-25": { label: "15–25 min", sub: "Short" },
                        "30-45": { label: "30–45 min", sub: "Balanced" },
                        "45-70": { label: "45–70 min", sub: "Complete" },
                        "70+": { label: "70+ min", sub: "Long sessions" },
                    }
                },

                level: {
                    title: "Your current level",
                    help: "Pick one option.",
                    options: {
                        beginner: { label: "Beginner", sub: "0–6 months" },
                        intermediate: { label: "Intermediate", sub: "6–24 months" },
                        advanced: { label: "Advanced", sub: "2+ years" },
                    }
                },

                daily_energy: {
                    title: "How is your daily energy?",
                    help: "Pick one option.",
                    options: {
                        low: { label: "Low", sub: "Constant fatigue" },
                        ok: { label: "Okay", sub: "Fluctuates but manageable" },
                        high: { label: "High", sub: "Usually energized" },
                        roller: { label: "Unstable", sub: "Energy ups and downs" },
                    }
                },

                daily_focus: {
                    title: "How is your mood/focus?",
                    help: "Pick one option.",
                    options: {
                        stressed: { label: "Stressed", sub: "High pressure/anxiety" },
                        normal: { label: "Normal", sub: "Stable mood" },
                        motivated: { label: "Motivated", sub: "Focused & consistent" },
                        down: { label: "Unmotivated", sub: "Hard to maintain routine" },
                    }
                },

                weight_loss_ease: {
                    title: "For you, losing fat is…",
                    help: "Pick one option.",
                    options: {
                        easy: { label: "Easy", sub: "Responds quickly" },
                        medium: { label: "Moderate", sub: "Takes time but works" },
                        hard: { label: "Hard", sub: "Slow response" },
                        unknown: { label: "Not sure", sub: "Never tracked properly" },
                    }
                },

                diet_now: {
                    title: "How is your current diet?",
                    help: "Pick one option.",
                    options: {
                        good: { label: "Good", sub: "Organized & consistent" },
                        mixed: { label: "Average", sub: "Inconsistent during the week" },
                        messy: { label: "Messy", sub: "Mostly improvised" },
                        low_app: { label: "Low appetite", sub: "Skipping meals" },
                    }
                },

                protein_habit: {
                    title: "Protein intake",
                    help: "Pick one option.",
                    options: {
                        low: { label: "Very low", sub: "Rarely consume" },
                        some: { label: "Sometimes", sub: "Moderate intake" },
                        good: { label: "Consistent", sub: "Good daily intake" },
                        track: { label: "I track macros", sub: "High control" },
                    }
                },

                habits: {
                    title: "Do you have any of these habits?",
                    help: "Select what applies, then continue.",
                    options: {
                        emotional: { label: "Emotional eating", sub: "Anxiety / stress" },
                        overeating: { label: "Overeating", sub: "Going past the limit" },
                        night_snacks: { label: "Night snacking", sub: "After dinner" },
                        skip_meals: { label: "Skipping meals", sub: "Long gaps without eating" },
                        none: { label: "None of these", sub: "No standout habits" },
                    }
                },

                goal_extra: {
                    title: "What else do you want to achieve with this plan?",
                    help: "Select what applies.",
                    options: {
                        muscle_strength: { label: "More muscle & strength", sub: "Shape and performance" },
                        endurance: { label: "Endurance", sub: "More stamina & energy" },
                        posture_flex: { label: "Posture & flexibility", sub: "Mobility & alignment" },
                        libido: { label: "Increase libido", sub: "Overall well-being" },
                        none: { label: "None of the above", sub: "Just the main goal" },
                    }
                },

                best_shape_when: {
                    title: "When were you in your best shape?",
                    help: "Pick one option.",
                    options: {
                        lt1y: { label: "Less than 1 year ago", sub: "Muscle memory helps" },
                        "1-2y": { label: "1–2 years ago", sub: "Possible comeback" },
                        "3y+": { label: "More than 3 years ago", sub: "Gradual rebuild" },
                        never: { label: "Never", sub: "Building from zero" },
                    }
                },

                weight_change_pattern: {
                    title: "How does your weight usually change?",
                    help: "Pick one option.",
                    options: {
                        gain_easy: { label: "Gain weight easily", sub: "Leaves routine and increases" },
                        lose_easy: { label: "Lose weight easily", sub: "Responds quickly" },
                        yo_yo: { label: "Up and down (yo-yo effect)", sub: "Frequent fluctuations" },
                        stable: { label: "Stable", sub: "Minimal variation" },
                        not_sure: { label: "Not sure", sub: "No clear history" },
                    }
                },

                pushups: {
                    title: "How many push-ups can you do?",
                    help: "Pick one option.",
                    options: {
                        "0": { label: "0 (not yet)", sub: "We will adapt" },
                        "1-5": { label: "1–5", sub: "Starting level" },
                        "6-15": { label: "6–15", sub: "Intermediate" },
                        "16-30": { label: "16–30", sub: "Good level" },
                        "31+": { label: "31+", sub: "Advanced level" },
                    }
                },

                squats: {
                    title: "How many squats can you do?",
                    help: "Pick one option.",
                    options: {
                        "0-10": { label: "0–10", sub: "Starting level" },
                        "11-25": { label: "11–25", sub: "Average" },
                        "26-50": { label: "26–50", sub: "Good" },
                        "51-80": { label: "51–80", sub: "Very good" },
                        "81+": { label: "81+", sub: "Excellent" },
                    }
                },

                flexibility: {
                    title: "How flexible are you?",
                    help: "Pick one option.",
                    options: {
                        low: { label: "Low", sub: "Tight/stiff" },
                        medium: { label: "Moderate", sub: "Normal" },
                        good: { label: "Good", sub: "Decent mobility" },
                        high: { label: "High", sub: "Very flexible" },
                    }
                },

                target_zones: {
                    title: "Which areas do you want to focus on?",
                    help: "Select what applies. If you choose “Full body”, others will be removed.",
                    options: {
                        belly: { label: "Belly", sub: "Waist/abs" },
                        chest: { label: "Chest", sub: "Upper body" },
                        arms: { label: "Arms", sub: "Biceps/triceps" },
                        legs: { label: "Legs", sub: "Lower body" },
                        back: { label: "Back", sub: "Upper/lower back" },
                        full_body: { label: "Full body", sub: "Complete plan" },
                    }
                },

                typical_day: {
                    title: "How would you describe your typical day?",
                    help: "Pick one option.",
                    options: {
                        mostly_sitting: { label: "Mostly sitting", sub: "Work/study seated" },
                        balanced: { label: "Balanced", sub: "Some movement" },
                        mostly_walking: { label: "Mostly walking", sub: "Active routine" },
                        varies: { label: "Varies day to day", sub: "No fixed pattern" },
                    }
                },

                water_intake: {
                    title: "Daily water intake?",
                    help: "Pick one option.",
                    options: {
                        "<1l": { label: "Less than 1L", sub: "Very low" },
                        "1-2l": { label: "1–2L", sub: "Okay" },
                        "2-3l": { label: "2–3L", sub: "Good" },
                        "3l+": { label: "3L+", sub: "Great" },
                    }
                },
                cravings: {
                    title: "Which foods do you crave most often?",
                    help: "Pick one option.",
                    options: {
                        fastfood: { label: "Fast food", sub: "Burgers/pizza" },
                        sweets: { label: "Sweets", sub: "Chocolate/cakes" },
                        soda: { label: "Soda", sub: "Sugary drinks" },
                        savory: { label: "Savory snacks", sub: "Fried foods/chips" },
                        none: { label: "None of these", sub: "No strong preference" },
                    }
                },

                diet_pref: {
                    title: "What kind of diet do you prefer?",
                    help: "Pick one option.",
                    options: {
                        traditional: { label: "Traditional", sub: "Everyday foods" },
                        keto: { label: "Keto", sub: "Low-carb" },
                        paleo: { label: "Paleo", sub: "More natural" },
                        vegetarian: { label: "Vegetarian", sub: "No meat" },
                        vegan: { label: "Vegan", sub: "No animal products" },
                        keto_vegan: { label: "Vegan keto", sub: "Low-carb + vegan" },
                        lactose_free: { label: "Lactose-free", sub: "Avoids lactose" },
                        gluten_free: { label: "Gluten-free", sub: "Avoids gluten" },
                    }
                },

                weight_gain_events: {
                    title: "Did any of these events lead to weight gain in recent years?",
                    help: "Select what applies. Click Continue.",
                    options: {
                        work_pressure: { label: "Work pressure", sub: "Intense routine" },
                        financial: { label: "Financial issues", sub: "Stress/anxiety" },
                        pandemic: { label: "Pandemic", sub: "Habits changed" },
                        breakup: { label: "Breakup/divorce", sub: "Emotional impact" },
                        stress_other: { label: "Other stressful events", sub: "Varies" },
                        slower_metabolism: { label: "Slower metabolism with age", sub: "Feels harder than before" },
                        none: { label: "None of the above", sub: "No clear event" },
                    }
                },

                important_event: {
                    title: "Do you have an important event coming up?",
                    help: "If you do, we’ll tailor the plan to hit the goal by that date.",
                    options: {
                        wedding: { label: "Wedding", sub: "Date-based goal" },
                        trip: { label: "Trip", sub: "Date-based goal" },
                        vacation: { label: "Vacation", sub: "Date-based goal" },
                        competition: { label: "Competition", sub: "Date-based goal" },
                        party: { label: "Party", sub: "Date-based goal" },
                        meeting: { label: "Meeting", sub: "Date-based goal" },
                        show: { label: "Show", sub: "Date-based goal" },
                        birthday: { label: "Birthday", sub: "Date-based goal" },
                        special_date: { label: "Special date", sub: "Date-based goal" },
                        adventure: { label: "Adventure", sub: "Date-based goal" },
                        family: { label: "Family occasion", sub: "Date-based goal" },
                        none: { label: "No important event", sub: "A realistic timeline plan" },
                    }
                },

                event_date: {
                    title: "Select your event date",
                    help: "Choose a date from today onward. This becomes your plan deadline.",
                },

                obstacle: {
                    title: "What kept you from getting back in shape?",
                    help: "Pick one option.",
                    options: {
                        time: { label: "Lack of time", sub: "Busy schedule" },
                        consistency: { label: "Lack of consistency", sub: "Start and stop" },
                        motivation: { label: "Low motivation / emotional", sub: "Mood swings" }, // <- this is the one you mentioned
                        knowledge: { label: "Not knowing what to do", sub: "Confusing training/diet" },
                        injury_pain: { label: "Pain/injury", sub: "Limits execution" },
                        money: { label: "Money/access to resources", sub: "Limited resources" },
                        environment: { label: "Environment/routine issues", sub: "Family/work" },
                        other: { label: "Other", sub: "Varies" },
                    }
                },

                muscle_motivation: {
                    title: "What motivates you to gain muscle?",
                    help: "Pick one option.",
                    options: {
                        aesthetics: { label: "Aesthetics (physique)", sub: "Look and definition" },
                        strength: { label: "Strength & performance", sub: "Loads and movements" },
                        health: { label: "Health & longevity", sub: "Overall well-being" },
                        confidence: { label: "Confidence/self-esteem", sub: "Feel better" },
                        sports: { label: "Sport/competition", sub: "Athletic performance" },
                        metabolism: { label: "Boost metabolism/recomp", sub: "A more “active” body" },
                    }
                },

                confidence: {
                    title: "How confident are you that you’ll hit your goal by the chosen date?",
                    help: "Pick one option.",
                    options: {
                        "1": { label: "1 — Not confident", sub: "I need a lot of help" },
                        "2": { label: "2", sub: "Low confidence" },
                        "3": { label: "3", sub: "Medium" },
                        "4": { label: "4", sub: "High" },
                        "5": { label: "5 — Very confident", sub: "I will execute" },
                    }
                },

                injuries: {
                    title: "Recurring pain/injuries?",
                    help: "Select what applies. Click Continue.",
                    options: {
                        none: { label: "None", sub: "No restrictions" },
                        knee: { label: "Knee", sub: "Adjust squats" },
                        back: { label: "Lower back", sub: "Adjust posture/load" },
                        shoulder: { label: "Shoulder", sub: "Adjust pressing" },
                        wrist: { label: "Wrist", sub: "Adjust supports" },
                        other: { label: "Other", sub: "Consider in the plan" },
                    }
                },

                sleep_hours: {
                    title: "Sleep hours",
                    help: "Pick one option.",
                    options: {
                        "<5": { label: "< 5h", sub: "Low recovery" },
                        "5-6": { label: "5–6h", sub: "Can improve" },
                        "6-7": { label: "6–7h", sub: "OK" },
                        "7-8": { label: "7–8h", sub: "Good" },
                        "8+": { label: "8h+", sub: "Great" },
                    }
                },

                alcohol_use: {
                    title: "Do you drink alcohol?",
                    help: "Pick one option.",
                    options: {
                        no: { label: "No", sub: "I don't drink" },
                        yes: { label: "Yes", sub: "I drink alcohol" },
                    }
                },

                alcohol_freq: {
                    title: "How often do you drink alcohol?",
                    help: "Pick one option.",
                    options: {
                        rare: { label: "Rarely", sub: "1–2x/month" },
                        weekend: { label: "Weekends", sub: "1–2x/week" },
                        often: { label: "Often", sub: "3–5x/week" },
                        daily: { label: "Almost daily", sub: "High frequency" },
                    }
                },

                smoke_use: {
                    title: "Do you smoke or vape?",
                    help: "Pick one option.",
                    options: {
                        no: { label: "No", sub: "I don't smoke/vape" },
                        yes: { label: "Yes", sub: "Sometimes or often" },
                    }
                },

                smoke_freq: {
                    title: "How often do you smoke/vape?",
                    help: "Pick one option.",
                    options: {
                        rare: { label: "Rarely", sub: "Social/occasional" },
                        week: { label: "A few times/week", sub: "Light" },
                        daily: { label: "Every day", sub: "High frequency" },
                    }
                },

                consent: { title: "Quick confirmation", help: "Check both boxes to continue." },
                metrics: { title: "Height and weight", help: "Enter your details." },
                bmi_info: { title: "Your BMI and what it may indicate", help: "A quick read before continuing." },
                goal_date: { title: "Goal date", help: "We suggested a realistic date (6 months). You can adjust." },
                event_date: { title: "Select your event date", help: "Choose a date from today onwards. This becomes your plan deadline." },
                target: { title: "Target weight (kg)", help: "Enter your target weight." },
                projection: { title: "Progress projection", help: "Based on current weight, target weight, and date." },
                gen_email: { title: "YOUR PLAN IS BEING GENERATED", help: "Adjusting training + diet based on your answers." },
                email: { title: "Enter your email to receive the plan", help: "After confirming, you will be redirected." },

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
                typeAndConfirm: "Ingresa tu correo y confirma.",

                genTitle: "TU PLAN SE ESTÁ GENERANDO",
                genSub: "Estamos creando tu plan según tu perfil (nivel, rutina, recuperación y objetivo).",
                genMetaRight: "Validando datos y personalizando…",

                consentTruth: "Confirmo que estoy respondiendo con honestidad.",
                consentTerms: "Entiendo que esto no reemplaza orientación profesional.",

                emailLabel: "Correo electrónico",
                emailPlaceholder: "tunombre@email.com",
                emailConfirmLabel: "Confirmo que este es mi correo para recibir el plan.",
                emailRedirectHint: "Después de confirmar, serás redirigido automáticamente.",

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
                { name: "Marina", text: "Perdí 6 kg en 10 semanas siguiendo el plan.", stars: 5 },
                { name: "Carlos", text: "Entrenos cortos, constancia, resultados reales.", stars: 5 },
                { name: "Letícia", text: "Mi objetivo era definición y encajó perfecto en mi rutina.", stars: 5 },
                { name: "Rafael", text: "Volví a entrenar sin dolor ajustando las progresiones.", stars: 5 },
                { name: "Bianca", text: "Dieta simple y práctica. Dejé de perderme.", stars: 5 },
                { name: "Diego", text: "El plan se sintió sólido: hecho según mi perfil.", stars: 5 },
            ],

            q: {
                lang_gate: {
                    title: "Elige tu idioma",
                    help: "Selecciona para comenzar. Puedes cambiar después.",
                    options: {
                        en: { label: "English", sub: "Iniciar en inglés" },
                        es: { label: "Español", sub: "Iniciar en español" },
                        pl: { label: "Polski", sub: "Iniciar en polaco" },
                        it: { label: "Italiano", sub: "Iniciar en italiano" },
                        fr: { label: "Français", sub: "Iniciar en francés" },
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
                        goal_lean: { label: "Más definido/a", sub: "Aspecto más “seco”" },
                        goal_athletic: { label: "Atlético/a", sub: "Estética + rendimiento" },
                        goal_muscle: { label: "Más volumen", sub: "Físico más lleno" },
                        goal_strength: { label: "Fuerza", sub: "Movimientos más duros" },
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
                        "45+": { label: "45+", sub: "Progresión segura" },
                    }
                },

                trained_before: {
                    title: "¿Has entrenado de forma constante antes?",
                    help: "Elige una opción.",
                    options: {
                        no: { label: "Nunca", sub: "Empezar desde lo básico" },
                        yes_some: { label: "Sí, pero dejé", sub: "Volver con seguridad" },
                        yes_regular: { label: "Sí, regularmente", sub: "Ajustar volumen y rendimiento" },
                    }
                },

                body_current: {
                    title: "¿Cómo se ve tu cuerpo hoy?",
                    help: "Elige una opción.",
                    options: {
                        body_slim: { label: "Delgado/a", sub: "Poca masa muscular" },
                        body_average: { label: "Promedio", sub: "Forma normal" },
                        body_over: { label: "Con sobrepeso", sub: "Grasa extra" },
                        body_athletic: { label: "Ya en forma", sub: "Mejorar rendimiento" },
                    }
                },

                days: {
                    title: "¿Cuántos días por semana entrenas?",
                    help: "Elige una opción.",
                    options: {
                        "2": { label: "2 días", sub: "Mínimo efectivo" },
                        "3": { label: "3 días", sub: "Rutina equilibrada" },
                        "4": { label: "4 días", sub: "Progreso más rápido" },
                        "5+": { label: "5+ días", sub: "Alta disciplina" },
                    }
                },

                session_time: {
                    title: "¿Cuánto dura cada entrenamiento?",
                    help: "Elige una opción.",
                    options: {
                        "15-25": { label: "15–25 min", sub: "Corto" },
                        "30-45": { label: "30–45 min", sub: "Equilibrado" },
                        "45-70": { label: "45–70 min", sub: "Completo" },
                        "70+": { label: "70+ min", sub: "Sesiones largas" },
                    }
                },

                level: {
                    title: "Tu nivel actual",
                    help: "Elige una opción.",
                    options: {
                        beginner: { label: "Principiante", sub: "0–6 meses" },
                        intermediate: { label: "Intermedio", sub: "6–24 meses" },
                        advanced: { label: "Avanzado", sub: "2+ años" },
                    }
                },

                daily_energy: {
                    title: "¿Cómo es tu energía diaria?",
                    help: "Elige una opción.",
                    options: {
                        low: { label: "Baja", sub: "Fatiga constante" },
                        ok: { label: "Normal", sub: "Varía, pero manejable" },
                        high: { label: "Alta", sub: "Casi siempre con energía" },
                        roller: { label: "Inestable", sub: "Sube y baja" },
                    }
                },

                daily_focus: {
                    title: "¿Cómo están tu ánimo/enfoque?",
                    help: "Elige una opción.",
                    options: {
                        stressed: { label: "Estresado/a", sub: "Presión/ansiedad" },
                        normal: { label: "Normal", sub: "Estado estable" },
                        motivated: { label: "Motivado/a", sub: "Enfocado/a y constante" },
                        down: { label: "Desmotivado/a", sub: "Cuesta mantener rutina" },
                    }
                },

                weight_loss_ease: {
                    title: "Para ti, perder grasa es…",
                    help: "Elige una opción.",
                    options: {
                        easy: { label: "Fácil", sub: "Responde rápido" },
                        medium: { label: "Moderado", sub: "Tarda, pero funciona" },
                        hard: { label: "Difícil", sub: "Respuesta lenta" },
                        unknown: { label: "No sé", sub: "Nunca medí bien" },
                    }
                },

                diet_now: {
                    title: "¿Cómo es tu dieta actual?",
                    help: "Elige una opción.",
                    options: {
                        good: { label: "Buena", sub: "Organizada y constante" },
                        mixed: { label: "Promedio", sub: "Inconstante en la semana" },
                        messy: { label: "Desordenada", sub: "Casi siempre improvisada" },
                        low_app: { label: "Poco apetito", sub: "Saltas comidas" },
                    }
                },

                protein_habit: {
                    title: "Ingesta de proteína",
                    help: "Elige una opción.",
                    options: {
                        low: { label: "Muy baja", sub: "Casi no consumo" },
                        some: { label: "A veces", sub: "Moderada" },
                        good: { label: "Constante", sub: "Buena ingesta diaria" },
                        track: { label: "Cuento macros", sub: "Control alto" },
                    }
                },

                habits: {
                    title: "¿Tienes alguno de estos hábitos?",
                    help: "Selecciona lo que aplique y luego continúa.",
                    options: {
                        emotional: { label: "Comer por emociones", sub: "Ansiedad/estrés" },
                        overeating: { label: "Comer en exceso", sub: "Pasarse del límite" },
                        night_snacks: { label: "Picoteo nocturno", sub: "Después de cenar" },
                        skip_meals: { label: "Saltarse comidas", sub: "Largos períodos sin comer" },
                        none: { label: "Ninguno de estos", sub: "Sin hábitos marcados" },
                    }
                },

                goal_extra: {
                    title: "¿Qué más quieres lograr con este plan?",
                    help: "Selecciona lo que aplique.",
                    options: {
                        muscle_strength: { label: "Más músculo y fuerza", sub: "Forma y rendimiento" },
                        endurance: { label: "Resistencia", sub: "Más energía y aguante" },
                        posture_flex: { label: "Postura y flexibilidad", sub: "Movilidad y alineación" },
                        libido: { label: "Aumentar la libido", sub: "Bienestar general" },
                        none: { label: "Ninguna de las anteriores", sub: "Solo el objetivo principal" },
                    }
                },

                best_shape_when: {
                    title: "¿Cuándo estuviste en tu mejor forma?",
                    help: "Elige una opción.",
                    options: {
                        lt1y: { label: "Hace menos de 1 año", sub: "La memoria muscular ayuda" },
                        "1-2y": { label: "Hace 1–2 años", sub: "Es posible volver" },
                        "3y+": { label: "Hace más de 3 años", sub: "Reconstrucción gradual" },
                        never: { label: "Nunca", sub: "Construyendo desde cero" },
                    }
                },

                weight_change_pattern: {
                    title: "¿Cómo suele cambiar tu peso?",
                    help: "Elige una opción.",
                    options: {
                        gain_easy: { label: "Gano peso fácilmente", sub: "Me salgo de la rutina y sube" },
                        lose_easy: { label: "Pierdo peso fácilmente", sub: "Respondo rápido" },
                        yo_yo: { label: "Sube y baja (efecto yoyó)", sub: "Fluctuaciones frecuentes" },
                        stable: { label: "Estable", sub: "Poca variación" },
                        not_sure: { label: "No estoy seguro/a", sub: "Sin historial claro" },
                    }
                },

                pushups: {
                    title: "¿Cuántas flexiones puedes hacer?",
                    help: "Elige una opción.",
                    options: {
                        "0": { label: "0 (aún no)", sub: "Lo adaptaremos" },
                        "1-5": { label: "1–5", sub: "Nivel inicial" },
                        "6-15": { label: "6–15", sub: "Intermedio" },
                        "16-30": { label: "16–30", sub: "Buen nivel" },
                        "31+": { label: "31+", sub: "Nivel avanzado" },
                    }
                },

                squats: {
                    title: "¿Cuántas sentadillas puedes hacer?",
                    help: "Elige una opción.",
                    options: {
                        "0-10": { label: "0–10", sub: "Nivel inicial" },
                        "11-25": { label: "11–25", sub: "Promedio" },
                        "26-50": { label: "26–50", sub: "Bueno" },
                        "51-80": { label: "51–80", sub: "Muy bueno" },
                        "81+": { label: "81+", sub: "Excelente" },
                    }
                },

                flexibility: {
                    title: "¿Qué tan flexible eres?",
                    help: "Elige una opción.",
                    options: {
                        low: { label: "Baja", sub: "Tenso/a/rigidez" },
                        medium: { label: "Moderada", sub: "Normal" },
                        good: { label: "Buena", sub: "Movilidad decente" },
                        high: { label: "Alta", sub: "Muy flexible" },
                    }
                },

                target_zones: {
                    title: "¿En qué zonas quieres enfocarte?",
                    help: "Selecciona lo que aplique. Si eliges “Cuerpo completo”, se quitarán las demás.",
                    options: {
                        belly: { label: "Abdomen", sub: "Cintura/abdominales" },
                        chest: { label: "Pecho", sub: "Parte superior" },
                        arms: { label: "Brazos", sub: "Bíceps/tríceps" },
                        legs: { label: "Piernas", sub: "Parte inferior" },
                        back: { label: "Espalda", sub: "Espalda alta/baja" },
                        full_body: { label: "Cuerpo completo", sub: "Plan completo" },
                    }
                },

                typical_day: {
                    title: "¿Cómo describirías tu día típico?",
                    help: "Elige una opción.",
                    options: {
                        mostly_sitting: { label: "Mayormente sentado/a", sub: "Trabajo/estudio sentado" },
                        balanced: { label: "Equilibrado", sub: "Algo de movimiento" },
                        mostly_walking: { label: "Mayormente caminando", sub: "Rutina activa" },
                        varies: { label: "Varía día a día", sub: "Sin patrón fijo" },
                    }
                },

                water_intake: {
                    title: "¿Ingesta diaria de agua?",
                    help: "Elige una opción.",
                    options: {
                        "<1l": { label: "Menos de 1L", sub: "Muy baja" },
                        "1-2l": { label: "1–2L", sub: "Aceptable" },
                        "2-3l": { label: "2–3L", sub: "Buena" },
                        "3l+": { label: "3L+", sub: "Excelente" },
                    }
                },

                cravings: {
                    title: "¿Qué alimentos anhelas con más frecuencia?",
                    help: "Elige una opción.",
                    options: {
                        fastfood: { label: "Comida rápida", sub: "Hamburguesas/pizza" },
                        sweets: { label: "Dulces", sub: "Chocolate/pasteles" },
                        soda: { label: "Refresco", sub: "Bebidas azucaradas" },
                        savory: { label: "Snacks salados", sub: "Fritos/papas" },
                        none: { label: "Ninguno de estos", sub: "Sin preferencias fuertes" },
                    }
                },

                diet_pref: {
                    title: "¿Qué tipo de dieta prefieres?",
                    help: "Elige una opción.",
                    options: {
                        traditional: { label: "Tradicional", sub: "Comidas del día a día" },
                        keto: { label: "Keto", sub: "Baja en carbohidratos" },
                        paleo: { label: "Paleo", sub: "Más natural" },
                        vegetarian: { label: "Vegetariana", sub: "Sin carne" },
                        vegan: { label: "Vegana", sub: "Sin productos animales" },
                        keto_vegan: { label: "Keto vegana", sub: "Baja en carbos + vegana" },
                        lactose_free: { label: "Sin lactosa", sub: "Evita lactosa" },
                        gluten_free: { label: "Sin gluten", sub: "Evita gluten" },
                    }
                },

                weight_gain_events: {
                    title: "¿Alguno de estos eventos te hizo ganar peso en los últimos años?",
                    help: "Selecciona lo que aplique. Haz clic en Continuar.",
                    options: {
                        work_pressure: { label: "Presión laboral", sub: "Rutina intensa" },
                        financial: { label: "Problemas financieros", sub: "Estrés/ansiedad" },
                        pandemic: { label: "Pandemia", sub: "Cambios de hábitos" },
                        breakup: { label: "Ruptura/divorcio", sub: "Impacto emocional" },
                        stress_other: { label: "Otros eventos estresantes", sub: "Varía" },
                        slower_metabolism: { label: "Metabolismo más lento con la edad", sub: "Se siente más difícil" },
                        none: { label: "Ninguno de los anteriores", sub: "Sin evento claro" },
                    }
                },

                important_event: {
                    title: "¿Tienes un evento importante próximamente?",
                    help: "Si lo tienes, ajustaremos el plan para llegar a la meta para esa fecha.",
                    options: {
                        wedding: { label: "Boda", sub: "Meta por fecha" },
                        trip: { label: "Viaje", sub: "Meta por fecha" },
                        vacation: { label: "Vacaciones", sub: "Meta por fecha" },
                        competition: { label: "Competencia", sub: "Meta por fecha" },
                        party: { label: "Fiesta", sub: "Meta por fecha" },
                        meeting: { label: "Reunión", sub: "Meta por fecha" },
                        show: { label: "Show", sub: "Meta por fecha" },
                        birthday: { label: "Cumpleaños", sub: "Meta por fecha" },
                        special_date: { label: "Fecha especial", sub: "Meta por fecha" },
                        adventure: { label: "Aventura", sub: "Meta por fecha" },
                        family: { label: "Evento familiar", sub: "Meta por fecha" },
                        none: { label: "Sin evento importante", sub: "Plan con un plazo realista" },
                    }
                },

                event_date: {
                    title: "Selecciona la fecha de tu evento",
                    help: "Elige una fecha desde hoy en adelante. Esta será la fecha límite del plan.",
                },

                obstacle: {
                    title: "¿Qué te impidió volver a ponerte en forma?",
                    help: "Elige una opción.",
                    options: {
                        time: { label: "Falta de tiempo", sub: "Agenda llena" },
                        consistency: { label: "Falta de constancia", sub: "Empiezo y paro" },
                        motivation: { label: "Baja motivación / emocional", sub: "Altibajos de ánimo" },
                        knowledge: { label: "No saber qué hacer", sub: "Confusión con entrenamiento/dieta" },
                        injury_pain: { label: "Dolor/lesión", sub: "Limita la ejecución" },
                        money: { label: "Dinero/acceso a recursos", sub: "Recursos limitados" },
                        environment: { label: "Entorno/rutina", sub: "Familia/trabajo" },
                        other: { label: "Otro", sub: "Varía" },
                    }
                },

                muscle_motivation: {
                    title: "¿Qué te motiva a ganar músculo?",
                    help: "Elige una opción.",
                    options: {
                        aesthetics: { label: "Estética (físico)", sub: "Apariencia y definición" },
                        strength: { label: "Fuerza y rendimiento", sub: "Cargas y movimientos" },
                        health: { label: "Salud y longevidad", sub: "Bienestar general" },
                        confidence: { label: "Confianza/autoestima", sub: "Sentirme mejor" },
                        sports: { label: "Deporte/competencia", sub: "Rendimiento atlético" },
                        metabolism: { label: "Acelerar metabolismo/recomp", sub: "Cuerpo más “activo”" },
                    }
                },

                confidence: {
                    title: "¿Qué tan seguro/a estás de alcanzar tu meta en la fecha elegida?",
                    help: "Elige una opción.",
                    options: {
                        "1": { label: "1 — Nada seguro/a", sub: "Necesito mucha ayuda" },
                        "2": { label: "2", sub: "Poca confianza" },
                        "3": { label: "3", sub: "Media" },
                        "4": { label: "4", sub: "Alta" },
                        "5": { label: "5 — Muy seguro/a", sub: "Lo ejecutaré" },
                    }
                },

                injuries: {
                    title: "¿Dolores/lesiones recurrentes?",
                    help: "Selecciona lo que aplique. Haz clic en Continuar.",
                    options: {
                        none: { label: "Ninguna", sub: "Sin restricciones" },
                        knee: { label: "Rodilla", sub: "Ajustar sentadillas" },
                        back: { label: "Zona lumbar", sub: "Ajustar postura/carga" },
                        shoulder: { label: "Hombro", sub: "Ajustar empujes" },
                        wrist: { label: "Muñeca", sub: "Ajustar apoyos" },
                        other: { label: "Otro", sub: "Considerar en el plan" },
                    }
                },

                sleep_hours: {
                    title: "Horas de sueño",
                    help: "Elige una opción.",
                    options: {
                        "<5": { label: "< 5h", sub: "Baja recuperación" },
                        "5-6": { label: "5–6h", sub: "Puede mejorar" },
                        "6-7": { label: "6–7h", sub: "Bien" },
                        "7-8": { label: "7–8h", sub: "Bueno" },
                        "8+": { label: "8h+", sub: "Excelente" },
                    }
                },

                alcohol_use: {
                    title: "¿Bebes alcohol?",
                    help: "Elige una opción.",
                    options: {
                        no: { label: "No", sub: "No bebo" },
                        yes: { label: "Sí", sub: "Bebo alcohol" },
                    }
                },

                alcohol_freq: {
                    title: "¿Con qué frecuencia bebes alcohol?",
                    help: "Elige una opción.",
                    options: {
                        rare: { label: "Rara vez", sub: "1–2x/mes" },
                        weekend: { label: "Fines de semana", sub: "1–2x/semana" },
                        often: { label: "A menudo", sub: "3–5x/semana" },
                        daily: { label: "Casi a diario", sub: "Frecuencia alta" },
                    }
                },

                smoke_use: {
                    title: "¿Fumas o vapeas?",
                    help: "Elige una opción.",
                    options: {
                        no: { label: "No", sub: "No fumo/vapeo" },
                        yes: { label: "Sí", sub: "A veces o con frecuencia" },
                    }
                },

                smoke_freq: {
                    title: "¿Con qué frecuencia fumas/vapeas?",
                    help: "Elige una opción.",
                    options: {
                        rare: { label: "Rara vez", sub: "Social/ocasional" },
                        week: { label: "Unas veces por semana", sub: "Ligero" },
                        daily: { label: "Todos los días", sub: "Frecuencia alta" },
                    }
                },

                // páginas "técnicas" do fluxo (mantendo estrutura)
                consent: { title: "Confirmación rápida", help: "Marca ambas casillas para continuar." },
                metrics: { title: "Altura y peso", help: "Ingresa tus datos." },
                bmi_info: { title: "Tu IMC y lo que puede indicar", help: "Una lectura rápida antes de continuar." },
                goal_date: { title: "Fecha objetivo", help: "Sugerimos una fecha realista (6 meses). Puedes ajustarla." },
                event_date: { title: "Selecciona la fecha de tu evento", help: "Elige una fecha desde hoy en adelante. Esta será la fecha límite del plan." },
                target: { title: "Peso objetivo (kg)", help: "Ingresa tu peso objetivo." },
                projection: { title: "Proyección de progreso", help: "Basado en peso actual, peso objetivo y fecha." },
                gen_email: { title: "TU PLAN SE ESTÁ GENERANDO", help: "Ajustando entrenamiento + dieta según tus respuestas." },
                email: { title: "Ingresa tu correo para recibir el plan", help: "Después de confirmar, serás redirigido." },
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
                typeAndConfirm: "Inserisci la tua email e conferma.",
                genTitle: "IL TUO PIANO È IN FASE DI GENERAZIONE",
                genSub: "Stiamo creando il tuo piano in base al profilo (livello, routine, recupero, obiettivo).",
                genMetaRight: "Verifica dettagli e personalizzazione…",
                consentTruth: "Confermo di rispondere in modo veritiero.",
                consentTerms: "Capisco che questo non sostituisce una guida professionale.",
                emailLabel: "Email",
                emailPlaceholder: "tuonome@email.com",
                emailConfirmLabel: "Confermo che questa è la mia email per ricevere il piano.",
                emailRedirectHint: "Dopo la conferma, verrai reindirizzato automaticamente.",
                bmiPrefix: "IMC:",
                bmiCategoryPrefix: "Categoria:",

                // duplicati mantenuti per compatibilità con il tuo oggetto EN
                genTitle: "IL TUO PIANO È IN FASE DI GENERAZIONE",
                genSub: "Stiamo creando il tuo piano in base al profilo (livello, routine, recupero, obiettivo).",
                genMetaRight: "Verifica dettagli e personalizzazione…",

                consentTruth: "Confermo di rispondere in modo veritiero.",
                consentTerms: "Capisco che questo non sostituisce una guida professionale.",

                emailLabel: "Email",
                emailPlaceholder: "tuonome@email.com",
                emailConfirmLabel: "Confermo che questa è la mia email per ricevere il piano.",
                emailRedirectHint: "Dopo la conferma, verrai reindirizzato automaticamente.",

                heightLabel: "Altezza (cm)",
                weightLabel: "Peso attuale (kg)",
                targetWeightLabel: "Peso obiettivo (kg)",
                dateLabel: "Data",
                eventDateLabel: "Data dell’evento",

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

                // no teu EN está misturado PT + EN. Mantive as 2 séries traduzidas.
                bmiNote_under: "Sottopeso. Regola con costanza.",
                bmiNote_normal: "Fascia normale. Ricomposizione + forza.",
                bmiNote_over: "Sovrappeso. La costanza cambia tutto.",
                bmiNote_obese: "Obesità. Strategia e passo dopo passo.",

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
                proj_note_event: "Obiettivo legato a una data (evento). Se il ritmo diventa troppo aggressivo, regola l’obiettivo o fai il piano a fasi.",

                proj_currentWeight: "Peso attuale:",
                proj_targetWeight: "Peso obiettivo:",
                proj_deadline: "Scadenza:",
                proj_rate: "Ritmo medio:",
                daysLabel: "giorni",
                kgPerWeekLabel: "kg/settimana",
            },

            testimonials: [
                { name: "Marina", text: "Ho perso 6 kg in 10 settimane seguendo il piano.", stars: 5 },
                { name: "Carlos", text: "Allenamenti brevi, costanza, risultati reali.", stars: 5 },
                { name: "Letícia", text: "Il mio obiettivo era la definizione e si adattava perfettamente alla mia routine.", stars: 5 },
                { name: "Rafael", text: "Sono tornato ad allenarmi senza dolore regolando le progressioni.", stars: 5 },
                { name: "Bianca", text: "Dieta semplice e pratica. Ho smesso di perdermi.", stars: 5 },
                { name: "Diego", text: "Il piano era solido: costruito sul mio profilo.", stars: 5 },
            ],

            q: {
                lang_gate: {
                    title: "Scegli la tua lingua",
                    help: "Seleziona per iniziare. Puoi cambiarla più tardi.",
                    options: {
                        en: { label: "English", sub: "Inizia in inglese" },
                        es: { label: "Español", sub: "Inizia in spagnolo" },
                        pl: { label: "Polski", sub: "Inizia in polacco" },
                        it: { label: "Italiano", sub: "Inizia in italiano" },
                        fr: { label: "Français", sub: "Inizia in francese" },
                        pt: { label: "Português", sub: "Inizia in portoghese" },
                    }
                },

                motivation: [
                    { title: "Non ti serve motivazione. Ti serve una routine.", text: "Questo piano è costruito per adattarsi alla tua giornata e crescere con te. Un passo alla volta, senza estremi." },
                    { title: "La costanza batte l’intensità.", text: "I risultati arrivano ripetendo le basi. Il piano regola volume di allenamento e dieta per renderlo sostenibile." },
                    { title: "Il tuo corpo risponde ai segnali quotidiani.", text: "Allenamento + alimentazione + sonno. Allinea tutto e i progressi arrivano (anche se lentamente)." },
                    { title: "Il piano è personale. Lo sforzo è tuo.", text: "Esegui solo il prossimo allenamento e il prossimo pasto. Il resto è una conseguenza." },
                ],

                goal: {
                    title: "Qual è il tuo obiettivo estetico?",
                    help: "Scegli un'opzione.",
                    options: {
                        goal_lean: { label: "Più definito", sub: "Look asciutto / marcato" },
                        goal_athletic: { label: "Atletico", sub: "Estetica + performance" },
                        goal_muscle: { label: "Più massa", sub: "Fisico pieno" },
                        goal_strength: { label: "Forza", sub: "Movimenti più difficili" },
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
                        "45+": { label: "45+", sub: "Progressione sicura" },
                    }
                },

                trained_before: {
                    title: "Ti sei allenato con costanza in passato?",
                    help: "Scegli un'opzione.",
                    options: {
                        no: { label: "Mai", sub: "Partenza dalle basi" },
                        yes_some: { label: "Sì, ma ho smesso", sub: "Rientro in sicurezza" },
                        yes_regular: { label: "Sì, regolarmente", sub: "Regola volume & performance" },
                    }
                },

                body_current: {
                    title: "Com’è il tuo corpo oggi?",
                    help: "Scegli un'opzione.",
                    options: {
                        body_slim: { label: "Magro", sub: "Poca massa muscolare" },
                        body_average: { label: "Nella media", sub: "Forma normale" },
                        body_over: { label: "Sovrappeso", sub: "Grasso in eccesso" },
                        body_athletic: { label: "Già in forma", sub: "Migliorare la performance" },
                    }
                },

                days: {
                    title: "Quanti giorni a settimana ti alleni?",
                    help: "Scegli un'opzione.",
                    options: {
                        "2": { label: "2 giorni", sub: "Minimo efficace" },
                        "3": { label: "3 giorni", sub: "Routine equilibrata" },
                        "4": { label: "4 giorni", sub: "Progressi più rapidi" },
                        "5+": { label: "5+ giorni", sub: "Alta disciplina" },
                    }
                },

                session_time: {
                    title: "Quanto dura ogni allenamento?",
                    help: "Scegli un'opzione.",
                    options: {
                        "15-25": { label: "15–25 min", sub: "Breve" },
                        "30-45": { label: "30–45 min", sub: "Equilibrato" },
                        "45-70": { label: "45–70 min", sub: "Completo" },
                        "70+": { label: "70+ min", sub: "Sessioni lunghe" },
                    }
                },

                level: {
                    title: "Il tuo livello attuale",
                    help: "Scegli un'opzione.",
                    options: {
                        beginner: { label: "Principiante", sub: "0–6 mesi" },
                        intermediate: { label: "Intermedio", sub: "6–24 mesi" },
                        advanced: { label: "Avanzato", sub: "2+ anni" },
                    }
                },

                daily_energy: {
                    title: "Com’è la tua energia quotidiana?",
                    help: "Scegli un'opzione.",
                    options: {
                        low: { label: "Bassa", sub: "Stanchezza costante" },
                        ok: { label: "Ok", sub: "Fluttua ma gestibile" },
                        high: { label: "Alta", sub: "Di solito energico" },
                        roller: { label: "Instabile", sub: "Alti e bassi di energia" },
                    }
                },

                daily_focus: {
                    title: "Com’è il tuo umore/concentrazione?",
                    help: "Scegli un'opzione.",
                    options: {
                        stressed: { label: "Stressato", sub: "Molto pressione/ansia" },
                        normal: { label: "Normale", sub: "Umore stabile" },
                        motivated: { label: "Motivato", sub: "Concentrato e costante" },
                        down: { label: "Poco motivato", sub: "Difficile mantenere routine" },
                    }
                },

                weight_loss_ease: {
                    title: "Per te, perdere grasso è…",
                    help: "Scegli un'opzione.",
                    options: {
                        easy: { label: "Facile", sub: "Risponde rapidamente" },
                        medium: { label: "Moderato", sub: "Ci vuole tempo ma funziona" },
                        hard: { label: "Difficile", sub: "Risposta lenta" },
                        unknown: { label: "Non so", sub: "Mai tracciato davvero" },
                    }
                },

                diet_now: {
                    title: "Com’è la tua dieta attuale?",
                    help: "Scegli un'opzione.",
                    options: {
                        good: { label: "Buona", sub: "Organizzata e costante" },
                        mixed: { label: "Nella media", sub: "Incostante durante la settimana" },
                        messy: { label: "Disordinata", sub: "Per lo più improvvisata" },
                        low_app: { label: "Poco appetito", sub: "Salto i pasti" },
                    }
                },

                protein_habit: {
                    title: "Assunzione di proteine",
                    help: "Scegli un'opzione.",
                    options: {
                        low: { label: "Molto bassa", sub: "Raramente consumo" },
                        some: { label: "A volte", sub: "Assunzione moderata" },
                        good: { label: "Costante", sub: "Buona assunzione quotidiana" },
                        track: { label: "Traccio i macro", sub: "Alto controllo" },
                    }
                },

                habits: {
                    title: "Hai una di queste abitudini?",
                    help: "Seleziona ciò che si applica, poi continua.",
                    options: {
                        emotional: { label: "Fame emotiva", sub: "Ansia / stress" },
                        overeating: { label: "Mangiare troppo", sub: "Superare il limite" },
                        night_snacks: { label: "Spuntini notturni", sub: "Dopo cena" },
                        skip_meals: { label: "Saltare i pasti", sub: "Lunghi intervalli senza mangiare" },
                        none: { label: "Nessuna di queste", sub: "Nessuna abitudine rilevante" },
                    }
                },

                goal_extra: {
                    title: "Cos’altro vuoi ottenere con questo piano?",
                    help: "Seleziona ciò che si applica.",
                    options: {
                        muscle_strength: { label: "Più muscolo e forza", sub: "Forma e performance" },
                        endurance: { label: "Resistenza", sub: "Più fiato ed energia" },
                        posture_flex: { label: "Postura e flessibilità", sub: "Mobilità e allineamento" },
                        libido: { label: "Aumentare la libido", sub: "Benessere generale" },
                        none: { label: "Nessuna delle precedenti", sub: "Solo l’obiettivo principale" },
                    }
                },

                best_shape_when: {
                    title: "Quando eri nella tua forma migliore?",
                    help: "Scegli un'opzione.",
                    options: {
                        lt1y: { label: "Meno di 1 anno fa", sub: "La memoria muscolare aiuta" },
                        "1-2y": { label: "1–2 anni fa", sub: "Possibile recupero" },
                        "3y+": { label: "Più di 3 anni fa", sub: "Ricostruzione graduale" },
                        never: { label: "Mai", sub: "Costruire da zero" },
                    }
                },

                weight_change_pattern: {
                    title: "Come cambia di solito il tuo peso?",
                    help: "Scegli un'opzione.",
                    options: {
                        gain_easy: { label: "Aumento facilmente", sub: "Esco dalla routine e cresce" },
                        lose_easy: { label: "Perdo facilmente", sub: "Rispondo rapidamente" },
                        yo_yo: { label: "Su e giù (effetto yo-yo)", sub: "Fluttuazioni frequenti" },
                        stable: { label: "Stabile", sub: "Variazione minima" },
                        not_sure: { label: "Non so", sub: "Nessuna storia chiara" },
                    }
                },

                pushups: {
                    title: "Quante flessioni riesci a fare?",
                    help: "Scegli un'opzione.",
                    options: {
                        "0": { label: "0 (non ancora)", sub: "Adatteremo il percorso" },
                        "1-5": { label: "1–5", sub: "Livello iniziale" },
                        "6-15": { label: "6–15", sub: "Intermedio" },
                        "16-30": { label: "16–30", sub: "Buon livello" },
                        "31+": { label: "31+", sub: "Livello avanzato" },
                    }
                },

                squats: {
                    title: "Quanti squat riesci a fare?",
                    help: "Scegli un'opzione.",
                    options: {
                        "0-10": { label: "0–10", sub: "Livello iniziale" },
                        "11-25": { label: "11–25", sub: "Nella media" },
                        "26-50": { label: "26–50", sub: "Buono" },
                        "51-80": { label: "51–80", sub: "Molto buono" },
                        "81+": { label: "81+", sub: "Eccellente" },
                    }
                },

                flexibility: {
                    title: "Quanto sei flessibile?",
                    help: "Scegli un'opzione.",
                    options: {
                        low: { label: "Bassa", sub: "Rigido/contratto" },
                        medium: { label: "Moderata", sub: "Normale" },
                        good: { label: "Buona", sub: "Mobilità discreta" },
                        high: { label: "Alta", sub: "Molto flessibile" },
                    }
                },

                target_zones: {
                    title: "Su quali aree vuoi concentrarti?",
                    help: "Seleziona ciò che si applica. Se scegli “Total body”, le altre verranno rimosse.",
                    options: {
                        belly: { label: "Addome", sub: "Vita/addominali" },
                        chest: { label: "Petto", sub: "Parte superiore" },
                        arms: { label: "Braccia", sub: "Bicipiti/tricipiti" },
                        legs: { label: "Gambe", sub: "Parte inferiore" },
                        back: { label: "Schiena", sub: "Schiena alta/bassa" },
                        full_body: { label: "Total body", sub: "Piano completo" },
                    }
                },

                typical_day: {
                    title: "Come descriveresti una giornata tipo?",
                    help: "Scegli un'opzione.",
                    options: {
                        mostly_sitting: { label: "Per lo più seduto", sub: "Lavoro/studio seduto" },
                        balanced: { label: "Equilibrata", sub: "Un po’ di movimento" },
                        mostly_walking: { label: "Per lo più camminando", sub: "Routine attiva" },
                        varies: { label: "Varia di giorno in giorno", sub: "Nessun pattern fisso" },
                    }
                },

                water_intake: {
                    title: "Assunzione giornaliera di acqua?",
                    help: "Scegli un'opzione.",
                    options: {
                        "<1l": { label: "Meno di 1L", sub: "Molto bassa" },
                        "1-2l": { label: "1–2L", sub: "Ok" },
                        "2-3l": { label: "2–3L", sub: "Buona" },
                        "3l+": { label: "3L+", sub: "Ottima" },
                    }
                },

                cravings: {
                    title: "Quali cibi desideri più spesso?",
                    help: "Scegli un'opzione.",
                    options: {
                        fastfood: { label: "Fast food", sub: "Hamburger/pizza" },
                        sweets: { label: "Dolci", sub: "Cioccolato/torte" },
                        soda: { label: "Bibite", sub: "Bevande zuccherate" },
                        savory: { label: "Snack salati", sub: "Fritti/patatine" },
                        none: { label: "Nessuno di questi", sub: "Nessuna preferenza forte" },
                    }
                },

                diet_pref: {
                    title: "Che tipo di dieta preferisci?",
                    help: "Scegli un'opzione.",
                    options: {
                        traditional: { label: "Tradizionale", sub: "Cibi quotidiani" },
                        keto: { label: "Keto", sub: "Pochi carboidrati" },
                        paleo: { label: "Paleo", sub: "Più naturale" },
                        vegetarian: { label: "Vegetariana", sub: "Senza carne" },
                        vegan: { label: "Vegana", sub: "Senza prodotti animali" },
                        keto_vegan: { label: "Keto vegana", sub: "Low-carb + vegana" },
                        lactose_free: { label: "Senza lattosio", sub: "Evita lattosio" },
                        gluten_free: { label: "Senza glutine", sub: "Evita glutine" },
                    }
                },

                weight_gain_events: {
                    title: "Uno di questi eventi ha portato ad aumento di peso negli ultimi anni?",
                    help: "Seleziona ciò che si applica. Clicca Continua.",
                    options: {
                        work_pressure: { label: "Pressione lavorativa", sub: "Routine intensa" },
                        financial: { label: "Problemi finanziari", sub: "Stress/ansia" },
                        pandemic: { label: "Pandemia", sub: "Abitudini cambiate" },
                        breakup: { label: "Rottura/divorzio", sub: "Impatto emotivo" },
                        stress_other: { label: "Altri eventi stressanti", sub: "Variabile" },
                        slower_metabolism: { label: "Metabolismo più lento con l’età", sub: "Sembra più difficile di prima" },
                        none: { label: "Nessuna delle precedenti", sub: "Nessun evento chiaro" },
                    }
                },

                important_event: {
                    title: "Hai un evento importante in arrivo?",
                    help: "Se sì, adatteremo il piano per raggiungere l’obiettivo entro quella data.",
                    options: {
                        wedding: { label: "Matrimonio", sub: "Obiettivo con data" },
                        trip: { label: "Viaggio", sub: "Obiettivo con data" },
                        vacation: { label: "Vacanza", sub: "Obiettivo con data" },
                        competition: { label: "Gara", sub: "Obiettivo con data" },
                        party: { label: "Festa", sub: "Obiettivo con data" },
                        meeting: { label: "Riunione", sub: "Obiettivo con data" },
                        show: { label: "Spettacolo", sub: "Obiettivo con data" },
                        birthday: { label: "Compleanno", sub: "Obiettivo con data" },
                        special_date: { label: "Data speciale", sub: "Obiettivo con data" },
                        adventure: { label: "Avventura", sub: "Obiettivo con data" },
                        family: { label: "Occasione familiare", sub: "Obiettivo con data" },
                        none: { label: "Nessun evento importante", sub: "Piano con timeline realistica" },
                    }
                },

                event_date: {
                    title: "Seleziona la data dell’evento",
                    help: "Scegli una data da oggi in poi. Questa diventa la scadenza del piano.",
                },

                obstacle: {
                    title: "Cosa ti ha impedito di rimetterti in forma?",
                    help: "Scegli un'opzione.",
                    options: {
                        time: { label: "Mancanza di tempo", sub: "Agenda piena" },
                        consistency: { label: "Mancanza di costanza", sub: "Inizio e stop" },
                        motivation: { label: "Poca motivazione / emotivo", sub: "Sbalzi d’umore" },
                        knowledge: { label: "Non sapere cosa fare", sub: "Allenamento/dieta confusi" },
                        injury_pain: { label: "Dolore/infortunio", sub: "Limita l’esecuzione" },
                        money: { label: "Soldi/accesso a risorse", sub: "Risorse limitate" },
                        environment: { label: "Ambiente/problemi di routine", sub: "Famiglia/lavoro" },
                        other: { label: "Altro", sub: "Variabile" },
                    }
                },

                muscle_motivation: {
                    title: "Cosa ti motiva ad aumentare massa muscolare?",
                    help: "Scegli un'opzione.",
                    options: {
                        aesthetics: { label: "Estetica (fisico)", sub: "Aspetto e definizione" },
                        strength: { label: "Forza & performance", sub: "Carichi e movimenti" },
                        health: { label: "Salute & longevità", sub: "Benessere generale" },
                        confidence: { label: "Fiducia/autostima", sub: "Sentirsi meglio" },
                        sports: { label: "Sport/competizione", sub: "Performance atletica" },
                        metabolism: { label: "Aumentare metabolismo/ricomposizione", sub: "Un corpo più “attivo”" },
                    }
                },

                confidence: {
                    title: "Quanto sei sicuro di raggiungere l’obiettivo entro la data scelta?",
                    help: "Scegli un'opzione.",
                    options: {
                        "1": { label: "1 — Per niente sicuro", sub: "Ho bisogno di molto aiuto" },
                        "2": { label: "2", sub: "Bassa fiducia" },
                        "3": { label: "3", sub: "Media" },
                        "4": { label: "4", sub: "Alta" },
                        "5": { label: "5 — Molto sicuro", sub: "Eseguirò" },
                    }
                },

                injuries: {
                    title: "Dolori/infortuni ricorrenti?",
                    help: "Seleziona ciò che si applica. Clicca Continua.",
                    options: {
                        none: { label: "Nessuno", sub: "Nessuna limitazione" },
                        knee: { label: "Ginocchio", sub: "Adatta gli squat" },
                        back: { label: "Zona lombare", sub: "Adatta postura/carico" },
                        shoulder: { label: "Spalla", sub: "Adatta le spinte" },
                        wrist: { label: "Polso", sub: "Adatta appoggi" },
                        other: { label: "Altro", sub: "Considerare nel piano" },
                    }
                },

                sleep_hours: {
                    title: "Ore di sonno",
                    help: "Scegli un'opzione.",
                    options: {
                        "<5": { label: "< 5h", sub: "Recupero basso" },
                        "5-6": { label: "5–6h", sub: "Si può migliorare" },
                        "6-7": { label: "6–7h", sub: "Ok" },
                        "7-8": { label: "7–8h", sub: "Buono" },
                        "8+": { label: "8h+", sub: "Ottimo" },
                    }
                },

                alcohol_use: {
                    title: "Bevi alcol?",
                    help: "Scegli un'opzione.",
                    options: {
                        no: { label: "No", sub: "Non bevo" },
                        yes: { label: "Sì", sub: "Bevo alcol" },
                    }
                },

                alcohol_freq: {
                    title: "Quanto spesso bevi alcol?",
                    help: "Scegli un'opzione.",
                    options: {
                        rare: { label: "Raramente", sub: "1–2 volte/mese" },
                        weekend: { label: "Nei weekend", sub: "1–2 volte/settimana" },
                        often: { label: "Spesso", sub: "3–5 volte/settimana" },
                        daily: { label: "Quasi ogni giorno", sub: "Alta frequenza" },
                    }
                },

                smoke_use: {
                    title: "Fumi o svapi?",
                    help: "Scegli un'opzione.",
                    options: {
                        no: { label: "No", sub: "Non fumo/svapo" },
                        yes: { label: "Sì", sub: "A volte o spesso" },
                    }
                },

                smoke_freq: {
                    title: "Quanto spesso fumi/svapi?",
                    help: "Scegli un'opzione.",
                    options: {
                        rare: { label: "Raramente", sub: "Sociale/occasionale" },
                        week: { label: "Alcune volte a settimana", sub: "Leggero" },
                        daily: { label: "Ogni giorno", sub: "Alta frequenza" },
                    }
                },

                consent: { title: "Conferma rapida", help: "Seleziona entrambe le caselle per continuare." },
                metrics: { title: "Altezza e peso", help: "Inserisci i tuoi dati." },
                bmi_info: { title: "Il tuo IMC e cosa può indicare", help: "Una lettura veloce prima di continuare." },
                goal_date: { title: "Data obiettivo", help: "Abbiamo suggerito una data realistica (6 mesi). Puoi modificarla." },
                event_date: { title: "Seleziona la data dell’evento", help: "Scegli una data da oggi in poi. Questa diventa la scadenza del piano." },
                target: { title: "Peso obiettivo (kg)", help: "Inserisci il tuo peso obiettivo." },
                projection: { title: "Proiezione dei progressi", help: "Basata su peso attuale, peso obiettivo e data." },
                gen_email: { title: "IL TUO PIANO È IN FASE DI GENERAZIONE", help: "Adattiamo allenamento + dieta in base alle tue risposte." },
                email: { title: "Inserisci la tua email per ricevere il piano", help: "Dopo la conferma, verrai reindirizzato." },
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
                typeAndConfirm: "Entrez votre e-mail et confirmez.",
                genTitle: "VOTRE PLAN EST EN COURS DE GÉNÉRATION",
                genSub: "Nous construisons votre plan selon votre profil (niveau, routine, récupération, objectif).",
                genMetaRight: "Validation des informations et personnalisation…",
                consentTruth: "Je confirme répondre honnêtement.",
                consentTerms: "Je comprends que cela ne remplace pas un accompagnement professionnel.",
                emailLabel: "E-mail",
                emailPlaceholder: "votrenom@email.com",
                emailConfirmLabel: "Je confirme que c’est mon e-mail pour recevoir le plan.",
                emailRedirectHint: "Après confirmation, vous serez redirigé automatiquement.",

                heightLabel: "Taille (cm)",
                weightLabel: "Poids actuel (kg)",
                targetWeightLabel: "Poids cible (kg)",
                dateLabel: "Date",
                eventDateLabel: "Date de l’événement",

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
                bmiRisk_normal_2: "Dépend toujours des habitudes et de l’inactivité",
                bmiRisk_normal_3: "Focus : force + routine",

                bmiRisk_over_1: "Risque cardiométabolique plus élevé avec le temps",
                bmiRisk_over_2: "S’aggrave avec l’inactivité et le manque de sommeil",
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
                datePastError: "La date ne peut pas être dans le passé. Choisissez une date à partir d’aujourd’hui.",

                proj_status_default: "C’est faisable.",
                proj_note_default: "Projection estimée — la régularité et les ajustements font la différence.",
                proj_status_gain: "C’est faisable (prise de masse/recomposition).",
                proj_note_gain: "Si votre objectif est de prendre du poids/muscle, le plan ajustera calories et progression.",
                proj_status_aggressive: "Possible, mais peut nécessiter des ajustements (objectif ambitieux).",
                proj_note_aggressive: "Si cela semble trop difficile, prolonger le délai améliore la durabilité.",
                proj_status_realistic: "C’est faisable (rythme réaliste).",
                proj_note_realistic: "Un rythme modéré et constant est généralement durable.",
                proj_note_event: "Objectif basé sur une date (événement). Si le rythme devient trop agressif, ajustez l’objectif ou planifiez par étapes.",

                proj_currentWeight: "Poids actuel :",
                proj_targetWeight: "Poids cible :",
                proj_deadline: "Date limite :",
                proj_rate: "Rythme moyen :",
                daysLabel: "jours",
                kgPerWeekLabel: "kg/semaine",
            },

            testimonials: [
                { name: "Marina", text: "J’ai perdu 6 kg en 10 semaines en suivant le plan.", stars: 5 },
                { name: "Carlos", text: "Séances courtes, régularité, vrais résultats.", stars: 5 },
                { name: "Letícia", text: "Mon objectif était la définition et cela s’est parfaitement adapté à ma routine.", stars: 5 },
                { name: "Rafael", text: "J’ai repris l’entraînement sans douleur en ajustant les progressions.", stars: 5 },
                { name: "Bianca", text: "Alimentation simple et pratique. Je ne me sens plus perdue.", stars: 5 },
                { name: "Diego", text: "Le plan était structuré selon mon profil.", stars: 5 },
            ],

            q: {

                lang_gate: {
                    title: "Choisissez votre langue",
                    help: "Sélectionnez pour commencer. Vous pourrez changer plus tard.",
                    options: {
                        en: { label: "English", sub: "Commencer en anglais" },
                        es: { label: "Español", sub: "Commencer en espagnol" },
                        pl: { label: "Polski", sub: "Commencer en polonais" },
                        it: { label: "Italiano", sub: "Commencer en italien" },
                        fr: { label: "Français", sub: "Commencer en français" },
                        pt: { label: "Português", sub: "Commencer en portugais" },
                    }
                },

                motivation: [
                    { title: "Vous n’avez pas besoin de motivation. Vous avez besoin d’une routine.", text: "Ce plan est conçu pour s’adapter à votre journée et évoluer avec vous. Une étape à la fois." },
                    { title: "La régularité dépasse l’intensité.", text: "Les résultats viennent de la répétition des bases. Le plan ajuste volume et alimentation." },
                    { title: "Votre corps répond aux signaux quotidiens.", text: "Entraînement + nutrition + sommeil. Alignez-les et les progrès apparaissent." },
                    { title: "Le plan est personnalisé. L’effort vous appartient.", text: "Exécutez la prochaine séance et le prochain repas. Le reste suivra." },
                ],

                goal: {
                    title: "Quel est votre objectif visuel ?",
                    help: "Choisissez une option.",
                    options: {
                        goal_lean: { label: "Plus défini", sub: "Silhouette sèche" },
                        goal_athletic: { label: "Athlétique", sub: "Esthétique + performance" },
                        goal_muscle: { label: "Plus de volume", sub: "Physique plus massif" },
                        goal_strength: { label: "Force", sub: "Mouvements plus puissants" },
                    }
                },

                age: {
                    title: "Votre tranche d’âge",
                    help: "Choisissez une option.",
                    options: {
                        "13-17": { label: "13–17", sub: "Base & technique" },
                        "18-24": { label: "18–24", sub: "Progression rapide" },
                        "25-34": { label: "25–34", sub: "Phase de régularité" },
                        "35-44": { label: "35–44", sub: "Récupération intelligente" },
                        "45+": { label: "45+", sub: "Progression sécurisée" },
                    }
                },
                trained_before: {
                    title: "Avez-vous déjà suivi un entraînement régulier ?",
                    help: "Choisissez une option.",
                    options: {
                        no: { label: "Jamais", sub: "Commencer par les bases" },
                        yes_some: { label: "Oui, mais j’ai arrêté", sub: "Reprendre progressivement" },
                        yes_regular: { label: "Oui, régulièrement", sub: "Ajuster volume & performance" },
                    }
                },

                body_current: {
                    title: "À quoi ressemble votre corps aujourd’hui ?",
                    help: "Choisissez une option.",
                    options: {
                        body_slim: { label: "Mince", sub: "Faible masse musculaire" },
                        body_average: { label: "Moyen", sub: "Silhouette normale" },
                        body_over: { label: "Surpoids", sub: "Excès de graisse" },
                        body_athletic: { label: "Déjà en forme", sub: "Améliorer la performance" },
                    }
                },

                days: {
                    title: "Combien de jours par semaine vous entraînez-vous ?",
                    help: "Choisissez une option.",
                    options: {
                        "2": { label: "2 jours", sub: "Minimum efficace" },
                        "3": { label: "3 jours", sub: "Routine équilibrée" },
                        "4": { label: "4 jours", sub: "Progression plus rapide" },
                        "5+": { label: "5+ jours", sub: "Discipline élevée" },
                    }
                },

                session_time: {
                    title: "Durée de chaque séance ?",
                    help: "Choisissez une option.",
                    options: {
                        "15-25": { label: "15–25 min", sub: "Courte" },
                        "30-45": { label: "30–45 min", sub: "Équilibrée" },
                        "45-70": { label: "45–70 min", sub: "Complète" },
                        "70+": { label: "70+ min", sub: "Longues séances" },
                    }
                },

                level: {
                    title: "Votre niveau actuel",
                    help: "Choisissez une option.",
                    options: {
                        beginner: { label: "Débutant", sub: "0–6 mois" },
                        intermediate: { label: "Intermédiaire", sub: "6–24 mois" },
                        advanced: { label: "Avancé", sub: "2+ ans" },
                    }
                },

                daily_energy: {
                    title: "Comment est votre énergie quotidienne ?",
                    help: "Choisissez une option.",
                    options: {
                        low: { label: "Faible", sub: "Fatigue constante" },
                        ok: { label: "Correcte", sub: "Variable mais gérable" },
                        high: { label: "Élevée", sub: "Généralement énergique" },
                        roller: { label: "Instable", sub: "Hauts et bas d’énergie" },
                    }
                },

                daily_focus: {
                    title: "Comment est votre humeur/concentration ?",
                    help: "Choisissez une option.",
                    options: {
                        stressed: { label: "Stressé(e)", sub: "Pression/anxiété élevée" },
                        normal: { label: "Normale", sub: "Humeur stable" },
                        motivated: { label: "Motivé(e)", sub: "Concentré(e) & régulier(ère)" },
                        down: { label: "Démotivé(e)", sub: "Difficile de maintenir une routine" },
                    }
                },

                weight_loss_ease: {
                    title: "Pour vous, perdre de la graisse est…",
                    help: "Choisissez une option.",
                    options: {
                        easy: { label: "Facile", sub: "Réagit rapidement" },
                        medium: { label: "Modéré", sub: "Prend du temps mais fonctionne" },
                        hard: { label: "Difficile", sub: "Réponse lente" },
                        unknown: { label: "Je ne sais pas", sub: "Jamais suivi correctement" },
                    }
                },

                diet_now: {
                    title: "Comment est votre alimentation actuelle ?",
                    help: "Choisissez une option.",
                    options: {
                        good: { label: "Bonne", sub: "Organisée & régulière" },
                        mixed: { label: "Moyenne", sub: "Inconstante pendant la semaine" },
                        messy: { label: "Désorganisée", sub: "Souvent improvisée" },
                        low_app: { label: "Faible appétit", sub: "Repas sautés" },
                    }
                },

                protein_habit: {
                    title: "Apport en protéines",
                    help: "Choisissez une option.",
                    options: {
                        low: { label: "Très faible", sub: "Rarement consommées" },
                        some: { label: "Parfois", sub: "Apport modéré" },
                        good: { label: "Régulier", sub: "Bon apport quotidien" },
                        track: { label: "Je compte mes macros", sub: "Contrôle élevé" },
                    }
                },

                habits: {
                    title: "Avez-vous l’une de ces habitudes ?",
                    help: "Sélectionnez ce qui s’applique.",
                    options: {
                        emotional: { label: "Alimentation émotionnelle", sub: "Stress/anxiété" },
                        overeating: { label: "Excès alimentaires", sub: "Au-delà de la faim" },
                        night_snacks: { label: "Grignotage nocturne", sub: "Après le dîner" },
                        skip_meals: { label: "Repas sautés", sub: "Longues périodes sans manger" },
                        none: { label: "Aucune", sub: "Pas d’habitude marquée" },
                    }
                },

                goal_extra: {
                    title: "Que souhaitez-vous atteindre d’autre avec ce plan ?",
                    help: "Sélectionnez ce qui s’applique.",
                    options: {
                        muscle_strength: { label: "Plus de muscle & force", sub: "Physique et performance" },
                        endurance: { label: "Endurance", sub: "Plus d’énergie" },
                        posture_flex: { label: "Posture & flexibilité", sub: "Mobilité" },
                        libido: { label: "Augmenter la libido", sub: "Bien-être global" },
                        none: { label: "Aucun", sub: "Seulement l’objectif principal" },
                    }
                },

                best_shape_when: {
                    title: "Quand étiez-vous dans votre meilleure forme ?",
                    help: "Choisissez une option.",
                    options: {
                        lt1y: { label: "Il y a moins d’un an", sub: "Mémoire musculaire" },
                        "1-2y": { label: "Il y a 1–2 ans", sub: "Retour possible" },
                        "3y+": { label: "Il y a plus de 3 ans", sub: "Reconstruction progressive" },
                        never: { label: "Jamais", sub: "Construire depuis zéro" },
                    }
                },

                weight_change_pattern: {
                    title: "Comment votre poids évolue-t-il habituellement ?",
                    help: "Choisissez une option.",
                    options: {
                        gain_easy: { label: "Je prends facilement", sub: "Hors routine = prise" },
                        lose_easy: { label: "Je perds facilement", sub: "Réponse rapide" },
                        yo_yo: { label: "Effet yo-yo", sub: "Fluctuations fréquentes" },
                        stable: { label: "Stable", sub: "Peu de variation" },
                        not_sure: { label: "Je ne sais pas", sub: "Pas d’historique clair" },
                    }
                },

                pushups: {
                    title: "Combien de pompes pouvez-vous faire ?",
                    help: "Choisissez une option.",
                    options: {
                        "0": { label: "0 (pas encore)", sub: "Nous adapterons" },
                        "1-5": { label: "1–5", sub: "Débutant" },
                        "6-15": { label: "6–15", sub: "Intermédiaire" },
                        "16-30": { label: "16–30", sub: "Bon niveau" },
                        "31+": { label: "31+", sub: "Avancé" },
                    }
                },

                squats: {
                    title: "Combien de squats pouvez-vous faire ?",
                    help: "Choisissez une option.",
                    options: {
                        "0-10": { label: "0–10", sub: "Débutant" },
                        "11-25": { label: "11–25", sub: "Moyen" },
                        "26-50": { label: "26–50", sub: "Bon" },
                        "51-80": { label: "51–80", sub: "Très bon" },
                        "81+": { label: "81+", sub: "Excellent" },
                    }
                },

                flexibility: {
                    title: "Quel est votre niveau de flexibilité ?",
                    help: "Choisissez une option.",
                    options: {
                        low: { label: "Faible", sub: "Raideur" },
                        medium: { label: "Modéré", sub: "Normal" },
                        good: { label: "Bon", sub: "Mobilité correcte" },
                        high: { label: "Élevé", sub: "Très flexible" },
                    }
                },
                target_zones: {
                    title: "Quelles zones souhaitez-vous cibler ?",
                    help: "Sélectionnez ce qui s’applique. Si vous choisissez « Corps entier », les autres seront désélectionnées.",
                    options: {
                        belly: { label: "Ventre", sub: "Taille/abdos" },
                        chest: { label: "Poitrine", sub: "Haut du corps" },
                        arms: { label: "Bras", sub: "Biceps/triceps" },
                        legs: { label: "Jambes", sub: "Bas du corps" },
                        back: { label: "Dos", sub: "Haut/bas du dos" },
                        full_body: { label: "Corps entier", sub: "Plan complet" },
                    }
                },

                typical_day: {
                    title: "Comment décririez-vous votre journée type ?",
                    help: "Choisissez une option.",
                    options: {
                        mostly_sitting: { label: "Principalement assis(e)", sub: "Travail/études assis" },
                        balanced: { label: "Équilibrée", sub: "Un peu de mouvement" },
                        mostly_walking: { label: "Principalement en mouvement", sub: "Routine active" },
                        varies: { label: "Varie selon les jours", sub: "Pas de schéma fixe" },
                    }
                },

                water_intake: {
                    title: "Consommation d’eau quotidienne ?",
                    help: "Choisissez une option.",
                    options: {
                        "<1l": { label: "Moins de 1L", sub: "Très faible" },
                        "1-2l": { label: "1–2L", sub: "Correcte" },
                        "2-3l": { label: "2–3L", sub: "Bonne" },
                        "3l+": { label: "3L+", sub: "Excellente" },
                    }
                },

                cravings: {
                    title: "Quels aliments vous attirent le plus souvent ?",
                    help: "Choisissez une option.",
                    options: {
                        fastfood: { label: "Fast food", sub: "Burgers/pizza" },
                        sweets: { label: "Sucreries", sub: "Chocolat/gâteaux" },
                        soda: { label: "Sodas", sub: "Boissons sucrées" },
                        savory: { label: "Snacks salés", sub: "Fritures/chips" },
                        none: { label: "Aucun", sub: "Pas de préférence marquée" },
                    }
                },

                diet_pref: {
                    title: "Quel type d’alimentation préférez-vous ?",
                    help: "Choisissez une option.",
                    options: {
                        traditional: { label: "Traditionnelle", sub: "Aliments du quotidien" },
                        keto: { label: "Keto", sub: "Faible en glucides" },
                        paleo: { label: "Paléo", sub: "Plus naturelle" },
                        vegetarian: { label: "Végétarienne", sub: "Sans viande" },
                        vegan: { label: "Végan", sub: "Sans produits animaux" },
                        keto_vegan: { label: "Keto végan", sub: "Low-carb + végan" },
                        lactose_free: { label: "Sans lactose", sub: "Évite le lactose" },
                        gluten_free: { label: "Sans gluten", sub: "Évite le gluten" },
                    }
                },

                weight_gain_events: {
                    title: "Un de ces événements a-t-il entraîné une prise de poids ces dernières années ?",
                    help: "Sélectionnez ce qui s’applique. Cliquez sur Continuer.",
                    options: {
                        work_pressure: { label: "Pression professionnelle", sub: "Routine intense" },
                        financial: { label: "Problèmes financiers", sub: "Stress/anxiété" },
                        pandemic: { label: "Pandémie", sub: "Changement d’habitudes" },
                        breakup: { label: "Rupture/divorce", sub: "Impact émotionnel" },
                        stress_other: { label: "Autres événements stressants", sub: "Variable" },
                        slower_metabolism: { label: "Métabolisme plus lent avec l’âge", sub: "Plus difficile qu’avant" },
                        none: { label: "Aucun", sub: "Pas d’événement spécifique" },
                    }
                },

                important_event: {
                    title: "Avez-vous un événement important à venir ?",
                    help: "Si oui, nous adapterons le plan pour atteindre l’objectif à cette date.",
                    options: {
                        wedding: { label: "Mariage", sub: "Objectif avec date" },
                        trip: { label: "Voyage", sub: "Objectif avec date" },
                        vacation: { label: "Vacances", sub: "Objectif avec date" },
                        competition: { label: "Compétition", sub: "Objectif avec date" },
                        party: { label: "Fête", sub: "Objectif avec date" },
                        meeting: { label: "Réunion importante", sub: "Objectif avec date" },
                        show: { label: "Spectacle", sub: "Objectif avec date" },
                        birthday: { label: "Anniversaire", sub: "Objectif avec date" },
                        special_date: { label: "Date spéciale", sub: "Objectif avec date" },
                        adventure: { label: "Aventure", sub: "Objectif avec date" },
                        family: { label: "Événement familial", sub: "Objectif avec date" },
                        none: { label: "Aucun événement important", sub: "Plan avec délai réaliste" },
                    }
                },

                event_date: {
                    title: "Sélectionnez la date de votre événement",
                    help: "Choisissez une date à partir d’aujourd’hui. Elle devient la date limite du plan.",
                },

                obstacle: {
                    title: "Qu’est-ce qui vous a empêché de retrouver la forme ?",
                    help: "Choisissez une option.",
                    options: {
                        time: { label: "Manque de temps", sub: "Emploi du temps chargé" },
                        consistency: { label: "Manque de régularité", sub: "Commencer et arrêter" },
                        motivation: { label: "Faible motivation / émotionnel", sub: "Variations d’humeur" },
                        knowledge: { label: "Ne pas savoir quoi faire", sub: "Entraînement/alimentation confus" },
                        injury_pain: { label: "Douleur/blessure", sub: "Limite l’exécution" },
                        money: { label: "Manque de moyens/ressources", sub: "Accès limité" },
                        environment: { label: "Problèmes d’environnement/routine", sub: "Famille/travail" },
                        other: { label: "Autre", sub: "Variable" },
                    }
                },

                muscle_motivation: {
                    title: "Qu’est-ce qui vous motive à prendre du muscle ?",
                    help: "Choisissez une option.",
                    options: {
                        aesthetics: { label: "Esthétique", sub: "Apparence et définition" },
                        strength: { label: "Force & performance", sub: "Charges et mouvements" },
                        health: { label: "Santé & longévité", sub: "Bien-être général" },
                        confidence: { label: "Confiance en soi", sub: "Se sentir mieux" },
                        sports: { label: "Sport/compétition", sub: "Performance athlétique" },
                        metabolism: { label: "Stimuler le métabolisme", sub: "Corps plus actif" },
                    }
                },

                confidence: {
                    title: "Quel est votre niveau de confiance pour atteindre votre objectif à la date choisie ?",
                    help: "Choisissez une option.",
                    options: {
                        "1": { label: "1 — Pas confiant(e)", sub: "J’ai besoin de beaucoup d’aide" },
                        "2": { label: "2", sub: "Faible confiance" },
                        "3": { label: "3", sub: "Moyenne" },
                        "4": { label: "4", sub: "Élevée" },
                        "5": { label: "5 — Très confiant(e)", sub: "Je vais exécuter" },
                    }
                },

                injuries: {
                    title: "Douleurs/blessures récurrentes ?",
                    help: "Sélectionnez ce qui s’applique. Cliquez sur Continuer.",
                    options: {
                        none: { label: "Aucune", sub: "Pas de restriction" },
                        knee: { label: "Genou", sub: "Adapter les squats" },
                        back: { label: "Bas du dos", sub: "Adapter posture/charge" },
                        shoulder: { label: "Épaule", sub: "Adapter les mouvements de poussée" },
                        wrist: { label: "Poignet", sub: "Adapter les appuis" },
                        other: { label: "Autre", sub: "Pris en compte dans le plan" },
                    }
                },

                sleep_hours: {
                    title: "Heures de sommeil",
                    help: "Choisissez une option.",
                    options: {
                        "<5": { label: "< 5h", sub: "Récupération faible" },
                        "5-6": { label: "5–6h", sub: "Peut s’améliorer" },
                        "6-7": { label: "6–7h", sub: "Correct" },
                        "7-8": { label: "7–8h", sub: "Bon" },
                        "8+": { label: "8h+", sub: "Excellent" },
                    }
                },

                alcohol_use: {
                    title: "Consommez-vous de l’alcool ?",
                    help: "Choisissez une option.",
                    options: {
                        no: { label: "Non", sub: "Je ne bois pas" },
                        yes: { label: "Oui", sub: "Je consomme de l’alcool" },
                    }
                },

                alcohol_freq: {
                    title: "À quelle fréquence consommez-vous de l’alcool ?",
                    help: "Choisissez une option.",
                    options: {
                        rare: { label: "Rarement", sub: "1–2x/mois" },
                        weekend: { label: "Week-ends", sub: "1–2x/semaine" },
                        often: { label: "Souvent", sub: "3–5x/semaine" },
                        daily: { label: "Presque tous les jours", sub: "Fréquence élevée" },
                    }
                },

                smoke_use: {
                    title: "Fumez-vous ou vapotez-vous ?",
                    help: "Choisissez une option.",
                    options: {
                        no: { label: "Non", sub: "Je ne fume/vapote pas" },
                        yes: { label: "Oui", sub: "Parfois ou souvent" },
                    }
                },

                smoke_freq: {
                    title: "À quelle fréquence fumez-vous/vapotez-vous ?",
                    help: "Choisissez une option.",
                    options: {
                        rare: { label: "Rarement", sub: "Social/occasionnel" },
                        week: { label: "Quelques fois/semaine", sub: "Léger" },
                        daily: { label: "Tous les jours", sub: "Fréquence élevée" },
                    }
                },

                consent: { title: "Confirmation rapide", help: "Cochez les deux cases pour continuer." },
                metrics: { title: "Taille et poids", help: "Entrez vos informations." },
                bmi_info: { title: "Votre IMC et ce qu’il peut indiquer", help: "Lecture rapide avant de continuer." },
                goal_date: { title: "Date objectif", help: "Nous avons suggéré une date réaliste (6 mois). Vous pouvez ajuster." },
                target: { title: "Poids cible (kg)", help: "Entrez votre poids cible." },
                projection: { title: "Projection de progression", help: "Basée sur poids actuel, poids cible et date." },
                gen_email: { title: "VOTRE PLAN EST EN COURS DE GÉNÉRATION", help: "Ajustement entraînement + alimentation selon vos réponses." },
                email: { title: "Entrez votre e-mail pour recevoir le plan", help: "Après confirmation, vous serez redirigé." },

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
                typeAndConfirm: "Wpisz e-mail i potwierdź.",
                genTitle: "TWÓJ PLAN JEST GENEROWANY",
                genSub: "Tworzymy Twój plan na podstawie profilu (poziom, rutyna, regeneracja, cel).",
                genMetaRight: "Weryfikacja danych i personalizacja…",
                consentTruth: "Potwierdzam, że odpowiadam zgodnie z prawdą.",
                consentTerms: "Rozumiem, że nie zastępuje to profesjonalnej opieki.",
                emailLabel: "E-mail",
                emailPlaceholder: "twojemail@email.com",
                emailConfirmLabel: "Potwierdzam, że to mój e-mail do otrzymania planu.",
                emailRedirectHint: "Po potwierdzeniu nastąpi automatyczne przekierowanie.",

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
                { name: "Marina", text: "Schudłam 6 kg w 10 tygodni dzięki planowi.", stars: 5 },
                { name: "Carlos", text: "Krótkie treningi, regularność, realne efekty.", stars: 5 },
                { name: "Letícia", text: "Cel definicji idealnie dopasowany do mojej rutyny.", stars: 5 },
                { name: "Rafael", text: "Wróciłem do treningów bez bólu dzięki progresji.", stars: 5 },
                { name: "Bianca", text: "Prosta i praktyczna dieta. Koniec chaosu.", stars: 5 },
                { name: "Diego", text: "Plan dopasowany dokładnie do mojego profilu.", stars: 5 },
            ],

            q: {

                lang_gate: {
                    title: "Wybierz język",
                    help: "Wybierz, aby rozpocząć. Zmiana możliwa później.",
                    options: {
                        en: { label: "English", sub: "Start po angielsku" },
                        es: { label: "Español", sub: "Start po hiszpańsku" },
                        pl: { label: "Polski", sub: "Start po polsku" },
                        it: { label: "Italiano", sub: "Start po włosku" },
                        fr: { label: "Français", sub: "Start po francusku" },
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
                        goal_lean: { label: "Bardziej zarysowana sylwetka", sub: "Smukły wygląd" },
                        goal_athletic: { label: "Atletyczna", sub: "Estetyka + wydajność" },
                        goal_muscle: { label: "Więcej masy", sub: "Pełniejsza sylwetka" },
                        goal_strength: { label: "Siła", sub: "Mocniejsze ruchy" },
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
                        "45+": { label: "45+", sub: "Bezpieczna progresja" },
                    }
                },

                trained_before: {
                    title: "Czy trenowałeś(-aś) regularnie wcześniej?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        no: { label: "Nigdy", sub: "Zaczynamy od podstaw" },
                        yes_some: { label: "Tak, ale przestałem(-am)", sub: "Bezpieczny powrót" },
                        yes_regular: { label: "Tak, regularnie", sub: "Dostosowanie objętości i wydajności" },
                    }
                },

                body_current: {
                    title: "Jak wygląda Twoja sylwetka obecnie?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        body_slim: { label: "Szczupła", sub: "Niska masa mięśniowa" },
                        body_average: { label: "Przeciętna", sub: "Normalna budowa" },
                        body_over: { label: "Nadwaga", sub: "Nadmiar tkanki tłuszczowej" },
                        body_athletic: { label: "Już wysportowana", sub: "Poprawa wydajności" },
                    }
                },

                days: {
                    title: "Ile dni w tygodniu trenujesz?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        "2": { label: "2 dni", sub: "Minimum efektywne" },
                        "3": { label: "3 dni", sub: "Zrównoważona rutyna" },
                        "4": { label: "4 dni", sub: "Szybszy progres" },
                        "5+": { label: "5+ dni", sub: "Wysoka dyscyplina" },
                    }
                },

                session_time: {
                    title: "Ile trwa Twój trening?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        "15-25": { label: "15–25 min", sub: "Krótki" },
                        "30-45": { label: "30–45 min", sub: "Zrównoważony" },
                        "45-70": { label: "45–70 min", sub: "Kompletny" },
                        "70+": { label: "70+ min", sub: "Długie sesje" },
                    }
                },

                level: {
                    title: "Twój obecny poziom",
                    help: "Wybierz jedną opcję.",
                    options: {
                        beginner: { label: "Początkujący", sub: "0–6 miesięcy" },
                        intermediate: { label: "Średniozaawansowany", sub: "6–24 miesiące" },
                        advanced: { label: "Zaawansowany", sub: "2+ lata" },
                    }
                },

                daily_energy: {
                    title: "Jak oceniasz swoją codzienną energię?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        low: { label: "Niska", sub: "Ciągłe zmęczenie" },
                        ok: { label: "W porządku", sub: "Wahania, ale do opanowania" },
                        high: { label: "Wysoka", sub: "Zazwyczaj pełen(-na) energii" },
                        roller: { label: "Niestabilna", sub: "Wzloty i spadki energii" },
                    }
                },

                daily_focus: {
                    title: "Jak oceniasz swój nastrój/koncentrację?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        stressed: { label: "Zestresowany(-a)", sub: "Duża presja/lęk" },
                        normal: { label: "Normalny", sub: "Stabilny nastrój" },
                        motivated: { label: "Zmotywowany(-a)", sub: "Skoncentrowany(-a) i regularny(-a)" },
                        down: { label: "Zdemotywowany(-a)", sub: "Trudno utrzymać rutynę" },
                    }
                },

                weight_loss_ease: {
                    title: "Dla Ciebie utrata tkanki tłuszczowej jest…",
                    help: "Wybierz jedną opcję.",
                    options: {
                        easy: { label: "Łatwa", sub: "Szybka reakcja" },
                        medium: { label: "Umiarkowana", sub: "Wymaga czasu" },
                        hard: { label: "Trudna", sub: "Powolne efekty" },
                        unknown: { label: "Nie wiem", sub: "Nigdy nie śledziłem(-am)" },
                    }
                },

                diet_now: {
                    title: "Jak wygląda Twoja obecna dieta?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        good: { label: "Dobra", sub: "Uporządkowana i regularna" },
                        mixed: { label: "Średnia", sub: "Nieregularna w tygodniu" },
                        messy: { label: "Chaotyczna", sub: "Często improwizowana" },
                        low_app: { label: "Niski apetyt", sub: "Pomijanie posiłków" },
                    }
                },

                protein_habit: {
                    title: "Spożycie białka",
                    help: "Wybierz jedną opcję.",
                    options: {
                        low: { label: "Bardzo niskie", sub: "Rzadko spożywam" },
                        some: { label: "Czasami", sub: "Umiarkowane" },
                        good: { label: "Regularne", sub: "Codziennie odpowiednia ilość" },
                        track: { label: "Liczę makroskładniki", sub: "Wysoka kontrola" },
                    }
                },

                habits: {
                    title: "Czy masz któreś z tych nawyków?",
                    help: "Zaznacz, co dotyczy.",
                    options: {
                        emotional: { label: "Jedzenie emocjonalne", sub: "Stres/lęk" },
                        overeating: { label: "Przejadanie się", sub: "Ponad limit" },
                        night_snacks: { label: "Podjadanie nocą", sub: "Po kolacji" },
                        skip_meals: { label: "Pomijanie posiłków", sub: "Długie przerwy" },
                        none: { label: "Żaden z powyższych", sub: "Brak wyraźnych nawyków" },
                    }
                },

                target_zones: {
                    title: "Na których partiach chcesz się skupić?",
                    help: "Zaznacz odpowiednie. Jeśli wybierzesz „Całe ciało”, inne zostaną usunięte.",
                    options: {
                        belly: { label: "Brzuch", sub: "Talia/mięśnie brzucha" },
                        chest: { label: "Klatka piersiowa", sub: "Góra ciała" },
                        arms: { label: "Ramiona", sub: "Biceps/triceps" },
                        legs: { label: "Nogi", sub: "Dół ciała" },
                        back: { label: "Plecy", sub: "Górne/dolne plecy" },
                        full_body: { label: "Całe ciało", sub: "Kompleksowy plan" },
                    }
                },

                sleep_hours: {
                    title: "Ile godzin śpisz?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        "<5": { label: "< 5h", sub: "Słaba regeneracja" },
                        "5-6": { label: "5–6h", sub: "Można poprawić" },
                        "6-7": { label: "6–7h", sub: "W porządku" },
                        "7-8": { label: "7–8h", sub: "Dobrze" },
                        "8+": { label: "8h+", sub: "Bardzo dobrze" },
                    }
                },

                alcohol_use: {
                    title: "Czy pijesz alkohol?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        no: { label: "Nie", sub: "Nie piję" },
                        yes: { label: "Tak", sub: "Spożywam alkohol" },
                    }
                },

                smoke_use: {
                    title: "Czy palisz lub używasz e-papierosa?",
                    help: "Wybierz jedną opcję.",
                    options: {
                        no: { label: "Nie", sub: "Nie palę" },
                        yes: { label: "Tak", sub: "Czasami lub często" },
                    }
                },

                consent: { title: "Szybkie potwierdzenie", help: "Zaznacz oba pola, aby kontynuować." },
                metrics: { title: "Wzrost i waga", help: "Wpisz swoje dane." },
                bmi_info: { title: "Twoje BMI i co może oznaczać", help: "Krótka informacja przed kontynuacją." },
                goal_date: { title: "Data celu", help: "Zaproponowaliśmy realistyczny termin (6 miesięcy). Możesz go zmienić." },
                target: { title: "Docelowa waga (kg)", help: "Wpisz swoją wagę docelową." },
                projection: { title: "Prognoza postępów", help: "Na podstawie aktualnej wagi, celu i daty." },
                gen_email: { title: "TWÓJ PLAN JEST GENEROWANY", help: "Dostosowujemy trening i dietę na podstawie Twoich odpowiedzi." },
                email: { title: "Wpisz e-mail, aby otrzymać plan", help: "Po potwierdzeniu nastąpi przekierowanie." },

            }
        }
    };

    let LANG = "pt";

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

    // Tradução de pergunta (title/help)
    function tQ(qid, field, fallback = "") {
        const v =
            safeGet(I18N, [LANG, "q", qid, field]) ??
            safeGet(I18N, [FALLBACK_LANG, "q", qid, field]) ??
            fallback;
        return v;
    }

    // Tradução de option (label/sub)
    function tOpt(qid, optKey, field, fallback = "") {
        const v =
            safeGet(I18N, [LANG, "q", qid, "options", optKey, field]) ??
            safeGet(I18N, [FALLBACK_LANG, "q", qid, "options", optKey, field]) ??
            fallback;
        return v;
    }

    function tUI(key, fallback = "") {
        const v =
            safeGet(I18N, [LANG, "ui", key]) ??
            safeGet(I18N, [FALLBACK_LANG, "ui", key]) ??
            fallback;
        return v;
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
        const stored = getStoredLang();
        if (stored && LANGS.includes(stored)) LANG = stored;
        const sel = document.getElementById("langSelect");
        if (sel) {
            sel.value = LANG;
            sel.addEventListener("change", (e) => {
                setLang(e.target.value);
                // O quiz.js deve chamar render() novamente após trocar.
                window.__quizRender?.();
            });
        }
        document.documentElement.lang = LANG;
    }

    function tTestimonials() {
        return (
            safeGet(I18N, [LANG, "testimonials"]) ??
            safeGet(I18N, [FALLBACK_LANG, "testimonials"]) ??
            []
        );
    }
    window.tTestimonials = tTestimonials;


    // Exporta no window (sem modules)
    window.I18N = I18N;
    window.I18N_LANGS = LANGS;
    window.i18nSetLang = setLang;
    window.i18nGetLang = () => LANG;
    window.tQ = tQ;
    window.tOpt = tOpt;
    window.tUI = tUI;
    window.i18nInitLang = initLang;
})();