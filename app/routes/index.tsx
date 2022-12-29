import { Keyboard } from '~/components/Keyboard/Keyboard'
import { TextArea } from '~/components/TextArea/TextArea'
import { useSelectKeyboard } from '~/hooks/useSelectKeyboard'
import keyboard from '~/keyboard.json'

export default function Index() {
  const {
    myKeyboard,
    tryKeyboard,
    handleSelectMyKeyboard,
    handleSelectTryKeyboard
  } = useSelectKeyboard()

  return (
    <div className="bg-base h-screen flex flex-col">
      <header className="w-full flex max-w-3xl mx-auto items-center justify-center py-10">
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
              {Object.entries(keyboard).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Your</p>
            <select
              className="select select-bordered "
              value={myKeyboard}
              onChange={handleSelectMyKeyboard}
            >
              {Object.entries(keyboard).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-10">
          <Keyboard />
        </div>
        <div className="mt-10">
          <TextArea />
        </div>
      </div>
    </div>
  )
}
