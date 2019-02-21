const styleNames = {
    todoItem: 'todoContainer',
    todoCheck: 'todoCheckbox',
    todoText: 'todoText',
    todoTextChecked: 'todoTextChecked',
  }
  
const list = document.getElementById('todoList')
const itemCountDiv = document.getElementById('itemCount')
const uncheckedCountDiv = document.getElementById('uncheckedCount')
  
let todos = []

function checkCount(){
  var y = todos.length
    for(i = 0; i < todos.length; i++){
      if(todos[i].checked === true){
           y--
      }
    }
  return y
}

function Todo(name) {
  this.name = name || 'New TODO'
  this.element = null
  this.checked = false
  this.checkbox = null
}
  
Todo.prototype.check = function() {
  this.checked = !this.checked
  if (this.element && this.checkbox) {
    this.checkbox.checked = this.checked
  } else {
    this.element = makeTodo(this)
  }
}
  
function makeTodo(todo) {
  if (todo.element) return todo.element
  
  const checkbox = document.createElement('input')
  checkbox.className = styleNames.todoCheck
  checkbox.type = 'checkbox'
  checkbox.checked = todo.checked

  checkbox.todoRef = todo
  checkbox.onchange = check
  
  const span = document.createElement('span')
  span.className = styleNames.todoText
  span.innerHTML = todo.name
  
  const li = document.createElement('li')
  li.className = styleNames.todoItem
  li.appendChild(checkbox)
  li.appendChild(span)
  
  todo.element = li
  todo.checkbox = checkbox
  
  return li
}
  
function make() {
  list.innerHTML = ''
  todos.map(makeTodo).forEach(todo => list.appendChild(todo))
  uncheckedCountDiv.innerHTML = checkCount()
  itemCountDiv.innerHTML = todos.length
  return false
}
  
function addTodo() {
  var name = document.getElementById("inputTodo").value
  if (formValidate(name)){
    console.log("New todo made")
    const todo = new Todo(name)

    //clears input box
    document.getElementById("inputTodo").value = ''
    todos.push(todo)
    console.log("Number of items: " + todos.length)
    return make()
  } else {

    console.log("Undesired input, try again")
    return false
  }
}
  
function check() {
  this.todoRef.check()
  return make()
}  

function formValidate(name){
  if (name === ''){
    alert("Must have input to add to-do!")
    return false
  }
  return true
}
