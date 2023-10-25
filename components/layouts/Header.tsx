"use client";
import { FC, PropsWithChildren, useState } from "react";
import Box from "../generalComponents/Box/Box";
import Text from "../generalComponents/Text/Text";
import ListItems from "../generalComponents/ListItems/ListItems";
import ListElement from "../generalComponents/ListElement/ListElement";
import Link from "next/link";
import Button from "../generalComponents/Button/Button";
// import Image from "next/image";
// import img from "../../public/next.svg";

type HeaderProps = PropsWithChildren;

const Header: FC<HeaderProps> = ({ children }) => {
  return children;
};

export default Header;
