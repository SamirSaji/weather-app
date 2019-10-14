const request = require('request')

// const url = 'https://api.darksky.net/forecast/3d200628cf267848a64f7bcde9ef3285/37.8267,-122.4233'

// request ({url: url, json: true}, (error, response) => {
 
//     if(error){
//         console.log('Unable to connect the network')
//     }
//     else if(response.body.error){
//         console.log('Invalid Adress')
//     }
//     else{
//         console.log('The Temperature is '+ response.body.currently.temperature +'c. Today climate is ' + response.body.currently.summary )
//     }
// })

const geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FtaXJzYWppIiwiYSI6ImNrMXA2dXVrdDByZmIzbW83ZGw0ZGhoMXoifQ.kvVMlaBe1rxLIxIjcyeZuQ'

request ({url: geocode, json: true}, (error, response) => {

    if(error){
        console.log('Unable to connect the network')
    }
    else if(response.body.error){
        console.log('Invalid Location')
    }
    else{
        console.log('The Latitude is '+ response.body.features[0].center[0]  +' and The Longitude is  ' + response.body.features[0].center[1] )
    }
});