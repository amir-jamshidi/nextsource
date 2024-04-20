'use server'

import connectToDB from "@/database/db";
import codeGenerator from "@/libs/CodeGenerator";
import timeGenerator from "@/libs/TimeGenerator";
import TokenGenerator from "@/libs/TokenGenerator";
import VerifyToken from "@/libs/VerifyToken";
import userModel from "@/models/user.module";
import verifyModel from "@/models/verify.module";
import { IVerify } from "@/types/verify";

export const LoginUser = async (phone: string) => {
    try {
        connectToDB();
        VerifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA5MTk1ODU0NzA1IiwiaWF0IjoxNzEzNjA4MTQ1LCJleHAiOjE3MTQ0NzIxNDV9.dyqXoALk_gCkg82LW__zeNHza-_mU_r6pOyPoyHOUwI')
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
            console.log('has');
            const loginUser = await verifyModel.findOne({ phone, code }).lean() as IVerify;
            if (!loginUser) return 'Not Found User'
            if (Date.now() > loginUser.expireTime) return 'Expire Time';
            // Set Cookie And Token
            return 'ME'
        } else {
            //Register
            console.log('object');
            const registerUser = await userModel.create({ phone });
            TokenGenerator(phone);
            return 'OL'
            //Set Cookie And Token
        }

    } catch (error) {
        console.log(error);
    }
}