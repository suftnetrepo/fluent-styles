import { ScrollView } from 'react-native'
import { styled } from '../styled'
import { isValidColor } from '../utils'

const StyledScrollView = styled(ScrollView, {
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

export { StyledScrollView }
