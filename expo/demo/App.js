import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "@expo/metro-runtime";
// import { StyledText, XStack, StyledCard, StyledButton } from './package';
import { StyledButton, Button } from '../../expo/demo/package/button'
import { StyledText } from '../../expo/demo/package/text'
import { YStack, XStack } from '../../expo/demo/package/stack'
import { ErrorBoundary } from './package/utils/utils';
import { theme } from './package/theme';
import { StyledCard } from './package/card';
import { StyledSpacer } from './package/spacer';
import { StyledSafeAreaView } from './package/safeAreaView';

const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
      <YStack flex={1} justifyContent='center' alignItems='center'  backgroundColor={theme.colors.gray[200]} >
        <StyledButton backgroundColor={theme.colors.pink[500]} borderColor={theme.colors.pink[500]} rounded={10} onPress={()=> console.log("...")} >
          <StyledText fontWeight={theme.fontWeight.normal} fontSize={theme.fontSize.normal} paddingHorizontal={20} paddingVertical={20} color={theme.colors.gray[100]}>Open up App.js to start working on your</StyledText>
        </StyledButton>
        <StyledSpacer marginVertical={8} />
        <StyledCard justifyContent='flex-start' alignItems='flex-start' marginHorizontal={16} pressable ={true} pressableProps={{ onPress: () => console.log("............."), delayPressIn: 50 }} borderRadius={8} paddingHorizontal={24} paddingVertical={16} backgroundColor={theme.colors.gray[800]}>
          <StyledText fontWeight={theme.fontWeight.normal} fontSize={theme.fontSize.normal}  color={theme.colors.gray[100]}>Open up App.js to start working on your</StyledText>
          <StyledSpacer marginVertical={16} />
          <StyledText fontWeight={theme.fontWeight.normal} fontSize={theme.fontSize.normal} color={theme.colors.gray[500]}>working on your</StyledText>
        </StyledCard>
      </YStack>
    </StyledSafeAreaView>    
  );
}






