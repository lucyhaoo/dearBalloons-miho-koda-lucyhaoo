import { extendTheme } from '@chakra-ui/react'



const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'semibold', 
  
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: '#a3a578',
          boxShadow: '1px 1px 2px 2px #efdfde',
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