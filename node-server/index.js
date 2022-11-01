const express=require('express')
const app=express()
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: "50000"
}));
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain)
app.use(cors())
app.get("/signIn",(req,res)=>{
    console.log(req.body)
    res.send("ok.......")
})
app.listen(2000,(e)=>{
    if(e)
    throw e
    console.log('Lisenting at 2000...')
})