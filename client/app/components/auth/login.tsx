"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGooogle } from "react-icons/fc";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const login: FC<Props> = (props: Props) => {
  const [show, setShow] = useState(false);
  return <div></div>;
};

export default login;
