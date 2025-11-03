export const makeUrlFromParams = (baseUrl: string, params: object): string => {
  const filteredParams = Object.fromEntries(
    Object.entries(params)
      .filter((entry) => entry[1])
      .map((entry) => [entry[0], String(entry[1])])
  )
  const searchParams = new URLSearchParams(filteredParams)
  const url = `${baseUrl}/?${searchParams.toString()}`

  return url
}
