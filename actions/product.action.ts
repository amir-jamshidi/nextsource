'use server'

import connectToDB from "@/database/db"
import categoryModel from "@/models/category.module";
import productModel from "@/models/product.module";
import tagModel from "@/models/tag.module";
import userModel from "@/models/user.module";
import { IProduct } from "@/types/product";
import mongoose from "mongoose";
import { escape } from "querystring";

/* Main Page */

export const getLatestProducts = async () => {
    try {
        await connectToDB();
        const products = await productModel.find({}).limit(8).populate({ path: 'categoryID', model: categoryModel }).populate({ path: 'tags', model: tagModel }).sort({ _id: -1 }).lean();
        if (!products) return [];
        return products
    } catch (error) {
        throw new Error('خطای ناشناخته');
    }
}

export const getBestSellerProdcuts = async () => {
    try {
        await connectToDB();
        const products = await productModel.find({}).limit(4).populate({ path: 'categoryID', model: categoryModel }).populate({ path: 'tags', model: tagModel }).sort({ buyCount: -1 }).lean();
        if (!products) return [];
        return products
    } catch (error) {
        throw new Error('خطای ناشناخته');
    }
}

export const getPopularProducts = async () => {
    try {
        await connectToDB();
        const products = await productModel.find({}).limit(4).populate({ path: 'categoryID', model: categoryModel }).populate({ path: 'tags', model: tagModel }).sort({ buyCount: -1 }).lean();
        if (!products) throw new Error('خطای ناشناخته');
        return products;
    } catch (error) {
        throw new Error('خطای ناشناخته');
    }
}

export const getPopularFrontProducts = async () => {
    try {
        await connectToDB();
        const products = await productModel.find({}).limit(4).populate({ path: 'categoryID', model: categoryModel }).populate({ path: 'tags', model: tagModel }).sort({ buyCount: -1 }).lean();
        if (!products) throw new Error('خطای ناشناخته');
        return products
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getPopularBackProducts = async () => {
    try {
        await connectToDB();
        const products = await productModel.find({}).limit(4).populate({ path: 'categoryID', model: categoryModel }).populate({ path: 'tags', model: tagModel }).sort({ buyCount: -1 }).lean();
        if (!products) throw new Error('خطای ناشناخته');
        return products
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

/* Single Page */

export const getProductByHref = async (href: string) => {
    try {
        await connectToDB();
        const product = await productModel.findOne({ href }).populate({ path: 'categoryID', model: categoryModel }).populate({ path: 'tags', model: tagModel }).populate({ path: 'creatorID', model: userModel, select: 'fullname' }).lean() as IProduct
        if (!product) return false;
        return product
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getRelatedProducts = async (id: string) => {
    try {
        await connectToDB();
        const product = await productModel.findOne({ _id: id });
        const products = await productModel.find({ categoryID: product.categoryID }).limit(8).populate({ path: 'categoryID', model: categoryModel }).populate({ path: 'tags', model: tagModel }).sort({ buyCount: -1 }).lean() as IProduct[];
        const filterProducts = products.filter(p => String(p._id) !== String(id));
        return JSON.parse(JSON.stringify(filterProducts)) as IProduct[]
    } catch (error) {
        throw new Error('خطای ناشناخته')
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
        throw new Error('خطای ناشناخته')
    }
}

/* Search Page */

export const getProductByQuery = async (query: string, filter?: string) => {
    try {

        const sort: any = {}

        if (filter === 'newest') sort['_id'] = -1
        if (filter === 'expensive') sort['price'] = -1
        if (filter === 'inexpensive') sort['price'] = 1
        if (filter === 'bestseller') sort['buyCount'] = -1
        if (filter === 'popular') sort['buyCount'] = -1


        await connectToDB();
        var regex = new RegExp(query.replace(/([.\*+?^${}()|[\]\\])/g, '\\$1'), 'g');
        const products = await productModel.find({ title: regex }).sort(sort).lean();
        return products
    } catch (error) {
        throw new Error('خطای ناشناخته');
    }
}

/* Tag Page */

export const getProductsByTagHref = async (tagHref: string) => {
    try {
        await connectToDB();
        const products = await tagModel.findOne({ href: tagHref }).populate({ path: 'products', model: productModel }).lean();
        return products
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}