const playbtn = document.getElementById('play')
const title = document.getElementById('title')
const musicContainer = document.getElementById('music-container')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')


const songs = ['hey', 'summer', 'ukulele']

let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

playbtn.addEventListener('click', () => {
    musicContainer.classList.toggle('play')
})
