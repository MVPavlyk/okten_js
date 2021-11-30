/*- створити функцію яка обчислює та повертає площу прямокутника висотою */

let squareSpace = (x, y) => x * y;

//console.log(squareSpace(5,4) + ' cм кв.')

/*----------------------------------------------------------------------------------*/

/*- створити функцію яка обчислює та повертає площу кола */

let roundSpace = (r) => r ** 2;

//console.log(roundSpace(3) + ' pi');

/*----------------------------------------------------------------------------------*/

/*- створити функцію яка обчислює та повертає площу циліндру */

let cylinder = (r, h) => {
    let round = roundSpace(r);
    let side = 2 * r * h;
    return 2*round + side + ' pi'
}

//console.log(cylinder(2,4))

/*----------------------------------------------------------------------------------*/

/*- створити функцію яка приймає масив та виводить кожен його елемент */

let arr = [1,4,5,7,18,20,222];

let arrOutput = (a) =>{
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}

//arrOutput(arr);

/*----------------------------------------------------------------------------------*/

/*- створити функцію яка  створює параграф з текстом. Текст задати через аргумент */

let parOutput = (p) => document.write(`<p>${p}</p>`);

//parOutput('Hello world');

/*----------------------------------------------------------------------------------*/

/* - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий */

let liCreator = (a) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write('</ul>');
}

//liCreator('Hello world');

/*----------------------------------------------------------------------------------*/

/* - створити функцію яка  створює ul з трьома елементами li.
Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
який є числовим (тут використовувати цикл) */

let liCreator2 = (a, leng) => {
    document.write('<ul>');
    for (let i = 0; i < leng; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write('</ul>');
}

//liCreator2('Bye world', 6);

/*----------------------------------------------------------------------------------*/

/* - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
 та будує для них список */

let listMaker = (arr) => {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

//listMaker([2,4,true,'asdasd'])

/*----------------------------------------------------------------------------------*/

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
        name: 'igor',
        age: 66
    },
    {
        id: 3,
        name: 'akakiy',
        age: 10
    }

];

let objOutput = (arr) =>{
    document.write('<div class="users">')
    for (const arrElement of arr) {
        document.write('<div class="user__block">')
        for (const arrElementKey in arrElement) {
            document.write(`<p>${arrElementKey}: ${arrElement[arrElementKey]}</p>`)
        }
        document.write('</div>')
    }
    document.write('</div>')
}

//objOutput(users)