/*  Завдання №1  */
/*  Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
 Скласти результат цих чисел в змінній result.  */
let arr = [1, 4, 14, 56, 223, 32, 9, 10, 42, 13];
let result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
document.write(`<h4>Сума елементів числового масиву становить ${result}</h4>`);

/*  Завдання №2  */
let book1 = {
    title: "C++ без валеріанки",
    pages: 666,
    genre: "Фантастика"
}
document.write(`<h5>Книга "${book1.title}" містить ${book1.pages} сторінок і відноситься до жанру ${book1.genre}</h5>`);

/*  Завдання №3  */
let book2 = {
    title: "Діло було в першій ночі",
    pages: 100,
    genre: "Дитячі казочки",
    authors: {
        author1: "Petya",
        author2: "Vasya"
    }
}
document.write(`<h5>Книга "${book2.title}" містить ${book2.pages} сторінок і відноситься до жанру ${book2.genre}<br/> Її автори: ${book2.authors.author1} та ${book2.authors.author2}</h5>`);

/*  Завдання №4  */

let bookArray = [
    book1 = {
        title: "Діло було в 1:14",
        pages: 1200,
        genre: "Хоррор",
        authors: {
            author1: "Степан",
            author2: "Дмитро"
        }
    },

    book2 = {
        title: "Діло було в 1:15",
        pages: 120,
        genre: "Хоррор",
        authors: {
            author1: "Ігнат",
            author2: "Амвросій"
        }
    }
]

console.log(bookArray[0]);
console.log(bookArray[1]);


/*  Завдання №5  */
let height = 23;
let width = 10;
let s = height * width;

document.write(`<h4>Площа прямокутника = ${s} см квадратних</h4>`);

/*  Завдання №6  */
let heightC = 10;
let dc = 4;
const PI = 3.14;
let v = heightC * (dc / 2) ** 2 * PI;
let v1 = heightC * (dc / 2) ** 2;

document.write(`<h4>Об'єм циліндра = ${v} або ${v1}pi метрів кубічних</h4>`);

/*  Завдання №7  */
let n = 3;
let m = 4;
let k = Math.pow(Math.pow(n, 2) + Math.pow(m, 2), 0.5)
document.write(`<h4>Довжина гіпотенузи = ${k} см</h4>`);
