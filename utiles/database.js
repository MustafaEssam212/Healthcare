import mongoose from 'mongoose';

const MongoUrl = process.env.MONGOURL;

if(!MongoUrl){
    throw new Error
}

let cached = global.mongoose

if (!cached){
    cached = global.mongoose = {
        conn: null,
        promise: null
    }
}

async function dbConnect(){
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MongoUrl, opts).then((mongoose) => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect