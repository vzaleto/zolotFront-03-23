let btn = document.querySelector('#btn');
let result = document.querySelector('.result');

function kalkulyator(){
let eventCalk = document.querySelector('.eventdiferent').value;

let numOne = document.querySelector('.numOne').value;
let numTwo = document.querySelector('.numTwo').value;

let  pol = "";

switch(eventCalk){


case "/":

 pol = numOne / Number(numTwo);
result.value = pol 
	break;

case "+":

 pol =  Number(numOne) + Number(numTwo);
result.value = pol 
	break;

case "-":

 pol =  numOne - numTwo;
result.value = pol 
	break;

case "*":

 pol =  numOne * numTwo;
result.value = pol 
	break;
}


}

btn.addEventListener('click',kalkulyator)

