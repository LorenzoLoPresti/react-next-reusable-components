"use client";
import React, { PropsWithChildren, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swpCss.css";
import Image, { StaticImageData } from "next/image";

import { Pagination } from "swiper/modules";
import img from "../../../public/spaceplaceholder.jpg";
import Box from "@/components/generalComponents/Box/Box";
import Card from "../Card/Card";
import Text from "@/components/generalComponents/Text/Text";

type CarouselProps = PropsWithChildren<{
  data?: Data[];
  numSlidesShown?: number;
  isText?: boolean;
  isCentered?: boolean;
}>;

export interface Data {
  id: string;
  src: string | StaticImageData;
}

export default function Carousel({
  data,
  numSlidesShown = 3,
  isText,
  isCentered,
  children,
}: CarouselProps) {
  return (
    <>
      <Swiper
        slidesPerView={numSlidesShown}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        centeredSlides={isCentered}
        className="mySwiper"
      >
        {data?.map((image, i) => (
          <SwiperSlide
            className="bg-subbaRed flex-col justify-center pb-10 w-[380px]"
            key={i}
          >
            <Card>
              <Image src={image.src} alt="alt" />
              <Card.title isTextCenter>Titolo card</Card.title>
              <Card.body>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                  voluptate esse perspiciatis nesciunt accusamus debitis
                  molestiae eos asperiores? Quaerat, voluptas. Nihil nam
                  exercitationem quae perferendis quod vitae et ratione
                  excepturi?
                </Text>
              </Card.body>
            </Card>
          </SwiperSlide>
        ))}
        {children}
      </Swiper>
    </>
  );
}
