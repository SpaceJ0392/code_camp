import { vaildEmail, getTemplete, sendTempleteToSMS } from "./email.js";
import { getToday } from "./utils.js";

function createUser({ name, age, school, email }) {
    // 이메일 검증
    if (!vaildEmail(email)) return;

    //이메일에 환영 메시지 전달
    const welcomeTemplete = getTemplete({ name, age, school });
    sendTempleteToSMS(email, welcomeTemplete);
}

createUser({
    name: "철수",
    age: 12,
    school: "다람쥐 초등학교",
    email: "a@a.com",
    //createdAt: getToday(),
});

/** yarn 로그 */

//처음 import하면 import 뭔지 몰라서 error가 난다.
//cmd에 yarn init하면, package.json이 만들어지며,
//여기에 이후 올리는 라이브러리의 히스토리가 남는다.

// "type": "module" 여야 import 가능 (예전엔 commonjs)
