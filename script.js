const addTodoBtn = document.querySelector('#add-new-todo-btn')
const newTodoInput = document.querySelector('#new-todo-input')
const ulTodoList = document.querySelector('#todo-list')

const addTodoFn = function () {
 
    const inputValue = newTodoInput.value;
    const listItem = document.createElement('li');
    listItem.classList.add('single-todo');
 
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', 'single-todo-check');
  
    checkBox.addEventListener('click', (e) => {
      console.log('todo checked', e.target.checked);
      const checkState = e.target.checked;  
      checkBox.nextElementSibling.classList.toggle('cross-line');
        
    });
  
    // paragraph
    const todoText = document.createElement('p');
    todoText.setAttribute('class', 'single-todo-text');
    todoText.innerText = inputValue;
  
    // edit button
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.addEventListener('click', () => {
        if(todoText.contentEditable = true){
           editBtn.innerText="Done"
           editBtn.style.backgroundColor = "red"
           

       /* const doneBtn = document.createElement('button')
        doneBtn.setAttribute('class', 'doneBtn')
        doneBtn.addEventListener("click", ()=>{
          todoText.target.value = doneBtn
          doneBtn.style.visidbility = "visible"
          doneBtn.style.backgroundColor = "red"*/
        }else if(todoText.contentEditable = false){
            editBtn.innerText="Edit";
            editBtn.style.backgroundColor = "green"
        }
        
        
      })

      
      

    
  
    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.addEventListener('click', () => {
    console.log('delete btn clicked');
  
      
      deleteBtn.parentElement.remove();
    });
  
    listItem.appendChild(checkBox);
    listItem.appendChild(todoText);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    
    if (inputValue !== '') {
      ulTodoList.appendChild(listItem);
    }
  
    newTodoInput.value = '';
  };
  
  
  addTodoBtn.addEventListener('click', addTodoFn);
