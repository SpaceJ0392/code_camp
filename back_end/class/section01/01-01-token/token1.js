console.log("hello world");

/** 
CLI 명령어
1. pwd : 현재 작업 디렉토리 보기
2. mkdir :폴더 만들기
3. ls : list 보기
    ls -al : 숨김 파일까지 모두 보기 (a : all, l: long(?))
    ex. drwxr-xr-x 1 User 197121   0 Apr  3 21:33 back_end/ 이면, 앞의 d가 diactory

4. cp : copy (안에 무엇이 있으면 복사 불가)
    cp -r : 안에 있는 거 까지 recursive 하게 복사

5. rm : 삭제 
    rm -rf : 안에 있는거 까지 다 삭제 (r : recursive, f : force(강제적으로))

* node [파일명] : node.js로 실행
*/

/** 인증번호 만들기 실습 */
function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(result);
}

getToken();
