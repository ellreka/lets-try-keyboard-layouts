import { KeyboardLayout } from '~/type'

export const generateLayoutData = (encodedData: string) => {
  let layout = null
  try {
    const decoded = decodeURIComponent(encodedData)
    const decodedArr = decoded.split(' ')
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
    layout = null
  }
  return layout
}

export const encodeLayoutData = (layoutData: KeyboardLayout) => {
  const flattenLayout = layoutData.flat().reduce<string[]>((acc, cur) => {
    if (Array.isArray(cur)) {
      return [...acc, cur.join('')]
    } else {
      return [...acc, cur]
    }
  }, [])
  const encoded = encodeURIComponent(flattenLayout.join(' '))
  return encoded
}
