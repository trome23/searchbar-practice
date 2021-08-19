const searchInput = document.querySelector("#searchInput")
const results = document.querySelector("#results")
const allNamesDOMCollection = document.querySelectorAll(".name")

searchInput.addEventListener('keyup', function(event) {
    let searchQuery = event.target.value.toLowerCase()    

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        console.log(currentName)
    }
})
