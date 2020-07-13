document.addEventListener('DOMContentLoaded', () => {

    const $button = document.querySelector('.header-button')
    const $modal = document.querySelector('#modal')
    const $buttonClose = document.querySelector('.modal-btn__exit')

    $button.addEventListener('click', () => {
        $modal.classList.add('active-modal')
        document.querySelector('body').style.overflow = 'hidden'
    })

    $buttonClose.addEventListener('click', () => {
        $modal.classList.remove('active-modal')
        document.querySelector('body').style.overflow = 'auto'
    })

})