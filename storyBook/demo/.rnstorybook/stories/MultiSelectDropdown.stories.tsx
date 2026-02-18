import React, { useState } from 'react';
import { YStack, MultiSelectDropdown, StyledText } from 'fluent-styles';
import type { DropdownOptionItem } from 'fluent-styles';

export default {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
};

const items: DropdownOptionItem[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt' },
];

export const Default = {
  args: {
    data: items,
    placeholder: 'Select frameworks',
  },
  render: (args: any) => <MultiSelectDropdown {...args} />,
};

export const Controlled = () => {
  const [selected, setSelected] = useState<DropdownOptionItem[]>([]);

  return (
    <YStack padding={16} gap={12}>
      <StyledText fontSize={18} fontWeight="bold">
        Controlled Multi-Select
      </StyledText>
      <MultiSelectDropdown
        data={items}
        placeholder="Select frameworks"
        value={selected}
        onChange={setSelected}
      />
      {selected.length > 0 && (
        <YStack marginTop={12} gap={6}>
          <StyledText fontSize={12} fontWeight="bold" color="#666">
            Selected ({selected.length}):
          </StyledText>
          {selected.map((item) => (
            <StyledText key={item.value} fontSize={11} color="#008AFF">
              • {item.label}
            </StyledText>
          ))}
        </YStack>
      )}
    </YStack>
  );
};

export const WithDefaultValue = {
  args: {
    data: items,
    placeholder: 'Select frameworks',
    defaultValue: [
      { value: 'react', label: 'React' },
      { value: 'nextjs', label: 'Next.js' },
    ],
  },
  render: (args: any) => <MultiSelectDropdown {...args} />,
};

export const CustomSeparator = {
  args: {
    data: items,
    placeholder: 'Select frameworks',
    separator: ' | ',
    defaultValue: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
    ],
  },
  render: (args: any) => <MultiSelectDropdown {...args} />,
};

export const Disabled = {
  args: {
    data: items,
    placeholder: 'Disabled dropdown',
    disabled: true,
  },
  render: (args: any) => <MultiSelectDropdown {...args} />,
};
