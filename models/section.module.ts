import { ISection } from '@/types/section';
import { Schema, model, models } from 'mongoose';

const sectionSchema = new Schema<ISection>({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

const sectionModel = models.Section || model('Section', sectionSchema);

export default sectionModel