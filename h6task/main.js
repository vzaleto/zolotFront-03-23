  $(document).ready(function(){
    $('select').formSelect();
  });

let city = document.querySelector('.city');
let sport = document.querySelector('.sport');
let btn = document.querySelector('.btn');

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

let modalBirsday = document.querySelector('.modal-birsday');
let modalCity = document.querySelector('.modal-city');
let modalSport = document.querySelector('.modal-sport');

let select = document.querySelector('select');

  function changeSelect(){

    if(select.value === "football"){

        modalSport.innerHTML = `${select.value}, Cool, Do you want to be like Lionel Messi `;

    }else if(select.value === "basketball"){

        modalSport.innerHTML = `${select.value}, Awesome, Wanna be a cool nigga like Michael Jordan`;

    }else if(select.value === "tennis"){

        modalSport.innerHTML = `${select.value}, Awesom, Wanna be like Luana Carera` ;
    }else{

        modalSport.innerHTML = "Sorry, You did not chose option about any Sport"
      console.log(select.value);
    }

  }

function age(){

    let birsdat = document.querySelector('.birsday');

    if(birsdat.value === ""){

        modalBirsday.innerHTML =   "Sorry, You did not chose Age";
    
    }else{
            modalBirsday.innerHTML = birsdat.value;
    }

  }

function infoPersone(){

    switch(city.value.toLowerCase()){

        case "kyiv":
        modalCity.innerHTML = `${city.value}  You are living in capital of Ukrain`;
        break;
        case "london":
        modalCity.innerHTML = `${city.value},  You are living in capital of Grait Britian`;
        break;
        case "washington":
        modalCity.innerHTML = `${city.value} You are living in capital of USA`;
        break;
        case "":
        modalCity.innerHTML = `Sorry, You did not chose  City`;
        break;
        default:
            modalCity.innerHTML = ` You living in city ${city.value}`;
    };

    changeSelect();
    age();
}

function closeModal(){
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

function openModal(){
    modal.style.display = 'block';
    overlay.style.display = 'block';
}





btn.addEventListener("click",infoPersone);

btn.addEventListener("click",openModal);
overlay.addEventListener("click",closeModal);

