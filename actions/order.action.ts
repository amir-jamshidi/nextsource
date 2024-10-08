'use server'

import connectToDB from "@/database/db"
import isLogin from "@/middlewares/isLogin";
import adminNotificationModel from "@/models/adminNotifications.model";
import notificationModel from "@/models/notification.module";
import orderModel from "@/models/order.module"
import productModel from "@/models/product.module";
import sellerModel from "@/models/seller.module";
import userModel from "@/models/user.module";
import { IOrder } from "@/types/order";
import { IProduct } from "@/types/product";
import { IUser } from "@/types/user";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";

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

        //Notification
        await notificationModel.create({
            userID: isLoginUser._id,
            title: 'خرید سورس',
            body: 'سفارش شما با موفقیت ثبت شد'
        });

        //Set Score For Seller

        const seller = await sellerModel.findOneAndUpdate({ _id: product.sellerID }, {
            $inc: { score: price > 0 ? +Math.floor(price / 1000) : +0, sellCount: +1 }
        })


        await adminNotificationModel.create({ type: 'ORDER' })


        //Revalidate Page
        revalidatePath(`/product/${product.href}`)

        //Response
        return { state: true, message: 'پرداخت موفق' }

    } catch (error) {
        console.log(error)
        throw new Error('خطای ناشناخته')
    }
}


/* User Panel */

export const getMyOrders = async (filter: string) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false

        const sort: any = {};
        if (!filter) sort['_id'] = -1;
        if (filter === 'newest') sort['_id'] = -1;
        if (filter === 'oldest') sort['_id'] = 1;
        if (filter === 'expensive') sort['totalPrice'] = -1;
        if (filter === 'inexpensive') sort['totalPrice'] = 1;

        const orders = await orderModel.find({ userID: isLoginUser._id }).populate({ path: 'productID', model: productModel }).sort(sort).lean() as IOrder[];
        return orders
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getMyOrdersFromClient = async () => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const orders = await orderModel.find({ userID: isLoginUser._id }).populate({ path: 'productID', model: productModel, select: 'title' }).select('productID').sort({ _id: -1 }).lean() as IOrder[];
        const ordersArr = JSON.parse(JSON.stringify(orders)) as IOrder[]
        return ordersArr

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getOrder = async (orderID: string) => {
    try {
        await connectToDB();
        if (!mongoose.Types.ObjectId.isValid(orderID)) return false
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const order = await orderModel.findOne({ _id: orderID, userID: isLoginUser._id }).populate({ path: 'productID', model: productModel }) as IOrder
        return order
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

/* Dashboard */

export const getTotoalOrders = async () => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const totalPrice = (await orderModel.find({ userID: isLoginUser._id })).reduce((total, order) => order.price + total, 0)
        return totalPrice
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}