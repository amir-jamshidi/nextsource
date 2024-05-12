'use server'

import connectToDB from "@/database/db";
import productModel from "@/models/product.module";
import sellerModel from "@/models/seller.module"
import userModel from "@/models/user.module"
import { IProduct } from "@/types/product";
import { ISeller } from "@/types/seller";

export const getSellerByHref = async (sellerHref: string) => {
    try {
        await connectToDB();
        const seller = await sellerModel.findOne({ href: sellerHref }).populate({ path: 'userID', model: userModel }).lean() as ISeller;
        if (!seller) return { seller: null, products: null }
        const products = await productModel.find({ creatorID: seller.userID._id }).lean() as IProduct[];
        return { seller, products }
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
