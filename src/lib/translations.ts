export type Language = "es" | "en" | "fr"

export const translations = {
    es: {
        nav: {
            about: "Acerca de mí",
            services: "Servicios",
            faq: "FAQ",
            contact: "Contacto",
        },
        hero: {
            title: "PSICÓLOGO - PSICONALISTA",
            subtitle: "Esp. Mg. Psicopatología y Salud Mental",
        },
        about: {
            title: "Sobre mí",
            title1: "Acerca",
            title2: "de mí",
            description:
                "Soy psicólogo y psicoanalista, con especialización y maestría en Psicopatología y Salud Mental. Desde hace once años trabajo en el campo clínico con adultos, acompañando a quienes atraviesan distintos modos de sufrimiento subjetivo.\n\nMi práctica se orienta al trabajo con aquello que irrumpe y no encuentra palabras: el malestar persistente, las pérdidas, los duelos, las marcas del abuso sexual y otras experiencias que dejan huella en la vida psíquica. Trabajo desde el psicoanálisis, entendiendo que cada sujeto es singular y que no hay soluciones universales para lo que se sufre.",
        },
        profile: {
            title: "Perfil",
            title1: "Mi",
            title2: "Perfil",
            description:
                "Actualmente soy profesor universitario y dirijo el área de proyección social en UNICOC (Colombia), espacios desde los cuales continúo interrogando la clínica, el sufrimiento y los discursos contemporáneos sobre la salud mental.\n\nHe desarrollado mi labor clínica tanto de manera presencial como online, atendiendo personas en distintos países de América y Europa. Paralelamente, he participado activamente en espacios académicos y de investigación: fui secretario del Departamento de Investigación de IUSAM–APdeBA hasta 2021, formé parte del consejo editorial de la Revista Argentina de Humanidades y Ciencias Sociales, y participé como revisor en publicaciones vinculadas a metodología de la investigación en Argentina.\n\nConcibo el espacio analítico como un lugar de escucha rigurosa y respetuosa, donde es posible hablar sin exigencias ni promesas de bienestar inmediato, y donde cada proceso se construye a su propio tiempo.\n\nTe escucho.",
        },
        services: {
            title: "Servicios",
            seeMore: "Ver más",
            seeLess: "Ver menos",
            contactWhatsApp: "Contactar por WhatsApp",
            contactEmail: "Contactar por email",
            items: [
                {
                    title: "Psicoanálisis con adultos",
                    description:
                        "El psicoanálisis con adultos es un dispositivo clínico orientado al trabajo con el sufrimiento subjetivo, la angustia y los conflictos que se expresan de distintas maneras en la vida del sujeto.\n\nSe trata de un espacio de palabra y de escucha, en el que cada proceso se construye de manera singular y a su propio tiempo, a partir de lo que el sujeto trae como malestar, sufrimiento o interrogante.\n\nLas sesiones pueden realizarse de manera presencial u online, según el encuadre acordado.",
                    contact: {
                        whatsapp: "+573142793431",
                        email: "psicoanalisis@eduardomontenegro.com"
                    }
                },
                {
                    title: "Supervisión clínica",
                    description:
                        "La supervisión clínica es un espacio de trabajo dirigido a psicólogos/as y psicoanalistas que se encuentran ejerciendo la práctica clínica y desean interrogar su quehacer, sus impasses y sus decisiones.\n\nConsiste en un dispositivo de lectura clínica que permite situar la posición del analista, el lugar de la transferencia y los efectos de la intervención.\n\nLa supervisión se orienta por el caso, por lo singular de cada encuentro clínico y por las preguntas que allí emergen. Modalidad online o presencial, según encuadre.",
                    contact: {
                        email: "formacion@eduardomontenegro.com"
                    }
                },
                {
                    title: "Grupo de estudio",
                    description:
                        "El grupo de estudio propone un espacio de lectura y discusión clínica en torno al primer encuentro del sujeto con el analista, desde una orientación lacaniana.\n\nSe trabajarán los modos de llegada a la consulta, la formulación de la demanda, la instalación del dispositivo analítico y los primeros efectos de la transferencia.\n\nEl trabajo se realizará a partir de los textos de Sigmund Freud, los seminarios de Jacques Lacan, y de la discusión clínica. Está dirigido a estudiantes avanzados y profesionales interesados en interrogar la clínica en su punto de inicio. Modalidad online, frecuencia quincenal, miércoles de 9 a 11 a.m. (hora Colombia).",
                    contact: {
                        email: "formacion@eduardomontenegro.com"
                    }
                }
            ],
        },
        contact: {
            title: "Let's start a project together",
            name: "What is your name?",
            namePlaceholder: "Your name",
            email: "What is your Email?",
            emailPlaceholder: "Your email",
            phone: "What phone number?",
            phonePlaceholder: "Your number",
            servicesLabel: "What services are you looking for?",
            servicesPlaceholder: "Your Services",
            message: "Your message",
            messagePlaceholder: "This is a message to Eduardo...",
            send: "Send it",
            contactTitle: "Contact",
            socialMedia: "Social Media",
        },
        faq: {
            title: "Preguntas frecuentes",
            categories: [
                {
                    name: "Sobre psicoanálisis",
                    items: [
                        {
                            question: "¿Qué se entiende por psicoanálisis?",
                            answer: "El psicoanálisis es una práctica clínica orientada por la enseñanza de Freud y Lacan, centrada en la palabra y en la singularidad del sujeto. Se ocupa del sufrimiento, la angustia y los conflictos que se juegan en la experiencia subjetiva del sujeto.",
                        },
                        {
                            question: "¿Cuándo consultar a un psicoanalista?",
                            answer: "Cuando algo del malestar, la angustia o la repetición insiste y no encuentra una vía de elaboración. La consulta no requiere un diagnóstico previo ni una demanda clara, sino la posibilidad de interrogar aquello que irrumpe en la experiencia del sujeto.",
                        },
                        {
                            question: "¿Tiene tiempo definido un análisis?",
                            answer: "No. Un análisis no responde a una duración estándar ni a un número fijo de sesiones. Su tiempo se construye en función del proceso del sujeto, de lo que se pone en juego en la transferencia y de los efectos que allí se producen.",
                        },
                        {
                            question: "¿En qué se diferencia el psicoanálisis de otras prácticas en salud mental?",
                            answer: "El psicoanálisis se orienta por la singularidad del sujeto y por la lectura de lo que se juega en la palabra y en la transferencia. La dirección del tratamiento se construye caso por caso, a partir de lo que emerge en la experiencia clínica y del modo en que cada sujeto se implica en su decir.",
                        },
                        {
                            question: "¿Cómo se establecen los honorarios?",
                            answer: "Los honorarios se establecen en el primer contacto, a partir de un encuadre inicial. Como referencia, el valor por sesión se encuentra entre COP 150.000 y COP 230.000. Para el exterior, entre USD 50 y USD 70 o EUR 45 y EUR 65. El valor concreto se acuerda caso por caso.",
                        },
                    ],
                },
                {
                    name: "Sobre supervisión",
                    items: [
                        {
                            question: "¿En qué momentos es pertinente supervisar un caso?",
                            answer: "La supervisión resulta pertinente cuando el analista se encuentra con impasses, dudas, efectos inesperados de la intervención o interrogantes clínicos. No responde únicamente a dificultades técnicas, sino a la lectura de la posición del analista en el caso.",
                        },
                        {
                            question: "¿La supervisión tiene una frecuencia establecida?",
                            answer: "La frecuencia de la supervisión no es fija. Se establece según el encuadre acordado, las características del caso y del profesional. Puede ser regular o puntual, dependiendo del momento clínico y de la demanda de supervisión.",
                        },
                        {
                            question: "¿Qué material se trabaja en una supervisión clínica?",
                            answer: "Se trabaja a partir de lo que llama la atención al analista del caso: sus intervenciones, su angustia, los impasses, las preguntas clínicas y los efectos de la transferencia.",
                        },
                        {
                            question: "¿Cuáles son los honorarios de la supervisión clínica?",
                            answer: "Los honorarios de supervisión clínica son COP 100.000 por encuentro. Para el exterior, USD 30 o EUR 25. La modalidad puede ser online o presencial, según el encuadre acordado.",
                        },
                    ],
                },
                {
                    name: "Sobre grupo de estudio",
                    items: [
                        {
                            question: "¿En qué consiste un grupo de estudio en psicoanálisis?",
                            answer: "Es un espacio de lectura, discusión y trabajo conceptual orientado por el psicoanálisis, desde una perspectiva clínica. El grupo se centra en textos y problemas específicos, privilegiando la elaboración colectiva y el intercambio riguroso entre los participantes.",
                        },
                        {
                            question: "¿Cuál es la duración del grupo de estudio?",
                            answer: "El grupo de estudio tiene una duración definida de veinte encuentros, con una frecuencia quincenal. Cada encuentro tiene una duración de dos horas. El recorrido se organiza en un tiempo delimitado, orientado al trabajo riguroso sobre el tema propuesto.",
                        },
                        {
                            question: "¿Cuántos integrantes puede tener un grupo de estudio?",
                            answer: "El grupo de estudio tiene un cupo reducido. Está conformado por un máximo de seis participantes, más el coordinador, con el fin de sostener un espacio de trabajo riguroso, clínico y de intercambio efectivo.",
                        },
                        {
                            question: "¿Cuáles son los honorarios del grupo de estudio?",
                            answer: "Los honorarios del grupo de estudio son COP 100.000 por encuentro. Para el exterior, USD 30 o EUR 25. La modalidad es online.",
                        },
                    ],
                },
            ],
        },
        footer: {
            socialMedia: "Social Media",
        },
    },
    en: {
        nav: {
            about: "About",
            services: "Services",
            faq: "FAQ",
            contact: "Contact",
        },
        hero: {
            title: "PSYCHOLOGIST - PSYCHOANALYST",
            subtitle: "Specialist. Master in Psychopathology and Mental Health",
        },
        about: {
            title: "About me",
            title1: "About",
            title2: "me",
            description:
                "I am a psychologist and psychoanalyst, with a specialization and master's degree in Psychopathology and Mental Health. For eleven years I have been working in the clinical field with adults, accompanying those who go through different forms of subjective suffering.\n\nMy practice focuses on working with what erupts and finds no words: persistent discomfort, losses, grief, the marks of sexual abuse and other experiences that leave a trace in psychic life. I work from psychoanalysis, understanding that each subject is unique and that there are no universal solutions to what one suffers.",
        },
        profile: {
            title: "Profile",
            title1: "My",
            title2: "Profile",
            description:
                "I am currently a university professor and direct the area of social outreach at UNICOC (Colombia), spaces from which I continue to question the clinic, suffering and contemporary discourses on mental health.\n\nI have developed my clinical work both in person and online, serving people in different countries of America and Europe. In parallel, I have actively participated in academic and research spaces: I was secretary of the Research Department of IUSAM-APdeBA until 2021, I was part of the editorial board of the Argentine Journal of Humanities and Social Sciences, and I participated as a reviewer in publications related to research methodology in Argentina.\n\nI conceive the analytical space as a place of rigorous and respectful listening, where it is possible to speak without demands or promises of immediate well-being, and where each process is built in its own time.\n\nI listen to you.",
        },
        services: {
            title: "I can help you with ...",
            items: [
                {
                    title: "Online Psychotherapy",
                    description:
                        "Taking a different path from the one that led you to your current situation is possible. From Psychoanalysis, a listening space is offered where you can speak, accompanying you in the process of going through and transforming what causes you suffering.",
                },
                {
                    title: "Clinical Supervision - professionals",
                    description:
                        "Taking a different path from the one that led you to your current situation is possible. From Psychoanalysis, a listening space is offered where you can speak, accompanying you in the process of going through and transforming what causes you suffering.",
                },
                {
                    title: "Clinical Supervision - professionals",
                    description:
                        "Taking a different path from the one that led you to your current situation is possible. From Psychoanalysis, a listening space is offered where you can speak, accompanying you in the process of going through and transforming what causes you suffering.",
                },
            ],
        },
        contact: {
            title: "Let's start a project together",
            name: "What is your name?",
            namePlaceholder: "Your name",
            email: "What is your Email?",
            emailPlaceholder: "Your email",
            phone: "What phone number?",
            phonePlaceholder: "Your number",
            servicesLabel: "What services are you looking for?",
            servicesPlaceholder: "Your Services",
            message: "Your message",
            messagePlaceholder: "This is a message to Eduardo...",
            send: "Send it",
            contactTitle: "Contact",
            socialMedia: "Social Media",
        },
        faq: {
            title: "Frequently asked questions",
            categories: [
                {
                    name: "About psychoanalysis",
                    items: [
                        {
                            question: "What is psychoanalysis?",
                            answer: "Psychoanalysis is a clinical practice guided by the teachings of Freud and Lacan, centered on the word and the singularity of the subject. It deals with suffering, anxiety and conflicts that play out in the subjective experience.",
                        },
                        {
                            question: "When to consult a psychoanalyst?",
                            answer: "When something of the discomfort, anxiety or repetition persists and does not find a way of elaboration. The consultation does not require a prior diagnosis or a clear demand, but the possibility of questioning what erupts in the subject's experience.",
                        },
                        {
                            question: "Does an analysis have a defined time?",
                            answer: "No. An analysis does not respond to a standard duration or a fixed number of sessions. Its time is built according to the subject's process, what is at stake in the transference and the effects that are produced there.",
                        },
                        {
                            question: "How does psychoanalysis differ from other mental health practices?",
                            answer: "Psychoanalysis is guided by the singularity of the subject and by the reading of what is at play in the word and in the transference. The direction of treatment is built case by case, based on what emerges in clinical experience.",
                        },
                        {
                            question: "How are fees established?",
                            answer: "Fees are established at the first contact, based on an initial framework. As a reference, the value per session is between COP 150,000 and COP 230,000. For abroad, between USD 50 and USD 70 or EUR 45 and EUR 65. The specific value is agreed case by case.",
                        },
                    ],
                },
                {
                    name: "About supervision",
                    items: [
                        {
                            question: "When is it appropriate to supervise a case?",
                            answer: "Supervision is relevant when the analyst encounters impasses, doubts, unexpected effects of intervention or clinical questions. It does not respond only to technical difficulties, but to the reading of the analyst's position in the case.",
                        },
                        {
                            question: "Does supervision have an established frequency?",
                            answer: "The frequency of supervision is not fixed. It is established according to the agreed framework, the characteristics of the case and the professional. It can be regular or punctual, depending on the clinical moment and the demand for supervision.",
                        },
                        {
                            question: "What material is worked on in clinical supervision?",
                            answer: "Work is done based on what catches the analyst's attention about the case: their interventions, their anxiety, the impasses, the clinical questions and the effects of the transference.",
                        },
                        {
                            question: "What are the fees for clinical supervision?",
                            answer: "Clinical supervision fees are COP 100,000 per meeting. For abroad, USD 30 or EUR 25. The modality can be online or in-person, according to the agreed framework.",
                        },
                    ],
                },
                {
                    name: "About study group",
                    items: [
                        {
                            question: "What does a psychoanalysis study group consist of?",
                            answer: "It is a space for reading, discussion and conceptual work guided by psychoanalysis, from a clinical perspective. The group focuses on specific texts and problems, privileging collective elaboration and rigorous exchange among participants.",
                        },
                        {
                            question: "What is the duration of the study group?",
                            answer: "The study group has a defined duration of twenty meetings, with a biweekly frequency. Each meeting lasts two hours. The journey is organized in a delimited time, oriented to rigorous work on the proposed topic.",
                        },
                        {
                            question: "How many members can a study group have?",
                            answer: "The study group has a limited capacity. It is made up of a maximum of six participants, plus the coordinator, in order to sustain a rigorous, clinical and effective exchange space.",
                        },
                        {
                            question: "What are the fees for the study group?",
                            answer: "Study group fees are COP 100,000 per meeting. For abroad, USD 30 or EUR 25. The modality is online.",
                        },
                    ],
                },
            ],
        },
        footer: {
            socialMedia: "Social Media",
        },
    },
    fr: {
        nav: {
            about: "À propos",
            services: "Services",
            faq: "FAQ",
            contact: "Contact",
        },
        hero: {
            title: "PSYCHOLOGUE - PSYCHANALYSTE",
            subtitle: "Spécialiste. Maîtrise en Psychopathologie et Santé Mentale",
        },
        about: {
            title: "À propos de moi",
            title1: "À propos",
            title2: "de moi",
            description:
                "Je suis psychologue et psychanalyste, avec une spécialisation et une maîtrise en Psychopathologie et Santé Mentale. Depuis onze ans, je travaille dans le domaine clinique avec des adultes, accompagnant ceux qui traversent différentes formes de souffrance subjective.\n\nMa pratique se concentre sur le travail avec ce qui surgit et ne trouve pas de mots : le malaise persistant, les pertes, les deuils, les marques de l'abus sexuel et d'autres expériences qui laissent une trace dans la vie psychique. Je travaille à partir de la psychanalyse, comprenant que chaque sujet est unique et qu'il n'y a pas de solutions universelles à ce que l'on souffre.",
        },
        profile: {
            title: "Profil",
            title1: "Mon",
            title2: "Profil",
            description:
                "Je suis actuellement professeur universitaire et dirige le domaine de la projection sociale à l'UNICOC (Colombie), espaces à partir desquels je continue à interroger la clinique, la souffrance et les discours contemporains sur la santé mentale.\n\nJ'ai développé mon travail clinique tant en personne qu'en ligne, servant des personnes dans différents pays d'Amérique et d'Europe. En parallèle, j'ai participé activement aux espaces académiques et de recherche : j'ai été secrétaire du Département de Recherche de l'IUSAM-APdeBA jusqu'en 2021, j'ai fait partie du conseil éditorial de la Revue Argentine des Humanités et Sciences Sociales, et j'ai participé en tant que réviseur dans des publications liées à la méthodologie de recherche en Argentine.\n\nJe conçois l'espace analytique comme un lieu d'écoute rigoureuse et respectueuse, où il est possible de parler sans exigences ni promesses de bien-être immédiat, et où chaque processus se construit à son propre rythme.\n\nJe vous écoute.",
        },
        services: {
            title: "Je peux vous aider avec ...",
            items: [
                {
                    title: "Psychothérapie en ligne",
                    description:
                        "Prendre un chemin différent de celui qui vous a conduit à votre situation actuelle est possible. Depuis la Psychanalyse, un espace d'écoute est offert où vous pouvez parler, vous accompagnant dans le processus de traverser et de transformer ce qui vous cause de la souffrance.",
                },
                {
                    title: "Supervision clinique - professionnels",
                    description:
                        "Prendre un chemin différent de celui qui vous a conduit à votre situation actuelle est possible. Depuis la Psychanalyse, un espace d'écoute est offert où vous pouvez parler, vous accompagnant dans le processus de traverser et de transformer ce qui vous cause de la souffrance.",
                },
                {
                    title: "Supervision clinique - professionnels",
                    description:
                        "Prendre un chemin différent de celui qui vous a conduit à votre situation actuelle est possible. Depuis la Psychanalyse, un espace d'écoute est offert où vous pouvez parler, vous accompagnant dans le processus de traverser et de transformer ce qui vous cause de la souffrance.",
                },
            ],
        },
        contact: {
            title: "Commençons un projet ensemble",
            name: "Quel est votre nom?",
            namePlaceholder: "Votre nom",
            email: "Quel est votre Email?",
            emailPlaceholder: "Votre email",
            phone: "Quel numéro de téléphone?",
            phonePlaceholder: "Votre numéro",
            servicesLabel: "Quels services recherchez-vous?",
            servicesPlaceholder: "Vos Services",
            message: "Votre message",
            messagePlaceholder: "Ceci est un message pour Eduardo...",
            send: "Envoyer",
            contactTitle: "Contact",
            socialMedia: "Réseaux Sociaux",
        },
        faq: {
            title: "Questions fréquentes",
            categories: [
                {
                    name: "Sur la psychanalyse",
                    items: [
                        {
                            question: "Qu'est-ce que la psychanalyse?",
                            answer: "La psychanalyse est une pratique clinique guidée par les enseignements de Freud et Lacan, centrée sur la parole et la singularité du sujet. Elle traite de la souffrance, de l'angoisse et des conflits qui se jouent dans l'expérience subjective.",
                        },
                        {
                            question: "Quand consulter un psychanalyste?",
                            answer: "Quand quelque chose du malaise, de l'angoisse ou de la répétition persiste et ne trouve pas de voie d'élaboration. La consultation ne nécessite pas de diagnostic préalable ni de demande claire, mais la possibilité d'interroger ce qui surgit dans l'expérience du sujet.",
                        },
                        {
                            question: "Une analyse a-t-elle une durée définie?",
                            answer: "Non. Une analyse ne répond pas à une durée standard ni à un nombre fixe de séances. Son temps se construit en fonction du processus du sujet, de ce qui se joue dans le transfert et des effets qui s'y produisent.",
                        },
                        {
                            question: "En quoi la psychanalyse diffère-t-elle des autres pratiques de santé mentale?",
                            answer: "La psychanalyse est guidée par la singularité du sujet et par la lecture de ce qui se joue dans la parole et dans le transfert. La direction du traitement se construit au cas par cas, à partir de ce qui émerge dans l'expérience clinique.",
                        },
                        {
                            question: "Comment les honoraires sont-ils établis?",
                            answer: "Les honoraires sont établis lors du premier contact, sur la base d'un cadre initial. À titre de référence, la valeur par séance se situe entre 150 000 et 230 000 COP. Pour l'étranger, entre 50 et 70 USD ou 45 et 65 EUR. La valeur concrète est convenue au cas par cas.",
                        },
                    ],
                },
                {
                    name: "Sur la supervision",
                    items: [
                        {
                            question: "Quand est-il pertinent de superviser un cas?",
                            answer: "La supervision est pertinente lorsque l'analyste rencontre des impasses, des doutes, des effets inattendus de l'intervention ou des questions cliniques. Elle ne répond pas seulement à des difficultés techniques, mais à la lecture de la position de l'analyste dans le cas.",
                        },
                        {
                            question: "La supervision a-t-elle une fréquence établie?",
                            answer: "La fréquence de la supervision n'est pas fixe. Elle s'établit selon le cadre convenu, les caractéristiques du cas et du professionnel. Elle peut être régulière ou ponctuelle, selon le moment clinique et la demande de supervision.",
                        },
                        {
                            question: "Quel matériel travaille-t-on en supervision clinique?",
                            answer: "On travaille à partir de ce qui attire l'attention de l'analyste sur le cas: ses interventions, son angoisse, les impasses, les questions cliniques et les effets du transfert.",
                        },
                        {
                            question: "Quels sont les honoraires de la supervision clinique?",
                            answer: "Les honoraires de supervision clinique sont de 100 000 COP par rencontre. Pour l'étranger, 30 USD ou 25 EUR. La modalité peut être en ligne ou en personne, selon le cadre convenu.",
                        },
                    ],
                },
                {
                    name: "Sur le groupe d'étude",
                    items: [
                        {
                            question: "En quoi consiste un groupe d'étude en psychanalyse?",
                            answer: "C'est un espace de lecture, de discussion et de travail conceptuel guidé par la psychanalyse, d'une perspective clinique. Le groupe se concentre sur des textes et des problèmes spécifiques, privilégiant l'élaboration collective et l'échange rigoureux entre les participants.",
                        },
                        {
                            question: "Quelle est la durée du groupe d'étude?",
                            answer: "Le groupe d'étude a une durée définie de vingt rencontres, avec une fréquence bimensuelle. Chaque rencontre dure deux heures. Le parcours s'organise dans un temps délimité, orienté vers un travail rigoureux sur le thème proposé.",
                        },
                        {
                            question: "Combien de membres peut avoir un groupe d'étude?",
                            answer: "Le groupe d'étude a une capacité limitée. Il est composé d'un maximum de six participants, plus le coordinateur, afin de maintenir un espace de travail rigoureux, clinique et d'échange effectif.",
                        },
                        {
                            question: "Quels sont les honoraires du groupe d'étude?",
                            answer: "Les honoraires du groupe d'étude sont de 100 000 COP par rencontre. Pour l'étranger, 30 USD ou 25 EUR. La modalité est en ligne.",
                        },
                    ],
                },
            ],
        },
        footer: {
            socialMedia: "Réseaux Sociaux",
        },
    },
}

export function getTranslation(lang: Language) {
    return translations[lang]
}
