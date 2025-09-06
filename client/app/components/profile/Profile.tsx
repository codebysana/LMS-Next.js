"use client";
import React, { FC, useEffect, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogoutQuery } from "../../../redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import CourseCard from "../courses/CourseCard";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(1);
  const [avatar, setAvatar] = useState(null);
  const [logout, setLogout] = useState(false);
  const [courses, setCourses] = useState([]);

  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});

  const logoutHandler = async () => {
    setLogout(true);
    await signOut();
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  useEffect(() => {
    if (data) {
      const filteredCourses = user.courses
        .map((userCourse: any) =>
          data.courses.find((course: any) => course._id === userCourse._id)
        )
        .filter((course: any) => course !== undefined);
      setCourses(filteredCourses);
    }
  }, [data]);

  return (
    <div className="w-full mx-auto flex gap-6 mt-20 mb-20">
      <div
        className={`w-[60px] md:w-[310px] h-[calc(100vh-80px)] dark:bg-slate-900 bg-white bg-opacity-90 border dark:border-white/10 border-black/10 rounded-md shadow-sm sticky ${
          scroll ? "top-28" : "top-8"
        }`}
      >
        <SideBarProfile
          user={user}
          active={active}
          setActive={setActive}
          avatar={avatar}
          logoutHandler={logoutHandler}
        />
      </div>
      <div className="w-full">
        {active === 1 && (
          <div className="w-full h-full bg-transparent">
            <ProfileInfo user={user} avatar={avatar} />
          </div>
        )}
        {active === 2 && (
          <div className="w-full h-full bg-transparent">
            <ChangePassword />
          </div>
        )}
        {active === 3 && (
          <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-3 xl:gap-[35px]">
              {courses &&
                courses.map((item: any, index: number) => (
                  <CourseCard
                    item={item}
                    key={index}
                    user={user}
                    isProfile={true}
                  />
                ))}
            </div>
            {courses.length === 0 && (
              <h1 className="text-center tex[18px] font-Poppins">
                You don't have any purchased yet
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
