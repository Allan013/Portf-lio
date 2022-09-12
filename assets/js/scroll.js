let menuItens = document.querySelectorAll('nav a')
menuItens.forEach(item=>{
    item.addEventListener('click',scrollNovo)
})

function scrollNovo(event){
    event.preventDefault()
    let element = event.target;
    let id = element.getAttribute('href')
    let to = document.querySelector(id).offsetTop;



window.scroll({
    top: to - 110,
    behavior:"smooth"
})
}
document.querySelectorAll('nav a').forEach(color=>{
    color.addEventListener('mouseover',Color1)
    color.addEventListener('mouseout',Color2)
})
function Color1(){
    this.style.color = 'blue';
}
function Color2(){
    this.style.color = '';
}

let btnMobile = document.querySelector('.btn_mobile img')

btnMobile.addEventListener('click',toggleMobile)
function toggleMobile(){
    let nav = document.querySelector('nav');
    nav.classList.toggle('active')
   
}


 