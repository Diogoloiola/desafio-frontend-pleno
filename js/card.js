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

                container.appendChild(div)
            } else if (key == 'albums') {
                let container = document.querySelector('#albuns')
                imgInfo.src = obj[i].cover_medium

                container.appendChild(div)
            } else if (key == 'tracks') {
                console.log(obj[i].title)
            }

            div.appendChild(imgInfo)
        }
        console.log('=======================')
    }
}

export { card }