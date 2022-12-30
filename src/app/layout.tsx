import '../styles/globals.css'
import { Providers } from './provider'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" data-theme="wireframe">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
