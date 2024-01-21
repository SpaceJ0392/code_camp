//console.log("콘솔로그 출력")

//변수
let name1 = "let"
console.log(name1) //값이 없으면 undefined

//let은 재할당 가능 but, 변수 이름 재사용 X
//var는 재할당, 재사용 다 가능 (재사용으로 데이터가 꼬일 수 있음 - 안씀)
//const 상수 지정 - 재할당, 재사용 다 안됨.

const name2 = "const"
console.log(name2)

//배열
let array = ["ele1", 1, "ele3"] //js 배열은 파이썬처럼 다양한 데이터 가능.
console.log(array)


//dictionary  -- Object라고 하는 듯...
//딕션어리는 키 - 값 인데, 키에는 굳이 문자열에 대해서도 따옴표 필요X

//부르는 방법은 2개
//1. dot case => dict.key -- 많이 사용
//2. bracket case =>dict["key"]

//일반적으로 1번의 방법을 많이 사용하며, 사실 1, 2를 사용할 때, 사용하는 경우 자체가 다르다.

//1번 방식에서 키가 없는 것을 대입하여  호출하면, 그냥 undefined가 나옴.