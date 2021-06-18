let player = {
    volume: document.querySelector('#volume-player'),
    audioElement: document.querySelector('#player-audio'),
    playing: false,
    previousElement: '',
    play(preview, icon) {
        if (!this.playing) {
            if (icon.className.indexOf('fa-play-circle') !== -1 && preview == this.audioElement.src) {
                this.audioElement.play()
                icon.classList.remove('fa-play-circle')
                icon.classList.add('fa-pause-circle')
                this.playing = true
            } else {
                if (this.previousElement == '') {
                    this.previousElement = icon
                }
                if (this.previousElement == icon) {
                    this.playMusic(preview, icon)
                } else {
                    this.playMusic(preview, icon)
                    this.previousElement.classList.add('fa-play-circle')
                    this.previousElement.classList.remove('fa-pause-circle')
                    this.previousElement = icon
                }
            }

        } else {
            if (this.previousElement != icon) {
                this.audioElement.src = ''
                this.playMusic(preview, icon)
                this.previousElement.classList.add('fa-play-circle')
                this.previousElement.classList.remove('fa-pause-circle')
                this.previousElement = icon
            } else {
                icon.classList.add('fa-play-circle')
                icon.classList.remove('fa-pause-circle')
                this.playing = false
                this.audioElement.pause()
            }
        }
    },
    volumePlayer() {
        this.audioElement.volume = this.volume.value / 100;
    },
    playMusic(src, icon) {
        this.audioElement.src = src
        icon.classList.remove('fa-play-circle')
        icon.classList.add('fa-pause-circle')
        this.playing = true
    }
}
export { player }