import type React from 'react'
import { useCallback, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { pressedKeyState } from '~/atoms/inputTextQuery'
import { myKeyboardState, tryKeyboardState } from '~/atoms/selectKeyboardQuery'
import { convertKey } from '~/utils/convertKey'

export const useInputText = () => {
  const [pressedKey, setPressedKey] = useRecoilState(pressedKeyState)
  const resetPressedKey = useResetRecoilState(pressedKeyState)
  const myKeyboard = useRecoilValue(myKeyboardState)
  const tryKeyboard = useRecoilValue(tryKeyboardState)
  const [readonly, setReadonly] = useState(true)
  const [inputText, setInputText] = useState('')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!readonly) {
        const { value } = e.target
        console.log(value)
        setInputText(value)
      }
    },
    [readonly]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const { key, ctrlKey, shiftKey, altKey, metaKey } = e
      if (key.length === 1) {
        if (ctrlKey || altKey || metaKey) {
          // do nothing
        } else {
          setReadonly(true)
          const [convertedKey, position] = convertKey(
            key,
            myKeyboard,
            tryKeyboard
          )
          console.log({ convertedKey, key })
          setPressedKey([convertedKey, position])
          setInputText(
            (prev) =>
              prev + (shiftKey ? convertedKey.toUpperCase() : convertedKey)
          )
        }
      } else if (key === 'Backspace' || key === 'Delete' || key === 'Enter') {
        setReadonly(false)
      } else {
        setReadonly(true)
      }
    },
    [myKeyboard, tryKeyboard]
  )

  const handleKeyUp = useCallback(() => {
    resetPressedKey()
    setReadonly(true)
  }, [])

  return {
    inputText,
    handleChange,
    handleKeyDown,
    handleKeyUp
  }
}
