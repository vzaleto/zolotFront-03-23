const allharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generetKey(length, characters){

let randomString = ""

for(let i = 0;i < length; i++){ 

 randomString += characters[(Math.floor(Math.random() * characters.length))]

}

return randomString

}

const key = generetKey(16, allharacters);

console.log(key); 

