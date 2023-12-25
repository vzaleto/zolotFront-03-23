class HelloName{
        constructor(name){
            this.name = name;
        }
        get kvach(){
            alert(`${this.name}`)
        }
    }

let whyName = prompt('Why are You');

let getName = new HelloName(whyName);

getName.kvach;