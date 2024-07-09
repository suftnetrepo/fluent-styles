import React, { useState } from 'react'
import { styled } from '../styled'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../theme'

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
	name,
	onPress,
	disabled = false,
	selected,
	checkedColor,
	iconProps,
	...rest
}) => {
  const checked = selected === name 
  return (
    <RadioButton
      disabled={disabled}
      checked={checked}
      checkedColor={checked && checkedColor && checkedColor}
      onPress={() => onPress && onPress(name)}
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
