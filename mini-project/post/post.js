let post = JSON.parse(localStorage.getItem('post'))

let postWrap = document.getElementsByClassName('post__wrap')[0];

let postBlock = document.createElement('div');
postBlock.classList.add('post__block');

let userId = document.createElement('h5')
userId.innerText = `ID користувача: ${post.userId}`

let postId = document.createElement('h5');
postId.innerText = `ID поста: ${post.id}`

let postTitle = document.createElement('h5');
postTitle.innerText = post.title;

let postBody = document.createElement('p');
postBody.innerText = post.body;

postBlock.append(userId, postId, postTitle, postBody)

postWrap.appendChild(postBlock)

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(commentArray => {
        let commentWrap = document.getElementsByClassName('comment__wrap')[0];
        for (const comment of commentArray) {
            let commentBlock = document.createElement('div');
            commentBlock.classList.add('comment__block')

            for (const key in comment) {
                if(key !== 'body'){
                    let field = document.createElement('h6');
                    field.innerText = key + ': ' + comment[key]

                    commentBlock.appendChild(field)
                }
            }

            let body = document.createElement('p');
            body.innerText = comment.body

            commentBlock.appendChild(body)

            commentWrap.appendChild(commentBlock)
        }
    })
