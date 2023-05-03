const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const userCard = document.getElementById("user-card");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const search = document.getElementById("search-input").value
    let oriName = search.split(' ').join('')

    fetch("https://api.github.com/users/" + oriName)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            const date = new Date(data.created_at)
            let joinDate = date.toDateString().split(' ').slice(1).join(' ')

            document.getElementById('user-card').innerHTML = `
                <img src="${data.avatar_url}"/>
                <h1>${data.name}</h1>
                <p>${data.bio} <br><br> Joined at: ${joinDate}</p>`

        })
        .catch((error) => console.log(error))

})

// const text = "How are you doing today?";
// const myArray = text.split(" ").join('');

// console.log(myArray);


// form.addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const octokit = new Octokit({
//         auth: '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'
//     })

//     await octokit.request('PATCH /user/email/visibility', {
//         visibility: 'public',
//         headers: {
//             'X-GitHub-Api-Version': '2022-11-28'
//         }
//     })

//     const username = input.value;
//     const url = `https://api.github.com/users/${username}`;

//     try {
//         const response = await fetch(url);
//         const user = await response.json();

//         if (response.ok) {
//             // Update user card with user data
//             userCard.innerHTML = `
//         <img src="${user.avatar_url}" alt="${user.login}" width="64" height="64">
//         <h2>${user.login}</h2>
//         <p>Followers: ${user.followers}</p>
//         <p>Following: ${user.following}</p>
//       `;
//             userCard.style.display = "block";
//         } else {
//             // Display error message
//             userCard.innerHTML = `<p>Error: ${user.message}</p>`;
//             userCard.style.display = "block";
//         }
//     } catch (error) {
//         console.error(error);
//     }
// });
