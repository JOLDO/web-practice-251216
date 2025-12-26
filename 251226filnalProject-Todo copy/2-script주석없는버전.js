// 1 필요한 요소 선택.
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('taskList');

let todoList = [];

let todoData = [];
function render(dataArray) {
	listContainer.innerHTML = "";

	todoData.forEach(function(todo) {
		listContainer.innerHTML += `
		<li>
			<span>${todo.text}</span>
			<div>
				<button class="edit-btn" onclick="updateTodo(${todo.id})">
					수정
				</button>
				<button class="del-btn" onclick="deleteTodo(${todo.id})">
					삭제
				</button>
			</div>
		</li>
		`;
	});
}

function addTodo() {
    if(input.value === "") {
        alert("내용을 필수로 입력해주세요.");
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: input.value
    }

    todoData.push(newTodo);
    save();
    render(todoData);
    input.value = "";
}

addBtn.addEventListener('click', addTodo)

function deleteTodo(id) {
    if(confirm("정말 삭제하시겠습니까?")){
        todoData = todoData.filter(item => item.id !==id);
        save();
        render(todoData);
    }
}

function save() {
	localStorage.setItem('myTodos', JSON.stringify(todoData));
}