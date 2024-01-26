function clickHome(){
    document.getElementById("contents__frame").setAttribute("src", "./home.html")
    document.getElementById("menuHome").style = "color:black; background-color:white;"
    document.getElementById("menuJokebox").style = "color:white; background-color:#298eb5;"
    document.getElementById("menuGame").style = "color:white; background-color:#298eb5;"

}

function clickJokeBox(){
    document.getElementById("contents__frame").setAttribute("src", "./jukebox.html")
    document.getElementById("menuJokebox").style = "color:black; background-color:white;"
    document.getElementById("menuHome").style = "color:white; background-color:#298eb5;"
    document.getElementById("menuGame").style = "color:white; background-color:#298eb5;"
}

function clickGame(){
    document.getElementById("contents__frame").setAttribute("src", "./game.html")
    document.getElementById("menuGame").style = "color:black; background-color:white;"
    document.getElementById("menuJokebox").style = "color:white; background-color:#298eb5;"
    document.getElementById("menuHome").style = "color:white; background-color:#298eb5;"
}