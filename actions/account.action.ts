'use server'
import connectToDB from "@/database/db";
import { MessageCreator } from "@/libs/MessageCreator";
import isLogin from "@/middlewares/isLogin";
import accountModel from "@/models/account.module";
import notificationModel from "@/models/notification.module";
import { IAccount } from "@/types/Account";

export const addNewAccount = async ({ cardNumber, cardBank, cardShaba, cardName }: { cardNumber: string, cardBank: string, cardShaba: string, cardName: string }) => {
    try {
        const isLoginUser = await isLogin();
        if (!isLoginUser) return MessageCreator(false, 'خطای دسترسی غیر مجاز');
        await accountModel.create({
            userID: isLoginUser._id,
            cardNumber,
            cardBank,
            cardShaba,
            cardName,
            isActive: true
        })
        await notificationModel.create({
            userID: isLoginUser._id,
            title: 'کارت بانکی',
            body: 'کارت بانکی جدید اضافه شد'
        })
        return MessageCreator(true, 'کارت بانکی اضافه شد')
    } catch (error) {
        throw new Error('خطای ناشناخته');
    }
}

export const getAccounts = async () => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const accounts = await accountModel.find({ userID: isLoginUser._id }).lean() as IAccount[];
        return accounts
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}