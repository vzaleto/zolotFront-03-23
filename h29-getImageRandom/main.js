
let app = document.querySelector('#app');

let click = document.querySelector('#click');

let divFirst = document.createElement('div');

let img = document.createElement('img');

app.appendChild(divFirst);

divFirst.appendChild(img);

let imgAtttr = document.querySelector('img');

const imageArr = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg'];

function getImage(rec){

    console.log(this)

    let indexImage = Math.floor(Math.random() * rec.length);

    let setImage = rec.find((elem,index) => indexImage === index);

    imgAtttr.setAttribute('src',`./image/${setImage}`);

}
 getImage(imageArr);

click.addEventListener('click', getImage.bind(click, imageArr));
