import { secondsToMinutes } from './ultis.js'
import { list } from './list.js'

let card = {

    renderizeData(data) {
        for (let key in data) {
            switch (key) {
                case 'podcasts':
                    this.createCardPodcast(data[key]['data'])
                    break;
                case 'albums':
                    this.createCardAlbum(data[key]['data'])
                    break
                case 'tracks':
                    this.createCardTrack(data[key]['data'])
                    break;
            }
        }
    },
    createCardPodcast(obj, id = null) {

        const idContainer = id ? id : '#podcats'

        let container = document.querySelector(idContainer)

        container.innerHTML = ''

        for (let i = 0; i < 5; i++) {
            let div = document.createElement('div')
            let imgInfo = document.createElement('img')
            let span = document.createElement('span')
            let icon = document.createElement('i')

            icon.classList.add('far')
            icon.classList.add('fa-play-circle')

            span.appendChild(icon)

            div.classList.add('info')
            imgInfo.classList.add('w-100')


            imgInfo.src = obj[i].picture_medium

            div.appendChild(imgInfo)
            div.appendChild(span)
            container.appendChild(div)

        }
    },
    createCardAlbum(obj, id = null) {
        const idContainer = id ? id : '#albuns'
        let container = document.querySelector(idContainer)
        container.innerHTML = ''
        for (let i = 0; i < 5; i++) {
            let div = document.createElement('div')
            let imgInfo = document.createElement('img')

            let span = document.createElement('span')
            let icon = document.createElement('i')

            icon.classList.add('far')
            icon.classList.add('fa-play-circle')

            span.appendChild(icon)

            div.classList.add('info')
            imgInfo.classList.add('w-100')

            if (id != null) {
                imgInfo.src = obj[i].album.cover_medium
            } else {
                imgInfo.src = obj[i].cover_medium
            }

            div.appendChild(imgInfo)
            div.appendChild(span)
            container.appendChild(div)

        }
    },
    createCardTrack(obj, id = null) {
        const idContainer = id ? id : '#tracks'

        let container = document.querySelector(idContainer)

        container.innerHTML = ''

        for (let i = 0; i < 5; i++) {
            let div = document.createElement('div')

            let imgInfo = document.createElement('img')
            imgInfo.classList.add('w-100')

            let dataDiv = list.createTrack(
                obj[i].title,
                secondsToMinutes(obj[i].duration),
                obj[i].artist.name,
                obj[i].album.title,
                obj[i].preview
            )


            div.classList.add('track')
            div.appendChild(dataDiv[4])
            div.appendChild(dataDiv[0])
            div.appendChild(dataDiv[3])
            div.appendChild(dataDiv[2])
            div.appendChild(dataDiv[1])
            container.appendChild(div)

        }
    }

}

export { card }