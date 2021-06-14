const question = [
    {
        id: 0,
        title: 'Какая столица Украины?',
        answers: [
            'A: Киев',
            'B: Харьков',
            'C: Львов',
            'D: Одесса',
        ],
        rightAnswer: 0,
        price: 100,
    },
    {
        id: 1,
        title: 'Какого цвета солнце?',
        answers: [
            'A: Красного',
            'B: Зеленого',
            'C: Синего',
            'D: Желтого',
        ],
        rightAnswer: 3,
        price: 200
    },
    {
        id: 2,
        title: 'С чего состоит колобок?',
        answers: [
            'A: Изюма',
            'B: Воды',
            'C: Теста',
            'D: Радости',
        ],
        rightAnswer: 2,
        price: 300
    },
    {
        id: 3,
        title: 'Национальная валюта Украины?',
        answers: [
            'A: Доллар',
            'B: Евро',
            'C: Гривна',
            'D: Рубль',
        ],
        rightAnswer: 2,
        price: 500
    },
    {
        id: 4,
        title: 'Какая модель телефона самая популярная?',
        answers: [
            'A: Nokia',
            'B: IPhone',
            'C: Motorola',
            'D: HTC',
        ],
        rightAnswer: 1,
        price: 1000,
        save: 1000
    },
    {
        id: 5,
        title: 'Как называется одно из блюд?',
        answers: [
            'A: Каша по-генеральски',
            'B: Картошка по-мундирски',
            'C: Макароны по-флотски',
            'D: Селёдка от-кутюр',
        ],
        rightAnswer: 2,
        price: 2000
    },
    {
        id: 6,
        title: 'Что искал Колумб, а в результате открыл Америку?',
        answers: [
            'A: Голливуд',
            'B: Диснейленд',
            'C: Путь в Индию',
            'D: Кафе с гамбургерами',
        ],
        rightAnswer: 2,
        price: 4000
    },
    {
        id: 7,
        title: 'Что, согласно русской пословице, должен сделать тот, кто сказал «а»?',
        answers: [
            'A: Сказать «б»',
            'B: Нарисовать «д»',
            'C: Оценить «я»',
            'D: Написать «ё»',
        ],
        rightAnswer: 0,
        price: 8000
    },
    {
        id: 8,
        title: 'Какая из перечисленных башен самая низкая?',
        answers: [
            'A: Пизанская',
            'B: Спасская',
            'C: Эйфелева',
            'D: Останкинская',
        ],
        rightAnswer: 0,
        price: 16000
    },
    {
        id: 9,
        title: 'Чему равна сумма углов треугольника?',
        answers: [
            'A: 90 градусов',
            'B: 100 градусов',
            'C: 360 градусов',
            'D: 180 градусов',
        ],
        rightAnswer: 3,
        price: 32000,
        save: 32000
    },
    {
        id: 10,
        title: 'Как называется крепкий спиртной напиток из сока сахарного тростника?',
        answers: [
            'A: Кальвадос',
            'B: Ром',
            'C: Джин',
            'D: Виски',
        ],
        rightAnswer: 1,
        price: 64000
    },
    {
        id: 11,
        title: 'Какого цвета нет на флаге Армении?',
        answers: [
            'A: Красный',
            'B: Белый',
            'C: Синий',
            'D: Оранжевый',
        ],
        rightAnswer: 1,
        price: 125000
    },
    {
        id: 12,
        title: 'В каком океане находится глубочайшая на Земле Марианская впадина?',
        answers: [
            'A: Атланический',
            'B: Индийский',
            'C: Тихий',
            'D: Северный Ледовитый',
        ],
        rightAnswer: 2,
        price: 250000
    },
    {
        id: 13,
        title: 'В каком виде спорта разыгрывают кубок Стэнли?',
        answers: [
            'A: Футбол',
            'B: Теннис',
            'C: Велоспорт',
            'D: Хоккей',
        ],
        rightAnswer: 3,
        price: 500000
    },
    {
        id: 14,
        title: 'Как называется яйцо, сваренное гуще, чем всмятку, но не вкрутую?',
        answers: [
            'A: В сумочку',
            'B: В кулёчек',
            'C: В мешочек',
            'D: В рюкзачок',
        ],
        rightAnswer: 2,
        price: 1000000,
        save: 1000000
    },
];

const view = document.querySelector('.view');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

let i = 0;
let priceSuccess = [];
let callFriendCheck = true;
let fiftyFiftyCheck = true;
let savePriceForEnd = 0;

showStart();

// ========== show ==========

function showStart() {
    let out = `
        <div class="start block"> 
            <div class="start__text">
                Прочтите внимательно, тут написаны правила игры! <br>
                Вам нужно ответить на как можно больше вопросов. Если вы ответили на 2 вопроса, то вы можете забрать 20 000. Если вошли в азарт и хотите играть дальше, то вам тогда нужно ответить на 4 вопроса и забрать наш главный приз 1 000 000. На каждый вопрос у вас есть 60 секунд. Так же вы можете воспользоваться такими подсказками:
                <ul>
                    <li>50 на 50</li>
                    <li>Звонок другу</li>
                    <li>Помощь зала</li>
                </ul>
            </div>
            <div class="start__btn">Начать</div>
        </div>
    `;

    view.innerHTML = out;
}

function showMain(i) {
    let out = ``;

    out += `<div class="main-block">
                <div class="question block">` + showQuestion(i) + `</div>`;
    out += showOtherFunctions(i);
    out += `</div>`;

    view.innerHTML = out;
    focusSum(i);

    const callFriendBtn = document.querySelector('.info__help-friend');
    const fiftyFiftyBtn = document.querySelector('.info__help-fifty-fifty');

    callFriendBtn.addEventListener('click', item => {
        if (callFriendCheck == true) {
            callFriend();
            callFriendBtn.classList.add('used-function')
        } else {
            callFriendBtn.classList.add('used-function')
        }
    });

    fiftyFiftyBtn.addEventListener('click', item => {
        if (fiftyFiftyCheck == true) {
            fiftyFifty();
            fiftyFiftyBtn.classList.add('used-function')
        } else {
            fiftyFiftyBtn.classList.add('used-function')
        }
    });

    if (callFriendCheck == false) {
        callFriendBtn.classList.add('used-function')
    }

    if (fiftyFiftyCheck == false) {
        fiftyFiftyBtn.classList.add('used-function')
    }

    savePrice();
}

function showQuestion(i) {
    let out = `
            <div class="question__header">
                <div class="question__number">Вопрос №` + (i + 1) + `</div>
                <div class="question__bank">Ваш банк: `;

    if (i >= 1) {
        out += question[i - 1].price;
    } else {
        out += `0`;
    }

    out += `</div>
            </div>
            <div class="question__title">` + question[i].title + `</div>
            <div class="question__list" data-question-number="` + i + `">`;

    for (let j in question[i].answers) {
        if (Number(j) == question[i].rightAnswer) {
            out += `<div class="question__item" data-correct-answer="true">` + question[i].answers[j] + `</div>`;
        } else {
            out += `<div class="question__item" data-correct-answer="false">` + question[i].answers[j] + `</div>`;
        }
    }

    out += `</div>`;

    return out;
}

function showOtherFunctions(i) {
    let out = `
        <div class="info block">
            <div class="info__help">
                <div class="info__help-fifty-fifty">50/50</div>
                <div class="info__help-friend">
                    <img src="img/phone.svg" alt="phone">
                </div>
            </div>

            <div class="info__table">
                <div>1 000 000</div>
                <div>500 000</div>
                <div>250 000</div>
                <div>125 000</div>
                <div>64 000</div>
                <div>32 000</div>
                <div>16 000</div>
                <div>8000</div>
                <div>4000</div>
                <div>2000</div>
                <div>1000</div>
                <div>500</div>
                <div>300</div>
                <div>200</div>
                <div>100</div>
            </div>
        </div>
    `;

    return out;
}

// ========== functions ==========

const startBtn = document.querySelector('.start__btn');

startBtn.addEventListener('click', () => {
    showMain(i);
});

// проверка ответа на верность при нажатии
document.addEventListener('click', e => {
    let target = e.target;

    if (target.classList.contains('question__item')) {
        if (target.getAttribute('data-correct-answer') == 'true') {
            target.classList.add('correctly');
            sucess();
        } else {
            target.classList.add('error');
            error();
        }
    }
})

function error() {
    const btnNextQuestion = document.querySelector('.modal__btn-next-question');

    if (btnNextQuestion != null) {
        btnNextQuestion.remove();
    }

    modalContent.innerHTML = `К сожалению, но вы ответили неверно, игра окончена! Ваш выигрыш составляет ` + savePriceForEnd + `. Через 5 секунд игра начнется заново!`;
    modal.style.display = 'block';
    setTimeout(reloadPage, 5000);
    priceSuccess = [];
    callFriendCheck = true;
}

function sucess() {
    const modalMain = document.querySelector('.modal__main');
    const btnNextQuestionCheck = document.querySelector('.modal__btn-next-question');

    if (i < 14) {
        modalContent.innerHTML = `Поздравляю, вы ответили верно! Вы готовы приступить к следующему вопросу? Если готовы, то нажмите кнопку "Далее".`;

        if (btnNextQuestionCheck == null) {
            modalMain.insertAdjacentHTML('beforeend', `<div class="modal__btn-next-question">Далее</div>`);
        }
    } else {
        modalContent.innerHTML = `Поздравляю! Вы выиграли 1 000 000! Это окно закроется через 5 секунд`;

        if (btnNextQuestionCheck != null) {
            btnNextQuestionCheck.remove();
        }

        setTimeout(reloadPage, 5000);
    }

    modal.style.display = 'block';
    btnNextQuestion();
}

function btnNextQuestion() {
    const btn = document.querySelector('.modal__btn-next-question');

    if (btn != null) {
        btn.addEventListener('click', () => {
            let prices = document.querySelectorAll('.info__table div');

            for (let item of prices) {
                if (question[i].save == Number(item.textContent.replace(/\s/g, ''))) {
                    savePriceForEnd = question[i].save;
                }
            }

            i++;
            showMain(i);
            modal.style.display = 'none';
        }, {once: true})
    }
}

function reloadPage() {
    window.location.reload()
}

// выделение суммы правильного ответа и суммы текущего вопроса
function focusSum(i) {
    let prices = document.querySelectorAll('.info__table div');

    for (let item of prices) {
        for (let elem in priceSuccess) {
            if (item.textContent == priceSuccess[elem]) {
                item.classList.add('green')
            }
        }
    }

    for (let item of prices) {
        if (question[i].price == Number(item.textContent.replace(/\s/g, ''))) {
            item.classList.add('price-focus');
            priceSuccess.push(item.textContent);
        }
    }
}

function callFriend() {
    const questions = document.querySelectorAll('.question__item');
    const randomNumber = Math.floor(Math.random() * (3 + 1 - 0));
    const modalContent = document.querySelector('.modal__content');
    const btnNextQuestion = document.querySelector('.modal__btn-next-question');

    if (btnNextQuestion != null) {
        btnNextQuestion.remove();
    }

    callFriendCheck = false;

    modal.style.display = 'block';
    modalContent.innerHTML = `Я считаю, что правильный ответ - <span>` + questions[randomNumber].textContent + `</span><br> Это окно закроется через 5 секунд`;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 5000)
}

function fiftyFifty() {
    const questions = document.querySelectorAll('[data-correct-answer="false"]');

    if (questions.length > 1) {
        const randomNumber = Math.floor(Math.random() * (2 + 1 - 0));

        for (let elem in questions) {
            if (Number(elem) == randomNumber) {
                questions[elem].remove();
            }
        }
        fiftyFifty();
    }

    fiftyFiftyCheck = false;
}

function savePrice() {
    let prices = document.querySelectorAll('.info__table div');

    for (let item of prices) {
        for (let j = 0; j < question.length; j++) {
            if (Number(item.textContent.replace(/\s/g, '')) == question[j].save) {
                item.classList.add('save-zone');
            }
        }
    }
}