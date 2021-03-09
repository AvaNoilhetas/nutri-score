import { useNavigation } from "@react-navigation/core";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import styles from "./../assets/css/styles";

const ScanScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    navigation.navigate("ProductScreen", { productCode: data });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.view__center}>
        <Text style={[styles.text, styles.text__center]}>
          Demande d'autorisation d'accès à l'appareil photo.
        </Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.view__center}>
        <Text style={[styles.text, styles.text__center]}>
          Pas d'accès à l'appareil photo.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.view__end, styles.bg_ternary]}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
      />
      {scanned && (
        <TouchableHighlight
          onPress={() => setScanned(false)}
          style={styles.button}
        >
          <Text style={styles.button_text}>Scanner un autre code</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default ScanScreen;
