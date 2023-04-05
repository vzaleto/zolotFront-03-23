let submitForm = document.querySelector('#btn');

let showForm =  document.querySelector('#show-form');
	

let inputName = document.querySelectorAll('input');

let resNumb = document.querySelector('.result-namb');


function getDataInput (){

let g = '';

	inputName.forEach(function(elem){

			console.log(elem.name )
	
		g += `${elem.value}` + ' ';

		
	});

	showForm.innerHTML = g;

}



submitForm.addEventListener('click',getDataInput);





let numbOn = 12345;

let stringOn  = numbOn + "";

let arrStr = stringOn.split('');

for(let i =  0;i < arrStr.length;i++ ){

	resNumb.innerHTML += (`${arrStr[i]} ` - " ") + " ";
}



