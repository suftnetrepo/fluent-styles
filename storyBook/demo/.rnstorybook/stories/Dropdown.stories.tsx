import React, { useState } from 'react';
import { YStack, Dropdown, StyledText } from 'fluent-styles';
import type { DropdownOptionItem } from 'fluent-styles';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const items: DropdownOptionItem[] = [
  { value: '1', label: 'React' },
  { value: '2', label: 'Vue' },
  { value: '3', label: 'Angular' },
  { value: '4', label: 'Svelte' },
];

export const Default = {
  args: {
    data: items,
    placeholder: 'Select a framework',
  },
  render: (args: any) => <Dropdown {...args} />,
};

export const Controlled = () => {
  const [selected, setSelected] = useState('');

  return (
    <YStack padding={16} gap={12}>
      <StyledText fontSize={18} fontWeight="bold">
        Controlled Dropdown
      </StyledText>
      <Dropdown
        data={items}
        placeholder="Select a framework"
        value={selected}
        onChange={(item) => setSelected(item.label)}
      />
      {selected && (
        <StyledText fontSize={12} color="#666">
          Selected: {selected}
        </StyledText>
      )}
    </YStack>
  );
};

export const Disabled = {
  args: {
    data: items,
    placeholder: 'Disabled dropdown',
    disabled: true,
  },
  render: (args: any) => <Dropdown {...args} />,
};

export const WithDefaultValue = {
  args: {
    data: items,
    placeholder: 'Select a framework',
    defaultValue: 'React',
  },
  render: (args: any) => <Dropdown {...args} />,
};
