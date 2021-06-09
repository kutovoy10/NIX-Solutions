// ========================== TASK 1 ==========================

const div = document.querySelector('div');
const ul = document.querySelector('ul');
const liSecond = ul.lastElementChild;

// ========================== TASK 2 ==========================

let table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
    let td = table.rows[i].cells[i]
    td.style.backgroundColor = 'red'
}

// ========================== TASK 3 ==========================

const ageTable = document.getElementById('age-table');
const label = tableEl.querySelectorAll('label');
const firstTd = table.rows[0].cells[0]
const formSearch = document.querySelector('[name="search"]')
const firstInput = formSearch.firstElementChild.firstElementChild
const lastInput = formSearch.lastElementChild

// ========================== TASK 4 ==========================

const allLi = document.querySelectorAll('li');

for (const elem of allLi) {
    console.log('li: ', elem);
    const liChildrens = elem.children

    for (const child of liChildrens) {
        console.log('Вложенные li: ', child);
    }

    console.log('Текст li: ', item.innerText);
    console.log('Число потомков: ', item.childElementCount);
}

// ========================== TASK 5 ==========================

function clear(elem) {
    while (elem.firstChild) {
        elem.firstChild.remove();
    }
}

clear(elem);

// ========================== TASK 6 ==========================

const ul = document.querySelector('ul')
let arr = []

const textLi = (arr) => {
    while (true) {
        let textUser = prompt('Введите данные для списка');
        if (textUser == null) break;
        arr.push(textUser);
    }

    return arr.map(elem => `<li>${elem}</li>`).join(' ');
}

let text = textLi(arr);
ul.innerHTML = text;

// ========================== TASK 7 ==========================

let list = document.getElementsByTagName('li');

for (let li of list) {
    let liLength = li.getElementsByTagName('li').length;
    if (liLength) {
        li.firstChild.data += ' [' + liLength + ']';
    }
}

// ========================== TASK 8 ==========================

function getCurrentDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

function createCalendar(elem, year, month) {
    let month = month - 1;
    let day = new Date(year, month);

    let table = `<table>
                    <tr>
                        <th>пн</th>
                        <th>вт</th>
                        <th>ср</th>
                        <th>чт</th>
                        <th>пт</th>
                        <th>сб</th>
                        <th>вс</th>
                    </tr>
                    <tr>`;

    for (let i = 0; i < getCurrentDay(day); i++) {
        table += '<td></td>';
    }

    while (day.getMonth() == month) {
        table += '<td>' + day.getDate() + '</td>';
        if (getCurrentDay(day) % 7 == 6) {
            table += '</tr><tr>';
        }
        day.setDate(day.getDate() + 1);
    }

    if (getCurrentDay(day) != 0) {
        for (let i = getCurrentDay(day); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
}

createCalendar(cal, 2012, 9);

// ========================== TASK 9 ==========================

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');