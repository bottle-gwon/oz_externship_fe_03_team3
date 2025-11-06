export const convertToMonthDay = (dateString: string) => {
  const month = Number(dateString.slice(5, 7))
  const day = Number(dateString.slice(8, 10))

  return `${month}월 ${day}일`
}
