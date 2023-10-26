"use client";
import { FC, useState } from "react";
import Box from "@/components/generalComponents/Box/Box";
import Text from "@/components/generalComponents/Text/Text";
import DropdownMenu from "@/components/blocks/DropdownMenu/DropdownMenu";
import ListItems from "@/components/generalComponents/ListItems/ListItems";
import ListElement from "@/components/generalComponents/ListElement/ListElement";
import Carousel from "@/components/blocks/Carousel/Carousel";
import img from "../../public/spaceplaceholder.jpg";
import { Data } from "../../components/blocks/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import Card from "@/components/blocks/Card/Card";
import Image from "next/image";

export const data: Data[] = [
  {
    id: "space",
    src: img,
  },
  {
    id: "space",
    src: img,
  },
  {
    id: "space",
    src: img,
  },
];

const Page2: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <Box
      tag="main"
      hasFlex
      hasFlexCol
      centeredCrossAxes
      classNames="gap-[20px] py-[200px] relative"
    >
      <Box onClick={handleIsOpen}>
        <Text tag="h1" classNames="text-center cursor-pointer">
          Click Me
        </Text>
      </Box>
      <DropdownMenu
        isOpen={isOpen}
        width="w-3/4"
        bgDark
        classNames="text-center top-0"
      >
        <ListItems hasFlex classNames="flex-col gap-[20px]">
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
        </ListItems>
      </DropdownMenu>

      {/* <Carousel data={data} numSlidesShown={1} /> */}
      <Carousel numSlidesShown={2} isCentered>
        {data.map((data) => {
          return (
            <SwiperSlide key={"carousel" + data.id}>
              <Card width="w-[400px]">
                <Image src={data.src} alt="img" />
                <Card.title isTextCenter>Titolo</Card.title>
                <Card.body>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus libero iusto ab asperiores dolore nemo vel debitis
                    porro fugit hic dicta, doloremque reiciendis. Similique
                    laboriosam rerum aliquam provident, facere quia!
                  </Text>
                </Card.body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Page2;
