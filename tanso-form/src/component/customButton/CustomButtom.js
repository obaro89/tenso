import { Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "./style";

const CustomButton = ({ title, icon, ...otherProps }) => {
  const ICON = icon ? icon : <React.Fragment></React.Fragment>;
  return (
    <TouchableOpacity {...otherProps} style={style.button}>
      <Text style={style.text}>{title}</Text>
      {ICON}
    </TouchableOpacity>
  );
};

export default CustomButton;
