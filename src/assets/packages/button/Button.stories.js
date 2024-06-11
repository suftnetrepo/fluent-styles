// src/assets/packages/button/Button.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';
import StyledButton from '.';
import StyledText from '../text';
import { XStack } from '../stack';
import StyledSpacer from '../spacer';
import { View } from 'react-native';

export default {
    title: 'Button',
    component: StyledButton,
};

// Named exports for each story
export const Default = () => 
    <StyledButton width={200}  backgroundColor='cyan.500' borderColor='cyan.500' onPress={action('button-pressed')}>
        <StyledText marginVertical={1} marginHorizontal={1} fontWeight='bold' color='gray.1'>Press me</StyledText>
    </StyledButton>


