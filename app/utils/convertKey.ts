import type { KeyboardLayout } from '~/type'

export const convertKey = (
  key: string,
  isShiftPressed: boolean,
  myKeyboard: KeyboardLayout,
  tryKeyboard: KeyboardLayout
): [
  key: string,
  position: {
    row: number | null
    col: number | null
    layer: number
  }
] => {
  const myKeyboardLayout = myKeyboard
  const tryKeyboardLayout = tryKeyboard
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
          layerIndex = isShiftPressed
            ? Array.isArray(tryKeyboardLayout[rowIndex][colIndex])
              ? 1
              : 0
            : 0
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
      isShiftPressed
        ? tryKeyboardLayout[rowIndex][colIndex][layerIndex]?.toUpperCase() ?? ''
        : tryKeyboardLayout[rowIndex][colIndex][layerIndex] ?? '',
      { row: rowIndex, col: colIndex, layer: layerIndex }
    ]
  }
  return [key, { row: null, col: null, layer: 0 }]
}
