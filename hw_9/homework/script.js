/* Все робити за допомоги js.
- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body. */

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
div.style.backgroundColor = 'red';
div.style.color = 'blue';
div.style.fontSize = '20px';
div.innerText = 'hello'
document.body.append(div);
let div2 = div.cloneNode(true)
document.body.append(div2);

/*-----------------------------------------------------------------------------------------------------------------*/

/*- Є масив:
['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного
елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.*/

let array = ['Main','Products','About us','Contacts'];
for (const string of array) {
    let li = document.createElement('li');
    li.innerText = `${string}`;
    let menu = document.getElementsByClassName('menu')[0]
    menu.append(li);
}

/*-----------------------------------------------------------------------------------------------------------------*/

/* - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли. */

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    let block = document.createElement('div')
    block.style.padding = '10px';
    block.style.width = '180px'
    block.style.border = '1px solid black'
    block.innerText = `${course.title} - ${course.monthDuration}`
    document.body.append(block)
}

/*-----------------------------------------------------------------------------------------------------------------*/

/* - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
 з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли. */

for (const course of coursesAndDurationArray) {
    let item = document.createElement('div');
    item.classList.add('item');
    let title = document.createElement('h1');
    title.classList.add('heading');
    title.innerText = `${course.title}`;
    let duration = document.createElement('p');
    duration.classList.add('description');
    duration.innerText = `${course.monthDuration}`



    document.body.append(item);
    item.append(title);
    item.append(duration);

}