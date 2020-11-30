import { AnswerType } from './answerTypes.config';

export const questions = [
    {
        id: '1',
        text: 'В первый день работы ты обедаешь вместе с коллегами, которые хотят узнать о тебе побольше. Как будешь строить беседу?',
        answers: [
            {
                id: '1',
                text: 'Буду максимально открыто отвечать на вопросы коллег, я ценю откровенность и честность. ',
                type: [AnswerType[0]],
            },
            {
                id: '2',
                text: 'Буду отвечать выборочно – я не очень люблю все сразу про себя рассказывать, и вообще, постараюсь перевести разговор на мои вопросы к коллегам.',
                type: [AnswerType[3], AnswerType[4]],
            },
            {
                id: '3',
                text: 'Отвечу на все кратко, чего болтать – работать надо!',
                type: [AnswerType[1], AnswerType[5]],
            },
            {
                id: '4',
                text: 'Создам интригу – расскажу необычные противоречивые истории про себя, пусть «разгадывают» меня.',
                type: [AnswerType[2]],
            },
        ],
    },
    {
        id: '2',
        text: 'Одно из заданий требует знания продвинутых функций Excel, ты с такими еще не сталкивался. Как будешь решать проблему?',
        answers: [
            {
                id: '1',
                text: 'Сразу скажу руководителю, что я с таким не сталкивался, и спрошу, может ли меня кто обучить?',
                type: [AnswerType[4]],
            },
            {
                id: '2',
                text: 'К руководителю точно не пойду, неловко признаваться, что чего-то не умею. Спрошу у коллеги, с которой мы так здорово поболтали во время перерыва – она точно поможет.',
                type: [AnswerType[3]],
            },
            {
                id: '3',
                text: 'Никому ни слова! Youtube мне в помощь, и никто не догадается, что я чего-то не знал. ',
                type: [AnswerType[0], AnswerType[2]]
            },
            {
                id: '4',
                text: 'Буду изобретать велосипед: постараюсь достичь того же результата комбинацией более простых функций, которые знаю. А после выполнения в спокойной обстановке изучу новое. ',
                type: [AnswerType[1], AnswerType[5]],
            },
        ],
    },
    {
        id: '3',
        text: 'Скоро Новый Год, и коллеги рассказали тебе о ежегодной праздничной традиции устраивать Тайного Санту (тебе случайным образом назначается коллега, для которого ты подготовишь небольшой подарок). Будешь присоединяться?',
        answers: [
            {
                id: '1',
                text: 'Обязательно! Жду, чтобы мне попался руководитель – у меня уже готовы пара отличных идей…)',
                type: [AnswerType[3], AnswerType[4]],
            },
            {
                id: '2',
                text: 'Идея отличная, буду очень рад, если попадутся еще незнакомые коллеги – так и познакомимся! ',
                type: [AnswerType[0]],
            },
            {
                id: '3',
                text: 'Я больше люблю дарить подарки «в открытую» тем, кого знаю и кому могу точно угадать с подарком. Но все равно подумаю над идеей) ',
                type: [AnswerType[4]],
            },
            {
                id: '4',
                text: 'Я за, но буду очень рад, если подарки будут символическими – в конце года столько дел, боюсь не успеть выбрать что-то оригинальное.',
                type: [AnswerType[1], AnswerType[5]],
            },
        ],
    },
    {
        id: '4',
        text: 'Руководитель собрал всех стажеров на новый проект, распределяет обязанности. Тебе досталась не та роль, на которую ты рассчитывал. Как быть?',
        answers: [
            {
                id: '1',
                text: 'После встречи подойду к руководителю, объясню, как важно для меня участвовать в этом проекте в другой роли. Обратная связь очень важна, особенно на пути к самореализации. ',
                type: [AnswerType[0], AnswerType[2]],
            },
            {
                id: '2',
                text: 'Постараюсь проанализировать, почему мне дали именно эту роль: возможно, я не проявил себя с той стороны, с которой хочу?',
                type: [AnswerType[3]],
            },
            {
                id: '3',
                text: 'Уверен, что руководителю виднее, кто с чем сейчас лучше справится – у нас общий проект, и важно, чтобы общий результат был высоким. Значит, выполню свою задачу безупречно. ',
                type: [AnswerType[1], AnswerType[5]],
            },
            {
                id: '4',
                text: 'Соглашусь со своей ролью, но в процессе работы буду давать полезные советы по нравящейся мне сфере – так руководитель на деле убедится, в чем я хорош.',
                type: [AnswerType[4]]
            },
        ],
    },
    {
        id: '5',
        text: 'У тебя сегодня защита результатов проекта перед старшими коллегами, настрой боевой и уже в офисе за 30 минут до начала ты понимаешь, что в презентации на 50 слайдов «поехали» все оформление и шрифты… Твоя реакция:',
        answers: [
            {
                id: '1',
                text: 'Срочно звоню руководителю, объясняю ситуацию – будем вместе думать, что делать. ',
                type: [AnswerType[3]],
            },
            {
                id: '2',
                text: 'Кричу «Караул!» и собираю всех коллег, кто сейчас готов помочь: делю поровну слайды и говорю, что делать. Если красиво не получится, то хотя бы будет лучше, чем сейчас! ',
                type: [AnswerType[0],AnswerType[4]],
            },
            {
                id: '3',
                text: 'Значит, меняем стратегию: я эту презентацию знаю наизусть. Все, что мне нужно – бумага и маркер, буду рисовать по ходу речи, не зря же я прошел тренинг по навыкам презентации в Bosch! ',
                type: [AnswerType[2]],
            },
            {
                id: '4',
                text: 'Держим лицо! Получаса хватит, чтобы самому установить везде нейтральный однотонный фон и базовый шрифт – минимализм нынче в моде. ',
                type: [AnswerType[1],AnswerType[5]]
            },
        ],
    },
    {
        id: '6',
        text: 'У тебя все получается на работе, руководитель очень доволен и хочет тебе поручить очень ответственное и интересное задание. Ты очень рад, но у тебя было много работы, и ты планировал взять небольшой отпуск. ',
        answers: [
            {
                id: '1',
                text: 'Скажу руководителю, что очень ценю его предложение и с радостью возьмусь за проект, но через неделю – а сейчас нужно восстановить силы. ',
                type: [AnswerType[1]],
            },
            {
                id: '2',
                text: 'Обсужу, возможно ли разделить обязанности по проекту с коллегами, чтобы снять с себя всю нагрузку? Конечно, у тебя будет меньше инициативы, но зато будет возможность чуть расслабиться. ',
                type: [AnswerType[5]],
            },
            {
                id: '3',
                text: ' Отдохну в другой раз! Мне еще такого проекта не поручали, значит, нужно собраться и сделать его. ',
                type: [AnswerType[0],AnswerType[2]],
            },
            {
                id: '4',
                text: 'Соглашусь, если возможно будет продлить сроки проекта, чтобы можно было равномерно распределить работу. ',
                type: [AnswerType[4],AnswerType[3]],
            },
        ],
    },
    {
        id: '7',
        text: 'С тобой в команде коллега, у которой очень здорово получается выполнять рабочие задачи, и тебе хочется научиться так же. Что будешь делать? ',
        answers: [
            {
                id: '1',
                text: 'Напрямую спрошу, где это она так научилась и может ли посоветовать книги/курсы/видео? ',
                type: [AnswerType[0]],
            },
            {
                id: '2',
                text: 'Буду обращаться к ней во время решения задач за советом – так постепенно научусь делать так же. ',
                type: [AnswerType[5]],
            },
            {
                id: '3',
                text: 'Никакой особой хитрости тут нет, все приходит с опытом – буду продолжать усердно работать в своем темпе, и постепенно становиться лучше.',
                type: [AnswerType[1],AnswerType[4]]
            },
            {
                id: '4',
                text: 'Попрошу руководителя поручить мне проект вместе с коллегой – нет лучше способа научиться, чем наблюдать за профи в деле! ',
                type: [AnswerType[2],AnswerType[3]]
            },
        ],
    },
    {
        id: '8',
        text: 'Стажировка заканчивается, ты уже опытный специалист, который готов переходить на следующий уровень. И в твой последний день стажировки в команде появляется новый стажер, которому еще предстоит всему научиться. Какое напутствие ты ему дашь?',
        answers: [
            {
                id: '1',
                text: 'Покажу заранее подготовленный план передачи дел, вспомню и расскажу про свой первый рабочий день, самые классные истории из стажировки и покажу, что бояться нечего. ',
                type: [AnswerType[1],AnswerType[4]]
            },
            {
                id: '2',
                text: 'Не могу упустить такой шанс: обязательно расскажу страшилки про задачи, коллег и руководителей – зато потом стажеру будет, что вспомнить с улыбкой. ',
                type: [AnswerType[3]],
            },
            {
                id: '3',
                text: 'Ничего не расскажу про работу, а просто пожелаю быть собой, верить в себя и идти к цели. Думаю, это все, что нужно. ',
                type: [AnswerType[5]],
            },
            {
                id: '4',
                text: 'Сразу потащу новобранца на кухню во время перерыва – устрою такое же знакомство, как было у меня! ',
                type:  [AnswerType[0],AnswerType[2]]
            },
        ],
    },
    {
        id: '9',
        text: 'Тебе пришло приглашение на «Welcome2Bosch» - это адаптационный тренинг для новых стажеров. Тренинг сегодня с 15.00 до 17.00, а у тебя срочное задание от руководителя проекта, которое нужно отправить до 16.00. Что будешь делать?',
        answers: [
            {
                id: '1',
                text: 'Активизируюсь на полную мощность, а если не буду успевать до тренинга – попрошу руководителя перенести дедлайн. Думаю, что он согласиться с важностью тренинга и разрешит сдать задание чуть позже. ',
                type: [AnswerType[1]],
            },
            {
                id: '2',
                text: 'У меня в приоритете задание! Тренинги, конечно важны, но я и так быстро адаптируюсь, поэтому предупрежу о своем отсутствии и попрошу коллег рассказать, что было.',
                type: [AnswerType[3]],
            },
            {
                id: '3',
                text: 'Думаю, здесь выбор не за мной: предупрежу руководителя проекта и ведущего тренинга и дождусь их решения о том, что приоритетнее. ',
                type: [AnswerType[4], AnswerType[5]]
            },
            {
                id: '4',
                text: 'Я – второй Юлий Цезарь, в универе отлично освоил искусство делать один предмет на паре по второму. Вот и здесь успею оба дела сразу) ',
                type: [AnswerType[0], AnswerType[2]],
            },
        ],
    },
    {
        id: '10',
        text: 'На твоем рабочем столе документы на согласование, и нужно уточнить все детали у коллег из других отделов. Вот только ты впервые видишь все эти аббревиатуры, названия отделов и имена коллег. Как будешь действовать?',
        answers: [
            {
                id: '1',
                text: 'Я был на тренинге, так что я знаю, что нужно делать.',
                type: [AnswerType[2]],
            },
            {
                id: '2',
                text: 'Кажется, все же нужно было сходить на тренинг… Ну да ладно, обращусь к коллеге, которая была готова помочь с Excel, и все узнаю! ',
                type: [AnswerType[3]],
            },
            {
                id: '3',
                text: 'Не вижу особых проблем подойти к руководителю и уточнить, где я могу найти всю нужную информация – у нас в команде отличная коммуникация.',
                type: [AnswerType[1],AnswerType[4]],
            },
            {
                id: '4',
                text: 'Уточню у разных коллег все по кусочку – один вопрос никого не напряжет. ',
                type: [AnswerType[0],AnswerType[5]],
            },

        ],
    },
];