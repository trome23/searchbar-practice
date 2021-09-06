const searchInput = document.querySelector("#searchInput")
const namesFromDOM = document.querySelectorAll(".name")

searchInput.addEventListener('keyup', (event) => {


    const searchQuery = event.target.value.charAt(0).toLowerCase()
    console.log(searchQuery)

    for (const nameElement of namesFromDOM) {
        let name = nameElement.textContent.toLowerCase()

        if (name.charAt(0).includes(searchQuery)) {
            nameElement.style.display = 'block'
        } else {
            nameElement.style.display = 'none'
        }
    }

})