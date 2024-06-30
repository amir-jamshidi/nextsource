import mongoose from "mongoose";

// const mongoAddress = process.env.MONGO_URL as string
const mongoAddress = 'mongodb+srv://devamir:amir.h.j@cluster0.oo6uzll.mongodb.net/next-source'

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