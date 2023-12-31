import { FC, PropsWithChildren } from "react";

export type TextTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TextProps = PropsWithChildren<{
  tag?: TextTags;
  styledAs?: TextTags;
  isWhite?: boolean;
  classNames?: string;
  isBold?: boolean;
}>;

const Text: FC<TextProps> = ({
  tag,
  styledAs,
  isWhite,
  classNames,
  isBold,
  children,
}) => {
  const TextElement = tag || "p";
  const textSizesStyle: Record<TextTags, string> = {
    h1: `lg:text-[70px] md:text-[50px] text-[42px] leading-[45px] lg:leading-[78.5px]`,
    h2: `lg:text-[50px]  md:text-[42px] text-[36px] leading-[46px] lg:leading-[54px]`,
    h3: `lg:text-[42px]  md:text-[36px] text-[32px] leading-[40px]  lg:leading-[46px]`,
    h4: `lg:text-[36px]  md:text-[32px] text-[24px] leading-[36px]  lg:leading-[40px]`,
    h5: `lg:text-[32px]  md:text-[24px] text-[20px] leading-[28px] lg:leading-[36px]`,
    h6: `lg:text-[24px]  text-[20px] leading-[28px]`,
    p: `text-md`,
    span: `text-md`,
  };

  const textStyle = `${textSizesStyle[styledAs ?? TextElement]} ${
    classNames || ""
  }`;
  return (
    <TextElement
      className={`${textStyle} ${isBold ? "font-bold" : ""} ${
        isWhite ? "text-white" : ""
      }
    `}
    >
      {children}
    </TextElement>
  );
};

export default Text;
