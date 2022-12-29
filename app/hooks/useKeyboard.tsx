import { useRecoilValue } from 'recoil'
import { pressedKeyState } from '~/atoms/inputTextQuery'
import { tryKeyboardState } from '~/atoms/selectKeyboardQuery'
import keyboard from '~/keyboard.json'

export const useKeyboard = () => {
  const pressedKey = useRecoilValue(pressedKeyState)
  const tryKeyboard = useRecoilValue(tryKeyboardState)
  const layout = keyboard[tryKeyboard].layout
  return {
    pressedKeyPosition: pressedKey[1],
    layout
  }
}
