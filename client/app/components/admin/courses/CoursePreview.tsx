import React, { FC } from "react";
import CoursePlayer from "../../../utils/CoursePlayer";
import { styles } from "@/app/styles/style.js";
import Ratings from "@/app/utils/Ratings.jsx";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: any;
};

const CoursePreview: FC<Props> = ({
  active,
  setActive,
  courseData,
  handleCourseCreate,
}) => {
  const discountPercentage =
    ((courseData?.estimatedPrice - courseData?.price) /
      courseData?.estimatedPrice) *
    100;

  const discountPercentagePrice = discountPercentage.toFixed(0);
  return (
    <div className="w-[90%] m-auto py-5 mb-5">
      <div className="w-full relative">
        <div className="w-full mt-10">
          <CoursePlayer
            videoUrl={courseData?.videoUrl}
            title={courseData?.title}
          />
        </div>
        <div className="flex items-center">
          <h1 className="pt-5 text-[25px]">
            {courseData?.price === 0 ? "Free" : courseData?.price + "$"}
          </h1>
          <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80">
            {courseData?.estimatedPrice}$
          </h5>
          <h4 className="pl-5 pt-4 text-[22px]">
            {discountPercentagePrice}% Off
          </h4>
        </div>
        <div className="flex items-center">
          <div
            className={`${styles.button} !w-[180px] font-Poppins !bg-[crimson] cursor-not-allowed`}
          >
            Buy Now {courseData?.price}$
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Discount code..."
            className={`${styles.input} 1500px:!w-[50%] 1100px:w-[60%] ml-3 !mt-0`}
          />
          <div
            className={`${styles.button} !w-[120px] my-3 ml-4 font-Poppins cursor-pointer`}
          >
            Apply
          </div>
        </div>
        <p className="pb-1">. Source Code included</p>
        <p className="pb-1">. Full lifetime access</p>
        <p className="pb-1">. Certificate of completion</p>
        <p className="pb-3 800px:pb-1">. Premium Support</p>
      </div>
      <div className="w-full">
        <div className="w-full 800px:pr-5">
          <h1 className="text-[25px] font_Poppind font-[600]">
            {courseData?.name}
          </h1>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center">
              <Ratings rating={0} />
              <h5>0 Reviews</h5>
            </div>
            <h5>0 Students</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;

// API_SECRET = QZkhG4F5SpSohySJSxWhIP67auLNxH8CkGGcwrZ8eGGzq6aPOZ3ZOp8t143NUrAm
