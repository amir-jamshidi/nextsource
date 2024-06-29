'use server'

import connectToDB from "@/database/db";
import codeGenerator from "@/libs/CodeGenerator";
import timeGenerator from "@/libs/TimeGenerator";
import TokenGenerator from "@/libs/TokenGenerator";
import isLogin from "@/middlewares/isLogin";
import depositModel from "@/models/deposit.module";
import orderModel from "@/models/order.module";
import orderPlanModel from "@/models/orderPlan.module";
import requestModel from "@/models/request.module";
import ticketModel from "@/models/ticket.module";
import userModel from "@/models/user.module";
import verifyModel from "@/models/verify.module";
import withdrawModel from "@/models/withdraw.module";
import { IOrder } from "@/types/order";
import { IRequest } from "@/types/request";
import { ITicket } from "@/types/ticket";
import { IUser } from "@/types/user";
import { IVerify } from "@/types/verify";
import { cookies } from "next/headers";
import { MessageCreator } from '@/libs/MessageCreator';
import productModel from "@/models/product.module";
import notificationModel from "@/models/notification.module";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import request from 'request'


export const LoginUser = async (phone: string) => {
    try {
        await connectToDB();
        await verifyModel.deleteMany({ phone });
        const code = codeGenerator();
        const expireTime = timeGenerator(5);
        const verify = await verifyModel.create({ phone, code, expireTime });

        request.post(
            {
                url: "http://ippanel.com/api/select",
                body: {
                    op: "pattern",
                    user: "u09928168447",
                    pass: "Faraz@1402546340042007",
                    fromNum: "3000505",
                    toNum: phone,
                    patternCode: "ls41ct0qdyjrfed",
                    inputData: [{ "verification-code": code }],
                },
                json: true,
            }
        );

        if (!verify) throw new Error('خطای ناشناخته')
        return { state: true, message: "کد تایید ارسال شد" }
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const VerifyCodeUser = async (phone: string, code: number) => {

    await connectToDB();
    //Check User Register Before 
    const isRegisterBefore = await userModel.findOne({ phone }).lean() as IUser;
    const verifyDocument = await verifyModel.findOneAndUpdate({ phone }, { $inc: { times: +1 } }, { new: true }).lean() as IVerify;
    if (verifyDocument.times > 3) return { state: false, message: "لطفا بعدا تلاش کن" }

    if (isRegisterBefore) {
        //Login
        const loginUser = await verifyModel.findOne({ phone, code }).lean() as IVerify;
        if (!loginUser) return { state: false, message: "کد وارد شده اشتباهه" }
        if (Date.now() > loginUser.expireTime) return { state: false, message: "کد وارد شده منقضی شده" };
        // Set Cookie And Token
        cookies().set({
            name: 'token',
            value: TokenGenerator(isRegisterBefore._id),
            expires: Date.now() + 1000 * 60 * 60 * 24 * 15
            , httpOnly: true
        })
        await verifyModel.deleteMany({ phone })
        revalidatePath('/', 'layout');
        //  return { state: true, message: "ورود به حساب موفق بود" }
    } else {
        //Register
        const isVerify = await verifyModel.findOne({ phone, code }).lean() as IVerify;
        if (!isVerify) return { state: false, message: "کد وارد شده اشتباهه" }
        if (Date.now() > isVerify.expireTime) return { state: false, message: "کد وارد شده منقضی شده" };
        const registerUser = await userModel.create({ phone });
        cookies().set({
            name: 'token',
            value: TokenGenerator(registerUser._id),
            expires: Date.now() + 1000 * 60 * 60 * 24 * 15,
            httpOnly: true
        })
        await verifyModel.deleteMany({ phone })
        await notificationModel.create({
            userID: registerUser._id,
            title: 'کاربر گرامی',
            body: 'لطفا مشخصات خود را بروز کنید',
            href: '/p-user/infos'
        })
        //return { state: true, message: 'ثبت نام انجام شد' }
    }
    revalidatePath('/', 'layout');
    redirect('/')
}

export const getWalletWithdraw = async () => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;

        const orders = await orderModel.find({ action: 'WALLET', userID: isLoginUser._id }).lean();
        const ordersPlan = await orderPlanModel.find({ action: 'WALLET', userID: isLoginUser._id })
        const withdraws = await withdrawModel.find({ userID: isLoginUser._id })

        const ordersArr = orders.map(order => { return { title: 'خرید سورس کد', price: order.totalPrice, createdAt: order.createdAt } })
        const ordersPlanArr = ordersPlan.map(order => { return { title: 'خرید پلن', price: order.price, createdAt: order.createdAt } })
        const withdrawsArr = withdraws.map(withdraw => { return { title: 'واریز به حساب', price: withdraw.price, createdAt: withdraw.createdAt } })

        return [...ordersArr, ...ordersPlanArr, ...withdrawsArr];

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getWalletDeposit = async () => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const cashBacks = (await orderModel.find({ userID: isLoginUser._id, cashBack: { $gt: 0 } }).lean()).map(order => { return { title: 'کش بک', price: order.cashBack, createdAt: order.createdAt } });
        const deposits = (await depositModel.find({ userID: isLoginUser._id }).lean()).map(deposit => { return { title: 'واریز از کارت', price: deposit.price, createdAt: deposit.createdAt } });
        return [...cashBacks, ...deposits]
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getDashboard = async () => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;

        const orders = await orderModel.find({ userID: isLoginUser._id }).limit(4).populate({ path: 'productID', model: productModel }).lean() as IOrder[];
        const tickets = await ticketModel.find({ userID: isLoginUser._id }).limit(3).lean() as ITicket[];
        const requests = await requestModel.find({ userID: isLoginUser._id }).limit(3).lean() as IRequest[];

        if (!orders || !tickets || !requests) return false


        const orderCount = await orderModel.find({ userID: isLoginUser._id }).countDocuments()
        const ticketCount = await ticketModel.find({ userID: isLoginUser._id }).countDocuments()
        const requestCount = await requestModel.find({ userID: isLoginUser._id }).countDocuments()

        return { orders, tickets, requests, orderCount, ticketCount, requestCount };

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const changeInfos = async (fullname: string, email: string, bio: string) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return MessageCreator(false, 'خطای دسترسی')
        await userModel.findOneAndUpdate({ _id: isLoginUser }, {
            bio,
            fullname,
            email
        })
        await notificationModel.create({
            userID: isLoginUser._id,
            title: 'تغییر مشخصات',
            body: 'مشخصات شما با موفقیت تغییر کرد'
        })
        return MessageCreator(true, 'اطلاعات حساب شما ویرایش شد')
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const logout = async () => {
    cookies().delete('token');
    revalidatePath('/', 'layout');
    redirect('/');
}