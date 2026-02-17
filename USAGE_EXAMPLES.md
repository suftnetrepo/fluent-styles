/**
 * EXAMPLE USAGE - TypeScript Button Component
 * 
 * This file demonstrates how to use the migrated TypeScript Button component
 */

import React from 'react';
import { View, Text } from 'react-native';
import { StyledButton, theme } from './tspackage';

/**
 * Example 1: Basic Button with Default Styles
 */
export function BasicButton() {
  return (
    <StyledButton onPress={() => console.log('Pressed!')}>
      <Text>Default Button</Text>
    </StyledButton>
  );
}

/**
 * Example 2: Button with Custom Colors
 */
export function ColoredButton() {
  return (
    <StyledButton
      backgroundColor={theme.colors.blue[500]}
      borderColor={theme.colors.blue[700]}
      onPress={() => console.log('Blue button pressed')}
    >
      <Text style={{ color: 'white' }}>Blue Button</Text>
    </StyledButton>
  );
}

/**
 * Example 3: Button with Custom Border Radius
 */
export function RoundedButton() {
  return (
    <StyledButton
      borderRadius={50}
      width={200}
      height={50}
      backgroundColor={theme.colors.purple[500]}
    >
      <Text>Rounded Button</Text>
    </StyledButton>
  );
}

/**
 * Example 4: Link-style Button (No Border/Background)
 */
export function LinkButton() {
  return (
    <StyledButton
      link
      onPress={() => console.log('Link pressed')}
    >
      <Text style={{ color: theme.colors.blue[500] }}>
        Click here for more
      </Text>
    </StyledButton>
  );
}

/**
 * Example 5: Selected/Active State
 */
export function SelectedButton() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <StyledButton
      selected={isSelected}
      onPress={() => setIsSelected(!isSelected)}
    >
      <Text style={{ color: isSelected ? 'white' : 'black' }}>
        {isSelected ? 'Selected' : 'Not Selected'}
      </Text>
    </StyledButton>
  );
}

/**
 * Example 6: Button with Dynamic Sizing
 */
export function SizedButton() {
  return (
    <StyledButton
      size={200} // Uses the size variant to set both width and height
      backgroundColor={theme.colors.emerald[500]}
      borderRadius={25}
    >
      <Text>Square Button</Text>
    </StyledButton>
  );
}

/**
 * Example 7: Multiple Buttons Group
 */
export function ButtonGroup() {
  return (
    <View style={{ flexDirection: 'column', gap: 10 }}>
      <StyledButton
        backgroundColor={theme.colors.red[500]}
        width="100%"
      >
        <Text>Primary Action</Text>
      </StyledButton>

      <StyledButton
        backgroundColor={theme.colors.gray[200]}
        borderColor={theme.colors.gray[400]}
        width="100%"
      >
        <Text style={{ color: theme.colors.gray[800] }}>
          Secondary Action
        </Text>
      </StyledButton>

      <StyledButton
        link
        width="100%"
      >
        <Text style={{ color: theme.colors.blue[500] }}>
          Tertiary Action
        </Text>
      </StyledButton>
    </View>
  );
}

/**
 * Example 8: Using with Forward Refs
 */
export function RefButton() {
  const buttonRef = React.useRef<any>(null);

  const handlePress = () => {
    // Access button directly if needed
    if (buttonRef.current) {
      console.log('Button ref accessed');
    }
  };

  return (
    <StyledButton
      ref={buttonRef}
      onPress={handlePress}
    >
      <Text>Button with Ref</Text>
    </StyledButton>
  );
}

/**
 * Example 9: Type-Safe Props
 * 
 * TypeScript will catch errors at compile time:
 * 
 * ❌ Wrong - TypeScript Error:
 * <StyledButton borderRadius="32" /> // Error: string not assignable to number
 * 
 * ❌ Wrong - TypeScript Error:
 * <StyledButton backgroundColor="#GGGGGG" /> // Error: Invalid color format (caught at runtime too)
 * 
 * ✅ Correct - TypeScript knows these are valid:
 */
export function TypeSafeButton() {
  return (
    <StyledButton
      borderRadius={32}                          // ✅ number
      backgroundColor={theme.colors.blue[500]}   // ✅ string
      width={200}                                // ✅ number
      selected                                   // ✅ boolean
    >
      <Text>Type-Safe Button</Text>
    </StyledButton>
  );
}

/**
 * THEME COLORS REFERENCE
 * 
 * Available colors with IntelliSense:
 * - theme.colors.rose, pink, fuchsia, purple, violet, indigo, blue, cyan
 * - theme.colors.teal, emerald, green, lime, yellow, amber, orange, red, gray
 * 
 * Color shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
 * 
 * Example: theme.colors.blue[500] → "#3b82f6"
 */

/**
 * KEY FEATURES OF THE MIGRATED COMPONENT:
 * 
 * 1. ✅ Full TypeScript Type Safety
 *    - All props are typed
 *    - IDE knows all available properties
 *    - Compile-time error checking
 * 
 * 2. ✅ Complete IDE Autocomplete
 *    - Type hints as you type
 *    - Documentation in tooltips
 *    - Go-to-definition support
 * 
 * 3. ✅ Runtime Validation
 *    - Color validation (hex format)
 *    - Number validation (finite numbers)
 *    - Same error messages as original
 * 
 * 4. ✅ 100% Backward Compatible
 *    - Behavior identical to JavaScript version
 *    - All styling preserved
 *    - Props work the same way
 * 
 * 5. ✅ Better Developer Experience
 *    - Self-documenting code
 *    - Safer refactoring
 *    - Fewer runtime errors
 */

export default BasicButton;
