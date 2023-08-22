class Gamburger{
    
    constructor(size,staffing,topping){
        this.size = size;
        this.staffing = staffing;
        this.topping = topping;
    }

    static get size_small(){

        return {title:'little Burger', maney: 50, callories:20}
    }
    static get size_bigg(){

        return  {title:'big Burger', maney: 100, callories:40}
    }

    static get staffing_cheese(){

        return {title:'staffing_cheese', maney: 10, callories:20}
    }
    static get staffing_salate(){

        return {title:'salate', maney: 20, callories:5}
    }
    static get staffing_potato(){

        return  {title:'potato', maney: 15, callories:10}
    }
    static get topping_sause(){

        return  {title:'sause', maney: 10, callories:0}
    }
    static get topping_mayo(){

        return  {title:'mayo', maney: 20, callories:5}
    }

    resicle(){

        let gSize = this.size;
        let gStaffing = this.staffing ;
        let gTopping = this.topping;

        let money =  gSize.maney + (gTopping ? gTopping.maney : 0 ) + (gStaffing ? gStaffing.maney : 0);

        let callories = gSize.callories + (gTopping ? gTopping.callories : 0 ) + (gStaffing ? gStaffing.callories : 0);

        let title = gSize.title + ", " + (gTopping ? gTopping.title : 0 ) + ", " + (gStaffing ? gStaffing.title : 0);

         return {
                    title:title,
                    price:money,
                    callories:callories
                }
    }
}

let hamburger = new Gamburger(Gamburger.size_small, Gamburger.staffing_cheese, Gamburger.topping_mayo);

let mamburger = new Gamburger(Gamburger.size_bigg, Gamburger.staffing_salate, Gamburger.topping_sause);

console.log(hamburger) 
console.log(mamburger) 

console.log(hamburger.resicle())
console.log(mamburger.resicle())