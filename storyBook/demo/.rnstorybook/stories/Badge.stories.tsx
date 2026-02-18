import React from 'react';
import { YStack, XStack, Badge, CounterBadge } from "fluent-styles";

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Variants = () => (
  <YStack padding={16} gap={16}>
    <Badge variant="default">Default</Badge>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="danger">Danger</Badge>
  </YStack>
);

export const Sizes = () => (
  <XStack padding={16} gap={12} alignItems="center">
    <Badge size="small">Small</Badge>
    <Badge size="medium">Medium</Badge>
    <Badge size="large">Large</Badge>
  </XStack>
);

export const Counter = {
  render: () => (
    <YStack padding={16} gap={16}>
      <CounterBadge count={5} variant="primary" />
      <CounterBadge count={12} variant="success" />
      <CounterBadge count={99} variant="danger" />
      <CounterBadge count={100} variant="warning" />
    </YStack>
  ),
};

export const Outline = () => (
  <YStack padding={16} gap={16}>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="info">Info</Badge>
  </YStack>
);
