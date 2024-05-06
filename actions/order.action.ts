'use server'

import connectToDB from "@/database/db"
import isLogin from "@/middlewares/isLogin";
import orderModel from "@/models/order.module"
import productModel from "@/models/product.module";
import userModel from "@/models/user.module";
import { IProduct } from "@/types/product";
import { IUser } from "@/types/user";
import mongoose from "mongoose";

export const newOrder = async (productID: string, action: 'ONLINE' | 'WALLET') => {
    try {
        connectToDB();

        //Check isValid ObjectID
        if (!mongoose.Types.ObjectId.isValid(productID)) return { state: false, message: 'خطای امنیتی' }

        //Check User Login
        const isLoginUser = await isLogin() as IUser;
        if (!isLoginUser) return { state: false, message: 'خطای دسترسی غیرمجاز' }


        //Ckeck Buy Before
        const product = await productModel.findOne({ _id: productID }).lean() as IProduct;
        const isBuyCourseBefore = await orderModel.findOne({ productID: product._id, userID: isLoginUser._id });
        if (isBuyCourseBefore) return { state: false, message: 'قبلا این دوره رو خریدی' };

        //Price Logic
        let price = 0;
        if (product.isFree && product.isOff) price = 0;
        if (!product.isOff && !product.isFree) price = product.price
        if (product.isOff && !product.isFree) price = Math.floor((product.price) - (product.price * product.precentOff) / 100)

        //Check Wallet
        if (action === 'WALLET') {
            if (isLoginUser.money < price) return { state: false, message: 'موجودی کیف پول کافی نیست' }
            await userModel.findOneAndUpdate({ _id: isLoginUser._id }, { $inc: { money: -price } });
        }

        //Create Order
        const order = await orderModel.create({
            userID: isLoginUser._id,
            productID,
            price: product.price,
            count: 1,
            totalPrice: price,
            isOff: product.isOff,
            percentOff: product.precentOff,
            action,
            cashBack: (action === 'WALLET' || product.isFree) ? 0 : product.cashBack
        })

        //Check Create Document
        if (!order) return { state: false, message: 'خطای ناشناخته' }

        //Handle CashBack
        if (!product.isFree) {
            if (action === 'ONLINE') {
                await userModel.findOneAndUpdate({ _id: isLoginUser._id }, { $inc: { money: +product.cashBack } });
                await userModel.findOneAndUpdate({ _id: product.creatorID }, { $inc: { money: + ((price - product.cashBack) - ((price - product.cashBack) * 20 / 100)) } })
            }
            await userModel.findOneAndUpdate({ _id: product.creatorID }, { $inc: { money: + ((price) - ((price) * 20 / 100)) } })
        }
        //Add To BuyCount
        await productModel.findOneAndUpdate({ _id: product._id }, { $inc: { buyCount: +1 } }).lean()

        //Response
        return { state: true, message: 'پرداخت موفق' }

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}
