const express = require("express");

const router = express.Router();
const users = require("../models/userSchema.js");

// router.get("/" , (req,res) => {
//     console.log("connect");
// })

// POST THE USER DATA :-
router.post("/register", async (req, res) => {
  //console.log(req.body);
  const { name, email, age, mobile, work, add, desc } = req.body;
  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    return res.status(422).json("please fill the complete data");
  }
  try {
    const preuser = await users.findOne({ email: email });
    // findOne() is the mongodb database method and the white coloured email is the key of our mongodb database where as the email is the input field we have recieved from the frontend.
    console.log(preuser);

    if (preuser) {
      res.status(422).json("This user is already present");
    } else {
      const addUser = new users({ name, email, age, mobile, work, add, desc });
      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

// GET THE USER DATA :-
router.get("/getdata", async (req, res) => {
  try {
    const userData = await users.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(422).json(error);
  }
});

// GET INDIVIDUAL USER :-
router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const userindividual = await users.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
});

// UPDATE USER DATA :- PUT UPDATES THE ENTIRE DATA EVEN IF WE JUST UPDATE A SINGLE PART OF THE DATA WHEREAS
// THE PATCH METHOD ONLY UPDATES THE SINGLE VALUE THAT HAS BEEN UPDATED
router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// DELETE USER DATA :- 
router.delete("/deleteuser/:id" , async(req,res)=>{
  try{
    const {id} = req.params;
    const deleteuser = await users.findByIdAndDelete({_id : id})
    console.log(deleteuser);    
    res.status(201).json("User is deleted");
  }catch(error){
    console.log(error);
    res.status(422).json(error);
  }
}) 


module.exports = router;
