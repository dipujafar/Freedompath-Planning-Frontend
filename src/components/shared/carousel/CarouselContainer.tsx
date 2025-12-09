"use client";;
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ReactNode } from "react";


const CarouselContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 60,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 3500,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="overflow-hidden xl:mt-8  md:mt-4 mt-3"
    >
      <CarouselContent>
        {children}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselContainer;
