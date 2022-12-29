import { useRecoilState } from 'recoil'
import { myKeyboardState, tryKeyboardState } from '~/atoms/selectKeyboardQuery'
import type { KeyboardKeys } from '~/type'

export const useSelectKeyboard = () => {
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
    myKeyboard,
    tryKeyboard,
    handleSelectMyKeyboard,
    handleSelectTryKeyboard
  }
}
