import type { FC } from 'react'
import { forwardRef } from 'react'
import ModalUnstyled from '@mui/base/ModalUnstyled'
import clsx from 'clsx'

interface Props {
  open: boolean
  onClose: () => void
}

const BackdropUnstyled = forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  )
})

BackdropUnstyled.displayName = 'BackdropUnstyled'

export const ShareModal: FC<Props> = ({ open, onClose }) => {
  return (
    <ModalUnstyled
      open={open}
      onClose={onClose}
      classes={{
        root: 'fixed inset-0 z-50 flex items-center justify-center'
      }}
      slotProps={{
        backdrop: {
          className: 'fixed inset-0 -z-10 bg-black/50'
        }
      }}
      slots={{
        backdrop: BackdropUnstyled
      }}
    >
      <div className="bg-white w-[70%] h-[50%]">aaaaaaaaaa</div>
    </ModalUnstyled>
  )
}
