/*.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments*/



fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(commentsArray => {
        console.log(commentsArray);
        let wrap = document.getElementsByClassName('wrap')[0];
        for (const comment of commentsArray) {
            let div = document.createElement('div')
            div.classList.add('post');
            for (const commentKey in comment) {
                let fiel = document.createElement('h4')
                fiel.innerText = `${commentKey} - ${comment[commentKey]}`
                div.appendChild(fiel)
            }
            wrap.appendChild(div)
        }
    });