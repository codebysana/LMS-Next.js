"use client"
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";

interface Props{

}

const Page: FC<Props> = (props) => {
  return(
    <div>
      <Heading title="LMS" description="LMS is a platform where students can enroll and learn courses from international teachers."
      keywords="Programming, MERN, Redux Toolkit, Machine Lerning"/>
    </div>
  )
};

export default Page;