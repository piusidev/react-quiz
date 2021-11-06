export const getDataFromUrl = (data) => {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const value = {}

  data.map(item => {
    value[item] = params.get(item)
  })

  return value
}
