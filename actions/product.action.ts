'use server'

import connectToDB from "@/database/db"
import categoryModel from "@/models/category.module";
import productModel from "@/models/product.module";

export const getLatestProducts = async () => {
    try {
        connectToDB();
        const products = await productModel.find({}).limit(8).populate({ path: 'categoryID', model: categoryModel }).sort({ _id: -1 }).lean();
        if (!products) return [];
        return products
    } catch (error) {
        throw new Error('Error To Fetch Products');
    }
}