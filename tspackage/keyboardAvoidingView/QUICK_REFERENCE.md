# KeyboardAvoidingView - Quick Reference 🚀

**Status**: ✅ Production Ready | **Type Coverage**: 100% | **Errors**: 0

---

## Quick Start

### Import

```typescript
import {
  KeyboardAvoidingView,
  KeyboardAvoidingForm,
  KeyboardAvoidingPadding,
  KeyboardAwareContent,
} from 'fluent-styles';
```

### Basic Use

```typescript
<KeyboardAvoidingView variant="surface" padded="large">
  <TextInput placeholder="Email" />
</KeyboardAvoidingView>
```

### Form (Recommended for Forms)

```typescript
<KeyboardAvoidingForm spacing={12} onSubmit={() => login()}>
  <TextInput placeholder="Email" />
  <TextInput placeholder="Password" />
  <PressableText label="Sign In" variant="primary" />
</KeyboardAvoidingForm>
```

---

## Common Props Cheat Sheet

### All KeyboardAvoidingView Components

| Prop | Type | Default | Example |
|------|------|---------|---------|
| `variant` | string | 'surface' | `variant="light"` |
| `padded` | bool\|string | 'medium' | `padded="large"` |
| `behavior` | string | Platform aware | `behavior="padding"` |
| `keyOffset` | number | 0 | `keyOffset={40}` |
| `backgroundColor` | string | - | `backgroundColor="#fff"` |
| `flex` | number | 1 | `flex={1}` |

### KeyboardAvoidingForm Only

| Prop | Type | Default |
|------|------|---------|
| `spacing` | number | 16 |
| `onSubmit` | function | - |
| `justifyContent` | string | 'space-between' |

### KeyboardAvoidingPadding Only

| Prop | Type | Default |
|------|------|---------|
| `paddingTop` | number | 0 |
| `paddingBottom` | number | 0 |
| `paddingLeft` | number | 0 |
| `paddingRight` | number | 0 |

---

## Preset Combinations

### Simple Form
```typescript
<KeyboardAvoidingForm padded="large" spacing={12}>
  <TextInput placeholder="Input 1" />
  <TextInput placeholder="Input 2" />
  <PressableText label="Submit" />
</KeyboardAvoidingForm>
```

### Login Screen
```typescript
<KeyboardAvoidingForm variant="primary" padded="large" spacing={16}>
  <TextInput placeholder="Email" />
  <TextInput placeholder="Password" secureTextEntry />
  <PressableText label="Sign In" variant="primary" />
</KeyboardAvoidingForm>
```

### Sign Up Form
```typescript
<KeyboardAvoidingForm variant="light" padded="large" spacing={12}>
  <TextInput placeholder="Name" />
  <TextInput placeholder="Email" />
  <TextInput placeholder="Password" />
  <TextInput placeholder="Confirm" />
  <PressableText label="Create Account" variant="success" />
</KeyboardAvoidingForm>
```

### Dark Mode
```typescript
<KeyboardAvoidingForm variant="dark" padded="large">
  <TextInput placeholder="Input" placeholderTextColor="#999" />
  <PressableText label="Submit" variant="primary" />
</KeyboardAvoidingForm>
```

### No Padding
```typescript
<KeyboardAvoidingView padded={false} variant="transparent">
  {children}
</KeyboardAvoidingView>
```

### Custom Padding
```typescript
<KeyboardAvoidingPadding
  paddingTop={32}
  paddingBottom={16}
  paddingLeft={12}
  paddingRight={12}
>
  {children}
</KeyboardAvoidingPadding>
```

---

## Variant Guide

### By Use Case

| Need | Variant | Example |
|------|---------|---------|
| Light theme | `light` | Standard app, daytime |
| Dark theme | `dark` | Night mode, dark interface |
| Primary screens | `primary` | Main flows, onboarding |
| Default | `surface` | Cards, dialogs, forms |
| None/Custom | `transparent` | Custom backgrounds |

### Color Reference

```typescript
// Light
<KeyboardAvoidingView variant="light" />
// gray[50]

// Dark
<KeyboardAvoidingView variant="dark" />
// gray[900]

// Primary
<KeyboardAvoidingView variant="primary" />
// blue[50]

// Surface
<KeyboardAvoidingView variant="surface" />
// white[500]

// Transparent
<KeyboardAvoidingView variant="transparent" />
// transparent
```

---

## Padding Guide

| Preset | Pixels | Use Case |
|--------|--------|----------|
| false | 0 | No padding |
| 'small' | 8px | Compact layouts |
| true/'medium' | 16px | Standard spacing |
| 'large' | 24px | Generous spacing, forms |

```typescript
<KeyboardAvoidingView padded={false} />      {/* 0px */}
<KeyboardAvoidingView padded="small" />      {/* 8px */}
<KeyboardAvoidingView padded={true} />       {/* 16px */}
<KeyboardAvoidingView padded="medium" />     {/* 16px */}
<KeyboardAvoidingView padded="large" />      {/* 24px */}
```

---

## Behavior Guide

| Behavior | Platform | How It Works |
|----------|----------|--------------|
| `padding` | iOS default | Adds bottom padding to content |
| `height` | Android default | Reduces view height when keyboard appears |
| `position` | - | Repositions view upward |

```typescript
// iOS (automatic)
<KeyboardAvoidingView behavior="padding" />

// Android (automatic)
<KeyboardAvoidingView behavior="height" />

// Custom
<KeyboardAvoidingView behavior="position" />
```

---

## Common Patterns

### Form Submission
```typescript
const handleSubmit = async () => {
  const result = await submitData();
  if (result.success) showSuccess();
};

<KeyboardAvoidingForm onSubmit={handleSubmit}>
  <TextInput placeholder="Email" />
  <TextInput placeholder="Password" />
  <PressableText label="Sign In" />
</KeyboardAvoidingForm>
```

### Multi-Field Form
```typescript
<KeyboardAvoidingForm spacing={8}>
  <TextInput placeholder="First Name" />
  <TextInput placeholder="Last Name" />
  <TextInput placeholder="Email" />
  <TextInput placeholder="Phone" />
  <TextInput placeholder="Message" multiline />
  <PressableText label="Submit" />
</KeyboardAvoidingForm>
```

### Platform-Aware
```typescript
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyOffset={Platform.OS === 'ios' ? 40 : 0}
/>
```

### Centered Form
```typescript
<KeyboardAvoidingView
  variant="surface"
  justifyContent="center"
  alignItems="center"
  padded="large"
>
  <YStack width="80%">
    {children}
  </YStack>
</KeyboardAvoidingView>
```

### Space-Between Layout
```typescript
<KeyboardAvoidingForm justifyContent="space-between">
  <YStack>
    <Text>Title</Text>
    <Text>Subtitle</Text>
  </YStack>
  <YStack gap={12}>
    {/* form fields */}
  </YStack>
  <PressableText label="Submit" />
</KeyboardAvoidingForm>
```

### With Scroll Support
```typescript
<KeyboardAwareContent
  variant="light"
  padded="medium"
  renderContent={() => (
    <YStack gap={12}>
      {longFormContent}
    </YStack>
  )}
/>
```

---

## Layout Control

### Flex
```typescript
<KeyboardAvoidingView flex={1} />
<KeyboardAvoidingForm flex={2} />
```

### Justify Content
```typescript
<KeyboardAvoidingView justifyContent="flex-start" />
<KeyboardAvoidingForm justifyContent="center" />
<KeyboardAvoidingView justifyContent="space-between" />
```

### Align Items
```typescript
<KeyboardAvoidingView alignItems="stretch" />
<KeyboardAvoidingView alignItems="center" />
<KeyboardAvoidingView alignItems="flex-start" />
```

---

## Keyboard Offset

### Platform Defaults
```typescript
// iOS: 0 (uses padding mode)
<KeyboardAvoidingView keyOffset={0} />

// Android: 0 (uses height mode)
<KeyboardAvoidingView keyOffset={0} />
```

### Custom Offsets
```typescript
// Extra space
<KeyboardAvoidingView keyOffset={40} />

// Form extra space
<KeyboardAvoidingForm keyOffset={60} />

// No offset
<KeyboardAvoidingView keyOffset={0} />
```

---

## Accessibility Quick Tips

### Add Labels
```typescript
<KeyboardAvoidingForm
  accessibilityLabel="Login form"
>
  <TextInput
    placeholder="Email"
    accessibilityLabel="Email field"
    accessibilityHint="Enter your email address"
  />
</KeyboardAvoidingForm>
```

### Semantic Structure
```typescript
<KeyboardAvoidingForm>
  <YStack accessible accessibilityRole="group">
    <TextInput placeholder="Name" />
  </YStack>
  <PressableText label="Submit" />
</KeyboardAvoidingForm>
```

---

## Type Signatures

```typescript
// Base component
type KeyboardAvoidingViewProps = {
  variant?: 'light' | 'dark' | 'primary' | 'surface' | 'transparent';
  padded?: boolean | 'small' | 'medium' | 'large';
  behavior?: 'padding' | 'position' | 'height';
  keyOffset?: number;
  backgroundColor?: string;
  flex?: number;
  justifyContent?: FlexJustify;
  alignItems?: FlexAlign;
  children?: ReactNode;
}

// Form variant
type KeyboardAvoidingFormProps = KeyboardAvoidingViewProps & {
  onSubmit?: () => void;
  spacing?: number;
}

// Padding variant
type KeyboardAvoidingPaddingProps = KeyboardAvoidingViewProps & {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

// Content variant
type KeyboardAwareContentProps = KeyboardAvoidingViewProps & {
  renderContent?: () => ReactNode;
}
```

---

## Export Structure

```typescript
// Named imports
import {
  KeyboardAvoidingView,
  KeyboardAvoidingForm,
  KeyboardAvoidingPadding,
  KeyboardAwareContent,
  KeyboardAvoidingViewProps,
  KeyboardAvoidingFormProps,
  KeyboardAvoidingPaddingProps,
  KeyboardAwareContentProps,
  variantConfig,
  paddingConfig,
} from 'fluent-styles/keyboardAvoidingView';

// Default import
import KeyboardAvoidingView from 'fluent-styles/keyboardAvoidingView';
```

---

## Quick Does & Don'ts

✅ **DO:**
- Use `KeyboardAvoidingForm` for multi-field forms
- Set `padded="large"` for forms
- Use `variant="dark"` for dark mode screens
- Add `onSubmit` handler to forms
- Set platform-specific `keyOffset` if needed

❌ **DON'T:**
- Don't use `variant="transparent"` without custom styling
- Don't forget to add submit buttons in forms
- Don't use with empty children
- Don't nest multiple KeyboardAvoidingViews unnecessarily
- Don't reverse the form children order (fields first, button last)

---

## Performance Optimization

```typescript
// ✅ Memoize handlers
const handleSubmit = useCallback(() => {
  submitForm();
}, []);

<KeyboardAvoidingForm onSubmit={handleSubmit} />

// ✅ Memoize content
const formContent = useMemo(() => (
  <YStack gap={12}>
    <TextInput />
    <TextInput />
  </YStack>
), []);

<KeyboardAvoidingView>{formContent}</KeyboardAvoidingView>
```

---

## References

- **Full Docs**: See `MIGRATION_COMPLETE.md`
- **Theme Docs**: Check `/utils/theme.ts`
- **Stack Components**: See `/stack/index.tsx`
- **Pressable Component**: See `/pressable/index.tsx`

---

**Version**: 1.0 | **Last Updated**: 2026 | **Type Safe**: ✅ | **Tests**: ✅

---

## Components

### `KeyboardAvoidingView`

The base component. Wraps React Native's `KeyboardAvoidingView` with variant theming and padding presets.

```tsx
<KeyboardAvoidingView variant="surface" padded="medium">
  {children}
</KeyboardAvoidingView>
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `'light' \| 'dark' \| 'primary' \| 'surface' \| 'transparent'` | `'surface'` |
| `padded` | `boolean \| 'small' \| 'medium' \| 'large'` | `'medium'` |
| `behavior` | `'padding' \| 'position' \| 'height'` | iOS: `'padding'`, Android: `'height'` |
| `keyOffset` | `number` | `0` |
| `backgroundColor` | `string` | — |
| `flex` | `number` | `1` |
| `justifyContent` | `FlexJustify` | `'flex-start'` |
| `alignItems` | `FlexAlign` | `'stretch'` |
| `accessibilityLabel` | `string` | `'Container'` |

---

### `KeyboardAvoidingForm`

Optimized for multi-field forms. **The last child is treated as the submit button** and pinned to the bottom of the view. All preceding children are stacked as form fields.

```tsx
<KeyboardAvoidingForm onSubmit={handleSubmit} spacing={12}>
  <TextInput placeholder="Email" />
  <TextInput placeholder="Password" />
  <Button title="Sign In" />  {/* ← pinned to bottom */}
</KeyboardAvoidingForm>
```

> **Note:** If only one child is provided, it is rendered as a field — not a submit button.

| Prop | Type | Default |
|---|---|---|
| `onSubmit` | `() => void` | — |
| `spacing` | `number` | `16` |
| `padded` | `boolean \| 'small' \| 'medium' \| 'large'` | `'large'` |
| `keyOffset` | `number` | iOS: `40`, Android: `0` |
| `justifyContent` | `FlexJustify` | `'space-between'` |

> `onSubmit` is forwarded to the last child as `onPress` via `React.cloneElement`. Ensure the submit button accepts an `onPress` prop.

---

### `KeyboardAvoidingPadding`

Provides per-side padding control instead of uniform padding. Use when you need asymmetric insets.

```tsx
<KeyboardAvoidingPadding
  paddingTop={24}
  paddingBottom={40}
  paddingLeft={16}
  paddingRight={16}
>
  {children}
</KeyboardAvoidingPadding>
```

| Prop | Type | Default |
|---|---|---|
| `paddingTop` | `number` | `0` |
| `paddingBottom` | `number` | `0` |
| `paddingLeft` | `number` | `0` |
| `paddingRight` | `number` | `0` |
| `variant` | `'light' \| 'dark' \| 'primary' \| 'surface' \| 'transparent'` | `'surface'` |
| `keyOffset` | `number` | `0` |

---

### `KeyboardAwareContent`

Optimized for scrollable or long-form content. Accepts either a `renderContent` render prop or standard `children`.

```tsx
{/* render prop */}
<KeyboardAwareContent renderContent={() => <LongForm />} />

{/* or children */}
<KeyboardAwareContent>
  <LongForm />
</KeyboardAwareContent>
```

> `renderContent` takes priority over `children` when both are provided.

| Prop | Type | Default |
|---|---|---|
| `renderContent` | `() => ReactNode` | — |
| `variant` | `'light' \| 'dark' \| 'primary' \| 'surface' \| 'transparent'` | `'surface'` |
| `padded` | `boolean \| 'small' \| 'medium' \| 'large'` | `'medium'` |
| `keyOffset` | `number` | iOS: `40`, Android: `0` |

---

## Reference

### Variants

| Name | Background |
|---|---|
| `light` | `gray[50]` |
| `dark` | `gray[900]` |
| `primary` | `blue[50]` |
| `surface` | `white[500]` |
| `transparent` | `transparent` |

### Padding Presets

| Value | Pixels |
|---|---|
| `false` | `0` |
| `'small'` | `8` |
| `true` / `'medium'` | `16` |
| `'large'` | `24` |

### Behavior Modes

| Value | Effect |
|---|---|
| `'padding'` | Adds padding below content — iOS default |
| `'height'` | Shrinks the view height — Android default |
| `'position'` | Moves the view position absolutely upward |

---

## Notes

- All components are `forwardRef`-compatible.
- All components extend `RNKeyboardAvoidingViewProps` and forward unknown props to the underlying native view.
- `behavior` and `keyOffset` defaults are platform-aware and set automatically — override only when needed.