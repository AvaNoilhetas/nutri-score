import Constants from "expo-constants";
import { StyleSheet } from "react-native";
const mainColor = "lightseagreen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight
  },
  view__center: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  view__end: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  bg_main: {
    backgroundColor: "lightseagreen"
  },
  text: {
    fontSize: 20
  },
  text__center: {
    textAlign: "center"
  },
  button: {
    backgroundColor: mainColor,
    padding: 20
  },
  button_text: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  product_image: {
    width: 80,
    height: 80,
    resizeMode: "contain"
  }
});

export default styles;
