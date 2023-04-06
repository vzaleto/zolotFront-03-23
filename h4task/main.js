let btn = document.querySelector('#btn');
let carrentTime = document.querySelector('.carrent-time');



function whatTimeIsIt (){

let hour = document.querySelector('.hours').value;

 let sumHour = Number(hour)  * 60 * 60;

console.log()

alert(sumHour);

}

btn.addEventListener('click',whatTimeIsIt);

setInterval(function(){
	var today = new Date();

// var now = today.getHours() +  ":" + today.getMinutes() + ":" +  today.getSeconds();
var now = today.toLocaleTimeString();
console.log(now);
carrentTime.innerHTML = now;
})

