'use server'

import connectToDB from "@/database/db";
import { MessageCreator } from "@/libs/MessageCreator";
import isLogin from "@/middlewares/isLogin"
import favoriteModel from "@/models/favorite.module";
import productModel from "@/models/product.module";
import { IFavorite } from "@/types/favorite";
import { IUser } from "@/types/user";
import { Types } from "mongoose";

export const addToFavorites = async (productID: string) => {
    try {
        await connectToDB()
        const isLoginUser = await isLogin() as IUser;
        if (!isLoginUser) return { state: false, message: 'شما لاگین نیستید' };
        if (!Types.ObjectId.isValid(productID)) return { state: false, message: 'مقادیر ارسالی نامعتبره' };
        //Check Is Has Before
        const isHasBefore = await favoriteModel.findOne({ productID, userID: isLoginUser._id }).lean();
        if (isHasBefore) return MessageCreator(false, 'این سورس قبلا به علاقه مندی اضافه شده')
        await favoriteModel.create({
            userID: isLoginUser._id,
            productID: productID
        });
        return { state: true, message: 'به علاقه مندی های شما اضافه شد' }
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const removeFromFavorite = async (productID: string) => {
    try {
        await connectToDB()
        const isLoginUser = await isLogin() as IUser;
        if (!isLoginUser) return MessageCreator(true, 'مقادیر ارسالی نامعتبره');
        if (!Types.ObjectId.isValid(productID)) return MessageCreator(false, 'مقادیر ارسالی نامعتبره')
        // Check Exsits
        const isExist = await favoriteModel.findOne({ productID }).lean();
        if (!isExist) return MessageCreator(false, 'این سورس در علاقه مندی شما نیست')
        await favoriteModel.findOneAndDelete({
            productID,
            userID: isLoginUser._id
        });
        return MessageCreator(true, 'از علاقه مندی ها حذف شد')
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getFavorites = async () => {
    try {
        await connectToDB()
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const favorites = await favoriteModel.find({ userID: isLoginUser._id }).lean();
        return favorites
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

/* User Panel */

export const getMyFavorites = async (filter: string) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;

        const sort: any = {};
        if (!filter) sort['_id'] = -1;
        if (filter === 'newest') sort['_id'] = -1;
        if (filter === 'oldest') sort['_id'] = 1;

        const favorites = await favoriteModel.find({ userID: isLoginUser._id }).populate({ path: 'productID', model: productModel }).sort(sort).lean() as IFavorite[];
        return favorites
    } catch (err) {
        throw new Error('خطای ناشناخته')
    }
}