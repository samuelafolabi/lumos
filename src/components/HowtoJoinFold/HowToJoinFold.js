import React from "react";

const HowToJoinFold = () => {
  const steps = [
    {
      id: 1,
      content:
        " 1️⃣ Apply for the Lumos Metaverse whitelist and mint your Lumos Metaverse NFT",
    },
    {
      id: 2,
      content: "2️⃣ Join the Lumos Labs Discord Server",
    },
    {
      id: 3,
      content: `3️⃣ Go to the #buidl-crew channel and click on the "Join BUIDL Crew" button`,
    },
    {
      id: 4,
      content: "4️⃣ Complete the BUIDL Crew application form",
    },
    {
      id: 5,
      content: "5️⃣ Await to be reviewed by the BUIDL Crew team",
    },
    {
      id: 6,
      content:
        "6️⃣ If you are accepted, you will be granted access to the BUIDL Crew community and all of the benefits that it offers.",
    },
  ];
  return (
    <div>
      <div className="uppercase text-center font-Brinnan mb-2 text-2xl">
        HOW TO JOIN
      </div>

      <div className="text-center font-Brinnan">
        Simply follow the steps below to join lumos metaverse crew
      </div>
      <div className="flex flex-row-reverse justify-center gap-8 items-center mt-10">
        <div className="w-[40%] font-Brinnan text-9xl text-center">😋</div>
        <div className="font-light font-Brinnan">
          {steps.map(({ id, content }) => (
            <div
              key={id}
              className="w-[40vw] text-sm text-white/80 bg-white/5 mb-4 py-2 px-2 rounded-sm border-[1px] border-white/10 hover:border-primary-1"
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
