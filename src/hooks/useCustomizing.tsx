import { useRecoilState, useSetRecoilState } from 'recoil'
import { customKeyboardState, isCustomizingState } from '~/atoms/state'
import keyboard from '~/keyboard.json'

export const useCustomizing = () => {
  const [isCustomizing, setIsCustomizing] = useRecoilState(isCustomizingState)
  const setCustomizeKeyboard = useSetRecoilState(customKeyboardState)
  const handleCreateOriginalKeyboard = () => {
    setCustomizeKeyboard((prev) => {
      if (prev != null) return prev
      return keyboard['qwerty'].layout
    })
    setIsCustomizing(true)
  }
  return {
    isCustomizing,
    handleCreateOriginalKeyboard
  }
}
