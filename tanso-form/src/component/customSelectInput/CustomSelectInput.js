import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const CustomSelectInput = ({
  items,
  setSelected,
  placeholder,
  error,
  onOpen,
}) => {
  return (
    <React.Fragment>
      <RNPickerSelect
        onValueChange={(value) => setSelected(value)}
        items={items}
        placeholder={placeholder}
        onOpen={onOpen}
      />
      {error && <Text style={style.error}>{error}</Text>}
    </React.Fragment>
  );
};

const style = StyleSheet.create({
  error: {
    fontSize: 10,
    color: "red",
  },
});
export default CustomSelectInput;
