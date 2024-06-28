'use server'
import connectToDB from "@/database/db"
import sectionModel from "@/models/section.module";
import { ISection } from "@/types/section";

export const getSections = async () => {
    try {
        await connectToDB();
        const sections = await sectionModel.find({}).lean()
        return JSON.parse(JSON.stringify(sections)) as ISection[]
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}