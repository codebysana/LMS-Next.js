import { Request, Response, NextFunction } from "express";
import courseModel from "../models/courseModel";
import { catchAsyncError } from "../middleware/catchAsyncError";

// create course
export const createCourse = catchAsyncError(
  async (data: any, res: Response) => {
    const course = await courseModel.create(data);
    res.status(201).json({
      success: true,
      course,
    });
  }
);

// Course Service
export const getAllCoursesService = async(res: Response) => {
  const courses = await courseModel.find().sort({createdAt: -1});
  res.status(201).json({
    success:true,
    courses
  })
}