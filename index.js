const express = require('express');
const res = require('express/lib/response');
const Datastore = require('nedb');

const app = express();
app.listen(3000, ()=> console.log('listening at 3000'));
app.use(express.static('public'));   
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

//the api route is reused here to send a response back to the client from their get request in getData() when querying the data base
app.get('/api', (request, response) => {
    database.find({}, (err, data) =>{
        if (err){
            response.end();
            return;
        }
        response.json(data);
    });
});

//route to receive post requests and send response back to the client side (editor.html)
app.post('/api', (request, response) => {
    const data = request.body;
    database.insert(data);     
    response.json(data);
});