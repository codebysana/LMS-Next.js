import express from "express";
import { isAuthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestions,
  addReview,
  deleteCourse,
  generateVideoUrl,
  getAllAdminCourses,
  getAllCourses,
  getCourse,
  getCourseByUser,
  reviewsReply,
  updateCourse,
  uploadCourse,
} from "../controllers/courseController";
import {
  authorizeRoles,
  updateAccessToken,
} from "../controllers/userController";
const router = express.Router();

router.post(
  "/create-course",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

router.put(
  "/update-course/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  updateCourse
);

router.get("/get-course/:id", getCourse);

router.get(
  "/get-admin-courses",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllAdminCourses
);

router.get(
  "/get-course-content/:id",
  updateAccessToken,
  isAuthenticated,
  getCourseByUser
);

router.put("/add-question", updateAccessToken, isAuthenticated, addQuestions);

router.put("/add-answer", updateAccessToken, isAuthenticated, addAnswer);

router.put("/add-review/:id", updateAccessToken, isAuthenticated, addReview);

router.put(
  "/add-reply",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  reviewsReply
);

// for admin
router.get(
  "/get-courses",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllCourses
);

// video url
router.post("/getVdoCipherOTP", generateVideoUrl);

router.delete(
  "/delete-course/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  deleteCourse
);

export default router;
