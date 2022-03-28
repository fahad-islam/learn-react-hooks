// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { theme } from '../utils/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en' className='h-full'>
        <Head />
        <body className='bg-blue-50 w-full h-full'>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}