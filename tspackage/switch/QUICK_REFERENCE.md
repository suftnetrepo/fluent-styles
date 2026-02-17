# Switch - Quick Reference

## Quick Start

```tsx
import { Switch, SwitchRow, GroupedSwitch } from '@fluent/switch';
import { useState } from 'react';

const ExampleScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      {/* Basic Switch */}
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
      />

      {/* Switch with Label */}
      <SwitchRow
        label="Enable Notifications"
        value={isEnabled}
        onValueChange={setIsEnabled}
      />
    </View>
  );
};
```

## Size Variants

```tsx
<Switch size="small" value={true} />
<Switch size="medium" value={true} />      {/* Default */}
<Switch size="large" value={true} />
```

## Color Variants

```tsx
<Switch variant="default" value={true} />     {/* Gray */}
<Switch variant="primary" value={true} />     {/* Blue */}
<Switch variant="success" value={true} />     {/* Green */}
<Switch variant="warning" value={true} />     {/* Amber */}
<Switch variant="danger" value={true} />      {/* Red */}
```

## Common Patterns

### Pattern 1: Simple Toggle
```tsx
const [isEnabled, setIsEnabled] = useState(false);

<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  variant="primary"
/>
```

### Pattern 2: Settings Item
```tsx
<SwitchRow
  label="Dark Mode"
  description="Enable dark theme"
  value={darkMode}
  onValueChange={setDarkMode}
  variant="primary"
/>
```

### Pattern 3: Multiple Related Settings
```tsx
const [preferences, setPreferences] = useState({
  email: true,
  push: false,
  sms: true,
});

<GroupedSwitch
  switches={[
    { id: 'email', label: 'Email Notifications', value: preferences.email },
    { id: 'push', label: 'Push Notifications', value: preferences.push },
    { id: 'sms', label: 'SMS Notifications', value: preferences.sms },
  ]}
  onChange={(id, value) => setPreferences(prev => ({ ...prev, [id]: value }))}
  variant="primary"
/>
```

### Pattern 4: Disabled State
```tsx
<SwitchRow
  label="Location Services"
  description="Not available in demo"
  value={false}
  disabled={true}
  variant="warning"
/>
```

### Pattern 5: Custom Colors
```tsx
<Switch
  value={isEnabled}
  variant="default"
  trackColorOff="#f0f0f0"
  trackColorOn="#4CAF50"
  thumbColorOff="#9E9E9E"
  thumbColorOn="#2E7D32"
/>
```

## Component Comparison

| Component | Use Case | Example |
|-----------|----------|---------|
| **Switch** | Simple toggle | On/off feature |
| **SwitchRow** | Single setting with label | "Dark Mode" in settings |
| **GroupedSwitch** | Multiple related settings | Notification preferences |

## Props Cheat Sheet

### Universal Props
```tsx
<Switch
  value={boolean}                    // Controlled state
  onValueChange={(val) => {}}        // Change handler
  size="medium"                       // 'small' | 'medium' | 'large'
  variant="primary"                   // 'default' | 'primary' | 'success' | 'warning' | 'danger'
  disabled={false}                    // Disable interaction
/>
```

### Appearance Customization
```tsx
<Switch
  trackColorOff="#e0e0e0"     // Off state track
  trackColorOn="#4CAF50"      // On state track
  thumbColorOff="#757575"     // Off state thumb
  thumbColorOn="#2E7D32"      // On state thumb
  iosBackgroundColor="#f5f5f5" // iOS bg only
/>
```

### SwitchRow Only
```tsx
<SwitchRow
  label="Feature Name"
  description="Feature description"
  labelColor="#333333"
  descriptionColor="#999999"
/>
```

### GroupedSwitch Only
```tsx
<GroupedSwitch
  switches={[
    { id: 'key', label: 'Name', description: 'Optional desc', value: false }
  ]}
  onChange={(id, value) => {}}
/>
```

## Theme Colors Used

```
variant="default"   → gray[300] to gray[600]
variant="primary"   → blue[400] to blue[600]
variant="success"   → green[400] to green[600]
variant="warning"   → amber[400] to amber[600]
variant="danger"    → red[400] to red[600]

Off colors:
  track: gray[200]
  thumb: gray[300]
```

## Real-World Examples

### Example 1: Settings Screen
```tsx
const SettingsScreen = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    location: true,
  });

  return (
    <ScrollView>
      <SwitchRow
        label="Push Notifications"
        description="Receive app notifications"
        value={settings.notifications}
        onValueChange={(val) => setSettings(s => ({ ...s, notifications: val }))}
        variant="primary"
      />
      <SwitchRow
        label="Dark Mode"
        value={settings.darkMode}
        onValueChange={(val) => setSettings(s => ({ ...s, darkMode: val }))}
        variant="primary"
      />
      <SwitchRow
        label="Share Location"
        description="Allow location access"
        value={settings.location}
        onValueChange={(val) => setSettings(s => ({ ...s, location: val }))}
        variant="success"
      />
    </ScrollView>
  );
};
```

### Example 2: Feature Flags
```tsx
const FeatureFlagsScreen = () => {
  const [flags, setFlags] = useState({
    betaFeatures: false,
    analytics: true,
    experiments: false,
  });

  return (
    <GroupedSwitch
      switches={[
        { id: 'betaFeatures', label: 'Beta Features', value: flags.betaFeatures },
        { id: 'analytics', label: 'Analytics', description: 'Help improve app', value: flags.analytics },
        { id: 'experiments', label: 'Experiments', description: 'Opt-in to new experiments', value: flags.experiments },
      ]}
      onChange={(id, value) => setFlags(f => ({ ...f, [id]: value }))}
      variant="primary"
    />
  );
};
```

### Example 3: Permissions Request
```tsx
const PermissionsScreen = () => {
  const [permissions, setPermissions] = useState({
    camera: false,
    microphone: false,
    contacts: false,
    calendar: false,
  });

  const handlePermissionChange = (id, value) => {
    // Request actual permission from device
    requestPermission(id);
    setPermissions(p => ({ ...p, [id]: value }));
  };

  return (
    <GroupedSwitch
      switches={[
        { id: 'camera', label: 'Camera', value: permissions.camera },
        { id: 'microphone', label: 'Microphone', value: permissions.microphone },
        { id: 'contacts', label: 'Contacts', value: permissions.contacts },
        { id: 'calendar', label: 'Calendar', value: permissions.calendar },
      ]}
      onChange={handlePermissionChange}
      variant="primary"
    />
  );
};
```

## Export List

```tsx
export {
  Switch,              // Main component
  SwitchRow,          // With label/description
  GroupedSwitch,      // Multiple switches
  SwitchProps,        // Type definitions
  SwitchRowProps,
  GroupedSwitchProps,
  sizeConfig,         // Size specifications
  variantConfig,      // Color specifications
};
```

## Accessibility

All components support accessibility props:

```tsx
<Switch
  accessibilityLabel="Enable notifications"
  accessibilityHint="Double tap to toggle notifications"
  accessible={true}
/>
```

## Notes

- ✅ 100% TypeScript
- ✅ forwardRef support on all components
- ✅ Theme-integrated colors
- ✅ Platform-specific handling (iOS/Android)
- ✅ Disabled state with visual feedback
- ✅ Accessibility support
