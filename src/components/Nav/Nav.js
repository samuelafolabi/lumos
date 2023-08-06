import Image from "next/image";
import { FaBars } from "react-icons/fa";
import logo from "../../../public/images/build_crew-01.png";
import Hamburger from "../Hamburger/Hamburger";
import { useEffect, useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 pl-0 pr-2 md:px-4 py-4 w-full z-40 backdrop-blur-lg bg-transparent font-Brinnan flex justify-between items-center">
      <div className="w-52">
        <Image src={logo} alt="Lumos buidl crew" />
      </div>

      <div className="hidden lg:flex items-center gap-2 lg:gap-8 pr-4 ">
        <a href="#whybuildlcrew">Why Buidl Crew</a>
        <a href="#howtojoin">How to Join</a>
        <a href="#contestandevents">Contest and Events</a>
        <a href="#halloffame">Hall of Fame</a>
      </div>

      <div
        className="lg:hidden"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FaBars size={28} />
      </div>
      <div hidden={!isOpen}>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Nav;
