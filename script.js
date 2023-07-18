//DOM Manipulation

// getelementById()
let title = document.getElementById('header');
console.log(title);

//getelementsByClassname()
// will return an array of all elements with same class name
const listItem = document.getElementsByClassName('list-item');
console.log(listItem);

// getElementByTagName()
// will return an array of all tag elements
const liItem = document.getElementsByTagName('li');
console.log(liItem);

//querySelector()
// will select the frist element which is asigned to
//in this case it will select the first div
let container = document.querySelector('div');
console.log(container);

//will retrn an array of seleccted element
let containers = document.querySelectorAll('div');
console.log(containers);
