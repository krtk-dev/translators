import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardWillShow', e => {
      setKeyboardShown(true);
      setKeyboardHeight(e.endCoordinates.height);
      setDuration(e.duration);
    });
    const hideSub = Keyboard.addListener('keyboardWillHide', e => {
      setKeyboardShown(false);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return {keyboardHeight, keyboardShown, duration};
};

export default useKeyboard;
