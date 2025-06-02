/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props{

}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return(
    <div>
      <Heading title="LMS" description="LMS is a platform where students can enroll and learn courses from international teachers."
      keywords="Programming, MERN, Redux Toolkit, Machine Lerning"/>
      <Header open={open} setOpen={setOpen} activeItem={activeItem}/>
    </div>
  )
};

export default Page;