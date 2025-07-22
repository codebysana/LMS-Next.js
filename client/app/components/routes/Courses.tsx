import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useEffect, useState } from "react";

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
        </div>;
    </div>
  );
};

export default Courses;
