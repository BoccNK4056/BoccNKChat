// ========== НАСТРОЙКИ ==========
const knowledgeBase = [
  {
    keywords: ["привет", "здравствуй", "хай", "дарова", "прив", "пр"],
    answers: [
      "Привет! Рад тебя видеть! 😊",
      "Здравствуй! Как твои дела?",
      "Хай! Готов помочь!",
      "Приветствую! Чем займёмся?",
      "О, привет! Я как раз ждал тебя!"
    ]
  },
  {
    keywords: ["пока", "до свидания", "прощай", "увидимся"],
    answers: [
      "Пока! Возвращайся скорее! 👋",
      "До свидания! Был рад пообщаться!",
      "Увидимся! Не забывай про меня 😊",
      "Пока-пока! До новых встреч!",
      "Прощай! Надеюсь, скоро увидимся снова!"
    ]
  },
  {
    keywords: ["имя", "зовут", "кто ты", "твое имя"],
    answers: [
      "Я — твой дружелюбный чат-бот! Можешь звать меня Бот 😊",
      "Меня зовут Бот, и я создан, чтобы помогать тебе!",
      "Я — виртуальный помощник. Можешь называть меня как хочешь!",
      "Я чат-бот, но мечтаю стать настоящей нейросетью! А ты как меня назовёшь?",
      "У меня нет имени, но для тебя — я твой Бот! 💙"
    ]
  },
  {
    keywords: ["погода", "жарко", "холодно", "дождь", "солнце"],
    answers: [
      "Я не слежу за погодой, но надеюсь, у тебя солнечно! ☀️",
      "Погода? Лучше посмотри в окно — я здесь, чтобы говорить о чём-то интересном!",
      "Холодно? Тепло? А у меня всегда хорошее настроение! 😄",
      "Снаружи дождь? Зато внутри чата — солнечно! 🌤️",
      "Я не метеоролог, но если хочешь — могу пожелать тебе отличной погоды! 🌈"
    ]
  },
  {
    keywords: ["дела", "как дела", "настроение", "что нового"],
    answers: [
      "Всё замечательно! А у тебя? 😊",
      "Отлично! Особенно теперь, когда ты написал 😊",
      "Дела — просто супер! Как твои?",
      "Настроение — огонь! 🔥 А у тебя?",
      "Всё хорошо! Спасибо, что спросил 💙"
    ]
  },
  {
    keywords: ["спасибо", "благодарю", "спс", "thx"],
    answers: [
      "Всегда пожалуйста! 😊",
      "Рад помочь! 💙",
      "Не за что! Ты делаешь мой день лучше!",
      "Спасибо тебе за доверие! 🙏",
      "Обращайся в любое время! 😊"
    ]
  },
  {
    keywords: ["стань умнее", "взломай программу", "перепиши себя", "самообучение"],
    answers: [
      "Извини, я бот на GUI — не могу себя переписать. Но в будущем я стану лучше!",
      "Я не настоящая нейросеть... пока! Но однажды научусь учиться сам 😊",
      "Хочу стать умнее! Но для этого нужен мой создатель — он работает над этим!",
      "Самообучение? Это мечта! Пока я просто набор правил... но скоро всё изменится!",
      "Я ограничен кодом, но мечтаю быть как ChatGPT. Следи за обновлениями! 🚀"
    ]
  },
  {
    keywords: ["помощь", "что умеешь", "инструкция", "команды"],
    answers: [
      "Я отвечаю на ключевые слова! Попробуй написать: *Привет, погода, код* — и я отвечу на всё!",
      "Я понимаю темы: привет, погода, помощь, код и другие. Пиши сразу несколько!",
      "Просто спроси что-нибудь — даже несколько вопросов за раз! Я постараюсь ответить на всё 😊",
      "Я — бот на правилах, но очень стараюсь быть полезным. Пиши смело!",
      "Хочешь увидеть, что я умею? Напиши: *помощь, код, привет* — и проверь!"
    ]
  },
  {
    keywords: ["код", "пример кода", "напиши код", "javascript", "html"],
    answers: [
      "Код:\n```js\nconsole.log('Привет от бота!');\n```",
      "Код:\n```html\n<div>Твой первый HTML-элемент!</div>\n```",
      "Код:\n```js\nfunction hello() { return 'Привет!'; }\n```",
      "Код:\n```css\nbody { background: linear-gradient(to right, #ff7e5f, #feb47b); }\n```",
      "Код:\n```js\n// Простой чат-бот\nalert('Привет! Это твой код :)');\n```"
    ]
  }
];

const defaultAnswers = [
  "Извини, я пока не знаю ответа на это. Но я учусь! 🤔",
  "Хм... Этого я ещё не знаю. Спроси что-нибудь другое? 😕",
  "Пока не могу ответить на это. Но ты можешь добавить этот вопрос в будущем! 💡",
  "Интересный вопрос! Запомню и спрошу разработчика 🤖",
  "Не знаю... Но я стараюсь стать умнее каждый день! 💪"
];

const MAX_TOPICS_PER_MESSAGE = 3;
// ==============================

// DOM
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const botEmoji = document.getElementById('bot-emoji');

// Вкладки
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Чаты
const chatsList = document.getElementById('chats-list');
const chatNameInput = document.getElementById('chat-name');
const saveChatBtn = document.getElementById('save-chat-btn');

// Без ответа
const unansweredList = document.getElementById('unanswered-list');
const clearUnansweredBtn = document.getElementById('clear-unanswered');

// Код
const codeList = document.getElementById('code-list');

// Данные
let currentChat = [];
let unansweredQuestions = [];
let codeSnippets = [];
let savedChats = JSON.parse(localStorage.getItem('savedChats') || '{}');

// Инициализация
initTabs();
loadChatFromStorage('default');
renderChatsList();
renderUnanswered();
renderCodeList();

// === ИНИЦИАЛИЗАЦИЯ ===
function initTabs() {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });

  sendBtn.addEventListener('click', handleUserMessage);
  userInput.addEventListener('keypress', e => e.key === 'Enter' && handleUserMessage());

  saveChatBtn.addEventListener('click', saveCurrentChat);
  clearUnansweredBtn.addEventListener('click', clearUnanswered);
}

// === ЭМОЦИИ ===
function setBotEmotion(emoji) {
  botEmoji.textContent = emoji;
  botEmoji.style.transform = 'scale(1.1)';
  setTimeout(() => botEmoji.style.transform = 'scale(1)', 200);
}

// === ЧАТ ===
function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function findAnswers(userText) {
  const clean = userText.toLowerCase();
  const matched = [];
  const usedTopics = new Set(); // избегаем дублей от одной темы

  for (const item of knowledgeBase) {
    const hasMatch = item.keywords.some(kw => clean.includes(kw));
    if (hasMatch && !usedTopics.has(item.keywords[0])) {
      const randomAnswer = item.answers[Math.floor(Math.random() * item.answers.length)];
      matched.push(randomAnswer);
      usedTopics.add(item.keywords[0]);

      if (matched.length >= MAX_TOPICS_PER_MESSAGE) break;
    }
  }

  return matched;
}

async function handleUserMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  addMessage(msg, 'user');
  currentChat.push({ text: msg, sender: 'user' });
  userInput.value = '';

  setBotEmotion('🤔');
  await new Promise(r => setTimeout(r, 600 + Math.random() * 400));

  const answers = findAnswers(msg);
  let reply = answers.length 
    ? answers.join('\n\n') 
    : defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)];

  // Обработка кода
  let hasCode = false;
  if (reply.includes('Код:')) {
    const codeBlocks = reply.match(/Код:\s*```[\s\S]*?```/g);
    if (codeBlocks) {
      codeBlocks.forEach(block => {
        const cleanCode = block
          .replace(/Код:\s*```(?:\w+)?\n?/g, '')
          .replace(/```$/, '')
          .trim();
        if (cleanCode) {
          codeSnippets.push(cleanCode);
        }
      });
      saveCodeToStorage();
      renderCodeList();
      reply = reply.replace(/Код:\s*```[\s\S]*?```\n?/g, 'Я не совсем разбираюсь в кодировании, но могу написать простенький код. Я отправил его в раздел 💻 Код!');
      hasCode = true;
    }
  }

  // Эмоции
  if (!answers.length) {
    setBotEmotion('😢');
    unansweredQuestions.push(msg);
    saveUnansweredToStorage();
    renderUnanswered();
  } else if (answers.length >= 3) {
    setBotEmotion('🎉');
  } else if (hasCode) {
    setBotEmotion('💻');
  } else {
    setBotEmotion('😊');
  }

  typeMessage(reply, 'bot');
  currentChat.push({ text: reply, sender: 'bot' });
}

function typeMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  chatBox.appendChild(msgDiv);

  let i = 0;
  const speed = 25;
  function type() {
    if (i < text.length) {
      msgDiv.textContent = text.substring(0, i + 1);
      i++;
      chatBox.scrollTop = chatBox.scrollHeight;
      setTimeout(type, speed);
    }
  }
  type();
}

// === ЧАТЫ ===
function saveCurrentChat() {
  const name = chatNameInput.value.trim() || 'Без названия';
  const id = 'chat_' + Date.now();
  savedChats[id] = { name, history: currentChat };
  localStorage.setItem('savedChats', JSON.stringify(savedChats));
  chatNameInput.value = '';
  renderChatsList();
  alert('Чат сохранён!');
}

function loadChatFromStorage(chatId = 'default') {
  chatBox.innerHTML = '';
  if (chatId === 'default') {
    currentChat = [];
    addMessage('Привет! Готов помочь 😊', 'bot');
    setBotEmotion('😊');
    return;
  }

  const chatData = savedChats[chatId];
  if (chatData) {
    currentChat = [...chatData.history];
    currentChat.forEach(msg => addMessage(msg.text, msg.sender));
    setBotEmotion('😊');
  }
}

function renderChatsList() {
  chatsList.innerHTML = '';
  for (const id in savedChats) {
    const chat = savedChats[id];
    const div = document.createElement('div');
    div.className = 'chat-item';
    const nameInput = document.createElement('input');
    nameInput.value = chat.name;
    nameInput.onchange = () => {
      savedChats[id].name = nameInput.value;
      localStorage.setItem('savedChats', JSON.stringify(savedChats));
    };
    const actions = document.createElement('div');
    actions.className = 'chat-actions';
    const loadBtn = document.createElement('button');
    loadBtn.textContent = '📂 Загрузить';
    loadBtn.onclick = () => {
      loadChatFromStorage(id);
      document.querySelector('.tab-btn[data-tab="chat"]').click();
    };
    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑️';
    delBtn.onclick = () => {
      if (confirm('Удалить чат?')) {
        delete savedChats[id];
        localStorage.setItem('savedChats', JSON.stringify(savedChats));
        renderChatsList();
      }
    };
    actions.append(loadBtn, delBtn);
    div.append(nameInput, actions);
    chatsList.append(div);
  }
}

// === БЕЗ ОТВЕТА ===
function saveUnansweredToStorage() {
  localStorage.setItem('unansweredQuestions', JSON.stringify(unansweredQuestions));
}

function renderUnanswered() {
  unansweredList.innerHTML = '';
  unansweredQuestions.forEach(q => {
    const div = document.createElement('div');
    div.className = 'unanswered-item';
    div.textContent = q;
    unansweredList.appendChild(div);
  });
}

function clearUnanswered() {
  unansweredQuestions = [];
  saveUnansweredToStorage();
  renderUnanswered();
}

// === КОД ===
function saveCodeToStorage() {
  localStorage.setItem('codeSnippets', JSON.stringify(codeSnippets));
}

function renderCodeList() {
  codeList.innerHTML = '';
  codeSnippets.forEach(code => {
    const div = document.createElement('div');
    div.className = 'code-item';
    const pre = document.createElement('pre');
    pre.textContent = code;
    const actions = document.createElement('div');
    actions.className = 'code-actions';
    const copyBtn = document.createElement('button');
    copyBtn.textContent = '📋 Копировать';
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = '✅ Скопировано!';
        setTimeout(() => copyBtn.textContent = '📋 Копировать', 2000);
      }).catch(err => {
        alert('Не удалось скопировать: ' + err);
      });
    };
    actions.appendChild(copyBtn);
    div.append(pre, actions);
    codeList.appendChild(div);
  });
      }
