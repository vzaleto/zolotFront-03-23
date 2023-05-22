
let lengthMyArr = +prompt('enter length array');
let getData = prompt('emnter elements');

function lengthArray(n,g){

    let arrLength = [];

    for(let i = 0; i < n; i++){

       arrLength.push(n[i]);
    }
 
    for(let k = 0; k < arrLength.length; k++){

        for(let j = 0; j < g.length; j++){

            arrLength[j] = g[j]
        }
    }

    arrLength.sort(function(a, b){return a - b});

     console.log(arrLength);

     arrLength.splice(1,3);

      console.log(arrLength);
}

lengthArray(lengthMyArr,getData);