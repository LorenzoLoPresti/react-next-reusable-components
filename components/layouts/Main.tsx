import { FC, PropsWithChildren } from "react";

type MainProps = PropsWithChildren;

const Main: FC<MainProps> = ({ children }) => {
  return children;
};

export default Main;
