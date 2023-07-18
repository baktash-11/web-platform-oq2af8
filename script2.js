console.log('Am i running?');

document.querySelector('.container').style.backgroundColor = '#FA824C';
document.querySelector('.container').style.width = '600px';
document.querySelector('.container').style.margin = '0 auto';
document.querySelector('.container').style.padding = '20px';
document.querySelector('.container').style.borderRadius = '5px';

document.querySelector('#header').style.color = '#FAFFFD';
const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = '#FAFFFD';
  listItems[i].style.color = '#252627';
  listItems[i].style.cursor = 'help';
}
