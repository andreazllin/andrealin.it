import { differenceInYears, parse, format } from "date-fns"

export const getAge = (dateOfBirth: string): number => {
  return differenceInYears(new Date(), parse(dateOfBirth, "dd/MM/yyyy", new Date()))
}

export const getMonthYear = (date: string): string => {
  const d = parse(date, "dd/MM/yyyy", new Date())
  return format(d, "MMM yyyy")
}
