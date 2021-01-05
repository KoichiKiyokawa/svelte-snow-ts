export const DateUtil = (date: Date) => ({
  formatYYYYMMDD: () => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
})
