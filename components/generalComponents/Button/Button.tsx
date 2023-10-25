import { FC, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  handleOnClick: () => void;
  textWhite?: boolean;
  bgWhite?: boolean;
  classNames?: string;
  hasSimpleBorder?: boolean;
  isRounded?: boolean;
}>;

const Button: FC<ButtonProps> = ({
  handleOnClick,
  textWhite,
  bgWhite,
  classNames,
  hasSimpleBorder,
  isRounded,
  children,
}) => {
  const buttonStyle = `${!bgWhite && textWhite ? "text-white" : ""} ${
    bgWhite ? "bg-white text-black" : ""
  } ${hasSimpleBorder ? "border-black border-[1px] solid" : ""} ${
    isRounded ? "rounded" : ""
  } py-1 px-2 ${classNames}`;
  return (
    <button onClick={handleOnClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
