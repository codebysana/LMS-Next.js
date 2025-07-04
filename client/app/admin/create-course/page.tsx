"use client";
import React from "react";
import AdminSidebar from "../../components/admin/sidebar/AdminSidebar";
import Heading from "../../utils/Heading";
import CreateCourse from "../../components/admin/courses/CreateCourse";
import DashboardHeader from "../../components/admin/DashboardHeader";

const page = () => {
  return (
    <div>
      <Heading
        title="Mentora - Admin"
        description="Mentora is a platform for students to learn and get help from teachers."
        keywords="Programming, Mern, Redux, Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default page;
