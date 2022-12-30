import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { customKeyboardState } from '~/atoms/state'

export const useCustomKeyboard = (initialLayout: (string | string[])[][]) => {
  const [customKeyboard, setCustomKeyboard] =
    useRecoilState(customKeyboardState)

  useEffect(() => {
    if (customKeyboard) return
    setCustomKeyboard(initialLayout)
  }, [customKeyboard, initialLayout])

  const updateLayout = (
    position: {
      row: number
      col: number
    },
    key: string,
    shiftLayerKey?: string
  ) => {
    if (!customKeyboard) return
    let newCustomKeyboard = JSON.parse(JSON.stringify(customKeyboard))
    console.log(position, key, shiftLayerKey)
    console.log(newCustomKeyboard[position.row][position.col])
    newCustomKeyboard[position.row][position.col] = shiftLayerKey
      ? [key, shiftLayerKey]
      : key
    setCustomKeyboard(newCustomKeyboard)
  }
  return {
    customKeyboard,
    updateLayout
  }
}
