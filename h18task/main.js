// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

function cont(){

    let count = 0;

    return function(numb){
        count +=numb ;

        return count
    }
}

let fabryk = cont();

console.log(fabryk(3))  
console.log(fabryk(5)) 
console.log(fabryk(20)) 