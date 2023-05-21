const element = document.body;
const div = document.querySelector('.palette')

element.addEventListener('keydown', (e) => {

    if (e.metaKey && e.keyCode === 75) {
        div.classList.toggle('fade-out')
    }
})
