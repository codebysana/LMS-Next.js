"use client"
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header.tsx";

interface Props{

}

const Page: FC<Props> = (props) => {
  return(
    <div>
      <Heading title="LMS" description="LMS is a platform where students can enroll and learn courses from international teachers."
      keywords="Programming, MERN, Redux Toolkit, Machine Lerning"/>
      <Header/>
    </div>
  )
};

export default Page;