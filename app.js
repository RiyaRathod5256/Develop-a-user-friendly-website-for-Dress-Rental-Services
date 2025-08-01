if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const mongoose=require('mongoose');
const express=require('express');
const app = express();
const User=require('./model/user')
const passport = require('passport');
const ejsMate = require('ejs-mate');
const path = require('path');

DB_URL="mongodb+srv://Riya_Rathod:Riya_Rathod@rental.f16zo.mongodb.net/?retryWrites=true&w=majority&appName=Rental"
const dbUrl = DB_URL;
const LocalStrategy = require('passport-local');
const session = require('express-session');

mongoose.connect(dbUrl);

const db=mongoose.connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


app.use(passport.initialize());

passport.use(new LocalStrategy(User.authenticate()));
app.use(express.static('public'));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));

app.get('/login',(req,res)=>{
    res.render('users/login')
})

app.get('/product',(req,res)=>{
    res.render('product')
})

app.post('/login',passport.authenticate('local',{failureRedirect: '/login' }),async(req,res)=>{
    alert("Login successful")
})


app.get('/register',(req,res)=>{
    res.render('users/register')
})
app.post('/register', async(req,res)=>{
    try{
    const {username,email,password}=req.body;
    const u=new User({email,username})
    const registerUser=await User.register(u,password);
    await registerUser.save();
    console.log(registerUser);
    res.render('users/login');
    }
    catch(e){
        console.log(e);
    }  
})

app.get('/', (req, res) => {
    res.render('index');
});

const Port = 3000;
app.listen(Port, () => {
    console.log(`Serving on port ${Port}`)
})