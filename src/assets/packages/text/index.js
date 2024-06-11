import { Text } from "react-native";
import styled from "../../styled";
import { theme } from "../../theme";

const StyledText = styled(Text, {
    base: {
        fontSize: 16,
        color: theme.colors.gray[800],
        fontWeight: 400
    },
    variants: {
        fontWeight: {...theme.fontWeight },       
        backgroundColor: theme.colors,
        color: {
            ...theme.colors
        },
        fontSize: theme.fontSize,      
        flexWrap: 'wrap',
        selected: {
            true: {
                ...theme.fontWeight.bold,
                color: theme.colors.gray[1]
            },
            false: {
                ...theme.fontWeight.normal,
                color: theme.colors.gray[800]
            }           
        },
        textAlign: {
            'left': { 
                textAlign: 'left'
             },
            'right': { 
                textAlign: 'right' 
            },
            'center': { 
                textAlign: 'center' 
            },
            'justify': { 
                textAlign: 'justify'
             }
        }
    }
})

export default StyledText