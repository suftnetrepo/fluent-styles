import { Text } from "react-native";
import { styled } from "../styled";
import { theme } from "../theme";

const StyledText = styled(Text, {
    base: {
        fontSize: theme.fontSize.normal,
        color: theme.colors.gray[800],
        fontWeight: theme.fontWeight.normal      
    },
    variants: {
        fontWeight: (size) => ({
            fontWeight: size
        }),
        color: (color) => ({
            color: color
        }),
        fontSize: (size) => ({
            fontSize: size
        }),
        textDecorationLine: {
            true: {
                textDecorationLine: 'underline'
            }
        },
        flexWrap: 'wrap',
        selected: {
            true: {             
                color: theme.colors.gray[1]
            },
            false: {               
                color: theme.colors.gray[800]
            }
        },       
        fontFamily: (font) => {
            if (!font) return
            return {
                fontFamily: font
            }
        },
        textAlign: (align) => {
            if (!align) return
            return {
                textAlign: align
            }
        }
    }
})

export { StyledText }