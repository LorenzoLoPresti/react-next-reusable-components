import { FC, PropsWithChildren, useState } from "react";
import style from "./DropdownMenu.module.css";
import Box from "@/components/generalComponents/Box/Box";

export type DropdownMenuProps = PropsWithChildren<{
  isOpen: boolean;
  showWhenMobile?: boolean;
  bgDark?: boolean;
  width?: string;
  classNames?: string;
}>;

export const DropdownMenu: FC<DropdownMenuProps> = ({
  showWhenMobile,
  isOpen,
  bgDark,
  width,
  classNames,
  children,
}) => {
  return (
    <Box
      // classNames={`lg:hidden block absolute top-[60px] pt-4 ${
      //   isOpen ? style.active : style.inactive
      // }`}
      width={width}
      bgDark={bgDark}
      classNames={`${
        showWhenMobile ? "lg:hidden block" : ""
      } absolute top-[60px] pt-4 ${isOpen ? style.active : style.inactive} ${
        classNames ? classNames : ""
      }`}
    >
      {children}
    </Box>
  );
};

export default DropdownMenu;
