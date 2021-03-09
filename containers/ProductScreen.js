import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import styles from "./../assets/css/styles";

const ProductScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${route.params.productCode}.json`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [route.params.productCode]);

  return (
    <View style={[styles.view__center, styles.bg_ternary]}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#1B9476" />
      ) : (
        <ScrollView>
          <View>
            <View>
              <Text>{data.product.product_name_fr}</Text>
              <Text>{data.product.brands_tags}</Text>
              <Text>{data.product.product_quantity}g</Text>
            </View>
            <View>
              <View>
                <Image
                  style={styles.product_image}
                  source={{
                    uri: data.product.image_thumb_url
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ProductScreen;
