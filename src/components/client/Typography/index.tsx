"use client"

import { FunctionComponent } from "react"
import { TypographyProps } from "./types"
import { classnames, cva } from "@/helpers/classnames"

const typography = cva("duration-50", {
  variants: {
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    },
    family: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
      start: "text-start",
      end: "text-end"
    },
    decoration: {
      "no-underline": "no-underline",
      underline: "underline",
      "line-through": "line-through",
      overline: "overline"
    },
    variant: {
      primary: "text-slate-900 dark:text-white",
      secondary: "text-slate-500 dark:text-slate-400"
    },
    lineHeight: {
      3: "leading-3",
      4: "leading-4",
      5: "leading-5",
      6: "leading-6",
      7: "leading-7",
      8: "leading-8",
      9: "leading-9",
      10: "leading-10",
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose"
    },
    lineClamp: {
      1: "line-clamp-3",
      2: "line-clamp-3",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6",
      none: "line-clamp-none"
    },
    whitespace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      "pre-line": "whitespace-pre-line",
      "pre-wrap": "whitespace-pre-wrap",
      "break-spaces": "whitespace-break-spaces"
    },
    overflow: {
      truncate: "truncate",
      ellipsis: "text-ellipsis",
      clip: "text-clip"
    }
  }
})

const Typography: FunctionComponent<TypographyProps> = ({
  children,
  className,
  component: Component = "p",
  weight = "regular",
  size = "base",
  family = "sans",
  align = "left",
  variant = "primary",
  decoration = "no-underline",
  lineHeight = "normal",
  lineClamp,
  whitespace,
  overflow,
  ...props
}) => {
  const typographyClasses = typography({ weight, size, family, align, decoration, variant, lineHeight, lineClamp, whitespace, overflow })
  const classes = classnames(typographyClasses, className)

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Typography
