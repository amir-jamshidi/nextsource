'use server'

import connectToDB from "@/database/db";
import menuModel from "@/models/menu.module"
import productModel from "@/models/product.module";
import { IMenu } from "@/types/menu";

export const getMenus = async () => {
    try {
        await connectToDB();
        const menus = await menuModel.find({}).populate({ path: 'products', model: productModel, select: 'title href' }).sort({ _id: 1}).lean();
        if (!menus) throw new Error('خطای ناشناخته');
        return JSON.parse(JSON.stringify(menus)) as IMenu[]
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}