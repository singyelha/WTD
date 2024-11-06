const express = require('express');
const app = express();
app.listen(3000);
app.get('/', (req, res) => {
    // res.send("<h1>welcome</h1>")
    // console.log(__dirname);
    res.sendFile('./views/home.html', { root: __dirname});
})