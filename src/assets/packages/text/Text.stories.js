import React from 'react';
import StyledText from '../text';

export default {
    title: 'Text',
    component: StyledText,
};

export const Default = () =>
    <StyledText color='gray.1' backgroundColor='gray.800' padding={20} >Press me</StyledText>
export const WithLongTitle = () =>
    <StyledText color='gray.200'>Press me for a long time testing</StyledText>
