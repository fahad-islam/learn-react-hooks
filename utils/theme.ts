// 1. Import the extendTheme function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

// 3. Add your color mode config  
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ ...colors, ...config })

export {
    theme
}