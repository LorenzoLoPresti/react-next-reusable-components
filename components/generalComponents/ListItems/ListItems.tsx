import { FC, PropsWithChildren } from "react";

export type ListItemsProps = PropsWithChildren<{
  isOrderedList?: boolean;
  hasFlex?: boolean;
  classNames?: string;
}>;

const ListItems: FC<ListItemsProps> = ({
  isOrderedList,
  hasFlex,
  classNames,
  children,
}) => {
  const ListItemsElement = isOrderedList ? "ol" : "ul";
  const listItemsStyle = `${hasFlex ? "flex" : ""} ${classNames}`;

  return (
    <ListItemsElement className={listItemsStyle}>{children}</ListItemsElement>
  );
};

export default ListItems;
