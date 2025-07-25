import { useEffect, useState } from "react";
import CourseCard from "../courses/CourseCard";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";

type Props = {};

const Courses = ({}: Props) => {
  const { data, isLoading } = useGetUsersAllCoursesQuery({});
  console.log(data);
  const [courses, setCourses] = useState<any[]>([]);
  useEffect(() => {
    setCourses(data?.courses);
  }, [data]);
  return (
    <div>
      <div className={`w-[90%] 800px:w-[80%] m-auto`}>
        <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-2xl lg:text-4xl dark:text-white 800px:!leading-[6px]">
          Expand Your Career
          <span className="text-gradient">Opportunity</span>
          <br />
          Opportunity with Our Courses
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
          {courses.map((item: any, index: number) => (
            <CourseCard item={item} key={index} />
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default Courses;
