import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
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
      <View style={styles.card}>
        <View style={styles.card_part__left}>
          <View style={[styles.card_container_image]}>
            <Image
              style={styles.card_image}
              source={{
                uri: props.image
              }}
            />
          </View>
          <View style={styles.card_container_text}>
            <Text style={styles.card_title}>{props.name}</Text>
            <Text style={styles.card_text}>Marque : {props.brand}</Text>
            <Text style={styles.card_text}>Quantité : {props.quantity}</Text>
            <View>
              <View style={styles[props.nutriscoreGrade]}></View>
              <Text style={styles.card_text}>
                NutirScore :&nbsp;
                <Text
                  style={[
                    styles.card_text,
                    styles.card_text__strong,
                    styles[`${props.nutriscoreGrade}_color`]
                  ]}
                >
                  {props.nutriscoreGrade.toUpperCase()}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <AntDesign
            style={styles.card_arrow}
            name="right"
            size={15}
            color="#124660"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
