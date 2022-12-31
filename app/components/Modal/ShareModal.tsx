import { FC, useState } from 'react'
import { forwardRef } from 'react'
import ModalUnstyled from '@mui/base/ModalUnstyled'
import clsx from 'clsx'
import { siteConfig } from '~/siteConfig'

interface Props {
  open: boolean
  onClose: () => void
  layoutQueryString: string
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

export const ShareModal: FC<Props> = ({ open, onClose, layoutQueryString }) => {
  const imageUrl = `/ogimages/img.png?q=${layoutQueryString}`
  const shareUrl = `${siteConfig.url}/?q=${layoutQueryString}`
  const tweetUrl = `https://twitter.com/intent/tweet?text=${
    siteConfig.text
  }%0a%0a&hashtags=${siteConfig.keywords.join(',')}%0a&url=${encodeURIComponent(
    shareUrl
  )}`

  const [isCopied, setIsCopied] = useState(false)

  const [isLoaded, setIsLoaded] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

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
      <div className="bg-white rounded-md flex-col flex items-center justify-center max-w-xl w-full p-10 mx-10 h-[50%]">
        <div className="relative bg-base-200 w-full h-[260px]">
          <img
            className={clsx(
              'hover:shadow-black hover:shadow-[inset_0_0_10px_0px]'
            )}
            src={imageUrl}
            alt=""
            onLoad={(e) => {
              console.log('object')
              setIsLoaded(true)
            }}
          />
          {!isLoaded ? (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-10 w-10 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : null}
        </div>
        <div className="form-control w-full mt-10">
          <div className="input-group">
            <input
              type="text"
              placeholder=""
              defaultValue={shareUrl}
              readOnly={true}
              className="input input-bordered w-full"
            />
            <div
              className="tooltip tooltip-bottom"
              data-tip={isCopied ? 'copied!' : 'copy'}
            >
              <button className="btn btn-square" onClick={handleCopy}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <a
          href={tweetUrl}
          target="_blank"
          className="btn gap-2 mt-10 bg-[#1DA1F2]/60 hover:bg-[#1DA1F2]"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            color="currentColor"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
          tweet!
        </a>
      </div>
    </ModalUnstyled>
  )
}
