import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { KeyboardOgp } from '~/components/Keyboard/Keyboard.ogp'
import { KeyboardLayout } from '~/type'
import { generateLayoutData } from '~/utils/generateLayoutUrl'

type LoaderData = {
  layout: KeyboardLayout | null
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url)
  const layoutString = url.searchParams.get('q')
  const layout = layoutString
    ? generateLayoutData(encodeURIComponent(layoutString))
    : null
  return {
    layout
  }
}

export default function OgImage() {
  const { layout } = useLoaderData<LoaderData>()
  console.log(layout)

  return (
    <div id="ogimage" className="w-[1200px] h-[630px] bg-neutral relative">
      <h1 className="text-[50px] whitespace-nowrap font-bold text-black absolute top-10 left-1/2 -translate-x-1/2">
        Let's Try Keyboard Layouts!
      </h1>
      <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
        <div className="scale-[1.6] w-[680px] mt-[70px]">
          <KeyboardOgp layout={layout ?? []} />
        </div>
      </div>
    </div>
  )
}
