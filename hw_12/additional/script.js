/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/users
кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
            for (const user of usersArray) {
                let wrap = document.createElement('div');
                wrap.classList.add('user__wrap')
                let userBlock = document.createElement('div');
                userBlock.classList.add('user')
                let id = document.createElement('h4');
                id.innerText = `ID - ${user.id}`
                let name = document.createElement('h3');
                name.innerText = user.name
                let username = document.createElement('h3');
                username.innerText = user.username
                let email = document.createElement('h3');
                email.innerText = user.email
                let address = document.createElement('div')
                address.classList.add('address')

                for (const adr in user.address) {
                    if (adr !== 'geo') {
                        let field = document.createElement('h4');
                        field.innerText = user.address[adr];
                        address.append(field)
                    }
                }
                let geo = document.createElement('div');
                address.append(geo)
                geo.classList.add('geo')
                let geoTitle = document.createElement('h3')
                geoTitle.innerText = 'Geolocation'
                geo.append(geoTitle);
                for (const geoTitleKey in user.address.geo) {
                    let element = document.createElement('h4')
                    element.innerText = `${geoTitleKey}: ${user.address.geo[geoTitleKey]}`
                    geo.append(element)
                }
                let phone = document.createElement('h4')
                phone.innerText = user.phone;
                let website = document.createElement('h4')
                website.innerText = user.website;
                let company = document.createElement('div')
                for (const companyKey in user.company) {
                    let field = document.createElement('h4');
                    field.innerText = user.company[companyKey];
                    company.append(field)
                }
                let openCom = document.getElementsByClassName('block')
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(postsArray => {
                            let postWrap = document.createElement('div');
                            postWrap.classList.add('post__wrap')
                            let userPost = []
                            for (const post of postsArray) {
                                if (user.id === post.userId) {
                                    userPost.push(post)
                                }
                            }
                            for (const post of userPost) {
                                let postBlock = document.createElement('div')
                                postBlock.classList.add('post');
                                for (const postKey in post) {
                                    if (postKey !== 'userId') {
                                        let fiel = document.createElement('h4')
                                        fiel.innerText = `${postKey} - ${post[postKey]}`
                                        postBlock.appendChild(fiel)
                                    }
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
                                        let commentWrap = document.createElement('div');
                                        commentWrap.classList.add('post__wrap', 'comment__wrap')
                                        for (const postComments of comments) {
                                            let commentBlock = document.createElement('div')
                                            commentBlock.classList.add('post');
                                            for (const keys in postComments) {
                                                let fiel = document.createElement('h4')
                                                fiel.innerText = `${keys} - ${postComments[keys]}`
                                                commentBlock.appendChild(fiel)
                                            }
                                            commentWrap.append(commentBlock)
                                        }
                                        let comButton = document.createElement('button');
                                        comButton.innerText = 'Show comments of post'

                                        comButton.onclick = function () {
                                            if (openCom.length) {
                                                openCom[0].classList.remove('block')
                                            }
                                            commentWrap.classList.toggle('block')
                                            console.log(comments);
                                        }
                                        postBlock.append(comButton)
                                        wrap.append(commentWrap)
                                    })
                                postWrap.append(postBlock)
                                wrap.append(userBlock)
                                wrap.append(postWrap)
                            }
                            let postButton = document.createElement('button')
                            postButton.innerText = 'Show / hide posts of user';
                            postButton.onclick = function () {
                                if (openCom.length) {
                                    openCom[0].classList.remove('block')
                                }
                                postWrap.classList.toggle('flex')
                            }
                            userBlock.appendChild(postButton)
                        }
                    )
                userBlock.append(id, name, username, email, address, phone, website, company)
                document.body.append(wrap)
            }
        }
    )