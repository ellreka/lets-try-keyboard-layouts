import { useRecoilState, useRecoilValue } from 'recoil'
import {
  customKeyboardState,
  isCustomizingState,
  myKeyboardState,
  tryKeyboardState
} from '~/atoms/state'
import type { KeyboardKeys } from '~/type'
import keyboard from '~/keyboard.json'
import { useEffect } from 'react'

const keyboardList = Object.entries(keyboard).map(([key, value]) => ({
  key,
  name: value.name
}))

export const useSelectKeyboard = (isExistCustomKeyboard: boolean = false) => {
  const [myKeyboard, setMyKeyboard] = useRecoilState(myKeyboardState)
  const [tryKeyboard, setTryKeyboard] = useRecoilState(tryKeyboardState)
  const [isCustomizing, setIsCustomizing] = useRecoilState(isCustomizingState)
  const customKeyboard = useRecoilValue(customKeyboardState)
  const myKeyboardList = keyboardList
  const tryKeyboardList = customKeyboard
    ? [...keyboardList, { key: 'custom', name: 'Custom' }]
    : keyboardList

  // FIXME
  useEffect(() => {
    if (isCustomizing) {
      setTryKeyboard('custom')
    }
  }, [isCustomizing])

  useEffect(() => {
    if (isExistCustomKeyboard) {
      setIsCustomizing(true)
    }
  }, [isExistCustomKeyboard])

  const handleSelectMyKeyboard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    console.log(value)
    setMyKeyboard(value as KeyboardKeys)
  }

  const handleSelectTryKeyboard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setIsCustomizing(false)
    setTryKeyboard(value as KeyboardKeys)
  }

  return {
    myKeyboardList,
    tryKeyboardList,
    myKeyboard,
    tryKeyboard,
    handleSelectMyKeyboard,
    handleSelectTryKeyboard
  }
}
