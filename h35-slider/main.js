    let vperod = document.querySelector('#vperod');
    let nazad = document.querySelector('#nazad');
    let item = document.querySelectorAll('.img-slider');

function moveArrow(){

      let activeItem = 0;

     function darkSide(){  

            item.forEach(function(elem){

                elem.classList.remove('active') 
            })

            if(event.target.id === 'vperod'){

                activeItem++ 

                if(activeItem > item.length-1){

                    activeItem = 0;

                    item[activeItem].classList.add('active');

                }else{

                    item[activeItem].classList.add('active');
     
                }

            }else if(event.target.id === 'nazad'){

                activeItem-- 

                if(activeItem < 0){

                    activeItem = item.length-1;

                    item[activeItem].classList.add('active');

                }else{

                    item[activeItem].classList.add('active');

                }

            }

    }

    this.hooli = darkSide;
           
}

let newHooli = new moveArrow();

    vperod.addEventListener('click',newHooli.hooli);
    nazad.addEventListener('click',newHooli.hooli);
 