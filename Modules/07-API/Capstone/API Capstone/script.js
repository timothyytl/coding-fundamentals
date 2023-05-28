const URL = 'https://api.thecatapi.com/v1/breeds'

async function fetchData() {
    try {
        const response = await fetch(URL)
        const data = await response.json()

        // use forEach method to run the function once for each data json element 
        data.forEach(cat => {
            createCatCard(cat)
        });
    } catch (err) {
        alert('Error', err)
    }
}

fetchData()


function createCatCard(cat) {
    const container = document.querySelector('#card-container')

    // create card container
    const card = document.createElement('div')
    card.className = 'card'

    // create cat image element 
    const image = document.createElement('img')
    image.className = 'card-img'
    image.src = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
    image.onerror = function () {
        this.onerror = null
        this.src = './assets/missingcat.png'
    }

    // create cat name element 
    const name = document.createElement('h3')
    name.className = 'cat-name'
    name.textContent = cat.name

    // create cat description element 
    const description = document.createElement('p')
    description.className = 'card-content'
    description.textContent = cat.description

    // create card profile element 
    const profile = document.createElement('div')
    profile.className = 'card-profile'
    profile.textContent = 'Profile'

    // append image, name, and description to the card container 
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(description)
    card.appendChild(profile)

    // append the card to the cat container 
    container.appendChild(card)
}



