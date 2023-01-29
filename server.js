import app from './app.js';
import connectDB from './config/database.js';
import router from './routes/user.js';




app.get("/",(req,res,next)=>{
    res.send("Server  running now")
})

// UserRouter inmport
  app.use("/api/v1",router)


connectDB()
app.listen(process.env.PORT,()=>{
    console.log(`Server is working ${process.env.PORT}`);
})