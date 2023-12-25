"use client"

import { FunctionComponent } from "react"
import SVG, { Props as SVGProps } from "react-inlinesvg"
import { IconName } from "@/types/icon"
import { classnames } from "@/helpers/classnames"

export interface IconProps extends Omit<SVGProps, "src"> {
  name: IconName
  size?: number
}

const Icon: FunctionComponent<IconProps> = ({
  name,
  className,
  size = 24,
  ...props
}) => {
  const classes = classnames("select-none", className)
  return (
    <SVG
      className={classes}
      src={`/assets/icons/${name}.svg`}
      cacheRequests
      width={size}
      height={size}
      preserveAspectRatio={"xMinYMin"}
      loader={
        <svg className={className} style={{ width: size, height: size }} />
      }
      {...props}
    />
  )
}

export default Icon
