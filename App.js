import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/views/navigation/tabs";
import { Order, Restaurant, Cart } from "./src/views/screens";
import DetailFood from "./src/views/screens/DetailFood";


const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Homescreen" component={Tabs} />
          <Stack.Screen name="DetailFood" component={DetailFood} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;