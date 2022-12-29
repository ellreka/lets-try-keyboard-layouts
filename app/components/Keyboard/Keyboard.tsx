import clsx from 'clsx'
import type { FC } from 'react'
import { memo } from 'react'
import { useKeyboard } from '~/hooks/useKeyboard'
import { KeySwitch } from './KeySwitch'

interface Props {}

export const Keyboard: FC<Props> = memo(() => {
  const { pressedKeyPosition, layout } = useKeyboard()

  return (
    <div className="gap-1 flex flex-col shrink-0">
      {layout.map((row, i) => (
        <div
          key={i}
          className={clsx(
            'flex shrink-0 gap-1 items-center',
            i === 0 ? 'justify-start' : 'justify-center'
          )}
        >
          {row.map((key, j) => {
            const keys = Array.isArray(key) ? key : [key]
            const isPressed =
              i === pressedKeyPosition.row && j === pressedKeyPosition.col
            return (
              <KeySwitch
                key={j}
                keys={keys}
                isPressed={isPressed}
                isHomePosition={i === 2 && (j === 3 || j === 6)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
})

Keyboard.displayName = 'Keyboard'
