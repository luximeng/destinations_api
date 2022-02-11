//import, don't need .js cos node knows it's js
const db = require("./db")
const express = require("express")
const cors = require("cors")

// const PORT = 3000

// if(process.env.PORT !== undefined){
//     PORT = process.env.PORT
// }
// 3000 local, deploy on heroku, process.env.port is port on heroku. this line check what heroku got. 
const PORT = process.env.PORT || 3000;



//creates an express server 
const server = express()
server.use(cors());
server.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
});

// Endpoints(ROUTES) are made up of the method and the path
// GET / 
// curly braces is like creating a key value for new object
server.get("/", (req, res)=>{
    res.send({db});
});

