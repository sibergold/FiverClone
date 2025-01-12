import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () =>{
    await  mongoose.connect(process.env.MONGO_URI as string).then(()=>console.log('Connecting successfully')).catch(err =>{console.log(err)})
 }
 
export default connectDB;
