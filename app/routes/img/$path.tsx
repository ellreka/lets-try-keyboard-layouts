import chromium from 'chrome-aws-lambda'
import playwright from 'playwright-core'

export const loader = async () => {
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless
  })

  try {
    const page = await browser.newPage()
    page.goto('https://remix.run')
    const screenshot = await page.screenshot({ type: 'png' })
    return new Response(screenshot, {
      headers: {
        'Content-Type': 'image/png'
      }
    })
  } catch (error) {
    return new Response('500', { status: 500 })
  } finally {
    await browser.close()
  }
}
