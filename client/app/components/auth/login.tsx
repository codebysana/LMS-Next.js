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
import { styles } from "../../styles/style";

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

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Login with LMS</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className={`${styles.label}`}></label>
        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          name=""
          value={values.email}
          onChange={handleChange}
          className={`${
            errors.email && touched.email && "border-red-500"
          } w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
        />
      </form>
    </div>
  );
};

export default login;
