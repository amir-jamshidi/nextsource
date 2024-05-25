'use server'
import isLogin from "@/middlewares/isLogin"
import requestModel from "@/models/request.module";

export const getMyRequests = async () => {
    try {
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const requests = await requestModel.find({ userID: isLoginUser._id });
        return requests
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const addNewRequest = async () => {
    try {

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}