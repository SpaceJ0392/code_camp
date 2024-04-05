function vaildEmail(email) {
    if (email === undefined || email.includes("@") === false) {
        console.error("잘못된 이메일 형식입니다.");
        return false;
    }
    return true;
}

function getTemplete({ name, age, school, createdAt }) {
    return `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!!!</h1>
            <hr/>
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${createdAt}</div>
        </body>
    </html>
    `;
}

function sendTempleteToSMS(email, templete) {
    console.log(email, templete);
}

function createUser({ name, age, school, email, createdAt }) {
    // 이메일 검증
    if (!vaildEmail(email)) return;

    //이메일에 환영 메시지 전달
    const welcomeTemplete = getTemplete({ name, age, school, createdAt });
    sendTempleteToSMS(email, welcomeTemplete);
}

createUser({
    name: "철수",
    age: 12,
    school: "다람쥐 초등학교",
    email: "a@a.com",
    createdAt: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }),
});
