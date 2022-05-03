function submitData(userName, userEmail) {
    const userInfo = {
        name: userName,
        email: userEmail
    }
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(data => {
        const newUser = document.createElement('h2')
        newUser.textContent = data.id
        document.body.appendChild(newUser)
    })
    .catch(error => {
        const errorMessage = document.createElement('h2')
        errorMessage.textContent = error.message
        document.body.appendChild(errorMessage)
    })
}
