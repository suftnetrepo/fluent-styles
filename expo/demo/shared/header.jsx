import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyledText } from '../package/text'
import { XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { useNavigation } from '@react-navigation/native'
import { StyledCycle } from '../package/cycle'

const SharedHeader = ({
	leftIcon = false,
	icon = 'arrow-back',
	title,
	reload = false,
	screen,
	rightIcon,
	centerTitle,
	...rest
}) => {
  const navigate = useNavigation()
  return (
    <XStack
      flex={1}
      alignItems='center'
      paddingHorizontal={8}
      paddingVertical={8}
		>
      {leftIcon &&
      <StyledCycle
        borderColor={theme.colors.gray[400]}
        backgroundColor={theme.colors.gray[1]}
        {...rest}
				>
        <Icon
          name={icon}
          size={30}
          color={theme.colors.gray[700]}
          onPress={() => {
            if (reload && screen) {
              navigate.replace(screen)
            } else {
              navigate.goBack()
            }
          }}
					/>
      </StyledCycle>}
      <StyledSpacer marginHorizontal={4} />
      {title &&
      <StyledText
        color={theme.colors.gray[800]}
        fontWeight={theme.fontWeight.normal}
        fontSize={theme.fontSize.normal}
				>
        {title}
      </StyledText>}
      <StyledSpacer flex={1} />
      {centerTitle &&
      <StyledText
        color={theme.colors.gray[800]}
        fontWeight={theme.fontWeight.normal}
        fontSize={theme.fontSize.normal}
				>
        {centerTitle}
      </StyledText>}
      <StyledSpacer flex={1} />
      {rightIcon &&
      <Icon
        name={'notifications'}
        size={30}
        color={theme.colors.gray[700]}
        onPress={() => {
          console.log('...')
        }}
				/>}
    </XStack>
  )
}

export default SharedHeader
