import connectToDB from "@/database/db"
import isLogin from "./isLogin";
import orderModel from "@/models/order.module";

const isAccessToSource = async (sourceID: string) => {
    try {
        connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const isAccess = await orderModel.findOne({ productID: sourceID, userID: isLoginUser._id });
        if (!isAccess) return false
        return true
    } catch (error) {
        throw new Error('Error To Ckeck Access To Source');
    }
}

export default isAccessToSource