import mongoose from "mongoose";

const mongoAddress = process.env.MONGO_URL as string

const connectToDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(mongoAddress)
        }
        console.log('MongoDB Connected !!!');
    } catch (error) {
        console.log('Error Connect To DB');
    }
}
export default connectToDB