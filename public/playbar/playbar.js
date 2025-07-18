//that playbar javascript shi they be talking about
window.addEventListener("DOMContentLoaded", () => {


const playlist = [
  {title: "SAME THING", src: "/playbar/playlist/same-thing-prod-evilgiane-and-ccured-surfgang.mp3"},
  {title: "SAME THING", src: "/playbar/playlist/same-thing-prod-evilgiane-and-ccured-surfgang.mp3"},
  //{ title: "Track 2", src: "music/track2.mp3" },
  //{ title: "Track 3", src: "music/track3.mp3" }
];

let currentTrackIndex = 0;
const audio = document.getElementById("audioPlayer");
audio.src = playlist[currentTrackIndex].src;

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

playBtn.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
});

prevBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  updateTrack();
});

nextBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  updateTrack();
});

const trackBar = document.querySelector(".track");
const knob = document.querySelector(".knob");

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  knob.style.left = `${percent}%`;
});

trackBar.addEventListener("click", (e) => {
  const rect = trackBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const newTime = (clickX / rect.width) * audio.duration;
  audio.currentTime = newTime;
});

const titleDisplay = document.createElement("div");
titleDisplay.style.color = "white";
titleDisplay.style.marginLeft = "1rem";
document.getElementById("playbar").appendChild(titleDisplay);

function updateTrack() {
  audio.src = playlist[currentTrackIndex].src;
  titleDisplay.textContent = playlist[currentTrackIndex].title;
  audio.play();
}


});