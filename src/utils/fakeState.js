// hardcoded initial state in place of API

export let mailList = {
    received: [
        {
            id: "suchUniqueMuchWow",
            status: false,
            from: "test@test.ua",
            to: "test@test.ua",
            subject: "Some test subject",
            text:
                "Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и",
            important: false,
        },
        {
            id: "someId2",
            status: true,
            from: "test@ukr.net",
            to: "test@test.ua",
            subject: "Ukr.net hello!",
            text:
                "Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках",
            important: true,
        }
    ],
        sent: []
};

export let active = {active: "received"};
export let showMsg = {showMsg: false};
