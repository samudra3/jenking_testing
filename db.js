import mongoose from 'mongoose';

async function connectdb(){
     await mongoose.connect('mongodb://mongo_db/db');
     console.log('successfully connected');
}

export default connectdb;