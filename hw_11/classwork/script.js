/*є масив -
створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
 до масиву favorites улюблених обраних об'єктів в локальному сховищі.
Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.*/

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];




let wrap = document.getElementsByClassName('wrap')[0];
for (const user of users) {
    let div = document.createElement('div');
    for (const userKey in user) {
        let fiel = document.createElement('p');
        fiel.innerText = `${userKey}: ${user[userKey]}`
        div.appendChild(fiel)
    }
    let button = document.createElement('button');
    button.innerText = 'to fav';
    button.onclick = function () {
        let favourite = JSON.parse(localStorage.getItem('favourite')) || [];
        console.log(favourite);
        favourite.push(user)
        localStorage.setItem('favourite', JSON.stringify(favourite))
        let inFav = document.createElement('div');
        inFav.innerText = 'In favourites'
        inFav.classList.add('inFav');
        div.appendChild(inFav)
        button.style.display = 'none'
    }

    div.appendChild(button)


    wrap.appendChild(div)
}