import { secondsToMinutes } from './ultis.js'
import { list } from './list.js'

let card = {

    renderizeData(data) {
        for (let key in data) {
            this.createCard(data[key]['data'], key)
        }
    },
    createCard(obj, key) {
        for (let i = 0; i < 5; i++) {
            let div = document.createElement('div')
            let imgInfo = document.createElement('img')

            div.classList.add('info')
            imgInfo.classList.add('w-100')

            if (key == 'podcasts') {
                let container = document.querySelector('#podcats')
                imgInfo.src = obj[i].picture_medium

                div.appendChild(imgInfo)
                container.appendChild(div)
            } else if (key == 'albums') {
                let container = document.querySelector('#albuns')
                imgInfo.src = obj[i].cover_medium

                div.appendChild(imgInfo)
                container.appendChild(div)
            } else if (key == 'tracks') {
                let dataDiv = list.createTrack(
                    obj[i].title,
                    secondsToMinutes(obj[i].duration),
                    obj[i].artist.name,
                    obj[i].album.title
                )
                div.classList.remove('info')
                div.classList.add('track')
                let container = document.querySelector('#tracks')
                div.appendChild(dataDiv[0])
                div.appendChild(dataDiv[3])
                div.appendChild(dataDiv[2])
                div.appendChild(dataDiv[1])

                container.appendChild(div)
            }

        }
    }
}

export { card }