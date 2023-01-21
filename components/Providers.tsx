import React, { FunctionComponent, PropsWithChildren } from "react"
import { Provider as WrapBalancerProvider } from "react-wrap-balancer"

const Providers: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <WrapBalancerProvider>
      {children}
    </WrapBalancerProvider>
  )
}

export default Providers
