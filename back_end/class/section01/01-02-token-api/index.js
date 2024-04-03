function createTokenOfPhone(request) {
    // request : 매개변수(parameter)
    //1. 휴대폰 번호 자리 수 확인 (10 ~ 11자리) : 검증
    request = request.replaceAll("-", "");
    if (10 > request.length > 11) {
        console.error("휴대폰 번호를 다시 입력하세요");
        return;
    }

    //2. 인증 토큰 생성
    // prettier-ignore
    const authToken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

    //3. 토큰 전달
    console.log(authToken);
    return authToken;
}

createTokenOfPhone("010-1234-5678"); //010-1234-5678 : 인자(argument)
