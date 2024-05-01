'use server'

import connectToDB from "@/database/db"
import isLogin from "@/middlewares/isLogin";
import commentModel from "@/models/comment.module";
import userModel from "@/models/user.module";
import { IUser } from "@/types/user";
import { Types } from "mongoose";

interface AddComment {
    body: string,
    rate: number,
    productID: string
}

export const getComments = async (limit: number, productID: string) => {
    try {
        await connectToDB();
        const comments = await commentModel.find({ productID }).populate({ path: 'userID', model: userModel }).populate({ path: 'answerUserID', model: userModel }).limit((limit * 5)).lean();
        return comments
    } catch (error) {
        console.log(error);
        throw new Error('خطای ناشناخته');
    }
}

export const addNewComment = async (body: string, rate: number, productID: string) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin() as IUser
        if (!Types.ObjectId.isValid(productID)) return { state: false, message: 'مقادیر ارسالی نا معتبره' }
        if (!isLoginUser) return { state: false, message: 'شما لاگین نیستید' }
        await commentModel.create({
            userID: isLoginUser._id,
            productID,
            body,
            rate,
            answerUserID: isLoginUser._id
        })
        return { state: true, message: 'نظر شما ارسال شد و بزودی تایید میشه' }
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}