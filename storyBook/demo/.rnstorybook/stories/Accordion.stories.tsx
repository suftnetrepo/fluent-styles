import React, { useState } from 'react';
import { YStack, XStack, Accordion, StyledText } from 'fluent-styles';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    variant: {
      options: ['default', 'filled', 'outline'],
      control: { type: 'radio' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    collapsible: {
      control: { type: 'boolean' },
    },
  },
};

const items = [
  {
    id: '1',
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces with component-based architecture and reactive state management.',
  },
  {
    id: '2',
    title: 'What is TypeScript?',
    content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, adding static type checking and modern features.',
  },
  {
    id: '3',
    title: 'What is React Native?',
    content: 'React Native is a framework for building native mobile applications using React and JavaScript, supporting iOS and Android.',
  },
];

export const Default = {
  args: {
    items,
    variant: 'default',
    collapsible: true,
    multiple: false,
  },
  render: (args: any) => <Accordion {...args} />,
};

export const Filled = {
  args: {
    items,
    variant: 'filled',
    collapsible: true,
    multiple: false,
  },
  render: (args: any) => <Accordion {...args} />,
};

export const Outline = {
  args: {
    items,
    variant: 'outline',
    collapsible: true,
    multiple: false,
  },
  render: (args: any) => <Accordion {...args} />,
};

export const Controlled = () => {
  const [expanded, setExpanded] = useState('1');

  return (
    <YStack padding={16} gap={16}>
      <StyledText fontSize={18} fontWeight="bold">
        Controlled Accordion
      </StyledText>
      <Accordion
        items={items}
        value={expanded}
        onChange={(id) => setExpanded(id as string)}
      />
      <StyledText fontSize={12} color="#666">
        Currently expanded: {expanded}
      </StyledText>
    </YStack>
  );
};

export const Multiple = {
  args: {
    items,
    variant: 'default',
    multiple: true,
    defaultValue: ['1'],
  },
  render: (args: any) => <Accordion {...args} />,
};

export const NonCollapsible = {
  args: {
    items,
    variant: 'default',
    collapsible: false,
    defaultValue: '1',
  },
  render: (args: any) => <Accordion {...args} />,
};
