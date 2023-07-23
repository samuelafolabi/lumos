import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const HeroFold = () => {
  useLayoutEffect(() => {
    gsap.to(".textElement", {
      yPercent: () => -100,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: ".textElement",
        start: "top 140px",
        scrub: 2,
        markers: false,
        invalidateOnRefresh: false,
      },
    });
  }, []);

  return (
    <div className="py-40 font-Brinnan">
      <div className="text-center text-[15vw] md:text-[10vw] 2xl:text-[170px]">
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
      <div className="font-light md:font-normal  text-center text-sm md:text-xl">
        The BUIDL Crew by Lumos Labs is an all-exclusive community for
        developers.
      </div>
      <div className="font-light md:font-normal text-center mt-2 text-sm  md:text-xl">
        Get ready to reap the rewards of a true BUIDLer by holding the Lumos
        Metaverse NFT !
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link
          className="bg-gradient-to-r from-secondary-2  to-primary-2  hover:from-secondary-1 hover:to-secondary-3  px-8 py-3 text-base text-black uppercase"
          href="https://github.com/Lumos-metaverse/Buidl-crew-registration"
          target="_blank"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroFold;
