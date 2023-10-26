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
  centeredMainAxes?: boolean;
  centeredCrossAxes?: boolean;
  isJustifyBetween?: boolean;
  classNames?: string;
  onClick?: () => void;
  bgColor?: string;
  bgDark?: boolean;
}>;

const Box: FC<BoxProps> = ({
  tag,
  width,
  hasMarginAuto,
  hasFlex,
  hasFlexCol,
  centeredMainAxes,
  centeredCrossAxes,
  isJustifyBetween,
  classNames,
  bgColor,
  onClick,
  bgDark,
  children,
}) => {
  const boxStyle = `${bgDark && !bgColor ? "bg-black text-white" : ""} ${
    bgColor && !bgDark ? bgColor : ""
  } ${width ? width : "w-full"} ${hasMarginAuto ? "m-auto" : ""} ${
    hasFlex ? "flex" : ""
  } ${hasFlexCol && hasFlex ? "flex-col" : ""} ${
    centeredMainAxes ? "justify-center" : ""
  } ${centeredCrossAxes ? "items-center" : ""} ${
    isJustifyBetween ? "justify-between" : ""
  } ${classNames ? classNames : ""}`;

  const BoxElement = tag || "div";

  return (
    <BoxElement className={boxStyle} onClick={onClick && onClick}>
      {children}
    </BoxElement>
  );
};

export default Box;
