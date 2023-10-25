import { FC, PropsWithChildren } from "react";

export type ListElementProps = PropsWithChildren<{
  isWhite?: boolean;
  isLink?: boolean;
  isCenteredXY?: boolean;
  customTailwindStyle?: string;
}>;

const ListElement: FC<ListElementProps> = ({
  isWhite,
  isCenteredXY,
  customTailwindStyle,
  children,
}) => {
  const listElementStyle = `${isCenteredXY ? "flex items-center" : ""} ${
    isWhite ? "text-white" : ""
  } ${customTailwindStyle ? customTailwindStyle : ""}`;

  return <li className={listElementStyle}>{children}</li>;
};

export default ListElement;
