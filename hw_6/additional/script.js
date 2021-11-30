/*
- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]*/

/*Реалізовано в classwork*/

/* - Створити функцію-валідатор для адрес електронної пошти.
Перевірка повинна включати в себе :данні до знака равлика(@),
наявність равлика, крапку яка знаходиться не меньше ніж на
2 символ далі після равлика, функція не чутлива до регістру
(some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com */


let validator = (str) => {
    let isEd = str.includes('@') && str.indexOf('@') > 0;
    if (isEd === true) {
        return str.slice(str.indexOf('@') + 1).indexOf('.') > 1;
    } else {
        return false;
    }
}

// console.log(validator('someemail@gmail.com'));
// console.log(validator('someeMAIL@gmail.com'));
// console.log(validator('someeMAIL@i.ua'));
// console.log(validator('some.email@gmail.com'));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- є масив

відсортувати його в спадаючому порядку за кількістю елементів в полі modules*/

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let arraySort = (array) => array.sort((a,b) => b.modules.length - a.modules.length);

// console.log(arraySort(coursesArray));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*
- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5*/

let count = (str, symbol) => str.split(symbol).length - 1;

// console.log(count('Астрономия это наука о небесных объектах', 'о'));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/* - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру' */

let cutString = (str, n) =>{
    let array = str.split(' ');
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    }
    return newArray.toString().replaceAll(',', ' ');
}

// console.log(cutString('Сила тяжести приложена к центру масс тела', 5));