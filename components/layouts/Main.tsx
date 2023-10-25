import { FC, PropsWithChildren } from "react";
import Box from "../generalComponents/Box/Box";

type MainProps = PropsWithChildren;

const Main: FC<MainProps> = ({ children }) => {
  return <Box tag="main">{children}</Box>;
};

export default Main;
