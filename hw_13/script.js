/*- Імітуємо наповнення інтернет магазину товарами :
Створити форму з наступними полями :
- назва товару
- кількість товару
- ціна товару
- картинка товару (посилання з інтернету)
Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який
відобразити на сторінці всі товари.
На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар*/

let form = document.forms.main_f;
let btn = document.getElementById('send');

class Goods {
    constructor(name, count, price, img) {
        this.name = name;
        this.count = count;
        this.price = price;
        this.img = img;
    }
}

btn.onclick = function (e){
    e.preventDefault();
    let box = JSON.parse(localStorage.getItem('box')) || [];
    let goods = new Goods(form.name.value, form.count.value, form.price.value, form.img.value)
    if(form.name.value !== '' && form.count.value !== '' && form.price.value !== '' && form.img.value !== ''){
        box.push(goods)
        localStorage.setItem('box', JSON.stringify(box))
        form.name.value = '';
        form.count.value = '';
        form.price.value = '';
        form.img.value = '';
    } else {
        alert('Помилка! Не всі поля заповнені')
    }
}