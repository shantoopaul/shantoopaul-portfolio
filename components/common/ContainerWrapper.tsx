import { ReactNode } from "react";

interface ContainerWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContainerWrapper = ({ children, className }: ContainerWrapperProps) => {
  return (
    <div className={`${className} px-6 max-w-6xl w-full mx-auto`}>{children}</div>
  );
};

export default ContainerWrapper;
