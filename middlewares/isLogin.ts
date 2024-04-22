import connectToDB from "@/database/db";
import VerifyToken from "@/libs/VerifyToken";
import userModel from "@/models/user.module";
import { IUser } from "@/types/user";
import { cookies } from "next/headers"

const isLogin = async () => {
    try {
        connectToDB();
        const token = cookies().get('token');
        if (!token?.value) return false;
        const _id = VerifyToken(token.value);
        if (!_id) return false
        const user = await userModel.findOne({ _id }).lean() as IUser;
        if (!user) return false
        return user
    } catch (error) {
        console.log(error);
        return false
    }
}

export default isLogin