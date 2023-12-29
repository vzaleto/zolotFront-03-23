    let vperod = document.querySelector('#vperod');
    let nazad = document.querySelector('#nazad');
    let item = document.querySelectorAll('.img-slider');

function moveArrow(){

      let activeItem = 0;

       function butoonDis(){

            console.log('activeItem:',activeItem)

            if(activeItem === 0){

                nazad.classList.add('disabled-button');

                nazad.disabled = true;

            }else if(activeItem === item.length-1){

                vperod.disabled = true;

                vperod.classList.add('disabled-button');

            }else if(activeItem < item.length-1){

                vperod.disabled = false;

                vperod.classList.remove('disabled-button');
                nazad.classList.remove('disabled-button');

                nazad.disabled = false;
            }
       }

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

                    console.log('vpered-1', activeItem)

                    item[activeItem].classList.add('active');

                }

            }else if(event.target.id === 'nazad'){

                activeItem-- 

                if(activeItem < 0){

                    activeItem = item.length-1;

                    item[activeItem].classList.add('active');

                }else{

                    console.log('nazad-2', activeItem)

                    item[activeItem].classList.add('active');

                }

            }

    }

    this.darkSide = darkSide;
     this.butoonDis = butoonDis;           
}

let newHooli = new moveArrow();

newHooli.butoonDis()

    vperod.addEventListener('click',newHooli.darkSide);
    nazad.addEventListener('click',newHooli.darkSide);

     vperod.addEventListener('click',newHooli.butoonDis);
 nazad.addEventListener('click',newHooli.butoonDis);