import clsx from 'clsx'
import type { FC } from 'react'
import { useState } from 'react'
import { memo } from 'react'
import { useKeyboard } from '~/hooks/useKeyboard'
import { KeySwitch } from './KeySwitch'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { useCustomKeyboard } from '~/hooks/useCustomKeyboard'
import { CustomKeyPopper } from './CustomKeyPopper'

interface Props {
  isEdit?: boolean
}

export const Keyboard: FC<Props> = memo(({ isEdit = false }) => {
  const { pressedKeyPosition, layout } = useKeyboard()
  const { customKeyboard, updateLayout } = useCustomKeyboard(layout)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClickKeySwitch = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget)
  }
  return (
    <>
      <div className="gap-1 flex flex-col shrink-0">
        {(isEdit && customKeyboard != null ? customKeyboard : layout).map(
          (row, i) => (
            <div
              key={i}
              className={clsx(
                'flex shrink-0 gap-1 items-center',
                i === 0 ? 'justify-start' : 'justify-center'
              )}
            >
              {row.map((key, j) => {
                const id = `${i}-${j}`
                const keys = Array.isArray(key) ? key : [key]
                const isPressed =
                  i === pressedKeyPosition.row && j === pressedKeyPosition.col
                const isEditing = anchorEl?.id === id
                return (
                  <div
                    key={j}
                    id={id}
                    className={clsx('relative', isEdit ? 'cursor-pointer' : '')}
                    onClick={isEdit ? handleClickKeySwitch : undefined}
                  >
                    <KeySwitch
                      keys={keys}
                      isPressed={isPressed}
                      isEditing={isEditing}
                      isHomePosition={i === 2 && (j === 3 || j === 6)}
                    />
                    <PopperUnstyled
                      id="placement-popper"
                      open={anchorEl?.id === id}
                      anchorEl={anchorEl}
                      placement="bottom"
                    >
                      <CustomKeyPopper
                        handleClose={() => setAnchorEl(null)}
                        selectedKey={keys}
                        setSelectedKey={(key, shiftLayoutKey) => {
                          updateLayout(
                            {
                              row: i,
                              col: j
                            },
                            key,
                            shiftLayoutKey
                          )
                        }}
                      />
                    </PopperUnstyled>
                  </div>
                )
              })}
            </div>
          )
        )}
      </div>
    </>
  )
})

Keyboard.displayName = 'Keyboard'
