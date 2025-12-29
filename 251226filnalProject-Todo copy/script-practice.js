const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchBox = document.getElementById("searchBox");

let todoList = JSON.parse(localStorage.getItem("my-todo")) || [];

render(todoList);
function render(data) {
    taskList.innerHTML = "";

    data.forEach(todoData => {
       taskList.innerHTML += `
        <li>
            <span>${todoData.text}</span>
            <div>
                <button class="editButton" onclick="editList(${todoData.id})">수정</button>
                <button class="deleteButton" onclick="deleteList(${todoData.id})">삭제</button>
            </div>
        </li>
        `; 
    });
}
function save() {
    localStorage.setItem("my-todo", JSON.stringify(todoList))
}
function addList() {
    if(taskInput.value === "") {
        alert("빈값");
        return;
    }

    todoList.push({"id": Date.now(), "text": taskInput.value});
    save();
    render(todoList);
}

function editList(id) {
    const item = todoList.find(item => item.id === id)
    if(item !== null) {
        const newData = prompt("aa", item.text);
        if(newData !== null && newData.trim("") !== "") {
            item.text = newData;
            save();
            render(todoList);
        }
    }
}

function deleteList(id) {
    todoList = todoList.filter(item => item.id !== id);
    save();
    render(todoList);
}

addBtn.addEventListener('click', addList);
searchBox.addEventListener('keyup', function() {
    const data = todoList.filter(item => item.text.includes(this.value))
    render(data);
})