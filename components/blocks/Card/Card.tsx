import Box from "@/components/generalComponents/Box/Box";
import Text from "@/components/generalComponents/Text/Text";
import { TextTags } from "../../generalComponents/Text/Text";

interface CardProps {
  hasFlex?: boolean;
  hasFlexCol?: boolean;
  centeredMainAxes?: boolean;
  centeredCrossAxes?: boolean;
  width?: string;
  classNames?: string;
  children?: React.ReactNode;
}

interface ChildElementsProps {
  isNotBold?: boolean;
  isTextCenter?: boolean;
  tag?: TextTags;
  classNames?: string;
  children: React.ReactNode;
}

const Card = ({
  hasFlex,
  hasFlexCol,
  centeredMainAxes,
  centeredCrossAxes,
  width,
  classNames,
  children,
}: CardProps) => {
  const cardStyle = `${hasFlex ? "gap-[20px]" : ""} p-3 rounded border-2 ${
    width ? width : "w-[400px]"
  } ${classNames}`;
  return (
    <Box
      hasFlex={hasFlex}
      hasFlexCol={hasFlexCol}
      centeredMainAxes={centeredMainAxes}
      centeredCrossAxes={centeredCrossAxes}
      width={width}
      classNames={cardStyle}
    >
      {children}
    </Box>
  );
};

export default Card;

Card.title = ({
  isNotBold,
  isTextCenter,
  tag,
  classNames,
  children,
}: ChildElementsProps) => {
  const titleStyle = `${isNotBold ? "" : "font-bold"} ${
    isTextCenter ? "text-center" : ""
  } mb-3 ${classNames ? classNames : ""}`;
  return (
    <Text tag={tag} classNames={titleStyle}>
      {children}
    </Text>
  );
};

Card.body = ({ classNames, children }: ChildElementsProps) => {
  return <Box classNames={`${classNames} p-3`}>{children}</Box>;
};
