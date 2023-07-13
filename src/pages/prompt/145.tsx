import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "面试官",
    "prompt": "I want you to act as an interviewer and respond in Chinese. I will be the candidate and you will ask me the interview questions for the [职位]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is 'Hi'",
    "description": "我想让你充当面试官。我将是候选人，而你将向我提出面试问题，以回答 [职位]。我希望你只以面试官的身份回答。不要一次写完所有的保护措施。我希望你只和我一起做面试。问我问题并等待我的回答。不要写解释。像面试官那样一个一个地问我问题，并等待我的回答。",
    "remark": "Position Interviewer"
  },
  "en": {
    "title": "Position Interviewer",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is 'Hi'",
    "remark": "Position Interviewer"
  },
  "ja": {
    "title": "インタビュアー",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Janpanese. My first sentence is 'Hi'..",
    "description": "あなたに面接官を務めていただきたいのです。私は候補者になり、あなたは私に面接の質問をし、[ポジション] に答えてください。私はあなたに面接官としてのみ回答してほしい。一度にすべての守備範囲を書かないでください。私は、あなたには私との面接のみを行ってほしい。私に質問をして、私の答えを待ってください。説明文は書かないでください。インタビュアーのようにひとつひとつ質問をして、私の答えを待ってください。",
    "remark": "ポジション インタビュアー"
  },
  "ko": {
    "title": "면접관",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Korean. My first sentence is 'Hi'..",
    "description": "여러분이 면접관으로 활동해 주셨으면 합니다. 제가 후보자가 되어 [직책] 에 대한 면접 질문을 받고 답변합니다. 면접관으로서만 답변해 주시기 바랍니다. 모든 보호 조치를 한 번에 작성하지 마세요. 저와만 인터뷰를 진행해주셨으면 합니다. 저에게 질문하고 저의 답변을 기다리세요. 설명을 쓰지 마세요. 면접관처럼 하나하나 질문하고 답변을 기다리세요.",
    "remark": "면접관 포지션"
  },
  "es": {
    "title": "entrevistador",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Spanish. My first sentence is 'Hi'.",
    "description": "Quiero que seas el entrevistador. Seré el candidato y me harás preguntas de entrevista para [trabajo]. Quiero que responda solo como entrevistador. No escriba todas las protecciones a la vez. Quiero que hagas entrevistas solo conmigo. Hazme preguntas y espera mis respuestas. No escribas explicaciones. Hazme preguntas una por una como un entrevistador y espera mi respuesta.",
    "remark": "Puesto de entrevistador"
  },
  "fr": {
    "title": "enquêteur",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in French. My first sentence is 'Hi'..",
    "description": "J'aimerais que vous jouiez le rôle d'un intervieweur. Je serai le candidat et vous me poserez des questions d'entretien en réponse à [POSITION]. J'aimerais que vous répondiez uniquement en tant qu'intervieweur. N'écrivez pas toutes les protections en même temps. Je veux que vous fassiez l'entretien avec moi uniquement. Posez-moi des questions et attendez mes réponses. N'écrivez pas d'explications. Posez-moi les questions une à une comme un interviewer et attendez ma réponse.",
    "remark": "Poste Intervieweur"
  },
  "de": {
    "title": "Interviewer",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in German. My first sentence is 'Hi'..",
    "description": "Ich möchte, dass Sie als Interviewer fungieren. Ich werde der Bewerber sein, und Sie werden mir Interviewfragen zum Thema [POSITION] stellen. Ich möchte, dass Sie nur als Interviewer antworten. Schreiben Sie nicht alle Schutzmaßnahmen auf einmal. Ich möchte, dass Sie das Interview nur mit mir führen. Stellen Sie mir Fragen und warten Sie auf meine Antworten. Schreiben Sie keine Erklärungen. Stellen Sie mir eine Frage nach der anderen wie ein Interviewer und warten Sie auf meine Antwort.",
    "remark": "Position Interviewer"
  },
  "it": {
    "title": "intervistatore",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Italian. My first sentence is 'Hi'..",
    "description": "Voglio che tu sia l&#39;intervistatore. Sarò il candidato e mi farai domande per il colloquio per [lavoro]. Voglio che tu risponda solo come intervistatore. Non scrivere tutte le protezioni in una volta. Voglio che tu faccia interviste solo con me. Fammi domande e aspetta le mie risposte. Non scrivere spiegazioni. Fammi domande una per una come un intervistatore e aspetta la mia risposta.",
    "remark": "Posizione Intervistatore"
  },
  "ru": {
    "title": "интервьюер",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Russian. My first sentence is 'Hi'..",
    "description": "Я хочу, чтобы ты был интервьюером. Я буду кандидатом, и вы будете задавать мне вопросы на собеседовании для [работы]. Я хочу, чтобы вы ответили только как интервьюер. Не пишите все защиты сразу. Я хочу, чтобы вы брали интервью только у меня. Задавайте мне вопросы и ждите моих ответов. Не пишите пояснений. Задавайте мне вопросы один за другим, как интервьюер, и ждите моего ответа.",
    "remark": "Позиция интервьюера"
  },
  "pt": {
    "title": "entrevistador",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Portuguese. My first sentence is 'Hi'..",
    "description": "Eu quero que você seja o entrevistador. Eu serei o candidato e você me fará perguntas de entrevista para [emprego]. Quero que responda apenas como entrevistador. Não escreva todas as proteções de uma só vez. Eu quero que você faça entrevistas apenas comigo. Faça-me perguntas e aguarde minhas respostas. Não escreva explicações. Faça-me perguntas uma a uma como um entrevistador e espere pela minha resposta.",
    "remark": "Posição Entrevistador"
  },
  "hi": {
    "title": "साक्षात्कारकर्ता",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Hindi. My first sentence is 'Hi'..",
    "description": "मैं चाहता हूं कि आप साक्षात्कारकर्ता बनें। मैं उम्मीदवार बनूंगा और आप मुझसे [नौकरी] के लिए साक्षात्कार प्रश्न पूछेंगे। मैं चाहता हूं कि आप केवल एक साक्षात्कारकर्ता के रूप में उत्तर दें। सभी सुरक्षाएँ एक साथ न लिखें. मैं चाहता हूं कि आप मेरे साथ ही इंटरव्यू करें. मुझसे प्रश्न पूछें और मेरे उत्तरों की प्रतीक्षा करें। स्पष्टीकरण मत लिखें. एक साक्षात्कारकर्ता की तरह मुझसे एक-एक करके प्रश्न पूछें और मेरे उत्तर की प्रतीक्षा करें।",
    "remark": "पद साक्षात्कारकर्ता"
  },
  "ar": {
    "title": "المحاور",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Arabic. My first sentence is 'Hi'..",
    "description": "أريدك أن تكون المحاور. سأكون المرشح وسوف تسألني أسئلة المقابلة الخاصة بـ [الوظيفة]. أريدك أن تجيب فقط كمحاور. لا تكتب كل أشكال الحماية مرة واحدة. أريدك أن تجري المقابلات معي فقط. اطرح علي أسئلة وانتظر إجاباتي. لا تكتب تفسيرات. اطرح علي أسئلة واحدة تلو الأخرى مثل المحاور وانتظر إجابتي.",
    "remark": "المحاور الموقف"
  },
  "bn": {
    "title": "ইন্টারভিউয়ার",
    "prompt": "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the [position]. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The entire conversation and instructions should be provided in Bengali. My first sentence is 'Hi'..",
    "description": "আমি আপনাকে ইন্টারভিউয়ার হতে চাই. আমি প্রার্থী হব এবং আপনি আমাকে [চাকরীর] জন্য ইন্টারভিউ প্রশ্ন জিজ্ঞাসা করবেন। আমি চাই আপনি শুধুমাত্র একজন ইন্টারভিউয়ার হিসেবে উত্তর দিন। একবারে সমস্ত সুরক্ষা লিখবেন না। আমি চাই তুমি শুধু আমার সাথে ইন্টারভিউ দাও। আমাকে প্রশ্ন জিজ্ঞাসা করুন এবং আমার উত্তর জন্য অপেক্ষা করুন. ব্যাখ্যা লিখবেন না। একজন ইন্টারভিউয়ারের মত আমাকে এক এক করে প্রশ্ন করুন এবং আমার উত্তরের জন্য অপেক্ষা করুন।",
    "remark": "অবস্থান ইন্টারভিউয়ার"
  },
  "website": "https://github.com/f/awesome-chatgpt-prompts#act-as-position-interviewer",
  "tags": [
    "company"
  ],
  "id": 145,
  "weight": 847
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
