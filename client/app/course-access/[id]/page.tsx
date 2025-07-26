"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import Loader from "@/app/components/loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import CourseContent from "../../components/courses/CourseContent";

type Props = {
  params: any;
};

const page = ({ params }: Props) => {
  const id = params.id;

  const { data, isLoading, error } = useLoadUserQuery(undefined, {});

  useEffect(() => {
    if (data) {
      const isPurchased = data.user.courses.find(
        (item: any) => item._id === id
      );
      if (!isPurchased) {
        redirect("/");
      }
      if (error) {
        redirect("/");
      }
    }
  }, [data, error]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <CourseContent id={id} user={data.user} />
        </div>
      )}
    </>
  );
};

export default page;
