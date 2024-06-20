import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledSeparator } from '../package/separator'
import {
	StyledBadge,
	StyledBadgeWithIcon,
	StyledBadgeIcon
} from '../package/badge'

const Badge = () => {
  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Badge'} leftIcon />
      </StyledHeader>
      <YStack flex={1} marginHorizontal={8}>
        <StyledSpacer marginVertical={2} />
        <StyledSeparator
          left={
            <StyledText
              fontWeight={theme.fontWeight.normal}
              color={theme.colors.gray[600]}
              fontSize={theme.fontSize.large}
						>
							Basic
						</StyledText>
					}
				/>
        <XStack
          paddingHorizontal={8}
          paddingVertical={8}
          justifyContent='flex-start'
          alignItems='flex-start'
          borderRadius={30}
          backgroundColor={theme.colors.gray[100]}
				>
          <StyledBadge
            flex={1}
            fontFamily={fontStyles.OpenSansRegular}
            color={theme.colors.pink[800]}
            backgroundColor={theme.colors.pink[100]}
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.normal}
            paddingHorizontal={1}
            paddingVertical={1}
					>
						Get started
					</StyledBadge>
          <StyledSpacer marginHorizontal={4} />
          <StyledBadge
            flex={1}
            fontFamily={fontStyles.OpenSansRegular}
            color={theme.colors.orange[800]}
            backgroundColor={theme.colors.orange[100]}
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.normal}
            paddingHorizontal={1}
            paddingVertical={1}
					>
						Continue
					</StyledBadge>
          <StyledSpacer marginHorizontal={4} />
          <StyledBadge
            flex={1}
            fontFamily={fontStyles.OpenSansRegular}
            color={theme.colors.green[800]}
            backgroundColor={theme.colors.green[100]}
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.normal}
            paddingHorizontal={1}
            paddingVertical={1}
					>
						Pay Now
					</StyledBadge>
        </XStack>
        <StyledSeparator
          left={
            <StyledText
              fontWeight={theme.fontWeight.normal}
              color={theme.colors.gray[600]}
              fontSize={theme.fontSize.large}
						>
							Icon Badge
						</StyledText>
					}
				/>
        <XStack
          paddingHorizontal={8}
          paddingVertical={8}
          justifyContent='flex-start'
          alignItems='flex-start'
          borderRadius={30}
          backgroundColor={theme.colors.gray[100]}
				>
          <StyledBadgeWithIcon
            paddingHorizontal={16}
            paddingVertical={1}
            borderRadius={30}
            backgroundColor={theme.colors.pink[100]}
            title={'Get started'}
            textProps={{
              fontFamily: fontStyles.OpenSansRegular,
              color: theme.colors.pink[800],
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.normal
            }}
            iconLeft={
              <Icon name={'note'} size={25} color={theme.colors.gray[700]} />
						}
					/>
          <StyledSpacer flex={1} />
          <StyledBadgeWithIcon
            paddingHorizontal={8}
            paddingVertical={1}
            borderRadius={30}
            backgroundColor={theme.colors.orange[100]}
            title={'Continue'}
            textProps={{
              fontFamily: fontStyles.OpenSansRegular,
              color: theme.colors.orange[800],
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.normal
            }}
            iconRight={
              <Icon
                name={'notifications'}
                size={25}
                color={theme.colors.orange[500]}
							/>
						}
					/>
        </XStack>
        <StyledSeparator
          left={
            <StyledText
              fontWeight={theme.fontWeight.normal}
              color={theme.colors.gray[600]}
              fontSize={theme.fontSize.large}
						>
							Icon Badge
						</StyledText>
					}
				/>
        <XStack
          justifyContent='flex-start'
          alignItems='flex-start'
          borderRadius={30}
          paddingHorizontal={16}
          paddingVertical={16}
          backgroundColor={theme.colors.gray[100]}
				>
          <StyledBadgeIcon
            char={'A'}
            right={7}
            top={-2}
            charProps={{
              borderRadius: 100,
              paddingHorizontal: 5,
              paddingVertical: 1,
              backgroundColor: theme.colors.red[500],
              fontFamily: fontStyles.OpenSansRegular,
              color: theme.colors.pink[100],
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.nano
            }}
            icon={
              <Icon
                name={'notifications'}
                size={48}
                color={theme.colors.gray[700]}
							/>
						}
					/>
          <StyledSpacer marginHorizontal={2} />
          <StyledBadgeIcon
            char={'A'}
            right={1}
            top={-5}
            charProps={{
              borderRadius: 100,
              paddingHorizontal: 8,
              paddingVertical: 4,
              backgroundColor: theme.colors.pink[500],
              fontFamily: fontStyles.OpenSansRegular,
              color: theme.colors.pink[100],
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.nano
            }}
            icon={
              <Icon
                name={'shopping-cart'}
                size={48}
                color={theme.colors.gray[700]}
							/>
						}
					/>
        </XStack>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Badge
