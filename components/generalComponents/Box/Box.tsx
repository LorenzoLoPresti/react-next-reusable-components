import { FC, PropsWithChildren } from "react";

type boxTags =
  | "nav"
  | "aside"
  | "article"
  | "header"
  | "main"
  | "section"
  | "footer";

type BoxProps = PropsWithChildren<{
  tag?: boxTags;
  width?: string;
  hasMarginAuto?: boolean;
  hasFlex?: boolean;
  hasFlexCol?: boolean;
  isCenteredX?: boolean;
  isCenterY?: boolean;
  isJustifyBetween?: boolean;
  customTailwindStyle?: string;
  bgColor?: string;
  bgDark?: boolean;
}>;

const Container: FC<BoxProps> = ({
  tag,
  width,
  hasMarginAuto,
  hasFlex,
  hasFlexCol,
  isCenteredX,
  isCenterY,
  isJustifyBetween,
  customTailwindStyle,
  bgColor,
  bgDark,
  children,
}) => {
  const boxStyle = `${bgDark && !bgColor ? "bg-black text-white" : ""} ${
    bgColor && !bgDark ? bgColor : ""
  } ${width ? width : "w-full"} ${hasMarginAuto ? "m-auto" : ""} ${
    hasFlex ? "flex" : ""
  } ${hasFlexCol && hasFlex ? "flex-col" : ""} ${
    isCenteredX ? "justify-center" : ""
  } ${isCenterY ? "items-center" : ""} ${
    isJustifyBetween ? "justify-between" : ""
  } ${customTailwindStyle ? customTailwindStyle : ""}`;

  const BoxElement = tag || "div";

  return <BoxElement className={boxStyle}>{children}</BoxElement>;
};

export default Container;
