const express = require("express");
const items = require('./router/items')


const app = express();
const port = 3000;

app.use('/api', items);

app.listen(port, () => {
    console.log(`Khayam Server is Running at port : ${port}`);
})