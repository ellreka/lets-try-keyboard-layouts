import clsx from 'clsx'
import type { FC } from 'react'
import type { KeyboardLayout } from '~/type'
import { KeySwitch } from './KeySwitch'

interface Props {
  layout: KeyboardLayout
}

export const KeyboardOgp: FC<Props> = ({ layout }) => {
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
            return (
              <KeySwitch
                key={j}
                keys={keys}
                isPressed={false}
                isEditing={false}
                isHomePosition={i === 2 && (j === 3 || j === 6)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
