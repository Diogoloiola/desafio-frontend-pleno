import { player } from './player.js'

let list = {
    createTrack(title, duration, name, album, preview) {
        let titleDiv = document.createElement('div')
        let durationDiv = document.createElement('div')
        let nameDiv = document.createElement('div')
        let albumDiv = document.createElement('div')
        let span = document.createElement('span')
        let icon = document.createElement('i')


        icon.classList.add('far')
        icon.classList.add('fa-play-circle')
        span.appendChild(icon)

        span.addEventListener('click', () => player.play(preview, icon))

        titleDiv.innerHTML = title
        durationDiv.innerHTML = duration
        nameDiv.innerHTML = name
        albumDiv.innerHTML = album


        titleDiv.classList.add('config-track')
        durationDiv.classList.add('config-track')
        nameDiv.classList.add('config-track')
        albumDiv.classList.add('config-track')


        return [titleDiv, durationDiv, nameDiv, albumDiv, span]

    }
}

export { list }