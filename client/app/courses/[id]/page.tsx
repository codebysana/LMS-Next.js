"use client";
import CourseDetailsPage from "../../components/courses/CourseDetailsPage";

const Page = ({ params }: any) => {
  return (
    <div>
      <CourseDetailsPage id={params.id} />
    </div>
  );
};
