import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const style = StyleSheet.create({
  textInput: {
    backgroundColor: colors.white,
    height: 60,
    width: "100%",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  errorInput: {
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 2,
  },

  error: {
    fontSize: 10,
    color: "red",
  },
});

export default style;
