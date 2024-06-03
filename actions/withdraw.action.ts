'use server'
import { MessageCreator } from "@/libs/MessageCreator";
import isLogin from "@/middlewares/isLogin"
import notificationModel from "@/models/notification.module";
import userModel from "@/models/user.module";
import withdrawModel from "@/models/withdraw.module";

export const newWithdraw = async (price: number, accountID: string) => {
    try {

        const isLoginUser = await isLogin();
        if (!isLoginUser) return MessageCreator(false, 'خطای دسترسی');
        if (price > isLoginUser.money) return MessageCreator(false, 'خطا در مقادیر وارد شده');
        await withdrawModel.create({
            userID: isLoginUser._id,
            price,
            accountID,
            isSuccess: true,
        })
        await userModel.findOneAndUpdate({ _id: isLoginUser._id }, { $inc: { money: -price } });
        await notificationModel.create({
            userID: isLoginUser._id,
            title: 'برداشت از کیف',
            body: 'برداشت از کیف پول انجام شد'
        })
        return MessageCreator(true, 'درخواست برداشت ثبت شد');

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}
