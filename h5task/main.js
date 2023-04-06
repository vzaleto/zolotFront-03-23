let prompt3 =  document.querySelectorAll(".prompt");


function getAllNamber(){

        let prompt3 =  document.querySelectorAll(".prompt");
    let result = 0;


      prompt3.forEach(function(elem,index){



 result +=  Number(elem.value)/prompt3.length;

      });

     alert(result)
}

btn.addEventListener('click',getAllNamber);