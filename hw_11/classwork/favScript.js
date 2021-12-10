let favUsers = JSON.parse(localStorage.getItem('favourite'))

let unique = Array.from(new Set(favUsers.map(JSON.stringify))).map(JSON.parse);

let wrap = document.getElementsByClassName('wrap')[0];

for (const user of unique) {
    let div = document.createElement('div');
    for (const userKey in user) {
        let fiel = document.createElement('p');
        fiel.innerText = `${userKey}: ${user[userKey]}`
        div.appendChild(fiel)
    }

    wrap.appendChild(div)
}