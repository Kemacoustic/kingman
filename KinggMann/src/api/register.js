const register = (email, name, password) => (
    fetch('http://192.168.0.104:8888/api/register.php',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, name, password })
    })
    .then(response => response.text())
)

module.exports = register;

/*
    json web token: ky thuat server tao ra cai max hoa vaf dich cai ma
*/