let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


/* - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив. */

let address = []

for (const user of users) {
    address.push(user.address)
}

// console.log(address);

/*---------------------------------------------------------------------------------------------------------------------------*/

/*- За допомоги циклу проітерувати  масив users,
 записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.*/

for (const user of users) {

    let wrap = document.getElementsByClassName('user__wrap')[0];
    let userBlock = document.createElement('div');
    userBlock.classList.add('user__block');
    let name = document.createElement('h3');
    name.innerText = user.name;
    let age = document.createElement('h3');
    age.innerText = user.age;
    let status = document.createElement('h3');
    status.innerText = user.status;
    let address = document.createElement('ul');
    for (const addressValue in user.address) {
        let li = document.createElement('li')
        li.innerText = `${addressValue} - ${user.address[addressValue]}`
        address.append(li)
    }


    wrap.append(userBlock);
    userBlock.append(name);
    userBlock.append(age)
    userBlock.append(status)
    userBlock.append(address)
}


/*---------------------------------------------------------------------------------------------------------------------------*/

/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
*/

for (const user of users) {
    let wrap2 = document.getElementsByClassName('user__wrap')[1];
    let userBlock = document.createElement('div');
    userBlock.classList.add('user__block');
    let name = document.createElement('div');
    name.innerText = user.name;
    let age = document.createElement('div');
    age.innerText = user.age;
    let status = document.createElement('div');
    status.innerText = user.status;
    let address = document.createElement('div')
    let addressList = document.createElement('ul');
    for (const addressValue in user.address) {
        let li = document.createElement('li')
        li.innerText = `${addressValue} - ${user.address[addressValue]}`
        address.append(li)
    }
    address.append(addressList)


    wrap2.append(userBlock);
    userBlock.append(name);
    userBlock.append(age);
    userBlock.append(status);
    userBlock.append(address);
}


