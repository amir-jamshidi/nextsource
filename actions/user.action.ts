'use server'

import connectToDB from "@/database/db";
import codeGenerator from "@/libs/CodeGenerator";
import timeGenerator from "@/libs/TimeGenerator";
import userModel from "@/models/user.module";
import verifyModel from "@/models/verify.module";
import { IVerify } from "@/types/verify";

export const LoginUser = async (phone: string) => {
    try {
        connectToDB();
        await verifyModel.deleteMany({ phone });
        const code = codeGenerator();
        const expireTime = timeGenerator(5);
        const verify = await verifyModel.create({ phone, code, expireTime });
    } catch (error) {
        return error
    }
}

export const VerifyCodeUser = async (phone: string, code: number) => {
    try {
        connectToDB();
        //Check User Register Before 
        const isRegisterBefore = await userModel.findOne({ phone }).lean();
        const verifyDocument = await verifyModel.findOneAndUpdate({ phone }, { $inc: { times: +1 } }, { new: true }).lean() as IVerify;
        if (verifyDocument.times > 3) return 'Times Error'




        if (isRegisterBefore) {
            //Login
            const loginUser = await verifyModel.findOne({ phone, code }).lean() as IVerify;
            if (!loginUser) return 'Not Found'
            if (Date.now() > loginUser.expireTime) return 'Expire Time';
            // Set Cookie And Token
            return 'ME'
        } else {
            //Register
            const registerUser = await userModel.create({ phone });
            return 'OL'
            //Set Cookie And Token
        }

    } catch (error) {
        console.log(error);
    }
}