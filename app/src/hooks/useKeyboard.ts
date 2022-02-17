import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const keyboardWillShowSubscription = Keyboard.addListener(
      'keyboardWillShow',
      e => {
        setKeyboardShown(true);
        setKeyboardHeight(e.endCoordinates.height);
        setDuration(e.duration);
      },
    );
    const keyboardDidShowSubscription = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardShown(true);
        setKeyboardHeight(e.endCoordinates.height);
        setDuration(e.duration);
      },
    );
    const keyboardWillHideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setKeyboardShown(false);
      },
    );

    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardShown(false);
      },
    );

    return () => {
      keyboardWillShowSubscription.remove();
      keyboardWillHideSubscription.remove();
      keyboardDidShowSubscription.remove();
      keyboardDidHideSubscription.remove();
    };
  }, []);

  return {keyboardHeight, keyboardShown, duration};
};

export default useKeyboard;
