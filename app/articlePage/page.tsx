"use client";
import BlogArticle from "@/components/blocks/BlogArticle/BlogArticle";
import Card from "@/components/blocks/Card/Card";
import Box from "@/components/generalComponents/Box/Box";
import Text from "@/components/generalComponents/Text/Text";
import Image from "next/image";
import { FC, useEffect } from "react";
import img from "../../public/spaceplaceholder.jpg";

const Page2: FC = () => {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <Box
      tag="main"
      hasFlex
      hasFlexCol
      centeredCrossAxes
      classNames="gap-[20px] pb-[100px]"
    >
      <BlogArticle />
      <CardBox />
    </Box>
  );
};

export default Page2;

const CardBox = () => {
  return (
    <Box
      width="w-3/4"
      classNames="gap-[20px] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4"
    >
      {Array.from({ length: 5 }, (_, i) => i + 1).map((_, i) => (
        <Card hasFlex hasFlexCol centeredCrossAxes key={i}>
          <Image src={img} alt="img"></Image>
          <Card.body>
            <Card.title isTextCenter>Titolo</Card.title>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus aspernatur, corporis, ducimus, eos temporibus
              cumque laborum cum rerum omnis vitae consectetur quod! Fugit,
              tempora quisquam? Tempora aliquam quia eaque nihil.
            </Text>
          </Card.body>
        </Card>
      ))}
    </Box>
  );
};
