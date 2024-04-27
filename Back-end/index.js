import express, { request, response } from "express";
import {PORT, mongodbURL} from "./config.js";
import mongoose, { get } from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app= express();
app.use(cors())
app.use(express.json());

//  app.use(cors({
//      origin: "http://127.0.0.1:5555/",
//      methods:['GET','POST','PUT','DELETE'],
//      allowedHeaders:['Content-Type'],
//  }))

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome')
});

app.use("/books",booksRoute);


mongoose
    .connect(mongodbURL)
    .then(()=>{
        console.log("App is connected to DB")
        app.listen(PORT,() => {
            console.log('App is listening to port: '+ PORT);
        });

    })
    .catch((error)=>{
        console.log(error);
    }) 