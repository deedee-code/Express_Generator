const express = require('express');

const app = express();

const port = 4000;

app.get('/add_user', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    let sex = req.query.sex;
    const user = {name, age, sex};
    res.json(user)
});

app.listen(port, () => {
    console.log('Server listening on port 4000');
});