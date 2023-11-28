
// тому що min это свойство обьекта Math
// тому що аплай використовуеться з масивом данних
// ааплай призначае контекст виконання
// без аплай може буди тильки через розгортання масива



let cor = [1,2,3,4,5,6,7,8,9];


console.log(Math.min.apply(Math, cor));

console.log("Rozgortannya",Math.min(...cor))


let getMathMin;


for(let i = 0; i < cor.length;i++){

	getMathMin = Math.min(cor[i], cor[0])
}

console.log(getMathMin);

