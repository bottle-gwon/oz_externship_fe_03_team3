export const trimObject = (what: object) => {
  const entryArray = Object.entries(what)
  const filteredEntryArray = entryArray.filter((entry) => entry[1])
  return Object.fromEntries(filteredEntryArray)
}
