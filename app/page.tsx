"use client";
import Box from "@/components/generalComponents/Box/Box";
import Button from "@/components/generalComponents/Button/Button";
import ListElement from "@/components/generalComponents/ListElement/ListElement";
import ListItems from "@/components/generalComponents/ListItems/ListItems";
import Text from "@/components/generalComponents/Text/Text";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img from "../public/next.svg";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleCountChange = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      {/* <Box
        tag="nav"
        hasMarginAuto
        width="w-1/4"
        isCenteredXY
        hasFlex
        hasFlexCol
        customTailwindStyle="justify-between"
        bgColor="bg-red-900"
      >
        <Text tag="h1">{count}</Text>
        <Button hasSimpleBorder isRounded handleOnClick={handleCountChange}>
          ciao
        </Button>
      </Box> */}
      <Box
        tag="nav"
        hasFlex
        isJBetween
        bgDark
        isCenterY
        width="w-3/4"
        hasMarginAuto
        customTailwindStyle="h-[110px]"
      >
        <Text tag="p">logo</Text>
        <ListItems hasFlex customTailwindStyle="gap-[25px]">
          <ListElement>ciao</ListElement>
          <ListElement>
            <Link href={"https://google.com"} target="_blank">
              google
            </Link>
          </ListElement>
        </ListItems>
      </Box>
      <Box
        hasFlex
        width="w-3/4"
        hasMarginAuto
        isCenteredXY
        customTailwindStyle="h-[500px]"
      >
        <Text tag="h1">Only the best</Text>
        <Image src={img} alt="next-logo" />
      </Box>
    </>
  );
}
