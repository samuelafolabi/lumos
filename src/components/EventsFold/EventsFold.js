import React from "react";

const EventsFold = () => {
  return (
    <div className="font-Brinnan px-16 mb-10">
      <div className="rounded-sm bg-gradient-to-r from-secondary-2 via-secondary-3 to-secondary-1 px-8 py-8">
        <div className="uppercase text-4xl mb-4 font-[500]">
          The future of web3
        </div>
        <div className="flex ">
          <div className="w-[50%]">
            <div className=" mb-4">
              BUIDL Crew Landing Page Contest (Exclusive for NFT Holders).
              Prizes will be awarded only after clear validation of the
              submission is done and the full code repo is submitted.
            </div>
            <div className="font-[500]">⌛ 25th of June, 2022 | 01:00 WAT</div>
          </div>

          <div>Speakers</div>
        </div>

        <div className="mt-10">
          <button className="uppercase rounded-sm w-full bg-white/20 py-4 border border-white/30 hover:bg-transparent ">
            Register now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsFold;
