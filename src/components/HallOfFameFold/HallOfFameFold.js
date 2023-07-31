import React from "react";

import hero1 from "../../../public/images/hero1.png";
import hero2 from "../../../public/images/hero2.png";
import hero3 from "../../../public/images/hero3.png";
import hero4 from "../../../public/images/hero4.png";
import hero5 from "../../../public/images/hero5.png";
import hero6 from "../../../public/images/hero6.png";
import newHero1 from "../../../public/images/newHero1.jpg";
import newHero2 from "../../../public/images/newHero2.jpg";
import newHero3 from "../../../public/images/newHero3.jpg";

import Image from "next/image";

const HallOfFameFold = () => {
  const heroes = [
    {
      image: newHero1,
      name: "Caleb John",
      skill_level: "Beginner",
      contribution:
        "This developer helped in doing xyz in  atete ieiei. This developer helped in doing xyz in  atete ieiei days",
    },
    {
      image: newHero2,
      name: "Seyi Martins",
      skill_level: "Intermediate",
      contribution:
        "This developer helped in doing xyz in  atete ieiei. This developer helped in doing xyz in  atete ieiei days",
    },
    {
      image: newHero3,
      name: "Ayo Oghenero",
      skill_level: "Beginner",
      contribution:
        "This developer helped in doing xyz in  atete ieiei. This developer helped in doing xyz in  atete ieiei days",
    },
    {
      image: newHero1,
      name: "Bola Thompson",
      skill_level: "Beginner",
      contribution:
        "This developer helped in doing xyz in  atete ieiei. This developer helped in doing xyz in  atete ieiei days",
    },
    {
      image: newHero2,
      name: "Bala Blue",
      skill_level: "Professional",
      contribution:
        "This developer helped in doing xyz in  atete ieiei. This developer helped in doing xyz in  atete ieiei days",
    },
    {
      image: newHero3,
      name: "Big Boy",
      skill_level: "Beginner",
      contribution:
        "This developer helped in doing xyz in  atete ieiei. This developer helped in doing xyz in abc days",
    },
  ];

  return (
    <div className="pt-44" id="halloffame">
      <div className="contest uppercase text-center font-Brinnan mb-2 text-2xl">
        BUIDL Crew Hall of Fame
      </div>
      <div className="text-center font-Brinnan font-light md:font-normal text-sm px-2">
        Ever heard of ‘unsung heroes?'. You probably won’t at the BUIDL Crew
        <br />
        Take a look at exceptional developers who are BUIDLing awesome Web3
        applications.
      </div>
      <div className="mt-14 lg:mt-20 flex gap-2 md:gap-4 items-center font-Brinnan  overflow-x-scroll no-scrollbar">
        {heroes.map((hero) => (
          <div
            key={hero.name}
            className="text-center min-w-[45%] md:min-w-[28%] px-4 py-8"
          >
            <div className="h-40 w-40 flex rounded-full justify-center mx-auto mb-2 shadow-[inset_1px_-1px_100px_rgba(0,198,244,0.3)]  ">
              <Image
                src={hero.image}
                alt=""
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 z-[-2] "
              />
            </div>
            <div className="uppercase"> {hero.name}</div>
            <div className="font-light text-sm"> {hero.skill_level}</div>
            <div className="flex justify-center mt-2">
              <div className="font-light text-sm w-[75%] text-center">
                {hero.contribution}
              </div>
            </div>

            <div className=" text-sm font-light text-white/80 mt-2 cursor-pointer">
              Linkedin | Twitter{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFameFold;
