let list = {
    createTrack(title, duration, name, album) {
        let titleDiv = document.createElement('div')
        let durationDiv = document.createElement('div')
        let nameDiv = document.createElement('div')
        let albumDiv = document.createElement('div')


        titleDiv.innerHTML = title
        durationDiv.innerHTML = duration
        nameDiv.innerHTML = name
        albumDiv.innerHTML = album


        titleDiv.classList.add('config-track')
        durationDiv.classList.add('config-track')
        nameDiv.classList.add('config-track')
        albumDiv.classList.add('config-track')


        return [titleDiv, durationDiv, nameDiv, albumDiv]

    }
}

export { list }