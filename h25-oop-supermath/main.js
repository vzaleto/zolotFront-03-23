



class SuperMath{

 check(obj){

let findToDo = prompt('бажаете дию знак?');


 if(findToDo === 'yes'){

   this.count(obj)


 }else if( findToDo === 'no'){

         this.input()

 }else{
    return "sorry"
 }

}


count(obj){

     switch(obj.znak){

             case'/': console.log( obj.x / obj.y) ;
             break;

             case'+': 

                 // console.log(obj.x + obj.y)

                  console.log(obj.x + obj.y) ;

             break;

             case'*':   console.log(obj.x * obj.y) ;
             break;

             case'-':  console.log(obj.x - obj.y)  ;
             break;

         }

}



 input(){

     // console.log(this.check.readyChecky())


     let x = Number(prompt('x')) ;
     let y = Number(prompt('y'));
     let znak = prompt('znak');

     // console.log(this.check({x:x, y:y, znak:znak}));

      this.count({x:x, y:y, znak:znak})
 }
}


let object = {x:12, y:3, znak: "/"};

let vagon = new SuperMath();


vagon.check(object)

// vagon.input()
