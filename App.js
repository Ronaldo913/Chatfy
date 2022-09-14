import React from "react";
import { StatusBar, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#2B0839" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
