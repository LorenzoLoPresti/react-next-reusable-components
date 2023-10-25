import { FC, PropsWithChildren } from "react";
import Box from "../../generalComponents/Box/Box";
import Button from "../../generalComponents/Button/Button";
import Text from "../../generalComponents/Text/Text";
import Image from "next/image";
import img from "../../../public/next.svg";

type JumbotronProps = PropsWithChildren<{
  count: number;
  resetCount: () => void;
}>;

const Jumbotron: FC<JumbotronProps> = ({ count, resetCount, children }) => {
  return (
    <Box
      tag="section"
      hasFlex
      width="w-3/4"
      hasMarginAuto
      isCenteredX
      isCenterY
      customTailwindStyle="h-[500px] flex-col lg:flex-row gap-[30px]"
    >
      <Box customTailwindStyle="flex flex-col gap-[25px]">
        <Text tag="h1">Only the best</Text>
        <Text tag="h4">Count: {count}</Text>
        <Button
          hasSimpleBorder
          isRounded
          handleOnClick={resetCount}
          customTailwindStyle="w-[110px]"
        >
          Reset
        </Button>
      </Box>
      <Image src={img} alt="next-logo" />
    </Box>
  );
};

export default Jumbotron;
