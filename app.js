const express = require('express');
const expressGraphQL = require('express-graphql');
const app =express();
const schema = require('./schema')
app.use('/graphql',expressGraphQL({
  schema,
  graphiql:true
}))
app.listen(5000,()=>{
  console.log("Listening");
})
