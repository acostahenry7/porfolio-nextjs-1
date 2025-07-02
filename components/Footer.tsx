import MagicButton from "@/components/ui/MagicButton";
import { socialMedia } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full md:pt-20 pt-10 pb-20" id="contact">
      <div className="w-full absolute left-0 bottom-0 md:h-[80vh] h-[100vh] overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full md:opacity-50 opacity-60 object-none "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the Next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how can you achieve your
          goals
        </p>
        <a href="mailto:acostahenry7@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal fong-light bg-opacity-75">
          Copyright © 2025 Henry Acosta
        </p>
        <div className="flex items-center md:gap-3 gap-6 max-sm:mt-2">
          {socialMedia.map((profile) => (
            <a href={profile.link} target="_blank">
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-black-200 rounded-lg border border-black-300"
              >
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
