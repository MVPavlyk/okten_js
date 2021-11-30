/*- Напишіть код,  який за допомоги document.getElementById або document.
getElementsByClassName або document.getElementsByTagName :*/


/* -- отримує текст з параграфа з id "content" */

let contentText = document.getElementById('content').innerText
// console.log(contentText);

/*=======================================\-----/===================================================*/

/*   -- отримує текст з блоку з id "rules" */

let rulesText = document.getElementById('rules').innerText
// console.log(rulesText);

/*=======================================\-----/===================================================*/

/* -- замініть текст параграфа з id 'content' на будь-який інший */

// document.getElementById('content').innerText = 'тєкст';

/*=======================================\-----/===================================================*/

/* -- замініть текст параграфа з id 'rules' на будь-який інший */

// document.getElementById('rules').innerText = 'тєкст2';

/*=======================================\-----/===================================================*/

/* -- змініть кожному елементу колір фону на червоний */

let all = document.getElementsByTagName('*');
for (const element of all) {
    // element.style.backgroundColor = 'red';
}

/*=======================================\-----/===================================================*/

/*  -- змініть кожному елементу колір тексту на синій */
for (const allElement of all) {
    // allElement.style.color = 'blue';
}

/*=======================================\-----/===================================================*/

/*-- отримати весь список класів елемента з id=rules і вивести їх в console.log */

// console.log(document.getElementById('rules').classList);

/*=======================================\-----/===================================================*/

/*-- поміняти колір тексту у всіх елементів fc_rules на червоний  */

let rules = document.getElementsByClassName('fc_rules');
for (const rule of rules) {
    // rule.style.color = 'red'
}
