# `useKeyboard` Hook

## Overview

The **`useKeyboard`** hook is designed for React Native applications to easily manage and respond to keyboard events. It provides information about the keyboard's visibility and height, which can be used to adjust the layout or behavior of your application when the keyboard is shown or hidden.

## Installation

```bash
npm install react-native-use-keyboard
yarn add react-native-use-keyboard
pnpm install react-native-use-keyboard
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

## API

### `useKeyboard(customEvents?: CustomEvents): KeyboardInfo`

#### Parameters

- `customEvents` (optional): An object to customize the keyboard event names. It has the following structure:
  - `show`: A `KeyboardEventName` to specify a custom event name for keyboard show events.
  - `hide`: A `KeyboardEventName` to specify a custom event name for keyboard hide events.

#### Return Value

`useKeyboard` returns an object containing the following properties:

- `isVisible`: A boolean indicating whether the keyboard is currently visible.
- `height`: A number representing the height of the keyboard in pixels.

## License

MIT
