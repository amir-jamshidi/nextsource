'use server'

import connectToDB from "@/database/db";
import codeGenerator from "@/libs/CodeGenerator";
import timeGenerator from "@/libs/TimeGenerator";
import TokenGenerator from "@/libs/TokenGenerator";
import userModel from "@/models/user.module";
import verifyModel from "@/models/verify.module";
import { IVerify } from "@/types/verify";
import { cookies } from "next/headers";


export const LoginUser = async (phone: string) => {
    try {
        connectToDB();
        await verifyModel.deleteMany({ phone });
        const code = codeGenerator();
        const expireTime = timeGenerator(5);
        const verify = await verifyModel.create({ phone, code, expireTime });
    } catch (error) {
        console.log(error);
        return error
    }
}

export const VerifyCodeUser = async (phone: string, code: number) => {
    try {

        connectToDB();
        //Check User Register Before 
        const isRegisterBefore = await userModel.findOne({ phone }).lean();
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
                value: TokenGenerator(loginUser._id),
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
        throw new Error('Error To Verify Code');
    }
}