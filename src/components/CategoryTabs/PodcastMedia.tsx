import Image from "next/image";
import React from "react";

interface PodcastMediaCompProps {
  media: string;
}

const PodcastMedia = ({ media }: PodcastMediaCompProps) => {
  const isImage =
    media.endsWith(".gif") || media.endsWith(".png") || media.endsWith(".jpg");

  if (isImage) {
    return (
      <Image
        src={media}
        alt="Podcast Thumbnail"
        width={0}
        height={0}
        sizes="100vw"
      />
    );
  } else {
    return (
      <video autoPlay loop muted>
        <source src={media} />
        Your browser does not support the video tag.
      </video>
    );
  }
};

export default PodcastMedia;
