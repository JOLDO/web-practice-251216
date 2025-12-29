// 1. 필요한 요소 선택
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("taskList");

// [New] 검색창 선택
const searchBox = document.getElementById("searchBox");

// [미션 1] 로컬 스토리지 불러오기 (없으면 빈 배열)
// let todoData = /* 코드 작성 */ [];
let todoData = JSON.parse(localStorage.getItem("myTodos")) || [];

// 초기 데이터 그리기
render(todoData);
console.log(todoData);

// 2. 그리기 함수 (재사용 가능하도록 설계됨)
function render(dataArray) {
	listContainer.innerHTML = "";
	dataArray.forEach(function(todo) {
		listContainer.innerHTML += `
			<li>
				<span>${todo.text}</span>
				<div>
					<button onclick="updateTodo(${todo.id})">수정</button>
					<button onclick="deleteTodo(${todo.id})">삭제</button>
				</div>
			</li>
		`;
	});
    console.log(dataArray);
}

// 3. 저장 기능
function save() {
	// [미션 2] 로컬 스토리지에 'myTodos' 이름으로 todoData 저장 (JSON 변환 필수)
	/* 코드 작성 */
    localStorage.setItem("myTodos", JSON.stringify(todoData));
}

// 4. 추가 기능
function addTodo() {
    console.log("클릭");
	if(input.value === "") {
		alert("내용을 입력해주세요.");
		return;
	}

	const newTodo = {
		id: Date.now(),
		text: input.value
	};

	// [미션 3] 배열에 데이터 추가하기
	/* 코드 작성 */
    todoData.push(newTodo);

	save();
	render(todoData);
	input.value = "";
}

addBtn.addEventListener('click', addTodo);

// 5. 삭제 기능
function deleteTodo(id) {
	if(confirm("정말 삭제하시겠습니까?")){
		// [미션 4] filter를 이용해 삭제할 id를 제외한 나머지로 배열 갱신
		// todoData = /* 코드 작성 */;
        todoData = todoData.filter(item => item.id !== id)
		save();
		render(todoData);
	}
}

// 6. 수정 기능
function updateTodo(id) {
	// [미션 5] find를 이용해 수정할 아이템 찾기
	// const item = /* 코드 작성 */;
    const item = todoData.find(todo => todo.id === id)
	if(item) {
		const newText = prompt("수정할 내용:", item.text);
		if(newText !== null && newText.trim() !== "" ) {
			item.text = newText;
			save();
			render(todoData);
		}
	}
}

// 7. [New] 검색 기능
searchBox.addEventListener('keyup', function() {
	const keyword = searchBox.value;

	// [미션 6] 검색 기능 구현하기
	// 1) todoData 배열에서 item.text에 keyword가 '포함'된 것만 filter 하세요. (힌트: includes() 사용)
	// const filteredData = /* 코드 작성 */;
    const filteredData = todoData.filter(item => item.text.includes(keyword));

	// 2) 걸러진 데이터(filteredData)만 화면에 그립니다. (주의: 저장은 하지 않음)
	render(filteredData);
});