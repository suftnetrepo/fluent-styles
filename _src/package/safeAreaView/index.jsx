import { SafeAreaView } from 'react-native'
import { styled } from '../styled'
import { isValidColor } from '../utils'

const StyledSafeAreaView = styled(SafeAreaView, {
  base: {
    flex: 1
  },
  variants: {
    backgroundColor: color => {
      if (!color) return
      if (!isValidColor(color)) {
        throw new Error('Invalid backgroundColor value')
      }
      return { backgroundColor: color }
    }
  }
})

export { StyledSafeAreaView }
