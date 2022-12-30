'use client'

// import { useState } from 'react'
import { Keyboard } from '~/components/Keyboard/Keyboard'
import { ShareModal } from '~/components/Modal/ShareModal'
import { TextArea } from '~/components/TextArea/TextArea'
import { useCustomizing } from '~/hooks/useCustomizing'
import { useSelectKeyboard } from '~/hooks/useSelectKeyboard'

const Index = () => {
  const { isCustomizing, handleCreateOriginalKeyboard } = useCustomizing()
  const {
    myKeyboardList,
    tryKeyboardList,
    myKeyboard,
    tryKeyboard,
    handleSelectMyKeyboard,
    handleSelectTryKeyboard
  } = useSelectKeyboard()

  return (
    <div className="bg-base h-screen flex flex-col">
      <header className="w-full flex items-center justify-center py-10">
        <h1 className="text-3xl font-bold text-black">
          Let&apos;s Try Keyboard Layouts!
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-neutral h-full p-10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <p className="font-bold">Try</p>
            <select
              className="select select-bordered w-64"
              value={tryKeyboard}
              onChange={handleSelectTryKeyboard}
            >
              {tryKeyboardList.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Your</p>
            <select
              className="select select-bordered"
              value={myKeyboard}
              onChange={handleSelectMyKeyboard}
            >
              {myKeyboardList.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-10">
          <Keyboard key={tryKeyboard} isEdit={isCustomizing} />
        </div>
        <div className="mt-10">
          <TextArea />
        </div>
        <div className="mt-5 flex items-center justify-center">
          {isCustomizing ? (
            <div className="flex gap-5">
              <button
                className="btn btn-primary gap-2"
                onClick={() => {
                  // setIsOpenModal(true)
                }}
              >
                Share
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleCreateOriginalKeyboard}
            >
              Create original layout
            </button>
          )}
        </div>
      </div>
      {/* <ShareModal
        open={isOpenModal}
        onClose={() => {
          console.log('cose')
          setIsOpenModal(false)
        }}
      /> */}
    </div>
  )
}

export default Index
