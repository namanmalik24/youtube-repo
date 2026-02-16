import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"  
}
);

connectDB().then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    }   );  
}).catch((err)=>{
    console.log("mongoDB connection failed", err);
});



























// import express from "express";  

// const app = express();  

// ;( async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//         console.log("Connected to MongoDB");
//         app.on("error", (error) => {
//             console.log(error);
//             throw error;    
//         });     
        
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);   
//         })

//     } catch (error) {
//         console.log(error); 
//         throw error;    
        
//     }

// })
