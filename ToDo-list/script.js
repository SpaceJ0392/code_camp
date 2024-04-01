const todoInput = document.querySelector("#Todo-input");
const savedTodoList = JSON.parse(localStorage.getItem("data"));

const createTodo = function (storegeData) {
    let todoContents = todoInput.value;
    if (storegeData) {
        todoContents = storegeData.contents;
    }

    /** JS로 HTML 태그 생성 **/
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    /** addEventlistener */
    newBtn.addEventListener("click", () => {
        newLi.classList.toggle("complete"); //li 태그에 새로운 class 추가
        saveItemsFn();
    });

    newLi.addEventListener("dblclick", () => {
        newLi.remove(); //더블 클릭 시, 삭제
        saveItemsFn();
    });

    if (storegeData?.complete) {
        //(storegeData && storegeData?.complete)로 조건 부여도 가능
        //? : optional chaining (객체가 undefined면, ? 이후는 실행 X)
        //toggle로 부여해서 차후, complete 추가 필요
        newLi.classList.add("complete");
    }

    /** appendChild */
    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan); // 태그 자녀화

    //display
    document.querySelector("#Todo-list").appendChild(newLi);

    //save data in webstorage
    saveItemsFn();
};

const keyCodeCheck = function () {
    /** JS로 키보드 이벤트 받기 */
    window.onkeydown = (event) => {
        if (event.keyCode === 13 && todoInput.value !== "") {
            createTodo();
            todoInput.value = ""; //입력 초기화
        }
    };
};

//console.dir() //: 문서 참고
//window : 전역 객체 (화면 전체)

const deleteAll = function () {
    const liList = document.querySelectorAll("#Todo-list li");
    for (const li of liList) {
        li.remove(); //전체 삭제
    }
    saveItemsFn();
    localStorage.removeItem("data");
};

const saveItemsFn = function () {
    const todoList = document.querySelector("#Todo-list");
    const saveItems = [];
    for (const li of todoList.children) {
        todoListObj = {
            contents: li.querySelector("span").textContent,
            complete: li.classList.contains("complete"),
        };
        saveItems.push(todoListObj);
    }

    saveItems.length === 0
        ? localStorage.removeItem("data")
        : localStorage.setItem("data", JSON.stringify(saveItems));

    // if (saveItems.length === 0) {
    //     //빈 배열이면 실행 X
    //     localStorage.removeItem();
    // } else {
    //     localStorage.setItem("data", JSON.stringify(saveItems)); //JSON : 텍스트형 데이터 포맷 (통신 시 많이 사용)
    // }
};

if (savedTodoList) {
    for (const item of savedTodoList) {
        createTodo(item);
    }
}

/** geolocation **/
const accessToGeo = function (position) {
    const positionObj = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    };

    weatherSearch(positionObj);
};

const askeForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err);
    });
};

askeForLocation();

/** openweatherMap API */
const weatherSearch = function (position) {
    const APIkey = ""; //TODO - commit 시 삭제
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${APIkey}`;
    fetch(url)
        .then((res) => res.json()) //JSON.parse()는 응답 바디만 존재할 때 사용 가능 (header 있으면 사용 불가)
        .then((json) => console.log(json.name, json.weather[0].description))
        .catch((err) => console.error(err)); //then에서 error가 발생하면 catch로 넘어감
};

/** Promise 객체 */
const promiseTest = function () {
    return new Promise((resolver, reject) => {
        //resolver(100); // fulfilled

        setTimeout(() => {
            resolver(100);
        }, 5000); //pending

        //reject("error"); //rejected
    });
};

// promiseTest().then((res) => {
//     console.log(res);
// });
