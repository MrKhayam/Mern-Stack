const express = require("express");


const app = express();
const port = 3000;


app.get('/',(req, res) => {
    res.send("You made a get request.")
})


app.post('/items',(req, res) => {
    res.send("You made a post request.")
})

app.put('/items/:id',(req, res) => {
    res.send("You made a put request.")
})

app.delete('/items/:id',(req, res) => {
    res.send("You made a delete request.")
})

app.listen(port, () => {
    console.log(`Khayam Server is Running at port : ${port}`);
})