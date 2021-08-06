const ul = document.createElement('ul')
const li = document.createElement('li')
const a = document.createElement('a')
a.innerHTML = 'tag a'


const list = document.querySelector('.list')// peguei o ul 

list.appendChild(li)
//list.insertBefore(a, li) colocando tag a antes do li
list.insertBefore(a, li) //colocando tag a antes do li
// list.insertAdjacentElement('beforebegin', a) // antes do ul
// list.insertAdjacentElement('beforeend', a) // dentro do ul deixando como ultima tag
// list.insertAdjacentElement('afterend', a) // fora do ul
// list.insertAdjacentElement('afterbegin', a) //colocando tag a antes do li
console.log(ul);
