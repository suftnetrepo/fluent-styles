# CheckBox Component - Quick Reference

## Quick Start

### Basic Checkbox
```tsx
const [checked, setChecked] = useState(false);

<CheckBox
  checked={checked}
  onCheck={setChecked}
/>
```

### With Label
```tsx
<XStack alignItems="center" gap={8}>
  <CheckBox checked={state} onCheck={setState} />
  <StyledText>Label text</StyledText>
</XStack>
```

## Props Overview

```tsx
<CheckBox
  // State
  checked={false}                           // Current state
  onCheck={(checked) => {}}                 // Change handler
  disabled={false}                          // Disable interaction
  
  // Colors
  checkedColor={theme.colors.blue[500]}    // When checked
  uncheckedColor={theme.colors.gray[50]}   // When unchecked
  borderColor="#ccc"                        // Border color
  checkMarkColor={theme.colors.white[500]} // Icon color
  
  // Size & Icon
  size={24}                                 // Width/height (default: 24)
  iconName="check"                          // Icon name (default: 'check')
  iconSize={18}                             // Icon size (default: 18)
  iconProps={{}}                            // Icon customization
  
  // Standard TouchableOpacityProps
  activeOpacity={0.7}
  onPress={() => {}}                        // For ref interaction
/>
```

## Common Patterns

### Simple Toggle
```tsx
<CheckBox
  checked={enabled}
  onCheck={setEnabled}
/>
```

### With Custom Colors
```tsx
<CheckBox
  checked={selected}
  onCheck={setSelected}
  checkedColor={theme.colors.green[500]}
  uncheckedColor={theme.colors.gray[100]}
/>
```

### Different Sizes
```tsx
<CheckBox size={20} />    // Small
<CheckBox size={24} />    // Default
<CheckBox size={32} />    // Large
```

### Disabled
```tsx
<CheckBox
  checked={value}
  disabled={true}
  onCheck={setValue}    // Won't be called
/>
```

### Custom Icon
```tsx
<CheckBox
  checked={state}
  onCheck={setState}
  iconName="done"
  iconSize={20}
/>
```

## Theme Colors

### For Checked State
```
blue[500]      // Default
green[500]     // Success
pink[500]      // Alert
red[500]       // Error
```

### For Unchecked
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

### For Checkmark
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

## Multiple Checkboxes

```tsx
const [checkboxes, setCheckboxes] = useState({
  option1: false,
  option2: false,
  option3: false,
});

const toggleCheckbox = (key: string) => {
  setCheckboxes(prev => ({ ...prev, [key]: !prev[key] }));
};

{Object.entries(checkboxes).map(([key, value]) => (
  <XStack key={key} gap={8} alignItems="center">
    <CheckBox
      checked={value}
      onCheck={() => toggleCheckbox(key)}
    />
    <StyledText>{key}</StyledText>
  </XStack>
))}
```

## Select All Pattern

```tsx
const [items, setItems] = useState({
  a: false,
  b: false,
  c: false,
});

const allChecked = Object.values(items).every(v => v);
const someChecked = Object.values(items).some(v => v);

const handleSelectAll = () => {
  const newState = Object.keys(items).reduce(
    (acc, key) => ({ ...acc, [key]: !allChecked }),
    {}
  );
  setItems(newState);
};

<YStack gap={8}>
  <CheckBox
    checked={allChecked}
    onCheck={handleSelectAll}
    checkedColor={someChecked ? theme.colors.amber[500] : undefined}
  />
  
  {Object.entries(items).map(([key, value]) => (
    <CheckBox
      key={key}
      checked={value}
      onCheck={(val) =>
        setItems(prev => ({ ...prev, [key]: val }))
      }
    />
  ))}
</YStack>
```

## With Animations

```tsx
import { Animated } from 'react-native';

const [checked, setChecked] = useState(false);
const scaleAnim = useRef(new Animated.Value(1)).current;

const handleCheck = (value: boolean) => {
  setChecked(value);
  Animated.sequence([
    Animated.timing(scaleAnim, {
      toValue: 0.8,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }),
  ]).start();
};

<Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
  <CheckBox
    checked={checked}
    onCheck={handleCheck}
  />
</Animated.View>
```

## Validation Example

```tsx
const [agree, setAgree] = useState(false);
const [touched, setTouched] = useState(false);

const hasError = touched && !agree;

<YStack>
  <XStack gap={8} alignItems="center">
    <CheckBox
      checked={agree}
      onCheck={setAgree}
      checkedColor={hasError ? theme.colors.red[500] : undefined}
      borderColor={hasError ? theme.colors.red[500] : undefined}
    />
    <StyledText>I agree</StyledText>
  </XStack>
  
  {hasError && (
    <StyledText color={theme.colors.red[500]} fontSize={12}>
      This field is required
    </StyledText>
  )}
</YStack>
```

## Ref Usage

```tsx
const checkboxRef = useRef<TouchableOpacity>(null);

<CheckBox ref={checkboxRef} checked={state} onCheck={setState} />

// Access native methods:
checkboxRef.current?.setNativeProps({ opacity: 0.5 });
```

## Styling with ViewStyle Variants

```tsx
<CheckBox
  checked={state}
  onCheck={setState}
  marginRight={8}
  paddingTop={4}
  marginBottom={12}
/>
```

## Complete Form Example

```tsx
import { useState } from 'react';
import { YStack, XStack } from '../stack';
import { CheckBox } from '../checkBox';
import { StyledText, StyledInput } from '../index';
import { theme } from '../theme';

export const SubscriptionForm = () => {
  const [form, setForm] = useState({
    email: '',
    monthly: true,
    updates: false,
  });

  return (
    <YStack width="100%" padding={16} gap={12}>
      <StyledInput
        label="Email"
        placeholder="your@email.com"
        value={form.email}
        onChangeText={(email) => setForm(prev => ({ ...prev, email }))}
      />

      <XStack alignItems="center" gap={8} marginTop={8}>
        <CheckBox
          checked={form.monthly}
          onCheck={(monthly) => setForm(prev => ({ ...prev, monthly }))}
          checkedColor={theme.colors.green[500]}
        />
        <StyledText>Monthly plan</StyledText>
      </XStack>

      <XStack alignItems="center" gap={8}>
        <CheckBox
          checked={form.updates}
          onCheck={(updates) => setForm(prev => ({ ...prev, updates }))}
        />
        <StyledText>Receive updates</StyledText>
      </XStack>
    </YStack>
  );
};
```

## Icon Names Available
```
check              // Default checkmark
done               // Alternative checkmark
done_all           // Double check
check_circle       // Circle with check
verified           // Verified badge
favorite           // Heart/star
```

Use with `iconName` prop.

---

**Last Updated**: CheckBox Migration  
**Version**: 1.0.0  
**Type Coverage**: 100%
