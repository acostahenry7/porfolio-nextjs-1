import { Button } from "@/components/ui/MovingBorders";
import { workExperience } from "@/data";
import React from "react";

const WorkExperience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>{" "}
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, idx) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            // style={{
            //   background: "rgba(4,7,29,0.1)",
            //   backgroundColor:
            //     "linear-gradient(90deg, rgba(4,7,29,0) 0%, rgba(12,14,35,0) 50%)",
            //   borderRadius: `calc(1.75rem* 0.96)`,
            // }}
          >
            <div className="flex lg:flex-grow lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
