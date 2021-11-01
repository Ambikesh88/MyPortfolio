const express=require("express");
const path=require("path");
const connectToDb=require("./db/conn");
const User=require("./models/usermessage")
const hbs=require("hbs");
const {registerPartials}=require("hbs");


const app=express();
const port=process.env.PORT|| 3000;

// setting the path
const staticpath=path.join(__dirname, "../public");
const templatepath=path.join(__dirname, "../templates/views");
const partialpath=path.join(__dirname, "../templates/partials");

//middlewares
app.use('/css',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));


app.set("view engine","hbs");
  // app.set("views", path.join(__dirname, "views"));
  // app.set("partials", path.join(__dirname, "views/partials"));
 app.set("views",templatepath);
 hbs.registerPartials(partialpath);
//  app.set('v', path.join(__dirname, 'partials'));
    
//routing
//app.get(path,callback )
app.get("/",(req,res)=>{
  res.render("index"); 
})
// app.get("/contact",(req,res)=>{
//   res.render("contact"); 
// })


app.post("/contact" ,async(req,res)=>{
   try{
      //  res.send(req.body) ;
      const userData=new User(req.body);
     await userData.save();
     res.status(201).render("index");
      

   }catch(error){
     res.status(500).send(error)
   }
})

app.listen(port,()=>{
    connectToDb()
    console.log(`Server is running at port no. ${port}`);
});  