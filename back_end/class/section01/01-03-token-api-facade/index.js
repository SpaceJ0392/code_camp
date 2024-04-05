function checkPhone(request) {
    if (10 > request.length > 11) {
        console.error("휴대폰 번호를 다시 입력하세요");
        return false;
    }
    return true;
}

function getToken() {
    // prettier-ignore
    return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
}

function sendTokenToSNS(request, authToken) {
    console.log(request, authToken);
}

// 기능을 함수로 감싸서, 추상화한다 -> 퍼사드 패턴 (성으로 감싼다.)
function createTokenOfPhone(request) {
    // request : 매개변수(parameter)
    if (!checkPhone(request.replaceAll("-", ""))) return; //1. 휴대폰 번호 자리 수 확인 (10 ~ 11자리) : 검증
    sendTokenToSNS(request, getToken()); //2. 인증 토큰 생성 //3. 토큰 전달
}

createTokenOfPhone("010-1234-5678"); //010-1234-5678 : 인자(argument)
