import * as React from 'react';
import { Keyboard, Platform } from 'react-native';
export default function useIsKeyboardShown() {
  const [isKeyboardShown, setIsKeyboardShown] = React.useState(false);
  React.useEffect(() => {
    const handleKeyboardShow = () => setIsKeyboardShown(true);

    const handleKeyboardHide = () => setIsKeyboardShown(false);

    if (Platform.OS === 'ios') {
      const subscrA = Keyboard.addListener('keyboardWillShow', handleKeyboardShow);
      const subscrB = Keyboard.addListener('keyboardWillHide', handleKeyboardHide);
      return () => {
        subscrA === null || subscrA === void 0 ? void 0 : subscrA.remove();
        subscrB === null || subscrB === void 0 ? void 0 : subscrB.remove();
      };
    } else {
      const subscrA = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
      const subscrB = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);
      return () => {
        subscrA === null || subscrA === void 0 ? void 0 : subscrA.remove();
        subscrB === null || subscrB === void 0 ? void 0 : subscrB.remove();
      };
    }
  }, []);
  return isKeyboardShown;
}
//# sourceMappingURL=useIsKeyboardShown.js.map