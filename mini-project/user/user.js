let userTarget = JSON.parse(localStorage.getItem('user'))


const wrap = document.getElementById('target__wrap')
let targetBlock = document.createElement('div');
targetBlock.classList.add('target__block')

let id = document.createElement('h5');
id.innerText = `ID користувача: ${userTarget.id}`

let name = document.createElement('h5');
name.innerText = `Ім'я: ${userTarget.name}`

let username = document.createElement('h5');
username.innerText = `Псевдонім: ${userTarget.username}`

let addressTitle = document.createElement('h5');
addressTitle.innerText = 'Адреса:'

let addressList = document.createElement('ul')


for (const adr in userTarget.address) {
    if (adr !== 'geo') {
        let field = document.createElement('li');
        field.innerText = userTarget.address[adr];
        addressList.append(field)
    }
}
let geoTitle = document.createElement('h6')
geoTitle.innerText = 'Geo:'

let geoList = document.createElement('ul')

for (const geoTitleKey in userTarget.address.geo) {
    let element = document.createElement('li')
    element.innerText = `${geoTitleKey}: ${userTarget.address.geo[geoTitleKey]}`
    geoList.append(element)
}

addressList.append(geoTitle, geoList)

let phone = document.createElement('h5');
phone.innerText = `Номер телефону: ${userTarget.phone}`

let site = document.createElement('h5');
site.innerText = `Веб-сайт: ${userTarget.website}`

let companyTitle = document.createElement('h5')
companyTitle.innerText = 'Інфо про компанію';

let companyList = document.createElement('ul');

for (const companyKey in userTarget.company) {
    let field = document.createElement('li');
    field.innerText = companyKey +': '+ userTarget.company[companyKey];
    companyList.append(field)
}

targetBlock.append(id, name, username, addressTitle, addressList, phone, site, companyTitle, companyList)

wrap.appendChild(targetBlock)



fetch(`https://jsonplaceholder.typicode.com/users/${userTarget.id}/posts`)
    .then(response => response.json())
    .then(postOfTarget => {
        let postWrap = document.getElementById('post__wrap')


        let showBtn = document.getElementById('userBtn')
        showBtn.onclick = function (){
            let showed = document.getElementsByName('show');
            setTimeout(() =>{
                if(!showed.length){
                    window.scrollTo(0,document.body.scrollHeight);
                }
            }, 100)

            postWrap.classList.toggle('show')

        }

        for (const post of postOfTarget) {
            let postBlock = document.createElement('div');
            postBlock.classList.add('post__block')
            let titleBlock = document.createElement('div');
            titleBlock.classList.add('title__block');
            let title = document.createElement('h5');
            title.innerText = post.title;
            titleBlock.appendChild(title)
            let button = document.createElement('button');
            button.classList.add('btn', 'btn-primary', 'user__post_btn');
            button.innerText = 'Перейти до поста'
            button.onclick = function () {
                localStorage.setItem('post', JSON.stringify(post))
            }
            let link = document.createElement('a');
            link.href = '../post/post-details.html'
            link.appendChild(button)


            postBlock.append(titleBlock, link)

            postWrap.appendChild(postBlock)
        }

    })


