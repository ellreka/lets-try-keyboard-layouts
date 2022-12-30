import type { LoaderFunction, MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { Keyboard } from '~/components/Keyboard/Keyboard'
import { TextArea } from '~/components/TextArea/TextArea'
import { useSelectKeyboard } from '~/hooks/useSelectKeyboard'

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  console.log(data, params)
  return {
    title: data.title ?? 'no title',
    description: 'This becomes the nice preview on search results.'
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const title = url.searchParams.get('title')
  console.log(url)
  return {
    title
  }
}

export default function Index() {
  const data = useLoaderData()
  console.log(data)
  const [isEdit, setIsEdit] = useState(false)
  const {
    myKeyboardList,
    tryKeyboardList,
    myKeyboard,
    tryKeyboard,
    handleSelectMyKeyboard,
    handleSelectTryKeyboard
  } = useSelectKeyboard()

  useEffect(() => {
    if (tryKeyboard === 'custom') {
      setIsEdit(true)
    } else {
      setIsEdit(false)
    }
  }, [tryKeyboard])

  return (
    <div className="bg-base h-screen flex flex-col">
      <header className="w-full flex items-center justify-center py-10">
        <h1 className="text-3xl font-bold text-black">
          Let's Try Keyboard Layouts!
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
          <Keyboard isEdit={isEdit} />
        </div>
        <div className="mt-10">
          <TextArea />
        </div>
      </div>
    </div>
  )
}
