let textContento1 = document.querySelector('.text-cntent1');
let textContento2 = document.querySelector('.text-cntent2');
let textContento3 = document.querySelector('.text-cntent3');


let innerHtmlo1 = document.querySelector('.inner-html1');
let innerHtmlo2 = document.querySelector('.inner-html2');
let innerHtmlo3 = document.querySelector('.inner-html3');


textContento1.textContent = "1 - hallo, <div>ejik <span>innerHtmlo1</span></div>";
textContento2.textContent = "2 - <div>hallo</div>";
textContento3.textContent = "3 - <div>hallo, <span>ejik</span> </div>";



innerHtmlo1.innerHTML = "1 - hallo, <div>ejik, <span>innerHtmlo1</span></div> ";
innerHtmlo2.innerHTML = "2 - <div>hallo</div>";
innerHtmlo3.innerHTML = "3 - <div>hallo <span>ejik</span> </div>";



// textContent vs innerHtml