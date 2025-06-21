/* eslint-disable react/jsx-no-undef */
import { Box, IconButton, Typography } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";
import Image from "next/image";
import React, { FC, JSX, useEffect, useState } from "react";
import {
  MdArrowBackIos,
  MdManageHistory,
  MdOndemandVideo,
  MdOutlineArrowForwardIos,
  MdPeopleOutline,
  MdQuiz,
  MdWysiwyg,
} from "react-icons/md";
import { useSelector } from "react-redux";
import avatarDefault from "../../../../public/assets/avatar.jpg";
// import "react-pro-sidebar/dist/css/style.css";
import { useTheme } from "next-themes";
import { HiOutlineZoomOut } from "react-icons/hi";
import { RiGlobeLine, RiGroupFill, RiReceiptLine } from "react-icons/ri";
import { FcSettings, FcVideoCall } from "react-icons/fc";
import { BiBarChart, BiMapPin } from "react-icons/bi";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[16px] !font-Poppins">{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

const AdminSidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setLogout(true);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${
            theme === "dark" ? "#111C43 !important" : "#fff !important"
          }`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          opacity: 1,
        },
        "& .pro-menu-item": {
          color: `${theme !== "dark" && "#000"}`,
        },
      }}
      className="!bg-white dark:bg-[#111C43]"
    >
      <ProSidebar
        collapsed={isCollapsed}
        // style={{
        //   position: "fixed",
        //   top: 0,
        //   left: 0,
        //   height: "100vh",
        //   width: isCollapsed ? "0%" : "16%",
        // }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MdOutlineArrowForwardIos /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Link href={"/"}>
                  <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
                    Mentora
                  </h3>
                </Link>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="inline-block"
                >
                  <MdArrowBackIos className="text-black dark:text-[#fffffffc1" />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={user.avatar ? user.avatar.url : avatarDefault}
                  alt="profile-user"
                  width={100}
                  height={100}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "3px solid #5b5fe6",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text[20px] text-black dark:text-[#ffffffc1]"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  className="!text[20px] text-black dark:text-[#ffffffc1] capitalize"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HiOutlineZoomOut />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className="!text[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 25px" }}
            >
              {!isCollapsed && "Data"}
            </Typography>
            <Item
              title="Users"
              to="/admin/users"
              icon={<RiGroupFill />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Invoices"
              to="/admin/invoices"
              icon={<RiReceiptLine />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              className="!text[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 25px" }}
            >
              {!isCollapsed && "Content"}
            </Typography>

            <Item
              title="Create Course"
              to="/admin/create-course"
              icon={<FcVideoCall />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Live Courses"
              to="/admin/courses"
              icon={<MdOndemandVideo />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              className="!text[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 25px" }}
            >
              {!isCollapsed && "Customization"}
            </Typography>
            <Item
              title="Hero"
              to="/admin/hero"
              icon={<RiGlobeLine />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQs"
              to="/admin/faqs"
              icon={<MdQuiz />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Categories"
              to="/admin/categories"
              icon={<MdWysiwyg />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              className="!text[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 25px" }}
            >
              {!isCollapsed && "Controllers"}
            </Typography>
            <Item
              title="Manage Team"
              to="/admin/team"
              icon={<MdPeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className="!text[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 25px" }}
            >
              {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title="Courses Analytics"
              to="/admin/courses-analytics"
              icon={<BiBarChart />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Orders Analytics"
              to="/admin/orders-analytics"
              icon={<BiMapPin />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Users Analytics"
              to="/admin/users-analytics"
              icon={<MdManageHistory />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className="!text[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 25px" }}
            >
              {!isCollapsed && "Extras"}
            </Typography>
            <Item
              title="Settings"
              to="/admin/settings"
              icon={<FcSettings />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default AdminSidebar;
