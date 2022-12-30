import type { FC } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useInputText } from '~/hooks/useInputText'

interface Props {}

export const TextArea: FC<Props> = () => {
  const { handleChange, inputText, handleKeyDown, handleKeyUp } = useInputText()

  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    ref.current?.select()
  }, [])

  return (
    <div className="w-full flex justify-center items-center gap-2">
      <textarea
        ref={ref}
        placeholder="Let's try Keyboard Layouts!"
        value={inputText}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        className="w-full h-[200px] textarea textarea-bordered text-lg focus:outline-info-content"
      />
    </div>
  )
}
