import express  from "express";
import Router from "./routes/index.mjs";
import db from "./config/db.mjs"

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

const app = express()

app.listen('3004', function(){
    console.log('app me chla')
})

app.use(express.json())

app.use('/', Router)