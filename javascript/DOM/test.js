let orangeEl = document.querySelector('.orange');
let skyblueElId = document.getElementById('skyblue');
let secondLi = document.querySelector('ul>li:nth-child(2)');

secondLi.classList.add('orange');
console.log(orangeEl, skyblueElId, secondLi);

if(orangeEl.classList.contains('orange') === true) {
  orangeEl.classList.remove('orange');
}
console.log(orangeEl);