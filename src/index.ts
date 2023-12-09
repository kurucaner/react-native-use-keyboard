import { useEffect, useMemo, useState } from "react";
import { Keyboard, KeyboardEventName, Platform } from "react-native";

type KeyboardInfo = {
  isVisible: boolean;
  height: number;
};

type CustomEvents = {
  show?: KeyboardEventName;
  hide?: KeyboardEventName;
};

export const useKeyboard = (customEvents?: CustomEvents) => {
  const [keyboardInfo, setKeyboardInfo] = useState<KeyboardInfo>({
    isVisible: false,
    height: 0,
  });

  const events = useMemo(
    () => ({
      show:
        customEvents?.show ||
        (Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow"),
      hide:
        customEvents?.hide ||
        (Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide"),
    }),
    [customEvents]
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(events.show, (e) => {
      setKeyboardInfo({
        isVisible: true,
        height: e.endCoordinates.height,
      });
    });

    const keyboardDidHideListener = Keyboard.addListener(events.hide, () => {
      setKeyboardInfo({
        isVisible: false,
        height: 0,
      });
    });

    return () => {
      keyboardDidHideListener?.remove();
      keyboardDidShowListener?.remove();
    };
  }, [events]);

  return {
    isVisible: keyboardInfo.isVisible,
    height: keyboardInfo.height,
  };
};
