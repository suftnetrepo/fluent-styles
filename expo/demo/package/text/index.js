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
                fontWeight: theme.fontWeight.bold,
                color: theme.colors.gray[1]
            },
            false: {
                fontWeight: theme.fontWeight.normal,
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

export { StyledText }