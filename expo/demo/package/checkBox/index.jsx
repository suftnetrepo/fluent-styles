import React, { useState } from 'react'
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
    iconProps,
    ...rest
}) => {
    const [checked, setChecked] = useState(false)

    const toggleCheckbox = () => {
        setChecked(!checked)
        onPress && onPress(!checked)
    }

    return (
        <CheckBox
            disabled={disabled}
            checked={checked}
            checkedColor={checked && checkedColor && checkedColor}           
            onPress={() => toggleCheckbox()}
            {...rest}
        >
            {checked &&
                <Icon
                    name='check'
                    {...iconProps}
                    color={theme.colors.gray[1]}
                    size={20}
                />}
        </CheckBox>
    )
}

export { StyledCheckBox }
