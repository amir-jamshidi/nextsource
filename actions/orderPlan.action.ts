import isLogin from "@/middlewares/isLogin";
import orderPlanModel from "@/models/orderPlan.module";
import { IOrderPlan } from "@/types/orderPlan";

export const getPlanDetails = async () => {
    try {
        const user = await isLogin();
        if (!user) return false;
        const isHavPlanUser = await orderPlanModel.findOne({ userID: user._id }) as IOrderPlan
        if (!isHavPlanUser) return false;
        if (Date.now() > isHavPlanUser.expireTime) return false;
        return isHavPlanUser
    } catch (error) {
        console.log(error);
        return false
    }
}