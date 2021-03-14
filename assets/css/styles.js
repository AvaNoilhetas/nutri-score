import Constants from "expo-constants";
import { Dimensions, StyleSheet } from "react-native";

const mainColor = "#00917c";
const secondaryColor = "#8BD59E";
const ternaryColor = "#C7DBC2";
const lightColor = "#F4EBD6";
const darkColor = "#6e7c7c";
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
  view__product: {
    flex: 1,
    flexDirection: "row"
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
    borderTopRightRadius: 40,
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
    flex: 1,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    paddingBottom: 20,
    borderBottomColor: secondaryColor,
    borderBottomWidth: 1
  },
  card_part__left: {
    flexDirection: "row",
    flexShrink: 1
  },
  card_image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 10
  },
  card_container_text: {
    flexDirection: "column",
    flexShrink: 1
  },
  card_title: {
    fontSize: 15,
    fontFamily: "Ubuntu_500Medium",
    color: mainColor,
    paddingBottom: 8
  },
  card_text: {
    fontSize: 12,
    fontFamily: "Ubuntu_300Light",
    color: grayColor,
    paddingBottom: 4
  },
  card_text__strong: {
    fontWeight: "bold"
  },
  card_arrow: {
    textAlign: "right",
    paddingRight: 10
  },
  a_color: {
    color: "#1B9476"
  },
  b_color: {
    color: "#8BD59E"
  },
  c_color: {
    color: "#FFCA5A"
  },
  d_color: {
    color: "#EE7A46"
  },
  e_color: {
    color: "#D74728"
  },
  menu: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: windowHeight - 150
  },
  menu_text: {
    textAlign: "center",
    transform: [{ rotate: "-90deg" }]
  }
});

export default styles;
