'use server'

import { PRODUCTS_LIMIT } from "@/constants/productsLimitCount";
import connectToDB from "@/database/db";
import productModel from "@/models/product.module";
import sellerModel from "@/models/seller.module"
import userModel from "@/models/user.module"
import { IProduct } from "@/types/product";
import { ISeller } from "@/types/seller";
import { IUser } from "@/types/user";

export const getSellerByHref = async (sellerHref: string, page: number = 1) => {
    try {
        await connectToDB();
        const seller = await sellerModel.findOne({ href: sellerHref }).populate({ path: 'userID', model: userModel }).lean() as ISeller;
        if (!seller) return { seller: null, products: null, productsCount: 0 }
        const productsCount = await productModel.find({ creatorID: seller.userID._id }).countDocuments();
        const products = await productModel.find({ creatorID: seller.userID._id }).limit(page * PRODUCTS_LIMIT).lean() as IProduct[];
        return { seller, products, productsCount }
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getBestSellers = async () => {
    try {
        await connectToDB();
        const sellers = await sellerModel.find({}).sort({ score: -1 }).limit(5).populate({ path: 'userID', model: userModel }).lean()
        return sellers;
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getSellerFullname = async (href: string) => {
    try {
        await connectToDB();
        const seller: ISeller | null = await sellerModel.findOne({ href }).select('userID').populate({ path: 'userID', model: userModel, select: 'fullname' }).lean();
        if (!seller) return ''
        const user = seller.userID as IUser
        return user.fullname
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}
