import { Text } from "react-native";
import { styled } from "../styled";
import { theme } from "../theme";
import { fontStyles } from "../../shared/fontStyles";

const StyledText = styled(Text, {
    base: {
        fontSize: theme.fontSize.normal,
        color: theme.colors.gray[800],
        fontWeight: theme.fontWeight.normal,
        fontFamily: fontStyles.OpenSansRegular
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
        fontFamily: (font) => ({
            fontFamily: font || fontStyles.OpenSansRegular
        })

    }
})

export { StyledText }