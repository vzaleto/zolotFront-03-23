
function Kalkulate(){
let doResult = prompt('add, sub, mult, div');

    if(doResult === "add"){
        let firstNumb = prompt('input number or string');
        let secondNumb = prompt('input number or string');

        alert(+firstNumb + +secondNumb);  

    }
    else if (doResult === "sub") {
         firstNumb = prompt('input number or string');
         secondNumb = prompt('input number or string');

         alert(firstNumb - secondNumb);
     }
     else if (doResult === "mult") {
        firstNumb = prompt('input number or string');
        secondNumb = prompt('input number or string');
        
        alert(firstNumb * secondNumb);  
    }
    else if (doResult === "div") {
         firstNumb = prompt('input number or string');
         secondNumb = prompt('input number or string');

         alert(firstNumb / secondNumb); 
    }
    else if (doResult.trim() === "") {

         alert("Sorry enter 'add, sub, mult, div' ");
    }
    else {
         alert("Sorry enter 'add, sub, mult, div' ");
    }
}

Kalkulate();



