import { cva as _cva } from "class-variance-authority"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type { VariantProps } from "class-variance-authority"

export function classnames(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function cva<T>(
  ...inputs: Parameters<typeof _cva<T>>
): ReturnType<typeof _cva<T>> {
  const getClassName = _cva(...inputs)
  return (...args: Parameters<typeof getClassName>) => {
    return twMerge(getClassName(...args))
  }
}
