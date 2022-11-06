console.log('hello')
let songIndex = 0;
let audioElement = new Audio("audio/1.mp3");
let masterPlay = document.getElementById("masterPlay"); 
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
    {songName: "Let me love you", filePath: "audio/1.mp3", coverPath: "assets/1.jpg"},
    {songName: "Let me love you", filePath: "audio/2.mp3", coverPath: "assets/2.jpg"},
    {songName: "Let me love you", filePath: "audio/3.mp3", coverPath: "assets/3.jpg"},
    {songName: "Let me love you", filePath: "audio/4.mp3", coverPath: "assets/4.jpg"},
    {songName: "Let me love you", filePath: "audio/5.mp3", coverPath: "assets/5.jpg"},
    {songName: "Let me love you", filePath: "audio/6.mp3", coverPath: "assets/6.jpg"},
    {songName: "Let me love you", filePath: "audio/7.mp3", coverPath: "assets/7.jpg"},
    {songName: "Let me love you", filePath: "audio/8.mp3", coverPath: "assets/8.jpg"},
    {songName: "Let me love you", filePath: "audio/9.mp3", coverPath: "assets/9.jpg"},
    {songName: "Let me love you", filePath: "audio/10.mp3", coverPath: "assets/10.jpg"},
]

// Handle play / pause
masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
    }
})

// listen to event
myProgressBar.addEventListener('timeupdate', ()=> {

})
