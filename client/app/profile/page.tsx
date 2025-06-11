"use client";
import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";

type Props = {};

const page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Protected>
        <Heading
          title="LMS"
          description="LMS is a platform where students can enroll and learn courses from international teachers."
          keywords="Programming, MERN, Redux Toolkit, Machine Lerning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          route={route}
          setRoute={setRoute}
        />
      </Protected>
    </div>
  );
};

export default page;
