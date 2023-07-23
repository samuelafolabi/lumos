import Image from "next/image";
import logo from "../../../public/images/build_crew-01.png";
const Nav = () => {
  return (
    <div className="sticky top-0 left-0 px-4 py-4 w-full z-40 backdrop-blur-lg bg-transparent font-Brinnan flex justify-between items-center">
      <div className="w-52">
        <Image src={logo} alt="Lumos buidl crew" />
      </div>

      <div className="flex items-center gap-2 lg:gap-8 pr-4">
        <a href="#whybuildlcrew">Why Buidl Crew</a>
        <a href="#howtojoin">How to Join</a>
        <a href="#contestandevents">Contest and Events</a>
        <a href="#halloffame">Hall of Fame</a>
      </div>
    </div>
  );
};

export default Nav;
