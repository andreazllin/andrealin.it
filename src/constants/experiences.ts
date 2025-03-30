export const experiences: Array<{
  name: string
  role: string
  image: string
  startDate: Date
  endDate: Date | null
  url: string
}> = [
    {
      url: "https://humans.tech/",
      name: "Humans.tech",
      role: "Frontend Engineer",
      image: "humans.jpg",
      startDate: new Date(2025, 4 - 1, 1),
      endDate: null,
    },
    {
      url: "https://polarity.dev/",
      name: "Polarity",
      role: "Software Development Engineer II",
      image: "polarity.jpg",
      startDate: new Date(2021, 10 - 1, 25),
      endDate: new Date(2025, 3 - 1, 10)
    }
  ].sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
