
// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).


// function numDegree(x,n){


// // let x = 2;

// // let n = 3;

// let result = 1;

// for(let i = 0; i < n; i++){
// 	result = x
// }

// console.log(result)
// }

// numDegree(3,4)





function sum(x,n){
	if(n <= 0){
		return 1
	}else{
		console.log(x)

		return x * sum(x, n-1)
	}
}


console.log(sum(3,4))