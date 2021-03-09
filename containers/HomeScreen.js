import React from "react";
import { Text, View } from "react-native";
import styles from "./../assets/css/styles";

const HomeScreen = () => {
  return (
    <View style={[styles.view__center, styles.bg_main]}>
      <View style={[styles.bg_wave]}>
        <Text>HomeScreen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
