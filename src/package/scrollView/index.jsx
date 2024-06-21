import { ScrollView } from 'react-native'
import { styled } from '../styled'

const StyledScrollView = styled(ScrollView, {
  base: {
    flex: 1
  },
  variants: {
    backgroundColor: color => ({
      backgroundColor: color
    })
  }
})

export { StyledScrollView }
