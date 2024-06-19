import { Text } from "react-native";
import { styled } from '../../../../expo/demo/package/styled'
import { theme } from "../../theme";

const StyledText = styled(Text, {
    base: {
        fontSize: theme.fontSize.normal,
        color: theme.colors.gray[800],
        fontWeight: theme.fontWeight.normal
    },
    variants: {
        fontWeight: (size) => ({
            fontWeight: size || theme.fontWeight.normal
        }),
        borderColor: (color) => ({
            borderColor: color || theme.colors.gray[1]
        }),
        backgroundColor: (color) => ({
            backgroundColor: color || theme.colors.gray[1]
        }),
        color: (color) => ({
            color: color || theme.colors.gray[800]
        }),
        padding: (size) => ({
            padding: size || 0
        }),
        fontSize: (size) => ({
            fontSize: size || theme.fontSize.normal
        }),
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

export { StyledText}