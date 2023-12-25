let table = document.createElement('table');

let app = document.querySelector('#app');


app.appendChild(table);

function createTr(){
    let tr = document.createElement('tr');
    return tr;
}

function crtTd (){

    let td = document.createElement('td'); 

    return td
}


let i = 0;

while(i < 10){

    i++ ;

    table.appendChild(createTr());
}

let newTr = document.querySelectorAll('tr');


newTr.forEach(function(elem){

    let y = 0;

    while(y < 10){

        y++ ;

        elem.appendChild(crtTd());

    }
    
})

let newTd = document.querySelectorAll('td');

newTd.forEach(function(elem,i){

    elem.innerHTML = i + 1;

})