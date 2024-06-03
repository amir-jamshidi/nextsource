'use server'

import connectToDB from "@/database/db"
import { MessageCreator } from "@/libs/MessageCreator";
import isLogin from "@/middlewares/isLogin";
import depositModel from "@/models/deposit.module";
import notificationModel from "@/models/notification.module";
import userModel from "@/models/user.module";
import { number } from "yup";

export const newDeposit = async (price: number) => {
    try {
        await connectToDB();
        if (!Number.isInteger(price)) return MessageCreator(false, 'مقادیر ورودی معتبر نیست')
        const isLoginUser = await isLogin();
        if (!isLoginUser) return MessageCreator(false, 'دسترسی غیرمجاز');
        if (price < 100_000) return MessageCreator(false, 'مبلغ کم تر از حد مجاز')
        await depositModel.create({
            userID: isLoginUser._id,
            price,
            isSuccess: true
        });
        await userModel.findOneAndUpdate({ _id: isLoginUser._id }, { $inc: { money: +price } });
        await notificationModel.create({
            userID: isLoginUser._id,
            title: 'واریز به کیف',
            body: 'واریز به کیف پول انجام شد'
        })
        return MessageCreator(true, 'واریز به کیف پول انجام شد')
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}