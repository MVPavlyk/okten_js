/*
Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при
 клике на кнопку исчезал элемент с id="text".*/

let text = document.getElementById('text');
let textBTN = document.getElementsByClassName('text_none')[0];

textBTN.onclick = function () {
    text.classList.toggle('none');
}

/*----------------------------------------------------------------------------------------------------------------*/


/*- Создайте кнопку, при клике на которую, она будет скрывать сама себя.*/

let selfDeleteBtn = document.createElement('button');
selfDeleteBtn.innerText = 'Click me';
selfDeleteBtn.style.marginTop = '100px'
let selfBlock = document.getElementsByClassName('selfDelete')[0];

selfBlock.append(selfDeleteBtn)

selfDeleteBtn.onclick = function () {
    selfDeleteBtn.style.display = 'none';

}


/*----------------------------------------------------------------------------------------------------------------*/


/* - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше
він ніж 18, та повідомити про це користувача */


let checkAge = document.forms.check;
checkAge.onsubmit = function (e) {
    e.preventDefault();
    let age = this.age.value;
    let message = document.createElement('h4');
    message.style.marginTop = '20px';
    let checkBlock = document.getElementsByClassName('age__checker')[0];
    checkBlock.append(message)
    if (age < 0){
        message.innerText = 'Перевірте введені дані'
        message.style.color = 'red';
    } else if (age < 18){
        message.innerText = 'Е ні, друже, замаленький ти, йди дивися YouTube Kids'
        message.style.color = 'red';
    } else {
        message.innerText = 'Ласкаво просимо'
    }
}


/*----------------------------------------------------------------------------------------------------------------*/


/*- Создайте меню, которое раскрывается/сворачивается при клике */

let menuGoOut = document.getElementsByClassName('menu')[0];
let goOutBtn = document.getElementsByClassName('burger')[0];

goOutBtn.onclick = function (){
    menuGoOut.classList.toggle('go')
}

/*----------------------------------------------------------------------------------------------------------------*/


/*- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
Вывести список комментариев в документ, каждый в своем блоке.
 Добавьте каждому комментарию по кнопке для сворачивания его body.*/

let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'ipsum', body:'asdssfg sfsdf adasdsdd'},
    {title : 'dolor', body:'абвгдеєжзи'},
    {title : 'emet', body:'comment must be here'}
]

for (const commentBlock of comments) {
    let wrap = document.getElementsByClassName('comment__wrap')[0];
    let comment = document.createElement('div');
    comment.classList.add('comment__block');
    let title = document.createElement('h4');
    title.innerText = commentBlock.title;
    let body = document.createElement('p');
    body.innerText = commentBlock.body;
    let btn = document.createElement('button');
    btn.innerText = 'Delete body'
    btn.onclick = function () {
        body.classList.toggle('none')
    }


    wrap.append(comment)
    comment.append(title)
    comment.append(body)
    comment.append(btn)
}


