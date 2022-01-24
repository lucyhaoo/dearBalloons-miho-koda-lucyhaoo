import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'semibold', // Normally, it is "semibold"
        textTransform: 'uppercase',
        borderRadius: 'base',
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, // <-- px is short for paddingLeft and paddingRight
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 6, // <-- these values are tokens from the design system
            py: 4, // <-- these values are tokens from the design system
        },
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'orange': {
          bg: '#f77c6c',
          boxShadow: '2px 2px 2px 2px #efdfde',
        },
        'beige': {
          bg: '#f6cbb0',
          boxShadow: '2px 2px 2px 2px #efdfde',
        },
        'light_blue': {
          bg: '#afcfcc',
          boxShadow: '2px 2px 2px 2px #efdfde',
        },
        'dark_blue': {
          bg: '#066f84',
          boxShadow: '2px 2px 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
  },
})

export default theme