const usersWrap = document.getElementById('user__wrap');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
        for (const userChild of usersArray) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user__block');
            let id = document.createElement('h4');
            id.innerText = `ID користувача: ${userChild.id}`;
            let name = document.createElement('h4');
            name.innerText = `Ім'я користувача: ${userChild.name}`;
            let button = document.createElement('button');
            button.classList.add('btn', 'btn-primary');
            button.innerText = 'Детальніше'
            button.onclick = function () {
                localStorage.setItem('user', JSON.stringify(userChild))
            }
            let link = document.createElement('a');
            link.href = '../user/user-details.html'
            link.appendChild(button)
            userBlock.append(id, name, link)
            usersWrap.appendChild(userBlock)
        }
    })
