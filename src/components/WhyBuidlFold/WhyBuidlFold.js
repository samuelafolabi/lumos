import Image from "next/image";
import React, { useState, useLayoutEffect, useRef } from "react";

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
  const [isHover, setIsHover] = useState(1);

  useLayoutEffect(() => {
    let from = gsap.from(".whys", {
      yPercent: () => -120,
      xPercent: () => -60,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: ".whys",
        start: "top 100%",
        end: "top 30%",
        scrub: 2,
        markers: false,
        invalidateOnRefresh: false,
      },
    });
    return () => {
      from.kill();
    };
  }, []);

  useLayoutEffect(() => {
    let from = gsap.from(".memoji", {
      xPercent: () => -10,
      scale: 0.9,
      opacity: 0.8,
      ease: "back.out(10)",
    });
    return () => {
      from.kill();
    };
  }, [isHover]);

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
    <div className="pt-44" id="whybuildlcrew">
      <div className="uppercase text-center font-Brinnan mb-2 text-2xl">
        Why Build Crew
      </div>
      <div className="text-center font-light md:font-normal text-sm md:text-base font-Brinnan px-4 ">
        <div className="mb-1">
          The BUIDL Crew is a dedicated space for developers that offers a wide
          range of opportunities for developers to learn, grow, and build.{" "}
        </div>
        <div>
          Here are just a few of the fun-filled activities that are in store for
          you!
        </div>
      </div>

      <div className="flex justify-center gap-8 items-center mt-16">
        <div className="w-[40%] hidden md:block font-Brinnan text-9xl text-center">
          <div>
            {/* <Image src={happy} alt="" className="" />  */}
            {activities.map(({ id, image }) => (
              <div key={id} className="flex items-center justify-center">
                {isHover === id && (
                  <>
                    <Image src={image} alt="" className="memoji w-1/2" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="font-light font-Brinnan">
          {activities.map(({ id, content }) => (
            <div
              key={id}
              className="text-center md:text-left whys text-sm text-white/80 bg-white/5 mb-4 py-2 px-2 rounded-sm border-[1px] border-white/10 hover:border-primary-2 cursor-pointer"
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
