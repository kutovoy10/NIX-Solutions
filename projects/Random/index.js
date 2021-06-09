const btn = document.querySelector('.random__btn');
const result = document.querySelector('.random__result');

btn.addEventListener('click', () => {
    let quantity = document.querySelector('.random__quantity').value;
    let min = document.querySelector('.random__min').value;
    let max = document.querySelector('.random__max').value;

    if (min != '' && max != '' && +min < +max && +quantity > 0) {
        generateNumber(+quantity, +min, +max);
    } else if (min == '' || max == '') {
        alert('Введите все числа!')
    } else if (+min > +max) {
        alert('Минимальное число не может быть больше/равно максимальному!')
    }
})

function generateNumber(quantity, min, max) {
    let listRandom = [];
    let out = ``;

    for (let i = 0; i < quantity; i++) {
        listRandom.push(Math.floor(min + Math.random() * (max + 1 - min)));
    }

    for (let j in listRandom) {
        out += listRandom[j] + `, `;
    }

    result.innerHTML = out;
    result.style.display = 'block';
}