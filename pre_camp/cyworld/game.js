function startWord() {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText
    
    if (word[word.length - 1] == myword[0]){
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    } else {
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").value = ""
    }
}