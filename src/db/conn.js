// const mongoose=require("mongoose");

// //creating a database
// mongoose.connect("mongodb+srv://Ambikesh_88:Ambi123@cluster0.jqktb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//     // useCreateIndex:true,
//     // userNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("Connection Successfull");
// }).catch((error)=>{
//     console.log(error);
// })

const mongoose = require("mongoose");
const connectToDb = async () =>
  mongoose.connect("mongodb+srv://Ambikesh_88:Ambi123@cluster0.jqktb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(()=>{
      console.log("Connection Successfull");
  }).catch((error)=>{
      console.log(error);
  })

module.exports = connectToDb;