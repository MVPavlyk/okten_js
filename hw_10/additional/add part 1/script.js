/*- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина*/


/*
document.addEventListener('click',e => {
    let obj = e.target;
    console.log('tag: ' + obj.tagName);
    console.log('class: ' + obj.classList);
    console.log('id: ' + obj.id);
    console.log('height: ' + obj.clientHeight)
    console.log('width: ' + obj.clientWidth)
})*/

/*---------------------------------------------------------------------------------------------------------------------*/

/*-  Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина  */


document.addEventListener('click',e => {
    let prewPopup = document.getElementsByClassName('popup');
    if (prewPopup.length){
        document.body.removeChild(prewPopup[0]);
    }

    let obj = e.target;
    let menu = document.createElement('div')
    menu.classList.add('popup')
    menu.style.left = `${e.offsetX}px`
    menu.style.top = `${e.pageY}px`
    let list = document.createElement('ul')
    let tag = document.createElement('li');
    tag.innerText = obj.tagName
    let clas = document.createElement('li');
    clas.innerText = obj.classList
    if (clas.innerText === ''){
        clas.innerText = 'none class'
    }
    let id = document.createElement('li');
    id.innerText = obj.id
    if (id.innerText === ''){
        id.innerText = 'none id'
    }
    let height = document.createElement('li');
    height.innerText = `height: ${obj.clientHeight}`
    let width = document.createElement('li');
    width.innerText = `width: ${obj.clientWidth}`;

    document.body.appendChild(menu);
    menu.append(list)
    list.append(tag, clas, id, height, width)
})

