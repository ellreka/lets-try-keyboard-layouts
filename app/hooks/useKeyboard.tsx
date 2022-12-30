import { useRecoilValue } from 'recoil'
import { pressedKeyState } from '~/atoms/state'
import { tryKeyboardState } from '~/atoms/state'
import keyboard from '~/keyboard.json'

export const useKeyboard = () => {
  const pressedKey = useRecoilValue(pressedKeyState)
  const tryKeyboard = useRecoilValue(tryKeyboardState)
  const layout =
    tryKeyboard === 'custom'
      ? keyboard['qwerty'].layout
      : keyboard[tryKeyboard].layout
  return {
    pressedKeyPosition: pressedKey[1],
    layout
  }
}
