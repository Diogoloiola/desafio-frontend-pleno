import { card } from './card.js'
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
    }
}

export { app }