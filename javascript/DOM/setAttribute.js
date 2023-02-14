const boxEl = document.querySelector('.box');
const inputEl = document.querySelector('input');

boxEl.setAttribute('style', 'background-color:orange'); //적용 안됨
boxEl.setAttribute('style', 'height: 300px; background-color:#ccc;'); //적용 됨
inputEl.setAttribute('placeholder', '통합검색');

console.log(boxEl.textContent); //box
boxEl.textContent = 'Kdt';


const divOneEl = document.querySelector('.div1');
const divTwoEl = document.querySelector('.div2');

divOneEl.innerHTML = '<button>Click!</button>';
divTwoEl.innerText = '<button>Click!</button>';