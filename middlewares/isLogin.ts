import VerifyToken from "@/libs/VerifyToken";
import userModel from "@/models/user.module";
import { IUser } from "@/types/user";
import { cookies } from "next/headers"

const isLogin = async () => {
    try {
        const token = cookies().get('token');
        if (!token?.value) return false;
        const phone = VerifyToken('token');
        if (!phone) return false
        const user = await userModel.findOne({ phone }).lean() as IUser;
        if (!user) return false
        return user
    } catch (error) {
        console.log(error);
        return false
    }
}

export default isLogin