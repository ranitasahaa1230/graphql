import express from 'express';
import schema from './schema';
import resolvers from './resolvers';

import {graphqlHTTP} from 'express-graphql'

const app=express();

app.get("/",(req,res)=>{
    res.send('Up and running with graphql');
})

// const root={lco: ()=>console.log("hii")}
const root=resolvers;

app.use('/graphql',graphqlHTTP({//run on server on /graphql governed by graphqlHTTPS,WHICH accepts all these parameters
    schema:schema,
    rootValue:root,
    graphiql:true//imp, nice interface on web
}))

app.listen(8081,()=>console.log('Running'));

