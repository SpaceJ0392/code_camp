let flag = false

function authNum() {

    if (flag === false){
        flag = true

        let time = 5
        document.getElementById("submit").disabled = false

        document.getElementById("target").innerText = Math.floor(Math.random() * 1000000).toString().padStart(6, "0")
        let timer = setInterval(() => {
                if (time >= 0) {
                    let min = Math.floor(time / 60)
                    let sec = time % 60
                    document.getElementById("limit").innerText = min + ":" + sec.toString().padStart(2, "0")
                    time--
                } else {
                    document.getElementById("submit").disabled = true
                    flag = false
                    clearInterval(timer)
                }   
        }, 1000)
    }
}
