import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useMemo,
  ReactNode,
} from 'react';
import {
  View,
  FlatList,
  Modal,
  ViewStyle,
  Dimensions,
  BackHandler,
} from 'react-native';
// @ts-ignore - react-native-vector-icons does not have type declarations
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../utils/theme';
import { XStack, YStack } from '../stack';
import { StyledText } from '../text';
import { Pressable } from '../pressable';
import { StyledButton } from '../button';
import { Separator } from '../separator';

/**
 * Option item structure for dropdown
 */
type DropdownOptionItem = {
  value: string;
  label: string;
};

/**
 * Props for Dropdown component
 * 
 * @property {DropdownOptionItem[]} data - Array of options to display
 * @property {(item: DropdownOptionItem) => void} onChange - Callback when option is selected
 * @property {string} placeholder - Placeholder text when no option selected
 * @property {string} [value] - Controlled value (for controlled component)
 * @property {string} [defaultValue] - Default value (for uncontrolled component)
 * @property {boolean} [disabled] - Disable the dropdown (default: false)
 * @property {string} [iconName] - MaterialIcons name (default: 'expand-more')
 * @property {number} [maxHeight] - Maximum height of dropdown options (default: 250)
 * 
 * @example
 * ```tsx
 * const options = [
 *   { value: '1', label: 'Option 1' },
 *   { value: '2', label: 'Option 2' },
 * ];
 * 
 * <Dropdown
 *   data={options}
 *   placeholder="Select an option"
 *   onChange={(item) => console.log(item)}
 * />
 * ```
 */
interface DropdownProps extends ViewStyle {
  data: DropdownOptionItem[];
  onChange: (item: DropdownOptionItem) => void;
  placeholder: string;

  value?: string;          // controlled
  defaultValue?: string;   // uncontrolled
  disabled?: boolean;
  iconName?: string;

  maxHeight?: number;
}

/**
 * Props for MultiSelectDropdown component
 * 
 * @property {DropdownOptionItem[]} data - Array of options to display
 * @property {(items: DropdownOptionItem[]) => void} onChange - Callback when selections change
 * @property {string} placeholder - Placeholder text when no options selected
 * @property {DropdownOptionItem[]} [value] - Controlled selected items
 * @property {DropdownOptionItem[]} [defaultValue] - Default selected items
 * @property {boolean} [disabled] - Disable the dropdown (default: false)
 * @property {string} [iconName] - MaterialIcons name (default: 'expand-more')
 * @property {number} [maxHeight] - Maximum height of dropdown options (default: 250)
 * @property {string} [separator] - Separator for display text (default: ', ')
 * 
 * @example
 * ```tsx
 * const options = [
 *   { value: '1', label: 'Option 1' },
 *   { value: '2', label: 'Option 2' },
 * ];
 * 
 * <MultiSelectDropdown
 *   data={options}
 *   placeholder="Select options"
 *   onChange={(items) => console.log(items)}
 * />
 * ```
 */
interface MultiSelectDropdownProps extends ViewStyle {
  data: DropdownOptionItem[];
  onChange: (items: DropdownOptionItem[]) => void;
  placeholder: string;

  value?: DropdownOptionItem[];      // controlled
  defaultValue?: DropdownOptionItem[]; // uncontrolled
  disabled?: boolean;
  iconName?: string;

  maxHeight?: number;
  separator?: string;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;

/**
 * Dropdown Component - Single select dropdown menu
 * 
 * Features:
 * - Controlled and uncontrolled components
 * - Smart positioning (flips up if not enough space below)
 * - Android BackHandler support
 * - Accessibility support (ARIA labels, keyboard)
 * - Theme integration
 * - Smooth animations
 * 
 * @example
 * ```tsx
 * const [selected, setSelected] = useState<DropdownOptionItem | null>(null);
 * 
 * <Dropdown
 *   data={options}
 *   placeholder="Select an option"
 *   onChange={item => setSelected(item)}
 * />
 * ```
 */
const Dropdown = forwardRef<View, DropdownProps>(
  (
    {
      data,
      onChange,
      placeholder,
      value,
      defaultValue,
      disabled = false,
      iconName = 'expand-more',
      maxHeight = 250,
    },
    ref
  ) => {
    const buttonRef = useRef<any>(null);

    const [expanded, setExpanded] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const [position, setPosition] = useState<{
      top: number;
      left: number;
      width: number;
      direction: 'up' | 'down';
    }>({
      top: 0,
      left: 0,
      width: 0,
      direction: 'down',
    });

    const selectedValue = value ?? internalValue;

    /* ----------------------------- MEASURE ----------------------------- */

    const measureDropdown = useCallback(() => {
      buttonRef.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
        const spaceBelow = SCREEN_HEIGHT - (y + height);
        const shouldOpenUp = spaceBelow < maxHeight;

        setPosition({
          top: shouldOpenUp ? y - maxHeight : y + height,
          left: x,
          width,
          direction: shouldOpenUp ? 'up' : 'down',
        });
      });
    }, [maxHeight]);

    /* ----------------------------- TOGGLE ------------------------------ */

    const toggleExpanded = useCallback(() => {
      if (disabled) return;

      if (!expanded) {
        measureDropdown();
      }

      setExpanded((prev) => !prev);
    }, [expanded, disabled, measureDropdown]);

    /* --------------------------- SELECTION ----------------------------- */

    const handleSelect = useCallback(
      (item: DropdownOptionItem) => {
        if (value === undefined) {
          setInternalValue(item.label);
        }

        onChange(item);
        setExpanded(false);
      },
      [onChange, value]
    );

    /* ------------------------- ANDROID BACK ---------------------------- */

    useEffect(() => {
      if (!expanded) return;

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          setExpanded(false);
          return true;
        }
      );

      return () => backHandler.remove();
    }, [expanded]);

    /* ---------------------------- RENDER ------------------------------- */

    const renderItem = useCallback(
      ({ item }: { item: DropdownOptionItem }) => {
        const isSelected = selectedValue === item.label;

        return (
          <StyledButton
            activeOpacity={0.8}
            height={40}
            justifyContent="center"
            paddingHorizontal={10}
            backgroundColor={
              isSelected ? theme.colors.gray[100] : theme.colors.white
            }
            onPress={() => handleSelect(item)}
            accessibilityRole="menuitem"
          >
            <StyledText
              fontSize={15}
              color={theme.colors.gray[900]}
            >
              {item.label}
            </StyledText>
          </StyledButton>
        );
      },
      [handleSelect, selectedValue]
    );

    const keyExtractor = useCallback(
      (item: DropdownOptionItem) => item.value,
      []
    );

    const displayLabel = useMemo(
      () => selectedValue || placeholder,
      [selectedValue, placeholder]
    );

    /* ---------------------------- JSX -------------------------------- */

    return (
      <YStack ref={ref}>
        <StyledButton
          ref={buttonRef}
          disabled={disabled}
          activeOpacity={0.8}
          onPress={toggleExpanded}
          height={50}
          justifyContent="space-between"
          backgroundColor={theme.colors.white}
          flexDirection="row"
          alignItems="center"
          paddingHorizontal={15}
          borderRadius={8}
          borderColor={theme.colors.gray[200]}
          style={disabled ? { opacity: 0.5 } : undefined}
          accessibilityRole="button"
          accessibilityState={{ expanded }}
          accessibilityLabel={placeholder}
        >
          <StyledText
            fontSize={15}
            color={theme.colors.gray[900]}
          >
            {displayLabel}
          </StyledText>

          <MaterialIcons
            name={expanded ? 'expand-less' : iconName}
            size={24}
            color={theme.colors.gray[700]}
          />
        </StyledButton>

        {expanded && (
          <Modal
            visible={expanded}
            transparent
            animationType="fade"
            onRequestClose={() => setExpanded(false)}
          >
            <Pressable
              style={{ flex: 1 }}
              onPress={() => setExpanded(false)}
            >
              <View
                style={{
                  position: 'absolute',
                  top: position.top,
                  left: position.left,
                  width: position.width,
                  maxHeight,
                  backgroundColor: theme.colors.white,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: theme.colors.gray[200],
                  shadowColor: theme.colors.black,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <FlatList
                  data={data}
                  keyExtractor={keyExtractor}
                  renderItem={renderItem}
                  ItemSeparatorComponent={() => (
                    <Separator
                      backgroundColor={theme.colors.gray[200]}
                      height={1}
                    />
                  )}
                  keyboardShouldPersistTaps="handled"
                  scrollEnabled={data.length > 6}
                />
              </View>
            </Pressable>
          </Modal>
        )}
      </YStack>
    );
  }
);

Dropdown.displayName = 'Dropdown';

/**
 * MultiSelectDropdown Component - Multi-select dropdown menu
 * 
 * Features:
 * - Multiple selections with checkboxes
 * - Controlled and uncontrolled components
 * - Smart positioning (flips up if not enough space below)
 * - Android BackHandler support
 * - Accessibility support
 * - Theme integration
 * - Custom separator for display text
 * 
 * @example
 * ```tsx
 * const [selected, setSelected] = useState<DropdownOptionItem[]>([]);
 * 
 * <MultiSelectDropdown
 *   data={options}
 *   placeholder="Select options"
 *   onChange={items => setSelected(items)}
 * />
 * ```
 */
const MultiSelectDropdown = forwardRef<View, MultiSelectDropdownProps>(
  (
    {
      data,
      onChange,
      placeholder,
      value,
      defaultValue,
      disabled = false,
      iconName = 'expand-more',
      maxHeight = 250,
      separator = ', ',
    },
    ref
  ) => {
    const buttonRef = useRef<any>(null);

    const [expanded, setExpanded] = useState(false);
    const [internalValue, setInternalValue] = useState<DropdownOptionItem[]>(defaultValue || []);
    const [position, setPosition] = useState<{
      top: number;
      left: number;
      width: number;
      direction: 'up' | 'down';
    }>({
      top: 0,
      left: 0,
      width: 0,
      direction: 'down',
    });

    const selectedItems = value ?? internalValue;

    /* ----------------------------- MEASURE ----------------------------- */

    const measureDropdown = useCallback(() => {
      buttonRef.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
        const spaceBelow = SCREEN_HEIGHT - (y + height);
        const shouldOpenUp = spaceBelow < maxHeight;

        setPosition({
          top: shouldOpenUp ? y - maxHeight : y + height,
          left: x,
          width,
          direction: shouldOpenUp ? 'up' : 'down',
        });
      });
    }, [maxHeight]);

    /* ----------------------------- TOGGLE ------------------------------ */

    const toggleExpanded = useCallback(() => {
      if (disabled) return;

      if (!expanded) {
        measureDropdown();
      }

      setExpanded((prev) => !prev);
    }, [expanded, disabled, measureDropdown]);

    /* --------------------------- SELECTION ----------------------------- */

    const handleSelect = useCallback(
      (item: DropdownOptionItem) => {
        const newSelectedItems = selectedItems.some((i) => i.value === item.value)
          ? selectedItems.filter((i) => i.value !== item.value)
          : [...selectedItems, item];

        if (value === undefined) {
          setInternalValue(newSelectedItems);
        }

        onChange(newSelectedItems);
      },
      [onChange, value, selectedItems]
    );

    const handleSelectAll = useCallback(() => {
      const newSelectedItems =
        selectedItems.length === data.length ? [] : [...data];

      if (value === undefined) {
        setInternalValue(newSelectedItems);
      }

      onChange(newSelectedItems);
    }, [onChange, value, selectedItems, data]);

    /* ------------------------- ANDROID BACK ---------------------------- */

    useEffect(() => {
      if (!expanded) return;

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          setExpanded(false);
          return true;
        }
      );

      return () => backHandler.remove();
    }, [expanded]);

    /* ---------------------------- RENDER ------------------------------- */

    const renderItem = useCallback(
      ({ item }: { item: DropdownOptionItem }) => {
        const isSelected = selectedItems.some((i) => i.value === item.value);

        return (
          <StyledButton
            activeOpacity={0.8}
            height={40}
            justifyContent="flex-start"
            paddingHorizontal={10}
            backgroundColor={
              isSelected ? theme.colors.gray[100] : theme.colors.white
            }
            onPress={() => handleSelect(item)}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: isSelected }}
          >
            <XStack alignItems="center" gap={10}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 2,
                  borderColor: isSelected ? theme.colors.blue[500] : theme.colors.gray[300],
                  borderRadius: 4,
                  backgroundColor: isSelected ? theme.colors.blue[500] : theme.colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {isSelected && (
                  <MaterialIcons
                    name="check"
                    size={16}
                    color={theme.colors.white}
                  />
                )}
              </View>
              <StyledText
                fontSize={15}
                color={theme.colors.gray[900]}
              >
                {item.label}
              </StyledText>
            </XStack>
          </StyledButton>
        );
      },
      [handleSelect, selectedItems]
    );

    const keyExtractor = useCallback(
      (item: DropdownOptionItem) => item.value,
      []
    );

    const displayLabel = useMemo(
      () =>
        selectedItems.length > 0
          ? selectedItems.map((item) => item.label).join(separator)
          : placeholder,
      [selectedItems, placeholder, separator]
    );

    const isAllSelected = selectedItems.length === data.length && data.length > 0;

    /* ---------------------------- JSX -------------------------------- */

    return (
      <YStack ref={ref}>
        <StyledButton
          ref={buttonRef}
          disabled={disabled}
          activeOpacity={0.8}
          onPress={toggleExpanded}
          height={50}
          justifyContent="space-between"
          backgroundColor={theme.colors.white}
          flexDirection="row"
          alignItems="center"
          paddingHorizontal={15}
          borderRadius={8}
          borderColor={theme.colors.gray[200]}
          style={disabled ? { opacity: 0.5 } : undefined}
          accessibilityRole="button"
          accessibilityState={{ expanded }}
          accessibilityLabel={placeholder}
        >
          <StyledText
            fontSize={15}
            color={theme.colors.gray[900]}
            numberOfLines={1}
          >
            {displayLabel}
          </StyledText>

          <MaterialIcons
            name={expanded ? 'expand-less' : iconName}
            size={24}
            color={theme.colors.gray[700]}
          />
        </StyledButton>

        {expanded && (
          <Modal
            visible={expanded}
            transparent
            animationType="fade"
            onRequestClose={() => setExpanded(false)}
          >
            <Pressable
              style={{ flex: 1 }}
              onPress={() => setExpanded(false)}
            >
              <View
                style={{
                  position: 'absolute',
                  top: position.top,
                  left: position.left,
                  width: position.width,
                  maxHeight,
                  backgroundColor: theme.colors.white,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: theme.colors.gray[200],
                  shadowColor: theme.colors.black,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 5,
                  overflow: 'hidden',
                }}
              >
                {/* Select All Button */}
                <StyledButton
                  activeOpacity={0.8}
                  height={40}
                  justifyContent="flex-start"
                  paddingHorizontal={10}
                  backgroundColor={
                    isAllSelected ? theme.colors.gray[100] : theme.colors.white
                  }
                  onPress={handleSelectAll}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: isAllSelected }}
                >
                  <XStack alignItems="center" gap={10}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderWidth: 2,
                        borderColor: isAllSelected
                          ? theme.colors.blue[500]
                          : theme.colors.gray[300],
                        borderRadius: 4,
                        backgroundColor: isAllSelected
                          ? theme.colors.blue[500]
                          : theme.colors.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {isAllSelected && (
                        <MaterialIcons
                          name="check"
                          size={16}
                          color={theme.colors.white}
                        />
                      )}
                    </View>
                    <StyledText
                      fontSize={15}
                      fontWeight="bold"
                      color={theme.colors.gray[900]}
                    >
                      Select All
                    </StyledText>
                  </XStack>
                </StyledButton>

                <Separator height={1} backgroundColor={theme.colors.gray[200]} />

                {/* Options List */}
                <FlatList
                  data={data}
                  keyExtractor={keyExtractor}
                  renderItem={renderItem}
                  ItemSeparatorComponent={() => (
                    <Separator height={1} backgroundColor={theme.colors.gray[200]} />
                  )}
                  keyboardShouldPersistTaps="handled"
                  scrollEnabled={data.length > 6}
                />
              </View>
            </Pressable>
          </Modal>
        )}
      </YStack>
    );
  }
);

MultiSelectDropdown.displayName = 'MultiSelectDropdown';
/**
 * Export all components and types
 */
export { Dropdown, MultiSelectDropdown };
export type { DropdownProps, DropdownOptionItem, MultiSelectDropdownProps };