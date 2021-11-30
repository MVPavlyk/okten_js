/* - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б */
function rectArea(a, b) {
    return a * b;
}

//console.log(rectArea(10, 5) + ' см. квадратних');

/*----------------------------------------------------------------------------------------------*/

/*- створити функцію яка обчислює та повертає площу кола з радіусом r */
const PI = 3.14;

function roundArea(r) {
    return r ** 2 * PI;
}

//console.log(roundArea(5));

/*----------------------------------------------------------------------------------------------*/

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r */

function cylinderA(h, r) {
    let round = roundArea(r);
    let roundLength = r * 2 * PI;
    let sideArea = roundLength * h;
    return round * 2 + sideArea;
}

//console.log(cylinderA(4,2));

/*----------------------------------------------------------------------------------------------*/

/*- створити функцію яка приймає масив та виводить кожен його елемент */

let array = [1,4,5,6,8,9,10,22];
function output(a){
    for (let i = 0; i < a.length; i++) {
         console.log(a[i]);
    }
}

//output(array);

/*----------------------------------------------------------------------------------------------*/

/* - створити функцію яка створює параграф з текстом. Текст задати через аргумент */

function paragraph(p){
    document.write(`<p>${p}</p>`);
}
//paragraph("дай боже здоров'я");

/*----------------------------------------------------------------------------------------------*/

/* - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий */

function simpleLiCreator(arg){
    document.write('<ul>')
    for (let i = 1; i <= 3; i++) {
        document.write(`<li>${arg}</li>`)
    }
    document.write('</ul>')
}

//simpleLiCreator('hello');

/*----------------------------------------------------------------------------------------------*/

/* - створити функцію яка створює ul з трьома елементами li.
Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
 який є числовим (тут використовувати цикл)
 */

function countLiCreator(num, arg){
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        document.write(`<li>${arg}</li>`);
    }
    document.write('</ul>');
}

//countLiCreator(4, "bye")

/*----------------------------------------------------------------------------------------------*/

/* - створити функцію яка приймає масив примітивних
елементів (числа,стрінги,булеві), та будує для них список */

let simpleArray = [1,3,5,'asdfds', true, 13245, 'petya'];

function arrayListCreator(array){
    document.write('<ul>');
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write('</ul>');
}

//arrayListCreator(simpleArray);

/*----------------------------------------------------------------------------------------------*/

/* - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
 та виводить їх в документ. Для кожного об'єкту окремий блок. */

let users = [
    {
        id: 1,
        name: 'vasya',
        age: 45
    },
    {
        id: 2,
        name: 'stepan',
        age: 66
    },
    {
        id: 3,
        name: 'petro',
        age: 10
    }

];

function userOutput(array){
    document.write('<div class="users">');
    for (let obj of array) {
        document.write('<div class="user__block">');
        for (const objElement in obj) {
            document.write(`<h3>${objElement}: ${obj[objElement]}</h3>`);
        }
        document.write('</div>');
    }
    document.write('</div>');
}

//userOutput(users);

