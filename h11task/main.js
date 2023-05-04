
let arrTing = [1,'2','f','/','5','!',4,7,9,0];

let sum = 0;
let arrNumb =[];
let res =""

for(let i = 0; i < arrTing.length; i++){

    if(  typeof(arrTing[i]) ==  'number' && !isNaN(arrTing[i]) ){

        arrNumb.push(arrTing[i])

        sum +=  arrTing[i] 
    }
}
res = sum /arrNumb.length;
alert(res )

//2

let getX = +prompt('enter number X');
let znak = prompt('enter +, -, *, /, %, ^ ');
let getY = +prompt('enter number Y');

function doMath(x,y,z){

    switch (z) {
        case  '*':

        alert(x * y);

        break;
        case  '/':

        alert( x / y)

        break;
        case  '+':

        alert( x + y) 

        break;
        case  '%':

        alert(x % y)  

        break;
        case  '^':

        alert(x ** y)  

        break;
        default:
        alert('You are entered somethimg strange')  
        break;
    }

}

doMath(getX,getY,znak);


//3

let oneArr = [1,2,3,4,5];

let firstArr = 3
let InnerArr = 4;

var arr = [];  

function stangeArrray(enter){

    for (let i = 0; i < firstArr; i++) {

        arr[i] = [];

        for(let j = 0; j < InnerArr; j++){

            arr[i][j] = enter

        }

    }
    console.log(arr);
}
stangeArrray('hourses')

var arrS = []; 

function stangeArrrayElse(enterArr){

    for (let i = 0; i < firstArr; i++) {

        arrS[i] = [];

        for(let j = 0; j < enterArr.length; j++){

         arrS[i].push(oneArr[j]) 
     }

 }

 console.log(arrS);
}

stangeArrrayElse([1,2,3,4])


//4

let clear = "hello word";

let clear2 =  ['lsdfsdf', 'ddf','g'];

let   arrWord = [];

let arrfinish = [];

let letterArr;

function clearHimSelf(agr1,arg2){

    for(let i = 0; i < clear2.length; i++){

     letterArr = clear2[i].split("");

     arrfinish.push(letterArr)

 }

 let countLetter = 0

     for(let j = 0; j < arrfinish.length; j++){

      arrfinish[j].splice(0,arrfinish[j].length)

      countLetter +=arrfinish[j].length
    }

    if(countLetter === 0){
        console.log(agr1)
    }

}

clearHimSelf(clear,clear2)