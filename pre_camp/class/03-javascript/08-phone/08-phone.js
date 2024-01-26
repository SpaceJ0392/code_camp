function changeFocus1(){
    let p1 = document.getElementById("p1").value
    if (p1.length === 3){
        document.getElementById("p2").focus()
    }
}

function changeFocus2(){
    let p2 = document.getElementById("p2").value
    if (p2.length === 4){
        document.getElementById("p3").focus()
    }
}