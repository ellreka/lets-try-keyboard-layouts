export const decodeLayoutData = (layoutStringData: string) => {
  let layout = null
  try {
    const decodedArr = layoutStringData.split(' ')
    const nestedArr = decodedArr.map((i) => {
      if (i.length === 1) {
        return i
      } else {
        return i.split('')
      }
    })
    const row1 = nestedArr.slice(0, 12)
    const row2 = nestedArr.slice(12, 24)
    const row3 = nestedArr.slice(24, 35)
    const row4 = nestedArr.slice(35, 46)
    layout = [row1, row2, row3, row4]
  } catch (e) {
    console.error(e)
  }
  return layout
}
