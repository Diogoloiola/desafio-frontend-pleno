import { app } from './app.js'
import { form } from './form.js'

$(document).ready(function() {
    let btnIconSearch = document.querySelector('#search-icon')
    btnIconSearch.addEventListener('click', () => form.iconSearch())

    let btnSearch = document.querySelector('.icon-form')
    btnSearch.addEventListener('click', () => form.search())


    app.getData('http://localhost:3333/chart/tracks')
});