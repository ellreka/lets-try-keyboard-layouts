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
      <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
        <div className="scale-150">
          <KeyboardOgp layout={layout ?? []} />
        </div>
        <h1 className="text-3xl font-bold text-black absolute bottom-5 right-5">
          Let's Try Keyboard Layouts!
        </h1>
      </div>
    </div>
  )
}
