import { HTMLAttributes, ReactNode } from "react"

export type TypographyProps = (Heading | Paragraph | Span) &
  TypographyStyle & {
    children?: ReactNode | string | number
  }

export type TypographyStyle = {
  /**
   * Font weight,
   * Regular: 400 |
   * Medium: 500 |
   * Semibold: 600
   */
  weight?: "regular" | "medium" | "semibold"
  /**
   * Font size
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"
  /**
   * Font family
   */
  family?: "sans" | "serif" | "mono"
  /**
   * Text align
   */
  align?: "left" | "center" | "right" | "justify" | "start" | "end"
  /**
   * Text decoration
   */
  decoration?: "no-underline" | "underline" | "line-through" | "overline"
  /**
   * Text color variant
   */
  variant?: "primary" | "secondary"
  /**
   * Line heigth
   */
  lineHeight?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "none" | "tight" | "snug" | "normal" | "relaxed" | "loose"
}

type Heading = HTMLAttributes<HTMLHeadingElement> & {
  /**
   * HTML wrapper element
   */
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

type Paragraph = HTMLAttributes<HTMLParagraphElement> & {
  /**
   * HTML Wrapper element
   */
  component?: "p"
}

type Span = HTMLAttributes<HTMLSpanElement> & {
  /**
   * HTML Wrapper element
   */
  component?: "span"
}
