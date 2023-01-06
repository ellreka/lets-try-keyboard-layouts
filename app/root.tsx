import { MetaFunction, json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from '@remix-run/react'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { siteConfig } from '~/siteConfig'
import styles from './styles/app.css'
import * as gtag from '~/utils/gtags.client'

export function links() {
  return [
    {
      rel: 'icon',
      href: '/favicon.png',
      type: 'image/png'
    },
    { rel: 'stylesheet', href: styles }
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=768',
  title: siteConfig.title,
  description: siteConfig.description,
  'og:title': siteConfig.title,
  'og:description': siteConfig.description,
  'og:url': siteConfig.url,
  'og:image': `${siteConfig.url}/ogp.png`,
  'og:site_name': siteConfig.title,
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@ellreka',
  'twitter:site': '@ellreka'
})

export const loader = async () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID })
}

export default function App() {
  const location = useLocation()
  const { gaTrackingId } = useLoaderData<typeof loader>()

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId)
    }
  }, [location, gaTrackingId])

  return (
    <html lang="en" data-theme="wireframe">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {process.env.NODE_ENV === 'development' || !gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `
              }}
            />
          </>
        )}
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
