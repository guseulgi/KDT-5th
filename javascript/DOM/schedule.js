const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const inputField = document.querySelector("#content");
// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

const info = document.querySelector('.year-month');

let clickDate = function(e) {
  //캐싱
  targetEl = e.target;
  tag = e.target.tagName;
  today = info.textContent;

  if(tag === "P" && !(tag.textContent === "")) {
    date.value = `${today.trim()} ${targetEl.childNodes[0].textContent}일`;
  } else if (tag === "TD" && !(targetEl.children[0].textContent === "")) {
    date.value = `${today.trim()} ${targetEl.children[0].textContent}일`;
  }
}

let writeSchedule = function() {
  if(inputField.value === "" && date.value === "") {
    inputField.placeholder = "내용을 입력하시오";
    date.placeholder = "날짜를 선택하시오";
    return;
  } else if (inputField.value === "") {
    inputField.placeholder = "내용을 입력하시오";
    return;
  } else if (date.value === "") {
    date.placeholder = "날짜를 선택하시오";
    return;
  }

  const divEl = document.createElement('div');
  divEl.innerText = inputField.value;
  divEl.addEventListener('click', function(el) {
    el.target.remove();
  });

  if(targetEl.tagName === "P") {
    targetEl.parentNode.appendChild(divEl);
  } else if (targetEl.tagName === "TD") {
    targetEl.appendChild(divEl);
  }

  inputField.value = "";
  inputField.focus();
}

//이벤트 리스너
calendar.addEventListener('click', clickDate);