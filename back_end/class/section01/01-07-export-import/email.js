import { getToday } from "./utils.js";

export function vaildEmail(email) {
    if (email === undefined || email.includes("@") === false) {
        console.error("잘못된 이메일 형식입니다.");
        return false;
    }
    return true;
}

export function getTemplete({ name, age, school }) {
    return `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!!!</h1>
            <hr/>
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${getToday()}</div>
        </body>
    </html>
    `;
}

export function sendTempleteToSMS(email, templete) {
    console.log(email, templete);
}
