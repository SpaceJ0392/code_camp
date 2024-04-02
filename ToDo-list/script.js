const todoInput = document.querySelector("#Todo-input");
const savedTodoList = JSON.parse(localStorage.getItem("data"));
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));

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
        if (event.keyCode === 13 && todoInput.value.trim() !== "") {
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

/** geolocation **/
const accessToGeo = function ({ coords }) {
    /** 구조 분해 할당 */
    const { latitude, longitude } = coords;

    const positionObj = {
        latitude,
        longitude,
    }; // 키와 값이 같으면 생략 가능 -- shorthead property

    weatherSearch(positionObj);
};

const askeForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err);
    });
};

/**JSON 데이터 활용 */
const weatherDataActive = function ({ location, weather }) {
    const weatherMainList = [
        "Clear",
        "Clouds",
        "Drizzle",
        "Rain",
        "Snow",
        "Thunderstorm",
    ];
    weather = weatherMainList.includes(weather) ? weather : "Fog";
    const locationNameTag = document.querySelector("#location-name-tag");
    locationNameTag.textContent = location;
    document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

    if (
        !savedWeatherData ||
        savedWeatherData.location !== location ||
        savedWeatherData.weather !== weather
    ) {
        localStorage.setItem(
            "saved-weather",
            JSON.stringify({ location, weather })
        );
    }
};

/** openweatherMap API */
const weatherSearch = function ({ latitude, longitude }) {
    const APIkey = ""; //TODO - commit 시 삭제
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
    fetch(url)
        .then((res) => res.json()) //JSON.parse()는 응답 바디만 존재할 때 사용 가능 (header 있으면 사용 불가)
        .then((json) => {
            const weatherData = {
                location: json.name,
                weather: json.weather[0].main,
            };
            weatherDataActive(weatherData);
        })
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

if (savedTodoList) {
    for (const item of savedTodoList) {
        createTodo(item);
    }
}

askeForLocation();

if (savedWeatherData) {
    weatherDataActive(savedWeatherData);
}
