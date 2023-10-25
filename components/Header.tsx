"use client";
import { FC, PropsWithChildren, useState } from "react";
import Box from "./generalComponents/Box/Box";
import Text from "./generalComponents/Text/Text";
import ListItems from "./generalComponents/ListItems/ListItems";
import ListElement from "./generalComponents/ListElement/ListElement";
import Link from "next/link";
import Button from "./generalComponents/Button/Button";
import Image from "next/image";
import img from "../public/next.svg";

type HeaderProps = PropsWithChildren;

const Header: FC<HeaderProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const handleCountChange = () => {
    setCount((c) => c + 1);
  };
  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <>
      <Box
        tag="header"
        tagChild="nav"
        hasFlex
        isJBetween
        bgDark
        isCenterY
        width="w-3/4 lg:w-2/4"
        hasMarginAuto
        customTailwindStyle="h-[70px] lg:h-[110px]"
      >
        <Text tag="p">logo</Text>
        <ListItems hasFlex customTailwindStyle="gap-[25px]">
          <ListElement isCenteredXY customTailwindStyle="hidden md:flex">
            ciao
          </ListElement>
          <ListElement isCenteredXY>
            <Link href={"https://google.com"} target="_blank">
              google
            </Link>
          </ListElement>
          <ListElement>
            <Button bgWhite isRounded handleOnClick={handleCountChange}>
              Change
            </Button>
          </ListElement>
        </ListItems>
      </Box>
      <Box
        tag="main"
        tagChild="section"
        hasFlex
        width="w-3/4"
        hasMarginAuto
        isCenteredXY
        customTailwindStyle="h-[500px] flex-col lg:flex-row gap-[30px]"
      >
        <div className="flex flex-col gap-[25px]">
          <Text tag="h1">Only the best</Text>
          <Text tag="h4">Count: {count}</Text>
          <Button
            hasSimpleBorder
            isRounded
            handleOnClick={handleResetCount}
            customTailwindStyle="w-[110px]"
          >
            Reset
          </Button>
        </div>
        <Image src={img} alt="next-logo" />
      </Box>
    </>
  );
};

export default Header;
