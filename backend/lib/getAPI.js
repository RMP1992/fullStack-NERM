const request = require('request');
const {promisify} = require('util');
const promisifiedRequest = promisify(request);
const userSchema = require('../models/user');
const fs =require('fs');


const getCatfacts = async() =>{
    let data = await promisifiedRequest({
        method: 'GET',
        url: 'https://brianiswu-cat-facts-v1.p.rapidapi.com/facts',
        headers: {
            'x-rapidapi-host': 'brianiswu-cat-facts-v1.p.rapidapi.com',
            'x-rapidapi-key': '6ab98c4b00mshc5c8d39099ce709p1a69e4jsn72fb98b23d2e',  
        },
        json: true 
    })
    // fs.writeFileSync('../getCatfacts.json', JSON.stringify(data.body, null, 6))
    // console.log(data.body);
    return data.body 
}
const getNasa = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.nasa.gov/planetary/apod?api_key=oGb80yyGuhELDHWrVv1FJ9EdeOfxQE34sENM6sNv`,
        json: true
    })
    return data.body
};
const getQuotes = async () =>{
    let data = await promisifiedRequest({
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        qs: {language_code: 'en'},
        json: true,
        headers: {
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
            'x-rapidapi-key': '6ab98c4b00mshc5c8d39099ce709p1a69e4jsn72fb98b23d2e'
        }, 
        
    })
    return data.body
};
const getManga = async () =>{
    let data = await promisifiedRequest({
        method: 'GET',
        url: 'https://community-manga-eden.p.rapidapi.com/list/0',
        headers: {
          'x-rapidapi-host': 'community-manga-eden.p.rapidapi.com',
          'x-rapidapi-key': '6ab98c4b00mshc5c8d39099ce709p1a69e4jsn72fb98b23d2e'
        },
        json: true
    })
        return data.body
    }
const getMusic = async () =>{
    let data = await promisifiedRequest({
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        qs: {q: 'eminem'},
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '6ab98c4b00mshc5c8d39099ce709p1a69e4jsn72fb98b23d2e'
        },
        json: true,
    })
    return data.body
}
function getUser(email){
    return new Promise((resolve, reject) =>{

    
        userSchema.find({email}, (err, docs) =>{
            resolve(docs)
            
        });
    });
};


// let content = fs.readFileSync('../getCatfact.json')
// content = JSON.parse(content)

module.exports = {getCatfacts, getNasa, getQuotes, getManga, getMusic, getUser}