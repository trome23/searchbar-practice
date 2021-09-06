// const searchInput = document.querySelector("#searchInput")
// const namesFromDOM = document.querySelectorAll(".name")
// console.log(namesFromDOM)

// searchInput.addEventListener('keyup', function (event) {
//     const { value } = event.target

//     const searchQuery = value.toLowerCase()

//     for (const nameElement of namesFromDOM) {
//         let name = nameElement.textContent.toLowerCase()

//         if (name.includes(searchQuery)) {
//             nameElement.style.display = 'block'
//         } else {
//             nameElement.style.display = 'none'
//         }
//     }
// })

const searchInput = document.querySelector("#searchInput")
const results = document.querySelector("#results")
const allNamesDOMCollection = document.querySelectorAll(".name")

searchInput.addEventListener('keyup', function(event) {
    let searchQuery = event.target.value.toLowerCase()    

    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[i].style.display = "block"
        } else {
            allNamesDOMCollection[i].style.display = "none"
        }
    }
})