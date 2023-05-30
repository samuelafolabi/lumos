import React from "react";

const WhyBuidlFold = () => {
  const activities = [
    {
      id: 1,
      content: "Special invite-only access to developer meetups & events",
    },
    {
      id: 2,
      content: "Exciting monthly contests with equally exciting prizes",
    },
    {
      id: 3,
      content: "Early access to all the latest Lumos Labs Product updates",
    },
    {
      id: 4,
      content: "Special Incentives from the Lumos Metaverse for contributions",
    },
    {
      id: 5,
      content: "Premium job offers from our partners",
    },
    {
      id: 6,
      content: "Mentorship, guidance, and support from top industry experts",
    },
  ];

  return (
    <div className="">
      <div className="uppercase text-center font-Brinnan">Why Build Crew</div>
      <div className="text-center font-Brinnan">
        The BUIDL Crew is a dedicated space for developers that offers a wide
        range of opportunities for developers to learn, grow, and build.{" "}
      </div>
      <div className="text-center font-Brinnan">
        Here are just a few of the fun-filled activities that are in store for
        you!
      </div>
      <div className="flex justify-center gap-8 items-center mt-10">
        <div className="w-[40%] font-Brinnan text-9xl text-center">🤔</div>
        <div className="font-light font-Brinnan">
          {activities.map(({ id, content }) => (
            <div
              key={id}
              className="text-sm text-white/80 bg-white/5 mb-4 py-2 px-2 rounded-sm border-[1px] border-white/10 hover:border-primary-1"
            >
              😍 {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBuidlFold;
