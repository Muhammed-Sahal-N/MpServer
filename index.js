// import json server

const jsonServer=require('json-server')

// create server for mediaplayer

const Mpserver=jsonServer.create()

// create middleware

const middleware=jsonServer.defaults()

// setup route for json file in server

const route=jsonServer.router('db.json')

// setting port for running server application

const PORT=3000 || process.env.PORT


Mpserver.use(middleware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`media player is running ${PORT} a,d waiting`);
})
