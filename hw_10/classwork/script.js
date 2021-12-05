/*- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
 та виводиться на консоль інформація з цих 2х форм.
Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.*/

let f1 = document.forms.f1;
let f2 = document.forms.f2;

let parentBtn = document.getElementById('parents');
parentBtn.onclick = function (){
    let fName = f1.fname.value;
    let fSurname = f1.fsurname.value;
    console.log('Батько: ' + fName + ' ' + fSurname)
    let mName = f2.mname.value;
    let mSurname = f2.msurname.value;
    console.log('Мати: ' + mName + ' ' + mSurname)
}


/*----------------------------------------------------------------------------------------------------------------*/

/*- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/

let tableMaker = document.forms.tableMaker;
tableMaker.onsubmit = function (e){
    e.preventDefault();
    let row = this.rownum.value;
    let column = this.column.value;
    let content = this.content.value;
    let table = document.createElement('table')
    document.body.append(table)
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < column; j++) {
            let td = document.createElement('td')
            td.innerText = content;
            tr.append(td)
        }
        table.append(tr)
    }
}

/*----------------------------------------------------------------------------------------------------------------*/


/*
- Сворити масив не цензцрних слів.
Сворити інпут текстового типу.
Якщо людина вводить слово і воно міститься в масиві не цензурних слів
кинути алерт з попередженням.
Перевірку робити при натисканні на кнопку */




let badWords = [
    'дурня',
    'чорт',
    'кака',
    'бека',
    'дурак',
    'пінцет',
    'сумка',
    'сукенка',
    'дядь',
    'йух',
    'придурок'
]

let wordCheck = document.forms.badWord;
wordCheck.onsubmit = function (e){
    e.preventDefault();
    let word = this.matiuk.value;
    if (badWords.includes(word)){
        alert('ФУ, не матюкайся!!')
    }
}

/*----------------------------------------------------------------------------------------------------------------*/


/*- Сворити масив не цензцрних слів.
Сворити інпут текстового типу.
Потрібно перевіряти чи не містить ціле речення в собі погані слова.
Кинути алерт з попередженням у випадку якщо містить.
Перевірку робити при натисканні на кнопку*/


let wordCheck2 = document.forms.badWord2;
wordCheck2.onsubmit = function (e){
    e.preventDefault();
    let word = this.matiuk.value;
    let wordArray = word.split(' ');
    for (const wordArrayElement of wordArray) {
        if (badWords.includes(wordArrayElement)){
            alert('ФУ, не матюкайся!!')
        }
    }

}
