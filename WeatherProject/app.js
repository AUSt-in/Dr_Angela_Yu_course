const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
 app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , function(req,res){
    res.sendFile(__dirname + "/index.html");
    
})
app.post("/" , function(req , res){
    
    const query = req.body.cityName;
    const apiKey = "047bf8220de2ffdf17d3013f3896439b";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey;
    https.get(url , function(response){
        console.log(response);
        response.on("data" , function(data){
            const wd =  JSON.parse(data)
            const temp = wd.main.temp
            const weatherDescription = wd.weather[0].description
            
            const imageURL = "https://openweathermap.org/img/wn/04n@2x.png"
            
            res.write("<p>The weather is currently " + weatherDescription + ".<p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degree Celcius.</h1>"); 
            res.write("<img src=" + imageURL + ">");
            res.send()
            
        })
    })

})



app.listen(3000 , function(){
    console.log("app.js is running");
})