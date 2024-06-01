const playbtn = document.getElementById('play')
const title = document.getElementById('title')
const musicContainer = document.getElementById('music-container')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const skipbtn = document.getElementById('next')
const prevbtn = document.getElementById('prev')

const songs = ['hey', 'summer', 'ukulele']
let songIndex = 0

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    audio.play()
    playbtn.querySelector('i.fa-solid').classList.remove('fa-play')
    playbtn.querySelector('i.fa-solid').classList.add('fa-pause')
}

function pauseSong() {
    musicContainer.classList.remove('play')
    audio.pause()
    playbtn.querySelector('i.fa-solid').classList.add('fa-play')
    playbtn.querySelector('i.fa-solid').classList.remove('fa-pause')
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

function songEnded() {
    songIndex++
    if (songIndex >= songs.length) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}

playbtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

skipbtn.addEventListener('click', () => {
    songIndex++
    if (songIndex >= songs.length) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
})

prevbtn.addEventListener('click', () => {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    playSong()
})

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', songEnded)