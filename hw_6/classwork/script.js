/*- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

let nameValidator = (n) => {
    return n
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ');
}

// console.log(nameValidator(n1));
// console.log(nameValidator(n2));
// console.log(nameValidator(n3));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100. */

let simpleArr = (size, limit) => {
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(Math.round(Math.random() * limit));
    }
    return result;
}

// console.log(simple(20, 100));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - створити (або згенерувати, за допомоги попередньої функції)
масив рандомних цілих числових значень. Відсортувати його за допомоги sort */

let sorted1 = (simpleArr(10, 50)).sort((a, b) => a - b);
// console.log(sorted1);

let sorted2 = (simpleArr(10, 50)).sort((a, b) => b - a);
// console.log(sorted2);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
відфільтрувати  його за допомоги filter, залишивши тільки парні числа*/

let arrFilter = (simpleArr(10, 20)).filter((a) => (a % 2 === 0))
//console.log(arrFilter);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
 */

let toString = (simpleArr(10, 20)).map((element) => element.toString());

// console.log(toString);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
aбо навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3] */
let nums = [11,21,3];

let numSort = (arr, direction) =>{
    if(direction === 'ascending'){
        return arr.sort((a, b) => a - b)
    } else if ((direction === 'descending')){
        return arr.sort((a, b) => b - a)
    } else {
        return 'Шось не то';
    }
}

// console.log(numSort(nums, 'descending'));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців */

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let arraySort = (array) => array.sort((a,b) => a.monthDuration - b.monthDuration)

// console.log(arraySort(coursesAndDurationArray));

let arrayFilter = (array) => array.filter(array => array.monthDuration > 5);

// console.log(arrayFilter(coursesAndDurationArray));

/*- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]*/

let sthString = 'наслаждение';
let cutString = (str, n) =>{
    let resArr = [];
    while (str.length){
        let result = str.slice(0, n);
        resArr.push(result);
        str = str.slice(n);
    }
    return resArr;
}

// console.log(cutString(sthString, 2));

