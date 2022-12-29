import type { KeyboardKeys } from '~/type'
import keyboard from '../keyboard.json'

export const convertKey = (
  key: string,
  myKeyboard: KeyboardKeys,
  tryKeyboard: KeyboardKeys
): [
  key: string,
  position: {
    row: number | null
    col: number | null
    layer: number
  }
] => {
  const myKeyboardLayout = keyboard[myKeyboard].layout
  const tryKeyboardLayout = keyboard[tryKeyboard].layout

  const toLowerKey = key.toLowerCase()
  let rowIndex = null
  let colIndex = null
  let layerIndex = 0
  let found = false
  for (let i = 0; i < myKeyboardLayout.length; i++) {
    for (let j = 0; j < myKeyboardLayout[i].length; j++) {
      if (typeof myKeyboardLayout[i][j] === 'string') {
        if (myKeyboardLayout[i][j] === toLowerKey) {
          rowIndex = i
          colIndex = j
          found = true
          break
        }
      } else {
        for (let k = 0; k < myKeyboardLayout[i][j].length; k++) {
          if (myKeyboardLayout[i][j][k] === toLowerKey) {
            rowIndex = i
            colIndex = j
            layerIndex = k
            found = true
            break
          }
        }
      }
    }
    if (found) {
      break
    }
  }
  if (found && rowIndex !== null && colIndex !== null) {
    return [
      tryKeyboardLayout[rowIndex][colIndex][layerIndex],
      { row: rowIndex, col: colIndex, layer: layerIndex }
    ]
  }
  return [key, { row: null, col: null, layer: 0 }]
}
