function play(){
    let player = document.querySelector("audio");
    player.play();
}

function pause(){
    let player = document.querySelector("audio");
    player.pause();
}

function rewind(sec){
    let player = document.querySelector("audio");
    player.currentTime = player.currentTime - sec;
    return sec;
}

function fastFord(sec){
    let player = document.querySelector("audio");
    player.currentTime = player.currentTime + sec;
    return sec;
}

let playerButton = document.querySelector("#play-button");
playerButton.addEventListener("click", play);

let pauseButton = document.querySelector("#pause-button");
pauseButton.addEventListener("click", pause);

