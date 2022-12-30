import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { customKeyboardState, isCustomizingState } from '~/atoms/state'
import keyboard from '~/keyboard.json'
import { KeyboardLayout } from '~/type'

export const useCustomizing = (initialLayout: KeyboardLayout | null = null) => {
  const [isCustomizing, setIsCustomizing] = useRecoilState(isCustomizingState)
  const [customizeKeyboard, setCustomizeKeyboard] =
    useRecoilState(customKeyboardState)

  useEffect(() => {
    if (initialLayout) {
      setCustomizeKeyboard(initialLayout)
    }
  }, [initialLayout])

  const handleCreateOriginalKeyboard = () => {
    setCustomizeKeyboard((prev) => {
      if (prev != null) return prev
      return keyboard['qwerty'].layout
    })
    setIsCustomizing(true)
  }
  const handleShare = () => {
    if (customizeKeyboard == null) return
    const flattenLayout = customizeKeyboard
      .flat()
      .reduce<string[]>((acc, cur) => {
        if (Array.isArray(cur)) {
          return [...acc, cur.join('')]
        } else {
          return [...acc, cur]
        }
      }, [])
    const serializedLayout = encodeURIComponent(flattenLayout.join(' '))
    console.log(serializedLayout)
    console.log(`${location.origin}/?q=${serializedLayout}`)
  }
  return {
    isCustomizing,
    handleCreateOriginalKeyboard,
    handleShare
  }
}
