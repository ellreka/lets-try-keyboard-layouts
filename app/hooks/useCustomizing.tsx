import { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  customKeyboardState,
  isCustomizingState,
  tryKeyboardState
} from '~/atoms/state'
import keyboard from '~/keyboard.json'
import { KeyboardLayout } from '~/type'
import { encodeLayoutData } from '~/utils/generateLayoutUrl'

export const useCustomizing = (initialLayout: KeyboardLayout | null = null) => {
  const [isCustomizing, setIsCustomizing] = useRecoilState(isCustomizingState)
  const [customizeKeyboard, setCustomizeKeyboard] =
    useRecoilState(customKeyboardState)
  const tryKeyboard = useRecoilValue(tryKeyboardState)

  const [layoutQueryString, setLayoutQueryString] = useState('')

  useEffect(() => {
    if (initialLayout) {
      setCustomizeKeyboard(initialLayout)
    }
  }, [initialLayout])

  const handleCreateOriginalKeyboard = () => {
    setCustomizeKeyboard((prev) => {
      if (prev != null) return prev
      return keyboard[tryKeyboard != 'custom' ? tryKeyboard : 'qwerty'].layout
    })
    setIsCustomizing(true)
  }

  const handleShare = () => {
    if (customizeKeyboard == null) return
    const encoded = encodeLayoutData(customizeKeyboard)
    setLayoutQueryString(encoded)
  }

  return {
    isCustomizing,
    handleCreateOriginalKeyboard,
    handleShare,
    layoutQueryString
  }
}
