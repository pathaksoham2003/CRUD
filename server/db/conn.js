const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.MONGODB_LINK;
const mongoose = require("mongoose"); 
mongoose.connect( DB ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {console.log("Connection Start")}).catch((err) => {
    console.log(err.message);
})

