const express=require('express');
const expressGraphql=require('express-graphql');

const app=express();

app.get('/',(req,res)=>{
    res.send("running graphql");
})

// app.use('/graphql',expressGraphql({
//     graphiql:true
// }))
app.listen("8089",()=>console.log("server running"));
