import ejs from "ejs";
import path from "node:path";
import sendMail from "../utils/sendMail";
import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/errorHandler";
import notificationModel from "../models/notificationModel";
import cron from "node-cron";

// get all notifications - only admin
export const getNotification = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try{
        const notifications = await notificationModel.find().sort({createdAt: -1});
        res.status(201).json({
            success:true,
            notifications
        })
    }
    catch(error:any){
        return next(new ErrorHandler(error.message, 500));
    }
  });

  
  // update notification - only admin
  export const updateNotification = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const notification = await notificationModel.findById(req.params.id);
      if(!notification){
        return next(new ErrorHandler("Notification not found", 500));
      }else{
        notification.status ? notification.status = 'read' : notification.status;
      }
      await notification.save();

      const notificationsList = await notificationModel.find().sort({createdAt: -1});
      res.status(201).json({
        success:true,
        notificationsList
      })
    }
     catch(error:any){
        return next(new ErrorHandler(error.message, 500));
    }
  })

  // delete notification - only admin
cron.schedule("0 0 0 * * *", async() => {
  const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  await notificationModel.deleteMany({status:"read", createdAt: {$lt: monthAgo}});
  console.log("Deleted read notifications");
})