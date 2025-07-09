"use client";
import React from "react";
import AdminSidebar from "../../../components/admin/sidebar/AdminSidebar";
import Heading from "../../../utils/Heading";
import DashboardHeader from "../../../components/admin/DashboardHeader";
import EditCourse from "../../../components/admin/courses/EditCourse";

type Props = {};

const page = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <Heading
        title="ScholarNet - Admin"
        description="ScholarNet is a platform for students to learn and get help from teachers."
        keywords="Programming, Mern, Redux, Machine Learning"
      />
      <div className="flex h-screen">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          {/* <CreateCourse /> */}
          <EditCourse id={id} />
        </div>
      </div>
    </div>
  );
};

export default page;
