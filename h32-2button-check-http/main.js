let insertLInk =  document.querySelector('#link-get')

let followLink =  document.querySelector('#link-follow')

let protokol = insertLInk.getAttribute('link').split(':');

function checkHttps (){

	if(protokol[0] != "https"){

	setNewAttr(protokol, followLink);

}
else{

	setNewAttr(protokol, followLink)

	}
}

function setNewAttr(array, linkAtribyt){

	array[0] = "https:";

	let stringUrl = protokol.join('');

	linkAtribyt.innerHTML = stringUrl;

	linkAtribyt.setAttribute('href', stringUrl);

}

insertLInk.addEventListener('click', checkHttps)

