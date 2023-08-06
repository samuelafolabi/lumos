import React from "react";
import Image from "next/image";

import hero6 from "../../../public/images/hero6.png";
import hero2 from "../../../public/images/hero2.png";

const EventsFold = () => {
  return (
    <div className="no-scrollbar font-Brinnan px-2 lg:px-16 mb-10 flex gap-2 md:gap-4 overflow-x-scroll">
      <div className="rounded-sm bg-gradient-to-tl transition-all from-secondary-2 via-secondary-3 to-primary-2/80  px-8 py-8   min-w-[95%] lg:min-w-[80%]">
        <div className="uppercase text-4xl mb-4 font-[500]">
          The future of web3
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center ">
          <div className="w-full lg:w-[45%]">
            <div className=" mb-4">
              BUIDL Crew Landing Page Contest Event(Exclusive for NFT Holders).
              Prizes will be awarded only after clear validation of the
              submission is done and the full code repo is submitted.
            </div>
            <div className="font-[500]">⌛ 25th of June, 2022 | 01:00 WAT</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col justify-center items-center bg-white/5 border backdrop-blur-lg px-1  py-4  border-white/30">
              <Image src={hero6} alt="" className="w-1/2 grayscale" />
              <div className="text-sm mt-2">Sam Afolabi</div>
              <div className="text-sm font-light text-center">
                Frontend Developer
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white/5 border backdrop-blur-lg px-1  py-4  border-white/30">
              <Image src={hero2} alt="" className="w-1/2 grayscale" />
              <div className="text-sm mt-2 ">Seyi Martins</div>
              <div className="text-sm font-light text-center">
                Blockchain Developer
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button className="uppercase rounded-sm w-full bg-white/20 py-4 border border-white/30 hover:bg-transparent ">
            Register now
          </button>
        </div>
      </div>

      {/* ---------------------- event 2 --------------  */}
      <div className="rounded-sm bg-gradient-to-tl transition-all from-secondary-2 via-secondary-3 to-primary-2/80 min-w-[95%] lg:min-w-[80%] px-8 py-8">
        <div className="uppercase text-4xl mb-4 font-[500]">
          The future of web3
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center ">
          <div className="w-full lg:w-[45%]">
            <div className=" mb-4">
              BUIDL Crew Landing Page Contest Event(Exclusive for NFT Holders).
              Prizes will be awarded only after clear validation of the
              submission is done and the full code repo is submitted.
            </div>
            <div className="font-[500]">⌛ 25th of June, 2022 | 01:00 WAT</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col justify-center items-center bg-white/5 border backdrop-blur-lg px-1  py-4  border-white/30">
              <Image src={hero6} alt="" className="w-1/2 grayscale" />
              <div className="text-sm mt-2">Sam Afolabi</div>
              <div className="text-sm font-light text-center">
                Frontend Developer
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white/5 border backdrop-blur-lg px-1  py-4  border-white/30">
              <Image src={hero2} alt="" className="w-1/2 grayscale" />
              <div className="text-sm mt-2 ">Seyi Martins</div>
              <div className="text-sm font-light text-center">
                Blockchain Developer
              </div>
            </div>
          </div>
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
