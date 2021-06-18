import { card } from './card.js'

let form = {
    main: document.querySelector('#main'),
    secondary: document.querySelector('#secondary'),
    iconSearch() {
        let search = document.querySelector('.form-search')
        search.focus()
    },
    search() {
        let input = document.querySelector('.form-search')
        if (!input.value.length) {
            alert('O campo não pode ser vazio')
            return;
        }
        this.searchArtist(input.value)
    },
    searchArtist(value) {
        const url = `http://localhost:3333/search?q=artist:"${value}"`
        const containerDiv = document.querySelector('#secondary-tracks')
        $.ajax({
            url: url,
            type: 'GET',
            success: (data) => {
                if (!data.total) {
                    this.searchAlbum(value)
                } else {
                    this.main.classList.add('d-none')
                    this.secondary.classList.remove('d-none')
                    containerDiv.classList.remove('d-none')
                    card.createCardTrack(data['data'], '#tracks-seconadary-body')
                }
            }
        });
    },
    searchAlbum(value) {
        const url = `http://localhost:3333/search?q=album:"${value}"`
        const containerDiv = document.querySelector('#secondary-albuns')
        $.ajax({
            url: url,
            type: 'GET',
            success: (data) => {
                if (!data.total) {
                    this.searchTrack(value)
                } else {
                    this.main.classList.add('d-none')
                    this.secondary.classList.remove('d-none')
                    containerDiv.classList.remove('d-none')
                    card.createCardAlbum(data['data'], '#albuns-secondary-body')
                }
            }
        });
    },
    searchTrack(value) {
        const url = `http://localhost:3333/search?q=track:"${value}"`
        $.ajax({
            url: url,
            type: 'GET',
            success: (data) => {
                if (!data.total) {
                    alert('Nada foi econtrado')
                }
                console.log(data)
            }
        });
    },
    resetForm() {

    }
}
export { form }