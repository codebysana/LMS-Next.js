"use client";
import React from "react";
import Heading from "@/app/utils/Heading";
import DashboardHero from "@/app/components/admin/DashboardHero";
import AdminSidebar from "@/app/components/admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import EditHero from "../../components/admin/customization/EditHero";

type Props = {};

const page = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="ScholarNet - Admin"
          description="ScholarNet is a platform for students to learn and get help from community."
          keywords="Programming, Mern, Redux, Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
