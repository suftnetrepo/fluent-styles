import React, { useState, useEffect } from 'react'
import { styled } from '../styled'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../theme'

const CheckBox = styled(TouchableOpacity, {
    base: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 1,
        backgroundColor: theme.colors.gray[1],
        borderColor: theme.colors.gray[700],
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    variants: {
        height: size => ({
            height: size || 24
        }),
        width: size => ({
            width: size || 24
        }),
        disabled: {
            true: {
                backgroundColor: theme.colors.gray[500]
            }
        },
        checked: {
            true: {
                backgroundColor: theme.colors.gray[800]
            },
            false: {
                backgroundColor: theme.colors.gray[1]
            }
        },
        checkedColor: color => {
            if (!color) return
            return {
                backgroundColor: color,
                borderColor: color
            }
        }
    }
})

const StyledCheckBox = ({
    onPress,
    disabled = false,
    checkedColor,
    checked = false,
    iconProps,
    ...rest
}) => {
    const [check, setCheck] = useState(checked)

    useEffect(
        () => {
            setCheck(checked)
        },
        [checked]
    )

    const toggleCheckbox = () => {
        setCheck(!check)
        onPress && onPress(!check)
    }

    return (
        <CheckBox
            disabled={disabled}
            checked={check}
            checkedColor={check && checkedColor && checkedColor}
            onPress={() => toggleCheckbox()}
            {...rest}
        >
            {check &&
                <Icon
                    name='check'
                    color={theme.colors.gray[1]}
                    size={20}
                    {...iconProps}
                />}
        </CheckBox>
    )
}

export { StyledCheckBox }
