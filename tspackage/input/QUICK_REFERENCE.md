# Form Component - Quick Reference

## Quick Start

### Single-Line Input
```tsx
<StyledInput
  label="Email"
  placeholder="user@example.com"
  value={email}
  onChangeText={setEmail}
/>
```

### Multi-Line Input
```tsx
<StyledMultiInput
  label="Comments"
  placeholder="Your feedback..."
  numberOfLines={5}
  value={comments}
  onChangeText={setComments}
/>
```

## Props Overview

### StyledInput
```tsx
<StyledInput
  // Main functionality
  label="Label Text"                    // Optional label above input
  placeholder="Placeholder text"        // TextInput placeholder
  value={state}                         // Controlled input
  onChangeText={setText}                // Change handler
  
  // Error handling
  error={hasError}                      // Show error state
  errorMessage="Error message here"     // Error text
  
  // Styling
  borderColor={theme.colors.gray[200]}  // Border color
  
  // Props overrides
  labelProps={{}}                       // Override label style
  errorProps={{}}                       // Override error style
  containerProps={{}}                   // Override container style
  
  // Standard TextInput props
  editable={true}                       // Disable input
  keyboardType="default"                // Keyboard type
  secureTextEntry={false}               // Password mask
/>
```

### StyledMultiInput
```tsx
<StyledMultiInput
  // Same as StyledInput, plus:
  numberOfLines={5}                     // Default line count
/>
```

### Variants

Apply to `<StyledInputText>`:

```tsx
<StyledInputText
  fontWeight="600"                      // Font weight
  color={theme.colors.gray[800]}        // Text color
  fontSize={16}                         // Font size
  textAlign="left"                      // Alignment
  fontFamily="Roboto"                   // Custom font
  borderColor={theme.colors.blue[500]}  // Border color
  borderRadius={8}                      // Corner radius
  backgroundColor={theme.colors.white[500]}  // Background
  noBorder={false}                      // Remove border
/>
```

## Common Patterns

### Email with Validation
```tsx
<StyledInput
  label="Email"
  keyboardType="email-address"
  value={email}
  onChangeText={setEmail}
  error={submitted && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
  errorMessage="Invalid email address"
/>
```

### Password Input
```tsx
<StyledInput
  label="Password"
  placeholder="Enter password"
  secureTextEntry={true}
  value={password}
  onChangeText={setPassword}
  error={submitted && password.length < 8}
  errorMessage="Password must be at least 8 characters"
/>
```

### Disabled Field
```tsx
<StyledInput
  label="Read-only field"
  value="Cannot edit"
  editable={false}
/>
```

### Phone Number
```tsx
<StyledInput
  label="Phone"
  keyboardType="phone-pad"
  placeholder="(555) 123-4567"
  value={phone}
  onChangeText={setPhone}
/>
```

### Search Input
```tsx
<StyledInput
  placeholder="Search..."
  borderRadius={24}
  backgroundColor={theme.colors.gray[100]}
  value={search}
  onChangeText={setSearch}
/>
```

## Theme Colors - Quick Lookup

### For Error States
```tsx
borderColor={theme.colors.red[500]}     // Error border
errorMessage    // Uses red[500] by default
```

### For Normal States
```tsx
borderColor={theme.colors.gray[200]}    // Default border
color={theme.colors.gray[800]}          // Default text
backgroundColor={theme.colors.gray[50]} // Default background
```

### Optional States
```tsx
borderColor={theme.colors.blue[500]}    // Focus state
borderColor={theme.colors.green[500]}   // Success state
```

## All Color Palettes Available
```
gray, red, blue, green, amber, pink, purple, 
teal, cyan, indigo, violet, rose, orange, yellow, etc.
```

Each palette has: `[50, 100, 200, 300, 400, 500, 600, 700, 800, 900]`

## Font Sizes Available
```
micro(12), small(14), medium(16), normal(18), large(20),
xlarge(22), xxlarge(26), xxxlarge(30), splash(40)
```

## Font Weights Available
```
100(thin), 200(extraLight), 300(light), 400(normal),
500(medium), 600(semiBold), 700(bold), 800(extraBold), 900(black)
```

## Text Alignment Options
```
"auto" | "left" | "right" | "center" | "justify"
```

## Keyboard Types
```
"default"          // Standard keyboard
"email-address"    // Email keyboard
"numeric"          // Numbers only
"phone-pad"        // Phone keyboard
"decimal-pad"      // Decimal numbers
"url"              // URL keyboard
```

## Ref Usage

```tsx
const inputRef = React.useRef<TextInput>(null);

<StyledInput
  ref={inputRef}
  placeholder="Focus me"
/>

// In code:
inputRef.current?.focus();
inputRef.current?.blur();
inputRef.current?.clear();
```

## Error Handling Pattern

```tsx
const [formData, setFormData] = React.useState({
  email: '',
  password: '',
  errors: {}
});
const [submitted, setSubmitted] = React.useState(false);

const validate = () => {
  const errors = {};
  if (!formData.email) errors.email = 'Email required';
  if (formData.password.length < 8) errors.password = 'Min 8 chars';
  setFormData(prev => ({ ...prev, errors }));
  return Object.keys(errors).length === 0;
};

<StyledInput
  label="Email"
  value={formData.email}
  onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
  error={submitted && !!formData.errors.email}
  errorMessage={formData.errors.email}
/>
```

## Complete Form Example

```tsx
import React, { useState } from 'react';
import { YStack } from '../stack';
import { StyledInput, StyledMultiInput } from '../form';
import { StyledSpacer } from '../spacer';
import { theme } from '../theme';

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (validate()) {
      console.log('Form valid:', form);
      // Submit form
    }
  };

  return (
    <YStack width="100%" padding={16}>
      <StyledInput
        label="Full Name"
        placeholder="John Doe"
        value={form.name}
        onChangeText={(name) => setForm(prev => ({ ...prev, name }))}
        error={submitted && !!errors.name}
        errorMessage={errors.name}
      />
      
      <StyledSpacer marginVertical={8} />
      
      <StyledInput
        label="Email"
        keyboardType="email-address"
        placeholder="john@example.com"
        value={form.email}
        onChangeText={(email) => setForm(prev => ({ ...prev, email }))}
        error={submitted && !!errors.email}
        errorMessage={errors.email}
      />
      
      <StyledSpacer marginVertical={8} />
      
      <StyledMultiInput
        label="Message"
        placeholder="Your message here..."
        numberOfLines={5}
        value={form.message}
        onChangeText={(message) => setForm(prev => ({ ...prev, message }))}
        error={submitted && !!errors.message}
        errorMessage={errors.message}
      />
    </YStack>
  );
};
```

## Component Hierarchy

```
StyledInput (wrapper)
├── YStack (label container)
│   └── StyledText (label)
├── YStack (input container)
│   └── StyledInputText (actual TextInput)
└── YStack (error container)
    └── StyledText (error message)

StyledMultiInput
├── YStack (label container)
│   └── StyledText (label)
├── StyledInputText (multiline TextInput)
└── StyledText (error message)
```

---

**Last Updated**: Create Form Migration  
**Version**: 1.0.0  
**Type Coverage**: 100%
