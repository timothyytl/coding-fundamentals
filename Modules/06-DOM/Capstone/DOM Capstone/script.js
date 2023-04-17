// Select the header element
const navBar = document.querySelector('.header')

// Event listener: Mouse move      
// When user hovers around the top area, show the header
window.addEventListener('mousemove', (e) => {
    let y = e.clientY
    if (y < 100 || window.scrollY === 0) {
        show()
    } else if (y > 100) {
        hide()
    }
})

// Event listener: Scroll                

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        show()
    } else {
        hide()
    }
})

function show() {
    navBar.style.top = "0"
}

function hide() {
    navBar.style.top = "-150px"
}

// -----------------------

// ALTERNATIVE SOLUTION:
// let prevPosition = window.pageYOffset (-create a variable to store and get the initial scroll position)
// window.addEventListener('scroll', () => {
    // let currentPosition = window.pageYOffset (-create a variable to store and get the current position)
//     if (prevPosition > currentPosition) {
//         show();
//     } else {
//         hide()
//     }
//     // prevPosition = currentPosition (- this is to update the previous scroll position)
// })

// ---------- Tim's Notes on the Project

// the offsetHeight property is used to obtain the height of the navBar element so that we can utitlise the function with the 'top' property  - offsetHeight returns the height of an element (including vertical padding and borders, as an integer (in pixels))

// clientX - measures from the left visible area of the page
// clientY - measures from the top visible area of the page
// pageX - measures from the left edge/beginning of the page/browser screen
// pageY - measures from the top edge/beginning of the page/browser screen
// screenX - away from the edge of the whole computer screen 
// offsetX - away from the INSIDE OF THE ELEMENT

