import Image from "next/image";
import logo from "../../../public/images/logo.png";
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-4 py-4 z-40 backdrop-blur-lg bg-transparent">
      <div className="w-24">
        <Image src={logo} alt="Lumos" />
      </div>
    </div>
  );
};

export default Nav;
