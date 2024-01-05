import { differenceInYears, parse } from "date-fns"

export const date = (date: string): Date => {
  return parse(date, "dd/MM/yyyy", new Date())
}

export const getAge = (dateOfBirth: string): number => {
  return differenceInYears(new Date(), date(dateOfBirth))
}
