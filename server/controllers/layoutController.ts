import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/errorHandler";
import layoutModel from "../models/layoutModel";
import cloudinary from "cloudinary";

// create layout

export const createLayout = catchAsyncError(async(req:Request, res:Response, next: NextFunction)=>{
    try{
        const {type} = req.body;
        const isTypeExist = await layoutModel.findOne({type});
        if(isTypeExist){
            return next(new ErrorHandler(`${type} already exist`, 400));
        }
        if(type === "Banner"){
            const {image, title, subtitle} = req.body;
            const uploadBanner = await cloudinary.v2.uploader.upload(image, {
                folder: "layout",
            })
            const banner = {
                image:{
                    public_id: uploadBanner.public_id,
                    url: uploadBanner.secure_url,
                },
                title,
                subtitle
            }
            await layoutModel.create(banner);
        }
        if(type === "FAQ"){
            const {faqs} = req.body;
            const faqItems = await Promise.all(
                faqs.map(async(item:any)=>{
                    return{
                        question: item.question,
                        answer: item.answer
                    };
                })
            );
            await layoutModel.create({type: "FAQ", faqs: faqItems});
        }

        if(type === "Categories"){
            const {categories} = req.body;
            const categoriesItems = await Promise.all(
                categories.map(async(item:any)=>{
                    return{
                        title: item.title,
                    };
                })
            );
            await layoutModel.create({type: "Categories", categories: categoriesItems});
        }
         res.status(200).json({
            success: true,
            message: "Layout Created Successfully",
        })
    }catch(error:any){
        return next(new ErrorHandler(error.message, 500));
    }
})

// edit controller
export const editLayout = catchAsyncError(async(req:Request, res:Response, next: NextFunction)=>{
    try{
         const {type} = req.body;
        if(type === "Banner"){
            const bannerData:any = await layoutModel.findOne({type: "Banner"});
            const {image, title, subtitle} = req.body;
            if(bannerData){
                await cloudinary.v2.uploader.destroy(bannerData.image.public_id);
            }
            const uploadBanner = await cloudinary.v2.uploader.upload(image, {
                folder: "layout"
            })
            const banner = {
                type: "Banner",
                image:{
                    public_id: uploadBanner.public_id,
                    url: uploadBanner.secure_url,
                },
                title,
                subtitle
            }
            await layoutModel.findByIdAndUpdate(bannerData.id, {banner});
        }
        if(type === "FAQ"){
            const {faqs} = req.body;
            const faqsItem = await layoutModel.findOne({type: "FAQ"});
            const faqItems = await Promise.all(
                faqs.map(async(item:any)=>{
                    return{
                        question: item.question,
                        answer: item.answer
                    };
                })
            );
            await layoutModel.findByIdAndUpdate(faqsItem?._id,{type: "FAQ", faqs: faqItems});
        }

        if(type === "Categories"){
            const {categories} = req.body;
            const categoriesData = await layoutModel.findOne({type: "Categories"});
            const categoriesItems = await Promise.all(
                categories.map(async(item:any)=>{
                    return{
                        title: item.title,
                    };
                })
            );
            await layoutModel.findByIdAndUpdate(categoriesData?._id,{type: "Categories", categories: categoriesItems});
        }
        res.status(200).json({
            success: true,
            message: "Layout Updated Successfully",
        })
    }
    catch(error:any){
        return next(new ErrorHandler(error.message, 500));
    }
})

// get layout by type

export const getLayoutByType = catchAsyncError(async(req:Request, res:Response, next: NextFunction)=>{
    try{
        const {type} = req.body;
        const layout = await layoutModel.findOne({type});
        res.status(201).json({
            success: true,
            layout 
        })
    }
    catch(error:any){
        return next(new ErrorHandler(error.message, 500));
    }
})