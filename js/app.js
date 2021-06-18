import { card } from './card.js'
import { form } from './form.js'
import { player } from './player.js'

let app = {
    getData(url) {
        let loadDiv = document.querySelector('.container-load')
        let main = document.querySelector('#main')
        $.ajax({
            url: url,
            type: 'GET',
            beforeSend: function(xhr) {
                loadDiv.classList.remove('d-none')
            },
            success: (data) => {
                card.renderizeData(data)
            },
            complete(data) {
                loadDiv.classList.add('d-none')
                main.classList.remove('d-none')
            }
        });
    },
    loadApplication() {
        let btnIconSearch = document.querySelector('#search-icon')
        btnIconSearch.addEventListener('click', () => form.iconSearch())

        let btnSearch = document.querySelector('.icon-form')
        btnSearch.addEventListener('click', () => form.search())

        let btnHome = document.querySelector('#home-icon')
        btnHome.addEventListener('click', () => form.resetForm())

        let volume = document.querySelector('#volume-player')

        volume.addEventListener('change', () => player.volumePlayer())

        this.getData('http://localhost:3333/chart/tracks')
    }
}

export { app }