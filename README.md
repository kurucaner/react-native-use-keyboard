# `useKeyboard` Hook

## Overview

The **`useKeyboard`** hook is designed for React Native applications to easily manage and respond to keyboard events. It provides information about the keyboard's visibility and height, which can be used to adjust the layout or behavior of your application when the keyboard is shown or hidden.

## Features

- 🎯 Real-time keyboard visibility tracking
- 📏 Accurate keyboard height measurements
- 🔄 Platform-specific event handling (iOS & Android)
- ⚙️ Customizable keyboard events
- 🪶 Lightweight with zero dependencies
- 💪 Written in TypeScript with full type support

## Installation

```bash
npm install react-native-use-keyboard
# or
yarn add react-native-use-keyboard
# or
pnpm install react-native-use-keyboard
# or
bun install react-native-use-keyboard
```

## Usage

```tsx
import { useKeyboard } from "react-native-use-keyboard";

const MyComponent = () => {
  const { isVisible, height } = useKeyboard();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>My Component</Text>
      </View>
      {isVisible && (
        <View style={{ height }}>
          <Text>Keyboard is visible</Text>
        </View>
      )}
    </View>
  );
};
```

### With Custom Events

```tsx
const MyComponent = () => {
  const { isVisible, height } = useKeyboard({
    show: "keyboardDidShow", // custom show event
    hide: "keyboardDidHide", // custom hide event
  });
  // ... rest of your component
};
```

## API

### `useKeyboard(customEvents?: CustomEvents): KeyboardInfo`

#### Parameters

- `customEvents` (optional): An object to customize the keyboard event names.
  - `show`: A `KeyboardEventName` to specify a custom event name for keyboard show events
  - `hide`: A `KeyboardEventName` to specify a custom event name for keyboard hide events

#### Return Value

Returns an object with:

- `isVisible`: `boolean` - Indicates if the keyboard is currently visible
- `height`: `number` - Current height of the keyboard in pixels (0 when hidden)

## Platform Specific Behavior

By default, the hook uses different events for iOS and Android:

- **iOS**: Uses 'keyboardWillShow' and 'keyboardWillHide'
- **Android**: Uses 'keyboardDidShow' and 'keyboardDidHide'

## Common Use Cases

### Adjusting Screen Content

```tsx
const MyScreen = () => {
  const { isVisible, height } = useKeyboard();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: isVisible ? height : 0,
        }}
      >
        {/* Your content */}
      </ScrollView>
    </View>
  );
};
```

### Animating Views with Keyboard

```tsx
const MyAnimatedComponent = () => {
  const { isVisible, height } = useKeyboard();
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isVisible ? -height : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isVisible, height]);

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      {/* Your content */}
    </Animated.View>
  );
};
```

## Requirements

- React Native >= 0.60.0
- React >= 16.8.0 (Hooks support)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
