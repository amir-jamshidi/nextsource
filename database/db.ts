import mongoose from "mongoose";

const mongoAddress = process.env.MONGO_URL as string || 'mongodb://devamir2_amir:amir.h.j@localhost:27017/devamir2_source'

const connectToDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(mongoAddress)
            console.log('MongoDB Connected !!!');
        }
    } catch (error) {
        console.log('Error Connect To DB');
    }
}
export default connectToDB