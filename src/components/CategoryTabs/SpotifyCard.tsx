"use client";

import React, { useEffect, useState } from "react";

const SpotifyCard = () => {
  const podCastUrl = "https://open.spotify.com/track/3A4FRzgve9BjfKbvVXRIFO";

  const [podcastData, setPodCastData] = useState<any>({});

  useEffect(() => {
    const fetchSpotifyPodCast = async () => {
      const response = await fetch(
        `https://open.spotify.com/oembed?url=${podCastUrl}`
      );
      const podcast = await response.json();
      console.log(podcast);
      setPodCastData(podcast);
    };
    fetchSpotifyPodCast();
  }, []);

  return (
    <div className="justify-center  items-center flex w-[640px] h-[330px]">
      <iframe
        className="mx-auto"
        src={podcastData?.iframe_url}
        style={{ height: "100%", width: "100%" }}
      ></iframe>
    </div>
  );
};

export default SpotifyCard;
