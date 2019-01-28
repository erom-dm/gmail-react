// hardcoded initial state in place of API

export let MailList = {
  received: [
    {
      id: "suchUniqueMuchWow",
      readStatus: false,
      from: "test@test.ua",
      to: "test@test.ua",
      subject: "Some test subject",
      text:
        "Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и",
      important: false,
      selected: false
    },
    {
      id: "someId2",
      readStatus: true,
      from: "test@ukr.net",
      to: "test@test.ua",
      subject: "Ukr.net hello!",
      text:
        "Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках",
      important: true,
      selected: false
    }
  ],
  sent: []
};

export let activeFolder = { active: "received" };
export let showNewMsgNotif = { showMsg: false };
export let selected = {};
export let opened = null;
