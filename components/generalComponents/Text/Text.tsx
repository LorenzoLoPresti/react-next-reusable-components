import { FC, PropsWithChildren } from "react";

type TextTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TextProps = PropsWithChildren<{
  tag?: TextTags;
  styledAs?: TextTags;
  isWhite?: boolean;
  customTailwindStyle?: string;
  isBold?: boolean;
}>;

const Text: FC<TextProps> = ({
  tag,
  styledAs,
  isWhite,
  customTailwindStyle,
  isBold,
  children,
}) => {
  const TextElement = tag || "p";
  const textSizesStyle: Record<TextTags, string> = {
    h1: `lg:text-[70px] md:text-[50px] text-[42px]`,
    h2: `lg:text-[50px]  md:text-[42px] text-[36px]`,
    h3: `lg:text-[42px]  md:text-[36px] text-[32px]`,
    h4: `lg:text-[36px]  md:text-[32px] text-[24px]`,
    h5: `lg:text-[32px]  md:text-[24px] text-[20px]`,
    h6: `lg:text-[24px]  md:text-[20px]`,
    p: `text-md`,
    span: `text-md`,
  };

  const textStyle = `${textSizesStyle[styledAs ?? TextElement]} ${
    customTailwindStyle || ""
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
