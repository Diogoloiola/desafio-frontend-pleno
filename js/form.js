let form = {
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
        $.ajax({
            url: url,
            type: 'GET',
            success: (data) => {
                if (!data.total) {
                    this.searchAlbum(value)
                }
            }
        });
    },
    searchAlbum(value) {
        const url = `http://localhost:3333/search?q=album:"${value}"`
        $.ajax({
            url: url,
            type: 'GET',
            success: (data) => {
                if (!data.total) {
                    this.searchTrack(value)
                }
                console.log(data)
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
    }
}
export { form }