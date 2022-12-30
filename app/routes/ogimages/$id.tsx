import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { KeyboardOgp } from '~/components/Keyboard/Keyboard.ogp'
import keyboard from '~/keyboard.json'

type LoaderData = {
  layout: any
  author: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id
  return {
    author: id,
    layout: keyboard.colemak.layout
  }
}

export default function OgImage() {
  const { layout, author } = useLoaderData<LoaderData>()

  return (
    <div id="ogimage" className="w-[1200px] h-[630px] bg-neutral relative">
      <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
        <div>
          <KeyboardOgp layout={layout} />
        </div>
        <h1 className="text-3xl font-bold text-black absolute bottom-5 right-5">
          {author}
        </h1>
      </div>
    </div>
  )
}
