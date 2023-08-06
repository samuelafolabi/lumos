import React from "react";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";
const Hamburger = (props) => {
  useEffect(() => {
    if (props.isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [props.isOpen]);

  //   if (!props.isOpen) {
  //     return null;
  //   }
  return (
    <div className="fixed bg-black left-0 top-0 w-[100vw] h-[100vh] z-10 py-10">
      <div className="flex flex-col items-center gap-6 lg:gap-8 pr-4 text-white ">
        <a href="#whybuildlcrew" onClick={() => props.setIsOpen(false)}>
          Why Buidl Crew
        </a>
        <a href="#howtojoin" onClick={() => props.setIsOpen(false)}>
          How to Join
        </a>
        <a href="#contestandevents" onClick={() => props.setIsOpen(false)}>
          Contest and Events
        </a>
        <a href="#halloffame" onClick={() => props.setIsOpen(false)}>
          Hall of Fame
        </a>
      </div>

      <div
        className="absolute bottom-10 left-[50%]  translate-x-[-50%]"
        onClick={() => props.setIsOpen(false)}
      >
        <FaTimes className="mx-auto" size={28} />
      </div>
    </div>
  );
};

export default Hamburger;
