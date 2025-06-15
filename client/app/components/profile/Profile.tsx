"use client";
import React, { FC, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogoutQuery } from "../../../redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import ProfileInfo from "./ProfileInfo";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(1);
  const [avatar, setAvatar] = useState(null);
  const [logout, setLogout] = useState(false);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

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
      </div>
    </div>
  );
};

export default Profile;
