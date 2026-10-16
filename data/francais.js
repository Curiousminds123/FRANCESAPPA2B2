/* Cours de français A2-C1 : fiches, vocabulaire et exercices */
window.CAMINO = [];

const grammarCourses = [
  {
    lvl: "A2",
    topics: [
      {
        id: "a2-articles", t: "Articles, partitifs et quantités", ic: "🛒",
        focus: "Distinguir «un/le/du» y expresar cantidades sin traducir literalmente del español.",
        rows: [
          ["Un objeto no especificado", "un / une / des", "Je voudrais une pomme.", "Quisiera una manzana."],
          ["Objeto conocido o general", "le / la / l’ / les", "Les pommes sont bonnes pour la santé.", "Las manzanas son buenas para la salud."],
          ["Cantidad no contable", "du / de la / de l’", "Nous achetons du pain et de l’eau.", "Compramos pan y agua."],
          ["Después de una cantidad", "de / d’", "Elle prend beaucoup de légumes.", "Toma muchas verduras."],
          ["Negación de cantidad", "pas de / d’", "Je ne bois pas de café.", "No bebo café."]
        ],
        checks: [
          ["Je voudrais ___ eau, s’il vous plaît.", ["de l’", "du", "une"], 0, "Eau empieza por vocal y lleva el partitivo de l’."],
          ["Nous achetons ___ pain.", ["du", "de la", "des"], 0, "Pain es masculino singular: du pain."],
          ["Elle ne mange pas ___ viande.", ["de", "la", "une"], 0, "En una negación, el partitivo suele convertirse en de."],
          ["Il y a beaucoup ___ magasins ici.", ["de", "des", "du"], 0, "Después de beaucoup se usa de."]
        ],
        words: [["🥖","du pain","pan"],["🧀","du fromage","queso"],["💧","de l’eau","agua"],["🍎","une pomme","una manzana"],["🥕","des légumes","verduras"],["🛍️","un marché","un mercado"]],
        read: "Au marché, Léa achète du pain, des pommes et beaucoup de légumes. Elle prend aussi de l’eau, mais elle ne veut pas de fromage aujourd’hui."
      },
      {
        id: "a2-present", t: "Presente y verbos pronominales", ic: "🔄",
        focus: "Conjugar los verbos frecuentes y colocar el pronombre antes del verbo.",
        rows: [
          ["Verbos en -er", "parler → je parle, nous parlons", "Nous parlons français en classe.", "Hablamos francés en clase."],
          ["Verbos frecuentes", "être, avoir, aller, faire", "Tu fais tes devoirs après le dîner.", "Haces los deberes después de cenar."],
          ["Verbo pronominal", "sujeto + pronombre + verbo", "Elle se lève à sept heures.", "Se levanta a las siete."],
          ["Negación", "ne + pronombre + verbo + pas", "Je ne me couche pas tard.", "No me acuesto tarde."]
        ],
        checks: [
          ["Chaque matin, je ___ à sept heures. (se lever)", ["me lève", "se lève", "m’lever"], 0, "Con je, el pronombre reflexivo es me."],
          ["Nous ___ au travail en bus. (aller)", ["allons", "allez", "vont"], 0, "Aller: nous allons."],
          ["Tu ___ tes devoirs le soir. (faire)", ["fais", "fait", "faisons"], 0, "Faire: tu fais."],
          ["Il ___ pas de café le soir.", ["ne boit", "n’est boire", "pas boit"], 0, "La negación rodea al verbo conjugado: ne boit pas."]
        ],
        words: [["⏰","se réveiller","despertarse"],["🚿","se doucher","ducharse"],["🍳","préparer le petit-déjeuner","preparar el desayuno"],["🚌","prendre le bus","coger el autobús"],["💼","travailler","trabajar"],["🌙","se coucher","acostarse"]],
        read: "Je me réveille à six heures et demie. Je me douche, puis je prends le bus pour aller au travail. Le soir, je ne me couche pas avant onze heures."
      },
      {
        id: "a2-passe-compose", t: "Passé composé avec avoir et être", ic: "⏮️",
        focus: "Relatar acciones terminadas: auxiliar en presente + participio pasado.",
        rows: [
          ["La mayoría de los verbos", "avoir + participe passé", "J’ai visité le musée hier.", "Visité el museo ayer."],
          ["Movimiento y cambio de estado", "être + participe passé", "Elles sont arrivées à midi.", "Llegaron al mediodía."],
          ["Con être", "el participio concuerda", "Paul est parti ; Léa est partie.", "Paul se fue; Léa se fue."],
          ["Negación", "ne + auxiliar + pas + participio", "Nous n’avons pas oublié les clés.", "No olvidamos las llaves."]
        ],
        checks: [
          ["Hier, nous ___ un film. (regarder)", ["avons regardé", "sommes regardés", "regardions"], 0, "Regarder usa avoir: nous avons regardé."],
          ["Marie ___ à huit heures. (arriver)", ["est arrivée", "a arrivé", "est arrivé"], 0, "Arriver usa être y el participio concuerda con Marie."],
          ["Ils ___ le train. (prendre)", ["ont pris", "sont pris", "ont prendu"], 0, "Prendre forma el participio irregular pris."],
          ["Je ___ pas sorti hier.", ["ne suis", "n’ai", "ne vais"], 0, "Sortir usa être cuando significa salir."]
        ],
        words: [["🎬","j’ai regardé","vi"],["🚆","elle est partie","se fue"],["🏠","nous sommes rentrés","volvimos a casa"],["🛍️","ils ont acheté","compraron"],["📞","tu as appelé","llamaste"],["🍽️","on a dîné","cenamos"]],
        read: "Samedi, nous sommes partis tôt et nous avons visité un village près de Lyon. Léa a pris des photos. Nous sommes rentrés le soir, mais nous n’avons pas dîné au restaurant."
      },
      {
        id: "a2-imparfait", t: "Imparfait: hábitos y descripciones", ic: "🕰️",
        focus: "Describir el contexto y los hábitos del pasado con la raíz de nous en presente.",
        rows: [
          ["Formación regular", "raíz de nous + -ais, -ait, -ions…", "Quand j’étais petit, je jouais au parc.", "Cuando era pequeño, jugaba en el parque."],
          ["Descripción", "être → ét- + terminaciones", "La maison était grande.", "La casa era grande."],
          ["Hábito", "imparfait", "Nous allions souvent à la mer.", "Íbamos a menudo al mar."],
          ["Acontecimiento puntual", "passé composé", "Un jour, il a rencontré Inès.", "Un día conoció a Inès."]
        ],
        checks: [
          ["Quand j’étais enfant, je ___ au tennis. (jouer)", ["jouais", "ai joué", "jouerai"], 0, "Un hábito pasado se expresa con imparfait."],
          ["La ville ___ plus calme avant. (être)", ["était", "a été", "sera"], 0, "Être es irregular: j’étais, tu étais, il était."],
          ["Nous ___ chez nos grands-parents chaque été. (aller)", ["allions", "sommes allés", "irons"], 0, "Chaque été indica un hábito: imparfait."],
          ["Tout à coup, le téléphone ___. (sonner)", ["a sonné", "sonnait", "sonnera"], 0, "Un acontecimiento puntual que interrumpe se pone en passé composé."]
        ],
        words: [["🧒","quand j’étais petit","cuando era pequeño"],["🔁","chaque été","cada verano"],["🌧️","il pleuvait","llovía"],["🏡","la maison était","la casa era"],["📖","je lisais","leía"],["⚡","tout à coup","de repente"]],
        read: "Quand Nora était enfant, elle habitait à la campagne. Elle allait à l’école à pied et jouait avec ses voisins. Un matin, elle a trouvé un petit chat devant la porte."
      },
      {
        id: "a2-futur", t: "Futur proche y futur simple", ic: "🔮",
        focus: "Elegir entre un plan próximo y una predicción o un compromiso futuro.",
        rows: [
          ["Plan próximo", "aller au présent + infinitif", "Ce soir, nous allons cuisiner.", "Esta noche vamos a cocinar."],
          ["Futuro simple regular", "infinitivo + terminaciones", "Demain, tu parleras à Zoé.", "Mañana hablarás con Zoé."],
          ["Raíces irregulares", "être → ser-, avoir → aur-, aller → ir-", "J’aurai plus de temps lundi.", "Tendré más tiempo el lunes."],
          ["Predicción", "futur simple", "Il fera beau demain.", "Mañana hará buen tiempo."]
        ],
        checks: [
          ["Ce week-end, nous ___ visiter le château. (aller)", ["allons", "avons", "sommes"], 0, "Futur proche: aller en presente + infinitivo."],
          ["Demain, vous ___ vos amis. (voir, futur)", ["verrez", "voyez", "avez vu"], 0, "Futuro simple de voir: vous verrez."],
          ["Elle ___ à la maison à six heures. (être, futur)", ["sera", "est", "serait"], 0, "La raíz irregular de être en futuro es ser-."],
          ["J’___ assez d’argent pour le billet. (avoir, futur)", ["aurai", "ai", "avais"], 0, "La raíz de avoir en futuro es aur-."]
        ],
        words: [["📅","demain","mañana"],["🔜","bientôt","pronto"],["✈️","je vais partir","voy a salir"],["🔮","il fera beau","hará buen tiempo"],["🤝","nous viendrons","vendremos"],["🗓️","la semaine prochaine","la semana que viene"]],
        read: "La semaine prochaine, Malik va rendre visite à sa sœur à Nantes. Il prendra le train vendredi soir. Ils dîneront ensemble et iront au musée samedi."
      },
      {
        id: "a2-pronouns", t: "Pronombres COD y COI", ic: "🧩",
        focus: "Sustituir complementos para evitar repeticiones y colocarlos antes del verbo.",
        rows: [
          ["Complemento directo", "me, te, le/la, nous, vous, les", "Tu connais Paul ? Oui, je le connais.", "¿Conoces a Paul? Sí, lo conozco."],
          ["Complemento indirecto", "me, te, lui, nous, vous, leur", "Elle téléphone à ses parents : elle leur téléphone.", "Llama a sus padres: les llama."],
          ["Posición", "pronombre + verbo conjugado", "Je les invite ce soir.", "Los invito esta noche."],
          ["Con infinitivo", "pronombre + infinitivo", "Je vais lui répondre.", "Voy a responderle."]
        ],
        checks: [
          ["Tu vois Marie ? Oui, je ___ vois.", ["la", "lui", "leur"], 0, "Marie es complemento directo femenino: la."],
          ["Il parle à son frère ? Oui, il ___ parle.", ["lui", "le", "la"], 0, "À son frère es indirecto: lui."],
          ["Vous aimez ces chansons ? Oui, nous ___ aimons.", ["les", "leur", "lui"], 0, "Ces chansons es complemento directo plural: les."],
          ["Je vais téléphoner à mes parents. → Je vais ___ téléphoner.", ["leur", "les", "lui"], 0, "À mes parents requiere el pronombre indirecto leur."]
        ],
        words: [["👀","le voir","verlo"],["📞","lui téléphoner","llamarle"],["🎁","leur offrir un cadeau","regalarles algo"],["✉️","lui écrire","escribirle"],["🤝","les inviter","invitarlos"],["💬","leur répondre","responderles"]],
        read: "Lina a deux amis à Paris. Elle les appelle chaque semaine et leur envoie des photos. Ce week-end, elle va leur rendre visite."
      },
      {
        id: "a2-questions", t: "Preguntas, negación y orden", ic: "❓",
        focus: "Formular preguntas frecuentes y colocar correctamente las partículas negativas.",
        rows: [
          ["Pregunta coloquial", "intonación + frase afirmativa", "Tu habites où ?", "¿Dónde vives?"],
          ["Pregunta neutra", "est-ce que + frase", "Est-ce que vous travaillez ici ?", "¿Trabaja usted aquí?"],
          ["Pregunta formal", "inversión verbo-sujeto", "Avez-vous une réservation ?", "¿Tiene una reserva?"],
          ["Negación básica", "ne + verbo + pas", "Je ne comprends pas.", "No entiendo."]
        ],
        checks: [
          ["___ vous habitez à Marseille ?", ["Est-ce que", "Qu’est-ce", "Est-ce"], 0, "Est-ce que introduce una pregunta neutra."],
          ["Je ___ parle ___ italien.", ["ne / pas", "pas / ne", "n’est / pas"], 0, "La negación rodea al verbo conjugado."],
          ["___ est votre adresse ?", ["Quelle", "Quel", "Quels"], 0, "Adresse es femenino: quelle adresse."],
          ["___-vous un billet ? (avoir)", ["Avez", "Est", "Êtes"], 0, "En inversión formal: Avez-vous… ?"]
        ],
        words: [["❓","où ?","¿dónde?"],["⏰","quand ?","¿cuándo?"],["👤","qui ?","¿quién?"],["💶","combien ?","¿cuánto?"],["🚫","ne… pas","no"],["🔎","pourquoi ?","¿por qué?"]],
        read: "« Est-ce que vous avez une table pour deux ? » demande Hugo. Le serveur répond : « Oui, bien sûr. Vous ne préférez pas la terrasse ? »"
      },
      {
        id: "a2-comparison", t: "Comparativos y superlativos", ic: "⚖️",
        focus: "Comparar cualidades, cantidades y acciones.",
        rows: [
          ["Superioridad", "plus + adjectif + que", "Ce train est plus rapide que le bus.", "Este tren es más rápido que el autobús."],
          ["Inferioridad", "moins + adjectif + que", "Le vélo est moins cher que la voiture.", "La bicicleta es menos cara que el coche."],
          ["Igualdad", "aussi + adjectif + que", "Léa est aussi grande que sa sœur.", "Léa es tan alta como su hermana."],
          ["Superlativo", "le/la/les plus ou moins", "C’est le quartier le plus calme.", "Es el barrio más tranquilo."]
        ],
        checks: [
          ["Le métro est ___ rapide ___ le bus.", ["plus / que", "aussi / comme", "très / que"], 0, "La comparación de superioridad usa plus… que."],
          ["Cette chambre est ___ grande que la mienne.", ["aussi", "autant", "très"], 0, "Con adjetivo: aussi… que."],
          ["C’est ___ restaurant le moins cher.", ["le", "la", "les"], 0, "Restaurant es masculino singular: le moins cher."],
          ["Il travaille ___ que moi. (mucho)", ["plus", "meilleur", "mieux de"], 0, "Con un verbo, se compara la cantidad con plus."]
        ],
        words: [["🏙️","plus grand que","más grande que"],["🚲","moins cher que","menos caro que"],["🟰","aussi… que","tan… como"],["🏆","le meilleur","el mejor"],["⭐","le plus intéressant","el más interesante"],["📊","autant de… que","tanto… como"]],
        read: "Le train est plus rapide que le car, mais il est aussi plus cher. Pour visiter le centre, le vélo est le moyen de transport le moins pratique."
      }
    ]
  },
  {
    lvl: "B1",
    topics: [
      {
        id: "b1-past", t: "Narración: passé composé e imparfait", ic: "📚",
        focus: "Combinar el acontecimiento principal con el contexto y las acciones en curso.",
        rows: [
          ["Acción terminada", "passé composé", "Le train est arrivé à neuf heures.", "El tren llegó a las nueve."],
          ["Contexto o descripción", "imparfait", "Il pleuvait et les rues étaient vides.", "Llovía y las calles estaban vacías."],
          ["Acción en curso interrumpida", "imparfait + quand + passé composé", "Je dormais quand tu as appelé.", "Dormía cuando llamaste."],
          ["Acciones sucesivas", "passé composé", "Elle est entrée, a posé son sac et s’est assise.", "Entró, dejó el bolso y se sentó."]
        ],
        checks: [
          ["Je ___ quand le téléphone ___. (dormir / sonner)", ["dormais / a sonné", "ai dormi / sonnait", "dormais / sonnait"], 0, "La acción en curso va en imparfait; la interrupción, en passé composé."],
          ["Hier, nous ___ le musée. (visiter)", ["avons visité", "visitions", "visiterons"], 0, "Una visita terminada y fechada se expresa con passé composé."],
          ["Il ___ froid et la neige ___. (faire / tomber)", ["faisait / tombait", "a fait / est tombée", "fera / tombe"], 0, "El tiempo y el contexto descriptivo suelen ir en imparfait."],
          ["Soudain, elle ___ la porte. (ouvrir)", ["a ouvert", "ouvrait", "ouvrira"], 0, "Soudain presenta un acontecimiento puntual."]
        ],
        words: [["🌧️","il pleuvait","llovía"],["⚡","soudain","de repente"],["🕰️","pendant que","mientras"],["🚪","elle est entrée","entró"],["📞","quand tu as appelé","cuando llamaste"],["🔁","à cette époque","en aquella época"]],
        read: "Il pleuvait quand Camille est sortie du bureau. Elle cherchait un taxi lorsque son collègue l’a appelée. Ils ont partagé un parapluie et sont rentrés ensemble."
      },
      {
        id: "b1-plus-que-parfait", t: "Plus-que-parfait y anterioridad", ic: "⏪",
        focus: "Situar una acción antes de otra acción pasada: imparfait de avoir/être + participio.",
        rows: [
          ["Formación", "avoir / être en imparfait + participe passé", "J’avais déjà mangé.", "Ya había comido."],
          ["Acción anterior", "plus-que-parfait", "Le film avait commencé avant notre arrivée.", "La película había empezado antes de que llegáramos."],
          ["Avec être", "acuerdo con el sujeto", "Elles étaient parties tôt.", "Se habían marchado temprano."],
          ["Narración", "plus-que-parfait + passé composé", "Il avait oublié son billet, alors il est rentré.", "Había olvidado el billete, así que volvió."]
        ],
        checks: [
          ["Quand je suis arrivé, le cours ___ déjà ___. (commencer)", ["avait / commencé", "a / commencé", "était / commençait"], 0, "La clase empezó antes de mi llegada: plus-que-parfait."],
          ["Elles ___ avant la fin du concert. (partir)", ["étaient parties", "avaient parti", "sont parties"], 0, "Partir usa être y concuerda con elles."],
          ["Tu ___ déjà ce film ? (voir)", ["avais vu", "as voyé", "étais vu"], 0, "Plus-que-parfait de voir: tu avais vu."],
          ["Il ___ les clés ; il est retourné chez lui. (oublier)", ["avait oublié", "a oublié", "oubliait"], 0, "El olvido antecede al regreso narrado."]
        ],
        words: [["⏪","avant de partir","antes de irse"],["✅","déjà","ya"],["🔙","la veille","la víspera"],["🧳","elle était partie","se había ido"],["📅","auparavant","anteriormente"],["🔑","il avait oublié","había olvidado"]],
        read: "Quand nous sommes arrivés à la gare, le train était déjà parti. Nous avions acheté les billets la veille, mais nous avions mal lu l’horaire."
      },
      {
        id: "b1-future-conditional", t: "Futuro simple y condicional", ic: "🔮",
        focus: "Hacer predicciones, promesas, hipótesis y peticiones corteses.",
        rows: [
          ["Futuro", "infinitivo + ai, as, a, ons, ez, ont", "Je terminerai ce rapport demain.", "Terminaré este informe mañana."],
          ["Raíces irregulares", "ser-, aur-, ir-, fer-, viendr-", "Nous viendrons vous aider.", "Vendremos a ayudarles."],
          ["Condición posible", "si + presente → futur", "Si tu veux, nous partirons tôt.", "Si quieres, saldremos temprano."],
          ["Cortesía / hipótesis", "raíz del futuro + terminaciones del imparfait", "Pourriez-vous répéter ?", "¿Podría repetir?"]
        ],
        checks: [
          ["Si vous ___, nous ___ ensemble. (vouloir / partir)", ["voulez / partirons", "voudrez / partons", "vouliez / partions"], 0, "Después de si de condición real se usa presente, no futuro."],
          ["Demain, elle ___ la réponse. (recevoir)", ["recevra", "reçoit", "recevrait"], 0, "Futuro de recevoir: elle recevra."],
          ["Je ___ vous poser une question ? (pouvoir, cortesía)", ["pourrais", "pourrai", "pouvais"], 0, "El condicional suaviza una petición."],
          ["Ils ___ plus tard. (venir, futuro)", ["viendront", "veniront", "viennent"], 0, "La raíz de venir en futuro es viendr-."]
        ],
        words: [["📆","demain","mañana"],["🗓️","à l’avenir","en el futuro"],["🤝","nous viendrons","vendremos"],["🙏","pourriez-vous… ?","¿podría…?"],["💭","je voudrais","quisiera"],["🔮","il fera","hará"]],
        read: "Si la météo est bonne demain, nous partirons à l’aube. Nous visiterons le vieux port, puis nous pourrions déjeuner au marché."
      },
      {
        id: "b1-subjunctive", t: "Subjuntivo presente: deseo y necesidad", ic: "🌱",
        focus: "Usar el subjuntivo tras expresiones de voluntad, sentimiento, duda y necesidad.",
        rows: [
          ["Deseo o voluntad", "vouloir que + subjonctif", "Je veux que tu viennes.", "Quiero que vengas."],
          ["Necesidad", "il faut que + subjonctif", "Il faut que nous finissions.", "Tenemos que terminar."],
          ["Emoción", "être heureux que + subjonctif", "Je suis contente qu’elle soit là.", "Me alegra que esté aquí."],
          ["Opinión afirmativa", "penser que + indicatif", "Je pense qu’il a raison.", "Creo que tiene razón."]
        ],
        checks: [
          ["Il faut que tu ___ tes devoirs. (faire)", ["fasses", "fais", "feras"], 0, "Il faut que exige el subjuntivo: que tu fasses."],
          ["Je voudrais qu’ils ___ plus tôt. (venir)", ["viennent", "viennent de", "viendront"], 0, "La voluntad sobre otro sujeto suele llevar subjuntivo."],
          ["Je pense qu’elle ___ raison. (avoir)", ["a", "ait", "ait eu"], 0, "En una afirmación de opinión se usa normalmente indicativo."],
          ["Je suis contente que vous ___ avec nous. (être)", ["soyez", "êtes", "serez"], 0, "Emoción + que requiere subjuntivo: soyez."]
        ],
        words: [["🙏","je souhaite que","deseo que"],["📌","il faut que","hay que que"],["😊","je suis ravi(e) que","me alegra que"],["❓","je doute que","dudo que"],["🚫","il est dommage que","es una pena que"],["🧠","je pense que","creo que"]],
        read: "La directrice souhaite que chaque équipe propose une idée. Il faut que nous soyons prêts vendredi, même si certains doutent que le délai soit suffisant."
      },
      {
        id: "b1-relatives", t: "Pronombres relativos: qui, que, où, dont", ic: "🧷",
        focus: "Unir frases y evitar repetir el antecedente.",
        rows: [
          ["Sujeto", "qui + verbo", "C’est une collègue qui parle italien.", "Es una compañera que habla italiano."],
          ["Complemento directo", "que + sujeto + verbo", "Le livre que tu lis est passionnant.", "El libro que lees es apasionante."],
          ["Lugar o tiempo", "où + sujeto + verbo", "Le village où je suis né est petit.", "El pueblo donde nací es pequeño."],
          ["Complemento con de", "dont + sujeto + verbo", "Le projet dont je parle est terminé.", "El proyecto del que hablo ha terminado."]
        ],
        checks: [
          ["C’est le voisin ___ répare mon vélo.", ["qui", "que", "dont"], 0, "El pronombre es sujeto de répare: qui."],
          ["Voici la photo ___ j’ai prise hier.", ["que", "qui", "où"], 0, "La foto es complemento directo de prendre: que."],
          ["C’est le café ___ nous nous retrouvons.", ["où", "dont", "que"], 0, "Para un lugar se usa où."],
          ["C’est le sujet ___ elle parle souvent.", ["dont", "qui", "où"], 0, "Parler de quelque chose: dont."]
        ],
        words: [["👤","qui","que / quien (sujeto)"],["📘","que","que (objeto)"],["📍","où","donde / cuando"],["🧩","dont","del que / cuyo"],["🗣️","parler de","hablar de"],["🔗","relier deux phrases","unir dos frases"]],
        read: "Nous visitons une association qui aide les nouveaux arrivants. Le centre où elle travaille propose des cours dont les habitants parlent avec enthousiasme."
      },
      {
        id: "b1-y-en", t: "Pronombres y y en", ic: "📍",
        focus: "Sustituir complementos introducidos por à, de y expresiones de lugar.",
        rows: [
          ["Lugar introducido por à / dans", "y", "Tu vas à la bibliothèque ? Oui, j’y vais.", "¿Vas a la biblioteca? Sí, voy."],
          ["Cosa con de", "en", "Tu as besoin de temps ? Oui, j’en ai besoin.", "¿Necesitas tiempo? Sí, lo necesito."],
          ["Cantidad", "en + cantidad", "Vous avez trois billets ? Oui, nous en avons trois.", "¿Tienen tres billetes? Sí, tenemos tres."],
          ["Posición", "pronombre antes del verbo", "Elle en parle souvent.", "Habla de ello a menudo."]
        ],
        checks: [
          ["Tu vas au marché ? Oui, j’___ vais.", ["y", "en", "le"], 0, "Y sustituye un complemento de lugar introducido por à."],
          ["Tu as du café ? Oui, j’___ ai.", ["en", "y", "le"], 0, "En sustituye du café."],
          ["Elle pense à son examen ; elle ___ pense souvent.", ["y", "en", "lui"], 0, "Penser à quelque chose se sustituye con y."],
          ["Vous avez des enfants ? Oui, nous ___ avons deux.", ["en", "y", "les"], 0, "En conserva la cantidad: nous en avons deux."]
        ],
        words: [["📍","y aller","ir allí"],["💭","y penser","pensar en ello"],["☕","en prendre","tomar algo de ello"],["🗣️","en parler","hablar de ello"],["🛍️","en acheter trois","comprar tres"],["❓","il y en a","hay (de ellos)"]],
        read: "Est-ce que tu vas à la médiathèque ? J’y vais cet après-midi. J’emprunterai deux romans et j’en parlerai à ma sœur."
      },
      {
        id: "b1-discourse", t: "Conectores y estilo indirecto", ic: "🔗",
        focus: "Organizar una explicación, expresar causa y consecuencia, y transmitir palabras.",
        rows: [
          ["Añadir una idea", "de plus, également", "Le trajet est court ; de plus, il est agréable.", "El trayecto es corto y, además, agradable."],
          ["Causa", "parce que, puisque, grâce à", "Nous sommes partis tôt parce qu’il faisait chaud.", "Salimos pronto porque hacía calor."],
          ["Consecuencia", "donc, alors, c’est pourquoi", "Le train est annulé, donc nous prenons le bus.", "El tren se ha cancelado, así que cogemos el autobús."],
          ["Estilo indirecto", "dire que + frase; demander si…", "Elle dit qu’elle arrivera demain.", "Dice que llegará mañana."]
        ],
        checks: [
          ["Il pleut ; ___, le match est annulé.", ["par conséquent", "bien que", "pourtant"], 0, "Par conséquent introduce una consecuencia."],
          ["___ son expérience, elle a trouvé un emploi.", ["Grâce à", "Malgré", "Donc"], 0, "Grâce à introduce una causa positiva."],
          ["Paul dit : « Je suis prêt. » → Paul dit qu’il ___ prêt.", ["est", "soit", "était"], 0, "En estilo indirecto presente: il est prêt."],
          ["Elle demande : « Tu viens ? » → Elle demande ___ je viens.", ["si", "que", "où"], 0, "Una pregunta sí/no indirecta se introduce con si."]
        ],
        words: [["➕","de plus","además"],["➡️","par conséquent","por consiguiente"],["🧠","puisque","puesto que"],["⚖️","pourtant","sin embargo"],["💬","elle affirme que","afirma que"],["❓","demander si","preguntar si"]],
        read: "Le musée était fermé ; par conséquent, nous avons changé nos plans. Le guide a expliqué que l’exposition rouvrirait le lendemain."
      },
      {
        id: "b1-imperative", t: "Imperativo, consejos y obligación", ic: "👉",
        focus: "Dar instrucciones, recomendaciones y expresar lo que hay que hacer.",
        rows: [
          ["Imperativo afirmativo", "presente sin sujeto", "Prenez la première rue à droite.", "Tome la primera calle a la derecha."],
          ["Consejo", "tu devrais / vous devriez + infinitivo", "Tu devrais te reposer.", "Deberías descansar."],
          ["Obligación", "devoir / il faut + infinitivo", "Il faut réserver à l’avance.", "Hay que reservar con antelación."],
          ["Prohibición", "ne + imperativo + pas", "N’oubliez pas vos papiers !", "¡No olvides tus documentos!"]
        ],
        checks: [
          ["___ cette rue jusqu’à la place. (continuer, vous)", ["Continuez", "Continuer", "Continue"], 0, "Para vous, el imperativo es continuez."],
          ["À ta place, je ___ en parler au médecin.", ["devrais", "dois de", "faudrait"], 0, "Je devrais + infinitivo expresa consejo."],
          ["Il ___ présenter une pièce d’identité.", ["faut", "doit de", "est fallu"], 0, "Il faut + infinitivo expresa obligación general."],
          ["___ pas oublier le rendez-vous !", ["N’oublie", "Ne oublies", "N’oublier"], 0, "Imperativo negativo: ne + forma verbal + pas."]
        ],
        words: [["🗺️","tournez à gauche","gire a la izquierda"],["🛑","arrêtez-vous","pare"],["💡","tu devrais","deberías"],["📌","il faut","hay que"],["🚫","n’oubliez pas","no olviden"],["🙏","veuillez patienter","haga el favor de esperar"]],
        read: "Pour visiter le parc, prenez l’entrée principale et suivez les panneaux bleus. N’oubliez pas votre billet. Vous devriez arriver avant midi."
      }
    ]
  },
  {
    lvl: "B2",
    topics: [
      {
        id: "b2-subjunctive", t: "Subjuntivo: valoración, duda y concesión", ic: "🎚️",
        focus: "Distinguir el indicativo factual del subjuntivo exigido por valoración, duda y finalidad.",
        rows: [
          ["Certeza afirmada", "indicatif", "Je sais qu’elle vient.", "Sé que viene."],
          ["Duda o negación", "subjonctif", "Je ne crois pas qu’il ait raison.", "No creo que tenga razón."],
          ["Valoración", "il est essentiel que + subjonctif", "Il est essentiel que chacun participe.", "Es esencial que todos participen."],
          ["Concesión y finalidad", "bien que / afin que + subjonctif", "Bien qu’il soit tard, nous continuons.", "Aunque es tarde, seguimos."]
        ],
        checks: [
          ["Bien qu’elle ___ fatiguée, elle continue.", ["soit", "est", "sera"], 0, "Bien que exige subjuntivo."],
          ["Je suis certain qu’ils ___ à l’heure.", ["arriveront", "arrivent", "arrivent que"], 0, "La certeza afirmada lleva indicativo."],
          ["Il faut que nous ___ une décision. (prendre)", ["prenions", "prenons", "prendrons"], 0, "Prendre en subjuntivo: que nous prenions."],
          ["Je doute qu’il ___ les conséquences. (comprendre)", ["comprenne", "comprend", "comprendra"], 0, "Douter que introduce subjuntivo."]
        ],
        words: [["⚖️","bien que","aunque"],["🎯","afin que","para que"],["❓","il est douteux que","es dudoso que"],["✅","il est certain que","es seguro que"],["📌","il est essentiel que","es esencial que"],["🧭","à condition que","a condición de que"]],
        read: "Bien que le projet soit ambitieux, le comité estime qu’il est réalisable. Il est essentiel que chaque partenaire respecte ses engagements afin que l’équipe puisse avancer."
      },
      {
        id: "b2-conditionals", t: "Condicionales y estructuras con si", ic: "🔀",
        focus: "Relacionar condición y resultado posibles, hipotéticos o irreales.",
        rows: [
          ["Real y posible", "si + présent → présent / futur / impératif", "Si tu acceptes, nous commencerons demain.", "Si aceptas, empezaremos mañana."],
          ["Hipótesis presente", "si + imparfait → conditionnel présent", "Si j’avais le choix, je partirais.", "Si pudiera elegir, me iría."],
          ["Hipótesis pasada", "si + plus-que-parfait → conditionnel passé", "Si elle avait su, elle serait venue.", "Si lo hubiera sabido, habría venido."],
          ["Condición formal", "à condition de + infinitif", "Vous pouvez entrer à condition de présenter un badge.", "Puede entrar con la condición de presentar una acreditación."]
        ],
        checks: [
          ["Si nous ___ plus de temps, nous ___ le musée. (avoir / visiter)", ["avions / visiterions", "aurons / visitions", "avions / visiterons"], 0, "Hipótesis presente: imparfait + conditionnel présent."],
          ["Si tu m’___ prévenu, je ___ venu. (avoir / être)", ["avais / serais", "as / étais", "avais / serai"], 0, "Hipótesis pasada: plus-que-parfait + conditionnel passé."],
          ["Si vous ___ prêts, nous partirons. (être)", ["êtes", "serez", "étiez"], 0, "En la condición real con si se usa presente."],
          ["Sans son aide, nous n’___ pas terminé à temps.", ["aurions", "avions", "avons"], 0, "Sans + grupo nominal puede equivaler a una condición irreal."]
        ],
        words: [["🔀","si jamais","si acaso"],["🪞","à ta place","en tu lugar"],["🧭","à condition de","con la condición de"],["⏮️","si j’avais su","si lo hubiera sabido"],["🤔","au cas où","por si acaso"],["📍","sans cela","de lo contrario"]],
        read: "Si l’entreprise avait mieux anticipé la demande, elle aurait évité les retards. Aujourd’hui, elle investirait davantage dans la logistique si son budget le permettait."
      },
      {
        id: "b2-past", t: "Tiempos del pasado y concordancia temporal", ic: "🕰️",
        focus: "Integrar passé composé, imparfait y plus-que-parfait en relatos complejos.",
        rows: [
          ["Primer plano narrativo", "passé composé", "Le conseil a adopté la mesure.", "El consejo aprobó la medida."],
          ["Trasfondo", "imparfait", "Les débats duraient depuis des heures.", "Los debates duraban desde hacía horas."],
          ["Anterioridad", "plus-que-parfait", "Les experts avaient présenté leurs conclusions.", "Los expertos habían presentado sus conclusiones."],
          ["Duración hasta un momento pasado", "imparfait + depuis", "Il travaillait ici depuis dix ans.", "Llevaba diez años trabajando aquí."]
        ],
        checks: [
          ["Elle ___ depuis trois ans quand elle a changé de poste.", ["travaillait", "a travaillé", "avait travaillé"], 0, "Duración que seguía en curso en el pasado: imparfait."],
          ["Le comité ___ les chiffres avant le vote. (examiner)", ["avait examinés", "examinait", "a examiné"], 0, "Acción anterior a otra pasada: plus-que-parfait."],
          ["Les discussions ___ quand la présidente est arrivée. (continuer)", ["continuaient", "ont continué", "avaient continué"], 0, "La acción en curso sirve de trasfondo."],
          ["Finalement, les deux parties ___ un accord. (signer)", ["ont signé", "signaient", "avaient signés"], 0, "El resultado puntual se narra en passé composé."]
        ],
        words: [["🗂️","jusqu’alors","hasta entonces"],["⏳","depuis des années","desde hacía años"],["📌","à ce moment-là","en aquel momento"],["⚡","finalement","finalmente"],["📰","auparavant","anteriormente"],["🔄","alors que","mientras que"]],
        read: "Les négociations duraient depuis plusieurs mois lorsque les deux parties ont trouvé un compromis. Les médiateurs avaient déjà proposé plusieurs solutions."
      },
      {
        id: "b2-passive", t: "Voz pasiva e impersonales", ic: "📰",
        focus: "Dar protagonismo al resultado, al objeto o al proceso en contextos formales.",
        rows: [
          ["Pasiva", "être + participe passé + par", "La réforme a été adoptée par le Parlement.", "La reforma fue aprobada por el Parlamento."],
          ["Concordancia", "el participio concuerda con el sujeto", "Les mesures ont été annoncées.", "Se anunciaron las medidas."],
          ["Impersonal", "il est / il a été + participe passé", "Il a été décidé de reporter le vote.", "Se decidió aplazar la votación."],
          ["Pasiva refleja", "se + verbo activo", "De nouvelles places se libèrent.", "Se liberan nuevas plazas."]
        ],
        checks: [
          ["La décision ___ demain par le conseil.", ["sera annoncée", "annoncera", "sera annoncé"], 0, "Pasiva futura: sera annoncée, con acuerdo femenino."],
          ["Les demandes ___ hier.", ["ont été acceptées", "ont accepté", "a été acceptée"], 0, "Pasiva en passé composé y participio plural femenino."],
          ["___ a été convenu de se réunir lundi.", ["Il", "Elle", "On que"], 0, "La construcción impersonal es il a été convenu."],
          ["Cette expression ___ souvent dans la presse.", ["se rencontre", "rencontre", "est rencontrée de"], 0, "La pasiva refleja puede expresarse con se + verbo."]
        ],
        words: [["📣","être adopté(e)","ser aprobado/a"],["📝","être mis en œuvre","aplicarse"],["⚖️","il a été décidé","se decidió"],["🔍","être examiné(e)","ser examinado/a"],["🏛️","par le Parlement","por el Parlamento"],["🧭","se dérouler","desarrollarse"]],
        read: "La nouvelle procédure a été présentée lundi. Plusieurs mesures seront mises en œuvre dès janvier, et il a été décidé qu’un bilan serait publié chaque trimestre."
      },
      {
        id: "b2-relative", t: "Relativas complejas y pronombres relativos", ic: "🧷",
        focus: "Elegir qui, que, dont, où, lequel y sus formas con preposición.",
        rows: [
          ["Antecedente sujeto u objeto", "qui / que", "La chercheuse qui dirige l’étude présente les données que nous avons recueillies.", "La investigadora que dirige el estudio presenta los datos que hemos recogido."],
          ["Complemento con de", "dont", "Le rapport dont je vous ai parlé est publié.", "El informe del que le hablé está publicado."],
          ["Tras preposición", "lequel, auquel, duquel…", "Le principe auquel nous faisons référence est connu.", "El principio al que nos referimos es conocido."],
          ["Lugar o tiempo", "où", "L’année où elle est arrivée fut décisive.", "El año en que llegó fue decisivo."]
        ],
        checks: [
          ["Le laboratoire dans ___ elle travaille est très réputé.", ["lequel", "qui", "que"], 0, "Después de dans se emplea lequel para un antecedente masculino."],
          ["C’est le chercheur ___ les travaux ont été récompensés.", ["dont", "que", "où"], 0, "Dont expresa posesión o complemento con de."],
          ["La méthode ___ nous utilisons a fait ses preuves.", ["que", "qui", "dont"], 0, "La méthode es objeto directo: que."],
          ["Le projet auquel elle participe est celui ___ nous parlions.", ["dont", "qui", "que"], 0, "Parler de quelque chose: dont."]
        ],
        words: [["🔗","auquel","al cual"],["🧩","duquel","del cual"],["📍","dans lequel","en el cual"],["📖","dont","del que / cuyo"],["🧑‍🔬","la personne qui","la persona que"],["🗓️","l’année où","el año en que"]],
        read: "Le laboratoire auquel nous avons rendu visite travaille sur un dispositif dont l’efficacité a été démontrée. La chercheuse qui dirige le projet répond aux questions que les journalistes lui posent."
      },
      {
        id: "b2-reported", t: "Estilo indirecto y concordancia temporal", ic: "💬",
        focus: "Transmitir afirmaciones, preguntas y peticiones; ajustar tiempos y referencias.",
        rows: [
          ["Verbo introductor en presente", "sin cambio obligatorio", "Elle affirme qu’elle connaît la réponse.", "Afirma que conoce la respuesta."],
          ["Verbo introductor en pasado", "présent → imparfait", "Il a dit qu’il connaissait la réponse.", "Dijo que conocía la respuesta."],
          ["Pregunta sí/no", "demander si", "Elle m’a demandé si je venais.", "Me preguntó si venía."],
          ["Orden o petición", "demander de + infinitif", "Il nous a demandé de patienter.", "Nos pidió que esperáramos."]
        ],
        checks: [
          ["Elle a dit : « Je suis prête. » → Elle a dit qu’elle ___ prête.", ["était", "est", "soit"], 0, "El presente suele retroceder a imparfait tras introductor pasado."],
          ["Il m’a demandé : « Tu viendras ? » → Il m’a demandé si je ___.", ["viendrais", "viendrai", "viens"], 0, "Futuro en discurso indirecto pasado: conditionnel."],
          ["Elle a demandé : « Où habitez-vous ? » → Elle a demandé où nous ___.", ["habitions", "habitons", "habiterions"], 0, "La pregunta indirecta conserva el orden sujeto-verbo."],
          ["Le médecin m’a dit ___ me reposer.", ["de", "que", "si"], 0, "Demander/dire a alguien de faire quelque chose."]
        ],
        words: [["💬","il a déclaré que","declaró que"],["❓","elle a demandé si","preguntó si"],["📅","le lendemain","al día siguiente"],["⏪","la veille","la víspera"],["🤝","demander de faire","pedir que se haga"],["📰","selon le témoin","según el testigo"]],
        read: "La porte-parole a déclaré que les travaux commenceraient le lendemain. Elle a précisé que les riverains seraient informés et a demandé de respecter les déviations."
      },
      {
        id: "b2-gerund", t: "Gérondif, participe présent y causa", ic: "🏃",
        focus: "Expresar simultaneidad, manera y causa con en + participe présent.",
        rows: [
          ["Simultaneidad", "en + participe présent", "Elle écoute un podcast en cuisinant.", "Escucha un pódcast mientras cocina."],
          ["Manera o medio", "en + participe présent", "Il a progressé en travaillant régulièrement.", "Progresó trabajando con regularidad."],
          ["Causa", "en + participe présent", "En refusant l’offre, il a surpris le comité.", "Al rechazar la oferta, sorprendió al comité."],
          ["Sujeto común", "normalmente el mismo en ambas acciones", "En arrivant, j’ai appelé l’accueil.", "Al llegar, llamé a recepción."]
        ],
        checks: [
          ["Elle apprend le français ___ des films en version originale.", ["en regardant", "en regarde", "regardant à"], 0, "Gérondif: en + participio presente."],
          ["___ la consigne, vous éviterez cette erreur.", ["En lisant", "En lire", "Lisant de"], 0, "En lisant expresa el medio para evitar el error."],
          ["Il est tombé ___ les escaliers.", ["en descendant", "descendant de", "en descendu"], 0, "Descendre forma el participio presente descendant."],
          ["Le sujet du gérondif est normalement ___ celui du verbe principal.", ["le même que", "différent de", "après"], 0, "El sujeto lógico suele coincidir."]
        ],
        words: [["🏃","en avançant","avanzando"],["📖","en lisant","leyendo"],["🎧","en écoutant","escuchando"],["🧭","tout en sachant que","aun sabiendo que"],["⚙️","en utilisant","utilizando"],["🔁","simultanément","simultáneamente"]],
        read: "En comparant les deux propositions, l’équipe a repéré une incohérence. Elle a ensuite corrigé le document tout en expliquant les changements aux partenaires."
      },
      {
        id: "b2-connectors", t: "Conectores para argumentar", ic: "🔗",
        focus: "Estructurar tesis, concesión, oposición, causa y conclusión.",
        rows: [
          ["Añadir un argumento", "en outre, de surcroît", "La solution est rapide ; en outre, elle est peu coûteuse.", "La solución es rápida y, además, económica."],
          ["Oponer dos ideas", "cependant, néanmoins, en revanche", "Le dispositif est utile ; cependant, il reste complexe.", "El sistema es útil; sin embargo, sigue siendo complejo."],
          ["Conceder", "certes… mais / bien que", "Certes, le coût est élevé, mais les bénéfices sont durables.", "Es cierto que el coste es alto, pero los beneficios son duraderos."],
          ["Concluir", "ainsi, dès lors, en définitive", "En définitive, la réforme doit être accompagnée.", "En definitiva, la reforma debe ir acompañada."]
        ],
        checks: [
          ["Le projet est prometteur ; ___, son financement reste incertain.", ["toutefois", "en outre", "ainsi"], 0, "Toutefois introduce una objeción."],
          ["___ les résultats soient positifs, il faut poursuivre l’étude.", ["Bien que", "Puisque", "Ainsi"], 0, "Bien que expresa concesión y lleva subjuntivo."],
          ["L’accès est gratuit ; ___, le service est ouvert à tous.", ["par conséquent", "néanmoins", "certes"], 0, "Par conséquent introduce una consecuencia."],
          ["___, cette mesure devrait être évaluée chaque année.", ["En définitive", "En revanche", "Bien que"], 0, "En définitive introduce una conclusión."]
        ],
        words: [["➕","en outre","además"],["⚖️","néanmoins","no obstante"],["🔄","en revanche","en cambio"],["✅","certes… mais","es cierto que… pero"],["➡️","par conséquent","por consiguiente"],["🏁","en définitive","en definitiva"]],
        read: "Certes, la transition exige un investissement important. Néanmoins, elle réduira les dépenses à long terme ; en définitive, son financement devrait être planifié."
      }
    ]
  },
  {
    lvl: "C1",
    topics: [
      {
        id: "c1-temporality", t: "Correlación temporal y matices modales", ic: "⏳",
        focus: "Elegir el tiempo y el modo según anterioridad, perspectiva y grado de certeza.",
        rows: [
          ["Anterioridad respecto al presente", "passé composé / passé", "Elle reconnaît qu’elle a sous-estimé le risque.", "Reconoce que subestimó el riesgo."],
          ["Anterioridad respecto a un pasado", "plus-que-parfait", "Il a confirmé qu’il avait reçu le dossier.", "Confirmó que había recibido el expediente."],
          ["Futuro visto desde el pasado", "conditionnel présent", "Elle a annoncé qu’elle reviendrait.", "Anunció que volvería."],
          ["Conjetura pasada", "futur antérieur", "Il aura oublié notre rendez-vous.", "Habrá olvidado nuestra cita."]
        ],
        checks: [
          ["Le porte-parole a confirmé qu’il ___ le document la veille. (recevoir)", ["avait reçu", "a reçu", "recevrait"], 0, "La recepción es anterior a la confirmación pasada."],
          ["Elle a promis qu’elle ___ avant midi. (revenir)", ["reviendrait", "reviendra", "revient"], 0, "Futuro en el pasado: conditionnel présent."],
          ["Il n’est pas là ; il ___ le train. (manquer, conjetura)", ["aura manqué", "manquait", "manquera"], 0, "El futur antérieur puede expresar conjetura sobre el pasado."],
          ["Je regrette qu’elle ___ si tôt. (partir, anterioridad)", ["soit partie", "part", "partira"], 0, "La anterioridad bajo emoción requiere subjonctif passé."]
        ],
        words: [["⏳","à ce stade","en esta etapa"],["🔙","préalablement","con anterioridad"],["🧭","il semblerait que","parece que"],["🔮","il aura probablement…","probablemente habrá…"],["📌","au moment où","en el momento en que"],["📰","avait été annoncé","se había anunciado"]],
        read: "La ministre a indiqué que l’accord avait été conclu la veille. Elle a ajouté que le texte serait publié après vérification, bien qu’une fuite ait déjà circulé."
      },
      {
        id: "c1-subjunctive", t: "Subjuntivo avanzado y distancia", ic: "🎭",
        focus: "Expresar valoración, hipótesis, concesión y distancia respecto a la información.",
        rows: [
          ["Subjuntivo pasado", "subjonctif passé", "Bien qu’il ait insisté, rien n’a changé.", "Aunque insistió, nada cambió."],
          ["Concesión", "quoique / encore que + subjonctif", "Quoique la mesure soit nécessaire, elle ne suffit pas.", "Aunque la medida sea necesaria, no basta."],
          ["Hipótesis formal", "à supposer que / pour peu que", "À supposer que l’accord soit signé, le calendrier changera.", "Suponiendo que se firme el acuerdo, cambiará el calendario."],
          ["Valoración impersonal", "il est regrettable que + subjonctif", "Il est regrettable que le débat ait été écourté.", "Es lamentable que se haya acortado el debate."]
        ],
        checks: [
          ["Pour peu que chacun ___ un effort, l’accord est possible.", ["fasse", "fait", "fera"], 0, "Pour peu que introduce una condición y exige subjuntivo."],
          ["Il est regrettable que la réunion ___ annulée. (être, passé)", ["ait été", "a été", "soit"], 0, "Valoración de un hecho pasado: subjonctif passé."],
          ["Encore que cette hypothèse ___ plausible, elle reste à vérifier.", ["soit", "est", "sera"], 0, "Encore que se construye con subjuntivo."],
          ["Je ne conteste pas qu’il ___ les faits. (connaître)", ["connaisse", "connaît", "connaîtra"], 0, "La negación matiza la afirmación y favorece el subjuntivo."]
        ],
        words: [["⚖️","quoique","aunque"],["🧪","à supposer que","suponiendo que"],["📌","pour peu que","con tal de que"],["🧭","il est regrettable que","es lamentable que"],["🔎","sans que","sin que"],["🎭","encore que","aunque / si bien"]],
        read: "Quoique les conclusions aient été largement diffusées, il est regrettable que certaines réserves aient été omises. Pour peu que les sources soient vérifiées, le débat pourra reprendre."
      },
      {
        id: "c1-hypotheses", t: "Hipótesis complejas y condicionales mixtas", ic: "🔀",
        focus: "Construir hipótesis con inversión, infinitivo y consecuencias en distintos marcos temporales.",
        rows: [
          ["Condición pasada con efecto actual", "si + plus-que-parfait → conditionnel présent", "Si nous avions anticipé, nous serions mieux préparés.", "Si lo hubiéramos previsto, estaríamos mejor preparados."],
          ["Inversión formal", "eussé-je / fût-il + participe…", "Eût-elle été informée, elle aurait réagi.", "Si hubiera estado informada, habría reaccionado."],
          ["Sin + infinitivo", "à défaut de / faute de + infinitif", "Faute d’avoir vérifié, ils ont publié une erreur.", "Por no haber comprobado, publicaron un error."],
          ["Condición concesiva", "quand bien même + conditionnel", "Quand bien même il accepterait, le délai resterait court.", "Aun si aceptara, el plazo seguiría siendo corto."]
        ],
        checks: [
          ["Si le rapport avait été transmis, le comité ___ déjà. (décider, ahora)", ["aurait déjà décidé", "avait déjà décidé", "déciderait déjà"], 0, "La hipótesis irreal pasada requiere conditionnel passé."],
          ["À défaut d’___ les sources, l’article comporte une erreur.", ["avoir vérifié", "vérifier de", "ayant vérifié"], 0, "À défaut de + infinitif pasado expresa falta de acción anterior."],
          ["Quand bien même elle ___, nous maintiendrions notre position.", ["accepterait", "accepte", "a accepté"], 0, "Quand bien même se combina con conditionnel."],
          ["Eût-il ___ plus tôt, le résultat n’aurait pas changé.", ["agi", "agir", "agissait"], 0, "Inversión literaria: eût-il agi equivale a s’il avait agi."]
        ],
        words: [["🪞","à défaut de","a falta de"],["⏮️","si l’on avait su","si se hubiera sabido"],["🎭","quand bien même","aun si"],["🧭","eût-il fallu","hubiera sido necesario"],["⚖️","faute de quoi","de lo contrario"],["🔀","à supposer que","suponiendo que"]],
        read: "Eût-elle été avertie plus tôt, la commission aurait peut-être modifié son calendrier. Faute d’avoir reçu les pièces, elle a toutefois maintenu la date."
      },
      {
        id: "c1-inversion", t: "Inversión, énfasis y orden marcado", ic: "🪞",
        focus: "Dar relieve a un elemento y emplear inversión en registros formales y narrativos.",
        rows: [
          ["Inversión tras adverbio", "à peine / rarement + verbe-sujet", "Rarement a-t-on observé un tel écart.", "Rara vez se ha observado una diferencia así."],
          ["Inversión condicional", "auxiliaire + sujet + participe", "Aurait-elle su, elle serait intervenue.", "De haberlo sabido, habría intervenido."],
          ["Énfasis con c’est… qui/que", "c’est + élément + qui/que", "C’est cette décision qui pose problème.", "Es esta decisión la que plantea problemas."],
          ["Dislocación", "elemento + pronombre de recuperación", "Cette réforme, nous l’attendions depuis longtemps.", "Esta reforma la esperábamos desde hacía tiempo."]
        ],
        checks: [
          ["Rarement ___-on une telle mobilisation. (voir)", ["a", "est", "avait"], 0, "Tras rarement inicial puede aparecer inversión con auxiliar."],
          ["C’est cette proposition ___ a retenu l’attention.", ["qui", "que", "dont"], 0, "El elemento destacado es sujeto: c’est… qui."],
          ["Cette mesure, le gouvernement ___ annoncée hier.", ["l’a", "lui a", "y a"], 0, "El COD femenino cette mesure se retoma con l’."],
          ["À peine ___-ils commencé que le débat s’est interrompu.", ["avaient", "ont", "étaient"], 0, "À peine + plus-que-parfait admite inversión."]
        ],
        words: [["✨","c’est… qui","es… quien"],["🎯","c’est… que","es… lo que"],["🔁","rarement","rara vez"],["⏱️","à peine","apenas"],["📌","quant à","en cuanto a"],["🪞","non seulement… mais encore","no solo… sino también"]],
        read: "Rarement a-t-on vu un débat aussi vif. Cette question, les spécialistes l’avaient pourtant soulevée depuis des années ; c’est l’annonce qui a accéléré la discussion."
      },
      {
        id: "c1-relatives", t: "Relativas, determinantes y referencia", ic: "🧩",
        focus: "Precisar referentes, expresar la totalidad y manejar estructuras con dont, lequel y quoi.",
        rows: [
          ["Referencia compleja", "ce qui / ce que / ce dont", "Ce qui importe, c’est la méthode.", "Lo que importa es el método."],
          ["Antecedente completo", "ce à quoi / ce sur quoi", "Voilà ce à quoi nous devons réfléchir.", "Esto es aquello sobre lo que debemos reflexionar."],
          ["Restricción", "ne… que", "Le comité n’a retenu que deux options.", "El comité solo conservó dos opciones."],
          ["Totalidad distributiva", "chacun des / l’ensemble des", "Chacune des propositions mérite examen.", "Cada propuesta merece ser examinada."]
        ],
        checks: [
          ["___ nous manque, c’est une estimation fiable.", ["Ce qui", "Ce que", "Ce dont"], 0, "Ce qui es el sujeto de manque."],
          ["Elle a précisé ___ elle avait besoin.", ["ce dont", "ce qui", "ce lequel"], 0, "Avoir besoin de quelque chose: ce dont."],
          ["C’est exactement ___ je faisais allusion.", ["ce à quoi", "ce qui", "ce que"], 0, "Faire allusion à: ce à quoi."],
          ["Le rapport ne contient ___ trois recommandations.", ["que", "plus", "aucun"], 0, "Ne… que expresa restricción: solo."]
        ],
        words: [["🔎","ce qui","lo que (sujeto)"],["📖","ce que","lo que (objeto)"],["🧩","ce dont","aquello de lo que"],["🧭","ce à quoi","aquello a lo que"],["🔒","ne… que","solo"],["📊","l’ensemble des","el conjunto de"]],
        read: "Ce qui ressort de l’enquête, c’est la diversité des parcours. Chacune des personnes interrogées a décrit ce dont elle avait besoin pour accéder aux services."
      },
      {
        id: "c1-nominalization", t: "Pasiva, nominalización y concisión", ic: "🏛️",
        focus: "Transformar el estilo verbal en formulaciones nominales densas y precisas.",
        rows: [
          ["Nominalizar una acción", "verbe → nom", "Le comité a approuvé la réforme → l’approbation de la réforme", "El comité aprobó la reforma → la aprobación de la reforma."],
          ["Pasiva formal", "être + participe passé", "Les conclusions seront publiées en juin.", "Las conclusiones se publicarán en junio."],
          ["Nominalización de la causa", "en raison de / faute de + nom", "Faute de financement, le projet est suspendu.", "A falta de financiación, se suspende el proyecto."],
          ["Construcción impersonal", "il convient de / il ressort que", "Il ressort des données que la tendance s’inverse.", "De los datos se desprende que la tendencia se invierte."]
        ],
        checks: [
          ["La ___ des résultats aura lieu vendredi. (publier)", ["publication", "publiant", "publié"], 0, "El sustantivo de publier es publication."],
          ["Les conclusions ___ dans le rapport final.", ["seront présentées", "présenteront", "sera présentée"], 0, "Pasiva futura; concordancia con conclusions."],
          ["___ de preuves suffisantes, l’enquête se poursuit.", ["Faute", "Grâce", "Malgré que"], 0, "Faute de + nombre expresa ausencia o carencia."],
          ["Il ___ de vérifier les références avant publication.", ["convient", "faut que", "ressort"], 0, "Il convient de + infinitivo expresa recomendación formal."]
        ],
        words: [["📊","la mise en œuvre","la puesta en práctica"],["📰","la publication","la publicación"],["🔎","il ressort de","se desprende de"],["📌","il convient de","conviene"],["⚖️","en raison de","debido a"],["🏛️","la prise de décision","la toma de decisiones"]],
        read: "La publication des résultats a été reportée. Faute de données comparables, il convient de poursuivre l’analyse avant la mise en œuvre de la réforme."
      },
      {
        id: "c1-discourse", t: "Cohesión, concesión y conectores formales", ic: "🧵",
        focus: "Jerarquizar argumentos, matizar una tesis y enlazar ideas con precisión.",
        rows: [
          ["Matizar", "certes, il n’en demeure pas moins", "Certes, le coût baisse ; il n’en demeure pas moins élevé.", "Es cierto que el coste baja; no por ello deja de ser alto."],
          ["Concesión", "quand bien même / nonobstant", "Nonobstant ces réserves, l’accord a été signé.", "Pese a estas reservas, se firmó el acuerdo."],
          ["Consecuencia", "partant, dès lors, de ce fait", "Les délais sont dépassés ; dès lors, une révision s’impose.", "Se han superado los plazos; por tanto, es necesaria una revisión."],
          ["Reformulación", "autrement dit, en d’autres termes", "Autrement dit, le dispositif doit être simplifié.", "En otras palabras, el sistema debe simplificarse."]
        ],
        checks: [
          ["___ les réserves formulées, la décision a été maintenue.", ["Nonobstant", "Partant", "Autrement dit"], 0, "Nonobstant introduce una concesión formal."],
          ["Les ressources manquent ; ___, le calendrier doit être revu.", ["dès lors", "certes", "quant à"], 0, "Dès lors presenta una consecuencia."],
          ["___, l’enjeu n’est pas de supprimer le débat, mais de l’éclairer.", ["Autrement dit", "Nonobstant", "En amont"], 0, "Autrement dit introduce una reformulación."],
          ["Le risque persiste ; il n’en ___ pas moins nécessaire d’agir.", ["demeure", "reste de", "vient"], 0, "Locución fija: il n’en demeure pas moins."]
        ],
        words: [["⚖️","nonobstant","no obstante / pese a"],["➡️","partant","por consiguiente"],["🧵","en amont","previamente"],["🔄","autrement dit","en otras palabras"],["🧭","il n’en demeure pas moins","no por ello deja de"],["📌","à cet égard","a este respecto"]],
        read: "Certes, la réforme a suscité des réserves ; il n’en demeure pas moins qu’un changement est nécessaire. Dès lors, les modalités doivent être débattues en amont."
      },
      {
        id: "c1-register", t: "Registro, colocaciones y precisión léxica", ic: "✍️",
        focus: "Elegir colocaciones y nivel de formalidad adecuados al contexto académico y profesional.",
        rows: [
          ["Colocación académica", "mener une analyse / formuler une hypothèse", "L’équipe a mené une analyse approfondie.", "El equipo realizó un análisis exhaustivo."],
          ["Matizar una afirmación", "tendre à / s’avérer / sembler", "Cette approche s’avère pertinente.", "Este enfoque resulta pertinente."],
          ["Registro formal", "procéder à / mettre en évidence", "L’étude met en évidence un écart.", "El estudio pone de manifiesto una diferencia."],
          ["Evitar falsos amigos", "actuellement = en la actualidad", "Le dispositif est actuellement en phase de test.", "El sistema se encuentra actualmente en fase de pruebas."]
        ],
        checks: [
          ["L’étude ___ en évidence plusieurs tendances.", ["met", "fait", "pose"], 0, "Colocación: mettre en évidence."],
          ["L’équipe a ___ une analyse comparative.", ["mené", "conduit à", "pris"], 0, "Colocaciones: mener / conduire une analyse."],
          ["« Actuellement » signifie…", ["en la actualidad", "eventualmente", "actualmente posible"], 0, "Actuellement significa en la actualidad."],
          ["Cette hypothèse ___ pertinente au regard des données.", ["s’avère", "devient à", "fait"], 0, "S’avérer pertinent(e) significa resultar pertinente."]
        ],
        words: [["🔬","mener une étude","realizar un estudio"],["📊","mettre en évidence","poner de manifiesto"],["🧠","formuler une hypothèse","formular una hipótesis"],["✨","s’avérer pertinent","resultar pertinente"],["📌","à l’heure actuelle","en la actualidad"],["✍️","procéder à une vérification","proceder a una comprobación"]],
        read: "L’équipe a mené une analyse comparative afin de mettre en évidence les écarts. Les résultats s’avèrent pertinents, bien que l’échantillon demeure limité."
      }
    ]
  }
];

const theoryCharts = {
  "a2-present": {
    title: "Présent de l’indicatif · verbes indispensables",
    note: "« Être », « avoir », « aller » et « faire » sont irréguliers : mémorise-les avant d’ajouter les terminaisons régulières.",
    headers: ["Pronom", "être", "avoir", "aller", "faire"],
    rows: [
      ["je", "suis", "ai", "vais", "fais"], ["tu", "es", "as", "vas", "fais"],
      ["il / elle / on", "est", "a", "va", "fait"], ["nous", "sommes", "avons", "allons", "faisons"],
      ["vous", "êtes", "avez", "allez", "faites"], ["ils / elles", "sont", "ont", "vont", "font"]
    ]
  },
  "a2-passe-compose": {
    title: "Passé composé · les auxiliaires",
    note: "La plupart des verbes se conjuguent avec « avoir ». Les verbes pronominaux et de nombreux verbes de déplacement utilisent « être ».",
    headers: ["Pronom", "avoir + visiter", "être + aller"],
    rows: [
      ["je", "j’ai visité", "je suis allé(e)"], ["tu", "tu as visité", "tu es allé(e)"],
      ["il / elle", "il / elle a visité", "il est allé / elle est allée"], ["nous", "nous avons visité", "nous sommes allé(e)s"],
      ["vous", "vous avez visité", "vous êtes allé(e)(s)"], ["ils / elles", "ils / elles ont visité", "ils sont allés / elles sont allées"]
    ]
  },
  "a2-imparfait": {
    title: "Imparfait · formation et terminaisons",
    note: "Prends la forme « nous » au présent, enlève « -ons », puis ajoute -ais, -ais, -ait, -ions, -iez, -aient. « Être » a la racine irrégulière « ét- ».",
    headers: ["Pronom", "parler", "finir", "être", "avoir"],
    rows: [
      ["je", "parlais", "finissais", "étais", "avais"], ["tu", "parlais", "finissais", "étais", "avais"],
      ["il / elle / on", "parlait", "finissait", "était", "avait"], ["nous", "parlions", "finissions", "étions", "avions"],
      ["vous", "parliez", "finissiez", "étiez", "aviez"], ["ils / elles", "parlaient", "finissaient", "étaient", "avaient"]
    ]
  },
  "a2-futur": {
    title: "Futur simple · verbes réguliers et irréguliers",
    note: "Les terminaisons sont -ai, -as, -a, -ons, -ez, -ont. Les verbes en -re perdent le « e » final ; plusieurs verbes ont une racine irrégulière.",
    headers: ["Pronom", "parler", "être", "avoir", "aller"],
    rows: [
      ["je", "parlerai", "serai", "aurai", "irai"], ["tu", "parleras", "seras", "auras", "iras"],
      ["il / elle / on", "parlera", "sera", "aura", "ira"], ["nous", "parlerons", "serons", "aurons", "irons"],
      ["vous", "parlerez", "serez", "aurez", "irez"], ["ils / elles", "parleront", "seront", "auront", "iront"]
    ]
  },
  "a2-pronouns": {
    title: "Pronoms compléments · COD et COI",
    note: "Le COD répond à « qui ? / quoi ? » sans préposition ; le COI est souvent introduit par « à ». Le pronom se place normalement avant le verbe.",
    headers: ["Fonction", "Singulier", "Pluriel", "Exemple"],
    rows: [
      ["COD · personne", "me, te, le / la", "nous, vous, les", "Je la vois."],
      ["COI · personne (à)", "me, te, lui", "nous, vous, leur", "Je leur téléphone."],
      ["Exemple à l’infinitif", "Je vais le lire.", "Nous allons leur écrire.", "Le pronom précède l’infinitif."]
    ]
  },
  "a2-questions": {
    title: "Trois façons de poser une question",
    note: "« Est-ce que » est une forme courante et neutre. L’inversion appartient surtout au registre formel ; ajoute -t- entre deux voyelles.",
    headers: ["Registre", "Construction", "Exemple"],
    rows: [
      ["Familier", "intonation + phrase", "Tu habites où ?"],
      ["Neutre", "est-ce que + sujet + verbe", "Où est-ce que tu habites ?"],
      ["Formel", "mot interrogatif + verbe-sujet", "Où habites-tu ?"],
      ["Inversion avec voyelles", "verbe-t-il / elle / on", "Parle-t-elle français ?"]
    ]
  },
  "a2-comparison": {
    title: "Comparer · formes régulières et irrégulières",
    note: "Avec un adjectif ou un adverbe, emploie « plus / moins / aussi… que ». Pour un verbe ou une quantité, emploie « plus / moins / autant ». « Bon » et « bien » sont irréguliers.",
    headers: ["Sens", "Adjectif", "Verbe / quantité", "Forme particulière"],
    rows: [
      ["Supériorité", "plus grand(e) que", "plus que", "bon → meilleur(e)"],
      ["Infériorité", "moins grand(e) que", "moins que", "mauvais → pire"],
      ["Égalité", "aussi grand(e) que", "autant que / autant de… que", "bien → mieux"],
      ["Superlatif", "le / la / les plus grand(e)(s)", "—", "le meilleur / la meilleure"]
    ]
  },
  "b1-past": {
    title: "Passé · imparfait ou passé composé ?",
    note: "L’imparfait installe le décor ou exprime une habitude ; le passé composé présente un événement achevé.",
    headers: ["Pronom", "parler · imparfait", "parler · passé composé"],
    rows: [
      ["je", "parlais", "j’ai parlé"], ["tu", "parlais", "tu as parlé"],
      ["il / elle", "parlait", "il / elle a parlé"], ["nous", "parlions", "nous avons parlé"],
      ["vous", "parliez", "vous avez parlé"], ["ils / elles", "parlaient", "ils / elles ont parlé"]
    ]
  },
  "b1-plus-que-parfait": {
    title: "Plus-que-parfait · auxiliaire à l’imparfait",
    note: "Avoir ou être à l’imparfait + participe passé. Avec « être », le participe s’accorde avec le sujet.",
    headers: ["Pronom", "avoir + finir", "être + partir"],
    rows: [
      ["je", "j’avais fini", "j’étais parti(e)"], ["tu", "tu avais fini", "tu étais parti(e)"],
      ["il / elle", "il / elle avait fini", "il était parti / elle était partie"], ["nous", "nous avions fini", "nous étions parti(e)s"],
      ["vous", "vous aviez fini", "vous étiez parti(e)(s)"], ["ils / elles", "ils / elles avaient fini", "ils étaient partis / elles étaient parties"]
    ]
  },
  "b1-future-conditional": {
    title: "Futur et conditionnel · terminaisons parallèles",
    note: "Les racines du futur et du conditionnel se ressemblent. Le futur prend les terminaisons du présent de « avoir » ; le conditionnel prend celles de l’imparfait.",
    headers: ["Pronom", "venir · futur", "venir · conditionnel", "pouvoir · conditionnel"],
    rows: [
      ["je", "viendrai", "viendrais", "pourrais"], ["tu", "viendras", "viendrais", "pourrais"],
      ["il / elle", "viendra", "viendrait", "pourrait"], ["nous", "viendrons", "viendrions", "pourrions"],
      ["vous", "viendrez", "viendriez", "pourriez"], ["ils / elles", "viendront", "viendraient", "pourraient"]
    ]
  },
  "b1-subjunctive": {
    title: "Subjonctif présent · verbes fréquents",
    note: "Après une expression de volonté, de sentiment, de doute ou de nécessité, le subjonctif apparaît souvent lorsque les sujets diffèrent.",
    headers: ["Pronom", "être", "avoir", "aller", "faire"],
    rows: [
      ["que je", "sois", "aie", "aille", "fasse"], ["que tu", "sois", "aies", "ailles", "fasses"],
      ["qu’il / elle", "soit", "ait", "aille", "fasse"], ["que nous", "soyons", "ayons", "allions", "fassions"],
      ["que vous", "soyez", "ayez", "alliez", "fassiez"], ["qu’ils / elles", "soient", "aient", "aillent", "fassent"]
    ]
  },
  "b1-y-en": {
    title: "Pronoms y et en · choisissez selon la préposition",
    note: "« Y » reprend généralement un lieu ou un complément introduit par « à ». « En » reprend un complément introduit par « de » ou une quantité.",
    headers: ["Élément remplacé", "Pronom", "Modèle", "Exemple"],
    rows: [
      ["à + lieu", "y", "aller à + lieu → y aller", "Je vais à Lyon. → J’y vais."],
      ["à + chose", "y", "penser à + chose → y penser", "Je pense à ce projet. → J’y pense."],
      ["de + chose", "en", "parler de + chose → en parler", "Elle parle du livre. → Elle en parle."],
      ["quantité", "en + nombre", "avoir + nombre → en avoir", "Tu as deux frères ? → J’en ai deux."]
    ]
  },
  "b1-imperative": {
    title: "Impératif · formes tu, nous et vous",
    note: "L’impératif n’emploie pas de sujet. Pour les verbes en -er, le « s » de « tu » disparaît généralement ; il revient devant « y » et « en ».",
    headers: ["Personne", "parler", "finir", "être", "avoir"],
    rows: [
      ["tu", "parle !", "finis !", "sois !", "aie !"], ["nous", "parlons !", "finissons !", "soyons !", "ayons !"],
      ["vous", "parlez !", "finissez !", "soyez !", "ayez !"], ["tu · négation", "ne parle pas !", "ne finis pas !", "ne sois pas !", "n’aie pas !"]
    ]
  },
  "b2-subjunctive": {
    title: "Subjonctif · présent et passé",
    note: "Le subjonctif passé exprime l’antériorité : auxiliaire au subjonctif présent + participe passé.",
    headers: ["Pronom", "être · présent", "avoir · présent", "être · passé", "avoir · passé"],
    rows: [
      ["que je", "sois", "aie", "aie été", "aie eu"], ["que tu", "sois", "aies", "aies été", "aies eu"],
      ["qu’il / elle", "soit", "ait", "ait été", "ait eu"], ["que nous", "soyons", "ayons", "ayons été", "ayons eu"],
      ["que vous", "soyez", "ayez", "ayez été", "ayez eu"], ["qu’ils / elles", "soient", "aient", "aient été", "aient eu"]
    ]
  },
  "b2-conditionals": {
    title: "Trois structures avec « si »",
    note: "Ne place pas le futur ou le conditionnel immédiatement après « si » dans une condition hypothétique.",
    headers: ["Hypothèse", "Proposition avec si", "Résultat", "Exemple"],
    rows: [
      ["Réelle / possible", "si + présent", "présent ou futur", "Si tu viens, nous commencerons."],
      ["Irréelle au présent", "si + imparfait", "conditionnel présent", "Si tu venais, nous commencerions."],
      ["Irréelle au passé", "si + plus-que-parfait", "conditionnel passé", "Si tu étais venu(e), nous aurions commencé."]
    ]
  },
  "b2-past": {
    title: "Trois temps pour organiser un récit",
    note: "Le passé composé fait avancer le récit ; l’imparfait décrit le contexte ; le plus-que-parfait marque l’antériorité.",
    headers: ["Pronom", "passé composé", "imparfait", "plus-que-parfait"],
    rows: [
      ["je", "j’ai terminé", "terminais", "j’avais terminé"], ["tu", "tu as terminé", "terminais", "tu avais terminé"],
      ["il / elle", "a terminé", "terminait", "avait terminé"], ["nous", "avons terminé", "terminions", "avions terminé"],
      ["vous", "avez terminé", "terminiez", "aviez terminé"], ["ils / elles", "ont terminé", "terminaient", "avaient terminé"]
    ]
  },
  "b2-passive": {
    title: "Voix passive · présent, passé et futur",
    note: "Conjugue « être » au temps voulu, puis ajoute le participe passé, qui s’accorde avec le sujet.",
    headers: ["Temps", "Présenter · masculin", "Présenter · féminin"],
    rows: [
      ["Présent", "le rapport est présenté", "la mesure est présentée"],
      ["Passé composé", "le rapport a été présenté", "la mesure a été présentée"],
      ["Imparfait", "le rapport était présenté", "la mesure était présentée"],
      ["Futur simple", "le rapport sera présenté", "la mesure sera présentée"]
    ]
  },
  "b2-reported": {
    title: "Discours direct → discours indirect",
    note: "Après un verbe introducteur au passé, les temps et les repères temporels peuvent changer.",
    headers: ["Discours direct", "Discours indirect", "Transformation"],
    rows: [
      ["« Je suis prêt(e). »", "Il a dit qu’il était prêt.", "présent → imparfait"],
      ["« J’ai compris. »", "Elle a dit qu’elle avait compris.", "passé composé → plus-que-parfait"],
      ["« Je partirai. »", "Il a annoncé qu’il partirait.", "futur → conditionnel présent"],
      ["« Tu viens ? »", "Elle a demandé si je venais.", "question → si + ordre sujet-verbe"],
      ["« Attendez ! »", "Il nous a demandé d’attendre.", "impératif → demander de + infinitif"]
    ]
  },
  "b2-gerund": {
    title: "Participe présent et gérondif",
    note: "Forme le participe présent avec la base de « nous » au présent sans -ons, puis ajoute -ant. « Être », « avoir » et « savoir » sont irréguliers.",
    headers: ["Infinitif", "Présent avec nous", "Participe présent", "Gérondif"],
    rows: [
      ["parler", "nous parlons", "parlant", "en parlant"],
      ["finir", "nous finissons", "finissant", "en finissant"],
      ["prendre", "nous prenons", "prenant", "en prenant"],
      ["être", "nous sommes", "étant", "en étant"],
      ["avoir", "nous avons", "ayant", "en ayant"],
      ["savoir", "nous savons", "sachant", "en sachant"]
    ]
  },
  "c1-temporality": {
    title: "Situer l’action · formes composées",
    note: "Les auxiliaires et le participe passé permettent de marquer l’antériorité par rapport au présent, au passé ou à un point de vue hypothétique.",
    headers: ["Forme", "Construction", "Exemple"],
    rows: [
      ["Passé composé", "avoir / être au présent + participe", "Elle a vérifié le dossier."],
      ["Plus-que-parfait", "avoir / être à l’imparfait + participe", "Elle avait vérifié le dossier."],
      ["Conditionnel passé", "avoir / être au conditionnel + participe", "Elle aurait vérifié le dossier."],
      ["Subjonctif passé", "avoir / être au subjonctif + participe", "Je doute qu’elle ait vérifié le dossier."],
      ["Futur antérieur", "avoir / être au futur + participe", "Elle aura vérifié le dossier."]
    ]
  },
  "c1-subjunctive": {
    title: "Subjonctif présent et passé · auxiliaires",
    note: "Le subjonctif passé garde les mêmes terminaisons de personne à l’auxiliaire que le présent ; ajoute ensuite le participe passé.",
    headers: ["Pronom", "être · présent", "être · passé", "avoir · présent", "avoir · passé"],
    rows: [
      ["que je", "sois", "aie été", "aie", "aie eu"], ["que tu", "sois", "aies été", "aies", "aies eu"],
      ["qu’il / elle", "soit", "ait été", "ait", "ait eu"], ["que nous", "soyons", "ayons été", "ayons", "ayons eu"],
      ["que vous", "soyez", "ayez été", "ayez", "ayez eu"], ["qu’ils / elles", "soient", "aient été", "aient", "aient eu"]
    ]
  },
  "c1-hypotheses": {
    title: "Hypothèses mixtes et inversion littéraire",
    note: "Une condition passée peut avoir une conséquence actuelle. L’inversion de l’auxiliaire appartient à un registre littéraire ou très soutenu.",
    headers: ["Structure", "Condition", "Conséquence", "Équivalent"],
    rows: [
      ["Condition passée → effet actuel", "si + plus-que-parfait", "conditionnel présent", "Si elle avait su, elle serait prête."],
      ["Inversion passée", "auxiliaire au subjonctif imparfait", "conditionnel passé", "Eût-elle su, elle aurait agi."],
      ["Concession hypothétique", "quand bien même + conditionnel", "conditionnel", "Quand bien même il accepterait, le délai resterait court."],
      ["Cause non réalisée", "faute de + infinitif passé", "conséquence passée", "Faute d’avoir vérifié, ils ont publié une erreur."]
    ]
  },
  "c1-inversion": {
    title: "Inversion · présent et temps composés",
    note: "À l’écrit formel, certains adverbes en tête de phrase favorisent l’inversion du sujet et du verbe ; insère -t- entre deux voyelles.",
    headers: ["Déclencheur", "Construction", "Exemple"],
    rows: [
      ["Rarement", "adverbe + verbe-sujet", "Rarement observe-t-on un tel écart."],
      ["À peine", "adverbe + auxiliaire-sujet + participe", "À peine avait-il commencé que…"],
      ["Sans doute", "adverbe + verbe-sujet", "Sans doute viendra-t-elle demain."],
      ["Inversion hypothétique", "auxiliaire + sujet + participe", "Eût-elle su, elle serait intervenue."]
    ]
  },
  "c1-nominalization": {
    title: "Du verbe au nom · nominalisations fréquentes",
    note: "La nominalisation condense une action et donne un style plus synthétique, fréquent dans les écrits universitaires et administratifs.",
    headers: ["Verbe", "Nom", "Exemple nominal"],
    rows: [
      ["publier", "la publication", "la publication des résultats"],
      ["mettre en œuvre", "la mise en œuvre", "la mise en œuvre de la réforme"],
      ["décider", "la décision", "la prise de décision"],
      ["évaluer", "l’évaluation", "l’évaluation des mesures"],
      ["croître", "la croissance", "la croissance de l’activité"]
    ]
  },
  "c1-discourse": {
    title: "Connecteurs · fonction et registre",
    note: "Choisis le connecteur selon le lien logique : concession, opposition, conséquence ou reformulation.",
    headers: ["Fonction", "Connecteurs", "Exemple"],
    rows: [
      ["Concession soutenue", "nonobstant, quand bien même", "Nonobstant ces réserves, l’accord a été signé."],
      ["Opposition", "cela étant, néanmoins", "Cela étant, le risque reste élevé."],
      ["Conséquence", "dès lors, partant", "Dès lors, une révision s’impose."],
      ["Reformulation", "autrement dit, en d’autres termes", "Autrement dit, le dispositif doit être simplifié."]
    ]
  },
  "c1-register": {
    title: "Collocations · associer les bons mots",
    note: "En français formel, apprendre un nom avec son verbe habituel aide à choisir une formulation précise et naturelle.",
    headers: ["Verbe", "Complément habituel", "Exemple"],
    rows: [
      ["mener", "une étude / une analyse", "L’équipe a mené une analyse comparative."],
      ["formuler", "une hypothèse / une réserve", "Les auteurs formulent une hypothèse."],
      ["mettre", "en évidence / en œuvre", "Le rapport met en évidence un écart."],
      ["procéder", "à une vérification / une évaluation", "Il convient de procéder à une vérification."],
      ["prendre", "une décision / une mesure", "Le comité a pris une décision."]
    ]
  }
};

const vocabularyCourses = [
  {
    lvl: "A2",
    topics: [
      ["a2-quotidien","Rutinas y vida diaria","⏰",[
        ["🌅","se réveiller","despertarse"],["🛏️","se lever","levantarse"],["🚿","se doucher","ducharse"],["🥐","prendre le petit-déjeuner","desayunar"],["🚌","aller au travail","ir al trabajo"],["🍲","déjeuner","almorzar"],["🏠","rentrer à la maison","volver a casa"],["🌙","se coucher","acostarse"]
      ]],
      ["a2-logement","La casa y el alojamiento","🏠",[
        ["🛋️","le salon","el salón"],["🛏️","la chambre","el dormitorio"],["🍳","la cuisine","la cocina"],["🚿","la salle de bains","el cuarto de baño"],["🪟","la fenêtre","la ventana"],["🔑","les clés","las llaves"],["🏢","un appartement","un piso"],["💡","une pièce lumineuse","una habitación luminosa"]
      ]],
      ["a2-restauration","Comida y compras","🥖",[
        ["🥐","une baguette","una barra de pan"],["🧀","du fromage","queso"],["🍓","des fraises","fresas"],["🥩","un steak","un filete"],["🥤","une bouteille d’eau","una botella de agua"],["🧾","l’addition","la cuenta"],["🛒","faire les courses","hacer la compra"],["💶","ça coûte combien ?","¿cuánto cuesta?"]
      ]],
      ["a2-ville","La ciudad y los transportes","🚇",[
        ["🚉","la gare","la estación"],["🚇","le métro","el metro"],["🚌","l’arrêt de bus","la parada de autobús"],["🗺️","un plan de la ville","un plano de la ciudad"],["➡️","tout droit","todo recto"],["⬅️","à gauche","a la izquierda"],["➡️","à droite","a la derecha"],["🎫","un aller-retour","un billete de ida y vuelta"]
      ]],
      ["a2-sante","Salud y ocio","❤️",[
        ["🤒","avoir mal à la tête","tener dolor de cabeza"],["🌡️","avoir de la fièvre","tener fiebre"],["💊","un médicament","un medicamento"],["👩‍⚕️","prendre rendez-vous","pedir cita"],["🚶","se promener","pasear"],["🏊","nager","nadar"],["🎭","aller au cinéma","ir al cine"],["😴","se reposer","descansar"]
      ]]
    ]
  },
  {
    lvl: "B1",
    topics: [
      ["b1-travail","Trabajo y estudios","💼",[
        ["🧑‍💼","un entretien d’embauche","una entrevista de trabajo"],["📄","un CV","un currículum"],["💰","un salaire","un sueldo"],["📅","un horaire flexible","un horario flexible"],["🎓","une formation","una formación"],["🤝","un collègue","un compañero de trabajo"],["📝","postuler à un poste","solicitar un puesto"],["🏢","les conditions de travail","las condiciones laborales"]
      ]],
      ["b1-voyage","Viajes y experiencias","✈️",[
        ["🧳","faire ses bagages","hacer el equipaje"],["🛂","un passeport","un pasaporte"],["🛏️","réserver une chambre","reservar una habitación"],["🚆","rater son train","perder el tren"],["🏖️","une destination","un destino"],["🗺️","un itinéraire","un itinerario"],["🧭","se perdre","perderse"],["🌄","un paysage magnifique","un paisaje precioso"]
      ]],
      ["b1-relations","Relaciones y emociones","💬",[
        ["😊","être ravi(e)","estar encantado/a"],["😟","être inquiet / inquiète","estar preocupado/a"],["🤝","faire confiance à","confiar en"],["🙏","s’excuser auprès de","disculparse con"],["🫶","s’entendre avec","llevarse bien con"],["💭","être déçu(e)","estar decepcionado/a"],["🗣️","se mettre d’accord","ponerse de acuerdo"],["💌","garder le contact","mantener el contacto"]
      ]],
      ["b1-societe","Sociedad y medios digitales","📱",[
        ["📰","un reportage","un reportaje"],["📣","une actualité","una noticia de actualidad"],["🔎","une source fiable","una fuente fiable"],["📱","les réseaux sociaux","las redes sociales"],["🔒","protéger ses données","proteger sus datos"],["📩","envoyer une pièce jointe","enviar un archivo adjunto"],["🗨️","un commentaire","un comentario"],["✅","vérifier une information","comprobar una información"]
      ]],
      ["b1-environnement","Medioambiente y vida comunitaria","🌳",[
        ["♻️","trier les déchets","separar los residuos"],["🚲","les transports en commun","el transporte público"],["🌱","une énergie renouvelable","una energía renovable"],["💧","économiser l’eau","ahorrar agua"],["🏘️","un quartier animé","un barrio animado"],["🧹","une collecte de déchets","una recogida de residuos"],["🌍","réduire son empreinte carbone","reducir la huella de carbono"],["🤲","un bénévole","un voluntario"]
      ]]
    ]
  },
  {
    lvl: "B2",
    topics: [
      ["b2-emploi","Empleo, economía y empresa","📈",[
        ["📈","la croissance économique","el crecimiento económico"],["👥","le pouvoir d’achat","el poder adquisitivo"],["💼","un poste à responsabilités","un puesto de responsabilidad"],["📊","un chiffre d’affaires","una cifra de negocio"],["🤝","négocier un contrat","negociar un contrato"],["🧾","une hausse des prix","una subida de precios"],["🏢","la charge de travail","la carga de trabajo"],["📉","un ralentissement de l’activité","una ralentización de la actividad"]
      ]],
      ["b2-ecologie","Medioambiente y ciudad","🌍",[
        ["🌿","la biodiversité","la biodiversidad"],["🏭","les émissions de carbone","las emisiones de carbono"],["♻️","l’économie circulaire","la economía circular"],["🏙️","l’aménagement urbain","la planificación urbana"],["🚇","un réseau de transports","una red de transportes"],["🌡️","le réchauffement climatique","el calentamiento global"],["🛡️","la prévention des risques","la prevención de riesgos"],["🌱","un mode de vie durable","un estilo de vida sostenible"]
      ]],
      ["b2-science","Ciencia, tecnología y salud","🧪",[
        ["🔬","une avancée scientifique","un avance científico"],["🧬","un essai clinique","un ensayo clínico"],["🛡️","la protection des données","la protección de datos"],["🤖","l’intelligence artificielle","la inteligencia artificial"],["⚖️","un enjeu éthique","un reto ético"],["📱","un outil numérique","una herramienta digital"],["🧠","la santé mentale","la salud mental"],["📊","une étude longitudinale","un estudio longitudinal"]
      ]],
      ["b2-medias","Medios, cultura y opinión","🎙️",[
        ["📰","un éditorial","un editorial"],["📣","prendre position","posicionarse"],["🔎","étayer un argument","respaldar un argumento"],["⚖️","une controverse","una controversia"],["📚","un patrimoine culturel","un patrimonio cultural"],["🗣️","nuancer ses propos","matizar sus palabras"],["✅","des éléments probants","pruebas concluyentes"],["💬","remettre en question","cuestionar"]
      ]],
      ["b2-education","Educación y ciudadanía","🎓",[
        ["🎓","l’égalité des chances","la igualdad de oportunidades"],["🗳️","la participation citoyenne","la participación ciudadana"],["🏛️","un service public","un servicio público"],["📋","un programme scolaire","un programa escolar"],["🤲","l’engagement associatif","el compromiso asociativo"],["🗣️","le débat public","el debate público"],["⚖️","un droit fondamental","un derecho fundamental"],["📌","mettre en place une réforme","implantar una reforma"]
      ]]
    ]
  },
  {
    lvl: "C1",
    topics: [
      ["c1-recherche","Investigación y pensamiento académico","🔬",[
        ["🔬","un état de la recherche","el estado de la investigación"],["🧪","une hypothèse de travail","una hipótesis de trabajo"],["📊","un échantillon représentatif","una muestra representativa"],["🧭","un cadre théorique","un marco teórico"],["📝","étayer une démonstration","respaldar una demostración"],["⚖️","la portée des résultats","el alcance de los resultados"],["📚","une publication évaluée par les pairs","una publicación revisada por pares"],["🔎","un biais méthodologique","un sesgo metodológico"]
      ]],
      ["c1-institutions","Instituciones, derecho y gobernanza","🏛️",[
        ["🏛️","une instance décisionnelle","un órgano decisorio"],["⚖️","un cadre réglementaire","un marco normativo"],["📜","une disposition législative","una disposición legislativa"],["🤝","un accord multipartite","un acuerdo multipartito"],["🗳️","la redevabilité publique","la rendición de cuentas"],["📋","un mécanisme de contrôle","un mecanismo de control"],["🔍","saisir une juridiction","recurrir a un tribunal"],["📌","une mesure contraignante","una medida vinculante"]
      ]],
      ["c1-economie","Economía, trabajo y transformaciones","📊",[
        ["📉","un déséquilibre structurel","un desequilibrio estructural"],["📈","la redistribution des richesses","la redistribución de la riqueza"],["💼","la précarisation de l’emploi","la precarización del empleo"],["🌐","une chaîne de valeur","una cadena de valor"],["🏭","une réindustrialisation","una reindustrialización"],["⚖️","un levier de croissance","una palanca de crecimiento"],["🧭","une mutation sectorielle","una transformación sectorial"],["📌","une trajectoire budgétaire","una trayectoria presupuestaria"]
      ]],
      ["c1-innovation","Tecnología, datos y sociedad","🤖",[
        ["🤖","un système décisionnel automatisé","un sistema automatizado de toma de decisiones"],["🛡️","la souveraineté numérique","la soberanía digital"],["📡","une infrastructure de données","una infraestructura de datos"],["⚖️","un principe de précaution","un principio de precaución"],["🔒","la traçabilité des algorithmes","la trazabilidad de los algoritmos"],["🌐","un usage détourné","un uso indebido"],["🧠","une avancée de rupture","un avance disruptivo"],["📌","l’encadrement réglementaire","la regulación normativa"]
      ]],
      ["c1-culture","Cultura, patrimonio y crítica","🎭",[
        ["🎭","une œuvre marquante","una obra destacada"],["🖼️","un parti pris esthétique","una elección estética"],["📚","une réception critique","una recepción crítica"],["🎬","une mise en scène","una puesta en escena"],["🏛️","la mémoire collective","la memoria colectiva"],["🗣️","un regard rétrospectif","una mirada retrospectiva"],["✨","une démarche novatrice","un enfoque innovador"],["📌","faire date","marcar una época"]
      ]],
      ["c1-argumentation","Argumentación y expresiones formales","✍️",[
        ["⚖️","à maints égards","en muchos sentidos"],["🧭","force est de constater que","hay que reconocer que"],["📌","cela étant","dicho esto"],["🔎","à la lumière de","a la luz de"],["➡️","dans cette perspective","desde esta perspectiva"],["🗣️","il n’en reste pas moins que","no por ello deja de ser cierto que"],["🤝","s’inscrire dans le prolongement de","inscribirse en la continuidad de"],["🔁","au demeurant","por lo demás"]
      ]]
    ]
  }
];

const grammarModules = grammarCourses.flatMap(course => course.topics.map(topic => ({
  id: topic.id,
  lvl: course.lvl,
  k: "g",
  t: topic.t,
  en: topic.focus,
  ic: topic.ic,
  th: `<div class="card"><h2>La règle en contexte</h2><p>${topic.focus}</p><div class="tblw"><table><tr><th>Uso</th><th>Construcción</th><th>Exemple en français</th><th>En español</th></tr>${topic.rows.map(row => `<tr><td><b>${row[0]}</b></td><td>${row[1]}</td><td><i>${row[2]}</i></td><td>${row[3]}</td></tr>`).join("")}</table></div><p>Escucha los ejemplos y observa qué elemento cambia según la intención, el tiempo o el contexto.</p></div><div class="tip"><b>Consejo:</b> Lee la frase completa y busca primero el verbo conjugado; después identifica qué función cumple cada pronombre o conector.</div>${/(présent|presente|passé|imparfait|futur|futuro|conditionnel|subjonctif|impératif|imperativo)/i.test(topic.t) ? `<div class="card conjugation-prompt"><b>🔤 ¿Quieres ver la conjugación completa?</b><p>Consulta las tablas interactivas de verbos regulares e irregulares y practica los tiempos de A2 a C1.</p><a class="btn blue small" href="#/conjugacion">Abrir el taller de los verbos →</a></div>` : ""}`,
  voc: topic.words,
  ex: [...topic.checks.map(([q, o, a, t]) => ({ q, o, a, t })), { w: topic.rows[0][2], t: topic.rows[0][3] }],
  tx: { ti: `En contexto: ${topic.t}`, b: `<p>${topic.read.replace(/([A-Za-zÀ-ÿ’'-]{4,})/u, "<u>$1</u>")}</p><p class="muted">Fíjate en las formas destacadas: <i>${topic.rows[0][2]}</i></p>` },
  q: topic.words.slice(0, 2).map((word, index) => [`¿Qué significa «${word[1]}»?`, [word[2], topic.words[(index + 2) % topic.words.length][2], topic.words[(index + 3) % topic.words.length][2]], 0]),
  sp: ["Explique cette règle avec vos propres mots et donnez un exemple.", "Dans quelle situation pourriez-vous employer cette structure ?", "Formulez une question et une réponse en réutilisant le modèle de la leçon."]
})));

const vocabularyModules = vocabularyCourses.flatMap(course => course.topics.map(([id, title, ic, words]) => {
  const quiz = words.slice(0, 5).map((word, index) => {
    const answerIndex = index % 4;
    const options = words.filter((_, candidateIndex) => candidateIndex !== index).slice(0, 3).map(candidate => candidate[1]);
    options.splice(answerIndex, 0, word[1]);
    return { q: `¿Cómo se dice «${word[2]}» en francés?`, o: options, a: answerIndex, t: `${word[1]} = ${word[2]}` };
  });
  const text = words.slice(0, 4).map(word => `<tr><td><b>${word[1]}</b></td><td>${word[2]}</td></tr>`).join("");
  return {
    id, lvl: course.lvl, k: "v", t: title, en: `Palabras y expresiones para desenvolverte en ${title.toLowerCase()}.`, ic,
    th: `<div class="card"><h2>Palabras para cada situación</h2><p>Aprende las expresiones en francés junto con su significado. Pulsa las tarjetas para escucharlas.</p><div class="tblw"><table><tr><th>Français</th><th>Español</th></tr>${text}</table></div><div class="tip"><b>Para recordar:</b> Escucha cada expresión, repítela en voz alta y luego úsala en una frase propia.</div></div>`,
    voc: words, ex: quiz,
    tx: { ti: title, b: `<p>Pour échanger à ce sujet, quelques expressions sont particulièrement utiles : <u>${words[0][1]}</u>, <u>${words[1][1]}</u> et <u>${words[2][1]}</u>. Elles permettent de décrire une situation, de raconter une expérience et de mieux comprendre son interlocuteur.</p><p>Associe chaque expression à sa signification, puis essaie de l’utiliser dans une phrase personnelle.</p>` },
    q: words.slice(0, 2).map((word, index) => [`¿Qué significa «${word[1]}»?`, [word[2], words[(index + 2) % words.length][2], words[(index + 3) % words.length][2]], 0]),
    sp: ["Présentez une situation dans laquelle ce vocabulaire pourrait vous être utile.", "Quelles expressions de cette liste vous semblent les plus utiles au quotidien ?", `Construisez une phrase en réutilisant « ${words[0][1]} ».`]
  };
}));

window.CAMINO.push(...grammarModules, ...vocabularyModules);
