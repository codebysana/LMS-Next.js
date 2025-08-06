// /* eslint-disable @typescript-eslint/no-require-imports */
// import React, { FC } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { BiSearch } from "react-icons/bi";

// type Props = {};

// const Hero: FC<Props> = (props) => {
//   return (
//     <div className="w-full 1000px:flex items-center">
//       <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero-animation">
//         <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
//           <Image
//             src={require("../../../public/assets/admin-login.jpg")}
//             alt="banner"
//             className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
//           />
//         </div>
//         <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
//           <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Hind py-2 1000px:leading-[75px] 1500px:w-[60%]">
//             Improve your online Learning Experience better instantly
//           </h2>
//           <br />
//           <p className="dark:text-[#edfff4] text-[#000000ac] font-Hind font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[70%]">
//             We have 40k+ online courses & 500k+ online registered students. Find
//             your desired courses from them.
//           </p>
//           <br />
//           <br />
//           <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
//             <input
//               type="search"
//               placeholder="Search Courses..."
//               className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none"
//             />
//             <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
//               <BiSearch className="text-white" size={30} />
//             </div>
//           </div>
//           <br />
//           <br />
//           <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
//             <Image
//               src={require("../../../public/assets/client-01.jpg")}
//               alt=""
//               className="rounded-full"
//             />
//             <Image
//               src={require("../../../public/assets/client-01.jpg")}
//               alt=""
//               className="rounded-full ml-[-20px]"
//             />
//             <Image
//               src={require("../../../public/assets/client-01.jpg")}
//               alt=""
//               className="rounded-full ml-[-20px]"
//             />
//             <p className="font-Hind dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
//               500k+ people already trusted us.
//               <Link
//                 href="/courses"
//                 className="dark:text-[#46e256] text-[crimson]"
//               >
//                 View Courses
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// 2nd version

import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

import adminImage from "@/public/assets/admin-login.png";
// import clientImage from "@/public/assets/client-02.jpg";
import clientImage from "@/public/assets/client-02.jpg";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";

type Props = {};

const Hero: FC<Props> = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});

  const handleSearch = () => {
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full min-h-screen overflow-hidden flex flex-col 1000px:flex-row items-center px-4">
          {/* Left Side: Responsive Image */}
          <div className="w-full 1000px:w-2/5 flex items-center justify-center pt-12 1000px:pt-0">
            <div className="w-full max-w-[600px] relative aspect-square">
              <Image
                src={data?.layout?.banner?.image?.url}
                alt="banner"
                fill
                className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:w-max-w-[85%] h-[auto] z-[10]"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full 1000px:w-3/5 flex flex-col items-center 1000px:items-start text-center 1000px:text-left mt-10 1000px:mt-0">
            <h2 className="text-[30px] 1000px:text-[70px] font-semibold font-Hind text-[#000000c7] dark:text-white leading-tight max-w-[800px]">
              {data?.layout?.banner?.title}
            </h2>

            <p className="text-[18px] font-semibold font-Hind text-[#000000ac] dark:text-[#edfff4] mt-4 max-w-[600px]">
              {data?.layout?.banner?.subtitle}
            </p>

            {/* Search Bar */}
            <div className="relative mt-6 w-full max-w-[600px] h-[50px]">
              <input
                type="search"
                placeholder="Search Courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none"
              />
              <div
                className="absolute right-0 top-0 w-[50px] h-[50px] flex items-center justify-center bg-[#39c1f3] rounded-r-[5px] cursor-pointer"
                onClick={handleSearch}
              >
                <BiSearch className="text-white" size={30} />
              </div>
            </div>

            {/* Client Avatars */}
            <div className="flex items-center mt-6 w-full max-w-[600px]">
              <Image
                src={clientImage}
                alt=""
                className="rounded-full w-10 h-10 border-b-2 border-white"
              />
              <Image
                src={clientImage}
                alt=""
                className="rounded-full w-10 h-10 ml-[-10px]"
              />
              <Image
                src={clientImage}
                alt=""
                className="rounded-full w-10 h-10 ml-[-10px]"
              />
              <p className="text-[18px] font-semibold font-Hind text-[#000000b3] dark:text-[#edfff4] pl-3">
                500k+ people already trusted us.{" "}
                <Link
                  href="/courses"
                  className="text-[crimson] dark:text-[#46e256]"
                >
                  View Courses
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
