const toggler = document.getElementById('toggle')

const container = document.getElementById('--container')


function lightAndDark(){
    toggler.classList.toggle('toggle--light')
    toggler.classList.toggle('toggle--dark')
    container.classList.toggle('--container--light')
    container.classList.toggle('--container--dark')

}