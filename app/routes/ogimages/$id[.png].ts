import type { LoaderFunction } from '@remix-run/cloudflare'
import puppeteer from '@cloudflare/puppeteer'

export const loader: LoaderFunction = async ({ request }) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  })

  await page.goto('https://www.yahoo.co.jp/', {
    //一定時間ネットワーク通信のないことで完了を判定する
    waitUntil: 'networkidle2', //コネクション数が2個以下である状態が500ミリ秒続いたとき
    timeout: 0 //0を指定するとタイムアウト無し
  })

  const screenshot = (await page.screenshot()) as Buffer
  await browser.close()

  const jstNow = new Date(
    Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
  )
  const yyyymmddhhmm = jstNow
    .toISOString()
    .replace(/[^0-9]/g, '')
    .slice(0, -5) //yyyymmddhhmm
  console.log(yyyymmddhhmm)

  return new Response(screenshot, {
    headers: {
      'content-type': 'image/png'
    }
  })
  // try {
  //   //upload to R2
  //   await env.BROWSER_BUCKET.put(`screenshot-${yyyymmddhhmm}.png`, screenshot)
  //   return new Response(`Success!`)
  //   /*
  // 		return new Response(screenshot.buffer, {
  // 			headers: {
  // 				'content-type': 'image/png'
  // 			}
  // 		})
  // 		*/
  // } catch (e) {
  //   return new Response('', { status: 400 })
  // }
}
