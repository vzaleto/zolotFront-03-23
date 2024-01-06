let query = document.querySelectorAll('div');

let tagName = document.getElementsByTagName('div');

let name = document.createElement('div');

document.body.appendChild(name)

console.log(query)
console.log(tagName);

console.log('query', query.length);
console.log('tagName',tagName.length);

//getElementsByTagName - живая коллекция автоматически обновляются при ее изменени
//  querySelectorAll - статическая коллекция при динамическом добавлении элемметнта в 'dom', не обновиться 