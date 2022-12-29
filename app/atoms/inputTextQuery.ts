import { atom } from 'recoil'

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
