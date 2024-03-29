import express from  'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
const app = express();



app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
app.use('/posts',postRoutes);

///mongo db colloud altas

const CONNECTON_URL = 'mongodb+srv://shivamkumar:shivamkumar@sandbox.vevuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT=process.env.PORT ||5000;
mongoose.connect(CONNECTON_URL,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`))})
.catch((error)=>{console.log(error.message)});
