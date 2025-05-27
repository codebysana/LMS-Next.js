import { Document, model, Model, Schema } from "mongoose";

interface FaqsItem extends Document{
    question: string;
    answer: string;
}

interface Category extends Document{
    title:string;
}

interface BannerImage extends Document{
    public_id: string;
    url: string;
}

interface Layout extends Document{
    type: string;
    faqs: FaqsItem[];
    categories: Category[];
    banner: {
        image: BannerImage;
        title: string;
        subtitle: string;
    };
}

const faqSchema = new Schema<FaqsItem>({
    question: {type: String},
    answer: {type: String}
})

const categorySchema = new Schema<Category>({
    title: {type: String},
})

const bannerImageSchema = new Schema<BannerImage>({
    public_id: {type: String},
    url: {type: String}
})

const layoutSchema = new Schema<Layout>({
    type: {type: String},
    faqs: [faqSchema],
    categories: [categorySchema],
    banner:{
        image: bannerImageSchema,
        title: {type: String},
        subtitle: {type: String},
    },
})

const layoutModel = model<Layout>("Layout", layoutSchema);

export default layoutModel;