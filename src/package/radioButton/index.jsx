import React, { useState } from 'react'
import { styled } from '../styled'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../theme'
import { isValidColor, isValidNumber, isValidString } from '../utils'

const RadioButton = styled(TouchableOpacity, {
  base: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: theme.colors.gray[500],
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  variants: {
    width: size => {
      if (!size) return
      return { width: size }
    },
    height: size => {
      if (!size) return
      return { height: size }
    },
    disabled: {
      true: {
        backgroundColor: theme.colors.gray[500]
      }
    },
    checked: {
      true: {
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

const StyledRadioButton = ({
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
    <RadioButton
      disabled={disabled}
      checked={checked}
      checkedColor={checked && checkedColor && checkedColor}
      onPress={() => toggleCheckbox()}
      {...rest}
		>
      {checked &&
      <Icon
        name='circle'
        color={theme.colors.gray[700]}
        size={15}
        {...iconProps}
				/>}
    </RadioButton>
  )
}

export { StyledRadioButton }
