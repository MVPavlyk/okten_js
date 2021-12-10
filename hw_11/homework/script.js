/*-створити форму з інпутами для name та age.
При відправці форми записати об'єкт в localstorage*/

let form = document.forms.f1;
let button = document.getElementById('send')
class Obj{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

button.onclick = function (e){
    e.preventDefault();
    let obj = new Obj(form.name.value, form.age.value);
    console.log(obj);
    localStorage.setItem('user', JSON.stringify(obj));
    form.name.value = '';
    form.age.value = '';

}


/*-створити форму з інпутами для model,type та volume автівки.
при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.*/

class Car{
    constructor(model, type, volume) {
        this.model = model;
        this.type = type;
        this.volume = volume;
    }
}

let carForm = document.forms.f2;
let carBtn = document.getElementById('car');

let cars = [];

carBtn.onclick = function (e){
    e.preventDefault();
    let auto = new Car(carForm.model.value, carForm.type.value, carForm.volume.value);
    cars.push(auto);
    carForm.model.value = '';
    carForm.type.value = '';
    carForm.volume.value = '';
    localStorage.setItem('cars', JSON.stringify(cars));
}



