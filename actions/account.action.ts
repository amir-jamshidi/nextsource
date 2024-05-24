import connectToDB from "@/database/db";
import isLogin from "@/middlewares/isLogin";
import accountModel from "@/models/account.module";
import { IAccount } from "@/types/Account";

export const addNewAccount = async () => {
    try {

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