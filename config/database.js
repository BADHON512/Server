import mongoose from "mongoose";
import  Mongoose  from "mongoose";

const connectDB=async ()=>{
    mongoose.set('strictQuery', false)
    const {connection}=await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database is connect with ${connection.host}`);
}
export default connectDB