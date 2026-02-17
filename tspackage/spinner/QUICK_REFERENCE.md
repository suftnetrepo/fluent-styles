# Spinner - Quick Reference

## Quick Start

```tsx
import { Spinner, SpinnerContainer, InlineSpinner } from '@fluent/spinner';
import { useState } from 'react';

const ExampleScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <YStack flex={1}>
      {/* Basic Spinner */}
      <Spinner size="medium" variant="primary" />

      {/* Full-screen Loading */}
      <SpinnerContainer
        isVisible={isLoading}
        message="Loading..."
        variant="primary"
      />

      {/* Button Loading State */}
      <InlineSpinner size="small" text="Submitting..." />
    </YStack>
  );
};
```

## Size Variants

```tsx
<Spinner size="small" variant="primary" />
<Spinner size="medium" variant="primary" />     {/* Default */}
<Spinner size="large" variant="primary" />
<Spinner size={40} variant="primary" />         {/* Custom */}
```

## Color Variants

```tsx
<Spinner variant="default" />       {/* Gray */}
<Spinner variant="primary" />       {/* Blue */}
<Spinner variant="success" />       {/* Green */}
<Spinner variant="warning" />       {/* Amber */}
<Spinner variant="danger" />        {/* Red */}
```

## Common Patterns

### Pattern 1: Basic Loading
```tsx
const [isLoading, setIsLoading] = useState(false);

<Spinner
  size="medium"
  variant="primary"
/>
```

### Pattern 2: Loading with Label
```tsx
<Spinner
  size="medium"
  variant="primary"
  label="Loading..."
  labelSize={14}
/>
```

### Pattern 3: Full-Screen Loading
```tsx
const [isLoading, setIsLoading] = useState(true);

<SpinnerContainer
  isVisible={isLoading}
  size="large"
  variant="primary"
  message="Fetching data..."
/>
```

### Pattern 4: Dismissible Loading
```tsx
<SpinnerContainer
  isVisible={isLoading}
  message="Loading... (tap to cancel)"
  onBackdropPress={() => setIsLoading(false)}
/>
```

### Pattern 5: Button Loading State
```tsx
const [isSubmitting, setIsSubmitting] = useState(false);

<YStack>
  {isSubmitting ? (
    <InlineSpinner size="small" text="Submitting..." />
  ) : (
    <StyledText>Click to Submit</StyledText>
  )}
</YStack>
```

### Pattern 6: Inline Row Loading
```tsx
<InlineSpinner
  size="small"
  variant="primary"
  text="Processing..."
  direction="row"
  gap={8}
/>
```

### Pattern 7: Overlay Mode
```tsx
<Spinner
  size="large"
  variant="primary"
  label="Loading..."
  overlay={true}
/>
```

### Pattern 8: Custom Color
```tsx
<Spinner
  size="medium"
  color="#FF6B6B"
  label="Custom loading..."
/>
```

## Component Comparison

| Component | Use Case | Example |
|-----------|----------|---------|
| **Spinner** | Basic loading indicator | Data fetching |
| **SpinnerContainer** | Full-screen overlay | Page transitions |
| **InlineSpinner** | Compact, inline loading | Button states |

## Props Cheat Sheet

### Universal Props
```tsx
<Spinner
  size="medium"                       // 'small' | 'medium' | 'large' | number
  variant="primary"                   // 'default' | 'primary' | 'success' | 'warning' | 'danger'
  color="#FF0000"                     // Custom color override
  label="Loading..."                  // Loading label
  labelColor={theme.colors.gray[600]} // Label color
  labelSize={14}                      // Label font size
/>
```

### Spinner-Specific Props
```tsx
<Spinner
  overlay={false}                     // Enable overlay mode
  overlayColor="rgba(0,0,0,0.3)"     // Overlay background
  accessibilityLabel="Loading"        // A11y label
/>
```

### SpinnerContainer-Specific Props
```tsx
<SpinnerContainer
  isVisible={true}                    // Show/hide
  message="Loading..."                // Loading message
  backdropColor="rgba(0,0,0,0.5)"    // Backdrop color
  onBackdropPress={() => {}}          // Tap to dismiss
/>
```

### InlineSpinner-Specific Props
```tsx
<InlineSpinner
  text="Processing..."                // Loading text
  direction="row"                     // 'row' | 'column'
  gap={8}                             // Space between items
/>
```

## Theme Colors Used

```
variant="default"   → gray[400]
variant="primary"   → blue[500]
variant="success"   → green[500]
variant="warning"   → amber[500]
variant="danger"    → red[500]
```

## Real-World Examples

### Example 1: Data Fetch Screen
```tsx
const DataScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <YStack flex={1}>
      <SpinnerContainer
        isVisible={isLoading}
        message="Fetching your data..."
      />
      {data && <DataList data={data} />}
    </YStack>
  );
};
```

### Example 2: Form Submission
```tsx
const FormScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <XStack gap={12}>
      {isSubmitting && (
        <InlineSpinner size="small" text="Submitting..." />
      )}
      <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting}>
        <StyledText>Submit</StyledText>
      </TouchableOpacity>
    </XStack>
  );
};
```

### Example 3: Network Request with Timeout
```tsx
const FileDownload = () => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadFile();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <YStack>
      <SpinnerContainer
        isVisible={downloading}
        message={`Downloading... ${progress}%`}
        variant="primary"
      />
      <TouchableOpacity onPress={handleDownload}>
        <StyledText>Download File</StyledText>
      </TouchableOpacity>
    </YStack>
  );
};
```

### Example 4: Multi-Step Loading
```tsx
const MultiStepScreen = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const steps = ['Loading', 'Processing', 'Finalizing'];

  return (
    <YStack flex={1} justifyContent="center">
      <SpinnerContainer
        isVisible={loading}
        message={steps[step]}
        variant="primary"
      />
    </YStack>
  );
};
```

## Export List

```tsx
export {
  Spinner,              // Base component
  SpinnerContainer,     // Full-screen overlay
  InlineSpinner,        // Compact inline
  SpinnerProps,         // Type definitions
  SpinnerContainerProps,
  InlineSpinnerProps,
  sizeConfig,           // Size specifications
  variantConfig,        // Color specifications
};
```

## Accessibility

All components support accessibility:

```tsx
<Spinner
  accessibilityLabel="Loading content"
  accessible={true}
/>

<SpinnerContainer
  isVisible={true}
  message="Please wait while we load your data"
/>
```

## Size Presets

```
small:  30
medium: 50 (default)
large:  80
custom: any number
```

## Notes

- ✅ 100% TypeScript
- ✅ forwardRef support on all components
- ✅ Theme-integrated colors
- ✅ Smooth animations via ActivityIndicator
- ✅ Accessibility support
- ✅ Z-index handling for overlays
- ✅ Dismissible via backdrop press
