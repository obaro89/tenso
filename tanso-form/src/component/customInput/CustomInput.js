import { Text, TextInput } from "react-native";
import React from "react";
import style from "./style";

const CustomInput = ({
  placeholder,
  error,
  onFocus = () => {},
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <React.Fragment>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        style={error ? [style.errorInput, style.textInput] : style.textInput}
        {...otherProps}
      />
      {error && <Text style={style.error}>{error}</Text>}
    </React.Fragment>
  );
};

export default CustomInput;
