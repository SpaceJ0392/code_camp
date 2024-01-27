function changeFocus(idx, limit) {
    let num = document.getElementById(`num${idx}`).value

    if (num.length === limit) {
        document.getElementById(`num${idx + 1}`).focus()
    }
}

function enabledButton() {
    let num = []
    for (i = 1; i <= 3; i++){
        num.push(document.getElementById(`num${i}`).value)
    }

    let total_num = ""
    num.forEach(n => {total_num += n})

    if (total_num.length === 11){
        document.getElementById("auth_btn").disabled = false
    } else {
        document.getElementById("auth_btn").disabled = true
        document.getElementById("submit_btn").disabled = true
        AuthFinBtnReset()
    }
}

function sendAuthNum(){
    document.getElementById("auth_num").innerText = Math.floor(Math.random() * 1000000).toString().padStart(6, "0")
    document.getElementById("auth_btn").disabled = true
}

let interval

function timer(){
    document.getElementById("auth_fin_btn").disabled = false
    let time = 179

    interval = setInterval(() => {
        if (time >= 0){
            document.getElementById("time").innerText = Math.floor(time / 60) + ':' + (time % 60).toString().padStart(2, "0")
            time--
        } else {
            AuthFinBtnReset()
        }
    }, 1000)
}

function auth(){
    alert("인증이 완료되었습니다.")
    AuthFinBtnReset()
    document.getElementById("auth_fin_btn").innerText = "인증 완료"
    document.getElementById("submit_btn").disabled = false
}

function AuthFinBtnReset() {
    document.getElementById("auth_num").innerText = "000000"
    document.getElementById("time").innerText = "3:00"
    document.getElementById("auth_fin_btn").innerText = "인증 확인"
    document.getElementById("auth_fin_btn").disabled = true
    clearInterval(interval)
}

function validInfo(){

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let passwordChecker = document.getElementById("password_checker").value
    let location = document.getElementById("location").value
    let genderMan = document.getElementById("gender_man").checked
    let genderWoman = document.getElementById("gender_woman").checked

    let isValid = true
    if (email.includes("@")){
        document.getElementById("email_error").innerText = ""
    } else {
        //골뱅이 없음
        document.getElementById("email_error").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    }

    if (name !== ""){
        document.getElementById("name_error").innerText = ""
    } else {
        document.getElementById("name_error").innerText = "이름은 필수 작성 사항입니다."
        isValid = false
    }

    if (password !== ""){
        document.getElementById("password_error").innerText = ""
    } else {
        document.getElementById("password_error").innerText = "비밀번호를 지정해주세요."
        isValid = false
    }

    if (passwordChecker !== "" && password === passwordChecker){
        document.getElementById("password_checker_error").innerText = ""
    } else {
        document.getElementById("password_checker_error").innerText = "위에서 작성한 비밀번호와 일치해야 합니다."
        isValid = false
    }

    if (location !== "지역을 선택하세요"){
        document.getElementById("location_error").innerText = ""
    } else {
        document.getElementById("location_error").innerText = "지역을 선택해 주세요."
        isValid = false
    }

    if (genderMan === false && genderWoman === false){
        document.getElementById("radio_error").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("radio_error").innerText = ""
    }
    
    if (isValid) {
        alert("코드 캠프 가입을 축하합니다!")
    }
}