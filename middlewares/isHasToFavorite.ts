import connectToDB from "@/database/db";
import isLogin from "./isLogin"
import favoriteModel from "@/models/favorite.module";
import { IUser } from "@/types/user";

const isHasToFavorite = async (productID: string) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin() as IUser;
        if (!isLoginUser) return false;
        const isHas = await favoriteModel.findOne({ productID, userID: isLoginUser._id });
        if (!isHas) return false;
        return true
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export default isHasToFavorite