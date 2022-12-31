import type { FC } from 'react'

type Props = {
  selectedKey: string[]
  setSelectedKey: (key: string, shiftLayerKey?: string) => void
  handleClose: () => void
}

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(97 + i))
const number = [...Array(10)].map((_, i) => String.fromCharCode(48 + i))
const symbol = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '{',
  '}',
  '|',
  ':',
  '"',
  '<',
  '>',
  '?',
  '~',
  '`',
  '-',
  '=',
  '[',
  ']',
  '\\',
  ';',
  "'",
  ',',
  '.',
  '/'
]

const mainKeys = ['', ...alphabet, ...number, ...symbol]

const shiftLayerKeys = ['', ...symbol]

export const CustomKeyPopper: FC<Props> = ({
  selectedKey,
  setSelectedKey,
  handleClose
}) => {
  return (
    <div className="relative bg-base-100 shadow-[0_0_15px_0px] rounded-sm p-5 w-[200px]">
      <button
        className="absolute right-3 top-3"
        onClick={(e) => {
          handleClose()
          e.stopPropagation()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="form-control w-full max-w-xs">
        <label htmlFor="custom-key" className="label">
          <span className="label-text font-bold">Key</span>
        </label>
        <select
          value={selectedKey[0]}
          onChange={(e) => setSelectedKey(e.target.value, selectedKey[1])}
          name="custom-key"
          className="select select-bordered select-sm w-full max-w-xs text-md"
        >
          {mainKeys.map((k) => (
            <option key={k} value={k}>
              {k.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control w-full max-w-xs">
        <label htmlFor="custom-shift-layer" className="label">
          <span className="label-text font-bold">Shift Layer</span>
        </label>
        <select
          value={selectedKey[1] ?? ''}
          onChange={(e) => setSelectedKey(selectedKey[0], e.target.value)}
          name="custom-shift-layer"
          className="select select-bordered select-sm w-full max-w-xs text-md"
        >
          {shiftLayerKeys.map((k) => (
            <option key={k} value={k}>
              {k.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
