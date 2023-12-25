class Men{
    constructor(name,fmail){
        this.fmail = fmail;
        this.name = name
    }
}

class Flat{

    addSitizen(mens){

        let people = [];

        return function(){

            if(Array.isArray(mens)){

            mens.forEach(function(elem){

                people.push(elem);
                            
            });
                    
            }else{

                people.push(mens);

            }
            return people;
        }
    }
}


class Haus{
    constructor(maxFlat){

        this.maxFlat = maxFlat;

    }
    addFlat(creatFlats){

        let flats = [];

        let maxFL = this.maxFlat

        creatFlats.forEach(function(elem){

            if(flats.length < maxFL) {

                    flats.push(elem);

            }else{
                
                console.log('sorry )')

            }

        })

        return flats
            
    }
}

let sitizen = new Men('masha','baba');
let fireFiter = new Men('nina','baba');

let doc = new Men('vova','ded');
let doc2 = new Men('sasha','ded');

let newFlat1 = new Flat();
let newFlat2 = new Flat();
let newFlat3 = new Flat();

let firstFlor = newFlat1.addSitizen([sitizen,fireFiter]);
let SecondFlor = newFlat2.addSitizen(doc);
let thirdFlor = newFlat3.addSitizen(doc2);

let newBuilding = new Haus(1);
let newBuildingHreshatik = new Haus(2)

let bud32 = newBuilding.addFlat([SecondFlor(),thirdFlor()])
let bud17 = newBuildingHreshatik.addFlat([SecondFlor(),thirdFlor(),firstFlor()])

console.log(bud32)
console.log(bud17)