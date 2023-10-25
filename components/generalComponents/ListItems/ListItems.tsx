import { FC, PropsWithChildren } from "react";

export type ListItemsProps = PropsWithChildren<{
  isOrderedList?: boolean;
  hasFlex?: boolean;
  customTailwindStyle?: string;
}>;

const ListItems: FC<ListItemsProps> = ({
  isOrderedList,
  hasFlex,
  customTailwindStyle,
  children,
}) => {
  const ListItemsElement = isOrderedList ? "ol" : "ul";
  const listItemsStyle = `${hasFlex ? "flex" : ""} ${customTailwindStyle}`;

  return (
    <ListItemsElement className={listItemsStyle}>{children}</ListItemsElement>
  );
};

export default ListItems;
