class Man{

    constructor(name,fmale){
        this.name = name;
        this.fmale = fmale;
    }

    infoMan(){
        console.log(` Name - ${this.nmae}, fmale - ${this.fmale}`)
    }
}

class Car{
    constructor(brand,model,year,signNumber){

        this.brand = brand;
        this.model = model;
        this.year = year;
        this.signNumber = signNumber;

        this.owner = '';

    }

    assignOwner(person){

        this.owner = person.name + ", " + person.fmale
    
    }
}


let police = new Man('John','men');
let manager = new Man('John','men');

let wiekl_1 = new Car("mitsubisi",'lancer','2020','ka2345im');
let wiekl_2 = new Car("mitsubisi",'lancer','2020','ka2345im');

wiekl_1.assignOwner(police);
wiek_2.assignOwner(manager)




console.log(wiekl_1);
console.log(wiekl_2)