import React from 'react'
import { Switch as SwitchSource } from 'react-native'
import { styled } from '../styled'
import { theme } from '../theme'

const Switch = styled(SwitchSource, {
  base: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }]
  }
})

const StyledSwitch = ({
	trackColorOff = theme.colors.gray[400],
	trackColorOn = theme.colors.green[500],
	thumbColorOff = theme.colors.gray[400],
	thumbColorOn = theme.colors.pink[500],
	isEnabled,
	onChange,
	...rest
}) => {
  return (
    <Switch
      trackColor={{ false: trackColorOff, true: trackColorOn }}
      thumbColor={isEnabled ? thumbColorOn : thumbColorOff}
      ios_backgroundColor={theme.colors.gray[800]}
      onValueChange={onChange}
      value={isEnabled}
      {...rest}
		/>
  )
}

export { StyledSwitch }
