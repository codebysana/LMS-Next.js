import React, { FC } from "react";
import CoursePlayer from "../../../utils/CoursePlayer.tsx";

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
  return (
    <div className="w-[90%] m-auto py-5 mb-5">
      <div className="w-full relative">
        <div className="w-full mt-10">
          <CoursePlayer
            videoUrl={courseData?.videoUrl}
            title={courseData?.title}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;

// API_SECRET = QZkhG4F5SpSohySJSxWhIP67auLNxH8CkGGcwrZ8eGGzq6aPOZ3ZOp8t143NUrAm
