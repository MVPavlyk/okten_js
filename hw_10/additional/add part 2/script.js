/*---------------------------------------------------------------------------------------------------------------------*/

/*
-- взять массив пользователей
- Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
2й - оставляет старше 29 лет включительно
3й - оставляет тех у кого город киев
Данные выводить в документ
*/


let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let filter = document.forms.f1;
filter.onsubmit = function (e){
    e.preventDefault();
    let wr = document.getElementsByClassName('wrap')
    if(wr.length){
        document.body.removeChild(wr[0])
    }

   /* let city;
    if (this.city.checked === true) {
        city = true;
    } else city = city = 'Kyiv';
*/
    let statusFilter = () =>{
        let result;
        if (filter.status.checked === true){
            result = usersWithAddress.filter(value => value.status === false)
        } else{
            result = usersWithAddress;
        }
        return result;
    }

    let ageFilter = () =>{
        let result;
        if (filter.age.checked === true){
            result = usersWithAddress.filter(value => value.age >= 29)
        } else{
            result = usersWithAddress;
        }
        return result;
    }

    let cityFilter = () =>{
        let result;
        if (filter.city.checked === true){
            result = usersWithAddress.filter(value => value.address.city === 'Kyiv')
        } else{
            result = usersWithAddress;
        }
        return result;
    }


    let finishFilter = usersWithAddress.filter(obj => statusFilter().includes(obj) && ageFilter().includes(obj) && cityFilter().includes(obj));
    let wrap = document.createElement('div');
    wrap.classList.add('wrap')
    for (const element of finishFilter) {
        let block = document.createElement('div')
        for (const elementField in element) {
            if (elementField !== 'address'){
                let h = document.createElement('h4');
                h.innerText = `${elementField}: ${element[elementField]}`
                block.appendChild(h)
            }
        }
    for (const field in element.address) {
            let h = document.createElement('h6');
            h.innerText = `${field}: ${element.address[field]}`
            block.appendChild(h)
        }
        wrap.append(block)
    }
    document.body.appendChild(wrap)
}