import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import { useState } from "react";
import Loader from "../loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import CourseDetails from "./CourseDetails";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + " - ScholarNet"}
            description={
              "ScholarNet is a programming community which is developed by Unknown for helping programmers."
            }
            keywords={data?.course?.tags}
          />
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          <CourseDetails data={data.course} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
