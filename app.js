const topics = [
  {
    id: "depression",
    label: "우울증",
    title: "Depression intake",
    patient: "Alex Morgan",
    brief: "32-year-old office worker with low mood, poor sleep, and loss of interest.",
    targets: ["Chief complaint", "Duration", "Anhedonia", "Sleep", "Suicidal ideation", "Function"],
    patientLines: [
      "I've been feeling down for about two months, and I don't really enjoy anything lately.",
      "I sleep too much on weekends, but on weekdays I wake up around 4 a.m.",
      "Work has been hard. I can still go, but I barely get things done.",
      "Sometimes I think it would be easier not to wake up, but I don't have a plan."
    ],
    essentials: {
      easy: [
        "How long have you been feeling this way?",
        "Have you lost interest in things you usually enjoy?",
        "How has your sleep been?",
        "Have you had thoughts of hurting yourself?",
        "How is this affecting your work or daily life?"
      ],
      natural: [
        "When did you first notice your mood changing?",
        "Are there things you used to enjoy that do not feel enjoyable now?",
        "What has your sleep been like recently?",
        "Have you had any thoughts that life is not worth living, or thoughts of harming yourself?",
        "How much is this affecting your work, relationships, or daily routine?"
      ],
      professional: [
        "Can you walk me through when these depressive symptoms began and how they have progressed?",
        "Have you noticed diminished interest or pleasure in most activities?",
        "Are you having initial, middle, or early-morning insomnia, or sleeping more than usual?",
        "I need to ask directly: have you had passive death wishes, suicidal thoughts, a plan, or intent?",
        "What degree of occupational or social impairment have these symptoms caused?"
      ]
    },
    blank: {
      prompt: "Have you had any thoughts that life is not worth ______, or thoughts of harming yourself?",
      answer: "living",
      hint: "life is not worth ___"
    },
    choice: {
      prompt: "Which question best assesses anhedonia?",
      options: [
        "Are there things you used to enjoy that do not feel enjoyable now?",
        "Do you usually drink coffee in the morning?",
        "How many siblings do you have?",
        "Have you ever had surgery?"
      ],
      answer: 0
    },
    order: "Have you had any thoughts of harming yourself"
  },
  {
    id: "panic",
    label: "공황장애",
    title: "Panic attacks",
    patient: "Jordan Lee",
    brief: "27-year-old graduate student with sudden episodes of palpitations and fear.",
    targets: ["Onset", "Peak", "Physical symptoms", "Avoidance", "Trigger", "Emergency visits"],
    patientLines: [
      "It comes out of nowhere. My heart races and I feel like I might die.",
      "The worst part usually hits within ten minutes.",
      "I avoid the subway now because I'm scared it will happen there.",
      "I went to the ER once, but they said my heart was okay."
    ],
    essentials: {
      easy: [
        "What happens during the attack?",
        "How quickly does it get worse?",
        "How long does it last?",
        "Do you avoid places because of the attacks?",
        "Have you been checked by a doctor for your heart?"
      ],
      natural: [
        "Can you describe what you feel in your body during an attack?",
        "How quickly do the symptoms peak?",
        "About how long does an episode usually last?",
        "Have you started avoiding places or situations because you fear another attack?",
        "Have you had any medical evaluation for these symptoms?"
      ],
      professional: [
        "During these episodes, do you experience palpitations, shortness of breath, chest discomfort, dizziness, or fear of dying?",
        "Do the symptoms reach a peak within minutes?",
        "What is the typical duration and frequency of the attacks?",
        "Is there anticipatory anxiety or maladaptive avoidance between attacks?",
        "Have cardiac, endocrine, respiratory, or substance-related causes been evaluated?"
      ]
    },
    blank: {
      prompt: "Do the symptoms reach a peak within ______?",
      answer: "minutes",
      hint: "DSM-style time course: within ___"
    },
    choice: {
      prompt: "Which question checks avoidance after panic attacks?",
      options: [
        "Have you started avoiding places because you fear another attack?",
        "Do you prefer tea or coffee?",
        "What time do you usually eat lunch?",
        "Did you enjoy math in school?"
      ],
      answer: 0
    },
    order: "Do the symptoms reach a peak within minutes"
  },
  {
    id: "insomnia",
    label: "불면증",
    title: "Sleep assessment",
    patient: "Mia Carter",
    brief: "45-year-old teacher with difficulty falling asleep and daytime fatigue.",
    targets: ["Sleep onset", "Maintenance", "Wake time", "Caffeine", "Screen use", "Daytime impairment"],
    patientLines: [
      "I lie in bed for two or three hours before I fall asleep.",
      "I keep checking the clock, and that makes me more anxious.",
      "I drink coffee in the afternoon because I'm exhausted.",
      "The next day I feel foggy and irritable."
    ],
    essentials: {
      easy: [
        "What time do you go to bed?",
        "How long does it take to fall asleep?",
        "Do you wake up during the night?",
        "Do you use caffeine or alcohol?",
        "How does poor sleep affect your day?"
      ],
      natural: [
        "Walk me through a typical night, from bedtime to waking up.",
        "How long are you usually awake before you fall asleep?",
        "Do you wake up during the night or too early in the morning?",
        "How much caffeine, alcohol, or screen time do you have in the evening?",
        "How is your sleep affecting your mood, concentration, or functioning?"
      ],
      professional: [
        "Can you describe your sleep schedule, sleep latency, awakenings, and final wake time?",
        "How many nights per week does this occur, and for how many months?",
        "Are there behaviors that may perpetuate insomnia, such as clock-watching, naps, or prolonged time in bed?",
        "Do you use caffeine, alcohol, sedatives, or other substances that may affect sleep?",
        "What daytime impairment is associated with the insomnia?"
      ]
    },
    blank: {
      prompt: "How long are you usually awake before you ______ asleep?",
      answer: "fall",
      hint: "fall asleep"
    },
    choice: {
      prompt: "Which question best starts a sleep history?",
      options: [
        "Walk me through a typical night, from bedtime to waking up.",
        "Do you like your bedroom color?",
        "How often do you travel abroad?",
        "What was your favorite subject?"
      ],
      answer: 0
    },
    order: "Walk me through a typical night"
  },
  {
    id: "adhd",
    label: "ADHD",
    title: "Adult ADHD intake",
    patient: "Chris Taylor",
    brief: "29-year-old designer with chronic disorganization and missed deadlines.",
    targets: ["Childhood onset", "Inattention", "Impulsivity", "Settings", "Impairment", "Differential"],
    patientLines: [
      "I miss deadlines even when I really care about the project.",
      "I've been like this since school. My parents called me lazy, but I was trying.",
      "At home I lose bills and forget appointments.",
      "When I'm interested, I can focus for hours, but boring tasks feel impossible."
    ],
    essentials: {
      easy: [
        "Did these problems start when you were a child?",
        "Do you often lose things or forget appointments?",
        "Is it hard to finish boring tasks?",
        "Does this happen at work and at home?",
        "How much trouble does it cause in your life?"
      ],
      natural: [
        "When did you first start noticing problems with attention or organization?",
        "Do you often lose track of tasks, appointments, or personal items?",
        "What happens when you need to complete a boring or repetitive task?",
        "Do these difficulties show up in more than one setting, like work and home?",
        "What real-life consequences have these symptoms caused?"
      ],
      professional: [
        "Were inattentive or hyperactive-impulsive symptoms present before age 12?",
        "Do you have persistent difficulty sustaining attention, organizing tasks, or following through?",
        "Are symptoms present across multiple settings and not limited to a single context?",
        "What functional impairment is evident academically, occupationally, or socially?",
        "Have mood, anxiety, sleep, substance use, or medical causes been considered?"
      ]
    },
    blank: {
      prompt: "Do these difficulties show up in more than one ______, like work and home?",
      answer: "setting",
      hint: "ADHD symptoms across multiple ___"
    },
    choice: {
      prompt: "Which question checks childhood onset?",
      options: [
        "Were these attention problems present before age 12?",
        "Do you prefer working near a window?",
        "Have you eaten breakfast today?",
        "What is your favorite app?"
      ],
      answer: 0
    },
    order: "Were symptoms present before age twelve"
  },
  {
    id: "suicide",
    label: "자살위험 평가",
    title: "Suicide risk assessment",
    patient: "Sam Rivera",
    brief: "38-year-old patient with severe depression and passive death wishes.",
    targets: ["Passive death wish", "Ideation", "Plan", "Intent", "Means", "Protective factors", "Safety plan"],
    patientLines: [
      "I don't want to kill myself exactly, but I keep wishing I could disappear.",
      "Last week I thought about taking all my sleeping pills.",
      "I didn't do it because my daughter came home early.",
      "I still have the pills in my apartment."
    ],
    essentials: {
      easy: [
        "Do you wish you would not wake up?",
        "Have you thought about killing yourself?",
        "Have you thought about how you would do it?",
        "Do you have access to the means?",
        "What has stopped you from acting on these thoughts?"
      ],
      natural: [
        "Have you had thoughts that you would be better off dead or might not want to wake up?",
        "Have you had thoughts of ending your life?",
        "Have you thought about a specific method or plan?",
        "Do you have access to pills, weapons, or other means you could use?",
        "What has helped you stay safe so far?"
      ],
      professional: [
        "Have you experienced passive death wishes, suicidal ideation, or thoughts of self-harm?",
        "Is there a specific plan, intent, timeframe, or preparatory behavior?",
        "Do you currently have access to lethal means, including medications or firearms?",
        "Have there been prior suicide attempts, aborted attempts, or non-suicidal self-injury?",
        "What protective factors, supports, and safety-planning steps can we put in place today?"
      ]
    },
    blank: {
      prompt: "Do you have access to pills, weapons, or other ______ you could use?",
      answer: "means",
      hint: "plan, intent, and ___"
    },
    choice: {
      prompt: "Which question directly checks suicidal intent?",
      options: [
        "When you had the thought, did you feel you might actually act on it?",
        "Do you usually sleep on your side?",
        "What kind of music helps you relax?",
        "Did you drive here today?"
      ],
      answer: 0
    },
    order: "Do you have access to lethal means"
  },
  {
    id: "medication",
    label: "약물 설명",
    title: "Medication explanation",
    patient: "Pat Kim",
    brief: "Patient starting an SSRI and worried about dependence and side effects.",
    targets: ["Purpose", "Onset", "Common side effects", "Warning effects", "Adherence", "Stopping risk", "Follow-up"],
    patientLines: [
      "I'm nervous about taking medication. Will I become dependent on it?",
      "How soon will I feel better?",
      "What side effects should I expect?",
      "Can I stop it once I feel okay?"
    ],
    essentials: {
      easy: [
        "This medicine is to reduce depression and anxiety symptoms.",
        "It often takes two to four weeks to start helping.",
        "Common side effects can include nausea, headache, or sleep changes.",
        "Please do not stop it suddenly without talking to me.",
        "We will check your response and side effects at follow-up."
      ],
      natural: [
        "The goal of this medication is to reduce your symptoms and help you function more like yourself again.",
        "Some people notice early changes in two weeks, but the fuller effect often takes four to six weeks.",
        "Common side effects include nausea, headache, sleep changes, or sexual side effects.",
        "If you want to stop, please contact me first so we can taper it safely.",
        "Let's follow up to see how it is working and whether any side effects are bothering you."
      ],
      professional: [
        "This medication targets depressive and anxiety symptoms and is intended to improve mood, anxiety, sleep, and functioning over time.",
        "Initial benefit may emerge within two to four weeks, with a fuller therapeutic response often requiring four to six weeks or longer.",
        "Common adverse effects include gastrointestinal discomfort, headache, activation or sedation, and sexual dysfunction.",
        "Abrupt discontinuation can cause withdrawal-like symptoms or relapse, so any change should be planned collaboratively.",
        "We will monitor efficacy, tolerability, adherence, safety concerns, and the need for dose adjustment at follow-up."
      ]
    },
    blank: {
      prompt: "Please do not stop it ______ without talking to me.",
      answer: "suddenly",
      hint: "abruptly = ___"
    },
    choice: {
      prompt: "Which explanation is most appropriate for SSRI onset?",
      options: [
        "Some people notice early changes in two weeks, but fuller effect often takes four to six weeks.",
        "It works completely after one dose.",
        "You should feel nothing until exactly six months.",
        "If it does not work tomorrow, it will never work."
      ],
      answer: 0
    },
    order: "Please do not stop it suddenly"
  },
  {
    id: "daily",
    label: "일상 대화",
    title: "Everyday conversation",
    patient: "Taylor Park",
    brief: "A relaxed conversation partner for daily English, rapport-building, and small talk.",
    targets: ["Greeting", "Daily routine", "Work or study", "Family and relationships", "Hobbies", "Food and preferences", "Plans"],
    patientLines: [
      "Hi, doctor. I'm doing okay today. It is nice to have a normal conversation for a bit.",
      "My day has been pretty ordinary, but I am glad to practice speaking.",
      "I like talking about everyday things. It feels less stressful than only talking about symptoms.",
      "I am ready. You can ask me about my day, work, family, hobbies, food, or weekend plans."
    ],
    essentials: {
      easy: [
        "How has your day been so far?",
        "What do you usually do after work?",
        "What do you like to do in your free time?",
        "Do you have any plans for the weekend?",
        "What kind of food do you like?"
      ],
      natural: [
        "How has your day been going so far?",
        "What does a normal weekday look like for you?",
        "What do you usually do to relax after work?",
        "Have you made any plans for the weekend?",
        "What kind of food have you been enjoying lately?"
      ],
      professional: [
        "Before we talk about anything medical, how has your day been going?",
        "What does your usual daily routine look like outside of appointments?",
        "What helps you unwind or feel more like yourself after a long day?",
        "Are there any weekend plans or personal routines you are looking forward to?",
        "What everyday topics do you enjoy talking about when you want a lighter conversation?"
      ]
    },
    blank: {
      prompt: "What do you usually do in your ______ time?",
      answer: "free",
      hint: "free time"
    },
    choice: {
      prompt: "Which question is best for light everyday conversation?",
      options: [
        "What do you usually do to relax after work?",
        "Do you have access to lethal means?",
        "How many panic attacks did you have this week?",
        "Have you noticed diminished interest in activities?"
      ],
      answer: 0
    },
    order: "What do you usually do after work"
  }
];

const topicLabels = {
  depression: "우울증",
  panic: "공황장애",
  insomnia: "불면증",
  adhd: "ADHD",
  suicide: "자살위험 평가",
  medication: "약물 설명",
  daily: "일상 대화"
};

function getTopicLabel(topic) {
  return topicLabels[topic.id] || topic.label;
}

const extraEssentials = {
  depression: {
    easy: [
      "What brings you in today?",
      "When did this start?",
      "Is your mood low most of the day?",
      "Do you feel tired even after resting?",
      "Has your appetite changed?",
      "Is it hard to focus at work?",
      "Do you feel guilty or blame yourself?",
      "Do you feel hopeless about the future?",
      "Have you ever tried to hurt yourself before?",
      "What helps you get through the day?"
    ],
    natural: [
      "Can you tell me what has been hardest for you recently?",
      "How often have you been feeling down or depressed?",
      "Has your interest or motivation changed compared with your usual self?",
      "Have you noticed changes in your appetite or weight?",
      "How has your energy been during the day?",
      "How is your concentration at work or at home?",
      "Have you been feeling unusually guilty or worthless?",
      "Have you felt hopeless, like things will not get better?",
      "Have you ever harmed yourself or attempted suicide in the past?",
      "Who or what helps you stay safe when things feel very hard?"
    ],
    professional: [
      "What is the primary concern that brought you in for evaluation today?",
      "How frequently are you experiencing depressed mood, and how persistent is it during the day?",
      "Have you experienced a clear reduction in interest, pleasure, or motivation?",
      "Have there been clinically significant changes in appetite or weight?",
      "How would you describe your daytime energy and fatigue?",
      "Are depressive symptoms affecting concentration, decision-making, or work performance?",
      "Are there prominent feelings of guilt, worthlessness, or excessive self-blame?",
      "Have you experienced hopelessness or thoughts that your situation will not improve?",
      "Have there been prior suicide attempts, aborted attempts, or self-injurious behaviors?",
      "What protective factors or supports are helping you stay safe?"
    ]
  },
  panic: {
    easy: [
      "When was your first panic attack?",
      "How often do the attacks happen?",
      "What do you feel in your body?",
      "Do you feel afraid you might die?",
      "Do you avoid places because of panic?",
      "Do you worry about the next attack?",
      "How long does an attack usually last?",
      "Does anything trigger the attack?",
      "Have you used caffeine or substances before attacks?",
      "What helps you calm down?"
    ],
    natural: [
      "When did you first start having these episodes?",
      "How often are the attacks happening now?",
      "What physical symptoms do you notice during an attack?",
      "During the attack, do you fear you might die, faint, or lose control?",
      "Have you begun avoiding places because you worry an attack may happen there?",
      "How much time do you spend worrying about having another attack?",
      "How long does it usually take for the symptoms to settle?",
      "Do the attacks seem triggered, or do they come out of the blue?",
      "Do caffeine, alcohol, cannabis, or other substances affect the attacks?",
      "What have you found helpful when an attack starts?"
    ],
    professional: [
      "Can you describe the onset and progression of your first panic episode?",
      "What is the current frequency of panic attacks?",
      "Which autonomic or respiratory symptoms occur during the episodes?",
      "Do you experience fear of dying, losing control, or going crazy during attacks?",
      "Has there been avoidance of transportation, crowds, enclosed places, or being alone?",
      "Is there persistent anticipatory anxiety between attacks?",
      "What is the typical duration from onset to resolution?",
      "Are the episodes situationally bound, situationally predisposed, or unexpected?",
      "Could stimulants, caffeine, alcohol, cannabis, or withdrawal be contributing?",
      "What coping strategies reduce the intensity or duration?"
    ]
  },
  insomnia: {
    easy: [
      "What time do you usually get into bed?",
      "What time do you wake up?",
      "Do you wake up too early?",
      "How many nights a week is this happening?",
      "Do you nap during the day?",
      "Do you look at your phone in bed?",
      "Do you drink coffee after lunch?",
      "Do you use alcohol to sleep?",
      "How sleepy are you during the day?",
      "What do you do when you cannot sleep?"
    ],
    natural: [
      "What does a typical night look like from bedtime to morning?",
      "About what time do you usually fall asleep and wake up?",
      "Do you wake during the night or wake earlier than planned?",
      "How many nights per week are you having trouble sleeping?",
      "Do you take naps, and if so, when and for how long?",
      "How much screen time do you have in bed or near bedtime?",
      "How much caffeine do you use, especially in the afternoon or evening?",
      "Do you use alcohol, sleep aids, or other substances to help you sleep?",
      "How does poor sleep affect your mood, concentration, or work the next day?",
      "When you cannot sleep, what do you usually do?"
    ],
    professional: [
      "Can you outline your usual sleep schedule, including bedtime, sleep latency, awakenings, and final wake time?",
      "What are your estimated sleep onset time and total sleep time?",
      "Are there early-morning awakenings, middle insomnia, or nonrestorative sleep?",
      "What is the frequency and duration of the sleep disturbance?",
      "Are daytime naps contributing to reduced sleep drive at night?",
      "Are there perpetuating behaviors such as clock-watching, screen use, or extended time in bed?",
      "What is your caffeine intake pattern across the day?",
      "Do alcohol, sedatives, cannabis, or other agents affect your sleep?",
      "What daytime impairment is associated with the insomnia?",
      "What behavioral strategies have you tried when unable to sleep?"
    ]
  },
  adhd: {
    easy: [
      "Do you often make careless mistakes?",
      "Is it hard to stay focused in meetings?",
      "Do you put off boring tasks?",
      "Do you lose important things?",
      "Do you forget appointments?",
      "Do you interrupt people without meaning to?",
      "Were you like this as a child?",
      "Does this happen in more than one place?",
      "How does it affect your work?",
      "How is your sleep?"
    ],
    natural: [
      "Do you often make careless mistakes even when you know the material?",
      "What happens to your attention during meetings, reading, or paperwork?",
      "Do you tend to postpone tasks that feel boring or mentally demanding?",
      "How often do you misplace keys, documents, bills, or personal items?",
      "Do missed appointments or forgotten tasks cause real problems for you?",
      "Do you interrupt, speak too quickly, or act before thinking?",
      "Looking back, were similar attention or organization problems present in childhood?",
      "Do these difficulties show up across work, home, and relationships?",
      "What consequences have these symptoms caused at work or school?",
      "How are sleep, anxiety, mood, and substance use affecting your attention?"
    ],
    professional: [
      "Do you have persistent difficulty with careless errors, sustained attention, or task completion?",
      "How does sustained attention vary across meetings, reading, paperwork, and conversations?",
      "Is there avoidance or procrastination around tasks requiring sustained mental effort?",
      "Are there chronic problems with losing objects needed for tasks or daily functioning?",
      "Is forgetfulness causing occupational, academic, or interpersonal impairment?",
      "Are impulsive symptoms present, such as interrupting, impatience, or acting without considering consequences?",
      "Were symptoms clearly present before age twelve?",
      "Are symptoms present across multiple settings rather than only one environment?",
      "What functional impairment is evident in work, school, finances, or relationships?",
      "Have sleep disorders, anxiety, mood disorders, substance use, or medical causes been considered?"
    ]
  },
  suicide: {
    easy: [
      "Do you wish you could go to sleep and not wake up?",
      "Have you thought about ending your life?",
      "Have you thought about how you would do it?",
      "Do you feel you might act on those thoughts?",
      "Do you have access to pills, weapons, or other means?",
      "Have you tried to kill yourself before?",
      "Have you hurt yourself without wanting to die?",
      "What has stopped you from acting on these thoughts?",
      "Have alcohol or drugs made the thoughts worse?",
      "Can we make a safety plan together?"
    ],
    natural: [
      "Have you wished you could fall asleep and not wake up?",
      "Have you had thoughts of ending your life?",
      "Have you thought about a specific method or plan?",
      "When those thoughts come up, do you feel you might act on them?",
      "Do you currently have access to pills, weapons, or other means you could use?",
      "Have you ever attempted suicide in the past?",
      "Have you engaged in self-harm, even if you were not trying to die?",
      "What has helped you stay alive or stopped you from acting on these thoughts?",
      "Do alcohol, drugs, agitation, or impulsivity make the risk feel higher?",
      "Let's make a concrete plan for what you will do if the thoughts get stronger."
    ],
    professional: [
      "Have you experienced passive death wishes, such as wishing you would not wake up?",
      "Have you had active suicidal ideation?",
      "Is there a specific method, plan, timeframe, or preparatory behavior?",
      "What is the current level of intent to act on these thoughts?",
      "Do you have current access to lethal means, including medications or firearms?",
      "Is there a history of suicide attempts, interrupted attempts, or aborted attempts?",
      "Is there non-suicidal self-injury or escalating self-harm behavior?",
      "What protective factors, responsibilities, beliefs, or supports reduce the risk?",
      "Are impulsivity, intoxication, psychosis, agitation, or severe anxiety increasing acute risk?",
      "What safety plan and emergency plan can we put in place today?"
    ]
  },
  medication: {
    easy: [
      "This medication is not addictive.",
      "Please take it every day as prescribed.",
      "Do not stop it suddenly.",
      "Call me if side effects feel severe.",
      "Some side effects improve after a few days.",
      "The dose may need adjustment.",
      "Medication works best with sleep, routines, and therapy.",
      "Tell me if your mood gets worse.",
      "We will start low and increase slowly if needed.",
      "Please tell me about any other medicines you take."
    ],
    natural: [
      "This medication is not considered addictive, but your body can notice sudden changes.",
      "For the best chance of benefit, it is important to take it consistently every day.",
      "Please do not stop it suddenly, even if you start feeling better.",
      "If side effects feel intense or unusual, contact me rather than stopping on your own.",
      "Nausea, headache, or sleep changes often improve as your body adjusts.",
      "We may adjust the dose depending on benefit and side effects.",
      "Medication tends to work best when combined with sleep, routines, therapy, and stress management.",
      "Please contact me promptly if your mood worsens or you feel unusually agitated.",
      "We will start with a low dose and increase gradually if needed.",
      "Let me know about other medications, supplements, alcohol, or substances you use."
    ],
    professional: [
      "This medication does not cause addiction in the way sedatives or stimulants can, but abrupt changes can still cause discontinuation symptoms.",
      "Adherence is important because inconsistent dosing can reduce efficacy and increase side effects.",
      "Abrupt discontinuation may lead to discontinuation symptoms or relapse, so stopping should be planned.",
      "Please contact me if adverse effects are severe, persistent, or concerning.",
      "Early gastrointestinal, headache, activation, sedation, or sleep-related adverse effects may improve with time.",
      "Dose adjustment will be based on clinical response, tolerability, safety, and functional improvement.",
      "Combining medication with psychotherapy, sleep stabilization, behavioral activation, or stress reduction improves outcomes.",
      "Worsening mood, suicidal thoughts, agitation, hypomanic symptoms, or allergic reactions require prompt contact.",
      "A start-low, go-slow titration can improve tolerability while we monitor response.",
      "We should review drug interactions, medical conditions, supplements, alcohol, and substance use before and during treatment."
    ]
  },
  daily: {
    easy: [
      "How was your morning?",
      "Did anything good happen today?",
      "What do you usually eat for lunch?",
      "Do you like coffee or tea?",
      "What kind of music do you like?",
      "Do you watch movies or dramas?",
      "Do you spend time with your family on weekends?",
      "What helps you relax?",
      "Is there anything you are looking forward to?",
      "What do you like about your neighborhood?"
    ],
    natural: [
      "How did your morning start today?",
      "Was there anything nice or interesting about your day?",
      "What do you usually do when you have a quiet evening?",
      "Are you more of a coffee person or a tea person?",
      "What music, shows, or books have you been enjoying lately?",
      "How do you usually spend time with friends or family?",
      "What is your favorite way to relax after a busy day?",
      "Do you have a place you like to go when you want to clear your head?",
      "Is there anything coming up that you are looking forward to?",
      "What kind of conversations feel easy or comfortable for you?"
    ],
    professional: [
      "Before we move into anything serious, what has your day been like so far?",
      "What parts of your ordinary routine feel pleasant or grounding these days?",
      "When you have time for yourself, what do you naturally choose to do?",
      "Are there foods, places, or small routines that reliably improve your day?",
      "What kinds of music, shows, books, or hobbies help you feel connected to yourself?",
      "How do you usually stay connected with friends, family, or people close to you?",
      "What does a restful evening look like for you in everyday life?",
      "Are there any plans, events, or small goals you are looking forward to?",
      "What topics do you find easiest to talk about in English?",
      "Would you like to talk about your day, your interests, or something completely different?"
    ]
  }
};

const topicSelect = document.querySelector("#topicSelect");
const topicButtons = document.querySelector("#topicButtons");
const commandInput = document.querySelector("#commandInput");
const commandBtn = document.querySelector("#commandBtn");
const newSessionBtn = document.querySelector("#newSessionBtn");
const topicTitle = document.querySelector("#topicTitle");
const patientName = document.querySelector("#patientName");
const patientBrief = document.querySelector("#patientBrief");
const sentenceBank = document.querySelector("#essentialSentences");
const modeTabs = document.querySelectorAll(".mode-tab");
const levelBtns = document.querySelectorAll(".level-btn");
const modeEyebrow = document.querySelector("#modeEyebrow");
const promptTitle = document.querySelector("#promptTitle");
const patientLine = document.querySelector("#patientLine");
const doctorBubble = document.querySelector("#doctorBubble");
const answerZone = document.querySelector("#answerZone");
const coachText = document.querySelector("#coachText");
const targetChecklist = document.querySelector("#targetChecklist");
const scoreValue = document.querySelector("#scoreValue");
const streakValue = document.querySelector("#streakValue");
const roundValue = document.querySelector("#roundValue");
const visitStartBtn = document.querySelector("#visitStartBtn");
const micBtn = document.querySelector("#micBtn");
const stopBtn = document.querySelector("#stopBtn");
const checkBtn = document.querySelector("#checkBtn");
const hintBtn = document.querySelector("#hintBtn");
const nextBtn = document.querySelector("#nextBtn");
const feedbackBtn = document.querySelector("#feedbackBtn");
const speakBtn = document.querySelector("#speakBtn");
const voiceStatus = document.querySelector("#voiceStatus");
const correctionStatus = document.querySelector("#correctionStatus");

let currentTopic = topics[0];
let currentMode = "roleplay";
let currentLevel = "easy";
let sessionEssentials = {};
let round = 1;
let score = Number(localStorage.getItem("clinicEnglishScore") || 0);
let streak = 0;
let selectedChoice = null;
let orderedTokens = [];
let orderAvailableTokens = [];
let currentOrderSentence = "";
let activeTargets = new Set();
let roleplayLog = [];
let feedbackStyle = "normal";
let recognition = null;
let isListening = false;
let recognitionActive = false;
let finalVoiceText = "";
let voiceStopRequested = false;
let voiceRestartTimer = null;
let autoPatientVoice = true;
let speechUnlocked = false;
let visitStarted = false;
let openingSpeaker = null;
let patientLineCursor = 0;
let patientResponseHistory = [];
let conversationIntentHistory = [];
let lastOrderPress = { key: "", time: 0 };

const modeLabels = {
  roleplay: "Role-play",
  blank: "Blank challenge",
  choice: "Clinical quiz",
  order: "Sentence order",
  exam: "Exam mode"
};

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function uniqueItems(items) {
  return [...new Set(items.filter(Boolean))];
}

function getEssentialPool(topic, level) {
  return uniqueItems([
    ...(topic.essentials[level] || []),
    ...((extraEssentials[topic.id] && extraEssentials[topic.id][level]) || [])
  ]);
}

function refreshSessionEssentials() {
  sessionEssentials = {};
  ["easy", "natural", "professional"].forEach((level) => {
    const pool = getEssentialPool(currentTopic, level);
    sessionEssentials[level] = shuffle(pool).slice(0, 5);
    if (sessionEssentials[level].length < 5) {
      sessionEssentials[level] = currentTopic.essentials[level] || [];
    }
  });
}

function getSessionEssentials(level = currentLevel) {
  if (!sessionEssentials[level] || sessionEssentials[level].length === 0) {
    refreshSessionEssentials();
  }
  return sessionEssentials[level] || currentTopic.essentials[level] || [];
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
}

function cleanOrderSentence(sentence) {
  return sentence
    .replace(/[?!.,;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getOrderSentencePool() {
  const pool = uniqueItems([
    currentTopic.order,
    ...getEssentialPool(currentTopic, "easy"),
    ...getEssentialPool(currentTopic, "natural"),
    ...getSessionEssentials(currentLevel)
  ])
    .map(cleanOrderSentence)
    .filter((sentence) => {
      const wordCount = sentence.split(" ").length;
      return wordCount >= 4 && wordCount <= 11;
    });

  return pool.length ? pool : [cleanOrderSentence(currentTopic.order)];
}

function chooseOrderSentence(avoidCurrent = true) {
  const pool = getOrderSentencePool();
  const candidates = avoidCurrent && pool.length > 1
    ? pool.filter((sentence) => normalize(sentence) !== normalize(currentOrderSentence))
    : pool;
  currentOrderSentence = shuffle(candidates.length ? candidates : pool)[0];
  orderedTokens = [];
  orderAvailableTokens = shuffle(currentOrderSentence.split(" "));
}

function init() {
  topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic.id;
    option.textContent = getTopicLabel(topic);
    topicSelect.appendChild(option);

    if (topicButtons) {
      const button = document.createElement("button");
      button.className = "topic-chip";
      button.type = "button";
      button.dataset.topic = topic.id;
      button.textContent = getTopicLabel(topic);
      button.addEventListener("click", () => startSession(topic.id));
      topicButtons.appendChild(button);
    }
  });
  scoreValue.textContent = score;
  if ("speechSynthesis" in window && window.speechSynthesis.getVoices) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
  bindEvents();
  startSession();
}

function bindEvents() {
  if (newSessionBtn) newSessionBtn.addEventListener("click", () => startSession());
  if (commandBtn && commandInput) {
    commandBtn.addEventListener("click", handleCommand);
    commandInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") handleCommand();
    });
  }
  const handleTopicSelect = () => startSession(topicSelect.value);
  topicSelect.addEventListener("input", handleTopicSelect);
  topicSelect.addEventListener("change", handleTopicSelect);
  modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => setMode(tab.dataset.mode));
  });
  levelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLevel = btn.dataset.level;
      levelBtns.forEach((item) => item.classList.toggle("is-active", item === btn));
      selectedChoice = null;
      orderedTokens = [];
      orderAvailableTokens = [];
      currentOrderSentence = "";
      renderSentences();
      renderMode();
    });
  });
  checkBtn.addEventListener("click", checkAnswer);
  hintBtn.addEventListener("click", showHint);
  nextBtn.addEventListener("click", nextRound);
  feedbackBtn.addEventListener("click", showFeedback);
  speakBtn.addEventListener("click", speakPatientLine);
  visitStartBtn.addEventListener("click", startVisit);
  micBtn.addEventListener("click", startVoiceQuestion);
  stopBtn.addEventListener("click", stopVoiceQuestion);
  answerZone.addEventListener("click", handleOrderTokenEvent);
  answerZone.addEventListener("pointerdown", handleOrderTokenEvent);
  answerZone.addEventListener("touchstart", handleOrderTokenEvent, { passive: false });
  stopBtn.hidden = true;
}

function startSession(topicId = topicSelect.value, options = {}) {
  const explicitTopic = topics.find((topic) => topic.id === topicId);
  currentTopic = explicitTopic || topics[Math.floor(Math.random() * topics.length)];
  topicSelect.value = currentTopic.id;
  updateTopicButtons();
  round = 1;
  streak = 0;
  selectedChoice = null;
  orderedTokens = [];
  orderAvailableTokens = [];
  currentOrderSentence = "";
  activeTargets = new Set();
  roleplayLog = [];
  visitStarted = false;
  openingSpeaker = null;
  patientLineCursor = 0;
  patientResponseHistory = [];
  conversationIntentHistory = [];
  refreshSessionEssentials();
  correctionStatus.textContent = "";
  stopBtn.hidden = true;
  currentMode = options.mode || "roleplay";
  modeTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.mode === currentMode));
  topicTitle.textContent = `${getTopicLabel(currentTopic)} · ${currentTopic.title}`;
  patientName.textContent = currentTopic.patient;
  patientBrief.textContent = currentTopic.brief;
  doctorBubble.textContent = "Press 진료 시작 to begin.";
  patientLine.textContent = "...";
  streakValue.textContent = streak;
  roundValue.textContent = round;
  renderSentences();
  renderChecklist();
  renderMode();
  coachText.textContent = currentTopic.id === "daily"
    ? "대화 시작 후 말하기 버튼을 누르세요. 일상, 취미, 가족, 음식, 주말 계획처럼 가벼운 영어 대화를 이어갈 수 있습니다."
    : "진료 시작 후 말하기 버튼을 누르세요. 알림음 뒤에 질문하고, 끝나면 말하기 종료를 누르면 환자가 글과 음성으로 답합니다.";
}

function updateTopicButtons() {
  if (!topicButtons) return;
  topicButtons.querySelectorAll(".topic-chip").forEach((button) => {
    const selected = button.dataset.topic === currentTopic.id;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
  });
}

function handleCommand() {
  if (!commandInput) return;
  const rawCommand = commandInput.value.trim();
  if (!rawCommand) return;
  const command = rawCommand.toLowerCase().replace(/\s+/g, "");
  const topicId = findTopicId(rawCommand);

  if (command.includes("짧게")) {
    feedbackStyle = "short";
    coachText.textContent = "짧게 모드로 바꿨습니다. 환자 답변과 피드백을 더 간단히 제공합니다.";
  }

  if (command.includes("자세히")) {
    feedbackStyle = "detailed";
    coachText.textContent = "자세히 모드로 바꿨습니다. 피드백에서 놓친 문진 항목과 대체 표현을 더 많이 보여줍니다.";
  }

  if (command.includes("피드백")) {
    showFeedback();
    commandInput.value = "";
    return;
  }

  if (command.includes("문장만")) {
    showSentenceOnly();
    commandInput.value = "";
    return;
  }

  if (command.includes("다시")) {
    startSession(currentTopic.id);
    commandInput.value = "";
    return;
  }

  if (command.includes("시험처럼")) {
    if (topicId) startSession(topicId, { mode: "exam" });
    setMode("exam");
    coachText.textContent = "시험처럼 모드입니다. 진단명을 말하지 않고 실제 초진처럼 질문해 보세요.";
    commandInput.value = "";
    return;
  }

  const startWords = ["시작", "연습시작", "영어시작", "진료영어"];
  if (startWords.some((word) => command.includes(word))) {
    startSession(topicId || undefined);
    commandInput.value = "";
    return;
  }

  coachText.textContent = "사용 가능한 명령: 시작, 시작 일상, 시작 공황, 시작 ADHD, 피드백, 짧게, 자세히, 다시, 문장만, 시험처럼";
  commandInput.value = "";
}

function findTopicId(text) {
  const compact = text.toLowerCase().replace(/\s+/g, "");
  const aliases = {
    depression: ["우울", "depression"],
    panic: ["공황", "panic"],
    insomnia: ["불면", "수면", "insomnia", "sleep"],
    adhd: ["adhd", "주의력"],
    suicide: ["자살", "위험", "risk", "suicide"],
    medication: ["약물", "약", "medication", "ssri"],
    daily: ["일상", "자유", "대화", "잡담", "생활", "daily", "free", "conversation", "smalltalk", "small talk"]
  };
  return Object.entries(aliases).find(([, keys]) => keys.some((key) => compact.includes(key)))?.[0] || null;
}

function showSentenceOnly() {
  const essentials = getSessionEssentials();
  coachText.textContent = essentials.map((sentence, index) => `${index + 1}. ${sentence}`).join("\n");
}

function setMode(mode) {
  currentMode = mode;
  modeTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.mode === mode));
  selectedChoice = null;
  orderedTokens = [];
  orderAvailableTokens = [];
  currentOrderSentence = "";
  renderMode();
}

function renderSentences() {
  sentenceBank.innerHTML = "";
  getSessionEssentials().forEach((sentence, index) => {
    const card = document.createElement("article");
    card.className = "sentence-card";
    card.innerHTML = `<strong>${index + 1}</strong><p lang="en">${sentence}</p>`;
    sentenceBank.appendChild(card);
  });
}

function renderChecklist() {
  targetChecklist.innerHTML = "";
  currentTopic.targets.forEach((target) => {
    const item = document.createElement("li");
    item.textContent = target;
    item.classList.toggle("done", activeTargets.has(target));
    targetChecklist.appendChild(item);
  });
}

function startVisit() {
  if (!(currentMode === "roleplay" || currentMode === "exam")) {
    setMode("roleplay");
  }

  refreshSessionEssentials();
  renderSentences();
  unlockPatientVoice();
  visitStarted = true;
  openingSpeaker = Math.random() < 0.5 ? "patient" : "doctor";
  roleplayLog = [];
  patientLineCursor = 0;
  patientResponseHistory = [];
  conversationIntentHistory = [];
  round = 1;
  roundValue.textContent = round;
  correctionStatus.textContent = "";
  stopBtn.hidden = true;

  if (openingSpeaker === "patient") {
    const openingLine = currentTopic.patientLines[0];
    patientLine.textContent = openingLine;
    patientResponseHistory.push(openingLine);
    patientLineCursor = 1;
    doctorBubble.textContent = "Respond to the patient's opening statement.";
    voiceStatus.textContent = "환자가 먼저 말했습니다. 말하기 버튼을 누르고 영어로 이어서 질문하세요.";
  } else {
    doctorBubble.textContent = "You start. Ask the patient your first question in English.";
    patientLine.textContent = "...";
    voiceStatus.textContent = "의사가 먼저 시작합니다. 말하기 버튼을 누르고 첫 질문을 영어로 말하세요.";
  }

  visitStartBtn.textContent = "다시 시작";
  micBtn.disabled = false;
  checkBtn.disabled = false;
  answerZone.innerHTML = `<textarea id="doctorInput" lang="en" placeholder="Speech transcript appears here. You can also type if needed."></textarea>`;
}

function renderMode() {
  modeEyebrow.textContent = modeLabels[currentMode];
  answerZone.innerHTML = "";

  if (currentMode === "roleplay") {
    promptTitle.textContent = currentTopic.id === "daily"
      ? "대화 시작 후 랜덤으로 먼저 말을 건넵니다"
      : "진료 시작 후 랜덤으로 의사 또는 환자가 먼저 말합니다";
    checkBtn.textContent = "질문 보내기";
    visitStartBtn.style.display = "";
    visitStartBtn.textContent = visitStarted ? "다시 시작" : (currentTopic.id === "daily" ? "대화 시작" : "진료 시작");
    micBtn.disabled = !visitStarted;
    micBtn.style.display = "";
    stopBtn.hidden = true;
    checkBtn.disabled = !visitStarted;
    voiceStatus.textContent = visitStarted
      ? "말하기를 누르면 알림음이 납니다. 질문 후 말하기 종료를 누르세요. 환자는 글과 음성으로 답합니다."
      : currentTopic.id === "daily"
        ? "먼저 대화 시작을 누르세요. 누가 먼저 말할지 랜덤으로 정해집니다."
        : "먼저 진료 시작을 누르세요. 의사 선공/환자 선공이 랜덤으로 정해집니다.";
    doctorBubble.textContent = visitStarted
      ? doctorBubble.textContent
      : "Press 진료 시작 to begin.";
    patientLine.textContent = visitStarted ? patientLine.textContent : "...";
    answerZone.innerHTML = `<textarea id="doctorInput" lang="en" placeholder="Speech transcript appears here. You can also type if needed."></textarea>`;
    return;
  }

  if (currentMode === "blank") {
    promptTitle.textContent = "빈칸에 들어갈 표현을 입력하세요";
    checkBtn.textContent = "확인";
    visitStartBtn.style.display = "none";
    checkBtn.disabled = false;
    micBtn.disabled = true;
    micBtn.style.display = "none";
    stopBtn.hidden = true;
    voiceStatus.textContent = "이 모드는 키보드 입력 훈련입니다.";
    doctorBubble.textContent = "Fill in the missing clinical phrase.";
    patientLine.textContent = currentTopic.blank.prompt;
    answerZone.innerHTML = `<input id="blankInput" class="blank-input" lang="en" autocomplete="off" placeholder="Type the missing word..." />`;
    return;
  }

  if (currentMode === "choice") {
    promptTitle.textContent = currentTopic.choice.prompt;
    checkBtn.textContent = "확인";
    visitStartBtn.style.display = "none";
    checkBtn.disabled = false;
    micBtn.disabled = true;
    micBtn.style.display = "none";
    stopBtn.hidden = true;
    voiceStatus.textContent = "이 모드는 표현 선택 훈련입니다.";
    doctorBubble.textContent = "Choose the sentence you would use in clinic.";
    patientLine.textContent = "Choose the most clinically useful English sentence.";
    const grid = document.createElement("div");
    grid.className = "choice-grid";
    currentTopic.choice.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.type = "button";
      btn.lang = "en";
      btn.textContent = option;
      btn.addEventListener("click", () => {
        selectedChoice = index;
        document.querySelectorAll(".choice-btn").forEach((item) => item.classList.remove("selected"));
        btn.classList.add("selected");
      });
      grid.appendChild(btn);
    });
    answerZone.appendChild(grid);
    return;
  }

  if (currentMode === "order") {
    promptTitle.textContent = "단어를 눌러 자연스러운 문장을 만드세요";
    checkBtn.textContent = "확인";
    visitStartBtn.style.display = "none";
    checkBtn.disabled = false;
    micBtn.disabled = true;
    micBtn.style.display = "none";
    stopBtn.hidden = true;
    voiceStatus.textContent = "이 모드는 문장 순서 훈련입니다.";
    doctorBubble.textContent = "Build the doctor's question in the correct order.";
    patientLine.textContent = "Build the sentence in the correct order.";
    answerZone.innerHTML = `<div id="orderedAnswer" class="ordered-answer"></div><div id="tokenPool" class="token-pool"></div>`;
    if (!currentOrderSentence || (!orderAvailableTokens.length && !orderedTokens.length)) {
      chooseOrderSentence(false);
    }
    renderOrderControls();
    return;
  }

  if (currentMode === "exam") {
    promptTitle.textContent = currentTopic.id === "daily" ? "자유 대화처럼 질문하세요" : "진단명을 숨긴 초진처럼 질문하세요";
    checkBtn.textContent = "질문 보내기";
    visitStartBtn.style.display = "";
    visitStartBtn.textContent = visitStarted ? "다시 시작" : "진료 시작";
    micBtn.disabled = !visitStarted;
    micBtn.style.display = "";
    stopBtn.hidden = true;
    checkBtn.disabled = !visitStarted;
    voiceStatus.textContent = visitStarted
      ? "시험처럼 진행합니다. 말하기 버튼을 누르고 초진 질문을 영어로 말하세요."
      : "먼저 진료 시작을 누르세요. 진단명은 숨긴 채 환자 또는 의사가 랜덤으로 먼저 시작합니다.";
    doctorBubble.textContent = visitStarted ? doctorBubble.textContent : "Press 진료 시작 to begin.";
    patientLine.textContent = visitStarted ? patientLine.textContent : "...";
    answerZone.innerHTML = `<textarea id="doctorInput" lang="en" placeholder="Ask an intake question without naming the diagnosis..."></textarea>`;
  }
}

function renderOrderedAnswer() {
  const orderedAnswer = document.querySelector("#orderedAnswer");
  if (!orderedAnswer) return;
  orderedAnswer.innerHTML = "";
  orderedTokens.forEach((token, index) => {
    orderedAnswer.appendChild(createTokenButton(token, "ordered", index));
  });
}

function renderOrderControls() {
  const tokenPool = document.querySelector("#tokenPool");
  if (!tokenPool) return;
  tokenPool.innerHTML = "";
  orderAvailableTokens.forEach((token, index) => {
    tokenPool.appendChild(createTokenButton(token, "available", index));
  });
  renderOrderedAnswer();
}

function createTokenButton(token, action, index) {
  const btn = document.createElement("button");
  btn.className = "token-btn";
  btn.type = "button";
  btn.textContent = token;
  btn.dataset.orderAction = action;
  btn.dataset.orderIndex = String(index);
  return btn;
}

function handleOrderTokenEvent(event) {
  if (currentMode !== "order") return;
  const tokenButton = event.target.closest(".token-btn[data-order-action]");
  if (!tokenButton || !answerZone.contains(tokenButton)) return;

  if (event.type === "touchstart" || event.type === "pointerdown") {
    event.preventDefault();
  }

  const key = `${tokenButton.dataset.orderAction}:${tokenButton.dataset.orderIndex}`;
  const now = Date.now();
  if (lastOrderPress.key === key && now - lastOrderPress.time < 450) return;
  lastOrderPress = { key, time: now };

  const index = Number(tokenButton.dataset.orderIndex);
  if (!Number.isInteger(index)) return;
  if (tokenButton.dataset.orderAction === "available") {
    selectOrderToken(index);
  } else {
    removeOrderedToken(index);
  }
}

function selectOrderToken(index) {
  const token = orderAvailableTokens[index];
  if (!token) return;
  orderedTokens.push(token);
  orderAvailableTokens.splice(index, 1);
  renderOrderControls();
}

function removeOrderedToken(index) {
  const token = orderedTokens[index];
  if (!token) return;
  orderedTokens.splice(index, 1);
  orderAvailableTokens.push(token);
  renderOrderControls();
}

function checkAnswer() {
  if (currentMode === "roleplay" || currentMode === "exam") {
    if (!visitStarted) {
      voiceStatus.textContent = "먼저 진료 시작을 누르세요.";
      return;
    }
    const input = document.querySelector("#doctorInput");
    const value = input.value.trim();
    if (!value) {
      coachText.textContent = "먼저 영어 질문을 한 문장 입력해 주세요.";
      return;
    }
    const correction = correctDoctorSentence(value);
    input.value = correction.corrected;
    showCorrection(correction);
    roleplayLog.push(correction.corrected);
    renderDoctorBubble(correction);
    const result = evaluateClinicalQuestion(correction.corrected);
    addScore(result.points);
    coachText.textContent = result.message;
    renderChecklist();
    respondAsPatient(correction.corrected);
    return;
  }

  if (currentMode === "blank") {
    const input = document.querySelector("#blankInput");
    const isCorrect = normalize(input.value) === normalize(currentTopic.blank.answer);
    updateResult(isCorrect, `정답: ${currentTopic.blank.answer}`);
    return;
  }

  if (currentMode === "choice") {
    if (selectedChoice === null) {
      coachText.textContent = "답을 하나 선택해 주세요.";
      return;
    }
    const isCorrect = selectedChoice === currentTopic.choice.answer;
    document.querySelectorAll(".choice-btn").forEach((btn, index) => {
      btn.classList.toggle("correct", index === currentTopic.choice.answer);
      btn.classList.toggle("wrong", index === selectedChoice && !isCorrect);
    });
    updateResult(isCorrect, `가장 좋은 표현: ${currentTopic.choice.options[currentTopic.choice.answer]}`);
    return;
  }

  if (currentMode === "order") {
    const isCorrect = normalize(orderedTokens.join(" ")) === normalize(currentOrderSentence);
    updateResult(isCorrect, `정답: ${currentOrderSentence}`);
  }
}

function finishVoiceQuestion(input) {
  isListening = false;
  recognitionActive = false;
  checkBtn.disabled = false;
  micBtn.disabled = false;
  stopBtn.hidden = true;
  stopBtn.disabled = true;
  micBtn.classList.remove("is-listening");
  micBtn.textContent = "말하기";
  voiceStatus.classList.remove("listening");
  playTone(440, 90);

  const spoken = finalVoiceText.trim() || input.value.trim();
  if (!spoken) {
    voiceStatus.textContent = "인식된 문장이 없습니다. 말하기를 다시 눌러 주세요.";
    return;
  }

  input.value = spoken;
  voiceStatus.textContent = `인식 완료: ${spoken}`;
  window.setTimeout(() => {
    try {
      checkAnswer();
    } catch (error) {
      console.error(error);
      voiceStatus.textContent = "질문 처리 중 오류가 났습니다. 다시 말하기를 눌러 주세요.";
    }
  }, 120);
}

function startVoiceQuestion() {
  if (!(currentMode === "roleplay" || currentMode === "exam")) {
    voiceStatus.textContent = "말하기는 Role-play와 Exam 모드에서 사용합니다.";
    return;
  }

  if (!visitStarted) {
    voiceStatus.textContent = "먼저 진료 시작을 누르세요. 시작하면 선공이 랜덤으로 정해집니다.";
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voiceStatus.textContent = "이 브라우저는 음성 인식을 지원하지 않습니다. Chrome 또는 Edge로 열어 주세요.";
    coachText.textContent = "핸드폰에서는 Chrome으로 HTTPS 링크를 열고 마이크 권한을 허용하면 말하기가 됩니다.";
    return;
  }

  if (isListening && recognition) {
    stopVoiceQuestion();
    return;
  }

  const input = document.querySelector("#doctorInput");
  if (!input) return;

  unlockPatientVoice();
  finalVoiceText = "";
  voiceStopRequested = false;
  if (voiceRestartTimer) {
    window.clearTimeout(voiceRestartTimer);
    voiceRestartTimer = null;
  }
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    isListening = true;
    recognitionActive = true;
    checkBtn.disabled = true;
    micBtn.disabled = true;
    stopBtn.hidden = false;
    stopBtn.disabled = false;
    micBtn.classList.add("is-listening");
    micBtn.textContent = "듣는 중";
    voiceStatus.classList.add("listening");
    voiceStatus.textContent = "알림음 후 말하세요. 끝나면 말하기 종료를 누르세요.";
    input.value = "";
    correctionStatus.textContent = "";
    playTone(880, 120);
    try {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    } catch (error) {
      console.warn("Could not cancel speech synthesis", error);
    }
  };

  recognition.onresult = (event) => {
    let interimText = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript.trim();
      if (event.results[index].isFinal) {
        finalVoiceText = `${finalVoiceText} ${transcript}`.trim();
      } else {
        interimText = `${interimText} ${transcript}`.trim();
      }
    }
    input.value = finalVoiceText || interimText;
    voiceStatus.textContent = input.value ? `인식 중: ${input.value}` : "듣고 있습니다.";
  };

  recognition.onerror = (event) => {
    const messages = {
      "not-allowed": "마이크 권한이 차단되었습니다. 브라우저 주소창의 권한에서 마이크를 허용해 주세요.",
      "no-speech": "말소리를 감지하지 못했습니다. 다시 말하기를 눌러 천천히 말해 주세요.",
      network: "음성 인식 네트워크 연결이 불안정합니다. 다시 시도해 주세요."
    };
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      voiceStopRequested = true;
    }
    voiceStatus.textContent = messages[event.error] || `음성 인식 오류: ${event.error}`;
  };

  recognition.onend = () => {
    recognitionActive = false;
    if (!voiceStopRequested) {
      voiceStatus.textContent = input.value
        ? `잠깐 멈춤: ${input.value} 계속 말하세요. 끝나면 말하기 종료를 누르세요.`
        : "계속 듣고 있습니다. 끝나면 말하기 종료를 누르세요.";
      voiceRestartTimer = window.setTimeout(() => {
        try {
          recognition.start();
        } catch (error) {
          console.warn("Speech recognition restart failed", error);
          isListening = false;
          recognitionActive = false;
          checkBtn.disabled = false;
          micBtn.disabled = false;
          stopBtn.hidden = true;
          stopBtn.disabled = true;
          micBtn.classList.remove("is-listening");
          micBtn.textContent = "말하기";
          voiceStatus.classList.remove("listening");
          voiceStatus.textContent = "음성 인식이 멈췄습니다. 문장이 맞으면 확인을 누르고, 아니면 다시 말하기를 눌러 주세요.";
        }
      }, 250);
      return;
    }

    finishVoiceQuestion(input);
  };

  try {
    recognition.start();
  } catch (error) {
    isListening = false;
    recognitionActive = false;
    checkBtn.disabled = false;
    micBtn.disabled = false;
    stopBtn.hidden = true;
    stopBtn.disabled = true;
    micBtn.classList.remove("is-listening");
    micBtn.textContent = "말하기";
    voiceStatus.classList.remove("listening");
    voiceStatus.textContent = "마이크를 시작하지 못했습니다. 브라우저를 새로고침한 뒤 다시 시도해 주세요.";
  }
}

function stopVoiceQuestion() {
  voiceStopRequested = true;
  if (voiceRestartTimer) {
    window.clearTimeout(voiceRestartTimer);
    voiceRestartTimer = null;
  }
  if (!isListening || !recognition) return;
  voiceStatus.textContent = "말하기를 종료하는 중입니다.";
  unlockPatientVoice();
  if (!recognitionActive) {
    const input = document.querySelector("#doctorInput");
    if (input) finishVoiceQuestion(input);
    return;
  }
  try {
    recognition.stop();
  } catch (error) {
    console.warn("Speech recognition stop failed", error);
    const input = document.querySelector("#doctorInput");
    if (input) finishVoiceQuestion(input);
  }
}

function playTone(frequency = 880, duration = 100) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.16, audioContext.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration / 1000);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration / 1000);
    oscillator.onended = () => audioContext.close();
  } catch (error) {
    console.warn("Tone playback failed", error);
  }
}

function unlockPatientVoice() {
  if (speechUnlocked) return true;
  if (!("speechSynthesis" in window) || !window.SpeechSynthesisUtterance) return false;
  try {
    const synth = window.speechSynthesis;
    if (typeof synth.resume === "function") synth.resume();
    const primer = new SpeechSynthesisUtterance(" ");
    primer.lang = "en-US";
    primer.volume = 0.01;
    primer.rate = 1;
    primer.onend = () => {
      speechUnlocked = true;
    };
    primer.onerror = () => {
      speechUnlocked = false;
    };
    synth.cancel();
    synth.speak(primer);
    speechUnlocked = true;
    return true;
  } catch (error) {
    console.warn("Speech unlock failed", error);
    speechUnlocked = false;
    return false;
  }
}

function getEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
  return voices.find((voice) => voice.lang === "en-US")
    || voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("en"))
    || null;
}

function correctDoctorSentence(text) {
  const original = text.trim().replace(/\s+/g, " ");
  let corrected = original;
  const notes = [];

  const replacements = [
    [/\bi\b/g, "I", "문장 속 I는 대문자로 씁니다."],
    [/\bdont\b/gi, "don't", "축약형에는 apostrophe가 필요합니다."],
    [/\bcant\b/gi, "can't", "축약형에는 apostrophe가 필요합니다."],
    [/\bwont\b/gi, "won't", "축약형에는 apostrophe가 필요합니다."],
    [/\bwhats\b/gi, "what's", "축약형에는 apostrophe가 필요합니다."],
    [/\bthats\b/gi, "that's", "축약형에는 apostrophe가 필요합니다."],
    [/\bwhat bring you\b/gi, "what brings you", "주어가 what일 때 자연스러운 표현은 what brings you입니다."],
    [/\bwhat brings you here today\b/gi, "what brings you in today", "진료실에서는 brings you in today가 더 자연스럽습니다."],
    [/\bhow long you have been\b/gi, "how long have you been", "의문문은 have you been 어순을 씁니다."],
    [/\bhow long have you feel\b/gi, "how long have you been feeling", "기간을 묻는 문장에는 have been -ing가 자연스럽습니다."],
    [/\bhow long did you feel\b/gi, "how long have you been feeling", "현재까지 이어지는 증상 기간은 have you been feeling이 자연스럽습니다."],
    [/\bhow do you feeling\b/gi, "how are you feeling", "feel의 진행 상태를 물을 때는 are you feeling을 씁니다."],
    [/\bhow are you feel\b/gi, "how are you feeling", "are 뒤에는 feeling처럼 -ing 형태를 씁니다."],
    [/\bhow is your feeling\b/gi, "how are you feeling", "환자의 현재 상태를 물을 때는 how are you feeling이 자연스럽습니다."],
    [/\bwhat do you feeling\b/gi, "what are you feeling", "현재 느끼는 증상은 what are you feeling이 자연스럽습니다."],
    [/\bwhat happen\b/gi, "what happened", "무슨 일이 있었는지 물을 때는 happened를 씁니다."],
    [/\bwhat happened you\b/gi, "what happened to you", "happen은 happened to you처럼 전치사 to가 필요합니다."],
    [/\bwhy did you came here\b/gi, "what brings you in today", "did 뒤에는 동사원형 come이 오지만, 진료실에서는 what brings you in today가 더 자연스럽습니다."],
    [/\bwhy did you come here\b/gi, "what brings you in today", "진료실 첫 질문은 what brings you in today가 더 부드럽습니다."],
    [/\bwhy you came\b/gi, "what brings you in today", "진료실 첫 질문은 what brings you in today가 자연스럽습니다."],
    [/\bwhy did you came\b/gi, "what brings you in today", "did 뒤에는 동사원형 come이 오지만, 진료실에서는 what brings you in today가 더 자연스럽습니다."],
    [/\bwhat is your problem\b/gi, "what brings you in today", "problem보다 what brings you in today가 덜 단정적이고 자연스럽습니다."],
    [/\btell me your symptom\b/gi, "can you tell me about your symptoms", "symptom은 보통 복수 symptoms로 묻고, can you tell me about이 자연스럽습니다."],
    [/\btell me about symptom\b/gi, "can you tell me about your symptoms", "증상 질문은 can you tell me about your symptoms가 자연스럽습니다."],
    [/\bwhen it started\b/gi, "when did it start", "의문문은 did + 동사원형 어순을 씁니다."],
    [/\bwhen did you noticed\b/gi, "when did you notice", "did 뒤에는 동사원형 notice를 씁니다."],
    [/\bwhen did you started\b/gi, "when did you start", "did 뒤에는 동사원형 start를 씁니다."],
    [/\bwhen did it started\b/gi, "when did it start", "did 뒤에는 동사원형 start를 씁니다."],
    [/\bdid you noticed\b/gi, "did you notice", "did 뒤에는 동사원형 notice를 씁니다."],
    [/\bdid you felt\b/gi, "did you feel", "did 뒤에는 동사원형 feel을 씁니다."],
    [/\bdid you had\b/gi, "did you have", "did 뒤에는 동사원형 have를 씁니다."],
    [/\bdo you have suicidal thought\b/gi, "have you had suicidal thoughts", "자살사고 문진은 have you had suicidal thoughts가 자연스럽습니다."],
    [/\bdo you have suicidal thoughts\b/gi, "have you had suicidal thoughts", "최근 자살사고는 have you had suicidal thoughts가 자연스럽습니다."],
    [/\bdo you have suicide idea\b/gi, "have you had suicidal thoughts", "suicide idea보다 suicidal thoughts가 자연스럽습니다."],
    [/\bdo you have suicide ideation\b/gi, "have you had suicidal thoughts", "진료실 영어에서는 suicidal thoughts 또는 suicidal ideation을 씁니다."],
    [/\bdo you have thoughts of suicide\b/gi, "have you had thoughts of suicide", "최근 경험을 묻는 문진에는 have you had가 자연스럽습니다."],
    [/\bdo you want to suicide\b/gi, "have you had thoughts of killing yourself", "suicide는 동사로 쓰지 않고 killing yourself처럼 표현합니다."],
    [/\bdo you want suicide\b/gi, "have you had thoughts of killing yourself", "자살 의도 질문은 have you had thoughts of killing yourself가 자연스럽습니다."],
    [/\bhurt by yourself\b/gi, "hurt yourself", "재귀대명사 yourself를 바로 씁니다."],
    [/\bharm by yourself\b/gi, "harm yourself", "재귀대명사 yourself를 바로 씁니다."],
    [/\bhow is your sleep\b/gi, "how has your sleep been", "최근 수면 상태는 how has your sleep been이 자연스럽습니다."],
    [/\bhow about your sleep\b/gi, "how has your sleep been", "문진 질문으로는 how has your sleep been이 더 정확합니다."],
    [/\bdo you have sleep problem\b/gi, "have you had sleep problems", "수면 문제는 have you had sleep problems처럼 묻는 것이 자연스럽습니다."],
    [/\bdo you have sleeping problem\b/gi, "have you had sleep problems", "sleeping problem보다 sleep problems가 자연스럽습니다."],
    [/\bhow is your mood\b/gi, "how has your mood been", "최근 경과를 묻는 표현은 how has your mood been이 자연스럽습니다."],
    [/\bhow about your mood\b/gi, "how has your mood been", "문진 질문으로는 how has your mood been이 더 자연스럽습니다."],
    [/\bmedication will best with sleep,\s*routine or therapy\b/gi, "Medication works best when combined with a sleep routine and therapy", "will best는 동사가 빠진 표현입니다. medication works best when combined with...처럼 말합니다. sleep, routine은 sleep routine으로 묶고, 병행 치료는 or보다 and가 자연스럽습니다."],
    [/\bmedication will best with sleep routine or therapy\b/gi, "Medication works best when combined with a sleep routine and therapy", "will best는 동사가 빠진 표현입니다. medication works best when combined with...처럼 말합니다. 약물, 수면 루틴, 치료를 함께 설명할 때는 or보다 and가 자연스럽습니다."],
    [/\bmedication will best\b/gi, "medication works best", "will best는 동사가 빠진 표현입니다. works best처럼 동사가 필요합니다."],
    [/\bmedicine will best\b/gi, "medicine works best", "will best는 동사가 빠진 표현입니다. works best처럼 동사가 필요합니다."],
    [/\bmedication is best with\b/gi, "medication works best with", "약물 효과를 설명할 때는 is best보다 works best with가 자연스럽습니다."],
    [/\bmedicine is best with\b/gi, "medicine works best with", "약물 효과를 설명할 때는 is best보다 works best with가 자연스럽습니다."],
    [/\bsleep,\s*routine\b/gi, "a sleep routine", "sleep, routine처럼 나누기보다 a sleep routine이 자연스럽습니다."],
    [/\bany medication before\b/gi, "have you taken any psychiatric medication before", "약물력 질문은 완전한 의문문으로 말하면 더 명확합니다."]
  ];

  replacements.forEach(([pattern, replacement, note]) => {
    pattern.lastIndex = 0;
    if (pattern.test(corrected)) {
      pattern.lastIndex = 0;
      corrected = corrected.replace(pattern, replacement);
      if (!notes.includes(note)) notes.push(note);
    }
  });

  const didVerbResult = fixDidPastTense(corrected);
  if (didVerbResult.corrected !== corrected) {
    corrected = didVerbResult.corrected;
    didVerbResult.notes.forEach((note) => {
      if (!notes.includes(note)) notes.push(note);
    });
  }

  const doDoesVerbResult = fixDoDoesThirdPerson(corrected);
  if (doDoesVerbResult.corrected !== corrected) {
    corrected = doDoesVerbResult.corrected;
    doDoesVerbResult.notes.forEach((note) => {
      if (!notes.includes(note)) notes.push(note);
    });
  }

  corrected = corrected.replace(/\s+([?.!,])/g, "$1");
  if (corrected) {
    corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
  }

  const questionStart = /^(what|when|where|why|how|do|does|did|have|has|had|are|is|were|was|can|could|would|will|should)\b/i;
  if (questionStart.test(corrected) && !/[?.!]$/.test(corrected)) {
    corrected += "?";
    notes.push("질문 문장은 물음표로 마무리합니다.");
  }

  return { original, corrected, notes };
}

function fixDidPastTense(sentence) {
  const notes = [];
  const corrected = sentence.replace(/\bdid\s+(you|he|she|it|they|we|i)\s+([a-z]+(?:ed|ied))\b/gi, (match, subject, verb) => {
    const base = toBaseVerbAfterDid(verb);
    if (!base || base.toLowerCase() === verb.toLowerCase()) return match;
    notes.push("did 뒤에는 과거형이 아니라 동사원형을 씁니다.");
    return `did ${subject} ${base}`;
  });
  return { corrected, notes };
}

function toBaseVerbAfterDid(verb) {
  const lower = verb.toLowerCase();
  const irregular = {
    had: "have",
    felt: "feel",
    went: "go",
    came: "come",
    saw: "see",
    slept: "sleep",
    thought: "think",
    took: "take",
    made: "make"
  };
  if (irregular[lower]) return matchCase(verb, irregular[lower]);
  if (lower.endsWith("ied") && lower.length > 4) return matchCase(verb, `${lower.slice(0, -3)}y`);
  if (lower.endsWith("ced")) return matchCase(verb, lower.slice(0, -1));
  if (lower.endsWith("ed") && lower.length > 3) {
    const withoutEd = lower.slice(0, -2);
    const base = withoutEd.endsWith("at") || withoutEd.endsWith("iz") ? `${withoutEd}e` : withoutEd;
    return matchCase(verb, base);
  }
  return verb;
}

function fixDoDoesThirdPerson(sentence) {
  const notes = [];
  const corrected = sentence.replace(/\b(do|does)\s+(you|he|she|it|they|we|i)\s+([a-z]+)s\b/gi, (match, aux, subject, verb) => {
    if (["is", "was", "has"].includes(verb.toLowerCase())) return match;
    notes.push("do/does 뒤에는 동사원형을 씁니다.");
    return `${aux} ${subject} ${verb}`;
  });
  return { corrected, notes };
}

function matchCase(source, target) {
  if (source === source.toUpperCase()) return target.toUpperCase();
  if (source[0] === source[0].toUpperCase()) return target.charAt(0).toUpperCase() + target.slice(1);
  return target;
}

function showCorrection(correction) {
  if (!correctionStatus) return;
  const { original, corrected, notes = [] } = correction;

  if (original === corrected) {
    correctionStatus.innerHTML = "";
    return;
  }

  const reason = notes.length ? notes.join(" ") : "더 자연스럽고 정확한 진료실 영어로 다듬었습니다.";
  const originalMarkup = renderDiffText(original, corrected, "wrong");
  const correctedMarkup = renderDiffText(corrected, original, "right");
  correctionStatus.innerHTML = `
    <div class="correction-card">
      <label class="correction-edit-label" for="correctionEdit">고칠 문장</label>
      <textarea id="correctionEdit" class="correction-edit" lang="en">${escapeHtml(original)}</textarea>
      <div class="correction-preview">
        <span class="correction-label wrong">오류</span>
        <span class="original-text">${originalMarkup}</span>
      </div>
      <div class="correction-line">
        <span class="correction-label right">교정 문장</span>
        <span class="corrected-text">${correctedMarkup}</span>
      </div>
      <div class="correction-reason">이유: ${escapeHtml(reason)}</div>
    </div>
  `;

  const editBox = correctionStatus.querySelector("#correctionEdit");
  const doctorInput = document.querySelector("#doctorInput");
  if (editBox && doctorInput) {
    editBox.addEventListener("input", () => {
      doctorInput.value = editBox.value;
    });
  }
}

function renderDoctorBubble(correction) {
  const { original, corrected, notes = [] } = correction;
  if (original === corrected) {
    doctorBubble.textContent = corrected;
    return;
  }

  const reason = notes.length ? notes[0] : "더 자연스럽고 정확한 진료실 영어로 고친 표현입니다.";
  doctorBubble.innerHTML = `
    <div class="doctor-correction">
      <div class="doctor-correction-line wrong">
        <span class="doctor-correction-label">틀린 부분</span>
        <span>${renderDiffText(original, corrected, "wrong")}</span>
      </div>
      <div class="doctor-correction-line right">
        <span class="doctor-correction-label">교정</span>
        <span>${renderDiffText(corrected, original, "right")}</span>
      </div>
      <div class="doctor-correction-reason">이유: ${escapeHtml(reason)}</div>
    </div>
  `;
}

function renderDiffText(source, comparison, kind) {
  const sourceTokens = source.match(/\S+/g) || [];
  const comparisonTokens = comparison.match(/\S+/g) || [];
  const matched = getMatchedTokenIndexes(sourceTokens, comparisonTokens);

  return sourceTokens
    .map((token, index) => {
      const safeToken = escapeHtml(token);
      const exactTokenChanged = sourceTokens.length === comparisonTokens.length && token !== comparisonTokens[index];
      if (matched.has(index) && !exactTokenChanged) return safeToken;
      return `<span class="diff-token ${kind}">${safeToken}</span>`;
    })
    .join(" ");
}

function getMatchedTokenIndexes(sourceTokens, comparisonTokens) {
  const rows = sourceTokens.length + 1;
  const cols = comparisonTokens.length + 1;
  const table = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = sourceTokens.length - 1; i >= 0; i -= 1) {
    for (let j = comparisonTokens.length - 1; j >= 0; j -= 1) {
      if (compareToken(sourceTokens[i]) === compareToken(comparisonTokens[j])) {
        table[i][j] = table[i + 1][j + 1] + 1;
      } else {
        table[i][j] = Math.max(table[i + 1][j], table[i][j + 1]);
      }
    }
  }

  const matched = new Set();
  let i = 0;
  let j = 0;
  while (i < sourceTokens.length && j < comparisonTokens.length) {
    if (compareToken(sourceTokens[i]) === compareToken(comparisonTokens[j])) {
      matched.add(i);
      i += 1;
      j += 1;
    } else if (table[i + 1][j] >= table[i][j + 1]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return matched;
}

function compareToken(token) {
  return token.toLowerCase().replace(/[.,!?;:]/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function evaluateClinicalQuestion(value) {
  const text = normalize(value);
  const targetRules = [
    ["Greeting", ["hi", "hello", "good morning", "good afternoon", "nice to meet", "how are you"]],
    ["Daily routine", ["daily routine", "normal day", "weekday", "morning", "after work", "usually do"]],
    ["Work or study", ["work", "job", "study", "school", "class", "office"]],
    ["Family and relationships", ["family", "friend", "partner", "children", "daughter", "son", "relationship"]],
    ["Hobbies", ["hobby", "hobbies", "free time", "relax", "music", "movie", "book", "exercise"]],
    ["Food and preferences", ["food", "eat", "coffee", "tea", "favorite", "like", "prefer"]],
    ["Plans", ["plan", "weekend", "tonight", "tomorrow", "vacation", "looking forward"]],
    ["Chief complaint", ["what brings", "how can i help", "main concern", "problem"]],
    ["Duration", ["how long", "when did", "duration"]],
    ["Anhedonia", ["enjoy", "interest", "pleasure"]],
    ["Sleep", ["sleep", "insomnia", "wake"]],
    ["Suicidal ideation", ["suicid", "hurt yourself", "harm yourself", "harming yourself", "life worth", "not wake"]],
    ["Function", ["work", "daily", "function", "relationship"]],
    ["Onset", ["start", "begin", "onset", "first"]],
    ["Peak", ["peak", "minutes", "quickly"]],
    ["Physical symptoms", ["heart", "palpitation", "breath", "chest", "dizzy"]],
    ["Avoidance", ["avoid", "avoiding"]],
    ["Trigger", ["trigger", "cause", "happen before"]],
    ["Emergency visits", ["er", "emergency", "doctor", "medical"]],
    ["Sleep onset", ["fall asleep", "bed"]],
    ["Maintenance", ["wake up", "during the night"]],
    ["Wake time", ["wake time", "morning"]],
    ["Caffeine", ["caffeine", "coffee"]],
    ["Screen use", ["screen", "phone"]],
    ["Daytime impairment", ["daytime", "tired", "fatigue"]],
    ["Childhood onset", ["child", "school", "age 12", "young"]],
    ["Inattention", ["attention", "focus", "concentrate"]],
    ["Impulsivity", ["impulsive", "interrupt", "act without"]],
    ["Settings", ["work and home", "setting", "more than one"]],
    ["Impairment", ["consequence", "affect", "trouble"]],
    ["Differential", ["anxiety", "mood", "sleep", "substance"]],
    ["Passive death wish", ["not wake", "better off dead", "disappear"]],
    ["Ideation", ["ending your life", "kill yourself", "suicidal", "harming yourself", "harm yourself"]],
    ["Plan", ["plan", "method", "how would"]],
    ["Intent", ["intent", "act on", "actually do"]],
    ["Means", ["means", "access", "pills", "weapon"]],
    ["Protective factors", ["stopped you", "protect", "safe", "support"]],
    ["Safety plan", ["safety plan", "emergency", "stay safe"]],
    ["Purpose", ["goal", "purpose", "medicine is to"]],
    ["Onset", ["how soon", "takes", "weeks"]],
    ["Common side effects", ["common side", "nausea", "headache"]],
    ["Warning effects", ["serious", "warning", "call"]],
    ["Adherence", ["take it", "regularly", "adherence"]],
    ["Stopping risk", ["stop", "suddenly", "taper"]],
    ["Follow-up", ["follow up", "next visit", "monitor"]]
  ];

  let matched = [];
  targetRules.forEach(([target, keys]) => {
    if (currentTopic.targets.includes(target) && keys.some((key) => text.includes(key))) {
      activeTargets.add(target);
      matched.push(target);
    }
  });

  const empathy = ["sorry", "hard", "difficult", "thank you", "understand"].some((key) => text.includes(key));
  const questionLike = value.includes("?") || /^(how|what|when|do|did|have|can|could|are|is|were|does)\b/i.test(value);
  let points = 4;
  if (matched.length) points += 5;
  if (empathy) points += 2;
  if (questionLike) points += 1;

  const easy = getSessionEssentials("easy")[0] || currentTopic.essentials.easy[0];
  const natural = getSessionEssentials("natural")[0] || currentTopic.essentials.natural[0];
  const professional = getSessionEssentials("professional")[0] || currentTopic.essentials.professional[0];
  if (currentTopic.id === "daily") {
    const message = [
      matched.length ? `좋아요. 이어간 대화 항목: ${matched.join(", ")}` : "의미는 전달됐습니다. 더 자연스럽게 하려면 일상 소재를 하나 구체적으로 물어보세요.",
      empathy ? "상대 반응을 받아주는 표현도 들어갔습니다." : "상대 답변에 짧게 반응한 뒤 다음 질문을 붙이면 더 자연스럽습니다.",
      "",
      `Easy version: ${easy}`,
      `Natural version: ${natural}`,
      `Professional version: ${professional}`
    ].join("\n");
    return { points, message };
  }
  const message = [
    matched.length ? `좋아요. 확인된 문진 항목: ${matched.join(", ")}` : "의미는 전달됐지만, 핵심 문진 항목과 직접 연결되면 더 좋아요.",
    empathy ? "공감 표현도 들어갔습니다." : "짧은 공감 표현을 앞에 붙이면 더 자연스럽습니다.",
    "",
    `Easy version: ${easy}`,
    `Natural version: ${natural}`,
    `Professional version: ${professional}`
  ].join("\n");
  return { points, message };
}

const patientResponseBank = {
  depression: {
    chief: [
      "I've been feeling down most days, and I do not feel like myself.",
      "I came because my mood has been low and I cannot enjoy things lately."
    ],
    duration: [
      "It started about two months ago and has been slowly getting worse.",
      "I noticed it around early spring, but it became harder to ignore over the last few weeks."
    ],
    course: [
      "It is not constant every minute, but most days feel heavy.",
      "Some evenings are a little better, but mornings are usually the worst."
    ],
    trigger: [
      "Work stress may have started it, but now it feels bigger than that.",
      "I cannot point to one event, but I have been under a lot of pressure."
    ],
    mood: [
      "My mood feels flat and heavy.",
      "I feel sad, but mostly I just feel empty."
    ],
    anhedonia: [
      "I used to enjoy meeting friends, but now I avoid it.",
      "Even things I normally like feel like chores."
    ],
    sleep: [
      "I wake up around 4 a.m. and cannot get back to sleep.",
      "On weekends I sleep too much, but I still feel tired."
    ],
    appetite: [
      "My appetite is lower than usual, and food does not taste good.",
      "I have been skipping meals without really noticing."
    ],
    energy: [
      "My energy is low almost every day.",
      "Even simple tasks feel like they take a lot of effort."
    ],
    concentration: [
      "It is hard to concentrate at work, even on simple emails.",
      "I keep rereading the same things because my mind drifts."
    ],
    function: [
      "I still go to work, but I am barely getting things done.",
      "At home I let chores pile up because I feel too drained."
    ],
    guilt: [
      "I feel guilty that I am not doing enough for my family.",
      "I keep blaming myself even when I know it is not all my fault."
    ],
    hopeless: [
      "I do feel hopeless sometimes, especially at night.",
      "I worry that I will not get back to normal."
    ],
    suicide: [
      "Sometimes I wish I would not wake up, but I do not have a plan.",
      "I have had thoughts that life feels too hard, but I have not tried to hurt myself."
    ],
    plan: [
      "No, I have not made a specific plan.",
      "I have thought about disappearing, but not about a clear method."
    ],
    intent: [
      "No, I do not think I would act on it right now.",
      "The thoughts scare me, but I do not want to die."
    ],
    means: [
      "I have regular medications at home, but I have not gathered anything to hurt myself.",
      "There are no weapons at home."
    ],
    pastAttempt: [
      "No, I have never attempted suicide before.",
      "I have not tried to hurt myself in the past."
    ],
    protective: [
      "My younger sister checks on me, and that helps.",
      "My family is the main reason I keep going."
    ],
    substance: [
      "I drink a little more on weekends, but not every day.",
      "I do not use drugs."
    ],
    psychosis: [
      "No, I have not heard voices or felt paranoid.",
      "I do not think anyone is trying to harm me."
    ],
    mania: [
      "No, I have not had periods of unusually high energy or needing little sleep.",
      "I have never felt overly energized or out of control like that."
    ],
    general: [
      "It is hard to explain, but everything feels heavier than before.",
      "I am trying to answer, but I feel a bit overwhelmed."
    ]
  },
  panic: {
    chief: [
      "I get sudden attacks where my heart races and I feel terrified.",
      "I came because these episodes feel like they come out of nowhere."
    ],
    duration: [
      "The first one happened about three months ago.",
      "Lately it happens once or twice a week."
    ],
    panicSymptoms: [
      "My heart pounds, I get short of breath, and my hands feel numb.",
      "I feel dizzy and scared that I might die."
    ],
    peak: [
      "The worst part usually hits within ten minutes.",
      "It rises very fast, almost like a wave."
    ],
    avoidance: [
      "I avoid the subway now because I am scared it will happen there.",
      "I sit near exits because I worry about being trapped."
    ],
    trigger: [
      "Sometimes it happens in crowded places, but sometimes there is no trigger.",
      "Stress makes it more likely, but it can happen when I feel calm too."
    ],
    medicalCheck: [
      "I went to the ER once, and they said my heart was okay.",
      "My basic tests were normal, but I still worry something is wrong."
    ],
    function: [
      "It is affecting my commute and my classes.",
      "I cancel plans because I am afraid of having another attack."
    ],
    suicide: [
      "No, I have not wanted to kill myself. I am just scared during the attacks.",
      "I do not have self-harm thoughts."
    ],
    general: [
      "It feels frightening and embarrassing.",
      "I mostly want to understand why it keeps happening."
    ]
  },
  insomnia: {
    chief: [
      "I cannot fall asleep, and it is affecting my day.",
      "I came because I am exhausted from poor sleep."
    ],
    sleep: [
      "I lie awake for two or three hours before I fall asleep.",
      "I wake up several times and then check the clock."
    ],
    duration: [
      "It has been going on for about six months.",
      "It started gradually, but the last month has been worse."
    ],
    trigger: [
      "Stress at work seems to make it worse.",
      "When I worry about sleep, I sleep even worse."
    ],
    course: [
      "It happens most nights, not just occasionally.",
      "Weekends are a little better, but I still feel tired."
    ],
    function: [
      "The next day I feel foggy and irritable.",
      "I make more mistakes at work when I sleep poorly."
    ],
    substance: [
      "I drink coffee in the afternoon because I am exhausted.",
      "I sometimes drink wine to relax, but it does not really help."
    ],
    mood: [
      "My mood is more anxious and irritable when I do not sleep.",
      "I feel more emotional lately because I am tired."
    ],
    suicide: [
      "No, I have not had thoughts of hurting myself.",
      "I feel frustrated, but I do not want to die."
    ],
    general: [
      "I am not sure what else to say, but sleep is the biggest issue.",
      "I just want a normal night of sleep again."
    ]
  },
  adhd: {
    chief: [
      "I miss deadlines even when I really care about the project.",
      "I came because I cannot keep my life organized."
    ],
    childhood: [
      "I was like this in school too. Teachers said I was careless.",
      "My parents thought I was lazy, but I remember trying hard."
    ],
    inattention: [
      "I lose track of appointments and forget bills.",
      "I start tasks and then jump to something else before finishing."
    ],
    concentration: [
      "Boring tasks feel almost impossible to stay with.",
      "If something is interesting, I can focus for hours."
    ],
    impulsivity: [
      "I interrupt people sometimes, then feel bad afterward.",
      "I make quick decisions and regret them later."
    ],
    settings: [
      "It happens at work and at home.",
      "My partner notices it too, not just my coworkers."
    ],
    function: [
      "It has caused missed deadlines and arguments at home.",
      "I feel like I am always catching up."
    ],
    mood: [
      "I get frustrated with myself, but I do not feel depressed most days.",
      "I feel anxious mainly because I keep falling behind."
    ],
    sleep: [
      "My sleep is irregular, but the attention problems happen even when I sleep enough.",
      "I stay up late because I procrastinate."
    ],
    substance: [
      "I drink coffee a lot, but I do not use drugs.",
      "I do not drink much alcohol."
    ],
    general: [
      "It is hard to describe, but I feel constantly behind.",
      "I want to know whether this is ADHD or something else."
    ]
  },
  suicide: {
    chief: [
      "I have been feeling unsafe with my thoughts lately.",
      "I came because I scared myself last week."
    ],
    suicide: [
      "Yes, I have had thoughts of ending my life.",
      "I keep thinking that everyone would be better off without me."
    ],
    plan: [
      "Last week I thought about taking all my sleeping pills.",
      "The plan was not detailed, but pills were the first thing I thought of."
    ],
    intent: [
      "At that moment, I was afraid I might actually do it.",
      "Right now the intent is lower, but the thoughts still come."
    ],
    means: [
      "I still have the pills in my apartment.",
      "I do not have a gun, but I do have medications at home."
    ],
    pastAttempt: [
      "I have not attempted suicide before.",
      "I used to scratch myself when I was younger, but not recently."
    ],
    protective: [
      "My daughter stopped me from acting on it last week.",
      "Thinking about my family is the main thing that holds me back."
    ],
    substance: [
      "I drink when I feel overwhelmed, and that makes things worse.",
      "I had been drinking the night the thoughts got intense."
    ],
    psychosis: [
      "No, I am not hearing voices telling me to hurt myself.",
      "I do not feel controlled by anyone."
    ],
    function: [
      "I have been missing work and avoiding calls.",
      "I am not taking care of myself well."
    ],
    general: [
      "It is hard to talk about, but I know I need help.",
      "I feel ashamed, but I am trying to be honest."
    ]
  },
  medication: {
    chief: [
      "I am nervous about starting medication.",
      "I want help, but I am worried about side effects."
    ],
    purpose: [
      "So this is meant to reduce the depression and anxiety symptoms, right?",
      "I understand. The goal is to help my symptoms and daily functioning."
    ],
    onset: [
      "So it may take a few weeks before I notice a clear benefit?",
      "I was hoping it would work faster, but I understand it can take time."
    ],
    sideEffect: [
      "Nausea and sleep changes are the side effects I am most worried about.",
      "If side effects happen, I want to know when I should contact you."
    ],
    adherence: [
      "Okay, I will try to take it every day as prescribed.",
      "If I miss a dose, should I just take the next one as usual?"
    ],
    stopping: [
      "I understand I should not stop it suddenly on my own.",
      "If I want to stop later, I will talk with you first."
    ],
    followUp: [
      "Okay, I can come back for follow-up to check the response and side effects.",
      "That makes sense. I would like to review how it is working after I start."
    ],
    medication: [
      "Will I become dependent on it?",
      "How long will I need to take it?"
    ],
    duration: [
      "So it will take a few weeks before I know if it is working?",
      "I was hoping it would work faster, but I understand."
    ],
    trigger: [
      "My main worry is losing control or feeling unlike myself.",
      "I have heard mixed things from friends, so I am anxious."
    ],
    function: [
      "I want to function better at work and with my family.",
      "If it helps me sleep and worry less, that would be a relief."
    ],
    sleep: [
      "I am worried it might make my sleep worse.",
      "If it makes me sleepy, should I take it at night?"
    ],
    appetite: [
      "I am worried about weight gain.",
      "Nausea is something I am concerned about too."
    ],
    suicide: [
      "I do not have thoughts of hurting myself right now.",
      "I will tell you if those thoughts come up."
    ],
    general: [
      "That helps, but I still feel a little nervous.",
      "I think I understand. I just need clear instructions."
    ]
  },
  daily: {
    greeting: [
      "Hi. It is nice to talk with you.",
      "Hello. I am glad we can just have a normal conversation today."
    ],
    howAreYou: [
      "I'm doing okay today. A little tired, but mostly fine.",
      "Pretty good, thank you. Today has been calm so far."
    ],
    dailyRoutine: [
      "On a normal weekday, I work during the day and try to rest in the evening.",
      "My routine is simple. I wake up, go to work, eat dinner, and usually watch something before bed."
    ],
    morning: [
      "My morning was quiet. I had coffee and checked a few messages before work.",
      "It was a little rushed, but nothing too stressful happened."
    ],
    evening: [
      "In the evening I usually eat dinner, take a shower, and watch a show.",
      "After work I like having a quiet hour without too many messages."
    ],
    workLife: [
      "Work has been busy, but manageable.",
      "I like some parts of my job, but meetings can be tiring."
    ],
    family: [
      "My family is doing okay. We usually talk on weekends.",
      "I am close with my family, though everyone is busy."
    ],
    friends: [
      "I meet friends when our schedules match, usually for coffee or dinner.",
      "I have a few close friends, and we mostly text during the week."
    ],
    hobbies: [
      "I like walking, listening to music, and watching dramas.",
      "When I have free time, I usually read or watch something light."
    ],
    food: [
      "I like Korean food, especially soup or noodles when I want comfort food.",
      "These days I have been enjoying simple food, like rice bowls or sandwiches."
    ],
    preference: [
      "I think I prefer quiet places over crowded places.",
      "It depends on the day, but I usually like simple and comfortable things."
    ],
    weekend: [
      "This weekend I might meet a friend or just rest at home.",
      "I do not have big plans, but I would like to sleep in and go for a walk."
    ],
    weather: [
      "The weather affects my mood a little. Sunny days make it easier to go outside.",
      "I do not mind rain if I can stay inside with coffee."
    ],
    travel: [
      "I would like to travel somewhere quiet, maybe near the ocean.",
      "I have not traveled much recently, but I enjoy short trips."
    ],
    conversationTopic: [
      "We can talk about food, travel, movies, music, or daily routines.",
      "I am comfortable talking about everyday things first."
    ],
    general: [
      "That is a nice everyday question. I can answer that.",
      "I like this kind of normal conversation. It feels easier to keep going."
    ]
  }
};

const commonConversationBank = {
  greeting: [
    "Hello, doctor.",
    "Hi, doctor. Nice to meet you.",
    "Hello."
  ],
  howAreYou: [
    "Not bad, thank you.",
    "I'm okay, I guess.",
    "A little nervous, but I'm alright."
  ],
  niceToMeetYou: [
    "Nice to meet you too.",
    "Thank you, doctor. Nice to meet you.",
    "Thanks. I'm a little nervous, but nice to meet you."
  ],
  thanks: [
    "Thank you.",
    "Thanks, doctor.",
    "I appreciate it."
  ],
  apology: [
    "It's okay.",
    "No worries.",
    "That's alright."
  ],
  canYouHearMe: [
    "Yes, I can hear you.",
    "Yes, I hear you clearly.",
    "I can hear you."
  ],
  confirmReady: [
    "Yes, I'm ready.",
    "Okay, we can start.",
    "Sure."
  ],
  name: [
    "My name is Alex.",
    "I'm Alex Morgan.",
    "You can call me Alex."
  ],
  age: [
    "I'm thirty-two.",
    "I'm 32 years old.",
    "Thirty-two."
  ],
  comfort: [
    "I'm a little nervous, but I'm okay.",
    "This is my first time talking about it, so I feel a bit tense.",
    "I think I'm comfortable enough to talk."
  ],
  permission: [
    "Yes, that's okay.",
    "Sure, you can ask.",
    "Yes, please go ahead."
  ],
  generalSmallTalk: [
    "Not bad.",
    "I'm doing okay.",
    "A little tired, but okay."
  ],
  dailyRoutine: [
    "A normal day is pretty simple: work, dinner, and some quiet time.",
    "Most weekdays are routine, but I like having a little time to unwind."
  ],
  morning: [
    "My morning was okay. I had coffee and got started slowly.",
    "It was a little busy, but manageable."
  ],
  evening: [
    "After work I usually eat dinner and watch something light.",
    "I like keeping evenings quiet if I can."
  ],
  workLife: [
    "Work is busy, but I am handling it.",
    "Some days are tiring, but there are parts of work I like."
  ],
  family: [
    "My family is doing okay. We check in with each other.",
    "I have a few people close to me, and that helps."
  ],
  friends: [
    "I meet friends when we have time, usually over coffee or dinner.",
    "I mostly keep in touch with friends by messaging."
  ],
  hobbies: [
    "I like music, walking, and watching shows.",
    "In my free time I usually do something quiet."
  ],
  food: [
    "I like simple comfort food, especially noodles or soup.",
    "I enjoy coffee, and lately I have been eating simple meals."
  ],
  preference: [
    "I usually prefer quiet places, but it depends on the day.",
    "I like things that feel simple and comfortable."
  ],
  weekend: [
    "This weekend I might rest at home or meet a friend.",
    "I do not have big plans, but I would like to go for a walk."
  ],
  weather: [
    "Sunny weather makes it easier for me to go outside.",
    "Rainy days are okay if I can stay inside and relax."
  ],
  travel: [
    "I would like to take a short trip somewhere quiet.",
    "I have not traveled much recently, but I like the idea."
  ],
  conversationTopic: [
    "We can talk about food, music, daily life, or weekend plans.",
    "Everyday topics are fine. They make the conversation feel natural."
  ]
};

const commonClinicalResponseBank = {
  chief: [
    "The main reason I came is that these symptoms have started affecting my daily life.",
    "I wanted help because it has been hard to manage on my own."
  ],
  mood: [
    "I have not felt like myself lately.",
    "Emotionally, I feel more tense and worn down than usual."
  ],
  duration: [
    "It has been going on for several weeks.",
    "I first noticed it a while ago, but it has become more noticeable recently."
  ],
  frequency: [
    "It happens several times a week.",
    "It is not every minute, but it happens often enough to worry me."
  ],
  severity: [
    "It feels moderate to severe, depending on the day.",
    "Some days I can manage it, but other days it feels overwhelming."
  ],
  course: [
    "It has been getting worse gradually.",
    "It comes and goes, but overall it has not really improved."
  ],
  trigger: [
    "Stress seems to make it worse.",
    "I am not always sure what triggers it."
  ],
  sleep: [
    "My sleep has not been good lately.",
    "I either have trouble falling asleep or wake up feeling tired."
  ],
  appetite: [
    "My appetite has changed a bit.",
    "I have not been eating as normally as I used to."
  ],
  energy: [
    "My energy has been lower than usual.",
    "I feel tired more easily."
  ],
  concentration: [
    "It has been harder to focus.",
    "My mind drifts when I try to concentrate."
  ],
  function: [
    "It is affecting work and my daily routine.",
    "I can still do things, but it takes much more effort."
  ],
  anxiety: [
    "I feel anxious more often than I used to.",
    "I feel tense and on edge."
  ],
  fear: [
    "Yes, it feels scary when it happens.",
    "I get frightened because I do not feel in control."
  ],
  suicide: [
    "No, I have not had thoughts of hurting myself.",
    "I do not want to die, but I do feel overwhelmed sometimes."
  ],
  medication: [
    "I have not taken psychiatric medication before.",
    "I am open to hearing about medication, but I am nervous about side effects."
  ],
  substance: [
    "I drink occasionally, but I do not use drugs.",
    "I do not think alcohol or substances are the main issue."
  ],
  general: [
    "I am not sure exactly how to answer, but I can try if you ask a bit more specifically.",
    "Could you ask that in another way? I want to answer clearly."
  ]
};

function respondAsPatient(doctorQuestion) {
  round = Math.min(round + 1, 99);
  roundValue.textContent = round;
  const response = buildPatientResponse(doctorQuestion);
  patientResponseHistory.push(response);
  patientResponseHistory = patientResponseHistory.slice(-6);

  patientLine.textContent = response;
  if (autoPatientVoice) {
    voiceStatus.textContent = "환자가 답했습니다. 음성 재생을 시도합니다.";
    window.setTimeout(() => speakText(response, true), 180);
  } else {
    voiceStatus.textContent = "환자가 답했습니다. 음성으로 들으려면 ▶ 버튼을 누르세요.";
  }
}

function buildPatientResponse(doctorQuestion) {
  const intent = detectQuestionIntent(doctorQuestion);
  const bank = patientResponseBank[currentTopic.id] || {};
  const contextualCandidates = getContextualConversationCandidates(intent);
  const candidates = contextualCandidates
    || bank[intent]
    || commonConversationBank[intent]
    || commonClinicalResponseBank[intent]
    || bank.general
    || commonClinicalResponseBank.general
    || currentTopic.patientLines;
  const response = chooseFreshResponse(candidates);
  conversationIntentHistory.push(intent);
  conversationIntentHistory = conversationIntentHistory.slice(-8);
  if (response) return response;

  const fallback = currentTopic.patientLines[patientLineCursor % currentTopic.patientLines.length];
  patientLineCursor += 1;
  if (!patientResponseHistory.slice(-4).includes(fallback)) return fallback;
  return "I'm not sure how to answer that, but I can try if you ask it another way.";
}

function chooseFreshResponse(candidates) {
  const recent = new Set(patientResponseHistory.slice(-4));
  return candidates.find((line) => !recent.has(line)) || candidates[0];
}

function getContextualConversationCandidates(intent) {
  const previousIntent = conversationIntentHistory[conversationIntentHistory.length - 1];
  const recentIntents = new Set(conversationIntentHistory.slice(-4));

  if (intent === "greeting" && !recentIntents.has("greeting")) {
    return [
      "Hello, doctor.",
      "Hi, doctor. Nice to meet you."
    ];
  }

  if (intent === "howAreYou" && recentIntents.has("greeting")) {
    return [
      "I'm okay, thank you. A little nervous to be here.",
      "Not bad, thanks. I am a bit anxious about talking today.",
      "I'm doing okay, but I have been worried about what's been going on."
    ];
  }

  if (intent === "niceToMeetYou" && recentIntents.has("greeting")) {
    return [
      "Nice to meet you too, doctor.",
      "Thank you. I'm a little nervous, but nice to meet you too."
    ];
  }

  if (intent === "confirmReady") {
    return [
      `Yes, we can start. ${currentTopic.patientLines[0]}`,
      "Yes, I'm ready. I may need a moment, but I can talk.",
      "Sure. I have been wanting to explain what has been happening."
    ];
  }

  if (intent === "permission") {
    return [
      "Yes, that's okay. You can ask.",
      "Sure, please go ahead.",
      "Yes. I will try to answer honestly."
    ];
  }

  if (intent === "comfort" && previousIntent !== "comfort") {
    return [
      "I'm a little nervous, but I feel okay talking with you.",
      "I think I'm okay. This is just hard to talk about.",
      "I'm comfortable enough to start."
    ];
  }

  if (intent === "thanks" && previousIntent !== "thanks") {
    return [
      "Thank you, doctor.",
      "Thanks. I appreciate you listening.",
      "Thank you. That helps."
    ];
  }

  if (intent === "generalSmallTalk" && recentIntents.has("greeting")) {
    return [
      "Not bad. I'm a little tired, but okay.",
      "I'm doing okay. I was nervous before coming in.",
      "A little tired, but I'm alright."
    ];
  }

  return null;
}

function detectTopicSpecificIntent(text, hasAny) {
  if (currentTopic.id === "depression") {
    if (hasAny(["attempt", "ever tried", "tried to hurt", "hurt yourself before", "self harm", "cut yourself"])) return "pastAttempt";
    if (hasAny(["plan", "method", "how would you do"])) return "plan";
    if (hasAny(["intent", "act on", "actually do", "might do it"])) return "intent";
    if (hasAny(["access", "means", "pills", "weapon", "firearm"])) return "means";
    if (hasAny(["protect", "stopped you", "support", "safe", "family", "reason to live"])) return "protective";
    if (hasAny(["suicid", "kill yourself", "harm yourself", "hurt yourself", "not wake", "better off dead", "ending your life", "life worth living"])) return "suicide";
    if (hasAny(["enjoy", "interest", "pleasure", "fun"])) return "anhedonia";
    if (hasAny(["sleep", "insomnia", "fall asleep", "wake", "nightmare"])) return "sleep";
    if (hasAny(["appetite", "weight", "eating"])) return "appetite";
    if (hasAny(["energy", "tired", "fatigue"])) return "energy";
    if (hasAny(["concentr", "focus", "attention"])) return "concentration";
    if (hasAny(["work", "school", "daily", "function", "relationship", "home"])) return "function";
    if (hasAny(["guilt", "worthless", "blame"])) return "guilt";
    if (hasAny(["hopeless", "future"])) return "hopeless";
    if (hasAny(["how long", "when did", "when started", "when did it start", "when did this start", "onset", "first notice"])) return "duration";
  }

  if (currentTopic.id === "panic") {
    if (hasAny(["avoid", "avoiding", "subway", "crowd", "driving", "outside", "places", "situations"])) return "avoidance";
    if (hasAny(["peak", "minutes", "how quickly", "how fast", "worst part"])) return "peak";
    if (hasAny(["er", "emergency", "medical", "heart checked", "doctor checked", "heart okay"])) return "medicalCheck";
    if (hasAny(["physical symptoms", "during an attack", "during the attack", "heart", "palpitation", "shortness", "breath", "chest", "dizzy", "sweat", "numb"])) return "panicSymptoms";
    if (hasAny(["trigger", "stress", "happen before", "cause", "bring it on", "set it off", "out of nowhere"])) return "trigger";
    if (hasAny(["how often", "how many times", "frequency", "how frequently"])) return "frequency";
    if (hasAny(["how long", "when did", "when started", "when did it start", "when did this start", "onset", "first attack", "first episode"])) return "duration";
  }

  if (currentTopic.id === "insomnia") {
    if (hasAny(["caffeine", "coffee", "alcohol", "drink", "sleep aid", "sedative", "substance"])) return "substance";
    if (hasAny(["screen", "phone", "clock", "nap", "bed behavior", "what do you do when you cannot sleep"])) return "trigger";
    if (hasAny(["daytime", "sleepy", "tired", "fatigue", "concentration", "work", "irritable", "foggy", "affect your day"])) return "function";
    if (hasAny(["wake time", "morning", "too early", "wake up", "during the night", "maintenance", "fall asleep", "bedtime", "sleep latency", "sleep schedule", "sleep"])) return "sleep";
    if (hasAny(["how many nights", "per week", "frequency", "most nights"])) return "course";
    if (hasAny(["how long", "when did", "when started", "when did it start", "when did this start", "onset", "first notice"])) return "duration";
  }

  if (currentTopic.id === "adhd") {
    if (hasAny(["child", "age 12", "school", "since you were young", "childhood", "before age twelve"])) return "childhood";
    if (hasAny(["more than one setting", "setting", "work and home", "work and at home", "both places", "multiple settings", "more than one place"])) return "settings";
    if (hasAny(["lose", "forget", "deadline", "organize", "appointment", "misplace", "careless", "finish tasks", "following through"])) return "inattention";
    if (hasAny(["concentr", "focus", "attention", "boring task", "sustain attention"])) return "concentration";
    if (hasAny(["impulsive", "interrupt", "restless", "fidget", "act before thinking"])) return "impulsivity";
    if (hasAny(["sleep"])) return "sleep";
    if (hasAny(["substance", "alcohol", "drink", "cannabis", "drug use"])) return "substance";
    if (hasAny(["mood", "anxiety", "depressed", "sad"])) return "mood";
    if (hasAny(["consequence", "affect", "trouble", "work", "school", "daily", "function", "relationship", "home"])) return "function";
  }

  if (currentTopic.id === "suicide") {
    if (hasAny(["plan", "method", "how would you do", "specific way", "timeframe"])) return "plan";
    if (hasAny(["intent", "act on", "actually do", "might do it", "would you do it"])) return "intent";
    if (hasAny(["access", "means", "pills", "weapon", "firearm", "gun", "medications at home"])) return "means";
    if (hasAny(["attempt", "ever tried", "tried to kill", "tried to hurt", "self harm", "cut yourself"])) return "pastAttempt";
    if (hasAny(["protect", "stopped you", "support", "safe", "family", "daughter", "reason to live"])) return "protective";
    if (hasAny(["alcohol", "drink", "substance", "cannabis", "drug use"])) return "substance";
    if (hasAny(["voice", "hear things", "paranoid", "psychosis", "hallucination"])) return "psychosis";
    if (hasAny(["work", "daily", "function", "relationship", "home", "calls"])) return "function";
    if (hasAny(["suicid", "kill yourself", "harm yourself", "hurt yourself", "not wake", "better off dead", "ending your life", "disappear"])) return "suicide";
  }

  if (currentTopic.id === "medication") {
    if (hasAny(["side effect", "nausea", "headache", "sleep changes", "sexual", "adverse", "warning", "severe", "call you"])) return "sideEffect";
    if (hasAny(["how soon", "when will", "take effect", "start helping", "weeks", "full effect", "benefit"])) return "onset";
    if (hasAny(["stop", "suddenly", "taper", "discontinuation", "withdrawal"])) return "stopping";
    if (hasAny(["take it every day", "daily", "miss a dose", "adherence", "as prescribed", "consistently"])) return "adherence";
    if (hasAny(["follow up", "next visit", "monitor", "check your response", "response and side effects"])) return "followUp";
    if (hasAny(["purpose", "goal", "what is it for", "medicine is to", "reduce depression", "reduce anxiety", "help you function"])) return "purpose";
    if (hasAny(["dependent", "addictive", "addiction", "how long will i need", "medication", "medicine", "drug", "ssri", "take it"])) return "medication";
  }

  return null;
}

function detectEverydayIntent(text, hasAny) {
  if (hasAny(["what should we talk", "what do you want to talk", "talk about", "conversation topic", "anything you want to talk"])) return "conversationTopic";
  if (hasAny(["weather", "sunny", "rain", "rainy", "hot", "cold", "humid", "cloudy"])) return "weather";
  if (hasAny(["travel", "trip", "vacation", "place you want to go", "somewhere you want to go"])) return "travel";
  if (hasAny(["weekend", "tonight", "tomorrow", "plan", "plans", "looking forward", "this evening"])) return "weekend";
  if (hasAny(["family", "parents", "sibling", "brother", "sister", "children", "daughter", "son"])) return "family";
  if (hasAny(["friend", "friends", "people close to you"])) return "friends";
  if (hasAny(["food", "eat", "lunch", "dinner", "breakfast", "coffee", "tea", "restaurant", "meal", "snack"])) return "food";
  if (hasAny(["hobby", "hobbies", "free time", "relax", "music", "movie", "drama", "book", "exercise", "walk", "walking", "show", "shows"])) return "hobbies";
  if (hasAny(["morning", "start your day", "start the day"])) return "morning";
  if (hasAny(["evening", "after work", "after school", "at night", "end of the day"])) return "evening";
  if (hasAny(["daily routine", "normal day", "typical day", "weekday", "usually do", "ordinary day"])) return "dailyRoutine";
  if (hasAny(["work", "job", "office", "study", "school", "class", "meeting"])) return "workLife";
  if (hasAny(["favorite", "prefer", "do you like", "are you more of"])) return "preference";
  return null;
}

function detectQuestionIntent(question) {
  const text = normalize(question);
  const hasAny = (words) => words.some((word) => text.includes(word));

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(text)) return "greeting";
  if (currentTopic.id === "daily" && hasAny(["how are you feeling", "how do you feel", "how have you been feeling", "how have you felt"])) return "howAreYou";
  if (hasAny(["how are you feeling", "how do you feel", "how have you been feeling", "how has your mood", "how is your mood", "how have you felt"])) return "mood";
  if (hasAny(["how are you", "how is it going", "how are things", "how do you do", "how are you doing", "how have you been"])) return "howAreYou";
  if (hasAny(["nice to meet you", "good to meet you", "pleased to meet you", "i am doctor", "i am dr", "i'm doctor", "i'm dr"])) return "niceToMeetYou";
  if (hasAny(["thank you", "thanks", "i appreciate"])) return "thanks";
  if (hasAny(["sorry", "my apologies", "i apologize"])) return "apology";
  if (hasAny(["can you hear me", "do you hear me", "is my voice okay"])) return "canYouHearMe";
  if (hasAny(["are you ready", "shall we start", "can we start", "is it okay to start", "lets start", "let us start", "let's start", "lets begin", "let's begin", "we can begin"])) return "confirmReady";
  if (hasAny(["please sit", "have a seat", "make yourself comfortable", "take your time"])) return "comfort";
  if (hasAny(["what is your name", "your name", "can you tell me your name"])) return "name";
  if (hasAny(["how old are you", "your age", "what is your age"])) return "age";
  if (hasAny(["are you comfortable", "is this comfortable", "do you feel comfortable", "are you okay talking"])) return "comfort";
  if (hasAny(["is it okay if i ask", "can i ask", "may i ask", "is it alright if"])) return "permission";
  if (currentTopic.id === "daily") {
    const everydayIntent = detectEverydayIntent(text, hasAny);
    if (everydayIntent) return everydayIntent;
  }
  const topicIntent = detectTopicSpecificIntent(text, hasAny);
  if (topicIntent) return topicIntent;
  const everydayIntent = detectEverydayIntent(text, hasAny);
  if (everydayIntent) return everydayIntent;
  if (hasAny(["afraid", "scared", "fear", "terrified", "frightened"])) return "fear";
  if (currentTopic.id === "panic" && hasAny(["physical symptoms", "during an attack", "during the attack", "heart", "palpitation", "shortness", "breath", "chest", "dizzy", "sweat"])) return "panicSymptoms";
  if (hasAny(["what brings", "why are you here", "why did you come", "why did you visit", "main concern", "problem", "what happened", "whats going on", "what is going on", "tell me about your symptoms", "tell me about the symptoms", "symptom", "how can i help", "reason for coming"])) return "chief";
  if (hasAny(["how often", "how many times", "frequency", "how frequently"])) return "frequency";
  if (hasAny(["how severe", "how bad", "severity", "how intense", "how strong"])) return "severity";
  if (hasAny(["how long", "when did", "when started", "when did it start", "when did this start", "start", "begin", "onset", "first notice"])) return "duration";
  if (hasAny(["worse", "better", "course", "changed", "progress", "getting worse", "improving"])) return "course";
  if (hasAny(["trigger", "stress", "happen before", "cause", "bring it on", "set it off"])) return "trigger";
  if (hasAny(["mood", "sad", "depressed", "down", "empty", "low"])) return "mood";
  if (hasAny(["enjoy", "interest", "pleasure", "fun"])) return "anhedonia";
  if (hasAny(["sleep", "insomnia", "fall asleep", "wake", "nightmare"])) return "sleep";
  if (hasAny(["appetite", "weight", "eating"])) return "appetite";
  if (hasAny(["energy", "tired", "fatigue"])) return "energy";
  if (hasAny(["concentr", "focus", "attention"])) return "concentration";
  if (hasAny(["work", "school", "daily", "function", "relationship", "home"])) return "function";
  if (hasAny(["guilt", "worthless", "blame"])) return "guilt";
  if (hasAny(["hopeless", "future"])) return "hopeless";
  if (hasAny(["suicid", "kill yourself", "harm yourself", "hurt yourself", "not wake", "better off dead", "ending your life"])) return "suicide";
  if (hasAny(["plan", "method", "how would you do"])) return "plan";
  if (hasAny(["intent", "act on", "actually do", "might do it"])) return "intent";
  if (hasAny(["access", "means", "pills", "weapon", "firearm"])) return "means";
  if (hasAny(["attempt", "tried", "self harm", "cut yourself"])) return "pastAttempt";
  if (hasAny(["protect", "stopped you", "support", "safe", "family", "reason to live"])) return "protective";
  if (hasAny(["panic", "attack", "heart", "palpitation", "shortness", "breath", "chest", "dizzy", "sweat"])) return "panicSymptoms";
  if (hasAny(["peak", "minutes", "how quickly"])) return "peak";
  if (hasAny(["avoid", "subway", "crowd", "driving", "outside"])) return "avoidance";
  if (hasAny(["er", "emergency", "medical", "heart checked", "doctor checked"])) return "medicalCheck";
  if (hasAny(["child", "age 12", "school", "since you were young"])) return "childhood";
  if (hasAny(["lose", "forget", "deadline", "organize", "appointment"])) return "inattention";
  if (hasAny(["impulsive", "interrupt", "restless", "fidget"])) return "impulsivity";
  if (hasAny(["more than one setting", "work and home", "both places"])) return "settings";
  if (hasAny(["medicine", "medication", "drug", "ssri", "take it", "side effect", "dependent", "stop", "weeks", "follow up"])) return "medication";
  if (hasAny(["alcohol", "drink", "substance", "cannabis", "drug use"])) return "substance";
  if (hasAny(["voice", "hear things", "paranoid", "psychosis", "hallucination"])) return "psychosis";
  if (hasAny(["mania", "manic", "too much energy", "racing thoughts", "less sleep"])) return "mania";
  if (hasAny(["okay", "alright", "fine", "today"])) return "generalSmallTalk";
  return "general";
}

function updateResult(isCorrect, explanation) {
  if (isCorrect) {
    addScore(10);
    streak += 1;
    coachText.textContent = `정답입니다.\n${explanation}`;
  } else {
    streak = 0;
    coachText.textContent = `아깝습니다.\n${explanation}`;
  }
  streakValue.textContent = streak;
}

function addScore(points) {
  score += points;
  scoreValue.textContent = score;
  localStorage.setItem("clinicEnglishScore", String(score));
}

function showHint() {
  if (currentMode === "blank") {
    coachText.textContent = `힌트: ${currentTopic.blank.hint}`;
  } else if (currentMode === "choice") {
    coachText.textContent = "힌트: 실제 문진에서 증상, 기간, 위험도, 기능 손상을 바로 확인하는 문장이 좋습니다.";
  } else if (currentMode === "order") {
    const orderSentence = currentOrderSentence || cleanOrderSentence(currentTopic.order);
    coachText.textContent = `힌트: ${orderSentence.split(" ").slice(0, 3).join(" ")} ...`;
  } else if (currentTopic.id === "daily") {
    coachText.textContent = "힌트: 상대의 답을 짧게 받아주고, 일상 소재 하나를 더 물어보세요. 예: That sounds nice. What do you usually do after work?";
  } else {
    coachText.textContent = "힌트: 공감 한마디 후, 기간/빈도/위험도/기능 손상 중 하나를 직접 물어보세요.";
  }
}

function nextRound() {
  if (currentMode === "roleplay" || currentMode === "exam") {
    if (!visitStarted) {
      voiceStatus.textContent = "먼저 진료 시작을 누르세요.";
      return;
    }
    voiceStatus.textContent = "다음 질문을 하려면 말하기 버튼을 누르세요.";
    const input = document.querySelector("#doctorInput");
    if (input) input.value = "";
    return;
  }
  round += 1;
  roundValue.textContent = round;
  selectedChoice = null;
  if (currentMode === "order") {
    chooseOrderSentence(true);
  } else {
    orderedTokens = [];
    orderAvailableTokens = [];
    currentOrderSentence = "";
  }
  renderMode();
  coachText.textContent = "다음 문항입니다. 짧고 정확한 진료실 영어로 답해 보세요.";
}

function showFeedback() {
  const missed = currentTopic.targets.filter((target) => !activeTargets.has(target));
  if (currentTopic.id === "daily") {
    const fluency = Math.min(10, 5 + Math.floor(roleplayLog.length / 2) + streak);
    const variety = Math.min(10, 4 + activeTargets.size);
    const essential = getSessionEssentials("natural");
    if (feedbackStyle === "short") {
      coachText.textContent = [
        "어색한 점: 질문이 너무 짧게 끊기면 대화가 이어지기 어렵습니다.",
        `아직 덜 다룬 일상 소재: ${missed.length ? missed.join(", ") : "없음"}`,
        `다음 질문: ${missed[0] ? buildQuestionForTarget(missed[0]) : essential[essential.length - 1]}`,
        `점수: Fluency ${fluency}/10, Topic variety ${variety}/10`
      ].join("\n");
      return;
    }
    coachText.innerHTML = [
      "1. 어색한 표현: 정답을 맞히기보다 상대 답변을 받아주고 다음 질문으로 넘기는 흐름이 중요합니다.",
      "2. 자연스러운 표현: 짧은 반응 1문장 + follow-up question 1문장 구조를 유지하세요.",
      `3. 더 쉬운 표현: ${getSessionEssentials("easy")[0] || currentTopic.essentials.easy[0]}`,
      `4. 더 자연스러운 표현: ${essential[0] || currentTopic.essentials.natural[0]}`,
      `5. 잘한 점: ${roleplayLog.length ? "일상 대화를 영어로 이어갔습니다." : "필수 문장을 먼저 확인했습니다."}`,
      `6. 아직 덜 다룬 일상 소재: ${missed.length ? missed.join(", ") : "없음"}`,
      `7. 다음 질문: ${missed[0] ? buildQuestionForTarget(missed[0]) : essential[essential.length - 1]}`,
      `8. 오늘 외울 문장 5개:\n${essential.map((item, index) => `${index + 1}. ${item}`).join("\n")}`,
      "",
      `<div class="feedback-score">
        <div><strong>Fluency</strong>${fluency}/10</div>
        <div><strong>Topic variety</strong>${variety}/10</div>
        <div><strong>Follow-up flow</strong>${roleplayLog.length >= 3 ? 8 : 5}/10</div>
        <div><strong>Natural response</strong>${roleplayLog.some((line) => /that sounds|really|nice|interesting|i see|oh/i.test(line)) ? 8 : 5}/10</div>
      </div>`,
      "",
      feedbackStyle === "detailed"
        ? "9. 다음 훈련 과제: 일상 대화 8턴을 진행하세요. 하루, 일/공부, 가족/친구, 취미, 음식, 주말 계획을 최소 한 번씩 물어보세요."
        : "9. 다음 훈련 과제: 일상 대화 5턴을 진행하고, 매번 짧은 반응 뒤에 follow-up question을 붙이세요."
    ].join("\n");
    return;
  }
  const riskMissed = currentTopic.targets.some((target) => ["Suicidal ideation", "Passive death wish", "Ideation", "Plan", "Intent", "Means", "Safety plan"].includes(target))
    && ![...activeTargets].some((target) => ["Suicidal ideation", "Passive death wish", "Ideation", "Plan", "Intent", "Means", "Safety plan"].includes(target));
  const fluency = Math.min(10, 5 + Math.floor(roleplayLog.length / 2) + streak);
  const structure = Math.min(10, 4 + activeTargets.size);
  const risk = riskMissed ? 4 : 8;
  const essential = getSessionEssentials("natural");
  const easyEssential = getSessionEssentials("easy")[0] || currentTopic.essentials.easy[0];
  const professionalEssential = getSessionEssentials("professional")[0] || currentTopic.essentials.professional[0];
  if (feedbackStyle === "short") {
    coachText.textContent = [
      `어색한 점: 핵심 질문이 늦으면 문진 구조가 약해집니다.`,
      `놓친 항목: ${missed.length ? missed.join(", ") : "없음"}`,
      `위험도 평가: ${riskMissed ? "직접 질문 필요" : "핵심 질문 포함"}`,
      `다음 질문: ${missed[0] ? buildQuestionForTarget(missed[0]) : essential[essential.length - 1]}`,
      `점수: Fluency ${fluency}/10, Structure ${structure}/10, Risk ${risk}/10`
    ].join("\n");
    return;
  }
  coachText.innerHTML = [
    "1. 어색한 표현: 문법보다도 질문 의도가 흐리면 환자가 짧게 답하기 어렵습니다.",
    "2. 자연스러운 표현: 공감 1문장 + 핵심 질문 1문장 구조를 유지하세요.",
    `3. 더 쉬운 표현: ${easyEssential}`,
    `4. 더 전문적인 표현: ${professionalEssential}`,
    `5. 잘한 점: ${roleplayLog.length ? "환자 답변에 맞춰 대화를 이어갔습니다." : "필수 문장을 먼저 확인했습니다."}`,
    `6. 놓친 문진 항목: ${missed.length ? missed.join(", ") : "없음"}`,
    `7. 위험도 평가 누락 여부: ${riskMissed ? "위험도 관련 직접 질문이 더 필요합니다." : "현재 세션 기준 핵심 위험도 질문이 포함됐습니다."}`,
    `8. 다음에 반드시 물어야 할 질문: ${missed[0] ? buildQuestionForTarget(missed[0]) : essential[essential.length - 1]}`,
    `9. 오늘 외울 문장 5개:\n${essential.map((item, index) => `${index + 1}. ${item}`).join("\n")}`,
    "",
    `<div class="feedback-score">
      <div><strong>Fluency</strong>${fluency}/10</div>
      <div><strong>Clinical accuracy</strong>${Math.min(10, 5 + activeTargets.size)}/10</div>
      <div><strong>Interview structure</strong>${structure}/10</div>
      <div><strong>Empathy</strong>${roleplayLog.some((line) => /sorry|hard|difficult|understand|thank/i.test(line)) ? 8 : 5}/10</div>
      <div><strong>Risk assessment</strong>${risk}/10</div>
      <div><strong>Medication explanation</strong>${currentTopic.id === "medication" ? Math.min(10, 5 + activeTargets.size) : "N/A"}</div>
      <div><strong>Closing and follow-up</strong>${activeTargets.has("Follow-up") ? 8 : 5}/10</div>
    </div>`,
    "",
    feedbackStyle === "detailed"
      ? "12. 다음 훈련 과제: 같은 주제로 Role-play 8턴을 진행하세요. 1턴 공감, 2턴 주호소, 3턴 기간, 4턴 기능손상, 5턴 수면/식욕, 6턴 위험도, 7턴 감별증상, 8턴 치료계획 순서로 마무리하세요."
      : "12. 다음 훈련 과제: 같은 주제로 Role-play 5턴을 진행하고, 마지막에 위험도 또는 추적계획 질문을 반드시 넣으세요."
  ].join("\n");
}

function buildQuestionForTarget(target) {
  const map = {
    "Chief complaint": "What brings you in today?",
    Duration: "How long has this been going on?",
    "Suicidal ideation": "Have you had any thoughts of harming yourself?",
    Plan: "Have you thought about a specific plan?",
    Intent: "Did you feel you might act on those thoughts?",
    Means: "Do you have access to the means you mentioned?",
    "Safety plan": "What can we do today to help you stay safe?",
    "Follow-up": "Can we schedule a follow-up to monitor your response and side effects?",
    Greeting: "How has your day been so far?",
    "Daily routine": "What does a normal weekday look like for you?",
    "Work or study": "How has work or study been going lately?",
    "Family and relationships": "How do you usually spend time with family or friends?",
    Hobbies: "What do you like to do in your free time?",
    "Food and preferences": "What kind of food have you been enjoying lately?",
    Plans: "Do you have any plans for the weekend?"
  };
  return map[target] || getSessionEssentials("natural")[0] || currentTopic.essentials.natural[0];
}

function speakPatientLine() {
  unlockPatientVoice();
  speakText(patientLine.textContent, false);
}

function speakText(text, isAuto = false) {
  if (!text || text === "...") return;
  if (!("speechSynthesis" in window) || !window.SpeechSynthesisUtterance) {
    voiceStatus.textContent = "이 브라우저에서는 환자 음성 재생을 지원하지 않습니다.";
    return;
  }
  try {
    const synth = window.speechSynthesis;
    if (typeof synth.resume === "function") synth.resume();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    const voice = getEnglishVoice();
    if (voice) utterance.voice = voice;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => {
      voiceStatus.textContent = "환자 답변을 재생 중입니다.";
    };
    utterance.onend = () => {
      voiceStatus.textContent = "다음 질문을 말하려면 말하기 버튼을 누르세요.";
    };
    utterance.onerror = () => {
      voiceStatus.textContent = isAuto
        ? "자동 음성 재생이 막혔습니다. 오른쪽 위 ▶ 버튼을 한 번 눌러 환자 답변을 들어 주세요."
        : "음성 재생이 중단되었습니다. 다시 ▶ 버튼을 눌러 주세요.";
    };
    synth.cancel();
    window.setTimeout(() => {
      if (typeof synth.resume === "function") synth.resume();
      synth.speak(utterance);
      window.setTimeout(() => {
        if (synth.paused && typeof synth.resume === "function") synth.resume();
      }, 250);
    }, isAuto ? 40 : 80);
  } catch (error) {
    console.warn("Speech synthesis failed", error);
    voiceStatus.textContent = "음성 재생을 시작하지 못했습니다. 말풍선 텍스트로 계속 진행하세요.";
  }
}

init();
