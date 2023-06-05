import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const HeroFold = () => {
  useLayoutEffect(() => {
    // gsap.from(".textElement", {
    //   opacity: 0.1,
    //   xPercent: -100,
    //   stagger: 0.2,
    //   ease: "power1.out",
    //   duration: 2,
    //   repeat: -1,
    //   yoyo: true,
    // });

    gsap.to(".textElement", {
      yPercent: () => -100,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: ".textElement",
        start: "top 150px ",

        scrub: 2,
        markers: false,
        invalidateOnRefresh: false,
      },
    });
  }, []);

  return (
    <div className="mt-32   font-Brinnan">
      <div className="text-center text-[10vw] 2xl:text-[170px]">
        <span className="textElement">T</span>
        <span className="textElement">H</span>
        <span className="textElement">E</span>{" "}
        <span className="textElement">B</span>
        <span className="textElement">U</span>
        <span className="textElement">I</span>
        <span className="textElement">D</span>
        <span className="textElement">L</span>{" "}
        <span className="textElement">C</span>
        <span className="textElement">R</span>
        <span className="textElement">E</span>
        <span className="textElement">W</span>
      </div>
      <div className=" text-center text-xl">
        The BUIDL Crew by Lumos Labs is an all-exclusive community for Lumos
        Metaverse NFT holders.
      </div>
      <div className="text-center mt-2 text-xl">
        Ready to reap the rewards of a true BUIDLer!
      </div>

      <div className="flex justify-center items-center mt-6">
        <button className="bg-gradient-to-r from-secondary-2  to-primary-2  hover:from-secondary-1 hover:to-secondary-3  px-8 py-3 text-base text-black uppercase">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroFold;
