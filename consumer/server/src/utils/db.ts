import mongoose from "mongoose";


    const url = process.env.MONGO_URL || 'mongodb://localhost:27017/customer_tracking'

mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));