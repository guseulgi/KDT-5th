const todoInputField = document.querySelector('.input-task');
const todoSendBtn = document.querySelector('.input-btn');
const todoUlist = document.querySelector('.todo-list');

todoSendBtn.addEventListener('click', function() {
  if(todoInputField.value === "") {
    todoInputField.setAttribute('placeholder', '내용을 입력하세요!');
    return;
  }

  const todoLiEl = document.createElement('li');
  const todoCheckbox = document.createElement('input');
  const todoContent = document.createElement('span');
  const todoButton = document.createElement('button');

  todoCheckbox.setAttribute('type', 'checkbox');
  todoCheckbox.onclick = function(e) {
    if(todoCheckbox.checked === true) {
      todoContent.setAttribute('style', 'text-decoration: line-through');
    }
  }
  todoButton.innerHTML = '삭제';
  todoButton.onclick = function(e) {
    e.target.parentNode.remove();
  };  

  //입력된 값 넣어주기
  todoContent.innerText = (todoInputField.value);
  
  //리스트에 내용 추가
  todoLiEl.appendChild(todoCheckbox);
  todoLiEl.appendChild(todoContent);
  todoLiEl.appendChild(todoButton);

  //최종 리스트 추가
  todoUlist.appendChild(todoLiEl);

  //인풋필드 초기화
  todoInputField.value = "";
  todoInputField.focus();
});






