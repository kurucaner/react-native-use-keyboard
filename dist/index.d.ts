import { KeyboardEventName } from "react-native";
type CustomEvents = {
    show?: KeyboardEventName;
    hide?: KeyboardEventName;
};
export declare const useKeyboard: (customEvents?: CustomEvents) => {
    isVisible: boolean;
    height: number;
};
export {};
