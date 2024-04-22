'use server'

import menuModel from "@/models/menu.module"

export const getMenus = async () => {
    try {
        const menus = await menuModel.find({}).lean();
        if (!menus) throw new Error('خطای ناشناخته');
        return menus
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}