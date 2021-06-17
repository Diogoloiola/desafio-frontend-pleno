let list = {
    createTrack(title, duration) {
        let titleDiv = document.createElement('div')
        let durationDiv = document.createElement('div')

        titleDiv.innerHTML = title
        durationDiv.innerHTML = duration

        return [titleDiv, durationDiv]

    }
}

export { list }