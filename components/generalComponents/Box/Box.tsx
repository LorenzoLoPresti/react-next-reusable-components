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
  isCenteredXY?: boolean;
  isCenterY?: boolean;
  isJBetween?: boolean;
  customTailwindStyle?: string;
  bgColor?: string;
  bgDark?: boolean;
}>;

const Box: FC<BoxProps> = ({
  tag,
  width,
  hasMarginAuto,
  hasFlex,
  hasFlexCol,
  isCenteredXY,
  isCenterY,
  isJBetween,
  customTailwindStyle,
  bgColor,
  bgDark,
  children,
}) => {
  const boxParentStyle = `${bgDark && !bgColor ? "bg-black text-white" : ""} ${
    bgColor && !bgDark ? bgColor : ""
  } w-100`;

  const boxChildStyle = `${width ? width : "w-100"} ${
    hasMarginAuto ? "m-auto" : ""
  } ${hasFlex ? "flex" : ""} ${hasFlexCol && hasFlex ? "flex-col" : ""} ${
    isCenteredXY ? "justify-center items-center" : ""
  } ${isCenterY ? "items-center" : ""} ${
    isJBetween ? "justify-between" : ""
  }  ${customTailwindStyle}`;

  const ContainerElement = tag || "div";

  return (
    <ContainerElement className={boxParentStyle}>
      <div className={`${boxChildStyle}`}>{children}</div>
    </ContainerElement>
  );
};

export default Box;
