

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

function updatePlaybackrate(){
    let player = document.querySelector("audio");
    let seekbar = document.querySelecer("playbackratio");
    let rate = seekbar.value;

player.playbackRate = rate;

}

function setEventhandler(){
let playButton = document.querySelector("#play-button");
playButton.addEventListener("click", play);

let pauseButton = document.querySelector("#pause-button");
pauseButton.addEventListener("click", pause);

let volume = document.querySelector("#volume");
volume.addEventListener("input", updateVolume);

let player = document.querySelector("audio");
audio.addEventListener("canplay", configureSeekbar);
audio.addEventListener("timeupdate", updateSeekbar);

let seekbar = document.querySelector("#seek-bar");
seekbar.addEventListener("input", updateCurrentTime);

let playbackRate = document.querySelector("audio");
playbackRate.addEventListener("input",updatePlaybackRate);

}






