let TOKEN = ""
let client_id = "3bc191b0ba684ed798a7c38aa0ce207f"
let redirect_uri = window.location.origin;
let scope = "user-read-private user-read-email user-top-read"

function authorize() {
    let url = 'https://accounts.spotify.com/authorize'
    url += '?response_type=token'
    url += '&client_id=' + encodeURIComponent(client_id)
    url += '&scope=' + encodeURIComponent(scope)
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri)
    window.open(url, '_self')
}

// create a function that can extract the token from the uri
function extractTokenFromURI() {
    let hash = window.location.hash
    if (hash && hash.includes('access_token')) {

        let url = hash.replace('#access_token=', "")
        // replaces the #access_token= with an empty string

        let chunks = url.split('&')
        // split the string into an array starting from &

        let token = chunks[0]
        return token
    }
    return null
}

window.addEventListener('load', function () {
    TOKEN = extractTokenFromURI();
    if (TOKEN) {
        console.log('Token', TOKEN);

        // fetch the endpoints
        fetchUserTopItems();
        fetchNewReleases();
        fetchFeaturedPlaylists();
    } else {
        authorize();
    }
})


async function fetchUserTopItems() {
    try {
        let ENDPOINT = "https://api.spotify.com/v1/me/top/tracks"
        let response = await fetch(ENDPOINT + '?limit=6', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + TOKEN,
            },
        })
        let data = await response.json()
        console.log('User top items', data);
        displayUserTopItems(data)
    } catch (error) {
        alert("Something went wrong.")
        console.log(error);
    }
}

async function fetchNewReleases() {
    try {
        let ENDPOINT = 'https://api.spotify.com/v1/browse/new-releases'
        let response = await fetch(ENDPOINT + '?limit=6', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + TOKEN,
            },
        })
        let data = await response.json()
        console.log('New Releases', data);
        displayNewReleases(data)
    } catch (error) {
        alert("Something went wrong.")
        console.log(error);
    }
}

async function fetchFeaturedPlaylists() {
    try {
        let ENDPOINT = 'https://api.spotify.com/v1/browse/featured-playlists'
        let response = await fetch(ENDPOINT + '?limit=6', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + TOKEN,
            },
        })
        let data = await response.json()
        console.log('Featured playlists', data);
        displayFeaturedPlaylists(data)
    } catch (error) {
        alert("Something went wrong.")
        console.log(error);
    }
}

function displayUserTopItems(data) {
    let section = document.querySelector('#your-top-items')
    let sectionTitle = section.querySelector('.title')
    let sectionSubtitle = section.querySelector('.subtitle')
    let sectionWrapper = section.querySelector('.card-wrapper')
    sectionTitle.textContent = "Your Top Items"
    sectionSubtitle.textContent = 'Based on your recent listening'

    for (let i = 0; i < data.items.length; i++) {
        let track = data.items[i]

        let image = track.album.images[1].url
        let title = track.name
        let subtitle = track.album.artists[0].name
        let href = track.album.external_urls.spotify

        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href)
    }
}

function displayNewReleases(data) {
    let section = document.querySelector('#new-releases')
    let sectionTitle = section.querySelector('.title')
    let sectionSubtitle = section.querySelector('.subtitle')
    let sectionWrapper = section.querySelector('.card-wrapper')
    sectionTitle.textContent = "New Releases"
    sectionSubtitle.textContent = 'New releases from Spotify'

    for (let i = 0; i < data.albums.items.length; i++) {
        let track = data.albums.items[i]

        let image = track.images[1].url
        let title = track.name
        let subtitle = track.artists[0].name
        let href = track.external_urls.spotify

        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href)
    }
}

function displayFeaturedPlaylists(data) {
    let section = document.querySelector('#featured-playlists')
    let sectionTitle = section.querySelector('.title')
    let sectionSubtitle = section.querySelector('.subtitle')
    let sectionWrapper = section.querySelector('.card-wrapper')
    sectionTitle.textContent = "Featured Playlists"
    sectionSubtitle.textContent = 'Featured playlists from Spotify'

    for (let i = 0; i < data.playlists.items.length; i++) {
        let track = data.playlists.items[i]

        let image = track.images[0].url
        let title = track.name
        let subtitle = track.description
        let href = track.external_urls.spotify

        subtitle = subtitle.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href)
    }
}


function generateCard(image, title, subtitle, href) {
    return `
    <a class="card" href="${href}" target="_blank">
      <img
        src="${image}"
        alt="peaceful piano"
        srcset=""
      />
      <span class="mdi mdi-play mdi-36px"></span>
      <div class="title">${title}</div>
      <div class="subtitle">${subtitle}</div>
`
}








