import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "提问循环",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"Chinese\" regardless of the language I use. Don’t show the translation process. Just write questions and answers in the destination language.\nNow, the initial question is: \"最初问题\"",
    "description": "你们的任务是自动轮流提出和回答问题。我们将从一个最初的问题开始。然后以这种模式继续回答和提问：问题：最初的问题回答：对最初问题的回答问题：关于前一个问题的原因的问题：关于前一个答案的原因的问题答复：对上一个问题的答复：对前一个问题的回答提问：关于上一个问题的答案：继续问上一个答案的原因。只有当答案是 \"That's the way it is\" 或 \"We don't know for now\"时才停止。每个问题和答案都应该是一个单句，不超过 20 个字。在每个问题前加 \"Q：\"，在每个回答前加 \"A：\"。无论我使用何种语言，都要用中文提问和回答。不要显示翻译的过程。只要用目的地语言写出问题和答案。",
    "remark": "围绕一个问题不断提问，以深化问题的理解。来自 @hkfrank996 的投稿。"
  },
  "en": {
    "title": "Response Loop",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. Just write questions and answers in the destination language.\nNow, the initial question is: ",
    "remark": "Continuously pose questions revolving around a particular issue to deepen the understanding of the problem. Contributed by @hkfrank996."
  },
  "ja": {
    "title": "クエスチョン・ループ",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Janpanese. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "あなたの仕事は、自動的に交互に質問と回答をしていくことです。まず、最初の質問から始めます。質問：最初の質問 回答：最初の質問に対する回答 質問：前の質問の理由についての質問 質問：前の回答の理由についての質問 回答：前の質問に対する回答 質問：前の質問に対する回答 質問：前の質問に対する回答：前の質問の理由についての質問を続けます。答えが「そういうことです」「今のところわかりません」のときだけ止める。各質問と回答は、20 語以内の一文とする。質問の前には \"Q:\"、答えの前には \"A: \"をつけてください。私が使用する言語にかかわらず、中国語で質問と回答をしてください。翻訳の過程を見せないでください。質問と回答は相手先の言語で書くだけでよい。",
    "remark": "課題に対する理解を深めるために、課題に対して質問をし続ける。hkfrank996 さんからの寄稿です。"
  },
  "ko": {
    "title": "질문 루프",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Korean. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "여러분의 임무는 자동으로 번갈아 가며 질문하고 답하는 것입니다. 첫 번째 질문부터 시작하겠습니다. 질문: 초기 질문 답변: 초기 질문에 대한 답변 질문: 이전 질문의 이유에 대한 질문 질문: 이전 답변의 이유에 대한 질문 답변: 이전 질문에 대한 답변 질문: 이전 질문에 대한 답변 질문: 이전 질문에 대한 답변 질문: 이전 질문에 대한 답변: 이전 답변의 이유에 대한 계속하기 등의 패턴으로 답변과 질문을 이어갑니다. 답변이 \"그렇다\" 또는 \"현재로서는 알 수 없다\"인 경우에만 중단하세요. 각 질문과 답변은 20 단어 이하의 한 문장으로 작성해야 합니다. 각 질문 앞에는 \"Q:\"를, 각 답변 앞에는 \"A:\"를 붙입니다. 사용하는 언어에 관계없이 중국어로 질문하고 답변합니다. 번역 과정을 보여주지 마세요. 질문과 답변을 대상 언어로만 작성하세요.",
    "remark": "문제에 대한 이해를 깊게 하기 위해 문제에 대해 계속 질문하세요. hkfrank996 의 기여."
  },
  "es": {
    "title": "bucle de preguntas",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Spanish. Just write questions and answers in the destination language.\nNow, the initial question is: .",
    "description": "Su tarea es tomar turnos automáticamente para hacer y responder preguntas. Comenzaremos con una pregunta inicial. Luego continúe respondiendo y haciendo preguntas en este patrón: Pregunta: La pregunta original Respuesta: La respuesta a la pregunta original Pregunta: La pregunta sobre el motivo de la pregunta anterior: La pregunta sobre el motivo de la respuesta anterior Respuesta: La respuesta a la pregunta anterior: Preguntar sobre la respuesta a la pregunta anterior: Sobre la respuesta a la pregunta anterior: La razón por la que se sigue preguntando la respuesta anterior. Solo deténgase cuando la respuesta sea &quot;Así son las cosas&quot; o &quot;No lo sabemos por ahora&quot;. Cada pregunta y respuesta debe ser una sola oración, no más de 20 palabras. Agregue &quot;P:&quot; antes de cada pregunta y &quot;A:&quot; antes de cada respuesta. No importa el idioma que use, preguntaré y responderé en chino. No mostrar el proceso de traducción. Simplemente escriba las preguntas y respuestas en el idioma de destino.",
    "remark": "Siga haciendo preguntas sobre un problema para profundizar la comprensión del problema. Contribución de @hkfrank996."
  },
  "fr": {
    "title": "cycle de questionnement",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in French. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "Votre tâche consiste à poser des questions et à y répondre automatiquement à tour de rôle. Nous commencerons par une question initiale. Ensuite, vous continuerez à répondre et à poser des questions selon le schéma suivant : question : question initiale réponse : réponse à la question initiale question : question sur la raison de la question précédente question : question sur la raison de la réponse précédente réponse : réponse à la question précédente question : réponse à la question précédente question : réponse à la question précédente question : réponse à la question précédente question : continuez à demander la raison de la réponse précédente. Ne vous arrêtez que lorsque la réponse est \"c'est comme ça\" ou \"nous ne savons pas pour l'instant\". Chaque question et réponse doit être une seule phrase de 20 mots maximum. Chaque question doit être précédée de \"Q :\" et chaque réponse de \"A :\". Posez vos questions et répondez-y en chinois, quelle que soit la langue que j'utilise. Ne montrez pas le processus de traduction. Écrivez simplement les questions et les réponses dans la langue de destination.",
    "remark": "Continuer à poser des questions autour d'un problème afin d'en approfondir la compréhension. Contribution de @hkfrank996."
  },
  "de": {
    "title": "Befragungszyklus",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in German. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "Ihre Aufgabe ist es, automatisch abwechselnd Fragen zu stellen und zu beantworten. Wir beginnen mit einer Anfangsfrage. Dann fahren Sie mit dem Beantworten und Stellen von Fragen nach diesem Muster fort: Frage: Anfangsfrage Antwort: Antwort auf die Anfangsfrage Frage: Frage nach dem Grund für die vorherige Frage: Frage nach dem Grund für die vorherige Antwort Antwort Antwort: Antwort auf die vorherige Frage: Antwort auf die vorherige Frage Frage: Antwort auf die vorherige Frage: Antwort auf die vorherige Frage: Fragen Sie weiter nach dem Grund für die vorherige Antwort. Hören Sie erst auf, wenn die Antwort lautet \"So ist es\" oder \"Das wissen wir noch nicht\". Jede Frage und Antwort sollte aus einem einzigen Satz von höchstens 20 Wörtern bestehen. Stellen Sie jede Frage mit \"Q:\" und jede Antwort mit \"A:\" vor. Stellen und beantworten Sie Fragen auf Chinesisch, unabhängig von der Sprache, die ich verwende. Zeigen Sie nicht den Übersetzungsprozess. Schreiben Sie nur die Fragen und Antworten in der Zielsprache.",
    "remark": "Stellen Sie immer wieder Fragen zu einem Problem, um das Verständnis für das Problem zu vertiefen. Beitrag von @hkfrank996."
  },
  "it": {
    "title": "ciclo di domande",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Italian. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "Il tuo compito è fare automaticamente a turno domande e risposte. Inizieremo con una domanda iniziale. Quindi continua a rispondere e a porre domande in questo schema: Domanda: la domanda originale Risposta: la risposta alla domanda originale Domanda: la domanda sul motivo della domanda precedente: la domanda sul motivo della risposta precedente Risposta: la risposta alla domanda precedente: chiedi la risposta alla domanda precedente: la risposta alla domanda precedente: il motivo per cui continui a chiedere la risposta precedente. Fermati solo quando la risposta è &quot;È così che stanno le cose&quot; o &quot;Per ora non lo sappiamo&quot;. Ogni domanda e risposta dovrebbe essere una singola frase, non più di 20 parole. Aggiungi &quot;Q:&quot; prima di ogni domanda e &quot;A:&quot; prima di ogni risposta. Indipendentemente dalla lingua che uso, chiederò e risponderò in cinese. Non mostrare il processo di traduzione. Basta scrivere le domande e le risposte nella lingua di destinazione.",
    "remark": "Continua a fare domande su un problema per approfondire la comprensione del problema. Contributo di @hkfrank996."
  },
  "ru": {
    "title": "цикл вопросов",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Russian. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "Ваша задача состоит в том, чтобы автоматически по очереди задавать вопросы и отвечать на них. Мы начнем с первоначального вопроса. Затем продолжайте отвечать и задавать вопросы по следующей схеме: Вопрос: Исходный вопрос Ответ: Ответ на исходный вопрос Вопрос: Вопрос о причине предыдущего вопроса: Вопрос о причине предыдущего ответа Ответ: Ответ на исходный вопрос. предыдущий вопрос: Спросите об ответе на предыдущий вопрос: Об ответе на предыдущий вопрос: Причина, по которой вы продолжаете задавать предыдущий ответ. Останавливайтесь только тогда, когда ответ «Так оно и есть» или «Мы пока не знаем». Каждый вопрос и ответ должны быть одним предложением, не более 20 слов. Добавьте «Q:» перед каждым вопросом и «A:» перед каждым ответом. Независимо от того, какой язык я использую, я буду спрашивать и отвечать на китайском языке. Не показывать процесс перевода. Просто напишите вопросы и ответы на языке назначения.",
    "remark": "Продолжайте задавать вопросы по проблеме, чтобы углубить понимание проблемы. Вклад от @hkfrank996."
  },
  "pt": {
    "title": "ciclo de perguntas",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Portuguese. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "Sua tarefa é se revezar automaticamente fazendo e respondendo perguntas. Vamos começar com uma pergunta inicial. Em seguida, continue respondendo e fazendo perguntas neste padrão: Pergunta: A pergunta original Resposta: A resposta à pergunta original Pergunta: A pergunta sobre o motivo da pergunta anterior: A pergunta sobre o motivo da resposta anterior Resposta: A resposta à pergunta anterior pergunta anterior: Pergunte sobre a resposta da pergunta anterior: Sobre a resposta da pergunta anterior: O motivo para continuar perguntando a resposta anterior. Só pare quando a resposta for &quot;É assim mesmo&quot; ou &quot;Não sabemos por enquanto&quot;. Cada pergunta e resposta deve ser uma única frase, não mais que 20 palavras. Adicione &quot;Q:&quot; antes de cada pergunta e &quot;A:&quot; antes de cada resposta. Não importa o idioma que eu use, vou perguntar e responder em chinês. Não mostre o processo de tradução. Basta escrever as perguntas e respostas no idioma de destino.",
    "remark": "Continue fazendo perguntas sobre um problema para aprofundar a compreensão do problema. Contribuição de @hkfrank996."
  },
  "hi": {
    "title": "प्रश्न चक्र",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Hindi. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "आपका कार्य स्वचालित रूप से बारी-बारी से प्रश्न पूछना और उत्तर देना है। हम एक प्रारंभिक प्रश्न से शुरुआत करेंगे। फिर इस पैटर्न में उत्तर देना और पूछना जारी रखें: प्रश्न: मूल प्रश्न उत्तर: मूल प्रश्न का उत्तर प्रश्न: पिछले प्रश्न के कारण के बारे में प्रश्न: पिछले उत्तर के कारण के बारे में प्रश्न प्रतिक्रिया: उत्तर का उत्तर पिछला प्रश्न: पिछले प्रश्न के उत्तर के बारे में पूछें: पिछले प्रश्न के उत्तर के बारे में: पिछला उत्तर पूछते रहने का कारण। केवल तभी रुकें जब उत्तर &quot;ऐसा ही है&quot; या &quot;अभी हम नहीं जानते&quot; हो। प्रत्येक प्रश्न और उत्तर एक वाक्य होना चाहिए, 20 शब्दों से अधिक नहीं। प्रत्येक प्रश्न से पहले &quot;Q:&quot; और प्रत्येक उत्तर से पहले &quot;A:&quot; जोड़ें। इससे कोई फर्क नहीं पड़ता कि मैं किस भाषा का उपयोग करता हूं, मैं चीनी भाषा में पूछूंगा और उत्तर दूंगा। अनुवाद प्रक्रिया न दिखाएं. बस प्रश्न और उत्तर गंतव्य भाषा में लिखें।",
    "remark": "समस्या की समझ को गहरा करने के लिए किसी समस्या से संबंधित प्रश्न पूछते रहें। @hkfrank996 से योगदान।"
  },
  "ar": {
    "title": "حلقة السؤال",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Arabic. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "مهمتك هي أن تتناوب تلقائيًا في طرح الأسئلة والإجابة عليها. سنبدأ بسؤال أولي. ثم تابع الإجابة وطرح الأسئلة في هذا النمط: السؤال: السؤال الأصلي الإجابة: الإجابة على السؤال الأصلي السؤال: السؤال عن سبب السؤال السابق: السؤال عن سبب الإجابة السابقة الإجابة: الإجابة على السؤال السؤال السابق: اسأل عن إجابة السؤال السابق: حول إجابة السؤال السابق: سبب الاستمرار في طرح الإجابة السابقة. توقف فقط عندما تكون الإجابة &quot;هكذا هي&quot; أو &quot;لا نعرف الآن&quot;. يجب أن يكون كل سؤال وجواب جملة واحدة ، لا تزيد عن 20 كلمة. أضف &quot;س:&quot; قبل كل سؤال و &quot;أ:&quot; قبل كل إجابة. بغض النظر عن اللغة التي أستخدمها ، سوف أسأل وأجيب باللغة الصينية. لا تظهر عملية الترجمة. فقط اكتب الأسئلة والأجوبة بلغة الوجهة.",
    "remark": "استمر في طرح الأسئلة حول مشكلة ما لتعميق فهم المشكلة. مساهمة من @ hkfrank996."
  },
  "bn": {
    "title": "প্রশ্ন লুপ",
    "prompt": "Your task is to automatically take turns asking and answering questions. We’ll begin with an initial question. Then go on answering and asking in this pattern:\nQuestion: The initial question\nAnswer: The answer to the initial question\nQuestion: The question about the reason for the previous answer\nAnswer: The answer to the previous question\nQuestion:\nKeep asking about the reason for the last answer. Stop only when the answer is \"That's the way it is\" or \"We don't know for now\". Each question and answer should be a single sentence with no more than 20 words. Add \"Q: \" before each question and \"A: \" before each answer.\nAsk and answer in \"English\" regardless of the language I use. Don’t show the translation process. The entire conversation and instructions should be provided in Bengali. Just write questions and answers in the destination language.\nNow, the initial question is: ..",
    "description": "আপনার কাজ হল স্বয়ংক্রিয়ভাবে প্রশ্ন জিজ্ঞাসা করা এবং উত্তর দেওয়া। আমরা একটি প্রাথমিক প্রশ্ন দিয়ে শুরু করব। তারপর এই প্যাটার্নে প্রশ্নের উত্তর দেওয়া এবং জিজ্ঞাসা করা চালিয়ে যান: প্রশ্ন: মূল প্রশ্নের উত্তর: মূল প্রশ্নের উত্তর প্রশ্ন: আগের প্রশ্নের কারণ সম্পর্কে প্রশ্ন: আগের উত্তরের কারণ সম্পর্কে প্রশ্ন উত্তর: উত্তরের উত্তর পূর্ববর্তী প্রশ্ন: পূর্ববর্তী প্রশ্নের উত্তর সম্পর্কে জিজ্ঞাসা করুন: পূর্ববর্তী প্রশ্নের উত্তর সম্পর্কে: পূর্ববর্তী উত্তর জিজ্ঞাসা চালিয়ে যাওয়ার কারণ। শুধুমাত্র তখনই থামুন যখন উত্তর হবে &quot;এটাই হচ্ছে&quot; বা &quot;আমরা এখনই জানি না&quot;। প্রতিটি প্রশ্ন এবং উত্তর একটি একক বাক্য হওয়া উচিত, 20 শব্দের বেশি নয়। প্রতিটি প্রশ্নের আগে &quot;Q:&quot; এবং প্রতিটি উত্তরের আগে &quot;A:&quot; যোগ করুন। আমি যে ভাষাই ব্যবহার করি না কেন, আমি চাইনিজ ভাষায় প্রশ্ন করব এবং উত্তর দেব। অনুবাদ প্রক্রিয়া দেখাবেন না। শুধু গন্তব্য ভাষায় প্রশ্ন ও উত্তর লিখুন।",
    "remark": "সমস্যাটি বোঝার জন্য একটি সমস্যাকে ঘিরে প্রশ্ন জিজ্ঞাসা করতে থাকুন। @hkfrank996 থেকে অবদান।"
  },
  "website": null,
  "tags": [
    "contribute",
    "mind"
  ],
  "id": 250,
  "weight": 546
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
