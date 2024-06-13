'use server'
import connectToDB from "@/database/db"
import tagModel from "@/models/tag.module";
import { ITag } from "@/types/tag";

export const getPopularTags = async () => {
    try {
        await connectToDB();
        const tags = await tagModel.find({}).sort({ sourceCount: -1 }).lean();
        return tags
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getTagTitleByHref = async (href: string) => {
    try {
        await connectToDB();
        const tag: ITag | null = await tagModel.findOne({ href }).lean();
        if (!tag) throw new Error('خطای ناشناخته')
        return tag.title
    } catch (error) {
        throw new Error('خطای ناشناخته')

    }
}