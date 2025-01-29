// let h1Comp = document.querySelector('#main-title');
// let item = document.querySelectorAll('.item');

// h1Comp.textContent = 'Dom Manipulation'
// h1Comp.style.color = 'red';

// 154
// let ul = document.querySelectorAll('.item');  
// console.log(ul)
// for(let list of ul){
//     console.log(list)
// }
// let ul2 = document.querySelectorAll('li');  
// console.log(ul2)
// for(let list of ul2){
//     console.log(list)
// }

// It shows all nodes also text nodes
// let ul = document.querySelector('ul')
// console.log(ul.childNodes)

// Use Case Of Closest
// let ul = document.querySelector('.item');
// console.log(ul.closest('body'))

// Use Case Of Parent Node
// let li = document.querySelector('li');
// console.log(li.parentNode)

// Use Case Of Siblings
// let ul = document.querySelector('ul');
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)

// Getting Element from Traversal Dom 
// let ul = document.body.firstElementChild.firstElementChild.nextElementSibling;
// let firstLi = ul.firstElementChild
// console.log(firstLi)
// But in future if changes happen then the target element would not look like it

// Create Eement Via HTML
let unList = document.querySelector('.un_list');
let toggleBtn = document.getElementById('un_btn');

toggleBtn.addEventListener('click', ()=>{
    unList.classList.toggle('invisible')
})


unList.innerHTML = unList.innerHTML + '<li>Item 4</li>'

unList.insertAdjacentHTML('beforeend','<li>Item 5</li>')

// Create Element via CreateElement()
let newLi = document.createElement('li');
let newLi1 = document.createElement('li');
let newLi2 = document.createElement('li');
newLi.textContent = `Item 6 (Generated Via append())`;
newLi1.textContent = `Item 8 (Generated Via before() after())`;
newLi.style.backgroundColor = 'blue'
newLi.style.color = 'white'
unList.appendChild(newLi);
unList.append('Item 7');
unList.prepend('Item 0');
unList.lastElementChild.before(newLi1)
unList.lastElementChild.after(newLi1)
