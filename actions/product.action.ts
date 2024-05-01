'use server'

import connectToDB from "@/database/db"
import categoryModel from "@/models/category.module";
import productModel from "@/models/product.module";
import { IProduct } from "@/types/product";
import mongoose from "mongoose";

/* Main Page */

export const getLatestProducts = async () => {
    try {
        await connectToDB();
        const products = await productModel.find({}).limit(8).populate({ path: 'categoryID', model: categoryModel }).sort({ _id: -1 }).lean();
        if (!products) return [];
        return products
    } catch (error) {
        throw new Error('Error To Fetch Products');
    }
}

export const getBestSellerProdcuts = async () => {
    try {
        await connectToDB();
        const products = await productModel.find({}).limit(4).populate({ path: 'categoryID', model: categoryModel }).sort({ buyCount: -1 }).lean();
        if (!products) return [];
        return products
    } catch (error) {
        throw new Error('Error To Fetch Products');
    }
}

export const getPopularProducts = async () => {
    try {
        connectToDB();
        const products = await productModel.find({}).limit(4).lean();
        if (!products) throw new Error('Error To Fetch Products');
        return products;
    } catch (error) {
        throw new Error('Error To Fetch Products');
    }
}

export const getPopularFrontProducts = async () => {
    try {
        connectToDB();
        const products = await productModel.find({}).limit(4).lean();
        if (!products) throw new Error('Error To Fetch Products');
        return products
    } catch (error) {
        throw new Error('Error To Fetch Products')
    }
}

export const getPopularBackProducts = async () => {
    try {
        connectToDB();
        const products = await productModel.find({}).limit(4).lean();
        if (!products) throw new Error('Error To Fetch Products');
        return products
    } catch (error) {
        throw new Error('Error To Fetch Products')
    }
}

/* Single Page */

export const getProductByHref = async (href: string) => {
    try {
        await connectToDB();
        const product = await productModel.findOne({ href }).populate({ path: 'categoryID', model: categoryModel }).lean() as IProduct
        if (!product) return false;
        return product
    } catch (error) {
        throw new Error('Error To Fetch Product')
    }
}

/* Cart Page */

export const getProductByID = async (id: string) => {
    try {
        await connectToDB();
        if (!mongoose.Types.ObjectId.isValid(id)) return false
        const product = await productModel.findOne({ _id: id }).populate({ path: 'categoryID', model: categoryModel }).lean() as IProduct
        if (!product) return false
        return product
    } catch (error) {
        throw new Error('Error To Fetch Product')
    }
}

export const getRelatedProducts = async (id: string) => {
    try {
        await connectToDB();
        const products = await productModel.find({}).lean() as IProduct[];
        return products
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}