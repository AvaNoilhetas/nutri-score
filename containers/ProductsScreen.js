import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./../assets/css/styles";

const ProductsScreen = () => {
  return (
    <ScrollView style={[styles.container, styles.bg_main]}>
      <Text>ProductsScreen</Text>
    </ScrollView>
  );
};

export default ProductsScreen;
