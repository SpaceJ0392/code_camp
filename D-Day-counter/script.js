//자바 스크립트 작성 가능
/*자바 스크립트는 브라우저를 동적으로 컨트롤하기 위해
        탄생하였으므로 당연하게도, HTML과 연동하여, 내부에 작성 가능*/

/*HTML을 랜더링 하는 과정에 JS를 읽는 과정이 포함되어 았어 
        스크립트 코드는 실행된다.*/

const messageContainer = document.querySelector("#d-day-message");
//messageContainer.textContent = "D-Day를 입력해주세요."; //html에서 script 태그를 만나면, js를 먼저 해석해서, error
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";

document.querySelector("#d-day-container").style.visibility = "hidden"; //css도 접근 가능

/** 함수 **/
const output = function () {
    console.log("함수를 실행했어요");
};

const dateFormMaker = function () {
    /** query Selector **/
    const inputYear = document.querySelector("#target-year-input").value;
    const inputMonth = document.querySelector("#target-month-input").value;
    const inputDay = document.querySelector("#target-day-input").value;

    //querySelector를 이용하면, 태그 또는 id, class 값을 기준으로 가져올 수 있다.
    //document 객체는 해당 html 전체를 가리킨다.
    //console.log(inputYear, inputMonth, inputDay);

    //return inputYear + '-' + inputMonth + '-' + inputDay;
    //혹은
    return `${inputYear}-${inputMonth}-${inputDay}`; //템플릿 리터럴
};

/** 날짜 객체 Date **/
//js 에는 날짜 데이터를 형식에 맞추어 돌려주는 Date 객체가 존재한다.
const counterMaker = () => {
    const nowDay = new Date(); //지역 표준시 기준 반환 (오전 9시 기준)
    const targetDay = new Date(dateFormMaker()).setHours(0, 0, 0, 0); // 자정 기준으로 변환
    const remaining = (targetDay - nowDay) / 1000; //밀리초 단위로 반환해서 1000으로 나눔

    /** 조건문 **/
    // remaining === 0 이면 end
    if (remaining <= 0) {
        document.querySelector("#d-day-container").style.visibility = "hidden";
        messageContainer.style.visibility = "visible";
        messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
        return;
    } else if (isNaN(remaining)) {
        //잘못된 날짜는 유효한 시간대가 아닙니다.
        document.querySelector("#d-day-container").style.visibility = "hidden";
        messageContainer.style.visibility = "visible";
        messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
        return;
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining % 60),
    };

    const documentArr = ["days", "hours", "min", "sec"];
    const documentObj = {
        days: document.getElementById("days"),
        hours: document.querySelector("#hours"),
        min: document.querySelector("#min"),
        sec: document.querySelector("#sec"),
    };

    // document.getElementById("days").textContent = remainingObj["remainingDate"];
    // document.querySelector("#hours").textContent = remainingObj.remainingHours;
    // document.querySelector("#min").textContent = remainingObj.remainingMin;
    // document.querySelector("#sec").textContent = remainingObj.remainingSec;

    /** 반복문 **/
    // for (let i = 0; i < Object.keys(documentObj).length; i++) {
    //     documentObj[Object.keys(documentObj)[i]].textContent =
    //         remainingObj[Object.keys(remainingObj)[i]];
    // }

    //혹은 (for-in문 사용 : 객체에 사용)
    // let i = 0;
    // for (let key in documentObj) {
    //     console.log(key);
    //     documentObj[key].textContent =
    //         remainingObj[Object.keys(remainingObj)[i]];
    //     i++; // i = i + 1
    // }

    //혹은 (for - of문 : 배열에 사용)
    let i = 0;
    for (let tag of documentArr) {
        document.getElementById(tag).textContent =
            remainingObj[Object.keys(remainingObj)[i]];
        i++;
    }

    // documentObj["days"].textContent = remainingObj["remainingDate"];
    // documentObj["hours"].textContent = remainingObj.remainingHours;
    // documentObj["min"].textContent = remainingObj.remainingMin;
    // documentObj["sec"].textContent = remainingObj.remainingSec;
};

const starter = () => {
    document.querySelector("#d-day-container").style.visibility = "visible";
    messageContainer.style.visibility = "hidden";
    counterMaker();
};
