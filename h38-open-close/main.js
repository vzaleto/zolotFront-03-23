
let tram;

function windOpen(e){
   tram = window.open("https://www.pinterest.com/jelenajarosevic/madona/", "madonna",'width=550,height=700' );
}

function windClose(){
    tram.close()
}

document.querySelector('#openB').addEventListener('click', windOpen);

document.querySelector('#closeB').addEventListener('click', windClose);