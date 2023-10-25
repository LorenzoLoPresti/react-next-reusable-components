import { FC, PropsWithChildren } from "react";

export type ListElementProps = PropsWithChildren<{
  isWhite?: boolean;
  isLink?: boolean;
  isCenteredXY?: boolean;
  classNames?: string;
}>;

const ListElement: FC<ListElementProps> = ({
  isWhite,
  isCenteredXY,
  classNames,
  children,
}) => {
  const listElementStyle = `${isCenteredXY ? "flex items-center" : ""} ${
    isWhite ? "text-white" : ""
  } ${classNames ? classNames : ""}`;

  return <li className={listElementStyle}>{children}</li>;
};

export default ListElement;
