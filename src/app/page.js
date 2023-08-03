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
import HallOfFameFold from "@/components/HallOfFameFold/HallOfFameFold";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);

  return (
    <>
      <div className="ball bg-primary-2 w-4 h-4 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-2 w-4 h-4 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-3 w-3 h-3 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-3 h-3 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-3 h-3 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-2 h-2 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-2 w-1 h-1 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-3 w-1 h-1 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-1 h-1 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-1 h-1 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-primary-2 w-1 h-1 fixed top-0 left-0 rounded-[50%]"></div>
      <div className="ball bg-secondary-2 w-1 h-1 fixed top-0 left-0 rounded-[50%]"></div>

      <main className="relative">
        <Nav />
        <div className="flex flex-col  mx-auto max-w-screen-2xl">
          <HeroFold />
          {/* <div className=""></div> */}
          <WhyBuidlFold />
          <HowToJoinFold />
          <ContestAndEventsFold />
          <div className="h-44"></div>
          <EventsFold />
          <div className="h-40"></div>
          <HallOfFameFold />
          <div className="h-48"></div>
          <Footer />
        </div>
      </main>
    </>
  );
}
