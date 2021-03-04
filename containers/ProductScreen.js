import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./../assets/css/styles";

const ProductScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${route.params.productCode}.json`
      );
      setIsLoading(false);
      setData(response.data);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <View style={styles.view__center}>
      <ActivityIndicator size="large" color="white" />
    </View>
  ) : (
    <View style={[styles.view__center, styles.bg_main]}>
      <Text>{route.params.productCode}</Text>
    </View>
  );
};

export default ProductScreen;
