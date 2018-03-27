const signIn = (email, password) => (
    fetch('http://192.168.0.104:8888/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(response => response.json())
)

module.exports = signIn;