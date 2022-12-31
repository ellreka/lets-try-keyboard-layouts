import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import { RecoilRoot } from 'recoil'
import { siteConfig } from '~/siteConfig'
import styles from './styles/app.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: siteConfig.title,
  description: siteConfig.description,
  'og:title': siteConfig.title,
  'og:description': siteConfig.description,
  'og:url': siteConfig.url,
  'og:site_name': siteConfig.title,
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@ellreka',
  'twitter:site': '@ellreka'
})

export default function App() {
  return (
    <html lang="en" data-theme="wireframe">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <RecoilRoot>
          <Outlet />
        </RecoilRoot>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
