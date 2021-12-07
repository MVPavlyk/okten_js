/******(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
 * Функция создает в боди 2 кнопки (назад/вперед)
 при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
 вы переходите к следующему дочернему элементу (лежащему на одном уровне)
 НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти
 внутрь элемента и  выводит первого ребенка. и тд.
 Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
 лежащему с ним на одном уровне*/

let down = document.getElementById('down')
let up = document.getElementById('up')


let elements = [];

function goTo (object){
    let target = object.children;
    for (let i = 0; i < target.length; i++) {
        if (!target[i].classList.contains('buttons')){
            elements.push(target[i])
            goTo(target[i]);
        }
    }
}

let i = 0;

goTo(document.body);
let empty = document.getElementsByClassName('target')

down.onclick = function (){
    if (empty.length) {
        elements[i].classList.remove('target');
    }
    if (i >= 0 && i < elements.length-2){
        i++
    } else {
        i = 1;
    }
    elements[i].classList.add('target');
}

up.onclick = function () {
    if (empty.length) {
        elements[i].classList.remove('target');
    }
    if (i >= 1){
        i--
    } else {
        i = elements.length-2;
    }
    elements[i].classList.add('target');
}


