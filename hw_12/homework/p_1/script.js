/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
 Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts
*/


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postArray => {
        console.log(postArray);
        let wrap = document.getElementsByClassName('wrap')[0];
        for (const post of postArray) {
            let div = document.createElement('div')
            div.classList.add('post');
            for (const postKey in post) {
                let fiel = document.createElement('h4')
                fiel.innerText = `${postKey} - ${post[postKey]}`
                div.appendChild(fiel)
            }
            wrap.appendChild(div)
        }
    });
