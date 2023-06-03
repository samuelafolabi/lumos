"use client";
import Nav from "@/components/Nav/Nav";
import HeroFold from "@/components/HeroFold/HeroFold";

import Image from "next/image";
import WhyBuidlFold from "@/components/WhyBuidlFold/WhyBuidlFold";
import HowToJoinFold from "@/components/HowtoJoinFold/HowToJoinFold";
import ContestAndEventsFold from "@/components/ContestAndEventsFold/ContestAndEventsFold";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="flex flex-col gap-48">
        <HeroFold />
        <WhyBuidlFold />
        <HowToJoinFold />
        <ContestAndEventsFold />
      </div>
    </main>
  );
}
