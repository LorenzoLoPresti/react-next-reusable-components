"use client";
import { FC, useState } from "react";
import Box from "@/components/generalComponents/Box/Box";
import Text from "@/components/generalComponents/Text/Text";
import DropdownMenu from "@/components/blocks/DropdownMenu/DropdownMenu";
import ListItems from "@/components/generalComponents/ListItems/ListItems";
import ListElement from "@/components/generalComponents/ListElement/ListElement";

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
      classNames="gap-[20px] py-[100px] relative cursor-pointer"
    >
      <Box onClick={handleIsOpen}>
        <Text tag="h1" classNames="text-center">
          Click Me
        </Text>
      </Box>
      <DropdownMenu
        isOpen={isOpen}
        width="w-3/4"
        bgDark
        classNames="text-center top-[70%]"
      >
        <ListItems hasFlex classNames="flex-col gap-[20px]">
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
        </ListItems>
      </DropdownMenu>
    </Box>
  );
};

export default Page2;
