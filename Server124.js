const express = require("express");

const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.json({message: 'Hello from Express REST API'});
});

app.get('/about',(req,res) => {
    res.json({message: 'This is About Us Page'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Welcome to 6csn1");
 });
