'use server'
import isLogin from "@/middlewares/isLogin"
import requestModel from "@/models/request.module";
import { IRequest } from "@/types/request";

export const getMyRequests = async (filter: string) => {
    try {
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;

        const sort: any = {}
        if (!filter) sort['_id'] = -1;
        if (filter === 'newest') sort['_id'] = -1;
        if (filter === 'oldest') sort['_id'] = 1;

        const requests: IRequest[] = await requestModel.find({ userID: isLoginUser._id }).sort(sort).lean();
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