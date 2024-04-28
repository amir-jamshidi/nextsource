import orderPlanModel from "@/models/orderPlan.module";
import isLogin from "./isLogin"
import { IOrderPlan } from "@/types/orderPlan";

const isHavPlan = async () => {
    try {
        const user = await isLogin();
        if (!user) return false;
        const isHavPlanUser = await orderPlanModel.findOne({ userID: user._id }) as IOrderPlan
        if (!isHavPlanUser) return false;
        if (Date.now() > isHavPlanUser.expireTime) return false;
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export default isHavPlan