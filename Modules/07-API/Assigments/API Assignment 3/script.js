const btn = document.querySelector('button')
const nameData = document.querySelector('#name')
const ageData = document.querySelector('#age')
const hobbiesData = document.querySelector('#hobbies')

const ENDPOINT = 'https://api.github.com/gists/0aa2685a6d252baf76a4e24e2fa83f47'

async function getData() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    return JSON.parse(data.files['me.json'].content)
}

function displayData({ name, age, hobbies }) {
    nameData.innerHTML = name
    ageData.innerHTML = age

    hobbies.forEach(hobby => {
        hobbiesData.innerHTML += `
            <li>${hobby}</li>`
    });
}

btn.addEventListener('click', async () => {
    const data = await getData()

    displayData(data)
    document.querySelector('.content').style.display = 'unset'
})