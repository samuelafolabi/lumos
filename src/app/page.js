import Nav from "@/components/Nav/Nav";
import HeroFold from "@/components/HeroFold/HeroFold";

import Image from "next/image";
import WhyBuidlFold from "@/components/WhyBuidlFold/WhyBuidlFold";
import HowToJoinFold from "@/components/HowtoJoinFold/HowToJoinFold";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="flex flex-col gap-48">
        <HeroFold />
        <WhyBuidlFold />
        <HowToJoinFold />
      </div>
    </main>
  );
}
