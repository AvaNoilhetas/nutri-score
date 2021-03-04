import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./containers/HomeScreen.js";
import ProductsScreen from "./containers/ProductsScreen.js";
import ScanScreen from "./containers/ScanScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          options={{
            animationEnabled: false,
            headerShown: false
          }}
        >
          {() => (
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: "lightseagreen",
                inactiveTintColor: "lightsteelblue",
                showLabel: false,
                iconStyle: { height: 200, width: 100 }
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <Octicons name="home" color={color} size={size} />
                  )
                }}
              />
              <Tab.Screen
                name="Scan"
                component={ScanScreen}
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
              />
              <Tab.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                  tabBarLabel: "Products",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="food-variant"
                      size={size}
                      color={color}
                    />
                  )
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
