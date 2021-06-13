const question = [
    {
        id: 0,
        title: 'Почему вода в море кажется синей?',
        answers: [
            'A: Из-за водорослей',
            'B: Из-за цвета дна',
            'C: Вода отражает небо',
            'D: Из-за растворенной соли',
        ],
        rightAnswer: 2,
        price: 100,
    },
    {
        id: 1,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 200
    },
    {
        id: 2,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 300
    },
    {
        id: 3,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 500
    },
    {
        id: 4,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 1000
    },
    {
        id: 5,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 2000
    },
    {
        id: 6,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 4000
    },
    {
        id: 7,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 8000
    },
    {
        id: 8,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 16000
    },
    {
        id: 9,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 32000
    },
    {
        id: 10,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 64000
    },
    {
        id: 11,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 125000
    },
    {
        id: 12,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 250000
    },
    {
        id: 13,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 500000
    },
    {
        id: 14,
        title: 'Чего не может торнадо?',
        answers: [
            'A: Стоять на месте',
            'B: Поднять в воздух автомобиль',
            'C: Вырвать с корнями дерево',
            'D: Разрушить здание',
        ],
        rightAnswer: 0,
        price: 1000000
    },
];

const view = document.querySelector('.view');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

let i = 0;
let priceSuccess = [];
let callFriendCheck = true;
let fiftyFiftyCheck = true;

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

    callFriendBtn.addEventListener('click', () => {
        if (callFriendCheck == true) {
            callFriend();
        }
    });

    fiftyFiftyBtn.addEventListener('click', () => {
        if (fiftyFiftyCheck == true) {
            fiftyFifty();
        }
    });
}

function showQuestion(i) {
    let out = `
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
                <div class="info__help-friend">Звонок другу</div>
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

    modalContent.innerHTML = `К сожалению, но вы ответили неверно, игра окончена! Через 5 секунд игра начнется заново!`;
    modal.style.display = 'block';
    setTimeout(reloadPage, 5000);
    priceSuccess = [];
    callFriendCheck = true;
}

function sucess() {
    const modalMain = document.querySelector('.modal__main');
    const btnNextQuestionCheck = document.querySelector('.modal__btn-next-question');

    modalContent.innerHTML = `Поздравляю, вы ответили верно! Вы готовы приступить к следующему вопросу? Если готовы, то нажмите кнопку "Далее".`;

    if (btnNextQuestionCheck == null) {
        modalMain.insertAdjacentHTML('beforeend', `<div class="modal__btn-next-question">Далее</div>`);
    }

    modal.style.display = 'block';
    btnNextQuestion();
}

function btnNextQuestion() {
    const btn = document.querySelector('.modal__btn-next-question');

    btn.addEventListener('click', () => {
        i++;
        showMain(i);
        modal.style.display = 'none';
    }, {once: true})
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