export const makeApiUrl = (path: string): string => {
  return `${process.env.API_URL}${path}`
}
// http://fordevs.herokuapp.com/api