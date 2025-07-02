import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:100px_100px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_0.5px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]",
            "dark:bg-black-100"
          )}
        />
      </div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] dark:bg-black-100" />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80">
            Let us get in touch
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl tracking-tight"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Ohayou! I’m Henry, a Frotend Dev at Santo Domingo
          </p>
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
