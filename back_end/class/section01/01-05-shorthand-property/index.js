const [name, age, school] = ["철수", "12", "다람쥐 초등학교"];

//const profile = { name:name, age:age, school:school };
// 또는
const profile = { name, age, school };
//short-hand-property (키와 value가 같은 경우 생략 가능)

function test({ name, age, school }) {
    //paramerter는 여기서는 구조분해 할당(destructuring) (short-hand-property가 아님)
    console.log(name);
    console.log(age);
    console.log(school);
}

test(profile);
//혹은
test({ name, age, school });
//이게 좋은 이유는 키 값을 바탕으로 받아서,
//순서 상관없이 데이터를 받을 수 있다는 점이다. -> 실수 최소화 가능
