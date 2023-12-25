
	let smile = document.querySelectorAll('.wrap-smile .smile');

		let boxOut = document.querySelectorAll('.wrap-smile .out');

		smile.forEach(function(elem){

				let i = 0;

				elem.onclick = function(){

					console.log(i)

					 i++;

					let check = "";

					check = i + check;

					console.log(this.nextElementSibling)

					this.nextElementSibling.innerHTML = i;
				}

		});