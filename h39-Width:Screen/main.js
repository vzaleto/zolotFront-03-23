let height = window.screen.height;

let availHeight = window.screen.availHeight;

let width = window.screen.width;

let availWidth = window.screen.availWidth;

let divHeight = document.querySelector('#heidth-width');

 let divHeightA = document.querySelector('#avail');

 divHeight.style.width = width + 'px';

 divHeightA.style.width = availWidth + 'px';

divHeight.style.height = height + 'px';

divHeightA.style.height = availHeight + 'px';

// divHeightA.style.height = availHeight - divHeightA.offsetHeight + 'px';

//window.screen.height Возвращает ширину или высоту экрана посетителя в пикселях.
// window.screen.availHeight Возвращает ширину или высоту экрана посетителя, в пикселях, минус функции интерфейса по

console.log("height", window.screen.height)
console.log("availHeight", window.screen.availHeight)

console.log(" width",window.screen.width)
console.log("availWidth",window.screen.availWidth)




