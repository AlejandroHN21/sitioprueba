const images = document.querySelectorAll('.sectionContent__img');

let contador = 2;

function next() {
    images[contador].classList.remove('active-slide');
    if(contador != images.length -1){
        contador++;
    }else{
        contador = 0; 
    }
    setTimeout("next()",10000);
    images[contador].classList.add('active-slide');
}

window.onload = next;