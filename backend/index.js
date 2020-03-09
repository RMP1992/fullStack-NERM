const express = require('express');
const request = require('request');
require('dotenv').config();
const path = require('path');
const hbs = require("express-handlebars");
const getAPI = require('./lib/getAPI');
const mongoose = require('mongoose');
const app = express();

const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/catfacts', async(req, res) =>{
    let data = await getAPI.getCatfacts()
    // console.log(data)
    let randomNumber = Math.floor(Math.random() * (data.all.length)-1)
    //randomNumber generates a random number
    console.log(randomNumber);
    
    let facts = data.all[randomNumber].text
    //pass that random number as the index of the array
        
    // console.log(facts);
    res.render('catfacts', {
        facts
    })
    // randomFact = (facts) =>{
    //     for (i = 0; i < facts; i++){
    //         Math.floor(Math.random() * Math.floor(facts) - 1) 
    //     }
    // } 
    // randomFact()
    //the above did not work because math.random needs a number to work with, facts is not a number
});
app.get('/nasa', async(req, res) =>{
    let data = await getAPI.getNasa()
    let image = data.url
    res.render('nasa',{
        image
    })
});
app.get('/quotes', async(req, res) =>{
    let data = await getAPI.getQuotes()
    // console.log(data);
    // let dataContent = []
    // for (const item of data){
    //     dataContent.push({
    //         id: item.id,
    //         language_code: item.language_code,
    //         content: item.content,
    //         url: item.url,
    //         originator: {
    //             id: item.id,
    //             name: item.name,
    //             url: item.url,
    //         },
    //         tags: [item.tags, item.tags]
    //     })
    //     // console.log(Object.entries(dataContent[0]))
    // }
    
    // let content = data.properties
    // for (const [key, value] of Object.entries(content)){
    //     console.log(`key: ${key} , value: ${value}`)
    // }
    // let content = data.properties.content
    // console.log(Object.entries(data))
    // res.render('quotes', {
    //     content
    // })
    res.render('quotes', {content:data.content})
});
app.get('/manga', async(req, res) =>{
    let data = await getAPI.getManga()
    // fs.writeFileSync('manga.json', data);
    console.log(data.manga);


    // let randomNumber = Math.floor(Math.random() * (data.length)-1)
    // console.log(randomNumber)
    // // let manga = data.manga[randomNumber]
    // let manga = data[1]

    // console.log(manga)
    // // res.render('manga', {manga})
    res.render('manga');
});
app.get('/music', async(req,res) =>{
    let data = await getAPI.getMusic()
    // console.log(data.data.length)
    let randomNumber = Math.floor(Math.random() * (data.data.length)-1)
    // fs.writeFileSync('manga.json', data);
    
    let randomSong = data.data[randomNumber].title_short
    let randomArtist = data.data[randomNumber].artist.name
   
    res.render('music', {
        artist: randomArtist,
        music: randomSong,
    });
});
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster-frhfb.mongodb.net/userdb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.post('/login', async(req, res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let docs = await getUser(email);
    if(docs.length == 0){
        res.render('login', {err:"No user found"})
    }
    if(docs[0].password == password && docs[0].username == username){
        res.render('login', {err:"User found"})
        return
    }
    
})




app.listen(3002, ()=>{
    console.log('listening on port 3002');
});