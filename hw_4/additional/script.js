/*- створити функцію, яка якщо приймає один аргумент,
просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
*/

function simpleFunction(){
    if (arguments.length === 1){
        console.log(arguments[0]);
    } else if (arguments.length === 2){
        let sum = arguments[0] + arguments[1];
        console.log(sum);
    }
}

//simpleFunction('hello', ' bye')

/*----------------------------------------------------------------------------------------------*/

/* - створити функцію  яка приймає два масиви та скаладає значення елементів
 з однаковими індексами  та повертає новий результуючий масив.

  EXAMPLE:
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9] */


let array1 = [1,2,3,4];
let array2 = [2,3,4,5];
function itemsSum(a, b){
    let sumArray = [];
    for (let i = 0; i < a.length; i++) {
        sumArray[i] = a[i] + b[i];
    }
    return sumArray;
}

//console.log(itemsSum(array1,array2));

/*----------------------------------------------------------------------------------------------*/


/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/
let objArray =[{name: 'Dima', age: 13}, {model: 'Camry'}];

function keySearch(a){
    let keyArray = [];
    let i = 0;
    for (const arrayElement of a) {
        for (const obj in arrayElement) {
            keyArray[i] = obj;
            i++;
        }
    }
    return keyArray;
}

//console.log(keySearch(objArray));

/*----------------------------------------------------------------------------------------------*/

/*  - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/

function valueSearch(a){
    let valueArray = [];
    let i = 0;
    for (const arrayElement of a) {
        for (const obj in arrayElement) {
            valueArray[i] = arrayElement[obj];
            i++;
        }
    }
    return valueArray;
}

//console.log(valueSearch(objArray));