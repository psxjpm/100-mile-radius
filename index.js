const express = require('express');
const res = require('express/lib/response');
const Datastore = require('nedb');

const app = express();
app.listen(3000, ()=> console.log('listening at 3000'));
app.use(express.static('public'));   
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}, (err, data) =>{
        if (err){
            response.end();
            return;
        }
        response.json(data);
    });
});

//server code to send requests and receive responses in the client side
app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    //insert method to store lat and lon values
    database.insert(data);     
    response.json(
    {
        status:'success',
        timestamp: timestamp,
        latitude: data.lat,
        longitude: data.lon
    }
    );
});