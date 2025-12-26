// 1 필요한 요소 선택.
const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

let todoList = [];

function render() {

}

// 2 버튼 클릭 이벤트 리스너 설정.
btn.addEventListener('click', function () {
    const todo = input.value;
    // 2-2 기본 유효성 검사. todo 내용이 비어 있으면, 실행 안함.
    if (todo === "") {
        alert("할 일을 입력해주세요.");
        return;
    }

    // const sameIndex = todoList.findIndex(todoElement => todoElement.name === todo);
    // if (sameIndex === -1) {
    //     const li = document.createElement("li");
    //     const del = document.createElement("button");

    //     todoList.push({ name: todo, count: 1 });
    //     li.dataset.name = todo;
    //     li.textContent = todo + "-" + 1;
    //     del.textContent = "삭제";
    //     del.addEventListener('click', function () {
    //         this.parentElement.remove();
    //         todoList = todoList.filter(todoElement => todoElement.name !== todo);
    //     });
    //     li.appendChild(del);
    //     list.appendChild(li);
    //     input.value = "";
    // } else {
    //     const li = document.querySelector(
    //         `li[data-name="${todo}"]`
    //     );
    //     todoList[sameIndex].count++
    //     const updateCount = todoList[sameIndex].count;
    //     li.firstChild.textContent = todo + "-" + updateCount;
    //     input.value = "";
    // }
    // // 2-3 목록에 태그를 추가하기.
    // // 방법1
    // // list.innerHTML += `
    // // <li>
    // //     ${todo}
    // //      <button onclick="this.parentElement.remove()">삭제</button>
    // // </li>`;
    // 방법2
    // 방법2-1. li 태그를 만들기.
    const li = document.createElement('li');
    // 방법2-1-2. li 태그의 내용을 입력한 todo의 내용을 넣기
    li.textContent = todo;
    // 방법2-2. 삭제 버튼 만들기
    const btn = document.createElement('button');
    // 방법2-2-2. 버튼에 삭제내용 넣기
    btn.textContent = "삭제";
    // 방법2-3. 삭제 기능 연결(클릭시 실행)
    btn.addEventListener('click', function () {
        // 방법2-3-2 버튼 클릭시, 부모 li를 삭제
        this.parentElement.remove();
    });
    // 방법2-4. 위의 기능 조립하기
    // li 태그의 자식으로 버튼 넣기.
    // <li> <button> </button> </li>
    li.appendChild(btn);
    // <ul> <li> <button> </button> </li> </ul>
    list.appendChild(li);
    // 2-4 입력창을 비우기 작업.
    input.value = "";
});