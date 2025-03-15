import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: ReactNode;
  full?: boolean;
  className?: string;
};

export function Container({ children, full, className }: ContainerProps) {
  const ContainerClass = twMerge(
    "w-full max-w-6xl mx-auto px-2",
    full && "w-full max-w-full mx-auto",
    className
  );

  return <div className={ContainerClass}>{children}</div>;
}