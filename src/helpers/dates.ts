import { differenceInYears, parse } from "date-fns"

export const getAge = (dateOfBirth: string): number => {
  return differenceInYears(new Date(), parse(dateOfBirth, "dd/MM/yyyy", new Date()))
}
