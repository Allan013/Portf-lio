let target = document.querySelectorAll('[data-item]');
let animateClass = 'animate';

function animate(){
    let animeitens = window.pageYOffset + 400;
    target.forEach(function(element){
        if((animeitens) > element.offsetTop){
            element.classList.add(animateClass)
        } else {
            element.classList.remove(animateClass)
        }
    })
}
window.addEventListener('scroll',function(){
    animate()
})

