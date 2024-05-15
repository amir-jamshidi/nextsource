'use server'

import connectToDB from "@/database/db";
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
        if (!isLoginUser) return { action: false, message: 'شما لاگین نیستید' };
        if (!Types.ObjectId.isValid(productID)) return { state: false, message: 'مقادیر ارسالی نامعتبره' }
        await favoriteModel.findOneAndDelete({
            productID,
            userID: isLoginUser._id
        });
        return { state: true, message: 'از علاقه مندی ها حذف شد' }
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
        if (filter === 'expensive') sort['price'] = -1;
        if (filter === 'inexpensive') sort['price'] = 1;

        const favorites = await favoriteModel.find({ userID: isLoginUser._id }).populate({ path: 'productID', model: productModel, sort: sort }).lean() as IFavorite[];
        return favorites
    } catch (err) {
        throw new Error('خطای ناشناخته')
    }
}