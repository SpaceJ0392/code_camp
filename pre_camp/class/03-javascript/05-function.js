// //함수

// //함수 선언식
// function hello (param) {
//     //내용
// }

// //함수 표현식 (익명 함수)
// let hello = function(param) {
//     //내용
// }

// //람다식 (화살표 함수)
// let hello = (param) => {
//     //내용
// }

// //호출은 모두 동등히게 hello(param)


function makeRandom(){
    document.getElementById("target").innerText = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
}

const auth = () => {
    let code = Math.floor(Math.random() * 1000000).toString().padStart(6,"0")
    document.getElementById("target").innerText = code
    document.getElementById("target").style.color = `#${code}`
}   