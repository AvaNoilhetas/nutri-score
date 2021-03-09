import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import styles from "./../assets/css/styles";
import ProductCard from "./../components/ProductCard";

const ProductsListScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&page_size=100&page=${page}&action=process&json=1`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  const loadMoreProducts = () => {
    setPage(page + 1);
  };

  return (
    <View style={[styles.view__center, styles.bg_main]}>
      <View style={[styles.bg_wave]}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#1B9476" />
        ) : (
          <FlatList
            style={styles.card_list}
            data={data.products}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <ProductCard
                name={item.product_name_fr}
                brand={item.brands}
                image={item.image_front_small_url}
                quantity={item.quantity}
                nutriscoreGrade={item.nutriscore_grade}
                code={item.id}
              />
            )}
            onEndReachedThreshold={1}
            onEndReached={loadMoreProducts}
          />
        )}
      </View>
    </View>
  );
};

export default ProductsListScreen;
