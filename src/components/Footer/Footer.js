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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  const logoSize = "40px";
  return (
    <>
      <div className="font-Brinnan" id="footer">
        <div className="uppercase text-center font-Brinnan text-2xl">
          Stay updated with our journey
        </div>
        {/* --------------- links ---------------  */}

        <div className="flex justify-center gap-10 mt-16">
          <Link href="https://www.facebook.com/LabsLumos" target="_blank">
            <FaFacebook size={logoSize} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/lumoslabs/mycompany/"
            target="_blank"
          >
            <FaLinkedin size={logoSize} />
          </Link>
          <Link href="https://discord.gg/WyfmzJpzZd" target="_blank">
            <FaDiscord size={logoSize} />
          </Link>
          <Link href="https://twitter.com/lumoslabsHQ" target="_blank">
            <FaTwitter size={logoSize} />
          </Link>
          <Link href="https://www.instagram.com/lumoslabshq/" target="_blank">
            <FaInstagram size={logoSize} />
          </Link>
          <Link href="https://medium.com/lumos-labs" target="_blank">
            <FaMedium size={logoSize} />
          </Link>
        </div>

        {/* --------------- links end---------------  */}

        <div className="flex justify-center mt-10">
          <form onSubmit={handleSubmit}>
            <div className="w-80">
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
    </>
  );
};

export default Footer;
