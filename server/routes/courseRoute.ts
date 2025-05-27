import express from "express";
import { isAuthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestions,
  addReview,
  deleteCourse,
  getAllCourses,
  getCourse,
  getCourseByUser,
  reviewsReply,
  updateCourse,
  uploadCourse,
} from "../controllers/courseController";
import { authorizeRoles } from "../controllers/userController";
const router = express.Router();

router.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

router.put(
  "/update-course/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateCourse
);

router.get("/get-course/:id", getCourse);

// router.get("/get-courses", getAllCourses);

router.get("/get-course-content/:id", isAuthenticated, getCourseByUser);

router.put("/add-question", isAuthenticated, addQuestions);

router.put("/add-answer", isAuthenticated, addAnswer);

router.put("/add-review/:id", isAuthenticated, addReview);

router.put(
  "/add-reply",
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

router.delete(
  "/delete-course/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteCourse
);


export default router;
