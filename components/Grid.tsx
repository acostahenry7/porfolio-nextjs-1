import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";
import React from "react";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-2">
        {gridItems.map(
          ({
            id,
            title,
            description,
            img,
            className,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
