
const arrNumb = [1, 2, 3, 4, 5, 6, 7];

// const arrNumb = [1, 2, 3, 4, 5, 6, 7];

function removeElement (argument, item) {

  argument.splice(item -1,1);

  console.log( argument )
}

removeElement (arrNumb, 7 )