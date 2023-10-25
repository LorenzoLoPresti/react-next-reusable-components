"use client";
import { FC, PropsWithChildren, useState } from "react";
import Link from "next/link";
import Box from "@/components/generalComponents/Box/Box";
import Text from "@/components/generalComponents/Text/Text";
import ListItems from "@/components/generalComponents/ListItems/ListItems";
import ListElement from "@/components/generalComponents/ListElement/ListElement";
import Button from "@/components/generalComponents/Button/Button";

type NavbarProps = PropsWithChildren<{
  handleCountChange: () => void;
}>;

const Navbar: FC<NavbarProps> = ({ handleCountChange, children }) => {
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
        childCustomTailwindStyle="h-[70px] lg:h-[110px]"
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
    </>
  );
};

export default Navbar;