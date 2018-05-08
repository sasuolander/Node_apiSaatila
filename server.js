const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const app = express();
const router = express.Router();
const port = process.env.Port || 8080;


console.log("test");
//Body Parser Middleware
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

app.listen(port,()=>{
    console.log("Server running")
});

router.get('/',(reg,res) => {
    rest.send({messages:'It work'})});

app.use('api',router);

//find all

router.get('/measurements',function (reg,res) {
//database command
	rest.json({

//response

})});


//save measurement
