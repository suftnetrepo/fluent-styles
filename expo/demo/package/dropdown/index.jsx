import React from "react";
import { YStack } from '../stack';
import StyledText from '../text';
import { StyledSpacer } from '../spacer';
import DropDownPicker from "react-native-dropdown-picker";
import { theme } from "../theme";

const Dropdown = styled(DropDownPicker, {
    base: {
        borderColor: theme.colors.gray[800],
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: theme.colors.gray[1],
        width: '100%',
        color: theme.colors.gray[800],
        paddingHorizontal: 16,
    },
    variants: {
        error: {
            true: {
                borderColor: theme.colors.pink[800],
                borderWidth: 1,
            },
            false: {
                borderColor: theme.colors.grey[800],
            }
        },
    }
})

const StyledDropdown = ({ label, errorMessage, labelStyles, ...rest }) => {
    return (
        <YStack width={'100%'} justifyContent='flex-start' alignItems='flex-start'>
            {
                label && (
                    <>
                        <StyledSpacer marginVertical={4} />
                        <StyledText paddingHorizontal={8} color={theme.colors.gray[600]} fontSize={theme.fontSize.normal} fontWeight={theme.fontWeight.normal} {...labelStyles}>
                            {label}
                        </StyledText>
                        <StyledSpacer marginVertical={4} />
                    </>

                )
            }
            <Dropdown {...rest} />
            {
                errorMessage && (
                    <>
                        <StyledSpacer marginVertical={1} />
                        <StyledText marginHorizontal={16} fontWeight={theme.fontWeight.normal} fontSize={theme.fontSize.normal} color={theme.colors.pink[700]}>
                            {errorMessage}
                        </StyledText>
                    </>
                )
            }

        </YStack>
    )
}

export { StyledDropdown }