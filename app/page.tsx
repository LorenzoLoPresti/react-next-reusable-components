"use client";
import Jumbotron from "@/components/blocks/Jumbotron/Jumbotron";
import Navbar from "@/components/blocks/Navbar/Navbar";
import Box from "@/components/generalComponents/Box/Box";
import Button from "@/components/generalComponents/Button/Button";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleCountChange = () => {
    setCount((c) => c + 1);
  };

  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <>
      {/* <Header>
        <Navbar handleCountChange={handleCountChange} />
      </Header> */}
      <Main>
        <Jumbotron count={count} resetCount={handleResetCount} />
        <Box
          bgDark
          tag="section"
          hasMarginAuto
          width="w-3/4"
          hasFlex
          centeredMainAxes
          classNames="py-[20px] gap-[20px]"
        >
          <Button
            handleOnClick={handleCountChange}
            isRounded
            hasSimpleBorder
            bgWhite
            classNames="w-[110px]"
          >
            Add 1
          </Button>
          <Button
            handleOnClick={() => setCount((c) => c - 1)}
            isRounded
            hasSimpleBorder
            bgWhite
            classNames="w-[110px]"
          >
            Remove 1
          </Button>
        </Box>
      </Main>
    </>
  );
}
