const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  //Counts

  let todos = []
function count(){
    
}
function Todo(name){
    this.name = name || 'new todo'
    this.checked = false
    this.element = null
    this.checkbox = null
}

function makeTodo(todo){
  const checkbox = document.createElement('input')
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.type = 'checkbox'
  checkbox.checked = todo.checked

  const span = document.createElement('span')
  span.className = classNames.TODO_TEXT
  span.setAttribute('contenteditable', 'true')
  span.innerHTML = todo.name

  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.appendChild(checkbox)
  li.appendChild(span)

  todo.element = li
  todo.checkbox = checkbox

  return li
}

function make(){
    list.innerHTML = ''
    todos.map(makeTodo).forEach(todo => list.appendChild(todo))
    uncheckedCountSpan.innerHTML = todos.length
    itemCountSpan.innerHTML = todos.length
    return false
}

function addTodo(name){
    const todo = new Todo(name)
    todos.push(todo)
    return make()
}

