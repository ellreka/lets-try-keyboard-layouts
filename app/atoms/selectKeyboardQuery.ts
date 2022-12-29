import { atom } from 'recoil'
// import { recoilPersist } from 'recoil-persist'
import type { KeyboardKeys } from '~/type'

// const { persistAtom } = recoilPersist({
//   key: 'lets-try-keyboard-layout'
// })

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
