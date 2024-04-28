'use server'
import connectToDB from "@/database/db"
import isLogin from "@/middlewares/isLogin";
import orderModel from "@/models/order.module"
import productModel from "@/models/product.module";
import { IProduct } from "@/types/product";
import { IUser } from "@/types/user";
import { revalidatePath } from "next/cache";

export const newOrder = async (productID: string) => {
    try {
        connectToDB();
        const isLoginUser = await isLogin() as IUser;
        const product = await productModel.findOne({ _id: productID }).lean() as IProduct;

        let price = 0;

        if (product.isFree && product.isOff) price = 0;
        if (!product.isOff && !product.isFree) price = product.price
        if (product.isOff && !product.isFree) price = Math.floor((product.price) - (product.price * product.precentOff) / 100)

        const order = await orderModel.create({
            userID: isLoginUser._id,
            productID,
            price: product.price,
            count: 1,
            totalPrice: price,
            isOff: product.isOff,
            percentOff: product.precentOff,
        })

        if (!order) throw Error('Error to new order');

        // revalidatePath('/')

    } catch (error) {
        console.log(error);
        throw new Error('Error to new order');
    }
}
