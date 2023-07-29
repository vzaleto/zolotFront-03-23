class Student{

    constructor(name,lastName,year,estimates){
        this.name = name;
        this.lastName = lastName;
        this.year = year;

        this.arrEstimates = estimates;
        this.middleBar = "";

        this.DayReall =  Array(25);
        this.i = 0;

        this.openPresent = 0;
    }

    getYearMiddleBar(){
     
     let glArrEstimates= this.arrEstimates

        function middleNumb(name){

            return name.reduce((a,b) => (a + b)) / name.length
        }

        this.middleBar = middleNumb(glArrEstimates);
        
        console.log(`${this.year } - ${middleNumb(glArrEstimates)}`);

    }

    summary(){

        let arrDay =  this.DayReall;
        let glArrEstimates = this.arrEstimates;

        function middleNumb(name){

            return name.reduce((a,b) => (a + b)) / name.length
        }

        this.middleBar = middleNumb(glArrEstimates);
        this.openPresent = middleNumb(arrDay);

        if(middleNumb(arrDay) > 0.9 && middleNumb(glArrEstimates) > 90){

            console.log( `${this.lastName }, You are best!`);

        }else if(middleNumb(arrDay) > 0.9 || middleNumb(glArrEstimates) > 90){

            console.log( `Good! ${this.lastName }, but you can better`);

        }else{

            console.log( `eee ...! ${this.lastName }, Are you monkey?`);

        }

    }
    present(){

         document.body.innerHTML = "<p>&#128014</p>";

        let arrayReal = this.DayReall;

        let mg = ()=>{

            if(this.i < 25){

                arrayReal[this.i] = true;

                this.i  ++

            }else{
                console.log(`sorry, Student - ${this.lastName }, is not a hours `   )
            }
        }

        return mg;
    }

    absent(){

        let arrayReal = this.DayReall;

        let mg = ()=>{

        if(this.i < 25){

                arrayReal[this.i] = false;

                this.i  ++

            }else{
                console.log(`sorry, Student - ${this.lastName }, is not a hours `)
            }

        }

        return mg;
    }
}

let petruxa = new Student('Petruxa','Jconda','1990',[20,30,40,50,40,70,80] );
let vasiliy = new Student('Vasiliy','Rama','1998',[90,50,40,90,40,70,100] );
let tanya = new Student('Tanya','Volos','2000',[90,90,80,100,100,90,100] );

console.log(petruxa);
console.log(vasiliy)
console.log(tanya)

petruxa.getYearMiddleBar();
vasiliy.getYearMiddleBar();
tanya.getYearMiddleBar();

let countPopal =  petruxa.present();
let countNePopal =  petruxa.absent();

let countPopal_1 =  vasiliy.present();
let countNePopal_1 =  vasiliy.absent();

let countPopal_2 =  tanya.present();
let countNePopal_2 =  tanya.absent();

countPopal();
countPopal();
countPopal();
countNePopal();
countPopal();
countPopal();
countPopal();
countNePopal();
countPopal();
countPopal();
countPopal();
countNePopal();
countPopal();
countPopal();
countPopal();
countNePopal();
countPopal();
countPopal();
countPopal();
countNePopal();
countPopal();
// countPopal();
// countPopal();
// countNePopal();
// countNePopal();
countPopal();

countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countPopal_1();
countNePopal_1();
countNePopal_1();
countNePopal_1();
countNePopal_1();
countNePopal_1();
countNePopal_1();
countNePopal_1();
countNePopal_1();
countNePopal_1();

countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countPopal_2();
countNePopal_2();

petruxa.summary();
vasiliy.summary();
tanya.summary();