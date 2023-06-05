"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav/Nav";
import HeroFold from "@/components/HeroFold/HeroFold";

import Image from "next/image";
import WhyBuidlFold from "@/components/WhyBuidlFold/WhyBuidlFold";
import HowToJoinFold from "@/components/HowtoJoinFold/HowToJoinFold";
import ContestAndEventsFold from "@/components/ContestAndEventsFold/ContestAndEventsFold";
import EventsFold from "@/components/EventsFold/EventsFold";

import { gsap } from "gsap";

export default function Home() {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 1,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.1,
      });
    });
  }, []);

  // window.addEventListener("mousemove", (e) => {
  //   console.log(e);
  // });
  return (
    <>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-3 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-1 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-3 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-1 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <main className="relative">
        <Nav />
        <div className="flex flex-col gap-48 mx-auto max-w-screen-2xl">
          <HeroFold />
          <WhyBuidlFold />
          <HowToJoinFold />
          <ContestAndEventsFold />
          <EventsFold />
        </div>
      </main>
    </>
  );
}
