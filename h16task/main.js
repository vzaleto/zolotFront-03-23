
// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
    // Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.

// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.


// 1 сумму колво положительных
// 2 минимальный
// 3 максисальный
// 4 колво отрицательных
// 5 колво не четных полоджительных

// 6 колво четных полоджительных
// 7 сумму четн положительных
// 8 сумму нечетных положительных
// 9 произведение положитель 


let arrTown = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// let arrTown = [1,4,6,9,2,3,4];


// 1, 9 сумму колво положительных
function sumAmountPositiv(arr){
    let count = 0;                                                                                                             
    let sum =0;
    let multiple = 1;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > 0){
            count++;
            sum +=arr[i];
            multiple*=arr[i];
        }
    }

    console.log('1 sum and amound positiv', sum,count,multiple) 
}

sumAmountPositiv(arrTown)

// 2,3 сумму колво положительных
function MinMax(arr){

    let min = arr[0];
    let max = arr[0];

    let numbmin = 0;
    let numbmax = 0;

    for(let i = 0;i < arrTown.length;i++){

        if(min > arrTown[i]){

            min = arrTown[i]

            numbmin = [i]

        }
        if(max < arrTown[i]){

            max = arrTown[i]

            numbmax = [i]

        }
    }
    console.log('2,3 min max', 'min:', min + " i=" + numbmin,'max:',max + ' i=' + numbmax);
}
MinMax(arrTown)

// 4 колво отрицательных
function sumAmountNegative(arr){

    let sumNegativ = '';
    let counter = 0;
    for(let i = 0; i < arr.length;i++){

     if(arr[i] < 0){
        counter++
        sumNegativ -= arr[i];
    }
}
console.log('4. sum snd amount elem' ,counter ,sumNegativ)
}
sumAmountNegative(arrTown);

// 5,8  колво не четных полоджительных
function quantityNotEventPositiv(arr){
    let count = 0;
    let sum = 0;

    for(let i = 0; i < arr.length;i++){

        if(arr[i] > 0){

            if(arr[i] % 2 != 0){

                sum+= arr[i]

                count++;
            }
        }
    }
    console.log('quantity not event positiv', count,sum );
}
quantityNotEventPositiv(arrTown)


// 6,7 колво четных полоджительных
function eventPositiv(arr){

    let getElem = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > 0){

            if(arr[i] % 2 === 0){

                count++

                getElem+=arr[i];

            // console.log(arrTown[i])
        }
    }

}
console.log('6 amount event positiv', getElem,'amount ', count);
console.log('впривет чдслчдо лээжджд ывываыаыэждэд');
}
eventPositiv(arrTown);


function maxElem(arr){

    let max = 0;

    for(let i = 0; i < arr.length; i++){

        if(max < arr[i]){

            max = arr[i];
        }
    }

    for(let i = 0; i< arr.length;i++){

        if(max !=arr[i]){

            arr[i] = 0
        }
    }
    console.log(arr, max)
}

maxElem(arrTown)
