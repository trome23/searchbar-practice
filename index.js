let searchInput = document.querySelector("#searchInput")

let results = document.querySelector("#results")



searchInput.addEventListener('keyup', function(event) {
    let username = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.querySelectorAll(".name")
    console.log(allNamesDOMCollection[1].textContent)
})
