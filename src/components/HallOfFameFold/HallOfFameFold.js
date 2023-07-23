import React from "react";
import hero1 from "../../../public/images/hero1.png";
import hero2 from "../../../public/images/hero2.png";
import hero3 from "../../../public/images/hero3.png";
import hero4 from "../../../public/images/hero4.png";
import hero5 from "../../../public/images/hero5.png";
import hero6 from "../../../public/images/hero6.png";
import Image from "next/image";

const HallOfFameFold = () => {
  const heroes = [
    {
      image: hero1,
      name: "Caleb John",
      skill_level: "Beginner",
    },
    {
      image: hero2,
      name: "Seyi Martins",
      skill_level: "Intermediate",
    },
    {
      image: hero3,
      name: "Ayo Oghenero",
      skill_level: "Beginner",
    },
    {
      image: hero4,
      name: "Bola Thompson",
      skill_level: "Beginner",
    },
    {
      image: hero5,
      name: "Bala Blue",
      skill_level: "Professional",
    },
    {
      image: hero6,
      name: "Big Boy",
      skill_level: "Beginner",
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
      <div className="mt-14 lg:mt-20 flex gap-2 md:gap-4 items-center font-Brinnan  overflow-x-scroll">
        {heroes.map((hero) => (
          <div
            key={hero.name}
            className="text-center min-w-[45%] md:min-w-[30%] px-4 py-8"
          >
            <Image src={hero.image} alt="" className="mx-auto w-1/2 mb-4 " />
            <div className="uppercase"> {hero.name}</div>
            <div className="font-light text-sm"> {hero.skill_level}</div>
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
