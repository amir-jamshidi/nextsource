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


export const LoginUser = async (phone: string) => {
    try {
        await connectToDB();
        await verifyModel.deleteMany({ phone });
        const code = codeGenerator();
        const expireTime = timeGenerator(5);
        const verify = await verifyModel.create({ phone, code, expireTime });
        if (!verify) throw new Error('خطای ناشناخته')
        return { state: true, message: "کد تایید ارسال شد" }
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const VerifyCodeUser = async (phone: string, code: number) => {
    try {
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
            return { state: true, message: "ورود به حساب موفق بود" }

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
            return { state: true, message: 'ثبت نام انجام شد' }
        }

    } catch (error) {
        throw new Error('خطای ناشناخته');
    }
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
        const cashBacks = (await orderModel.find({ userID: isLoginUser._id }).lean()).map(order => { return { title: 'کش بک', price: order.cashBack, createdAt: order.createdAt } });
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

        const orders = await orderModel.find({ userID: isLoginUser._id }).limit(4).lean() as IOrder[];
        const tickets = await ticketModel.find({ userID: isLoginUser._id }).limit(4).lean() as ITicket[];
        const requests = await requestModel.find({ userID: isLoginUser._id }).limit(4).lean() as IRequest[];

        if (!orders || !tickets || !requests) return false


        const orderCount = await orderModel.find({ userID: isLoginUser._id }).countDocuments()
        const ticketCount = await ticketModel.find({ userID: isLoginUser._id }).countDocuments()
        const requestCount = await requestModel.find({ userID: isLoginUser._id }).countDocuments()

        return { orders, tickets, requests, orderCount, ticketCount, requestCount };

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}