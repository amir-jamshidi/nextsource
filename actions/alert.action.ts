'use server'

import alertModel from "@/models/alert.module"
import { IAlert } from "@/types/alert";

export const getAlerts = async () => {
    const alerts: IAlert[] = await alertModel.find({ isShow: true }).lean()
    return alerts
}