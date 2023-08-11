const regBtn = document.querySelector('.register-btn')
const closeBtn = document.querySelector('.close-button')
const backDrop = document.querySelector('.bg-backdrop')
const sidePanel = document.querySelector('.slide-over-container')
const body = document.body

body.appendChild(regBtn)

backDrop.classList.add('bg-hidden')

regBtn.addEventListener('click', () => {
    backDrop.classList.remove('bg-hidden')
    sidePanel.style.visibility = 'visible'
    sidePanel.classList.add('slide-in')
})

closeBtn.addEventListener('click', () => {
    backDrop.classList.add('bg-hidden')
    sidePanel.style.visibility = 'hidden'
    sidePanel.classList.remove('slide-in')
})

