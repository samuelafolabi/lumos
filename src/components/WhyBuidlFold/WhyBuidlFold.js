import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import wink from "../../../public/images/wink.png";
import star from "../../../public/images/star.png";
import thumb from "../../../public/images/thumb.png";
import tongue from "../../../public/images/tongue.png";
import peace from "../../../public/images/peace.png";
import wave from "../../../public/images/wave.png";
import issh from "../../../public/images/issh.png";

import bigsmile from "../../../public/images/bigsmile.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyBuidlFold = () => {
  const [isHover, setIsHover] = useState(0);

  const scroller = useRef();
  const title = useRef();
  const content = useRef();
  const memoji = useRef();
  const list = useRef();

  const activities = [
    {
      id: 1,
      content: "Special invite-only access to developer meetups & events",
      image: wink,
    },
    {
      id: 2,
      content: "Exciting monthly contests with equally exciting prizes",
      image: tongue,
    },
    {
      id: 3,
      content: "Early access to all the latest Lumos Labs Product updates",
      image: thumb,
    },
    {
      id: 4,
      content: "Special Incentives from the Lumos Metaverse for contributions",
      image: peace,
    },
    {
      id: 5,
      content: "Premium job offers from our partners",
      image: bigsmile,
    },
    {
      id: 6,
      content: "Mentorship, guidance, and support from top industry experts",
      image: star,
    },
  ];

  return (
    <div className="">
      <div
        ref={title}
        className="uppercase text-center font-Brinnan mb-2 text-2xl"
      >
        Why Build Crew
      </div>
      <div className="text-center font-Brinnan">
        The BUIDL Crew is a dedicated space for developers that offers a wide
        range of opportunities for developers to learn, grow, and build.{" "}
      </div>
      <div ref={content} className="text-center font-Brinnan">
        Here are just a few of the fun-filled activities that are in store for
        you!
      </div>
      <div className="flex justify-center gap-8 items-center mt-16">
        <div className="w-[40%] font-Brinnan text-9xl text-center">
          <div>
            {/* <Image src={happy} alt="" className="" />  */}
            {activities.map(({ id, image }) => (
              <div
                ref={memoji}
                key={id}
                className="flex items-center justify-center"
              >
                {isHover === id && (
                  <>
                    <Image src={image} alt="" className="w-1/2" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="font-light font-Brinnan">
          {activities.map(({ id, content }) => (
            <div
              ref={list}
              key={id}
              className="text-sm text-white/80 bg-white/5 mb-4 py-2 px-2 rounded-sm border-[1px] border-white/10 hover:border-primary-2 cursor-pointer"
              onMouseEnter={() => setIsHover(id)}
            >
              🔥 {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBuidlFold;
