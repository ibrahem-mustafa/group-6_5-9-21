// have input & button
// get input value and create todo
// render todo into dom


// each todo have a (X) button
// button have an event listener (click) that deletes todo


// fetch todos
// loop through todos and render each todo into dom


// Requirements
// create dom element function
// render todo function
// fetch todos function




/* 
    {
        class: "todo title",
        style: "font-size:28px"
    }
*/

const appContainer = document.querySelector('.container')


const todoListContainer = appContainer.querySelector('.todoListContainer');

let todoList = todoListContainer.querySelector('ul.todoList')

if (!todoList) {
    todoList = createElement('ul', {class: 'todoList'})
    todoListContainer.appendChild(todoList)
}


const input = document.getElementById('todoInput')
const button = document.getElementById('formButton')


button.addEventListener('click', () => {
    const todoData = {
        id: new Date().getTime(),
        title: input.value
    }
    renderTodo(todoData, todoList);


    input.value = ''
})

// * todoTitle (x)

function renderTodo(todoData, list) {

    const li = createElement('li', {class:"todo", id: todoData.id}, todoData.title)

    const button = createElement('button', {class: 'btn btn-danger'}, 'X')

    button.addEventListener('click', () => {
        list.removeChild(li)
    })

    li.appendChild(button)

    list.appendChild(li)
    
}

(async function fetchTodos() {
    const res = await fetch("/todos");
    const data = await res.json()
    
    const todosSlice = data.slice(0, 10)
    
    todosSlice.forEach((todo) => renderTodo(todo, todoList));

})()



function createElement(tag, attributes, text) {
    const element = document.createElement(tag)
    const keys = Object.keys(attributes);
    keys.forEach(key => {
        element.setAttribute(key, attributes[key])
    })

    if (text && text.trim()) {
        element.textContent = text
    }
    return element
}
