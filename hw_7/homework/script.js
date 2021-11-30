/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, userName, surname, email, phone) {
    this.id = id;
    this.userName = userName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(new User(1, 'vasya', 'pupkin', 'example@gmail.com', 105));
users.push(new User(2, 'petya', 'pupkin', 'example2@gmail.com', 101));
users.push(new User(3, 'ivan', 'dddsda', 'examplfffe@gmail.com', 105500));
users.push(new User(4, 'gnat', 'ffff', 'examplfffe@gmail.com', 105500));
users.push(new User(8, 'hjkjhk', 'nm,nmbbv', 'exampleeggggeee@gmail.com', 66643));
users.push(new User(5, 'asdasd', 'qwerty', 'exampleeeee@gmail.com', 1504));
users.push(new User(6, 'dsdsf', 'hgjghj', 'exagee@gmail.com', 15044));
users.push(new User(7, 'gdfgfgh', 'dfgdfj', 'exeeee@gmail.com', 666));

// console.log(users)

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
 залишивши тільки об'єкти з парними id (filter)*/

let filter = users.filter(User => User.id % 2 === 0);
// console.log(filter)

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort) */

let sort = users.sort((a, b) => a.id - b.id)
// console.log(sort);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client */

class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

clients.push(new Client(1,'dmytro', 'voitkiv', 'example@gmail.com', 98766666, ['watch', 'earphones']));
clients.push(new Client(3,'gfhgh', 'aasss', 'example@gfhgfgmail.com', 98700, ['watch', 'earphones', 'laptop']));
clients.push(new Client(2,'sdfsd', 'dssssa', 'hhfghgfh@gmail.com', 987000, ['watch']));
clients.push(new Client(6,'gjhhgj', 'hhhhgf', 'hhhhh@gmail.com', 159, ['watch', 'earphones', 'mouse', 'lamp']));
clients.push(new Client(4,'jgjhghj', 'lorem', 'hhhh@gmail.com', 98666, []));

// console.log(clients);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* - Взяти масив (Client [] з попереднього завдання).Відсортувати його
по кількості товарів в полі order по зростанню. (sort) */

// console.log(clients.sort((a, b) => a.order.length - b.order.length));