/*- створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)*/

function minimal(a, b, c) {
    let min;
    if (a !== b && b !== c && a !== c) {
        if (a < b && a < c) {
            min = a;
        } else if (b < a && b < c) {
            min = b;
        } else {
            min = c;
        }
    }
    return min;
}

//console.log(minimal(2,3,4))

/*--------------------------------------------------------------------------------------------*/

/*- - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!) */

function maximal(a, b, c) {
    let max;
    if (a !== b && b !== c && a !== c) {
        if (a > b && a > c) {
            max = a;
        } else if (b > a && b > c) {
            max = b;
        } else {
            max = c;
        }
    }
    return max;
}

//console.log(maximal(3,4,5))

/*--------------------------------------------------------------------------------------------*/

/*- створити функцію яка повертає найбільше число з масиву */

let arr = [2, 5, 7, 345, 1000, 556, 123, 45, -100];

function arrMax(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

//console.log(arrMax(arr));

/*--------------------------------------------------------------------------------------------*/

/* - створити функцію яка повертає найменьше число з масиву */

function arrMin(a) {
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}

//console.log(arrMin(arr));

/*--------------------------------------------------------------------------------------------*/

/*- створити функцію яка приймає масив чисел,
 сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
*/

function arrSum(a) {
    let sum = a[0];
    for (let i = 1; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

//console.log(arrSum(arr))

/*--------------------------------------------------------------------------------------------*/

/* - створити функцію яка приймає масив чисел та повертає
середнє арифметичне його значень.
 */

function arrAverage(a) {
    return arrSum(a) / a.length;
}

//console.log(arrAverage(arr));

/*--------------------------------------------------------------------------------------------*/

/* - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а
 виводить найбільше (Math використовувати заборонено);
 */

function numMinMax() {
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
    return min;
}

//console.log(numMinMax(2,4,6,8,90,100,-10));

/*--------------------------------------------------------------------------------------------*/

/*- створити функцію яка заповнює масив рандомними числами */

let emptyArray = [];

function arrRandom(array, length) {
    for (let i = 0; i < length; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    return array;
}

//console.log(arrRandom(emptyArray, 5));

/*--------------------------------------------------------------------------------------------*/

/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
 limit - аргумент, який характеризує кінцеве значення діапазону.
*/

function arrLimRandom(array, length, limit){
    for (let i = 0; i < length; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
    return array;
}

//console.log(arrLimRandom(emptyArray, 10, 50));

/*--------------------------------------------------------------------------------------------*/

/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

function reverse(a){
    let rev = [];
    let j = a.length;
    for (let i = 0; i < a.length; i++) {
        rev [j] =  a[i];
        j--;
    }
    return rev;
}

//console.log(reverse(arr));

