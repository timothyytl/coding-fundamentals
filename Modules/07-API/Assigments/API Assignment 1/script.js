const contentWrapper = document.querySelector('#content-wrapper')
const quote = document.querySelector('#quotes')
const author = document.querySelector('#author')
const button = document.querySelector('button')

const ENDPOINT = 'https://api.quotable.io/random'

async function getQuotes() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    return data
}

button.addEventListener('click', async () => {
    const data = await getQuotes()

    quote.innerHTML = `${data.content}`
    author.innerHTML = `— ${data.author}`
})

