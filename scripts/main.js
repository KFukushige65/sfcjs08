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

function updateVolume(){
    let slider = document.querySelector("#volume");
    let value = slider.value;
    let player = document.querySelector("audio");
    player.volume = value;    
}

function configureSeekbar(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    seekbar.max = player.duration;
}

function udpateSeekbar(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    seekbar.value = player.currentTime;
}

function updateCurrentTime(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    player.currentTime = seekbar.value;
}

let playerButton = document.querySelector("#play-button");
playerButton.addEventListener("click", play);

let pauseButton = document.querySelector("#pause-button");
pauseButton.addEventListener("click", pause);

let volume = document.querySelector("#volume");
volume.addEventListener("input", updateVolume);

let player = document.querySelector("audio");
audio.addEventListener("canplay", configureSeekbar);
audio.addEventListener("timeupdate", updateSeekbar);

let seekbar = document.querySelector("#seek-bar");
seekbar.addEventListener("input", updateCurrentTime);







