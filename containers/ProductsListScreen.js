import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "../assets/css/styles";

const ProductsListScreen = () => {
  return (
    <ScrollView style={[styles.container, styles.bg_main]}>
      <Text>ProductsListScreen</Text>
    </ScrollView>
  );
};

export default ProductsListScreen;
