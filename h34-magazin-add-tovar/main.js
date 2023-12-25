let category = document.querySelectorAll('.category');

let tovary = document.querySelectorAll('.tovary');

let singlTovar = document.querySelectorAll('.singl-tovar')

let descroptionTovar = document.querySelectorAll('.descrioption');

let message = document.querySelector('.messege-buy');

let button = document.querySelectorAll('.button');

function pushTovary(arrV){

	let arrTovary = [];

	this.arrTovary = arrTovary;

	arrV.forEach(function(elem){

	 	arrTovary.push(elem);

   });

};

function removeShow(item){

	item.forEach(function(elem){

		 elem.classList.remove('show');

   });

}

function getProuct(){

	let cals = new pushTovary(tovary);

	let addShowProduct = cals.arrTovary.find((elemInner)=>{

	   if(elemInner.getAttribute('c_id') == this.id){

	      return elemInner;

	    }

	 });

	removeShow(tovary);
	removeShow(descroptionTovar);

	addShowProduct.classList.add('show');

}

function getDescription(){

  	let tovCals = new pushTovary(descroptionTovar);

	let singlT = tovCals.arrTovary.find((elem)=>{

		if(elem.getAttribute('d_id') == this.getAttribute('st_id')){

			return elem
		}
	});

	removeShow(descroptionTovar);

	singlT.classList.add('show');

}

function clicking(func,itemList){

	itemList.forEach(function(elem){

	elem.addEventListener('click', func.bind(elem))

});

}

clicking(getProuct, category)
clicking(getDescription, singlTovar);

function addMessage(n){

	button.forEach(function(elem){

			elem.addEventListener('click',addMessage.bind(addMessage,1));

		});

	if(n == 1){

		message.classList.add('show-message');
		removeShow(tovary);
		removeShow(descroptionTovar);

		setTimeout(function(){

			message.classList.remove('show-message');

		},1000)
		
	}
	
}

addMessage(2)
 
let messageBox =  message.clientHeight

let heightWind = document.body.clientHeight - messageBox;

message.style.top = document.body.clientHeight - messageBox + 'px';

