import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import heyy from "../../../public/images/heyy.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HowToJoinFold = () => {
  useLayoutEffect(() => {
    let from = gsap.from(".hows", {
      yPercent: () => -120,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: ".hows",
        start: "top 90%",
        end: "top 20%",
        scrub: 2,
        markers: false,
        invalidateOnRefresh: false,
      },
    });

    return () => {
      from.kill();
    };
  }, []);

  const steps = [
    {
      id: 1,
      content:
        " Apply for the Lumos Metaverse whitelist and mint your Lumos Metaverse NFT",
    },
    {
      id: 2,
      content: "Join the Lumos Labs Discord Server",
    },
    {
      id: 3,
      content: `Go to the #buidl-crew channel and click on the "Join BUIDL Crew" button`,
    },
    {
      id: 4,
      content: " Complete the BUIDL Crew application form",
    },
    {
      id: 5,
      content: " Await to be reviewed by the BUIDL Crew team",
    },
    {
      id: 6,
      content:
        "If you are accepted, you will be granted access to the BUIDL Crew community and all of the benefits that it offers.",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="uppercase text-center font-Brinnan mb-2 text-2xl">
        HOW TO JOIN
      </div>

      <div className="font-light md:font-normal text-sm md:text-base px-2 text-center font-Brinnan ">
        Simply follow the steps below to join lumos metaverse crew
      </div>
      <div className=" flex justify-center mt-10">
        <div className="font-light font-Brinnan ">
          {steps.map(({ id, content }) => (
            <div
              key={id}
              className="hows text-center text-base text-white/80 bg-white/5 mb-6 py-2 px-4 rounded-sm border-[1px] border-white/10 hover:border-primary-2 cursor-pointer"
            >
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToJoinFold;
