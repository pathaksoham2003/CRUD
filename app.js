require("dotenv").config();
const express = require('express');
const app = express();
require("./server/db/conn");
const cors = require("cors");
const router = require("./server/routes/router.js")
const path = require("path");
const port = 8003;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname,"./client/build")));
app.get(("*"),function (req,res){
    res.sendFile(__dirname,"./client/build/index.html")
})
app.listen(port,() =>{
    console.log(`Server is started on the port number https://localhost/${port}`);
})