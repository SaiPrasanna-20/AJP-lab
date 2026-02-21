const express = require("express");

const app =  express();

app.use(express.json());

let items = [];
let nextId = 1;

app.get('/', (req,res) => {
    res.json({message: 'Hello from Express REST API'});
});

app.listen(3000,() => {
    console.log("Server running on port 3000");
});