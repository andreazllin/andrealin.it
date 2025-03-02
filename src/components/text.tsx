// https://playfulprogramming.com/posts/react-as-prop
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"

const typographyVariants = cva("tracking-normal", {
  variants: {
    size: {
      // ?: text size in rem and line height in rem, where tracking is defined it is -2% of the font size
      "text-display-2xl": "text-7xl/[5.625rem] tracking-[-0.09rem]",
      "text-display-xl": "text-6xl/[4.5rem] tracking-[-0.075rem]",
      "text-display-lg": "text-5xl/[3.75rem] tracking-[-0.06rem]",
      "text-display-md": "text-4xl/[2.75rem] tracking-[-0.045rem]",
      "text-display-sm": "text-3xl/[2.375rem]",
      "text-display-xs": "text-2xl/[2rem]",
      "text-xl": "text-xl/[1.875rem]",
      "text-lg": "text-lg/[1.75rem]",
      "text-md": "text-md/[1.5rem]",
      "text-sm": "text-sm/[1.25rem]",
      "text-xs": "text-xs/[1.125rem]"
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    },
    suggestedMaxWidth: {
      true: "max-w-[75ch]",
      false: ""
    }
  },
  defaultVariants: {
    size: "text-md",
    weight: "regular"
  }
})

type Variants = VariantProps<typeof typographyVariants>

type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E
  }
>
type TextProps<T extends React.ElementType> = PolymorphicProps<T> & {
  variants?: Variants
}

export function Text<T extends React.ElementType = "p">({
  as,
  variants,
  className,
  ...props
}: TextProps<T>) {
  const Component = as || "p"

  const typographyClasses = typographyVariants({
    size: variants?.size,
    weight: variants?.weight,
    suggestedMaxWidth: variants?.suggestedMaxWidth,
    className
  })

  return <Component className={typographyClasses} {...props} />
}
