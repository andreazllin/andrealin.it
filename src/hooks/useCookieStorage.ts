import { getCookie, setCookie } from "cookies-next"
import { useState, useEffect, Dispatch, SetStateAction } from "react"

type ValueType = string | number | boolean | object | null | undefined

type UseCookieStorage = (options: {
  key: string,
  initialValue: ValueType
}) => [ValueType, Dispatch<SetStateAction<ValueType>>]

const useCookieStorage: UseCookieStorage = ({
  key,
  initialValue
}) => {
  const [value, setValue] = useState(() => {
    let currentValue: ValueType

    try {
      currentValue = JSON.parse(
        getCookie(key) || String(initialValue)
      ) as ValueType
    } catch (error) {
      currentValue = initialValue
    }

    return currentValue
  })

  useEffect(() => {
    setCookie(key, value)
  }, [value, key])

  return [value, setValue]
}

export default useCookieStorage
