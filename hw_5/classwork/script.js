/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!) */

let minNum = (a, b, c) => {
    let min;
    if (a < b && a < c) {
        min = a;
    } else if (b < a && b < c) {
        min = b;
    } else {
        min = c;
    }
    return min;
}

//console.log(minNum(3, 6, -100));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!) */

let maxNum = (a, b, c) => {
    let max;
    if (a > b && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else {
        max = c;
    }
    return max;
}

//console.log(maxNum(100, 101, 100500));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*- створити функцію яка повертає найбільше число з масиву */

let arrMax = (a) => {
    let max = a[0]
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

let numArray = [1, 5, 6, 2, 3, 16, 333, 43, 100500];

//console.log(arrMax(numArray));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*- створити функцію яка повертає найменьше число з масиву */

let arrMin = (a) => {
    let min = a[0]
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}

//console.log(arrMin(numArray));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*- створити функцію яка приймає масив чисел, сумує значення елементів
 масиву та повертає його. Приклад [1,2,10]->13 */

let arrSum = (a) => {
    let sum = a[0];
    for (let i = 1; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

//console.log(arrSum(numArray));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. */

let aver = (a) => arrSum(a) / a.length;

// console.log(aver(numArray));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
а виводить найбільше (Math використовувати заборонено); */

let simpleMin = (...a) => arrMin(a); /* Трохи зчітерив, якщо потрібно, то пропишу окрему функцію,
 а не використаю свою готову*/

//console.log(simpleMin(1, 3, 5, 6, -100, 5000, -100600));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*- створити функцію яка заповнює масив рандомними числами */

let randomArray = (a) => {
    let arr = [];
    for (let i = 0; i < a; i++) {
        arr[i] = Math.round(Math.random() * 100)
    }
    return arr;
}

//console.log(randomArray(10));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
limit - аргумент, який характеризує кінцеве значення діапазону.*/

let randomLimArray = (length, limit) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * limit)
    }
    return arr;
}

//console.log(randomLimArray(20, 200));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]. */

let reverseArray = (a) =>{
    let reverse = [];
    for (let i = 0, j = a.length -1; i < a.length; i++, j--) {
        reverse[j] = a[i];
    }
    return reverse;
}

/*let numArray = [1, 5, 6, 2, 3, 16, 333, 43, 100500]; - оголошений вище*/

console.log(reverseArray(numArray));