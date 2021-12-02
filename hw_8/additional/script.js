/* написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
масив вивести в консоль */

// let allElements = document.querySelectorAll('body > *');
let allElements = document.getElementsByTagName('body');
let listOfClass = [];

function classSearch (object){
    let parent = object.classList;
    for (const parentElement of parent) {
        listOfClass.push(parentElement)
    }
    let children = object.children;
    for (const child of children) {
        classSearch(child);
    }
}

for (const element of allElements) {
    classSearch(element);
}
let result = [];

let arrayReWrite = (arrInput, arrOutput) => {
    for (let i = 0; i < arrInput.length; i++) {
        let k = 0;
        for (let j = 0; j < arrOutput.length; j++) {
            if (arrInput[i] === arrOutput[j]){
                k = 1;
            }
        }
        if (k === 0){
            arrOutput.push(arrInput[i])
        }
    }
}

arrayReWrite(listOfClass, result);
console.log(result);




