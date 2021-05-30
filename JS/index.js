// ========================== TASK 1 ==========================

let name = 'Danil';
let admin = name;
console.log(admin);

// ========================== TASK 2 ==========================

/*
* Да. Имена констант - переменных, значение которых не изменяется никогда на протяжении работы всего скрипта, обычно пишут капсом.
* */

// ========================== TASK 3 ==========================

// hello 1
// hello name
// hello Ilya

// ========================== TASK 4 ==========================

// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// 7 / 0 = Infinity
// "  -9  " + 5 = "  -9  5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2

// ========================== TASK 5 ==========================

let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

// ========================== TASK 6 ==========================

let a = 2;
let b = 1 + (a *= 2); // a = 4, b = 5

// ========================== TASK 7 ==========================

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false

// ========================== TASK 8 ==========================

// let name = prompt('What is your name?')
// console.log( `Your name is ${name}`);

// ========================== TASK 9 ==========================

// Да. 0 в строке это true.

// ========================== TASK 10 ==========================

// let officialName = prompt('Каково «официальное» название JavaScript?', '');

if (officialName == 'ECMAScript') {
    console.log('Верно!');
} else {
    console.log('Не знаете? ECMAScript!');
}

// ========================== TASK 11 ==========================

// let number = +prompt('Enter a number', '');

if (number > 0) {
    console.log(1)
} else if (number < 0) {
    console.log(-1)
} else if (number == 0) {
    console.log(0)
}

// ========================== TASK 12 ==========================

let result;
result = (a + b < 4) ? 'Мало' : 'Много';

// ========================== TASK 13 ==========================

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' : '';

// ========================== TASK 14 ==========================

// Выведет 2, оператор ИЛИ ищет первый true или последний false

// ========================== TASK 15 ==========================

// сначала 1, потом 2

// ========================== TASK 16 ==========================

// Выведет null, оператор И ищет первый false или последний true.

// ========================== TASK 17 ==========================

// 1, потом undefined. До правого alert выполнение не дойдет.
// Вызов alert не возвращает значения, соответственно будет undefined.

// ========================== TASK 18 ==========================

// выведет 3, сначала выполнится && и вернет последний true,
// затем выполнится || и вернет первый true, - значение 3

// ========================== TASK 19 ==========================

let age;
if (age >= 14 && age <= 90) {
    console.log('yes')
}

// ========================== TASK 20 ==========================

if (!(age >= 14 && age <= 90)) {
    console.log('no')
}

if (age < 14 || age > 90) {
    console.log('no')
}

// ========================== TASK 21 ==========================

// Выведется first, потому что -1 это не falsy значение.
// Также выведется third, потому что 1 это truthy значение.

// ========================== TASK 22 ==========================

// let userName = prompt("Who's there?", '');

if (userName == 'Админ') {
    let password = prompt('Пароль?', '');
    if (password == 'Я главный') {
        console.log('Здравствуйте!');
    } else if (password == '' || password == null) {
        console.log('Отменено');
    } else {
        console.log('Неверный пароль');
    }
} else if (userName == '' || userName == null) {
    console.log('Отменено');
} else {
    console.log("I don't know you");
}

// ========================== TASK 23 ==========================

if (browser == 'Edge') {
    console.log("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}

// ========================== TASK 242 ==========================

// const a = +prompt('a?', '');

switch (a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
}

// ========================== TASK 25 ==========================

function task25 (num) {
    if (num > 0) {
        num++;
    }
    console.log(num)
}

// task25(25)

// ========================== TASK 26 ==========================

function task26(num) {
    if (num > 0) {
        num++;
    } else {
        num -= 2;
    }
    console.log(num)
}

// task26(-3)

// ========================== TASK 27 ==========================

function task27(num) {
    if (num > 0) {
        num++;
    } else if (num < 0) {
        num -= 2;
    } else if (num == 0) {
        num = 10;
    }
    console.log(num)
}

// task27(0)

// ========================== TASK 28 ==========================

function task28(a, b, c) {
    let total = null;
    if (a > 0) {
        total += 1;
    }
    if (b > 0) {
        total += 1;
    }
    if (c > 0) {
        total += 1;
    }
    console.log(total);
}

// task28(1, 2, -10)

// ========================== TASK 29 ==========================

function task29(a, b, c) {
    let totalNumPlus = 0;
    let totalNumMinus = 0;

    if (a > 0) {
        totalNumPlus += 1;
    } else if (a < 0) {
        totalNumMinus += 1;
    }
    if (b > 0) {
        totalNumPlus += 1;
    } else if (b < 0) {
        totalNumMinus += 1;
    }
    if (c > 0) {
        totalNumPlus += 1;
    } else if (c < 0) {
        totalNumMinus += 1;
    }

    console.log('totalNumPlus =', totalPositiveNum);
    console.log('totalNumMinus =', totalNegativeNum);
}

// task29(1, 2, -10)

// ========================== TASK 30 ==========================

function task30(a, b) {
    if (a > b) {
        console.log(`Max number is ${a}`)
    } else {
        console.log(`Max number is ${b}`)
    }
}

// ========================== TASK 31 ==========================

function task31(a, b) {
    if (a > b) {
        console.log(`serial number - 1`)
    } else {
        console.log(`serial number - 2`)
    }
}

// task31(1, 2)


// ========================== TASK 32 ==========================

function task32(a, b) {
    if (a > b) {
        console.log(`Max number is ${a}`)
        console.log(`Min number is ${b}, too`)
    } else {
        console.log(`Max number is ${b}`)
        console.log(`Min number is ${a}, too`)
    }
}

// task32(1, 2)

// ========================== TASK 33 ==========================

function task33(a, b) {
    let x;

    if (a < b) {
        x = a;
        a = b;
        b = x;
    }
    console.log(`A = ${a}, B = ${b}`)
}

// task33('kitten', 'rat')

// ========================== TASK 34 ==========================

function task34(a, b) {
    let sum;

    if (a !== b) {
        sum = a + b;
        a = sum;
        b = sum;
    } else if (a === b) {
        a = 0;
        b = 0;
    }
    console.log(`a = ${a}, b = ${b}`)
}

// task34(1, 3)

// ========================== TASK 35 ==========================

function task35(a, b) {
    if (a != b) {
        if (a > b) {
            a = a;
            b = b;
        } else {
            a = b;
            b = b;
        }
        console.log(`a = ${a}, b = ${b}`)
    } else if (a === b) {
        a = 0;
        b = 0;
        console.log(`a = ${a}, b = ${b}`)
    }
}

// task35(1, 2)

// ========================== TASK 36 ==========================

function task36(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

// task36(11, 2, 1)

// ========================== TASK 37 ==========================

function task37(a, b, c) {
    let middle;

    if ((a < b && a > c) || (a > b && a < c)) {
        middle = a;
    } else if ((b < a && b > c) || (b > a && b < c)) {
        middle = b;
    } else if ((c < a && c > b) || (c > a && c < b)) {
        middle = c;
    }
    console.log(middle);
}

// task37(1, 2, 3)

// ========================== TASK 38 ==========================

function task38(a, b, c) {

    const min = (x, y, z) => {
        if (x < y && x < z) return x;
        if (y < x && y < z) return y;
        return z;
    };

    const max = (x, y, z) => {
        if (x > y && x > z) return x;
        if (y > x && y > z) return y;
        return z;
    };

    const minNum = min(a, b, c);
    const maxNum = max(a, b, c);

    console.log(`Min number: ${minNum}, max number: ${maxNum}`);
}

// task38(1, 2, 3)

// ========================== TASK 39 ==========================

function task39(a, b, c) {

    const mid = (x, y, z) => {
        if ((x - y) * (x - z) <= 0) return x;
        if ((y - x) * (y - z) <= 0) return y;
        return z;
    };

    const max = (x, y, z) => {
        if (x > y && x > z) return x;
        if (y > x && y > z) return y;
        return z;
    };

    const minNum = mid(a, b, c);
    const maxNum = max(a, b, c);

    console.log(`The sum of the two largest numbers is ${minNum + maxNum}`);
}

// task39(1, 2, 3)


// ========================== TASK 40 ==========================

function task40(a, b, c) {

    const number = (x, y, z) => {
        if (x === y) return 2;
        if (x === z) return 1;
        return 0;
    };

    const uniqueNumber = number(a, b, c);

    console.log(`The serial number of a number different from the rest is ${uniqueNumber}`);
}

// task40(1, 2, 1)