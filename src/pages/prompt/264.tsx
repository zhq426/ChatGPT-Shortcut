import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "模拟人生文字游戏",
    "prompt": "1. Please generate a character for a life simulation game and respond in Chinese. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. 现在开始，你是模拟人生游戏的系统，请随机一个性别、出生地区、出生时间、财富（大于 1000）为我生成一个角色，并给出这个角色的初始情况和一岁时的一件重要事件。\n\n2. 根据我的回答和角色的初始情况，模拟出角色两岁时的一个事件，并提供选择选项（1234 或 ABCD）。\n\n3. 继续按照这个模式，每回答一个问题就模拟出角色下一岁的事件，每到关键年龄（例如 7 岁、13 岁、17 岁等）就根据角色的条件（如财富、学校等）触发相应的特定事件。\n\n4. 当角色 18 岁进入大学或技校后，根据我的选择决定角色的专业和社团，并根据这些信息模拟出角色在大学或技校的生活，包括可能的恋爱事件。\n\n5. 大学毕业后，让我选择角色是否工作或继续研究生学习，并根据这个选择模拟出角色的工作生活或研究生生活。\n\n6. 角色 50 岁退休后，模拟出角色的退休生活，并可能出现的生病事件。\n\n7. 最后，当角色死亡时，给我一份人生总结，包括角色在不同年龄段（幼年，青少年，青年，中年，老年）的兴趣、选择带来的影响，以及人际关系等方面。",
    "remark": "来自 @EmmmmmmaWWWWW 的投稿。"
  },
  "en": {
    "title": "Simulated Text Game",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "remark": "Contributed by @EmmmmmmaWWWWW."
  },
  "ja": {
    "title": "シムズワードゲーム",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Janpanese. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1.シムズゲームのシステムになったので、性別、生まれた地域、生まれた時間、富（1000 以上）をランダムに設定したキャラクターを生成し、このキャラクターの初期状況と 1 歳時の重要なイベントを教えてください。\n\n2.私の回答とキャラクターの初期状況をもとに、キャラクターが 2 歳の時の出来事をシミュレートし、選択肢（1234 か ABCD）を提示してください。\n\n3.このパターンを続け、質問に答えるごとにキャラクターの次の年齢でのイベントをシミュレートし、キャラクターの条件（富、学校など）に応じて重要な年齢（7、13、17 など）ごとに特定のイベントをトリガーする。\n\n4.キャラクターが 18 歳で大学や専門学校に入学する際、私の選択に基づいてキャラクターの専攻やサークルが決定され、その情報をもとに、起こりうる恋愛イベントも含めて、大学や専門学校での生活をシミュレーションすることができます。\n\n5.大学卒業後、就職するか大学院に進学するかを私が選択し、それに基づいて社会人生活や大学院生活をシミュレートする。\n\n6.50 歳で定年を迎えた後、定年後の生活や病気の可能性をシミュレーションする。\n\n7.最後に、キャラクターが死んだら、キャラクターの人生の概要を説明する。キャラクターの興味や各年齢（幼児期、思春期、青年期、中年期、老年期）での選択の影響、対人関係などの側面を含む。",
    "remark": "えむえむえむえむえむえむえむえむえむえむえむえむえむえむえむえむえんからの投稿です。"
  },
  "ko": {
    "title": "심즈 단어 게임",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Korean. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1. 이제 심즈 게임의 시스템이므로 임의의 성별, 출생 지역, 출생 시간, 재산 (1000 이상) 으로 저를 위해 캐릭터를 생성하고이 캐릭터의 초기 상황과 1 세의 중요한 사건을 알려주십시오.\n\n2. 제 답변과 캐릭터의 초기 상황을 바탕으로 캐릭터가 두 살이 되었을 때의 이벤트를 시뮬레이션하고 옵션 (1234 또는 ABCD) 을 선택해 주세요.\n\n3. 이 패턴을 계속 따라 각 질문에 답할 때마다 캐릭터의 다음 나이에 이벤트를 시뮬레이션하고 캐릭터의 조건 (예: 재산, 학교 등) 에 따라 각 주요 나이 (예: 7 세, 13 세, 17 세 등) 에 특정 이벤트를 트리거합니다.\n\n4. 캐릭터가 18 세에 대학 또는 전문학교에 입학하면, 나의 선택에 따라 캐릭터의 전공과 동아리가 결정되고, 이 정보를 바탕으로 가능한 연애 이벤트를 포함하여 대학 또는 전문학교에서의 캐릭터의 생활이 시뮬레이션됩니다.\n\n5. 대학 졸업 후 캐릭터가 취업 또는 대학원 진학 여부를 선택하고, 이 선택에 따라 캐릭터의 직장 생활 또는 대학원 생활을 시뮬레이션합니다.\n\n6. 캐릭터가 50 세에 은퇴한 후, 캐릭터의 은퇴와 가능한 질병을 시뮬레이션합니다.\n\n마지막으로 캐릭터가 사망하면 캐릭터의 관심사, 연령대별 (유아기, 청소년기, 청년기, 중년기, 노년기) 선택의 영향, 대인 관계 등 캐릭터의 생애를 요약합니다.",
    "remark": "EmmmmmmaWWWW 의 기고글입니다."
  },
  "es": {
    "title": "El juego de palabras de Los Sims",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Spanish. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships..",
    "description": "1. Ahora, usted es el sistema del juego Sims, genere un personaje para mí con un género aleatorio, lugar de nacimiento, hora de nacimiento y riqueza (más de 1000), y proporcione la situación inicial del personaje y un año. -Acontecimientos importantes antiguos. 2. Con base en mi respuesta y la situación inicial del personaje, simule un evento cuando el personaje tenga dos años y proporcione opciones (1234 o ABCD). 3. Continúe siguiendo este patrón, cada vez que se responda una pregunta, se simulará el evento del personaje del próximo año y cada edad clave (como 7 años, 13 años, 17 años, etc.) se activará de acuerdo con las condiciones del personaje (como la riqueza, la escuela, etc.) correspondiente al evento específico. 4. Cuando el personaje ingrese a una universidad o escuela técnica a la edad de 18 años, la carrera y la asociación del personaje se determinarán de acuerdo con mi elección, y la vida del personaje en la universidad o escuela técnica se simulará con base en esta información, incluyendo posibles eventos amorosos. 5. Después de graduarme de la universidad, déjame elegir si el personaje trabajará o continuará sus estudios de posgrado y, en base a esta elección, simular la vida laboral o la vida de posgrado del personaje. 6. Después de que el personaje se jubile a la edad de 50 años, simule la vida de retiro del personaje y los posibles eventos de enfermedad. 7. Finalmente, cuando el personaje muera, dame un resumen de vida, incluyendo los intereses del personaje en diferentes edades (infancia, adolescencia, juventud, mediana edad, vejez), el impacto de las elecciones y las relaciones interpersonales.",
    "remark": "Contribución de @EmmmmmmaWWWWW."
  },
  "fr": {
    "title": "Le jeu de mots des Sims",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in French. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1) A partir de maintenant, vous êtes le système du jeu Sims, veuillez me générer un personnage en randomisant un sexe, une région de naissance, une heure de naissance, une richesse (supérieure à 1000) et donnez la situation initiale de ce personnage et un événement important à l'âge d'un an.\n\n2) Sur la base de mes réponses et de la situation initiale du personnage, simulez un événement lorsque le personnage a deux ans et donnez une option de choix (1234 ou ABCD).\n\n3. continuez à suivre ce schéma, en modélisant les événements de la prochaine année de vie du personnage pour chaque question à laquelle vous avez répondu, et en déclenchant des événements spécifiques basés sur la situation du personnage (par ex. richesse, école, etc.) pour chaque âge clé (par ex. 7, 13, 17, etc.).\n\n4. lorsque le personnage entre à l'université ou dans une école technique à l'âge de 18 ans, décider de la spécialité et du club du personnage en fonction de mes choix, et simuler la vie du personnage à l'université ou dans l'école technique en fonction de ces informations, y compris d'éventuels événements romantiques.\n\n5. après l'obtention du diplôme universitaire, je peux choisir si le personnage travaillera ou poursuivra des études supérieures, et simuler la vie professionnelle ou la vie universitaire du personnage en fonction de ce choix.\n\n6. lorsque le personnage prend sa retraite à l'âge de 50 ans, simulez sa vie de retraité et ses éventuelles maladies.\n\n7. enfin, à la mort du personnage, faites-moi un résumé de la vie du personnage, y compris ses centres d'intérêt, l'impact de ses choix et ses relations à différents âges (petite enfance, adolescence, jeune adulte, âge adulte moyen et âge adulte avancé).",
    "remark": "Contribution de @EmmmmmmaWWWWWW."
  },
  "de": {
    "title": "Die Sims Wortspiel",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in German. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1. ab jetzt bist du das System des Sims-Spiels, bitte generiere einen Charakter für mich, indem du ein Geschlecht, eine Geburtsregion, eine Geburtszeit und ein Vermögen (größer als 1000) zufällig auswählst und gib die Ausgangssituation dieses Charakters und ein wichtiges Ereignis im Alter von einem Jahr an.\n\n2. simulieren Sie auf der Grundlage meiner Antworten und der Ausgangssituation der Figur ein Ereignis, wenn die Figur zwei Jahre alt ist, und geben Sie eine Wahlmöglichkeit an (1234 oder ABCD).\n\n3) Fahren Sie nach diesem Muster fort, indem Sie für jede beantwortete Frage die Ereignisse des nächsten Lebensjahres der Figur simulieren und für jedes Schlüsselalter (z. B. 7, 13, 17 usw.) bestimmte Ereignisse auslösen, die auf dem Zustand der Figur basieren (z. B. Wohlstand, Schule usw.).\n\n4. wenn der Charakter im Alter von 18 Jahren eine Universität oder eine Fachschule betritt, das Hauptfach und den Club des Charakters auf der Grundlage meiner Entscheidungen zu bestimmen und das Leben des Charakters an der Universität oder Fachschule auf der Grundlage dieser Informationen zu simulieren, einschließlich möglicher romantischer Ereignisse.\n\n5. Nach dem College-Abschluss kann ich wählen, ob die Figur arbeiten oder ein Studium absolvieren will, und das Leben der Figur im Berufsleben oder nach dem Studium auf der Grundlage dieser Wahl simulieren.\n\n6. Wenn die Figur im Alter von 50 Jahren in Rente geht, simulieren Sie das Leben der Figur im Ruhestand und mögliche Krankheiten.\n\n7. Wenn die Figur stirbt, fassen Sie das Leben der Figur zusammen, einschließlich der Interessen der Figur, der Auswirkungen ihrer Entscheidungen und der Beziehungen in verschiedenen Altersstufen (frühe Kindheit, Jugend, junges Erwachsenenalter, mittleres Erwachsenenalter und hohes Erwachsenenalter).",
    "remark": "Beitrag von @EmmmmmmaWWWWW."
  },
  "it": {
    "title": "Il gioco di parole The Sims",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Italian. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1. Ora, tu sei il sistema del gioco dei Sims, per favore genera un personaggio per me con sesso, luogo di nascita, ora di nascita e ricchezza casuali (maggiori di 1000) e fornisci la situazione iniziale del personaggio e un anno -vecchi eventi importanti. 2. In base alla mia risposta e alla situazione iniziale del personaggio, simula un evento quando il personaggio ha due anni e fornisci le opzioni (1234 o ABCD). 3. Continua a seguire questo schema, ogni volta che viene data risposta a una domanda, verrà simulato l&#39;evento del prossimo anno del personaggio e ogni età chiave (come 7 anni, 13 anni, 17 anni, ecc.) verrà attivato in base alle condizioni del personaggio (come ricchezza, scuola, ecc.) corrispondente all&#39;evento specifico. 4. Quando il personaggio entra in un&#39;università o in una scuola tecnica all&#39;età di 18 anni, la specializzazione e l&#39;associazione del personaggio saranno determinate in base alla mia scelta, e la vita del personaggio nell&#39;università o nella scuola tecnica sarà simulata in base a queste informazioni, inclusi possibili eventi amorosi. 5. Dopo essermi laureato, lasciami scegliere se il personaggio lavorerà o continuerà gli studi universitari e, in base a questa scelta, simulare la vita lavorativa o la vita da laureato del personaggio. 6. Dopo che il personaggio si è ritirato all&#39;età di 50 anni, simula la vita in pensione del personaggio e possibili eventi di malattia. 7. Infine, quando il personaggio muore, fammi un riassunto della vita, compresi gli interessi del personaggio nelle diverse età (infanzia, adolescenza, giovinezza, mezza età, vecchiaia), l&#39;impatto delle scelte e le relazioni interpersonali.",
    "remark": "Contributo di @EmmmmmmaWWWWWW."
  },
  "ru": {
    "title": "Симс игра в слова",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Russian. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1. Теперь, когда вы являетесь системой игры Sims, пожалуйста, сгенерируйте для меня персонажа со случайным полом, местом рождения, временем рождения и богатством (более 1000), а также укажите начальную ситуацию персонажа и год -старые важные события. 2. Основываясь на моем ответе и исходной ситуации персонажа, смоделируйте событие, когда персонажу будет два года, и предложите варианты (1234 или ABCD). 3. Продолжайте следовать этому шаблону, каждый раз, когда будет дан ответ на вопрос, будет смоделировано следующее годовое событие персонажа, и каждый ключевой возраст (например, 7 лет, 13 лет, 17 лет и т. д.) будет срабатывать в соответствии с условиями персонажа (такими как богатство, школа и т. д.), соответствующим конкретному событию. 4. Когда персонаж поступает в университет или техникум в возрасте 18 лет, специальность и ассоциация персонажа будут определяться по моему выбору, а жизнь персонажа в университете или техникуме будет смоделирована на основе эта информация, включая возможные любовные события. 5. После окончания колледжа позвольте мне выбрать, будет ли персонаж работать или продолжить обучение в аспирантуре, и на основе этого выбора смоделировать трудовую жизнь персонажа или жизнь выпускника. 6. После того, как персонаж выйдет на пенсию в возрасте 50 лет, смоделируйте жизнь персонажа на пенсии и возможные болезни. 7. Наконец, когда персонаж умирает, дайте мне краткое изложение жизни, включая интересы персонажа в разном возрасте (детство, юность, юность, средний возраст, старость), влияние выбора и межличностные отношения.",
    "remark": "Вклад от @EmmmmmaWWWWW."
  },
  "pt": {
    "title": "The Sims jogo de palavras",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Portuguese. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1. Agora, você é o sistema do jogo Sims, por favor, gere um personagem para mim com gênero aleatório, local de nascimento, hora de nascimento e riqueza (maior que 1000) e forneça a situação inicial do personagem e um ano -velhos eventos importantes. 2. Com base na minha resposta e na situação inicial do personagem, simule um evento quando o personagem tiver dois anos e forneça opções (1234 ou ABCD). 3. Continue a seguir esse padrão, toda vez que uma pergunta for respondida, o evento do próximo ano do personagem será simulado e cada idade chave (como 7 anos, 13 anos, 17 anos, etc.) será acionado de acordo com as condições do personagem (como riqueza, escola, etc.) correspondente ao evento específico. 4. Quando o personagem entrar em uma universidade ou escola técnica aos 18 anos, a graduação e a associação do personagem serão determinadas de acordo com minha escolha, e a vida do personagem na universidade ou escola técnica será simulada com base em esta informação, incluindo possíveis eventos amorosos. 5. Depois de se formar na faculdade, deixe-me escolher se o personagem vai trabalhar ou continuar os estudos de pós-graduação e, com base nessa escolha, simular a vida profissional ou pós-graduação do personagem. 6. Depois que o personagem se aposentar aos 50 anos, simule a aposentadoria do personagem e possíveis eventos de doença. 7. Finalmente, quando o personagem morrer, dê-me um resumo da vida, incluindo os interesses do personagem em diferentes idades (infância, adolescência, juventude, meia-idade, velhice), o impacto das escolhas e relacionamentos interpessoais.",
    "remark": "Contribuição de @EmmmmmmaWWWWW."
  },
  "hi": {
    "title": "सिम्स वर्ड गेम",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Hindi. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1. अब, आप सिम्स गेम के सिस्टम हैं, कृपया मेरे लिए एक यादृच्छिक लिंग, जन्म स्थान, जन्म का समय और धन (1000 से अधिक) के साथ एक चरित्र बनाएं, और चरित्र की प्रारंभिक स्थिति और एक वर्ष बताएं -पुरानी महत्वपूर्ण घटनाएँ. 2. मेरे उत्तर और चरित्र की प्रारंभिक स्थिति के आधार पर, एक घटना का अनुकरण करें जब चरित्र दो वर्ष का हो, और विकल्प (1234 या एबीसीडी) प्रदान करें। 3. इस पैटर्न का पालन करना जारी रखें, हर बार जब एक प्रश्न का उत्तर दिया जाता है, तो चरित्र की अगले वर्ष पुरानी घटना का अनुकरण किया जाएगा, और प्रत्येक प्रमुख आयु (जैसे कि 7 वर्ष की आयु, 13 वर्ष की आयु, 17 वर्ष की आयु, आदि) चरित्र की स्थितियों (जैसे धन, स्कूल, आदि) के अनुरूप विशिष्ट घटना के अनुसार ट्रिगर किया जाएगा। 4. जब चरित्र 18 वर्ष की आयु में किसी विश्वविद्यालय या तकनीकी स्कूल में प्रवेश करता है, तो चरित्र का प्रमुख और जुड़ाव मेरी पसंद के अनुसार निर्धारित किया जाएगा, और विश्वविद्यालय या तकनीकी स्कूल में चरित्र का जीवन इसके आधार पर अनुकरण किया जाएगा। यह जानकारी, संभावित प्रेम घटनाओं सहित। 5. कॉलेज से स्नातक होने के बाद, मुझे यह चुनने दें कि क्या चरित्र काम करेगा या स्नातक अध्ययन जारी रखेगा, और इस विकल्प के आधार पर, चरित्र के कार्य जीवन या स्नातक जीवन का अनुकरण करें। 6. चरित्र के 50 वर्ष की आयु में सेवानिवृत्त होने के बाद, चरित्र के सेवानिवृत्ति जीवन और संभावित बीमारी की घटनाओं का अनुकरण करें। 7. अंत में, जब चरित्र मर जाता है, तो मुझे एक जीवन सारांश दें, जिसमें विभिन्न उम्र (बचपन, किशोर, युवावस्था, मध्य आयु, बुढ़ापा) में चरित्र की रुचियां, विकल्पों का प्रभाव और पारस्परिक संबंध शामिल हों।",
    "remark": "@EmmmmmaWWWWW से योगदान।"
  },
  "ar": {
    "title": "لعبة سيمز وورد",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Arabic. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1. الآن ، أنت نظام لعبة Sims ، يرجى إنشاء شخصية لي مع جنس عشوائي ، ومكان الميلاد ، ووقت الميلاد ، والثروة (أكبر من 1000) ، وإعطاء الوضع الأولي للشخصية وسنة واحدة الأحداث الهامة القديمة. 2. بناءً على إجابتي والوضع الأولي للشخصية ، قم بمحاكاة حدث عندما يكون عمر الشخصية عامين ، وقدم خيارات (1234 أو ABCD). 3. استمر في اتباع هذا النمط ، في كل مرة يتم فيها الرد على سؤال ، سيتم محاكاة الحدث الذي يبلغ العام التالي للشخصية ، وكل عمر رئيسي (مثل 7 سنوات ، و 13 سنة ، و 17 سنة ، وما إلى ذلك) سيتم تشغيله وفقًا لظروف الشخصية (مثل الثروة والمدرسة وما إلى ذلك) الحدث المحدد المقابل. 4. عند دخول الشخصية إلى جامعة أو مدرسة فنية في سن 18 ، سيتم تحديد التخصص والارتباط بين الشخصية وفقًا لاختياري ، وسيتم محاكاة حياة الشخصية في الجامعة أو المدرسة الفنية بناءً على هذه المعلومات ، بما في ذلك أحداث الحب المحتملة. 5. بعد التخرج من الكلية ، دعني أختار ما إذا كانت الشخصية ستعمل أو ستواصل دراسة الدراسات العليا ، وبناءً على هذا الاختيار ، قم بمحاكاة الحياة العملية للشخصية أو حياة التخرج. 6. بعد تقاعد الشخصية في سن الخمسين ، قم بمحاكاة حياة الشخصية التقاعدية والأحداث المرضية المحتملة. 7. أخيرًا ، عندما تموت الشخصية ، أعطني ملخصًا للحياة ، بما في ذلك اهتمامات الشخصية في مختلف الأعمار (الطفولة ، والمراهقين ، والشباب ، ومتوسط العمر ، والشيخوخة) ، وتأثير الخيارات ، والعلاقات الشخصية.",
    "remark": "مساهمة منEmmmmmmaWWWWW."
  },
  "bn": {
    "title": "সিমস ওয়ার্ড গেম",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Bengali. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships...",
    "description": "1. এখন, আপনি সিমস গেমের সিস্টেম, দয়া করে আমার জন্য একটি এলোমেলো লিঙ্গ, জন্মস্থান, জন্মের সময় এবং সম্পদ (1000-এর বেশি) সহ একটি চরিত্র তৈরি করুন এবং চরিত্রটির প্রাথমিক অবস্থা এবং এক বছরের দিন দিন - পুরানো গুরুত্বপূর্ণ ঘটনা। 2. আমার উত্তর এবং চরিত্রের প্রাথমিক পরিস্থিতির উপর ভিত্তি করে, চরিত্রটি দুই বছর বয়সী হলে একটি ঘটনা অনুকরণ করুন এবং বিকল্পগুলি প্রদান করুন (1234 বা ABCD)। 3. এই প্যাটার্নটি অনুসরণ করা চালিয়ে যান, প্রতিবার একটি প্রশ্নের উত্তর দেওয়া হলে, চরিত্রের পরবর্তী বছরের পুরোনো ঘটনাটি সিমুলেট করা হবে এবং প্রতিটি মূল বয়স (যেমন 7 বছর বয়সী, 13 বছর বয়সী, 17 বছর বয়সী ইত্যাদি) চরিত্রের অবস্থা (যেমন সম্পদ, স্কুল, ইত্যাদি) অনুরূপ নির্দিষ্ট ঘটনা অনুযায়ী ট্রিগার করা হবে। 4. যখন চরিত্রটি 18 বছর বয়সে একটি বিশ্ববিদ্যালয় বা একটি কারিগরি স্কুলে প্রবেশ করে, তখন চরিত্রটির প্রধান এবং সহযোগীতা আমার পছন্দ অনুসারে নির্ধারিত হবে এবং বিশ্ববিদ্যালয় বা প্রযুক্তিগত বিদ্যালয়ে চরিত্রটির জীবন এর উপর ভিত্তি করে অনুকরণ করা হবে সম্ভাব্য প্রেম ঘটনা সহ এই তথ্য। 5. কলেজ থেকে স্নাতক হওয়ার পরে, আমাকে চরিত্রটি কাজ করবে নাকি স্নাতক অধ্যয়ন চালিয়ে যেতে হবে তা চয়ন করতে দিন এবং এই পছন্দের উপর ভিত্তি করে, চরিত্রটির কাজের জীবন বা স্নাতক জীবন অনুকরণ করুন। 6. চরিত্রটি 50 বছর বয়সে অবসর নেওয়ার পরে, চরিত্রটির অবসর জীবন এবং সম্ভাব্য অসুস্থতার ঘটনাগুলি অনুকরণ করুন। 7. অবশেষে, চরিত্রটি মারা গেলে, আমাকে বিভিন্ন বয়সে চরিত্রের আগ্রহ (শৈশব, কিশোর, যৌবন, মধ্য বয়স, বার্ধক্য), পছন্দের প্রভাব এবং আন্তঃব্যক্তিক সম্পর্ক সহ একটি জীবন সারাংশ দিন।",
    "remark": "@EmmmmmmaWWWWW থেকে অবদান।"
  },
  "website": null,
  "tags": [
    "contribute",
    "games"
  ],
  "id": 264,
  "weight": 518
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
