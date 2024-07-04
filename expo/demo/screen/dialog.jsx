import React, { useState } from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledButton } from '../package/button'
import {
	StyledConfirmDialog,
	StyledOkDialog,
	StyledDialog
} from '../package/dialog'
import { StyledImage } from '../package/image'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Switch = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const [okVisible, setOkVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const RenderModal = () => {
    return (
      <YStack
        backgroundColor={theme.colors.transparent}
        flex={1}
        justifyContent='center'
        alignItems='center'
			>
        <YStack
          width={'90%'}
          backgroundColor={theme.colors.gray[1]}
          borderRadius={16}
          paddingHorizontal={16}
          paddingVertical={16}
          justifyContent='center'
          alignItems='center'
				>
          <XStack width={'100%'} justifyContent='flex-end' alignItems='center'>
            <Icon
              name='cancel'
              size={48}
              color={theme.colors.gray[700]}
              onPress={() => setModalVisible(false)}
						/>
          </XStack>
          <StyledImage
            local
            height={160}
            width={160}
            source={require('../assets/img/flower.png')}
					/>
          <StyledText
            fontFamily={fontStyles.OpenSansRegular}
            color={theme.colors.gray[800]}
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.xxxlarge}
            paddingVertical={1}
            paddingHorizontal={16}
            textAlign='center'
					>
						Buy a Flower!
					</StyledText>
          <StyledSpacer marginVertical={8} />
          <StyledText
            fontFamily={fontStyles.OpenSansRegular}
            color={theme.colors.gray[800]}
            fontWeight={theme.fontWeight.normal}
            fontSize={theme.fontSize.xlarge}
            paddingVertical={1}
            paddingHorizontal={16}
            textAlign='center'
					>
						Lorem Ipsum is simply dummy text
					</StyledText>
          <StyledSpacer marginVertical={16} />
          <StyledText
            fontFamily={fontStyles.OpenSansRegular}
            color={theme.colors.gray[800]}
            fontWeight={theme.fontWeight.normal}
            fontSize={theme.fontSize.xlarge}
            textAlign='center'
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</StyledText>
          <StyledSpacer marginVertical={16} />
          <StyledButton
            borderRadius={30}
            borderColor={theme.colors.cyan[500]}
            onPress={() => setModalVisible(true)}
					>
            <XStack
              justifyContent='center'
              alignItems='center'
              paddingHorizontal={16}
              paddingVertical={8}
						>
              <Icon
                name='location-pin'
                size={30}
                color={theme.colors.gray[700]}
							/>
              <StyledText
                fontFamily={fontStyles.OpenSansRegular}
                color={theme.colors.gray[800]}
                fontWeight={theme.fontWeight.normal}
                fontSize={theme.fontSize.normal}
							>
								Get Shop Direction
							</StyledText>
            </XStack>
          </StyledButton>
          <StyledSpacer marginVertical={8} />
        </YStack>
      </YStack>
    )
  }

  return (
    <StyledSafeAreaView>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Dialog'} leftIcon />
      </StyledHeader>
      <YStack flex={1} backgroundColor={theme.colors.gray[1]}>
        <StyledSpacer marginVertical={8} />
        <XStack
          justifyContent='space-between'
          alignItems='center'
          paddingVertical={8}
          paddingHorizontal={8}
          marginHorizontal={8}
          borderRadius={30}
          backgroundColor={theme.colors.gray[100]}
				>
          <StyledButton
            flex={1}
            borderRadius={30}
            onPress={() => setOkVisible(true)}
					>
            <StyledText
              fontFamily={fontStyles.OpenSansRegular}
              color={theme.colors.gray[800]}
              fontWeight={theme.fontWeight.normal}
              fontSize={theme.fontSize.normal}
              paddingVertical={8}
              paddingHorizontal={16}
						>
							Ok
						</StyledText>
          </StyledButton>
        </XStack>
        <StyledSpacer marginVertical={8} />
        <XStack
          justifyContent='space-between'
          alignItems='center'
          paddingVertical={8}
          paddingHorizontal={8}
          marginHorizontal={8}
          borderRadius={30}
          backgroundColor={theme.colors.gray[100]}
				>
          <StyledButton
            flex={1}
            borderRadius={30}
            borderColor={theme.colors.yellow[800]}
            borderWidth={3}
            onPress={() => setIsDialogVisible(true)}
					>
            <StyledText
              fontFamily={fontStyles.OpenSansRegular}
              color={theme.colors.gray[800]}
              fontWeight={theme.fontWeight.normal}
              fontSize={theme.fontSize.normal}
              paddingVertical={8}
              paddingHorizontal={16}
						>
							Yes No
						</StyledText>
          </StyledButton>
        </XStack>
        <StyledSpacer marginVertical={8} />
        <XStack
          justifyContent='space-between'
          alignItems='center'
          paddingVertical={8}
          paddingHorizontal={8}
          marginHorizontal={8}
          borderRadius={30}
          backgroundColor={theme.colors.gray[100]}
				>
          <StyledButton
            flex={1}
            borderRadius={30}
            borderColor={theme.colors.cyan[700]}
            borderWidth={3}
            onPress={() => setModalVisible(true)}
					>
            <StyledText
              fontFamily={fontStyles.OpenSansRegular}
              color={theme.colors.gray[800]}
              fontWeight={theme.fontWeight.normal}
              fontSize={theme.fontSize.normal}
              paddingVertical={8}
              paddingHorizontal={16}
						>
							Get Shop Direction
						</StyledText>
          </StyledButton>
        </XStack>
      </YStack>
      {isDialogVisible &&
      <StyledConfirmDialog
        visible
        description='Are you sure you want to logout?'
        confirm='Yes'
        cancel='No'
        title={'Confirmation'}
        onCancel={() => setIsDialogVisible(false)}
        onConfirm={() => setIsDialogVisible(false)}
				/>}
      {okVisible &&
      <StyledOkDialog
        visible
        onOk={() => {
          setOkVisible(false)
        }}
				/>}
      {modalVisible &&
      <StyledDialog visible>
        <RenderModal />
      </StyledDialog>}
    </StyledSafeAreaView>
  )
}

export default Switch
