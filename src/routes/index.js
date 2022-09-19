import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome/index";
import SignIn from "../pages/SignIn/index";
import HomePage from "../pages/HomePage/index";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
