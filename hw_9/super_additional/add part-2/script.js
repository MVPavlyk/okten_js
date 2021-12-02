/*- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують
тему контенту яка вказана в параграфі. створити скріпт, котрий зчитує всі заголовки, та робить в блоці з
 id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.*/

let h2 = document.getElementsByTagName('h2');
let ul = document.createElement('ul');
for (const h2Element of h2) {
    let li = document.createElement('li')
    li.innerText = h2Element.innerText;
    ul.append(li)
}

let content = document.getElementById('content')
content.append(ul)