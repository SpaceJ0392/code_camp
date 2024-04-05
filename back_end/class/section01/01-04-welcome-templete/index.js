function getWelcomeTemplete({ name, age, school, createdAt }) {
    const myTemplete = `
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
    `; //텀플릿 리터럴 - enter, 변수 등이 다 인식된다.

    console.log(myTemplete);
}

getWelcomeTemplete({
    name: "철수",
    age: 12,
    school: "다람쥐 초등학교",
    createdAt: "2024-04-05",
});
