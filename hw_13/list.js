let all = JSON.parse(localStorage.getItem('box')) || [];

if (all.length) {
    all = Array.from(new Set(all.map(JSON.stringify))).map(JSON.parse);
}

let wrap = document.getElementsByClassName('wrap')[0];

console.log(all);

for (const allElement of all) {
    let elementBlock = document.createElement('div');
    elementBlock.classList.add('item')

    let nameBlock = document.createElement('div');
    nameBlock.classList.add('fiel__block')
    let name = document.createElement('h4')
    name.innerText = `Назва товару: ${allElement.name}`
    nameBlock.appendChild(name)
    elementBlock.appendChild(nameBlock);

    let countBlock = document.createElement('div');
    countBlock.classList.add('fiel__block')
    let count = document.createElement('h4')
    count.innerText = `Кількість товару: ${allElement.count}`
    countBlock.appendChild(count)
    elementBlock.appendChild(countBlock);

    let priceBlock = document.createElement('div');
    priceBlock.classList.add('fiel__block')
    let price = document.createElement('h4')
    price.innerText = `Кількість товару: ${allElement.price}`
    priceBlock.appendChild(price)
    elementBlock.appendChild(priceBlock);


    let imgBlock = document.createElement('div')
    imgBlock.classList.add('img__block')
    let img = document.createElement('img');
    img.src = allElement.img
    imgBlock.appendChild(img)
    elementBlock.appendChild(imgBlock)
    wrap.appendChild(elementBlock)

    let delBtn = document.createElement('button')
    delBtn.innerText = 'Delete item'
    delBtn.classList.add('deleter')
    delBtn.onclick = function (){
        let items = JSON.parse(localStorage.getItem('box')) || [];
        let nameToRemove = allElement.name;
        items = items.filter((item) => item.name !== nameToRemove);
        localStorage.setItem('box', JSON.stringify(items))
        window.location.reload();
    }

    elementBlock.appendChild(delBtn)
}

let deleteAll = document.getElementById('deleteAll');
if (!all.length){
    deleteAll.style.display = 'none'
}
deleteAll.onclick = function (){
    all = []
    localStorage.setItem('box', JSON.stringify(all))
    window.location.reload();
}