/*
Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який : */

/*  a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)  */

let mainHeader = document.getElementById('main_header')
// mainHeader.classList.add('sept2021')

/*------------------------------------------------------------------------------------------------------*/

/* b) робить шириниу елементу ul 400px */

let ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    // ulElement.style.width = '400px'
}

/*------------------------------------------------------------------------------------------------------*/

/* c) робить шириниу всіх елементів з класом linkList шириною 50% */

let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    // linkListElement.style.width = '50%'
}

/*------------------------------------------------------------------------------------------------------*/

/* d) отримує текст який зберігається в елементі з класом listElement2 */

let list2 = document.getElementsByClassName('listElement2');
let listElement2 = list2[0].innerText;
// console.log(listElement2);

/*------------------------------------------------------------------------------------------------------*/

/* e) отримує всі елементи li та змінює ім колір фону на сірий */

let allLi = document.getElementsByTagName('li');
for (const allLiElement of allLi) {
    // allLiElement.style.backgroundColor = 'silver';
}

/*------------------------------------------------------------------------------------------------------*/

/* f) отримує всі елементи 'a' та додає їм клас anchor */

let allA = document.getElementsByTagName('a');
for (const allAElement of allA) {
    // allAElement.classList.add('anchor');
}

/*------------------------------------------------------------------------------------------------------*/

/* g) отримує всі елементи 'a' та у випадку,
якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів */

for (const allAElement of allA) {
    if(allAElement.innerText === 'link3'){
        // allAElement.style.fontSize = '40px'
    }
}

/*------------------------------------------------------------------------------------------------------*/

/* h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a */

for (const allAElement of allA) {
    let text = allAElement.innerText;
    // allAElement.classList.add(`element_${text}`);
}

/*------------------------------------------------------------------------------------------------------*/

/* i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt() */

let subHeader = document.getElementsByClassName('sub-header');
// let color = prompt('choose color of sub-header background');
for (const subHeaderElement of subHeader) {
    // subHeaderElement.style.backgroundColor = color;
}

/*------------------------------------------------------------------------------------------------------*/

/* j) отримує всі елементи 'sub-header'
 та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt() */
for (const subHeaderElement of subHeader) {
    if(subHeaderElement.innerText === 'content 2 segment'){
        // subHeaderElement.style.color = prompt('choose segment color')
    }
}

/*------------------------------------------------------------------------------------------------------*/

/* k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt() */

let cont1 = document.getElementsByClassName('content_1')[0];
// cont1.innerText = prompt('text for content 1')

/*------------------------------------------------------------------------------------------------------*/

/* l) отримати елементи p та змінити їм padding на 20px */

let allP = document.getElementsByTagName('p');
for (let allPElement of allP) {
    // allPElement.style.padding = '20px'
}

/*------------------------------------------------------------------------------------------------------*/

/* m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021) */

let text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    // text2Element.innerText = 'sep-2021'
}

