import React from 'react'
import Head from 'next/head'
import { GlobalStyles, theme } from 'twin.macro'
import { createGlobalStyle } from 'styled-components'
import '../styles.css'

// function loadScript(src, attrs = {}) {
//   if (typeof document !== 'undefined') {
//     const script = document.createElement('script')
//     script.async = true
//     script.defer = true
//     Object.keys(attrs).forEach((attr) => script.setAttribute(attr, attrs[attr]))
//     script.src = src
//     document.body.appendChild(script)
//   }
// }

const MyGlobalStyles = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    * {
      scrollbar-color: ${theme`colors.gray.700`} ${theme`colors.gray.800`};

      ::-webkit-scrollbar, scrollbar {
        width: 1rem;
        height: 1rem;
      }

      ::-webkit-scrollbar-track, scrollbar-track {
        background: ${theme`colors.gray.800`};
      }

      ::-webkit-scrollbar-thumb, scrollbar-thumb {
        background: ${theme`colors.gray.700`};
        border-radius: .5rem;
        border: 3px solid ${theme`colors.gray.800`};
      }
    }
  }
`

function MyApp({ Component, pageProps }) {
  // React.useEffect(() => {
  //   loadScript('https://tanstack.ck.page/7b33d93773/index.js', {
  //     'data-uid': '7b33d93773',
  //   })
  // }, [])

  return (
    <>
      <Head>
        <title>TanStack | Quality Softare & Libraries for the Modern Web</title>
      </Head>
      <GlobalStyles />
      <MyGlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
