console.log('Hello creating');
// access the parent element
const ul = document.querySelector('ul');
//creating element
const li = document.createElement('li');
//adding text to new node
li.innerText = 'Top Gun';
// append the li to its parent
li.setAttribute('id', 'newMovie');
//adding class for the new li element
li.classList.add('list-item');

//append the new element
ul.appendChild(li);
//styling the new added element
let newLi = document.querySelector('#newMovie');

newLi.addEventListener('click', function (e) {
  if (!newLi.getAttribute('id')) {
    newLi.setAttribute('id', 'newMovie');
    newLi.style.color = 'white';
    newLi.innerText = 'Top-Gun';
  } else {
    //remove the added atribut id
    newLi.removeAttribute('id');
    newLi.style.color = 'black';
    newLi.innerText += ' ***';
  }
});
