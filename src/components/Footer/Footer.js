import Link from "next/link";
import { useState } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    alert(`Submitted email: ${email}`);
  };

  const logoSize = "30px";
  return (
    <div className="font-Brinnan relative" id="footer">
      <div className="absolute glow left-0 top-10"></div>
      <div className="absolute glow-right right-0 top-10"></div>
      <div className="uppercase text-center font-Brinnan text-2xl">
        Stay updated with our journey
      </div>
      {/* --------------- links ---------------  */}

      <div className="flex justify-center gap-4 lg:gap-10 mt-16 flex-wrap items-center px-4">
        <Link href="https://www.facebook.com/LabsLumos" target="_blank">
          <FaFacebook className="text-2xl lg:text-4xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/lumoslabs/mycompany/"
          target="_blank"
        >
          <FaLinkedin className="text-2xl lg:text-4xl" />
        </Link>
        <Link href="https://discord.gg/WyfmzJpzZd" target="_blank">
          <FaDiscord className="text-2xl lg:text-4xl" />
        </Link>
        <Link href="https://twitter.com/lumoslabsHQ" target="_blank">
          <FaTwitter className="text-2xl lg:text-4xl" />
        </Link>
        <Link href="https://www.instagram.com/lumoslabshq/" target="_blank">
          <FaInstagram className="text-2xl lg:text-4xl" />
        </Link>
        <Link href="https://medium.com/lumos-labs" target="_blank">
          <FaMedium className="text-2xl lg:text-4xl" />
        </Link>
      </div>

      {/* --------------- links end---------------  */}

      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit}>
          <div className="w-[90vw] lg:w-80">
            <input
              required
              name="email"
              type="email"
              value={email}
              placeholder="example@gmail.com"
              className="bg-black border rounded-sm px-4 py-2 w-full text-center"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-gradient-to-r from-secondary-2  to-primary-2 text-center hover:from-secondary-1 hover:to-secondary-3  px-8 py-3 text-base text-black uppercase">
              sign up
            </button>
          </div>
        </form>
      </div>

      {/* --------------------------  */}
      <div className="flex justify-end pr-4 mt-28">
        <div className="text-sm font-light">
          Built for the crew by{" "}
          <Link
            href="https://www.linkedin.com/in/samuel-afolabi/"
            className="underline"
            target="_blank"
          >
            Samuel Afolabi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
