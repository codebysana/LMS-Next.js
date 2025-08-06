"use client";
import CourseDetailsPage from "../../components/courses/CourseDetailsPage";

export const Page = ({ params }: any) => {
  return (
    <div>
      <CourseDetailsPage id={params.id} />
    </div>
  );
};

