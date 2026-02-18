import React from 'react';
import { YStack, XStack, StyledText, StyledButton } from 'fluent-styles';

export default {
  title: 'Layout/Stack',
};

export const YStackExample = () => (
  <YStack padding={16} gap={12} backgroundColor="#f5f5f5" borderRadius={8}>
    <StyledText fontSize={16} fontWeight="bold">
      YStack (Vertical)
    </StyledText>
    <StyledButton backgroundColor="#007AFF">Item 1</StyledButton>
    <StyledButton backgroundColor="#007AFF">Item 2</StyledButton>
    <StyledButton backgroundColor="#007AFF">Item 3</StyledButton>
  </YStack>
);

export const XStackExample = () => (
  <XStack padding={16} gap={12} backgroundColor="#f5f5f5" borderRadius={8}>
    <StyledButton backgroundColor="#007AFF" flex={1}>
      Left
    </StyledButton>
    <StyledButton backgroundColor="#007AFF" flex={1}>
      Center
    </StyledButton>
    <StyledButton backgroundColor="#007AFF" flex={1}>
      Right
    </StyledButton>
  </XStack>
);

export const NestedStacks = () => (
  <YStack padding={16} gap={12} backgroundColor="#f5f5f5" borderRadius={8}>
    <StyledText fontSize={16} fontWeight="bold">
      Nested Stacks
    </StyledText>
    <XStack gap={12}>
      <StyledButton backgroundColor="#FF3B30" flex={1}>
        Row 1
      </StyledButton>
      <StyledButton backgroundColor="#FF3B30" flex={1}>
        Row 1
      </StyledButton>
    </XStack>
    <XStack gap={12}>
      <StyledButton backgroundColor="#34C759" flex={1}>
        Row 2
      </StyledButton>
      <StyledButton backgroundColor="#34C759" flex={1}>
        Row 2
      </StyledButton>
    </XStack>
  </YStack>
);
