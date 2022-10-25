export const parseJSON = (data: any) => {
  if (data) {
    return Object
      .entries(data)
      .map(([key, value]: any) => {
        return {
          ...value,
          key,
        }
      })
  }
  return
}