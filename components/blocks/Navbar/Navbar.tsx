"use client";
import { FC, PropsWithChildren, useState } from "react";
import Link from "next/link";
import Box from "@/components/generalComponents/Box/Box";
import Text from "@/components/generalComponents/Text/Text";
import ListItems from "@/components/generalComponents/ListItems/ListItems";
import ListElement from "@/components/generalComponents/ListElement/ListElement";
import Button from "@/components/generalComponents/Button/Button";

type NavbarProps = PropsWithChildren<{
  handleCountChange?: () => void;
}>;

const Navbar: FC<NavbarProps> = ({ handleCountChange, children }) => {
  return (
    <>
      <Box
        tag="nav"
        hasFlex
        isJustifyBetween
        centeredCrossAxes
        width="w-3/4 lg:w-2/4"
        hasMarginAuto
        classNames="h-[70px] lg:h-[110px]"
      >
        <Text tag="p">
          <Link href={"/"}>logo</Link>
        </Text>
        <ListItems hasFlex classNames="gap-[25px]">
          <ListElement isCenteredXY>
            <Link href={"/articlePage"}>ArticlePage</Link>
          </ListElement>
          <ListElement isCenteredXY>
            <Link href={"/dropdownPage"}>DropdownPage</Link>
          </ListElement>
          <ListElement isCenteredXY classNames="hidden md:flex">
            <Link href={"https://google.com"} target="_blank">
              Vai a google
            </Link>
          </ListElement>
          <ListElement>
            {handleCountChange && (
              <Button bgWhite isRounded handleOnClick={handleCountChange}>
                Change
              </Button>
            )}
          </ListElement>
        </ListItems>
      </Box>
    </>
  );
};

export default Navbar;
