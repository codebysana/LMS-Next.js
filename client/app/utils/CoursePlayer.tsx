import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/getVdoCipherOTP", {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);
  return (
    <div style={{ paddingTop: "41%", position: "relative" }}>
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=zBHKD73dUAMQlk0L`}
          style={{
            border: 0,
            width: "90%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;

// <div style="padding-top:56%;position:relative;">
{
  /* <iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE323Z4Jmtrp7Q4ThQn4JKRQFSnSml3qGwgo0V78Oawsg3zwCzx&playbackInfo=eyJ2aWRlb0lkIjoiYjUyN2VjY2NhMjY4NDkzNzhjNDEzYjI4MjgyMGQ5MDIifQ==" style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;" allowFullScreen="true" allow="encrypted-media"></iframe>
</div> */
}
