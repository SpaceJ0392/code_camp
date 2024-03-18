const createTodo = function (todoInput) {
    /** JS로 HTML 태그 생성 **/
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    /** addEventlistener */
    newBtn.addEventListener("click", () => {
        newLi.classList.toggle("complete"); //li 태그에 새로운 class 추가
    });

    /** appendChild */
    newSpan.textContent = todoInput.value;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan); // 태그 자녀화

    //display
    document.querySelector("#Todo-list").appendChild(newLi);
};

const keyCodeCheck = function () {
    const todoInput = document.querySelector("#Todo-input");

    /** JS로 키보드 이벤트 받기 */
    window.onkeydown = (event) => {
        if (event.keyCode === 13 && todoInput.value !== "") {
            createTodo(todoInput);
            todoInput.value = ""; //입력 초기화
        }
    };
};

//console.dir() //: 문서 참고
//window : 전역 객체
