// Express 
const  express  =require("express")

const app = express();

const port = process.env.PORT || 3000

// static path
const path = require("path");
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))
const { title } = require("process");
app.set('view engine' , 'hbs');
const viewsDirectory = path.join(__dirname,'../temp1/views')
app.set("views",viewsDirectory)
/////////////////////////////////////
var hbs = require('hbs')

const partialsPath = path.join(__dirname , "../temp1/partials")

hbs.registerPartials(partialsPath)
/////////////////////////////




app.get('/',(req, res) => {
    res.render('index', {
        title:'HOME',
        desc:"This is home page"
    })
})
app.get('/service',(req, res) => {
    res.render('service', {
        title:'SERVICE',
        name:"HEND",
        city:"homs",
        age:31,
        img1:"images/trainer-3.jpg"
    })
})
app.get('/team',(req, res) => {
    res.render('team', {
        title:'TEAM',
        name:"HEND",
        city:"homs",
        age:31,
        img1:"images/trainer-3.jpg"
    })
})
app.listen(port,()=>{
    console.log('app listening on port 3000')
})