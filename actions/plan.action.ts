'use server'

import connectToDB from "@/database/db"
import { MessageCreator } from "@/libs/MessageCreator";
import isHavPlan from "@/middlewares/isHavPlan";
import isLogin from "@/middlewares/isLogin";
import notificationModel from "@/models/notification.module";
import orderPlanModel from "@/models/orderPlan.module";
import planModel from "@/models/plan.module";
import userModel from "@/models/user.module";
import { IPlan } from "@/types/plan";
import { revalidatePath } from "next/cache";

export const getPlans = async () => {
    try {
        await connectToDB();
        const plans = await planModel.find({}).lean() as IPlan[];
        return plans
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getPlanByID = async (planID: string) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const plan = await planModel.findOne({ _id: planID }).lean() as IPlan;
        if (!plan) return false;
        return plan
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const newOrderPlan = async (action: 'ONLINE' | 'WALLET', planID: string) => {
    try {
        await connectToDB();

        //Check Login
        const isLoginUser = await isLogin();
        if (!isLoginUser) return MessageCreator(false, 'شما لاگین نیستید')

        //Check Has Plan Before
        const isHavPlanUser = await isHavPlan();
        if (isHavPlanUser) return MessageCreator(false, 'شما یک پلن فعال دارید')

        //Check Has Plan
        const plan = await planModel.findOne({ _id: planID }).lean() as IPlan;
        if (!plan) return MessageCreator(false, 'خطای امنیتی')


        //Check Enough Money
        if (action === 'WALLET') {
            if (isLoginUser.money < plan.price) return MessageCreator(false, 'موجودی کیف پول ناکافی')
            await userModel.findOneAndUpdate({ _id: isLoginUser._id }, { $inc: { money: -plan.price } })
        }

        //Create Order
        await orderPlanModel.create({
            planID,
            userID: isLoginUser._id,
            expireTime: Date.now() + plan.planTime,
            action,
            price: plan.price
        })
        await notificationModel.create({
            userID: isLoginUser._id,
            title: 'خرید پلــن',
            body: 'پلن ویژه شما فعال شد'
        })
        revalidatePath('/p-user/orders');
        return MessageCreator(true, 'پرداخت موفق')

    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
} 