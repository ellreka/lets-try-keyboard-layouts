import { atom } from 'recoil'
// import { recoilPersist } from 'recoil-persist'
import type { KeyboardKeys } from '~/type'

// const { persistAtom } = recoilPersist({
//   key: 'lets-try-keyboard-layout'
// })

export const pressedKeyState = atom<
  [
    key: string,
    position: {
      row: number | null
      col: number | null
      layer: number
    }
  ]
>({
  key: 'pressedKeyState',
  default: [
    '',
    {
      row: null,
      col: null,
      layer: 0
    }
  ]
})

export const isCustomizingState = atom<boolean>({
  key: 'isCustomizingState',
  default: false
})

export const customKeyboardState = atom<Array<string[] | string>[] | null>({
  key: 'customKeyboardState',
  default: null
})

export const myKeyboardState = atom<KeyboardKeys>({
  key: 'myKeyboardState',
  default: 'qwerty'
  // effects_UNSTABLE: [persistAtom]
})

export const tryKeyboardState = atom<KeyboardKeys | 'custom'>({
  key: 'tryKeyboardState',
  default: 'dvorak'
  // effects_UNSTABLE: [persistAtom]
})
