import React, { FC, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";

type Props = {
  data: any;
  activeVideo?: number;
  setActiveVideo?: any;
  isDemo?: boolean;
};

const CourseContentList: FC<Props> = (props) => {
  const [visibleSection, setVisibleSections] = useState<Set<string>>(
    new Set<string>()
  );
  // find unique video sections
  const videoSections: string[] = [
    ...new Set<string>(props.data?.map((item: any) => item.videoSection)),
  ];
  let totalCount: number = 0;
  const toggleSection = (sectionLstring) => {
    const newVisibleSections = new Set(visibleSections);
    if (newVisibleSections.has(section)) {
      newVisibleSections.delete(section);
    } else {
      newVisibleSections.add(section);
    }
    setVisibleSections(newVisibleSections);
  };
  return (
    <div
      className={`mt-[15px] w-full ${
        props.isDemo && "ml-[-30px] min-h-screen sticky top-24 left-0 z-30"
      }`}
    >
      {videoSections.map((section: string, sectionIndex: number) => {
        const isSectionVisible = setVisibleSections.has(section);
        // filter videos by section
        const sectionVideos: any[] = props.data.filter(
          (item: any) => item.videoSection === section
        );
        const sectionVideoCount: number = sectionVideos.length;
        const sectionVideoDuration: number = sectionVideos.reduce(
          (totalLength: number, item: any) => totalLength + item.videoDuration
        );

        const sectionStartIndex: number = totalCount;
        totalCount += sectionVideoCount;
        const sectionContentHours: number = sectionVideoDuration / 60;
        return (
          <div
            className={`${
              !props.isDemo && "border-b border-[#ffffff8e] pb-2 "
            }`}
            key={section}
          >
            <div className="w-full flex">
              {/* Render Video Section */}
              <div className="w-full flex justify-between items-center">
                <h2 className="text-[22px] text-black dark:text-white">
                  {section}
                </h2>
                <button
                  className="mr-4 cursor-pointer text-black dark:text-white"
                  onClick={() => toggleSection(section)}
                >
                  {isSectionVisible ? (
                    <BsChevronUp size={20} />
                  ) : (
                    <BsChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>
            <h5 className="text-black dark:text-white">
              {sectionVideoCount} Lessons{" "}
              {sectionVideoDuration < 60
                ? sectionVideoDuration
                : sectionContentHours.toFixed(2)}
              {sectionVideoDuration > 60 ? "hours" : "minutes"}
            </h5>
            <br />
            {isSectionVisible && (
              <div className="w-full">
                {sectionVideos.map((item: any, index: number) => {
                  const videoIndex: number = sectionStartIndex + index;
                  const contentLength: number = item.videoLength / 60;
                  return (
                    <div
                      className={`w-full ${
                        videoIndex === props.activeVideo ? "bg-slate-800" : ""
                      } cursor-pointer transition-all p-2`}
                      key={item._id}
                      onClick={() =>
                        props.isDemo ? null : props?.setActiveVideo(videoIndex)
                      }
                    >
                      <div className="flex items-start">
                        <div className="">
                          <MdOutlineOndemandVideo
                            size={25}
                            className="mr-2"
                            color="#1cdada"
                          />
                        </div>
                        <h1 className="text-[18px] inline-block break-words text-black dark:text-white">
                          {item.title}
                        </h1>
                      </div>
                      <h5 className="pl-8 text-black dark:text-white">
                        {item.videoDuration > 60
                          ? contentLength.toFixed(2)
                          : item.videoDuration}
                        {item.videoDuration > 60 ? "hours" : "minutes"}
                      </h5>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseContentList;
