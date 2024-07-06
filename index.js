const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: "Hello Cedric"});
});

app.get('/welcome', (req, res) => {
    res.send({ message: "Welcome Mr Cedric" });
});

// Dynamic route with parameters
app.get('/welcome/:name', (req, res) => {
    const name = req.params.name;
    const gender = req.query.gender;

    let greeting = '';

    if (gender == 'm') {
        greeting = 'Mr';
    } else {
        greeting = 'Mrs';
    }

    res.send({ message: `Welcome ${greeting} ${name}` });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});