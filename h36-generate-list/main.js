let list = document.querySelector('.wrapp');

let turbulent = [1,2,3,4,[1.1,2.1,3.1,[1.2,2.2,3.2,4.2],5.1],6,7,8];

function pushListElement(array, idPlase){
    
    let ul = document.createElement('ul');

    array.forEach(function(elem){

        let li = document.createElement('li');

        if(Array.isArray(elem)){

            pushListElement(elem, li);

        }else{

            li.innerHTML = elem;
            
        }

        ul.appendChild(li)

    })

    idPlase.appendChild(ul)

}

pushListElement(turbulent, list);






