import { FC, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  handleOnClick: () => void;
  textWhite?: boolean;
  bgWhite?: boolean;
  customTailwindStyle?: string;
  hasSimpleBorder?: boolean;
  isRounded?: boolean;
}>;

const Button: FC<ButtonProps> = ({
  handleOnClick,
  textWhite,
  bgWhite,
  customTailwindStyle,
  hasSimpleBorder,
  isRounded,
  children,
}) => {
  const buttonStyle = `${!bgWhite && textWhite ? "text-white" : ""} ${
    bgWhite ? "bg-white" : ""
  } ${hasSimpleBorder ? "border-black border-[1px] solid" : ""} ${
    isRounded ? "rounded" : ""
  } py-1 px-2 ${customTailwindStyle}`;
  return (
    <button onClick={handleOnClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
