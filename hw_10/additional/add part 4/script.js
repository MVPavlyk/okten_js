/*- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.*/

let carousel = document.getElementsByClassName('carousel')[0];
let k = 0;
let left = document.getElementById('left');
let right = document.getElementById('right');
left.onclick = function () {
    if (k !== 0) {
        k += 400;
        carousel.style.left = `${k}px`
    } else {
        k = -1200;
        carousel.style.left = `${k}px`
    }
}
right.onclick = function () {
    if (k !== -1200) {
        k -= 400;
        carousel.style.left = `${k}px`
    } else {
        k = 0;
        carousel.style.left = `${k}px`
    }
}


/* Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
 *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан*/


let change = document.getElementById('change');
change.onclick = function () {
    let select = window.getSelection().toString();
    let target = document.getElementById("target");
    target.innerHTML = target.innerText.replace(select,
        `<span class="edit"> ${select} </span>`);
}

