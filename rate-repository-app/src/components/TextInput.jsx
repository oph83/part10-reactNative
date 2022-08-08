import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: 'black'
  },
  colorBorderSecondary: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#d73a4a',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    error ? styles.colorBorderSecondary : styles.form,
    style,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;