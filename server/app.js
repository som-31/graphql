
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cors
app.use(cors());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/', {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
 schema, 
 graphiql : true
}));

app.get('', (req, res)=>{
   res.send('Hi There');
});

app.listen(4000, ()=> {
    console.log('listening on port 4000');
});