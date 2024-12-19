const containerMusic = document.querySelector(".containerMusic")
const player = document.querySelector("#playerMusic");
const musicName = document.querySelector("#musicName");
const playPauseButton = document.querySelector("#playPauseButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const btnMusic = document.querySelector("#btnMusic")

btnMusic.onclick = () => openMusic();

import songs from "./songs.js";

const textButtonPlay = "<i class='bx bx-caret-right'></i>";
const textButtonPause = "<i class='bx bx-pause'></i>";

let index = 0;

prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();

playPauseButton.onclick = () => playPause();

const playPause = () => {
    console.log('teste pause');
    if (player.paused) {
        player.play();
        playPauseButton.innerHTML = textButtonPause;
    }
    else {
        player.pause();
        playPauseButton.innerHTML = textButtonPlay;
    }
};

document.addEventListener("click", (event) => {
    const containerMusic = document.querySelector(".containerMusic");
    const player = document.querySelector(".playerMusic");
    const btnMusic = document.querySelector("#btnMusic");

    const clickInsidePlayer = player.contains(event.target);
    const clickOnButton = btnMusic.contains(event.target);

    if (!clickInsidePlayer && !clickOnButton && containerMusic.style.display === "flex") {
        openMusic();
        console.log('Clicou Fora');
    }
});

const openMusic = () => {
    const containerMusic = document.querySelector(".containerMusic");

    if (!containerMusic.classList.contains("show")) {
        containerMusic.style.display = "flex";
        setTimeout(() => containerMusic.classList.add("show"), 10);
    } else {
        containerMusic.classList.remove("show");
        setTimeout(() => (containerMusic.style.display = "none"), 300);
    }
};


playPauseButton.onclick = (event) => {
    event.stopPropagation(); 
    playPause();  
};


player.ontimeupdate = () => updateTime();

const updateTime = () => {
    const currentMinutes = Math.floor(player.currentTime / 60);
    const currentSeconds = Math.floor(player.currentTime % 60);
    currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

    const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
    const durationMinutes = Math.floor(durationFormatted / 60);
    const durationSeconds = Math.floor(durationFormatted % 60);
    duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);

    const progressWidth = durationFormatted ? (player.currentTime / durationFormatted) * 100: 0;

    progress.style.width = progressWidth + "%";
};

const formatZero = (n) => (n < 10 ? "0" + n : n);

progressBar.onclick = (e) => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
    player.currentTime = newTime;
};

const prevNextMusic = (type = "next") => {
    if ((type == "next" && index + 1 === songs.length) || type === "init"){
        index = 0;
    }
    else if (type == "prev" && index === 0) {
        index = songs.length;
    }
    else{
        index = type === "prev" && index ? index -1 : index + 1;
    }

    player.src = songs[index].src;
    musicName.innerHTML = songs[index].name;
    if (type !=="init") playPause();

    updateTime();

};

prevNextMusic("init");





