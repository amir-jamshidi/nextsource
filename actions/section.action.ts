import connectToDB from "@/database/db"
import sectionModel from "@/models/section.module";

export const getSections = async () => {
    try {
        await connectToDB();
        const sections = await sectionModel.find({}).lean();
        return sections
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}