import { View } from "react-native";
import { styled } from "../styled";
import { theme } from "../theme";

const YStack = styled(View, {
    base: {
        flexDirection: 'column',
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
    },
    variants: {
        transparent: {
            true: {
                backgroundColor: theme.colors.transparent,
            }
        }
    }
})

export { XStack, YStack }