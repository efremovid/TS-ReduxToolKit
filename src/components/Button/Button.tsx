import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  widthVariant?: "big" | "small" | "default";
}

export const Button = ({
  children,
  className,
  widthVariant = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.common, styles[widthVariant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
