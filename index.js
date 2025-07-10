import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
const port= 3000;
const app=express();

dotenv.config();
const apikey=process.env.API_KEY;
const API_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${apikey}`;

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));

app.get("/",async(req,res)=>{
    res.render("index.ejs",{
        city:"City",
        country:"Country",
        temp:"--",
        weather:"--",
        humidity:"--",
        wind:"--",
    })
});

app.post("/submit1",async(req,res)=>{
    try {
        const result= await axios.get(API_URL+"&q="+req.body.city);
        const data=result.data;
        const city=data.city.name;
        const country=data.city.country;
        const temp= (parseFloat(data.list[0].main.temp)-273.15).toFixed(3);
        const weather= data.list[0].weather[0].main;
        const humidity= data.list[0].main.humidity;
        const wind= (data.list[0].wind.speed*3.6).toFixed(3);
        res.render("index.ejs",{
            city:city,
            country:country,
            temp:temp,
            weather:weather,
            humidity:humidity,
            wind:wind,
        });
        
    } catch (error) {
        res.render("index.ejs",{
            city: JSON.stringify(error.message),
            country:"--",
            temp:"--",
            weather:"--",
            humidity:"--%",
            wind:"--",
        });
    }
});
app.post("/submit2",async(req,res)=>{
    try {
        const result= await axios.get(API_URL+"&lat="+req.body.lat+"&lon="+req.body.lon);
        const data=result.data;
        const city=data.city.name;
        const country=data.city.country;
        const temp= parseInt(data.list[0].main.temp)-273;
        const weather= data.list[0].weather[0].main;
        const humidity= data.list[0].main.humidity;
        const wind= data.list[0].wind.speed*3.6;
        res.render("index.ejs",{
            city:city,
            country:country,
            temp:temp,
            weather:weather,
            humidity:humidity,
            wind:wind,
        });
        
    } catch (error) {
        res.render("index.ejs",{
            city: JSON.stringify(error.message),
            country:"--",
            temp:"--",
            weather:"--",
            humidity:"--%",
            wind:"--",
        });
    }
})
app.listen(port, ()=>{
    console.log(`Server is running on the port:${port}`);
})