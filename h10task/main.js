//1	Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….).
let numbStart = 0;

while(numbStart <= 30){

	if(numbStart >= 20){
		console.log(numbStart)
	}
	numbStart = numbStart + 0.5;
}
//2 Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30…100 долларов.
let grivta = 27;

let dollar = [10,20,30,40,50,60,70,80,90,100];

let g = 0;

console.log(dollar)

for(i=0; i < dollar.length;i++ ){
	console.log(dollar[i]* 27)
}

//3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let nubmSquared = 0;
let squartedfSum = "";
let n = +prompt("введите число N");

do{

// console.log(squartedfSum = nubmSquared**2);

if(n >= nubmSquared**2){

squartedfSum += nubmSquared
	
}
	nubmSquared++;

}while(nubmSquared <= 100)

alert(squartedfSum);

//4  Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

  let justNumb = +prompt('введите число простое или составное');

let view = "";
let lue = "";
let zu = 2;

let allNumb = "";

for(;zu < justNumb; zu++){

 if(justNumb % zu === 0){

    allNumb+= justNumb/zu + ", ";

    view = "1";

 }else{
     lue = "2";

 }
}

if(view === "1" &&  lue === "2"){

  alert('число соствное '+ "делители " + allNumb);


}else {
alert('число простое');
     
}

//5

let kratnistTree = prompt('зведення числа 3 у деякий ступінь.');

let coint = 0;

while(kratnistTree % 3 === 0){


kratnistTree = kratnistTree/3;

coint++
// console.log(kratnistTree)
}

if(kratnistTree === 1){
	alert('it is 3 in ' + coint + ' stepen')
}else{
	alert('it is not 3')
}
