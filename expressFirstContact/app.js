const express = require('express');
const app = express();

app.get('/', (req, res) => {res.sendFile(__dirname + '/homepage.html')})
app.get('/puppies', (req, res) => {res.sendFile(__dirname + '/puppies.html')})
app.get('/kittens', (req, res) => {res.sendFile(__dirname + '/kittens.html')})

const port = 1337;
app.listen(port, () => {console.log(`listening to ${port}`)});
