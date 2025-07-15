
import connectDB from "./db/index.js";
import dotenv from "dotenv";

import express from "express";
import app from "./app.js";

dotenv.config({
    path: "./env"
});
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
/*
const app = express();
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (err) => {
            console.error("Error connecting to MongoDB:", err);
            throw err;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err);
    }
})
*/