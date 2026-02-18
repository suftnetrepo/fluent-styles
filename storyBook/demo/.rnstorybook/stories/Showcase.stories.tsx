import React, { useState } from 'react';
import {
  YStack,
  XStack,
  StyledText,
  StyledButton,
  Separator,
  Badge,
  Spinner,
} from 'fluent-styles';

export default {
  title: 'Showcase/Component Library',
};

export const ComponentShowcase = () => {
  const [loading, setLoading] = useState(false);

  return (
    <YStack padding={16} gap={20}>
      {/* Header */}
      <YStack gap={8}>
        <StyledText fontSize={28} fontWeight="bold" color="#000">
          TSPackage Component Library
        </StyledText>
        <StyledText fontSize={14} color="#666">
          A comprehensive collection of React Native UI components
        </StyledText>
      </YStack>

      <Separator height={1} backgroundColor="#e0e0e0" />

      {/* Section: Layout Components */}
      <YStack gap={12}>
        <StyledText fontSize={18} fontWeight="bold">
          Layout Components
        </StyledText>
        <StyledText fontSize={12} color="#666">
          YStack, XStack, SafeAreaView, ScrollView, Spacer
        </StyledText>
        <XStack gap={8}>
          <StyledButton
            backgroundColor="#007AFF"
            flex={1}
            paddingVertical={10}
          >
            <StyledText color="#fff" fontSize={12}>
              Left
            </StyledText>
          </StyledButton>
          <StyledButton
            backgroundColor="#007AFF"
            flex={1}
            paddingVertical={10}
          >
            <StyledText color="#fff" fontSize={12}>
              Right
            </StyledText>
          </StyledButton>
        </XStack>
      </YStack>

      <Separator height={1} backgroundColor="#e0e0e0" />

      {/* Section: Input Components */}
      <YStack gap={12}>
        <StyledText fontSize={18} fontWeight="bold">
          Input Components
        </StyledText>
        <StyledText fontSize={12} color="#666">
          Button, Input, CheckBox, RadioButton, Switch, Dropdown
        </StyledText>
        <StyledButton backgroundColor="#34C759">
          <StyledText color="#fff">Primary Button</StyledText>
        </StyledButton>
      </YStack>

      <Separator height={1} backgroundColor="#e0e0e0" />

      {/* Section: Display Components */}
      <YStack gap={12}>
        <StyledText fontSize={18} fontWeight="bold">
          Display Components
        </StyledText>
        <StyledText fontSize={12} color="#666">
          Text, Badge, Icon, Image, Card, Separator
        </StyledText>
        <XStack gap={8}>
          <Badge variant="primary">New</Badge>
          <Badge variant="success">Verified</Badge>
          <Badge variant="danger">Alert</Badge>
        </XStack>
      </YStack>

      <Separator height={1} backgroundColor="#e0e0e0" />

      {/* Section: Feedback Components */}
      <YStack gap={12}>
        <StyledText fontSize={18} fontWeight="bold">
          Feedback Components
        </StyledText>
        <StyledText fontSize={12} color="#666">
          Spinner, Dialog, Header, StatusBar
        </StyledText>
        {loading && <Spinner size="large" />}
        <StyledButton
          backgroundColor={loading ? '#ccc' : '#FF9500'}
          onPress={() => setLoading(!loading)}
          disabled={loading}
        >
          <StyledText color="#fff">
            {loading ? 'Loading...' : 'Show Spinner'}
          </StyledText>
        </StyledButton>
      </YStack>

      <Separator height={1} backgroundColor="#e0e0e0" />

      {/* Section: Container Components */}
      <YStack gap={12}>
        <StyledText fontSize={18} fontWeight="bold">
          Container Components
        </StyledText>
        <StyledText fontSize={12} color="#666">
          Accordion, KeyboardAvoidingView, Dialog
        </StyledText>
        <StyledText fontSize={12} color="#999">
          See dedicated stories for interactive examples
        </StyledText>
      </YStack>

      {/* Footer */}
      <YStack gap={8}>
        <Separator height={1} backgroundColor="#e0e0e0" />
        <StyledText fontSize={10} color="#999" textAlign="center">
          Visit the individual component stories for more examples and interactions
        </StyledText>
      </YStack>
    </YStack>
  );
};
