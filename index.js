let usernameInput = document.querySelector("#username-input")

usernameInput.addEventListener('keyup', function(event) {
    let username = event.target.value.toLowerCase()
    console.log(username)
})