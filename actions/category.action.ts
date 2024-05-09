'use server'

import connectToDB from "@/database/db"
import categoryModel from "@/models/category.module";

export const getPopularCategories = async () => {
    try {
        connectToDB();
        const categories = await categoryModel.find({}).limit(8).lean();
        if (!categories) throw new Error('خطای ناشناخته')
        return categories
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

/* Categories Page */

export const getCategories = async () => {
    try {
        await connectToDB();
        const categories = await categoryModel.find().lean();
        return categories;
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}