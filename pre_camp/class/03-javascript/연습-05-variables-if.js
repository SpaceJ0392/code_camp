//데이터 타입과 연산자

//string + number는 string
//num - str, num / str, num - str은 num으로 나옴

// === (엄격한 동치 연산자 : 데이터 타입 및 값 비교), == (느슨한 동치 연산자 : 값만 비고 1 == '1'은 true가 된다.)
//!== 가 엄격한 동치 연산자다...

//null은 개발자가 입력한 빈 값이고, undefined는 컴퓨터가 부여하는 빈 값으로 봐라. (사실 둘다 입력할 수 있음.)


//조건문

//거짓 같은 값을 입력하면, if문은 거짓으로 판단
//"", -0, 0, 0n, false, null, undefined, ... (mdn 참고)

const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}

if(profile.age >= 20) {
    console.log("성인입니다.")
} else if (profile.age >= 8) { //&& profile.age < 20) { : 코드 최적화 -- 이미 앞에서 점검함...
    console.log("학생입니다")
} else if(profile.age > 0) {
    console.log("어린이입니다.")
} else {
    console.log("잘못 입력하셨습니다.") //에러 핸들링
}

//반복문

//pass

//수학 객체

//random 함수는 * n의 크기의 숫자를 만들어 낸다. 여기에 floor를 적용하면, 맨 앞 숫자가 0인 경우는 제거되는데 (숫자이므로)
//이를 String화 하고, padStart()를 통해 앞에 0을 채운다.

String(Math.floor(Math.random() * 1000000)).padStart(6,"0")