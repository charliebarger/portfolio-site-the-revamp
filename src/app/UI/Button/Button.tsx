import Link from "next/link";
import styles from "./button.module.css";
import type { Route } from "next";
import type { ComponentType, MouseEventHandler, ReactNode } from "react";

const ButtonLink = Link as unknown as ComponentType<{
  href: Route<string>;
  className: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
}>;

const variantClasses = {
  default: styles.default,
  outline: styles.outline,
  transparent: styles.transparent,
} as const;

const shapeClasses = {
  default: styles.rounded,
  pill: styles.pill,
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonShape = keyof typeof shapeClasses;

interface SharedButtonProps {
  variant: ButtonVariant;
  shape: ButtonShape;
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

interface ActionButtonProps {
  kind?: "button";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: never;
}

interface LinkButtonProps<T extends string> {
  kind: "link";
  href: Route<T>;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
  disabled?: never;
}

export type ButtonProps<T extends string = string> = SharedButtonProps &
  (ActionButtonProps | LinkButtonProps<T>);

const Button = <T extends string>(props: ButtonProps<T>) => {
  const { variant, shape, text, iconLeft, iconRight } = props;

  const className = [
    styles.button,
    variantClasses[variant],
    shapeClasses[shape],
  ].join(" ");

  const content = (
    <>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span className={`${styles.text} text-body-md`}>{text}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </>
  );

  if (props.kind === "link") {
    return (
      <ButtonLink
        href={props.href}
        className={className}
        onClick={props.onClick}
      >
        {content}
      </ButtonLink>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled ?? false}
      className={className}
      onClick={props.onClick}
    >
      {content}
    </button>
  );
};

export default Button;
