"use client";
import { FC, PropsWithChildren, useState } from "react";
import Box from "../generalComponents/Box/Box";

type HeaderProps = PropsWithChildren;

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <Box tag="header" bgDark>
      {children}
    </Box>
  );
};

export default Header;
