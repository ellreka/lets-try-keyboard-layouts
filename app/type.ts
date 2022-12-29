import type keyboard from './keyboard.json'

export type KeyboardKeys = keyof typeof keyboard

export type KeyboardLayout = Array<string[] | string>[]
