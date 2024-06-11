import { View } from "react-native";
import styled from "../../styled";
import { theme } from "../../theme";
import { shadow } from "../../utils/utils";

const Stack = styled(View, {
    base :{
        position: 'relative',        
    },
    variants :{        
        borderColor: theme.colors,
        backgroundColor: theme.colors,
        transparent: {
            true: {
                backgroundColor: theme.colors.transparent,
            }
        },
        shadow  
    }
})

const YStack = styled(Stack, {
    base: {
        flexDirection: 'column',
    }   
})
const XStack = styled(Stack, {
    base: {
        flexDirection: 'row',    
    }
})

export { Stack, XStack, YStack }