const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose")
const session = require("express-session")

mongoose.connect("mongodb://localhost/tk-hotgirl",(err)=>{
    if(err) console.log("err")
    else console.log("connect db")
})

const app = express();

app.use(session({
    secret:'qwertyuiop',
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge: 1000*60*60*24*7
    }
}))



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));



const userApiRouter = require("./router/userApi");
const postApiRouter = require("./router/postapi");
const authapirouter = require("./router/authapi")

app.use("/api/auther",authapirouter)

app.use((req, res, next) => {
	console.log(req.session);
	// console.log(req.sessionID);
	// req.session.user = "abc";
	// res.send("Hello middleware");
	next();
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/views/login.html');
});

app.use('/api/users', userApiRouter);
app.use('/api/posts', postApiRouter);

app.listen(6699, (err) => {
	if(err) console.log(err)
	else console.log("Server start success");
});

