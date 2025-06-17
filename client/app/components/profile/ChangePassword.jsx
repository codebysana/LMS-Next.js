import React, { useState } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChangeHandler = (e: any) => {};
  return (
    <>
      <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
        <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-black dark:text-[#fff] pb-2">
          Change Password
        </h1>
      </div>

      <div className="w-full">
        <form
          onSubmit={passwordChangeHandler}
          aria-required
          className="flex flex-col items-center"
        >
          <div className="w-full md:w-1/2 mt-5">
            <label className="block pb-2 text-black dark:text-[#fff]">
              Enter Old Password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="w-full mt-2 800px:w-[60%]">
            <label className="block pb-2 text-black dark:text-[#fff]">
              Enter your new password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="w-full mt-2 800px:w-[60%]">
            <label className="block pb-2 text-black dark:text-[#fff]">
              Confirm Password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="submit"
              className={`w-[95%] h-[40px] border border-[#37a39a] text-center text-black mt-8 800px:mb-0 rounded-[3px] cursor-pointer dark:text-[#fff]`}
              required
              value="Update"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
