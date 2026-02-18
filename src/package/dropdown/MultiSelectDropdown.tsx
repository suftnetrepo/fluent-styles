import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
} from 'react';
import {
  View,
  FlatList,
  Modal,
  TextInput,
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

type DropdownOptionItem = {
  value: string;
  label: string;
};

interface MultiSelectDropdownProps {
  data: DropdownOptionItem[];
  onChange: (items: DropdownOptionItem[]) => void;
  placeholder: string;

  value?: DropdownOptionItem[];
  defaultValue?: DropdownOptionItem[];

  disabled?: boolean;
  maxHeight?: number;
  searchable?: boolean;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;

const MultiSelectDropdown = forwardRef<View, MultiSelectDropdownProps>(
  (
    {
      data,
      onChange,
      placeholder,
      value,
      defaultValue = [],
      disabled = false,
      maxHeight = 350,
      searchable = true,
    },
    ref
  ) => {
    const buttonRef = useRef<any>(null);

    const [expanded, setExpanded] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [search, setSearch] = useState('');
    const [position, setPosition] = useState({
      top: 0,
      left: 0,
      width: 0,
    });

    const selectedItems = value ?? internalValue;

    /* ---------------- Measure ---------------- */

    const measureDropdown = useCallback(() => {
      buttonRef.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
        const spaceBelow = SCREEN_HEIGHT - (y + height);
        const shouldOpenUp = spaceBelow < maxHeight;

        setPosition({
          top: shouldOpenUp ? y - maxHeight : y + height,
          left: x,
          width,
        });
      });
    }, [maxHeight]);

    /* ---------------- Toggle ---------------- */

    const toggleExpanded = useCallback(() => {
      if (disabled) return;

      if (!expanded) {
        measureDropdown();
      }

      setExpanded((prev) => !prev);
    }, [expanded, disabled, measureDropdown]);

    /* ---------------- Select ---------------- */

    const toggleItem = useCallback(
      (item: DropdownOptionItem) => {
        const exists = selectedItems.some(
          (i) => i.value === item.value
        );

        let updated;

        if (exists) {
          updated = selectedItems.filter(
            (i) => i.value !== item.value
          );
        } else {
          updated = [...selectedItems, item];
        }

        if (value === undefined) {
          setInternalValue(updated);
        }

        onChange(updated);
      },
      [selectedItems, onChange, value]
    );

    const removeItem = useCallback(
      (item: DropdownOptionItem) => {
        const updated = selectedItems.filter(
          (i) => i.value !== item.value
        );

        if (value === undefined) {
          setInternalValue(updated);
        }

        onChange(updated);
      },
      [selectedItems, onChange, value]
    );

    /* ---------------- Android Back ---------------- */

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

    /* ---------------- Search Filter ---------------- */

    const filteredData = useMemo(() => {
      if (!search.trim()) return data;

      return data.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      );
    }, [search, data]);

    /* ---------------- Render Item ---------------- */

    const renderItem = useCallback(
      ({ item }: { item: DropdownOptionItem }) => {
        const isSelected = selectedItems.some(
          (i) => i.value === item.value
        );

        return (
          <StyledButton
            height={45}
            justifyContent="space-between"
            paddingHorizontal={12}
            backgroundColor={
              isSelected
                ? theme.colors.gray[100]
                : theme.colors.white
            }
            onPress={() => toggleItem(item)}
          >
            <XStack
              justifyContent="space-between"
              alignItems="center"
              flex={1}
            >
              <StyledText>{item.label}</StyledText>

              {isSelected && (
                <MaterialIcons
                  name="check"
                  size={20}
                  color={theme.colors.primary?.[600] ?? '#007AFF'}
                />
              )}
            </XStack>
          </StyledButton>
        );
      },
      [selectedItems, toggleItem]
    );

    const keyExtractor = useCallback(
      (item: DropdownOptionItem) => item.value,
      []
    );

    /* ---------------- Chips ---------------- */

    const renderChips = () => {
      if (!selectedItems.length) {
        return (
          <StyledText color={theme.colors.gray[500]}>
            {placeholder}
          </StyledText>
        );
      }

      return (
        <XStack flexWrap="wrap" gap={6}>
          {selectedItems.map((item) => (
            <XStack
              key={item.value}
              alignItems="center"
              paddingHorizontal={10}
              paddingVertical={4}
              borderRadius={20}
              backgroundColor={theme.colors.gray[200]}
            >
              <StyledText fontSize={13}>
                {item.label}
              </StyledText>

              <Pressable
                onPress={() => removeItem(item)}
                style={{ marginLeft: 6 }}
              >
                <MaterialIcons
                  name="close"
                  size={16}
                  color={theme.colors.gray[700]}
                />
              </Pressable>
            </XStack>
          ))}
        </XStack>
      );
    };

    /* ---------------- JSX ---------------- */

    return (
      <YStack ref={ref || buttonRef}>
        <StyledButton
          ref={buttonRef}
          disabled={disabled}
          minHeight={50}
          paddingHorizontal={12}
          borderRadius={8}
          borderWidth={1}
          borderColor={theme.colors.gray[200]}
          backgroundColor={theme.colors.white}
          onPress={toggleExpanded}
        >
          <XStack
            justifyContent="space-between"
            alignItems="center"
            flex={1}
          >
            <View style={{ flex: 1 }}>
              {renderChips()}
            </View>

            <MaterialIcons
              name={expanded ? 'expand-less' : 'expand-more'}
              size={24}
              color={theme.colors.gray[700]}
            />
          </XStack>
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
                  elevation: 5,
                }}
              >
                {searchable && (
                  <View
                    style={{
                      padding: 10,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.gray[200],
                    }}
                  >
                    <TextInput
                      placeholder="Search..."
                      value={search}
                      onChangeText={setSearch}
                      style={{
                        height: 40,
                        paddingHorizontal: 10,
                        borderRadius: 6,
                        backgroundColor:
                          theme.colors.gray[100],
                      }}
                    />
                  </View>
                )}

                <FlatList
                  data={filteredData}
                  keyExtractor={keyExtractor}
                  renderItem={renderItem}
                  ItemSeparatorComponent={() => (
                    <Separator
                      height={1}
                      backgroundColor={
                        theme.colors.gray[200]
                      }
                    />
                  )}
                  keyboardShouldPersistTaps="handled"
                />
              </View>
            </Pressable>
          </Modal>
        )}
      </YStack>
    );
  }
);

MultiSelectDropdown.displayName =
  'MultiSelectDropdown';

export { MultiSelectDropdown };
