'use server'

import menuModel from "@/models/menu.module"
import productModel from "@/models/product.module";
import { IMenu } from "@/types/menu";

export const getMenus = async () => {
    try {
        const menus = await menuModel.find({}).populate({ path: 'products', model: productModel }).lean();
        if (!menus) throw new Error('خطای ناشناخته');
        return JSON.parse(JSON.stringify(menus)) as IMenu[]
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}