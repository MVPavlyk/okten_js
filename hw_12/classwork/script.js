/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста*/


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsArray => {
        let wrap = document.getElementsByClassName('wrap')[0];
        for (const post of postsArray) {
            let div = document.createElement('div')
            div.classList.add('post');
            for (const postKey in post) {
                let fiel = document.createElement('h4')
                fiel.innerText = `${postKey} - ${post[postKey]}`
                div.appendChild(fiel)
            }
            let comments = []
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(commentsArray => {
                    for (const comment of commentsArray) {
                        if (post.id === comment.postId) {
                            comments.push(comment)
                        }
                    }
                    let comWrap = document.createElement('div')
                    comWrap.classList.add('com')
                    let i = 1;
                    for (const comment of comments) {
                        let comBlock = document.createElement('div');
                        let num = document.createElement('h3')
                        num.innerText = `Comment № ${i}`
                        let body = document.createElement('h4')
                        body.innerText = comment.body
                        comBlock.append(num, body)
                        comWrap.appendChild(comBlock)
                        i++;
                    }
                    wrap.appendChild(div)
                    div.appendChild(comWrap)
                    let btnWrap = document.createElement('div')
                    btnWrap.classList.add('btn')
                    let button = document.createElement('button')
                    button.innerText = 'Show comments'
                    button.onclick = function (){
                        let showed = document.getElementsByClassName('show')
                        if (showed.length){
                            showed[0].classList.remove('show')
                        }
                        comWrap.classList.add('show')

                        let buttonH = button.offsetTop + 28;
                        comWrap.style.top = `${buttonH}px`
                    }
                    let hide = document.createElement('button')
                    hide.innerText = 'Hide comments'
                    hide.onclick = function (){
                        comWrap.classList.remove('show')
                    }
                    btnWrap.append(button, hide)
                    div.appendChild(btnWrap)
                });
        }
    });
