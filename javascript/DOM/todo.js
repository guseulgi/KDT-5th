const todoInputField = document.querySelector('.input-task');
const todoSendBtn = document.querySelector('.input-btn');
const todoUlist = document.querySelector('.todo-list');

function deleteList(e) {
  e.parentNode.remove();
}

//강사님 코드
let addList = function() {
  if(todoInputField.value === "") {
    todoInputField.setAttribute('placeholder', '내용을 입력하세요');
    return;
  }

  const addLi = document.createElement('li');
  const checkBtn = document.createElement('input');
  const deleteBtn = document.createElement('button');

  checkBtn.setAttribute('type', 'checkbox');
  checkBtn.addEventListener('click', function() {
      if(checkBtn.checked === true) {
        checkBtn.parentNode.style.textDecoration = 'line-through';
      } else {
        checkBtn.parentNode.style.textDecoration = 'none';
      }
  });

  deleteBtn.textContent = '삭제';
  // deleteBtn.addEventListener('click', function(e) {
  //   e.target.parentNode.remove();
  // });

  // deleteBtn.onclick = function() {
  //   this.parentNode.remove();
  // }

  deleteBtn.setAttribute('onclick', 'deleteList(this)')

  addLi.appendChild(checkBtn);
  addLi.append(todoInputField.value);
  addLi.appendChild(deleteBtn);

  todoUlist.appendChild(addLi);

  todoInputField.value = "";
  todoInputField.focus();
};

//내가 작성한 코드
let addItem = function() {
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
};

//이벤트 리스너
todoSendBtn.addEventListener('click', addList);