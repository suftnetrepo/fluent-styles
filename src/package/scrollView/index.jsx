import { ScrollView } from 'react-native'
import { styled } from '../styled'

const StyledScrollView = styled(ScrollView, {  
  variants: {
    backgroundColor: color => ({
      backgroundColor: color
    })
  }
})

export { StyledScrollView }
