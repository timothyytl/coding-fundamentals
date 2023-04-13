const button = document.querySelector('.add__button')
const xButton = document.querySelector('.cta__button')
const hidden = document.querySelector('.hidden')

button.addEventListener('click', e => {
    e.preventDefault()

    hidden.classList.add('show')
})

xButton.addEventListener('click', () => {
    hidden.classList.remove('show')
})
