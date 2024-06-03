'use server'
import connectToDB from "@/database/db";
import { MessageCreator } from "@/libs/MessageCreator";
import isLogin from "@/middlewares/isLogin"
import notificationModel from "@/models/notification.module";
import requestModel from "@/models/request.module";
import { IRequest } from "@/types/request";
import { Schema, Types } from "mongoose";
import { title } from "process";

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

export const getRequest = async (requestID: string) => {
    try {
        await connectToDB();

        if (!Types.ObjectId.isValid(requestID)) return false;

        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;

        const request: IRequest | null = await requestModel.findOne({ _id: requestID, userID: isLoginUser._id }).lean();
        if (!request) return false

        return request

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const addNewRequest = async (values: { caption: string, price: string, title: string }) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return MessageCreator(false, 'خطای دسترسی');

        await requestModel.create({
            userID: isLoginUser._id,
            title: values.title,
            caption: values.caption,
            price: Number(values.price)
        })
        await notificationModel.create({
            userID: isLoginUser._id,
            title: 'ارسال درخواست',
            body: 'درخواست سورس شما ثبت شد و به زودی پاسخ میدیم'
        })
        return MessageCreator(true, 'درخواست شما ثبت شد')
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}