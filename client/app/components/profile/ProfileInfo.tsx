import { styles } from "@/app/styles/style";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useUpdateAvatarMutation } from "@/redux/features/user/userApi";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import avatarIcon from "../../../public/assets/avatar.jpg";

type Props = {
  avatar: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ user, avatar }) => {
  const [name, setName] = useState(user.name || "");
  const [loadUser, setLoadUser] = useState(false);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const {} = useLoadUserQuery(undefined, { skip: loadUser ? false : true });

  const imageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;
        updateAvatar({
          avatar,
        });
      }
    };
     fileReader.readAsDataURL(e.target.files[0]);
  };

    useEffect(() => {
      if (isSuccess) {
        setLoadUser(true);
      }
      if (error) {
        console.log(error);
      }
    }, [isSuccess, error]);

  // useEffect(() => {
  //   if (loadUser) {
  //     refetch();
  //     setLoadUser(false); // Reset after load
  //   }
  // }, [loadUser]);

  const handleSubmit = async (e: any) => {
    console.log("Submit");
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
            alt="avatar"
            width={120}
            height={120}
            className="w-28 h-28 cursor-pointer border-[3px] border-[#37a39a] rounded-full"
          />
          <input
            type="file"
            name=""
            id="avatar"
            className="hidden"
            onChange={imageHandler}
            accept="image/png, image/jpg, image/jpeg, image/webp"
          />
          <label htmlFor="avatar">
            <div className="w-7 h-7 bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
              <AiOutlineCamera size={20} className="z-1" />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <div className="w-full md:w-1/2 mx-auto">
            <div className="w-full">
              <label className="block pb-2">Full Name</label>
              <input
                type="text"
                className={`${styles.input} w-full mb-4`}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full pt-2">
              <label className="block pb-2">Email Address</label>
              <input
                type="text"
                className={`${styles.input} w-full mb-1`}
                required
                value={user?.email}
                readOnly
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="w-full h-10 border border-[#37a39a] text-center dark:text-white text-black rounded-md mt-8 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInfo;
