/*- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
} */

class Constructor {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, phrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: phrase,
            bs: bs
        };
    }
}

let person = new Constructor(1, 'vasyl', 'vasya229', 'naggibator228@gmail.com',
    'бандери', 'sda', 'kalush', 123, 66.66, 67.77, 380999, 'github.com',
    'softserve', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(person);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*-  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
 -назва тегу ()
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
 інформацію брати з htmlbook.ru

 Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select
 Приклад результуючого об'єкту
   {
        titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {/*some props and values*/

/*/
 */

class tagConstructor {
    constructor(name, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
        this.name = name;
        this.action = action;
        this.attr = [
            {
                titleOfAttr: titleOfAttr1,
                actionOfAttr: actionOfAttr1
            },
            {
                titleOfAttr: titleOfAttr2,
                actionOfAttr: actionOfAttr2
            }
        ];
    }
}

let a = new tagConstructor('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок'
    , 'accesskey', 'Активация ссылки с помощью комбинации клавиш.'
    , 'coords', 'Устанавливает координаты активной области');
// console.log(a);

let div = new tagConstructor('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого'
, 'align', 'Задает выравнивание содержимого тега <div>'
    , 'title', 'Добавляет всплывающую подсказку к содержимому.');
// console.log(div);

let h1 = new tagConstructor('h1', 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня'
    , 'align', 'Определяет выравнивание заголовка.'
,'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.');
// console.log(h1);

let span = new tagConstructor('span', 'Тег <span> предназначен для определения строчных элементов документа.'
   , 'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
, 'contenteditable', 'Сообщает, что элемент доступен для редактирования пользователем.');
// console.log(span);