// ========================== TASK 1 ==========================

// Последнее значение будет 1. Оно последнее число перед 0, а когда 0, то while не будет работать.

// ========================== TASK 2 ==========================

function task2(a, b, c) {
    if ((a <= b) && (b <= c)) {
        a *= 2;
        b *= 2;
        c *= 2;
    } else {
        a *= (-1);
        b *= (-1);
        c *= (-1);
    }
    console.log(`a=${a}, b=${b}, c=${c}`);
}

task2(1, 2, 3)

// ========================== TASK 3 ==========================

function task3(a, b, c) {
    if ((a <= b) && (b <= c) || (a >= b) && (b >= c)) {
        a *= 2;
        b *= 2;
        c *= 2;
    } else {
        a *= (-1);
        b *= (-1);
        c *= (-1);
    }
    console.log(`a=${a}, b=${b}, c=${c}`);
}

task3(3, 2, 1)

// ========================== TASK 4 ==========================

function task4(a, b, c) {
    if (Math.abs(a - b) < Math.abs(a - c)) {
        console.log('Point is B, distance is', Math.abs(a - b));
    } else {
        console.log('Point is C, distance is', Math.abs(a - c));
    }
}

task4(1, 5, 2)

// ========================== TASK 5 ==========================

function task5(x, y) {
    if ((x === 0) && (y === 0)) {
        console.log('0');
    } else if (x === 0) {
        console.log('1');
    } else if (y === 0) {
        console.log('2');
    } else {
        console.log(3);
    }
}

task5(1, 0)

// ========================== TASK 6 ==========================

function task6(x, y) {
    if ((x > 0) && (y > 0)) {
        console.log('I координатной четверти');
    } else if ((x < 0) && (y > 0)) {
        console.log('II координатной четверти');
    } else if ((x < 0) && (y < 0)) {
        console.log('III координатной четверти');
    } else if ((x > 0) && (y < 0)) {
        console.log('IV координатной четверти');
    }
}

task6(1, 1)

// ========================== TASK 7 ==========================

function task7(x1, y1, x2, y2, x3, y3) {
    if (x2 == x3) {
        console.log('x4 =', x1);
    } else if (x3 == x1) {
        console.log('x4 =', x2);
    } else {
        console.log('x4 =', x3);
    }
    if (y2 == y3) {
        console.log('x4 =', y1);
    } else if (y3 == y1) {
        console.log('x4 =', y2);
    } else {
        console.log('x4 =', y3);
    }
}

task7(1, 1, 3, 6, 8, 11)

// ========================== TASK 8 ==========================

function task8(year) {
    let currentYear = (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) ? 366 : 365;
    console.log(currentYear);
}

task8(2021)

// ========================== TASK 9 ==========================

function task9(number) {
    if (number === 0) {
        console.log('Нулевое');
    } else {
        if (number > 0) {
            console.log("Положительное");
        } else {
            console.log("Отрицательное");
        }
        if ((number % 2) === 0) {
            console.log("Чётное");
        } else {
            console.log('Нечётное');
        }
    }
    console.log('Число');
}

task9(2021)


// ========================== TASK 10 ==========================

function task10(number) {
    if ((number % 2) == 0) {
        console.log('Четноё');
    } else {
        console.log('Нечётное');
    }
    if (number > 99) {
        console.log('Трёхзначное');
    } else if ((99 >= number) && (number > 9)) {
        console.log('Двухзначное');
    } else if (number <= 9) {
        console.log('Однозначное');
    }
    console.log('Число');
}

task10(333)

// ========================== TASK 11 ==========================

// Первый случай - от 1 до 4. Сначала происходит увеличение, а потом – сравнение, потому что ++ стоит перед переменной.
// Второй случай - от 1 до 5. Когда i = 4, то происходит сравнение while (4 < 5) – верно, после этого сработает i++, увеличив i до 5. И из-за этого значение 5 будет выведено.

// ========================== TASK 12 ==========================

// От 0 до 4 в обоих случаях. Сначала проверяется условие, потом выполняется тело цикла, а потом уже делается прибавление.

// ========================== TASK 13 ==========================

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// ========================== TASK 14 ==========================

let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++
}

// ========================== TASK 15 ==========================

let number;

// do {
//     number = +prompt("Введите число большее 100", 0);
//   } while (number <= 100 && number);

// ========================== TASK 16 ==========================

let n = 10;

primeNumbers: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue primeNumbers
    }

    console.log(i)
}

// ========================== TASK 17 ==========================

// let number1 = +prompt('Enter the first number', '');
// let number2 = +prompt('enter the second number', '');

// console.log(number1);
// console.log(number2);
// let result = ((number1 + number2) / 2);
// console.log(result);

// ========================== TASK 18 ==========================

// let number = +prompt('Введите число', '')
// let squareNumber = number ** 2;

// console.log(squareNumber);

// ========================== TASK 19 ==========================

function task19() {

    let num1 = +prompt('Введите первое число', '');
    let num2 = +prompt('Введите второе число', '');
    let num3 = +prompt('Введите третье число', '');
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let subtraction = max - min;
    console.log('разница - ', subtraction);
}

// task19()

// ========================== TASK 20 ==========================

function task20() {
    let number = +prompt('Введите число', '')
    if (number % 2 == 0) {
        console.log(number, '= чётное');
    } else {
        console.log(number, '= нечётное');
    }
}

// task20()

// ========================== TASK 21 ==========================

function task21(number) {
    if (number > 9) {
        console.log('Содержит две цифры, сумма цифр = ', Math.floor((number / 10) + (number % 10)));
    } else {
        console.log('Содержит одну цифру = ', number);
    }
}

task21(77)

// ========================== TASK 22 ==========================

function task22() {
    let inches = +prompt("Cколько сантиметров перевести в дюймы?", '');
    let resultInches = inches * 2.54;
    alert(resultInches)
    let centimeters = +prompt("Cколько дюймов перевести в сантиметры?", '');
    let resultCentimeters = (centimeters / 2.54).toFixed(2);
    alert(resultCentimeters)

}

// task22()

// ========================== TASK 23 ==========================

function task23() {
    alert('«Кто хочет стать миллионером»')
    let firstQuest = prompt('Какая переменная пишется в JavaScript капсом? \nОтветы: \n let \n var \n const', '')
    switch (firstQuest) {
        case 'const':
            alert('Правильный ответ! Следующий вопрос...')
            let secondQuest = prompt('Что такое const? \nОтветы: \n константа \n функция \n объект', '')
            switch (secondQuest) {
                case('правильного ответа нету'):
                    alert('Правильный ответ! Поздравляю, вы выиграли')
                default:
                    alert('Ваш ответ неправильный! Конец игры!')
            }
        default:
            alert('Ваш ответ неправильный! Конец игры!')
    }
}

// task23()

// ========================== TASK 24 ==========================

function task23(number) {
    let numStr = String(number);
    if ((number % 2) == 0) {
        let sumNumbers = 0;
        for (let i = 0; i < numStr.length; i++) {
            sumNumbers += Number(numStr[i]);
        }
        console.log('Число четноё, cумма =', sumNumbers);
    } else {
        let productNumbers = 1;
        for (let i = 0; i < numStr.length; i++) {
            productNumbers *= Number(numStr[i]);
        }
        console.log('Число нечётное, произведение =', productNumbers);
    }
}

task23(333)

// ========================== TASK 25 ==========================

function task25() {
    let first = +prompt('Длина первой стороны треугольника', '')
    let second = +prompt('Длина второй стороны треугольника', '')
    let third = +prompt('Длина третей стороны треугольника', '')

    if ((first + second > third) && (first + third > second) && (third + second > first)) {
        console.log("Треугольник существует");
    } else {
        console.log('Треугольник не существует');
    }
}

// task25()

// ========================== TASK 26 ==========================

function task26() {
    let x = 4;
    let y = 9;
    let radius = 10;

    let hypotenuse = Math.sqrt(x ** 2 + y ** 2)
    if (hypotenuse <= radius) {
        console.log('Точка принадлежит кругу');
    } else {
        console.log('Точка не принадлежит кругу');
    }
}

task26()

// ========================== TASK 27 ==========================

let user = {};
user.name = "Danil";
user.surname = "Kutovoy";
user.name = "Stephan";
delete user.name;

// ========================== TASK 28 ==========================

// Да, будет работать. Объявление const не может менять только имя самой переменной. Содержимое объекта изменять возможно.

// ========================== TASK 29 ==========================

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log('result is', sum);

// ========================== TASK 30 ==========================

// 'i' никогда не будет = 10. Потому что у нас происходит потеря почности, например, при прибавлении дробей как 0.2.