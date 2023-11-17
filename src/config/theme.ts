import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    900: "#FFCB00",
    800: "#FFCB00",
    700: "#FFCB00",
    600: "#FFCB00",
    500: "#FFCB00",
    400: "#FFCB00",
    300: "#FFCB00",
    200: "#FFCB00",
    100: "#FFCB00",
    50: "#FFCB00"
  },
  lightGray: {
    100: '#F6F6F8'
  },
};

const customTheme = {
  colors,
  styles: {
    global: {
      'html, body': {}
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary'
      },
    }
  }
}

export default extendTheme(customTheme)