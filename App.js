// App.js
import {
  Ubuntu_300Light,
  Ubuntu_500Medium,
  useFonts
} from "@expo-google-fonts/ubuntu";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./assets/css/styles";
import HomeScreen from "./containers/HomeScreen.js";
import ProductScreen from "./containers/ProductScreen.js";
import ProductsListScreen from "./containers/ProductsListScreen.js";
import ScanScreen from "./containers/ScanScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_500Medium
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.view__center, styles.bg_ternary]}>
        <ActivityIndicator size="large" color="#1B9476" />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            options={{
              headerShown: false
            }}
          >
            {() => (
              <Tab.Navigator
                tabBarOptions={{
                  activeTintColor: "#1B9476",
                  inactiveTintColor: "#8BD59E",
                  showLabel: false,
                  iconStyle: { height: 200, width: 100 },
                  style: {
                    borderTopColor: "#1B9476",
                    borderTopHeight: 2
                  }
                }}
              >
                <Tab.Screen
                  name="Home"
                  options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                      <Octicons name="home" color={color} size={size} />
                    )
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                          header: () => (
                            <View style={styles.header}>
                              <Text style={styles.header_text}>
                                Open food fact App
                              </Text>
                            </View>
                          )
                        }}
                      ></Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="Scan"
                  options={{
                    tabBarLabel: "Scan",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="scan-helper"
                        size={size}
                        color={color}
                      />
                    )
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Scan"
                        component={ScanScreen}
                        options={{
                          header: () => (
                            <View style={styles.header}>
                              <Text style={styles.header_text}>
                                Scanner un code barre
                              </Text>
                            </View>
                          )
                        }}
                      ></Stack.Screen>
                      <Stack.Screen
                        name="ProductScreen"
                        component={ProductScreen}
                        options={{
                          header: () => (
                            <View style={styles.header}>
                              <Text style={styles.header_text}>Produit</Text>
                            </View>
                          )
                        }}
                      ></Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="ProductsList"
                  options={{
                    tabBarLabel: "ProductsList",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="food-variant"
                        size={size}
                        color={color}
                      />
                    )
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="ProductsList"
                        component={ProductsListScreen}
                        options={{
                          header: () => (
                            <View style={styles.header}>
                              <Text style={styles.header_text}>
                                Liste des produits
                              </Text>
                            </View>
                          )
                        }}
                      ></Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
