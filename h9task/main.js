//1-2
let first = document.querySelector(".first");
let second = document.querySelector(".second");

let firstArr = 0;

while (firstArr <= 20) {

  if(firstArr >= 10){

      first.innerHTML += firstArr + ", ";

      second.innerHTML += firstArr* firstArr + ", "
  }
  firstArr++;
}

// 3
let third = document.querySelector(".third");

let secNamb = 0;

while (secNamb < 7) {

    secNamb++
    third.innerHTML += secNamb*7 + ", ";
    
    
}

// 4
let fourth = document.querySelector(".forth");

let forthNumb = 0;

while (forthNumb < 15) {

    forthNumb++

    (forthNumb *(forthNumb+1))/2;


    fourth.innerHTML = (forthNumb *(forthNumb+1))/2;


}

//5
let fivth = document.querySelector(".fivth");
let fivthNumb = 0;
let n = 1;

while (fivthNumb <= 35) {

    if (fivthNumb >= 15) {

        n =  fivthNumb * n;

        fivth.innerHTML =  n;                                                                                                                                                                                                    
    }

    fivthNumb++;
}

//6
let sixth = document.querySelector(".sixth");

let sixthNumb = 0;
let sixthSum = 0;

while (sixthNumb <= 500) {
    sixthNumb++;
    sixthSum = sixthSum + sixthNumb
}
sixth.innerHTML = sixthSum/sixthNumb

//7
let seventh = document.querySelector(".seventh");

let seventhNumb = 0;
let seventhSum = 0;

while (seventhNumb < 80) {

    seventhNumb++;

    if(seventhNumb >= 30){

        if(seventhNumb % 2 === 0){
            seventhSum += seventhNumb;
        }
    }

}
seventh.innerHTML = seventhSum;

//8
let eighth = document.querySelector(".eighth");

let eighthNumb = 0;

do{

    if(eighthNumb >= 100){

        if(eighthNumb % 3 === 0){
        // console.log(eighthNumb);
        eighth.innerHTML += eighthNumb + ", "
    }
}
eighthNumb++

}while(eighthNumb <= 200);

//9
let ninth = document.querySelector(".ninth");
let ninthNumb = 15;
let sum="";
let sumEv="";
let afft = []
let x = 1;

while ( x <= ninthNumb ) {

    if(ninthNumb % x === 0){

     sum += x  + ", ";

     afft.push(x)

 }
 x++;

}
 // ninth.innerHTML = sum

 ninth.innerHTML +=  "Делтели: "  + sum + " кол-во делителей: " + afft.length;


//10
let tenth = document.querySelector(".tenth");

let resultTenth = "";

let arr1 = [1,2,3,4,5,6,7,8,9,10];

let arr2 = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < arr1.length; i++){

        for(let j = 0; j < arr2.length; j++){

            // resultTenth +=(arr1[i]*arr2[j]) + " "

            tenth.innerHTML+=(arr1[i]*arr2[j]) + " "
        }
        tenth.innerHTML +=  '<br>'

    }

