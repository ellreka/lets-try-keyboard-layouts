import { atom, selector } from 'recoil'
import keyboard from '~/keyboard.json'

export const customKeyboardState = atom<Array<string[] | string>[] | null>({
  key: 'customKeyboardState',
  default: null
})
// export const keyboardsState = selector({
//   key: 'keyboardsState',
//   get: () => {
//     const customKeyboard = customKeyboardState
//     if (customKeyboard) {
//       return {
//         custom: customKeyboard,
//         ...keyboard
//       }
//     } else {
//       return keyboard
//     }
//   }
// })
