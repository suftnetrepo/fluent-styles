# RadioButton Component - Quick Reference

## Quick Start

### Basic Radio Group
```tsx
const [selected, setSelected] = useState('option1');

<YStack gap={8}>
  <RadioButton name="option1" selected={selected} onSelect={setSelected} />
  <RadioButton name="option2" selected={selected} onSelect={setSelected} />
  <RadioButton name="option3" selected={selected} onSelect={setSelected} />
</YStack>
```

### With Labels
```tsx
<XStack alignItems="center" gap={8}>
  <RadioButton name="yes" selected={state} onSelect={setState} />
  <StyledText>Yes</StyledText>
</XStack>
```

## Props Overview

```tsx
<RadioButton
  // Required
  name="option1"                            // Unique identifier

  // State
  selected="option1"                        // Currently selected name
  onSelect={(name) => {}}                   // Selection handler
  disabled={false}                          // Disable interaction

  // Colors
  selectedColor={theme.colors.blue[500]}   // When selected
  unselectedColor={theme.colors.gray[50]}  // When unselected
  borderColor="#ccc"                        // Border color
  indicatorColor={theme.colors.white[500]} // Inner circle color

  // Size & Icon
  size={24}                                 // Width/height (default: 24)
  indicatorSize={10}                        // Inner circle size (default: 10)
  iconName="circle"                         // Icon name (default: 'circle')
  iconProps={{}}                            // Icon customization

  // Standard TouchableOpacityProps
  activeOpacity={0.7}
/>
```

## Common Patterns

### Simple Selection
```tsx
const [choice, setChoice] = useState('');

<YStack gap={8}>
  {['option1', 'option2', 'option3'].map(option => (
    <RadioButton
      key={option}
      name={option}
      selected={choice}
      onSelect={setChoice}
    />
  ))}
</YStack>
```

### With Custom Colors
```tsx
<RadioButton
  name="selected"
  selected={selected}
  onSelect={setSelected}
  selectedColor={theme.colors.green[500]}
  unselectedColor={theme.colors.gray[100]}
/>
```

### Different Sizes
```tsx
<RadioButton name="small" size={18} indicatorSize={8} />    // Small
<RadioButton name="default" size={24} indicatorSize={10} /> // Default
<RadioButton name="large" size={32} indicatorSize={14} />   // Large
```

### Disabled
```tsx
<RadioButton
  name="value"
  disabled={true}
  selected={selected}
  onSelect={setSelected}  // Won't be called
/>
```

### Custom Icon
```tsx
<RadioButton
  name="option"
  selected={selected}
  onSelect={setSelected}
  iconName="check_circle"
  indicatorSize={14}
/>
```

## Theme Colors

### For Selected State
```
blue[500]      // Default
green[500]     // Success
pink[500]      // Alert
red[500]       // Error
```

### For Unselected
```
gray[50]       // Light (default)
gray[100]      // Lighter
white[500]     // Pure white
```

### For Borders
```
gray[300]      // Light border (default)
gray[400]      // Medium
blue[300]      // Blue outline
```

### For Indicator
```
white[500]     // White (default)
gray[800]      // Dark gray
blue[500]      // Blue
```

## All Color Palettes
```
gray, red, blue, green, amber, pink, purple,
teal, cyan, indigo, violet, rose, orange, yellow, etc.
```

Each has: `[50, 100, 200, 300, 400, 500, 600, 700, 800, 900]`

## Radio Groups (Multiple Buttons)

```tsx
const options = [
  { name: 'option1', label: 'Option 1' },
  { name: 'option2', label: 'Option 2' },
  { name: 'option3', label: 'Option 3' },
];

const [selected, setSelected] = useState(options[0].name);

<YStack gap={8}>
  {options.map(option => (
    <XStack key={option.name} alignItems="center" gap={8}>
      <RadioButton
        name={option.name}
        selected={selected}
        onSelect={setSelected}
      />
      <StyledText>{option.label}</StyledText>
    </XStack>
  ))}
</YStack>
```

## Select from Array

```tsx
const [frequency, setFrequency] = useState('daily');

const frequencies = ['daily', 'weekly', 'monthly', 'yearly'];

<YStack gap={8}>
  {frequencies.map(freq => (
    <XStack key={freq} alignItems="center" gap={8}>
      <RadioButton
        name={freq}
        selected={frequency}
        onSelect={setFrequency}
      />
      <StyledText>{freq.charAt(0).toUpperCase() + freq.slice(1)}</StyledText>
    </XStack>
  ))}
</YStack>
```

## Boolean as Radio Group

```tsx
const [agree, setAgree] = useState(false);

<YStack gap={8}>
  <XStack alignItems="center" gap={8}>
    <RadioButton
      name="yes"
      selected={agree ? 'yes' : 'no'}
      onSelect={(value) => setAgree(value === 'yes')}
    />
    <StyledText>Yes</StyledText>
  </XStack>
  
  <XStack alignItems="center" gap={8}>
    <RadioButton
      name="no"
      selected={agree ? 'yes' : 'no'}
      onSelect={(value) => setAgree(value === 'yes')}
    />
    <StyledText>No</StyledText>
  </XStack>
</YStack>
```

## With Validation

```tsx
const [plan, setPlan] = useState('');
const [touched, setTouched] = useState(false);

const plans = ['basic', 'pro', 'enterprise'];
const hasError = touched && !plan;

<YStack>
  <YStack gap={8}>
    {plans.map(p => (
      <XStack key={p} alignItems="center" gap={8}>
        <RadioButton
          name={p}
          selected={plan}
          onSelect={(value) => {
            setPlan(value);
            setTouched(true);
          }}
          selectedColor={hasError ? theme.colors.red[500] : undefined}
        />
        <StyledText>{p.toUpperCase()}</StyledText>
      </XStack>
    ))}
  </YStack>
  
  {hasError && (
    <StyledText color={theme.colors.red[500]} fontSize={12} marginTop={4}>
      Please select a plan
    </StyledText>
  )}
</YStack>
```

## Dependent Fields

```tsx
const [category, setCategory] = useState('');
const [subcategory, setSubcategory] = useState('');

const subCategories = {
  electronics: ['phones', 'tablets', 'laptops'],
  clothing: ['mens', 'womens', 'kids'],
};

<YStack gap={16}>
  <YStack gap={8}>
    <StyledText fontWeight="600">Category:</StyledText>
    {['electronics', 'clothing'].map(cat => (
      <XStack key={cat} alignItems="center" gap={8}>
        <RadioButton
          name={cat}
          selected={category}
          onSelect={(value) => {
            setCategory(value);
            setSubcategory(''); // Reset subcategory
          }}
        />
        <StyledText>{cat}</StyledText>
      </XStack>
    ))}
  </YStack>

  {category && (
    <YStack gap={8}>
      <StyledText fontWeight="600">Subcategory:</StyledText>
      {subCategories[category as keyof typeof subCategories]?.map(subcat => (
        <XStack key={subcat} alignItems="center" gap={8}>
          <RadioButton
            name={subcat}
            selected={subcategory}
            onSelect={setSubcategory}
          />
          <StyledText>{subcat}</StyledText>
        </XStack>
      ))}
    </YStack>
  )}
</YStack>
```

## Conditional Display

```tsx
const [showExtra, setShowExtra] = useState('no');

<YStack gap={12}>
  <XStack alignItems="center" gap={8}>
    <RadioButton
      name="yes"
      selected={showExtra}
      onSelect={setShowExtra}
    />
    <StyledText>Show extra options</StyledText>
  </XStack>
  
  <XStack alignItems="center" gap={8}>
    <RadioButton
      name="no"
      selected={showExtra}
      onSelect={setShowExtra}
    />
    <StyledText>Hide extra options</StyledText>
  </XStack>

  {showExtra === 'yes' && (
    <YStack marginTop={12} paddingLeft={32}>
      {/* Extra options here */}
    </YStack>
  )}
</YStack>
```

## Complete Form

```tsx
import { useState } from 'react';
import { YStack, XStack } from '../stack';
import { RadioButton } from '../radioButton';
import { StyledText, StyledInput } from '../index';
import { theme } from '../theme';

export const PreferencesForm = () => {
  const [prefs, setPrefs] = useState({
    theme: 'light',
    notifications: 'email',
    frequency: 'daily',
  });

  const updatePref = (key: string, value: string) => {
    setPrefs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <YStack width="100%" padding={16} gap={20}>
      <YStack gap={8}>
        <StyledText fontWeight="600">Theme:</StyledText>
        {['light', 'dark', 'auto'].map(theme => (
          <XStack key={theme} alignItems="center" gap={8}>
            <RadioButton
              name={theme}
              selected={prefs.theme}
              onSelect={(value) => updatePref('theme', value)}
            />
            <StyledText>{theme.charAt(0).toUpperCase() + theme.slice(1)}</StyledText>
          </XStack>
        ))}
      </YStack>

      <YStack gap={8}>
        <StyledText fontWeight="600">Notifications:</StyledText>
        {['email', 'sms', 'push', 'none'].map(notif => (
          <XStack key={notif} alignItems="center" gap={8}>
            <RadioButton
              name={notif}
              selected={prefs.notifications}
              onSelect={(value) => updatePref('notifications', value)}
            />
            <StyledText>{notif.charAt(0).toUpperCase() + notif.slice(1)}</StyledText>
          </XStack>
        ))}
      </YStack>

      <YStack gap={8}>
        <StyledText fontWeight="600">Frequency:</StyledText>
        {['instant', 'daily', 'weekly', 'never'].map(freq => (
          <XStack key={freq} alignItems="center" gap={8}>
            <RadioButton
              name={freq}
              selected={prefs.frequency}
              onSelect={(value) => updatePref('frequency', value)}
            />
            <StyledText>{freq.charAt(0).toUpperCase() + freq.slice(1)}</StyledText>
          </XStack>
        ))}
      </YStack>
    </YStack>
  );
};
```

## Icon Names Available
```
circle             // Default indicator
check_circle       // Checkmark in circle
radio_button_on    // Native radio on
radio_button_off   // Native radio off
dot_circle        // Filled dot
```

Use with `iconName` prop.

## Ref Usage

```tsx
const radioRef = useRef<TouchableOpacity>(null);

<RadioButton
  ref={radioRef}
  name="option"
  selected={selected}
  onSelect={setSelected}
/>
```

## Styling with ViewStyle Variants

```tsx
<RadioButton
  name="option"
  selected={selected}
  onSelect={setSelected}
  marginRight={8}
  marginBottom={12}
  padding={4}
/>
```

---

**Last Updated**: RadioButton Migration  
**Version**: 1.0.0  
**Type Coverage**: 100%
