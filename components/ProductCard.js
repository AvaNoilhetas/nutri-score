import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./../assets/css/styles";

const ProductCard = props => {
  const navigation = useNavigation();

  const goToProductPage = () => {
    navigation.navigate("Scan", {
      screen: "ProductScreen",
      params: { productCode: props.code }
    });
  };

  return (
    <TouchableOpacity onPress={goToProductPage}>
      <Text>{props.name}</Text>
      <Text>{props.brand}</Text>
      <Text>{props.quantity}</Text>
      <Image
        style={styles.product_image}
        source={{
          uri: props.image
        }}
      />
      <Image
        style={styles.product_image}
        source={{
          uri: `./../assets/img/nutriscore-${props.nutriscoreGrade}.png`
        }}
      />
    </TouchableOpacity>
  );
};

export default ProductCard;
