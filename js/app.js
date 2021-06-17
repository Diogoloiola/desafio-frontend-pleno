import { card } from './card.js'

let app = {
    getData(url) {
        $.ajax({
            url: url,
            type: 'GET',
            success: (dados) => {
                card.renderizeData(dados)
            }
        });
    }
}

export { app }