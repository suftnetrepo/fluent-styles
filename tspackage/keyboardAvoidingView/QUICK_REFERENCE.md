# KeyboardAvoidingView

A set of React Native components that handle keyboard avoidance with built-in theming, padding presets, and platform-aware defaults.

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