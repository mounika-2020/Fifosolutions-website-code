/*const express=require("express");
const bodyParser = require("body-parser");
/*const mongoose = require("mongoose");*/
/*const app=express();

app.use(express.static('../root'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));
/*mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});*/
/*app.get("/",function(req,res){
  res.sendFile(__dirname+"/pages/index.html");
});
app.get("/aboutus",function(req,res){
  res.sendFile(__dirname+"/pages/aboutus.html");
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});*/


var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('../root'))
app.use(express.static('../root'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect('mongodb://localhost:27017/fifo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var pass = req.body.pass;
    var cpass = req.body.cpass;
    var cname = req.body.cname;
    var address = req.body.address;
    var country = req.body.country;

    var data = {
        "name": name,
        "email" : email,
        "phone": phone,
        "pass" : pass,
        "cpass" : cpass,
        "cname": cname,
        "address": address,
        "country": country,
    }

    db.collection('fifo').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('/pages/success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/pages/vendorreg.html');
}).listen(7000);


console.log("Listening on PORT 7000");
