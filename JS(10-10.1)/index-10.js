// ========================== TASK 1 ==========================

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true;
}

// ========================== TASK 2 ==========================

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

// ========================== TASK 3 ==========================

function readNumber() {
    let number;

    do {
        number = prompt("Введите число",);
    } while (!isFinite(number));

    if (number === null || number === '') return null;
    console.log(`Число: ${number}`);
    return number;
}

//   readNumber()

// ========================== TASK 4 ==========================

function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

// ========================== TASK 5 ==========================

function randomInteger(min, max) {
    let randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));

// ========================== TASK 6 ==========================

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));

// ========================== TASK 7 ==========================

function checkSpam(str) {
    let newLowerStr = str.toLowerCase();
    return newLowerStr.includes('viagra') || newLowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// ========================== TASK 8 ==========================

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '...' : str;
}

// ========================== TASK 9 ==========================

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120') === 120);

// ========================== TASK 10 ==========================

function sumInput() {

    let numbers = [];
    while (1) {
        let value = prompt("Введите значение", '');
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// console.log( 'Общая сумма:', sumInput());

// ========================== TASK 11 ==========================

let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
    let maxSum = 0;
    let subArray = 0;

    for (let item of arr) {
        subArray += item;
        maxSum = Math.max(maxSum, subArray);
        if (subArray < 0) subArray = 0;
    }

    return maxSum;
}

// getMaxSubSum(arr)

// ========================== TASK 12 ==========================

// Первый вариант аналогичен второму.

// ========================== TASK 13 ==========================

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// ========================== TASK 14 ==========================
function min(a, b) {
    return console.log(Math.min(a, b));
}

min(2, 5)
min(3, -1)
min(1, 1)

// ========================== TASK 15 ==========================

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//     console.log(`${n} не натуральное число`);
//   } else {
//     console.log(pow(x, n));
// }

// ========================== TASK 16 ==========================

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

// ========================== TASK 17 ==========================

function robinsonCrusoe() {
    let salary = 3333;
    let palmTree = 8000;
    let monthlyCosts = 1750;
    let month = 1;
    if ((salary - monthlyCosts) < palmTree) {
        while ((salary - monthlyCosts) < palmTree) {
            month += 1;
            salary += 3333;
            monthlyCosts += 1750
        }
        console.log(`За ${month} месяцев можно купить пальму.`);
    }
}

robinsonCrusoe()

// ========================== TASK 18 ==========================

function task18() {
    let numberSum = 0;
    for (let i = 0; i < 10; i++) {
        let numQuestion = +prompt('Введите число', '')
        if (numQuestion < 0) {
            numberSum += numQuestion;
        }
    }
    return +numberSum
}

// console.log('Сумма негативных чисел: ', task18());