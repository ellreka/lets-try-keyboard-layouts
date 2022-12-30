import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { customKeyboardState, pressedKeyState } from '~/atoms/state'
import { tryKeyboardState } from '~/atoms/state'
import keyboard from '~/keyboard.json'
import type { KeyboardKeys } from '~/type'

export const useKeyboard = () => {
  const pressedKey = useRecoilValue(pressedKeyState)
  const tryKeyboard = useRecoilValue(tryKeyboardState)

  const [customKeyboard, setCustomKeyboard] =
    useRecoilState(customKeyboardState)

  const layout =
    tryKeyboard === 'custom' && customKeyboard
      ? customKeyboard
      : keyboard[tryKeyboard as KeyboardKeys].layout

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
    pressedKeyPosition: pressedKey[1],
    layout,
    updateLayout
  }
}
