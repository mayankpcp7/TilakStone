import React, { useState } from 'react';
import videoThumbnail from "../assets/images/webp/header/videoThumbnail.webp";
import tilakStoneVideo from "../assets/video/headerVideo/tilakStone.mp4";
import { PlayIcon } from './common/Icons';

const HeroVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div className="bg-videoBackground lg:bg-cover mt-20 md:mt-[188px] lg:mt-[200px] bg-repeat-round mx-2 md:mx-3 lg:mx-auto md:max-h-[362px] lg:min-h-[597px]   lg:max-w-[1376px]">
            <div className='container max-w-[1164px] px-3 mx-auto'>
                <div className="relative z-[21] -translate-y-6 md:-translate-y-[55px] lg:translate-y-[-92px] ">
                    {isPlaying ? (
                        <video
                            className=" max-w-[268px] min-[400px]:max-w-full md:max-w-[623px] lg:max-w-[1028px] w-full shadow-[0px_3.61px_72.14px_0px_#00000066] md:max-h-[350px] lg:min-h-[578px] rounded-[18px] mx-auto overflow-hidden"
                            controls
                            autoPlay
                            onEnded={handleVideoEnded}>
                            <source src={tilakStoneVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="cursor- pointer" onClick={handlePlayVideo} >
                            <img
                                src={videoThumbnail}
                                alt="Video Thumbnail"
                                className="max-w-[268px] md:max-w-[623px] lg:max-w-[1028px] w-full shadow-[0px_3.61px_72.14px_0px_#00000066] border md:border-[2.4px] lg:border-[4px] border-white md:max-h-[350px] lg:min-h-[578px] rounded-[18px] mx-auto"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <PlayIcon />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeroVideo;
