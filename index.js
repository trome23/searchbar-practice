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
