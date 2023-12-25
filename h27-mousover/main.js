let hoverBlock = document.querySelector('.foeld-text');

let apearsBlock = document.querySelector('.apears-box');

function heandler(event){

    apearsBlock.classList.add('show');

}

function heandlerOut(){

    apearsBlock.classList.remove('show');

}

hoverBlock.onmouseout = heandlerOut;

hoverBlock.onmouseover = heandler;
    