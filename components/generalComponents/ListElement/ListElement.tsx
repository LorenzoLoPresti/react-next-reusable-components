import { FC, PropsWithChildren } from "react";

export type ListElementProps = PropsWithChildren<{
  isWhite?: boolean;
  isLink?: boolean;
  customTailwindStyle?: string;
}>;

const ListElement: FC<ListElementProps> = ({
  isWhite,
  customTailwindStyle,
  children,
}) => {
  const listElementStyle = `${isWhite ? "text-white" : ""} ${
    customTailwindStyle ? customTailwindStyle : ""
  }`;

  return <li className={listElementStyle}>{children}</li>;
};

export default ListElement;
