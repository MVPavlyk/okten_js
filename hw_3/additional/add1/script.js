/*1. Створити пустий масив та :
       a. заповнити його 50 парними числами за допомоги циклу.*/
let arr1 = [];
for (let i = 0; i < 50; i++) {
    arr1[i] = i * 2 + 12; //просто алгоритм генерації парного числа, взятий з неба
    //console.log(arr1[i])

}

/*----------------------------------------------------------------------------------------*/

/*b. заповнити його 50 непарними числами за допомоги циклу.*/

let arr2 = []
for (let i = 0; i < 50; i++) {
    arr2[i] = i * 2 - 5;
    //console.log(arr2[i])

}

/*----------------------------------------------------------------------------------------*/

/*c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)*/

let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3[i] = Math.random();
    //console.log(arr3[i])
}

/*----------------------------------------------------------------------------------------*/

/*d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*/

let arr4 = [];
for (let i = 0; i < 20; i++) {
    function getRandomArbitrary(min = 8, max = 732) {
        return Math.random() * (max - min) + min;
    }

    arr4 [i] = getRandomArbitrary();
    //console.log(arr4[i])
}

/*----------------------------------------------------------------------------------------*/


/* 2. Вивести за допомогою console.log кожен третій елемен*/

for (let i = 0; i < arr4.length; i += 3) {
    //console.log(arr4[i]);
}

/*----------------------------------------------------------------------------------------*/

/* 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/
/*Скористався першим масивом, бо у інших не було парних елементів*/

for (let i = 0; i < arr1.length; i += 3) {
    if (arr1[i] % 2 === 0) {
        //console.log(arr1[i]);
    }
}

/*----------------------------------------------------------------------------------------*/

/*Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив*/

emptyArray = [];
let j = 0;
for (let i = 0; i < arr1.length; i += 3) {
    if (arr1[i] % 2 === 0) {
        //console.log(arr1[i]);
        emptyArray[j] = arr1[i]
        j++
    }
}

/*----------------------------------------------------------------------------------------*/

/*  5. Вивести кожен елемент масиву, сусід справа якого є парним
  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56 */

let numArray = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i + 1] % 2 === 0) {
        //console.log(numArray[i]);
    }
}

/*----------------------------------------------------------------------------------------*/

/*  6. Є масив з числами [100,250,50,168,120,345,188],
Які характеризують вартість окремої покупки. Обрахувати середній чек.*/

let price = [100, 250, 50, 168, 120, 345, 188];
let a = 0;
for (let i = 0; i < price.length; i++) {
    a += price[i];
}
let average = a / price.length;
//console.log(average);

/*----------------------------------------------------------------------------------------*/

/*  7. Створити масив з рандомними значеннями,
 помножити всі його елементи на 5 та перемістити їх в інший масив. */

let rand = [];
let rand2 = [];
let k = 0;
for (let i = 0; i < 10; i++) {
    rand[i] = Math.random();
    rand2[k] = rand[i] * 5;
    k++;
}
//console.log(rand);
//console.log(rand2)

/*----------------------------------------------------------------------------------------*/

/* 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
*/

let mas1 = [11, 543, 'hello', 'not_hello', 'vasya', true, false, 666];
let mas2 = [];
let n = 0;
for (let i = 0; i < mas1.length; i++) {
    if (typeof (mas1[i]) === 'number') {
        mas2[n] = mas1[i];
        n++;
    }
}
//console.log(mas2);

/*----------------------------------------------------------------------------------------*/

/*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив*/

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let emptyPersArray = []
let l = 0;
for(let i = 0; i < usersWithId.length; i++){
    for (let j = 0; j < citiesWithId.length; j++){
        if(usersWithId[i].id === citiesWithId[j].user_id){
            emptyPersArray[l] = Object.assign(usersWithId[i], citiesWithId[j])
            l++;
        }

    }
}

//console.log(emptyPersArray)

/*----------------------------------------------------------------------------------------*/

/*- Взяти масив з 10 чисел або створити його.
Вивести в консоль тільки ті елементи, значення яких є парними.
*/

let sthArray = [1, 5, 654, 867, 312, 345, 123, 55, 88, 12];
for (let obj of sthArray){
    if(obj % 2 === 0){
        //console.log(obj);
    }
}

/*----------------------------------------------------------------------------------------*/

/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
*/

let sthArray2 = [];
let z = 0;
for (let obj of sthArray){
    sthArray2[z] = obj;
    z++;
}

//console.log(sthArray2)

/*----------------------------------------------------------------------------------------*/

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/

let abc = [ 'a', 'b', 'c'];
let word1 = '';
for(let i = 0; i < abc.length; i++){
    word1 += abc[i];
}
//console.log(word1)

/*----------------------------------------------------------------------------------------*/

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.*/
let word2 = '';
let i = 0;
while (i < abc.length){
    word2 += abc[i];
    i++;
}
//console.log(word2)

/*----------------------------------------------------------------------------------------*/

/* - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово. */

let word3 = '';
for(let letter of abc){
    word3 += letter;
}
//console.log(word3)

















