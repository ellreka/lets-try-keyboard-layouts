import { FC, memo } from 'react'
import clsx from 'clsx'

interface Props {
  keys: string[]
  isPressed?: boolean
  isHomePosition?: boolean
  isEditing?: boolean
}

export const KeySwitch = memo<Props>(
  ({ keys, isPressed = false, isHomePosition = false, isEditing = false }) => {
    const [layer1, layer2] = keys
    return (
      <div
        className={clsx(
          'w-[50px] h-[50px] relative border rounded-md border-base-content flex flex-col gap-1 items-center justify-center',
          isPressed
            ? 'bg-black/30 text-white'
            : 'bg-white  text-base-content where:shadow-[inset_0_0_0_5px] where:shadow-gray-200',
          isEditing
            ? 'border-2 border-dotted border-info bg-info/10 shadow-none'
            : ''
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
