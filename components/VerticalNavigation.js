import React from "react";
import { Text, View } from "react-native";
import styles from "./../assets/css/styles";

const VerticalNavigation = () => {
  return (
    <View style={styles.menu}>
      <Text style={styles.menu_text}>Résumé</Text>
      <Text style={styles.menu_text}>Ingrédients</Text>
      <Text style={styles.menu_text}>Nutrition</Text>
      <Text style={styles.menu_text}>Environnement</Text>
      <Text style={styles.menu_text}>Synthèse</Text>
    </View>
  );
};

export default VerticalNavigation;
