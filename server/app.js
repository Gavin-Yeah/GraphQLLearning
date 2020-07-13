const express = require('express');

const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/gql-ninja",{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.once('open',()=>{console.log('connected to database')});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
    
}));

app.listen(4000,()=>{
    console.log('the server is listening');
});

