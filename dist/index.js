"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyboard = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useKeyboard = (customEvents) => {
    const [keyboardInfo, setKeyboardInfo] = (0, react_1.useState)({
        isVisible: false,
        height: 0,
    });
    const events = (0, react_1.useMemo)(() => ({
        show: (customEvents === null || customEvents === void 0 ? void 0 : customEvents.show) ||
            (react_native_1.Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow"),
        hide: (customEvents === null || customEvents === void 0 ? void 0 : customEvents.hide) ||
            (react_native_1.Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide"),
    }), [customEvents]);
    (0, react_1.useEffect)(() => {
        const keyboardDidShowListener = react_native_1.Keyboard.addListener(events.show, (e) => {
            setKeyboardInfo({
                isVisible: true,
                height: e.endCoordinates.height,
            });
        });
        const keyboardDidHideListener = react_native_1.Keyboard.addListener(events.hide, () => {
            setKeyboardInfo({
                isVisible: false,
                height: 0,
            });
        });
        return () => {
            keyboardDidHideListener === null || keyboardDidHideListener === void 0 ? void 0 : keyboardDidHideListener.remove();
            keyboardDidShowListener === null || keyboardDidShowListener === void 0 ? void 0 : keyboardDidShowListener.remove();
        };
    }, [events]);
    return {
        isVisible: keyboardInfo.isVisible,
        height: keyboardInfo.height,
    };
};
exports.useKeyboard = useKeyboard;
//# sourceMappingURL=index.js.map