'use server'

import connectToDB from "@/database/db";
import codeGenerator from "@/libs/CodeGenerator";
import timeGenerator from "@/libs/TimeGenerator";
import verifyModel from "@/models/verify.module";

export const LoginUser = async (phone: string) => {
    try {
        connectToDB();
        await verifyModel.deleteMany({ phone });
        const code = codeGenerator();
        const expireTime = timeGenerator(5);
        const verify = await verifyModel.create({ phone, code, expireTime });
    } catch (error) {
        console.log(error);
    }
}

export const VerifyCodeUser = async () => {

}