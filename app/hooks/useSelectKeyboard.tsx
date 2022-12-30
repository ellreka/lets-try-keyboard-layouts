import { useRecoilState } from 'recoil'
import { myKeyboardState, tryKeyboardState } from '~/atoms/state'
import type { KeyboardKeys } from '~/type'
import keyboard from '~/keyboard.json'

const keyboardList = Object.entries(keyboard).map(([key, value]) => ({
  key,
  name: value.name
}))

export const useSelectKeyboard = () => {
  const myKeyboardList = keyboardList
  const tryKeyboardList = [...keyboardList, { key: 'custom', name: 'Custom' }]
  const [myKeyboard, setMyKeyboard] = useRecoilState(myKeyboardState)
  const [tryKeyboard, setTryKeyboard] = useRecoilState(tryKeyboardState)

  console.log(myKeyboard, tryKeyboard)

  const handleSelectMyKeyboard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    console.log(value)
    setMyKeyboard(value as KeyboardKeys)
  }

  const handleSelectTryKeyboard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
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
