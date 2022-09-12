
function typeWrite(element){
    let textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, a) =>{
        setTimeout(()=> element.innerHTML += letter ,75 * a)
    })
}

let title = document.querySelector('.inicio_sobremim h1');
typeWrite(title);