import React, { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

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
      description:
        "BUIDL Crew Landing Page Contest (Exclusive for NFT Holders). Prizes will be awarded only after clear validation of the submission is done and the full code repo is submitted.",
      deadline: "12th of June, 2023",
      reward: "Backpack",
    },
    {
      id: 2,
      title: "Crew Landing Page",
      description:
        "BUIDL Crew Landing Page Contest (Exclusive for NFT Holders). Prizes will be awarded only after clear validation of the submission is done and the full code repo is submitted.",
      deadline: "12th of June, 2023",
      reward: "$1000",
    },
    {
      id: 3,
      title: "Crew Landing Page",
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
      rotate: -30,
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
    <div>
      <div className="contest uppercase text-center font-Brinnan mb-2 text-2xl">
        Contests And Events
      </div>
      <div className="text-center font-Brinnan">
        Take on exciting challenges to win a variety of prizes, and get access
        to closed-door meetups.
        <br /> These are exclusively crafted to support your developer journey
        in the Web3 space.
      </div>

      <div className="mt-10 px-16 mb-2 flex justify-center gap-8 overflow-x-clip font-Brinnan">
        {contests.map(({ id, title, description, deadline, reward }) => (
          <div
            key={id}
            className="card bg-white/5 flex flex-col gap-3 px-4 py-6 border backdrop-blur-md border-white/10 hover:border-primary-2 rounded-md"
          >
            <div className="text-center text-xl">{title}</div>
            <div className="text-center text-sm text-white/80">
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
            <div className="flex justify-center items-center mt-6">
              <button
                className="bg-gradient-to-r from-secondary-2  to-primary-2  hover:from-secondary-1 hover:to-secondary-3  px-8 py-3 text-base text-black uppercase
              "
                onMouseEnter={() => {
                  setIsHover(true);
                  setHoveredCard(id);
                }}
                onMouseLeave={() => setIsHover(false)}
              >
                Join in
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestAndEventsFold;
