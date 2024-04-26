import connectToDB from "@/database/db"
import categoryModel from "@/models/category.module";

export const getPopularCategories = async () => {

    try {
        connectToDB();
        const categories = await categoryModel.find({}).limit(8).lean();
        if (!categories) throw new Error('Error To Fetch Categories')
        return categories
    } catch (error) {
        throw new Error('Error To Fetch Categories')
    }

}