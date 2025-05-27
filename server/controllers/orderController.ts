import ejs from "ejs";
import path from "node:path";
import sendMail from "../utils/sendMail";
import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/errorHandler";
import userModel from "../models/userModel";
import courseModel from "../models/courseModel";
import orderModel, { IOrder } from "../models/orderModel";
import notificationModel from "../models/notificationModel";
import { getAllOrderService, newOrder } from "../services/orderService";

// create order
export const createOrder = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId, paymentInfo } = req.body as IOrder;
      const user = await userModel.findById(req.user?._id);
      const courseUserExist = user?.courses.some(
        (course: any) => course._id.toString() === courseId
      );
      if (courseUserExist) {
        return next(
          new ErrorHandler("You have already purchased this course", 400)
        );
      }

      const course: any = await courseModel.findById(courseId);

      if (!course) {
        return next(new ErrorHandler("Course not found", 404));
      }

      const data: any = {
        courseId: course._id,
        userId: user?._id,
        paymentInfo
      };

      const mailData = {
        order: {
          _id: course._id.toString().slice(0, 6),
          name: course.name,
          price: course.price,
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      };

      const html = await ejs.renderFile(
        path.join(__dirname, "../mails/orderConfirmation.ejs"),
        { order: mailData }
      );

      try {
        if (user) {
          await sendMail({
            email: user.email,
            subject: "Order Confirmation",
            template: "orderConfirmation.ejs",
            data: mailData,
          });
        }
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
      }
      user?.courses.push(course?._id);
      await user?.save();

      await notificationModel.create({
        user: user?._id,
        title: "New Order",
        message: `You have a new Order from ${course?.name}`,
      });

      course.purchased ? course.purchased += 1 : course.purchased;

      await course.save();

      newOrder(data, res, next);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// get all orders - only for admin
export const getAllOrders = catchAsyncError(async(req:Request, res:Response, next: NextFunction)=>{
  try{
    const users = await orderModel.find();
    getAllOrderService(res);
  }
   catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
  }
})