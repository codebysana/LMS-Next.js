import {Request, Response, NextFunction} from "express";
import ErrorHandler from "../utils/errorHandler";
import {catchAsyncError} from "../middleware/catchAsyncError";
import { generateLastYearData } from "../utils/analyticsGenerator";
import userModel from "../models/userModel";
import courseModel from "../models/courseModel";
import orderModel from "../models/orderModel";

// get user analytics - admin
export const getUsersAnalytics = catchAsyncError(async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const users = await generateLastYearData(userModel);
         res.status(201).json({
        success:true,
        users
    })
    }
    catch(error:any){
        return next(new ErrorHandler(error.message, 500));
    }
})

// get courses analytics - admin
export const getCoursesAnalytics = catchAsyncError(async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const courses = await generateLastYearData(courseModel);
         res.status(201).json({
        success:true,
        courses
    })
    }
    catch(error:any){
        return next(new ErrorHandler(error.message, 500));
    }
})

// get order analytics - admin
export const getOrdersAnalytics = catchAsyncError(async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const orders = await generateLastYearData(orderModel);
         res.status(201).json({
        success:true,
        orders
    })
    }
    catch(error:any){
        return next(new ErrorHandler(error.message, 500));
    }
})