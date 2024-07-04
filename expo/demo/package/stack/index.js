import { View } from "react-native";
import { styled } from "../styled";
import { theme } from "../theme";

const YStack = styled(View, {
    base: {
        flexDirection: 'column',
        position: 'relative'  
    },
    variants: {
        transparent: {
            true: {
                backgroundColor: theme.colors.transparent,
            }
        }
    }   
})
const XStack = styled(View, {
    base: {
        flexDirection: 'row',  
        position:'relative'  
    },
    variants: {
        transparent: {
            true: {
                backgroundColor: theme.colors.transparent,
            }
        }
    },
    position: {
        true: {
            position: 'absolute'
        }
    },
})

export { XStack, YStack }