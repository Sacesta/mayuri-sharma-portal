import { ReviewItem } from "@/services/Program.services";
import React, { useRef, useState } from "react";

const ReviewItemComponent = ({ reviewItem }: { reviewItem: ReviewItem }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayButtonClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      (videoRef.current as HTMLVideoElement).pause();
    } else {
      setIsPlaying(true);
      (videoRef.current as HTMLVideoElement).play();
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
    (videoRef.current as HTMLVideoElement).currentTime = 0; // Reset video to the start
  };

  return (
    <div className="programDetails_peopleReview" key={reviewItem?._id}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={reviewItem?.video}
        onEnded={handleVideoEnd}
      ></video>

      <p className="heading_three_style_white absolute top-8 left-8 z-[2]">
        {reviewItem?.name} from the {reviewItem?.country}
      </p>
      <div
        className="absolute bottom-8 right-8 bg-[#EB334A] rounded-full h-16 w-16 z-[2] flex items-center justify-center"
        onClick={handlePlayButtonClick}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="29"
            viewBox="0 0 320 512"
          >
            <path
              fill="white"
              d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
            />
          </svg>
        ) : (
          <svg
            width="22"
            height="29"
            viewBox="0 0 22 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 28.8501V0.850098L22 14.8501L0 28.8501Z" fill="white" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ReviewItemComponent;
