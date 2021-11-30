/* - Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'*/

let str0 = 'hello world';
let str1 = 'lorem ipsum';
let str2 = 'javascript is cool';

// console.log(str0.length);
// console.log(str1.length);
// console.log(str2.length);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool' */

let str0Up = str0.toUpperCase();
// console.log(str0Up);

let str1Up = str1.toUpperCase();
// console.log(str1Up);

let str2Up = str2.toUpperCase();
// console.log(str2Up);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

let str0Low = str0Up.toLowerCase()
// console.log(str0Low);

let str1Low = str1Up.toLowerCase()
// console.log(str1Low);

let str2Low = str2Up.toLowerCase()
// console.log(str2Low);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - Є "брудна" стрінга let str = ' dirty string   ' .
Почистити її від зайвих пробілів. */

let dirtyStr = ' dirty string   ';

let trim = dirtyStr.trim();

//console.log(trim);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
    let arr = stringToarray(str);
    document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/

let str = 'Каждый охотник желает знать';

let stringToArray = (str) =>  str.split(' ');

//console.log(stringToArray(str));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/

let delete_characters = (str, length) => str.slice(0, length);

// console.log(delete_characters(str, 7));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
    При цьому всі символи рядка необхідно перевести у верхній регістр.
   let str = "HTML JavaScript PHP";
   document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/

let strXXX = "HTML JavaScript PHP";

let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();

// console.log(insert_dash(strXXX));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
першого символу рядка з нижнього регістру у верхній.*/

let simpleString = 'string'

let firstUp = (str) => str[0].toUpperCase() + str.slice(1);

//console.log(firstUp(simpleString));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- Напишіть функцію capitalize(str), яка повертає рядок,
 у якому кожне слово починається з великої літери.*/

let letter = 'діло було в сорок першому році'

let capitalize = (str) =>{
    let arr = str.split(' ');
    let upperArray = [];
    for (let arrElement of arr) {
        arrElement = arrElement[0].toUpperCase() + arrElement.slice(1);
        upperArray.push(arrElement)
    }
    console.log(upperArray.toString().replaceAll(',', ' '));
}

//capitalize(letter);








