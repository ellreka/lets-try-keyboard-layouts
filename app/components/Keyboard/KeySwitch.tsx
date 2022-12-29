import { FC, memo } from 'react'
import clsx from 'clsx'

interface Props {
  keys: string[]
  isPressed?: boolean
  isHomePosition?: boolean
}

export const KeySwitch = memo<Props>(
  ({ keys, isPressed = false, isHomePosition = false }) => {
    const [layer1, layer2] = keys
    return (
      <div
        className={clsx(
          'w-[50px] h-[50px] relative border-2 rounded-md border-black flex flex-col gap-1 items-center justify-center shadow-black',
          isPressed ? 'bg-black/30 text-white' : 'bg-white'
        )}
      >
        <div className="text-sm leading-none">{layer2}</div>
        <div className="text-xl leading-none">{layer1.toUpperCase()}</div>
        {isHomePosition && (
          <div className="absolute left-1/2 -translate-x-1/2 top-[80%] w-[10px] h-[2px] bg-black"></div>
        )}
      </div>
    )
  }
)

KeySwitch.displayName = 'KeySwitch'
