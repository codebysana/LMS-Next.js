import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import Loader from "../loader/Loader";

type Props = {
  id: string;
};

const CourseContent = ({ id }: Props) => {
  const { data, isLoading } = useGetCourseContentQuery(id);
  return <>{isLoading ? <Loader /> : <div></div>}</>;
};

export default CourseContent;
