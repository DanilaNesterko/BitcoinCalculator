const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
   
   //let url="https://api.coindesk.com/v1/bpi/currentprice/eur.json";

   let url="https://restcountries.eu/rest/v2/name/estonia?fullText=true";

   axios.get(url).
   then((response)=> {
    //let disclaimer = response.data.disclaimer;
    //let eurRates = response.data.bpi.EUR.rate;
    //let eurCode = response.data.bpi.EUR.code;
    //let usdRates = response.data.bpi.USD.rate;
    //let usdCode = response.data.bpi.USD.code;
    let name = response.data[0].name;
    let capital = response.data[0].capital;
    let timezone = response.data[0].timezones[0];
    let currency = response.data[0].currencies[0].name;
    let regional_Block = response.data[0].regionalBlocs[0].name;

    
    res.write(`<p> Name - ${name} </p>`);
    res.write(`<p> Capital - ${capital} </p>`);
    res.write(`<p> Timezone - ${timezone} </p>`);
    res.write(`<p> Currency - ${currency} </p>`);
    res.write(`<p> Regional Block ${regional_Block} </p>`);
    res.send();

   }).
   catch((error) =>{
       console.log(error);
   });
    // console.log(request);
   // response.send('<h1>Hello, World!</h1>');
   //console.log(__dirname);
   //response.sendFile(__dirname+"/index.html");
})

/*app.post('/', function(req,res){
    let number1= Number(req.body.num1);
    let number2= Number(req.body.num2);

    let result= number1 + number2;
    console.log(req.body);
    res.send(`${result}`);
    // console.log('Number 1 ', number1);
    // console.log('Number 2 ', number2);
});*/
app.listen(3000, function(){
    console.log('Server is running on Port 3000')
})
