'use server'
import connectToDB from "@/database/db"
import tagModel from "@/models/tag.module";

export const getPopularTags = async () => {
    try {
        await connectToDB();
        const tags = await tagModel.find({}).sort({ sourceCount: -1 }).lean();
        return tags
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}