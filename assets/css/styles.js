import Constants from "expo-constants";
import { Dimensions, StyleSheet } from "react-native";

const mainColor = "#1B9476";
const secondaryColor = "#8BD59E";
const ternaryColor = "#C7DBC2";
const lightColor = "#F4EBD6";
const darkColor = "#124660";
const grayColor = "#666666";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight
  },
  view__center: {
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
  view__scan: {
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    borderRadius: 50,

    zIndex: -1
  },
  header: {
    paddingBottom: 20,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: mainColor
  },
  header_text: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Ubuntu_300Light",
    backgroundColor: mainColor
  },
  bg_main: {
    backgroundColor: mainColor
  },
  bg_ternary: {
    backgroundColor: ternaryColor
  },
  bg_wave: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden"
  },
  text: {
    fontSize: 20,
    fontFamily: "Ubuntu_300Light"
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
  },
  card_list: {
    marginRight: 0,
    marginTop: 0,
    width: windowWidth
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 20,
    flex: 1,
    paddingLeft: 40
  },
  card_part__left: {
    flexDirection: "row",
    flexShrink: 1
  },
  card_container_image: {
    backgroundColor: ternaryColor,
    borderRadius: 20,
    height: 80,
    width: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  card_image: {
    width: 70,
    height: 70,
    resizeMode: "contain"
  },
  card_container_text: {
    flexDirection: "column",
    flexShrink: 1
  },
  card_title: {
    fontSize: 15,
    fontFamily: "Ubuntu_500Medium",
    color: darkColor,
    paddingBottom: 10
  },
  card_text: {
    fontSize: 14,
    fontFamily: "Ubuntu_300Light",
    color: grayColor,
    paddingBottom: 5
  },
  card_arrow: {
    textAlign: "right",
    paddingRight: 20
  },
  a: {
    backgroundColor: "#1B9476"
  },
  b: {
    backgroundColor: "#8BD59E"
  },
  c: {
    backgroundColor: "#FFCA5A"
  },
  d: {
    backgroundColor: "#EE7A46"
  },
  e: {
    backgroundColor: "#D74728"
  }
});

export default styles;
