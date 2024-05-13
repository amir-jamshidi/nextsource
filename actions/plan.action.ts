'use server'

import connectToDB from "@/database/db"
import planModel from "@/models/plan.module";

export const getPlans = async () => {
    try {
        await connectToDB();
        const plans = await planModel.find({}).lean();
        return plans
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}