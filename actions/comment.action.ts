'use server'

import connectToDB from "@/database/db"
import isLogin from "@/middlewares/isLogin";
import commentModel from "@/models/comment.module";
import userModel from "@/models/user.module";

export const getComments = async (limit: number, productID: string) => {
    try {
        await connectToDB();
        const comments = await commentModel.find({}).populate({ path: 'userID', model: userModel }).populate({ path: 'answerUserID', model: userModel }).lean();
        return comments
    } catch (error) {
        console.log(error);
        throw new Error('خطای ناشناخته');
    }
}

export const addNewComment = async (comment: {}) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin()

        await commentModel.create({
            userID: '6626d29fc0b0bc0e5d4cc09d',
            productID: '662806752c35f0dd2dae0b05',
            body: 'سلام و عرض ادب و خسته نباشید . ببخشید از کدوم نسخه نکست جی اس استفاده کردید ؟ نسخه دوازده یا بالاتر از اون ؟',
            rate: 5,

        })
    } catch (error) {

    }
}