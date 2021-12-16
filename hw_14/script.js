
//  TODO HW
// Зробити свій розпорядок дня. //
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


function wakeUp (isVstav){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(isVstav){
                console.log('Я прокинувся');
                resolve('Йдем далі')
            } else {
                reject('та вставай, скотина');
            }
        }, 200)

    })
}


function teeth (){
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log('Молодець, почистив зуби')
            resolve('Йдем далі');
        }, 100)
    })
}


function toiToi (isGoToTron){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(isGoToTron){
                console.log('Умнічка, воду злий')
                resolve('Йдем далі')
            } else {
                reject('намочиш штани')
            }
        }, 400)
    })
}


function getDressed (isDressed){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(isDressed){
                console.log('Правильно, одягайся тепліше');
                resolve('Йдем далі')
            } else {
                reject('Дурачок чи шо? Голий підеш?')
            }
        }, 100)
    })
}

function eat (noHungry){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(noHungry){
                console.log('Правильно, поїв вдома, а не тої хімії з магазину');
                resolve('Йдем далі')
            }
            else {
                reject('Гастрит заробиш');
            }
        }, 500)
    })
}


function cofee (isDrink){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(isDrink){
                console.log('Кави випив, можна жити');
                resolve('Йдем далі')
            } else {
                reject('Заснеш по дорозі!!')
            }
        }, 300)
    })
}

function goOut (isDoorClothed){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(isDoorClothed){
                console.log('Хату закрив, молодець');
                resolve('Йдем далі')
            } else {
                reject('Вернешся додому - побачиш, що квартиру винесли')
            }
        }, 100)
    })
}

function waitForBus (isBusArrived){
    return new Promise((resolve, reject) => {
        if(isBusArrived){
            console.log('Виїхав')
            resolve();
        } else {
            reject('Лишайся вдома, або вали пішки')
        }
    })
}


function work(isTaskDone, callback) {
    return new Promise((resolve) => {
        let money = 0
        if(isTaskDone){
            console.log('Шось заробив')
            money += 100;
            callback(money)
            resolve();
        } else {
            console.log('І нашо то було вставати, якщо не заробив нічого?..')
            callback(money)
            resolve();
        }

    })
}

function goShopping(cash){
    return new Promise((resolve, reject) => {
        if (cash > 0){
            console.log('Що заробив - то потратив, але ладно')
            resolve()
        } else {
            reject('Фіга тобі, а не черешень!!! Нічого не заробив')
        }
    })
}





async function morning(){
    const wayki = await wakeUp(true);
    const zubki = await teeth();
    const pipi = await toiToi(true);
    const energy = await cofee(true);
    const pojiv = await eat(true);
    const clothes = await getDressed(true);
    const go = await goOut(true);
    const drive = await waitForBus(true);
    const job = await work(false, goShopping);

}

morning();

