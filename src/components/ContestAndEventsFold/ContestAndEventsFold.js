import React, { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import hero1 from "../../../public/images/hero1.png";

const ContestAndEventsFold = () => {
  const [isHover, setIsHover] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(0);
  console.log(hoveredCard);
  if (isHover == true) {
    console.log("hovered");
  }
  const contests = [
    {
      id: 1,
      title: "Crew Landing Page",
      status: "Ongoing",
      description:
        "BUIDL Crew Landing Page Contest (Exclusive for NFT Holders). Prizes will be awarded only after clear validation of the submission is done and the full code repo is submitted.",
      deadline: "12th of June, 2023",
      reward: "Backpack",
    },
    {
      id: 2,
      title: "Crew Landing Page",
      status: "Completed",
      description:
        "BUIDL Crew Landing Page Contest (Exclusive for NFT Holders). Prizes will be awarded only after clear validation of the submission is done and the full code repo is submitted.",
      deadline: "12th of June, 2023",
      reward: "$1000",
    },
    {
      id: 3,
      title: "Crew Landing Page",
      status: "Upcoming",
      description:
        "BUIDL Crew Landing Page Contest (Exclusive for NFT Holders). Prizes will be awarded only after clear validation of the submission is done and the full code repo is submitted.",
      deadline: "12th of June, 2023",
      reward: "$1200",
    },
    {
      id: 4,
      title: "Crew Landing Page",
      status: "Completed",
      description:
        "BUIDL Crew Landing Page Contest (Exclusive for NFT Holders). Prizes will be awarded only after clear validation of the submission is done and the full code repo is submitted.",
      deadline: "12th of June, 2023",
      reward: "$1000",
    },
    {
      id: 5,
      title: "Crew Landing Page",
      status: "Completed",
      description:
        "BUIDL Crew Landing Page Contest (Exclusive for NFT Holders). Prizes will be awarded only after clear validation of the submission is done and the full code repo is submitted.",
      deadline: "12th of June, 2023",
      reward: "$1200",
    },
  ];

  useLayoutEffect(() => {
    const nodeList = document.querySelectorAll(".card");
    const firstElement = nodeList[0];
    const lastElement = nodeList[2];

    let firstCard = gsap.from(firstElement, {
      opacity: 0,
      rotate: -18,
      transformOrigin: "right bottom",
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: ".card",
        end: "top 30%",
        scrub: 2,
        invalidateOnRefresh: false,
      },
    });

    let lastCard = gsap.from(lastElement, {
      opacity: 0,
      rotate: 30,
      transformOrigin: "left bottom",
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: ".card",
        end: "top 30%",
        scrub: 2,
        invalidateOnRefresh: false,
      },
    });

    return () => {
      firstCard.kill();
      lastCard.kill();
    };
  }, []);

  return (
    <div className="pt-44" id="contestandevents">
      <div className="contest uppercase text-center font-Brinnan mb-2 text-2xl">
        Contests And Events
      </div>
      <div className="text-center font-light md:font-normal text-sm font-Brinnan">
        Take on exciting challenges to win a variety of prizes, and get access
        to closed-door meetups.
        <br /> These are exclusively crafted to support your developer journey
        in the Web3 space.
      </div>

      <div className="mt-10 px-8 md:px-16 mb-2 flex flex-wrap  flex-col lg:flex-row justify-center gap-8 overflow-x-clip font-Brinnan">
        {contests.map(
          ({ id, title, description, deadline, reward, status }) => (
            <div
              key={id}
              className="card flip-card h-fit  w-full lg:w-[400px]  border backdrop-blur-md border-white/10 hover:border-primary-2 rounded-md hover:"
            >
              <div className="flip-card-inner bg-white/5 flex h-[400px] ">
                {/*----------- card front ----- */}
                <div class="flip-card-front flex flex-col gap-3 px-4 py-6">
                  <div className="text-center text-xl">{title}</div>
                  <div className="flex justify-center">
                    <div
                      className={`text-center px-4 py-2 border-[1px] ${
                        status === "Upcoming"
                          ? "border-blue-500/30 text-blue-500/90 bg-blue-500/20"
                          : status === "Ongoing"
                          ? "border-yellow-500/20 text-yellow-500/70  bg-yellow-500/10"
                          : "border-green-500/20 text-green-500/70  bg-green-500/10"
                      } w-fit font-light md:font-normal text-xs`}
                    >
                      {status}
                    </div>
                  </div>

                  <div className="text-center font-light md:font-normal text-sm text-white/80">
                    {description}
                  </div>
                  <div className="text-center  text-white/80">
                    Deadline: {deadline}
                  </div>
                  <hr />
                  <div className="text-center">
                    Reward:{" "}
                    <span
                      className={
                        isHover && hoveredCard == id ? "text-secondary-1 " : ""
                      }
                    >
                      {reward}
                    </span>{" "}
                  </div>
                </div>
                {/*----------- card front-------  */}
                {/* ----------- card back ------------  */}

                <div class="flip-card-back  bg-white/5 flex justify-center">
                  <div className="text-center min-w-[45%] md:min-w-[30%] px-4 py-8">
                    <div className="text-center text-xl mb-6">Winner</div>

                    <Image src={hero1} alt="" className="mx-auto w-1/2 mb-4 " />
                    <div className="uppercase"> Caleb John</div>

                    <div className=" text-sm font-light text-white/80 mt-2 cursor-pointer">
                      Linkedin | Twitter{" "}
                    </div>
                  </div>
                </div>

                {/* ----------- card back ------------  */}
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex justify-center items-center mt-12 font-Brinnan">
        <Link
          className="bg-gradient-to-r w-3/5 lg:w-2/5 from-secondary-2  to-primary-2 text-center hover:from-secondary-1 hover:to-secondary-3  px-8 py-3 text-base text-black uppercase"
          href="https://github.com/Lumos-metaverse/Buidl-crew-registration"
          target="_blank"
        >
          Join BUIDL Crew
        </Link>
      </div>
    </div>
  );
};

export default ContestAndEventsFold;
