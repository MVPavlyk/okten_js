/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function Car(model, brand, year, topSpeed, engine,) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.topSpeed = topSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log((`Їдемо зі швидкістю ${this.topSpeed} на годину`));
    }
    this.information = function () {
        console.log(`модель = ${this.model}`)
        console.log(`марка = ${this.brand}`)
        console.log(`рік випуску = ${this.year}`)
        console.log(`максимальна швидкість = ${this.topSpeed}`)
        console.log(`об\'єм двигуна = ${this.engine}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.topSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.adDriver = function (name, surname, age) {
        this.driverName = name;
        this.driverSurname = surname;
        this.driverAge = age;
    }

}

let car1 = new Car('911', 'porsche', 2021, 10050, 4, 6);
// console.log(car1);

// car1.drive();
// car1.information();
// car1.increaseMaxSpeed(10);
// car1.changeYear(2015);
// car1.adDriver('vasya', 'pypkin', '20')

// console.log(car1);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
 максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

class Cars {
    constructor(model, brand, year, topSpeed, engine) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.topSpeed = topSpeed;
        this.engine = engine;
    }

    drive() {
        console.log((`Їдемо зі швидкістю ${this.topSpeed} на годину`));
    };

    information() {
        console.log(`модель = ${this.model}`)
        console.log(`марка = ${this.brand}`)
        console.log(`рік випуску = ${this.year}`)
        console.log(`максимальна швидкість = ${this.topSpeed}`)
        console.log(`об\'єм двигуна = ${this.engine}`)
    };

    increaseMaxSpeed(newSpeed) {
        this.topSpeed = newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    adDriver(name, surname, age) {
        this.driverName = name;
        this.driverSurname = surname;
        this.driverAge = age;
    }
}

let car2 = new Cars('w223', 'mb', 2021, 250, 4.4)
// console.log(car2);

// car2.drive();
// car2.information();
// car2.increaseMaxSpeed(211);
// car2.changeYear(2000);
// car2.adDriver('gnat', 'ivanov', '25')

// console.log(car2);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку */

class Sindirella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let popi = [];
popi.push(new Sindirella('Katya', 18, 45))
popi.push(new Sindirella('Tanya', 20, 42))
popi.push(new Sindirella('Katya', 19, 42))
popi.push(new Sindirella('Nastya', 25, 40))
popi.push(new Sindirella('Galyna', 45, 41))
popi.push(new Sindirella('Nadiya', 19, 37))

// console.log(popi);

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.sizeFinded = size;
    }
}

let prince = new Prince('vasya', '25', 37);

let bootFind = (sinArray, prince) => {
    for (let i = 0; i < sinArray.length; i++) {
        if (sinArray[i].size === prince.sizeFinded) {
            return sinArray[i].name;
        }
    }
}

// console.log(bootFind(popi, prince));

let popiFind = (array, prince) => {
    let result = array.find(({ size }) => size === prince.sizeFinded)
    console.log(result.name)
}

// popiFind(popi, prince)